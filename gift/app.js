(function () {
  "use strict";
  var G = window.GIFT, S = G.strings, app = document.getElementById("app");
  var st;
  function esc(x) { return String(x).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function won(n) { return n.toLocaleString("ko-KR") + "원"; }
  function img(pose) { return '<div class="stage"><img class="butler" src="/assets/gasungbi/' + pose + '.webp" alt=""></div>'; }
  function top() { return '<div class="top"><span class="brand">Uselessly Yours<small>' + esc(S.title) + "</small></span></div>"; }

  function intro() {
    st = { i: 0, ans: {} };
    app.innerHTML = top() + '<div class="intro">' + img("stand") +
      '<div class="bubble">' + esc(S.intro).replace(/\n/g, "<br>") + "</div>" +
      '<button class="btn primary" data-start="1">' + esc(S.start) + "</button></div>";
  }
  function ask() {
    var q = G.questions[st.i], pct = Math.round(st.i / G.questions.length * 100);
    app.innerHTML = top() + '<div class="progress"><i style="width:' + pct + '%"></i></div>' + img(st.i % 2 ? "chin" : "stand") +
      '<div class="bubble"><span class="lead">' + (st.i + 1) + " / " + G.questions.length + "</span>" + esc(q.text) + "</div>" +
      '<div class="choices">' + q.options.map(function (o, k) { return '<button class="btn" data-opt="' + k + '">' + esc(o.text) + "</button>"; }).join("") +
      (st.i ? '<button class="btn link" data-back="1">이전 질문</button>' : "") + "</div>";
  }
  function pick(k) {
    st.ans[G.questions[st.i].id] = k;
    st.i++;
    if (st.i < G.questions.length) return ask();
    app.innerHTML = top() + img("calc") + '<div class="bubble">' + esc(S.calc) + "</div>";
    setTimeout(result, 1400);
  }
  // 예산으로 거른 뒤, 고른 선택지의 태그와 겹칠 때마다 질문 가중치만큼 점수를 줍니다.
  function rank() {
    var bq = G.questions.filter(function (q) { return q.id === "budget"; })[0], b = bq.options[st.ans.budget] || {};
    return G.products.filter(function (p) { return (b.min == null || p.price >= b.min) && (b.max == null || p.price <= b.max); })
      .map(function (p) {
        var sc = Math.random() * 0.5;
        G.questions.forEach(function (q) {
          var o = q.options[st.ans[q.id]]; if (!o || !o.tags) return;
          o.tags.forEach(function (t) { if (p.tags.indexOf(t) > -1) sc += G.weights[q.id] || 1; });
        });
        return { p: p, sc: sc };
      }).sort(function (a, b) { return b.sc - a.sc; });
  }
  function buyBtn(p, cls) {
    return p.url ? '<a class="btn ' + cls + '" href="' + esc(p.url) + '" target="_blank" rel="sponsored noopener">' + esc(S.buy) + "</a>"
      : '<span class="btn ' + cls + '" aria-disabled="true">' + esc(S.noLink) + "</span>";
  }
  function result() {
    var r = rank();
    if (!r.length) {
      app.innerHTML = top() + img("chin") + '<div class="bubble">' + esc(S.none) + '</div><button class="btn primary" data-back="1">예산 다시 고르기</button>';
      st.i = G.questions.findIndex(function (q) { return q.id === "budget"; }) + 1;
      return;
    }
    var m = r[0].p, also = r.slice(1, 1 + G.settings.alternates);
    var occ = G.questions.filter(function (q) { return q.id === "occ"; })[0].options[st.ans.occ].tags[0];
    var lines = G.cards[occ] || G.cards.random, card = lines[Math.floor(Math.random() * lines.length)];
    app.innerHTML = top() + img("receipt") +
      '<div class="card main"><span class="lead">' + esc(S.resultLead) + "</span>" +
      (m.img ? '<img class="pimg" src="' + esc(m.img) + '" alt="">' : '<div class="ph">상품 사진</div>') +
      "<h2>" + esc(m.name) + '</h2><p class="why">' + esc(m.line) + '</p><span class="price">약 ' + won(m.price) + "</span>" + buyBtn(m, "primary") + "</div>" +
      '<div class="gcard"><span class="lead">' + esc(S.cardTitle) + "</span>" + esc(card) + "</div>" +
      '<div class="also"><h3>' + esc(S.alsoTitle) + "</h3>" + also.map(function (x) {
        return x.p.url ? '<a href="' + esc(x.p.url) + '" target="_blank" rel="sponsored noopener"><span>' + esc(x.p.name) + "</span><span>" + won(x.p.price) + "</span></a>"
          : "<a><span>" + esc(x.p.name) + "</span><span>" + won(x.p.price) + "</span></a>";
      }).join("") + "</div>" +
      '<div class="actions"><button class="btn strong" data-retry="1">' + esc(S.retry) + '</button><button class="btn" data-share="1">' + esc(S.share) + "</button></div>" +
      '<p class="toast" id="toast"></p>';
  }
  app.addEventListener("click", function (e) {
    var t = e.target.closest("button"); if (!t) return;
    if (t.dataset.start || t.dataset.retry) return t.dataset.retry ? intro() : ask();
    if (t.dataset.opt != null) return pick(parseInt(t.dataset.opt, 10));
    if (t.dataset.back) { st.i = Math.max(0, st.i - 1); return ask(); }
    if (t.dataset.share) {
      var done = function () { document.getElementById("toast").textContent = S.copied; };
      try { navigator.clipboard.writeText(location.href.split("#")[0]).then(done, done); } catch (err) { done(); }
    }
  });
  intro();
})();
