/* 추천 엔진: 질문 하나가 여러 태그에 점수를 줍니다. DOM과 무관해서 테스트할 수 있습니다. */
(function (root) {
  "use strict";
  function sum(a) { return a.reduce(function (x, y) { return x + y; }, 0); }
  function match(q, p) {
    var y = 0, n = 0;
    (q.yes || []).forEach(function (t) { if (p.tags.indexOf(t) > -1) y++; });
    (q.no || []).forEach(function (t) { if (p.tags.indexOf(t) > -1) n++; });
    return { y: Math.min(y, 2), n: Math.min(n, 2) };
  }
  // 상황형(선택지) 질문: q.options = [{text, tags}]. 답은 "o0", "o1"… 또는 "none"(해당 없음).
  function optMatch(opt, p) {
    var y = 0;
    (opt.tags || []).forEach(function (t) { if (p.tags.indexOf(t) > -1) y++; });
    return Math.min(y, 2);
  }
  function choiceFactor(q, p, ans) {
    var f = 1, k = ans === "none" ? -1 : parseInt(String(ans).slice(1), 10);
    q.options.forEach(function (o, j) {
      var m = optMatch(o, p);
      if (k < 0) f *= Math.pow(0.8, m);
      else if (j === k) f *= Math.pow(2.6, m);
      else f *= Math.pow(0.75, m);
    });
    return f;
  }
  function qTags(q) {
    return q.options ? q.options.reduce(function (a, o) { return a.concat(o.tags || []); }, []) : q.yes.concat(q.no || []);
  }
  function factor(m, ans) {
    if (ans === "yes") return Math.pow(2.4, m.y) * Math.pow(0.5, m.n);
    if (ans === "no") return Math.pow(0.45, m.y) * Math.pow(1.6, m.n);
    if (ans === "maybe") return Math.pow(1.5, m.y) * Math.pow(0.75, m.n);
    return 1;
  }
  function apply(Q, w, q, ans) {
    var out = Q.products.map(function (p, i) { return w[i] * (q.options ? choiceFactor(q, p, ans) : factor(match(q, p), ans)); });
    var m = Math.max.apply(null, out);
    return m > 0 ? out.map(function (x) { return x / m; }) : out;
  }
  function pick(Q, w, askedIds, rnd) {
    var total = sum(w), cands = [];
    var steps = (Q.settings && Q.settings.stageSteps) || [4, 8];
    var lastQ = null, lastTags = {};
    if (askedIds.length) {
      Q.questions.forEach(function (q) { if (q.id === askedIds[askedIds.length - 1]) lastQ = q; });
      if (lastQ) qTags(lastQ).forEach(function (t) { lastTags[t] = 1; });
    }
    var choiceAsked = Q.questions.filter(function (q) { return q.options && askedIds.indexOf(q.id) > -1; }).length;
    var n = askedIds.length, maxStage = n < steps[0] ? 1 : n < steps[1] ? 2 : 3;
    function gather(limit) {
    Q.questions.forEach(function (q) {
      if (askedIds.indexOf(q.id) > -1) return;
      if ((q.stage || 3) > limit) return;
      if (q.options && choiceAsked >= ((Q.settings && Q.settings.maxChoice) || 4)) return;
      var gini;
      if (q.options) {
        var groups = q.options.map(function () { return 0; }), rest = 0;
        Q.products.forEach(function (p, i) {
          var bi = -1, bm = 0;
          q.options.forEach(function (o, j) { var m = optMatch(o, p); if (m > bm) { bm = m; bi = j; } });
          if (bi < 0) rest += w[i]; else groups[bi] += w[i];
        });
        gini = 1 - (sum(groups.map(function (g) { return Math.pow(g / total, 2); })) + Math.pow(rest / total, 2));
      } else {
        var pos = 0, neg = 0;
        Q.products.forEach(function (p, i) {
          var m = match(q, p), net = m.y - m.n;
          if (net > 0) pos += w[i]; else if (net < 0) neg += w[i];
        });
        var a = pos / total, b = neg / total, c = 1 - a - b;
        gini = 1 - (a * a + b * b + c * c);
      }
      // 직전 질문과 같은 태그를 다루는 질문을 우대해서, 화제가 갑자기 튀지 않고 이어지게 합니다.
      var rel = 0;
      qTags(q).forEach(function (t) { if (lastTags[t]) rel++; });
      if (gini > 0.0005) cands.push({ q: q, s: gini * (1 + 0.7 * Math.min(rel, 3)) });
    });
    }
    gather(maxStage);
    if (!cands.length) gather(3);
    if (!cands.length) return null;
    cands.sort(function (x, y) { return y.s - x.s; });
    // 점수가 비슷한 후보 여러 개 중에서 점수에 비례해 뽑아서, 같은 질문만 계속 나오지 않고 골고루 돌게 합니다.
    var cut = cands[0].s * 0.55, pool = cands.filter(function (c) { return c.s >= cut; }).slice(0, 12), tw = 0;
    pool.forEach(function (c) { tw += c.s; });
    var r = (rnd ? rnd() : Math.random()) * tw;
    for (var i = 0; i < pool.length; i++) { r -= pool[i].s; if (r <= 0) return pool[i].q; }
    return pool[pool.length - 1].q;
  }
  root.QuizEngine = { apply: apply, pick: pick };
})(typeof window !== "undefined" ? window : globalThis);
