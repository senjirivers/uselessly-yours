(function () {
  "use strict";
  var G = window.GIFT, S = G.strings, app = document.getElementById("app");
  var st;
  function esc(x) { return String(x).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function won(n) { return n.toLocaleString("ko-KR") + "원"; }
  function img(pose) { return '<div class="stage"><img class="butler" src="/assets/gasungbi/' + pose + '.webp" alt=""></div>'; }
  function top() { return '<div class="top"><span class="brand">Uselessly Yours<small>' + esc(S.title) + "</small></span></div>"; }
  function q(id) { return G.questions.filter(function (x) { return x.id === id; })[0]; }
  function picked(id) { return q(id).options[st.ans[id]] || {}; }
  function rnd(a) { return a[Math.floor(Math.random() * a.length)]; }

  function intro() {
    st = { i: 0, ans: {}, list: [], k: 0, max: 1, page: 0 };
    talk();
  }
  // 시작 전 독백: 몇 장에 나눠서 한 장씩 넘깁니다.
  function talk() {
    var last = st.page >= S.intro.length - 1;
    app.innerHTML = top() + '<div class="intro">' + img(st.page % 2 ? "chin" : "stand") +
      '<div class="bubble"><span class="lead">' + (st.page + 1) + " / " + S.intro.length + "</span>" + esc(S.intro[st.page]).replace(/\n/g, "<br>") + "</div>" +
      (last ? '<button class="btn primary" data-start="1">' + esc(S.start) + "</button>"
        : '<button class="btn primary" data-more="1">' + esc(S.more) + '</button><button class="btn link" data-start="1">' + esc(S.skip) + "</button>") + "</div>";
  }
  function ask() {
    var qq = G.questions[st.i], pct = Math.round(st.i / G.questions.length * 100);
    app.innerHTML = top() + '<div class="progress"><i style="width:' + pct + '%"></i></div>' + img(st.i % 2 ? "chin" : "stand") +
      '<div class="bubble"><span class="lead">' + (st.i + 1) + " / " + G.questions.length + "</span>" + (qq.pre ? '<span class="qpre">' + esc(qq.pre).replace(/\n/g, "<br>") + "</span>" : "") + '<strong class="qtext">' + esc(qq.text) + "</strong></div>" +
      '<div class="choices">' + qq.options.map(function (o, k) { return '<button class="btn" data-opt="' + k + '">' + esc(o.text) + "</button>"; }).join("") +
      (st.i ? '<button class="btn link" data-back="1">이전 질문</button>' : "") + "</div>";
  }
  function pick(k) {
    st.ans[G.questions[st.i].id] = k;
    st.i++;
    if (st.i < G.questions.length) return ask();
    st.list = rank(); st.k = 0;
    st.max = G.questions.reduce(function (a, x) { var o = x.options[st.ans[x.id]]; return a + (o && o.tags && o.tags.length ? (G.weights[x.id] || 1) : 0); }, 0) || 1;
    if (!st.list.length) return empty(S.none);
    app.innerHTML = top() + img("calc") + '<div class="bubble">' + esc(S.calc).replace(/\n/g, "<br>") + "</div>";
    setTimeout(sim, 1400);
  }
  // 예산으로 거른 뒤, 고른 선택지의 태그와 겹칠 때마다 질문 가중치만큼 점수를 줍니다.
  function rank() {
    var b = picked("budget");
    function dist(p) { return b.min != null && p.price < b.min ? b.min - p.price : b.max != null && p.price > b.max ? p.price - b.max : 0; }
    // 예산 안에 상품이 3개보다 적으면 가장 가까운 가격의 상품으로 채웁니다.
    var pool = G.products.slice().sort(function (x, y) { return dist(x) - dist(y); });
    pool = pool.filter(function (p, i) { return dist(p) === 0 || i < 3; });
    return pool
      .map(function (p) {
        var sc = 0;
        G.questions.forEach(function (x) {
          var o = x.options[st.ans[x.id]]; if (!o || !o.tags) return;
          if (o.tags.some(function (t) { return p.tags.indexOf(t) > -1; })) sc += G.weights[x.id] || 1;
        });
        return { p: p, sc: sc + Math.random() * 0.4 };
      }).sort(function (a, b) { return b.sc - a.sc; });
  }
  // 만족도: 맞은 가중치 비율을 55~97% 로 펴고, 회의적이라 살짝 깎습니다.
  function score(x) { return Math.max(31, Math.min(97, Math.round(55 + 42 * Math.min(1, x.sc / st.max) - 3))); }
  function script(p, pct) {
    if (pct < 70) return rnd(G.reactions.low);
    var want = (picked("react").tags || [])[0], kinds = ["useful", "touching", "funny", "fancy"];
    var kind = p.tags.indexOf(want) > -1 ? want : kinds.filter(function (k) { return p.tags.indexOf(k) > -1; })[0] || "useful";
    return rnd(G.reactions[kind]);
  }
  function empty(msg) {
    st.i = G.questions.indexOf(q("budget"));
    app.innerHTML = top() + img("chin") + '<div class="bubble">' + esc(msg) + '</div><button class="btn primary" data-reask="1">예산 다시 고르기</button>' +
      '<button class="btn link" data-retry="1">' + esc(S.retry) + "</button>";
  }
  function photo(p) { return p.img ? '<img class="pimg" src="' + esc(p.img) + '" alt="">' : '<div class="ph">상품 사진</div>'; }
  function sim() {
    if (st.k >= st.list.length) return empty(S.noMore);
    var x = st.list[st.k], p = x.p, pct = x.pct = score(x), lines = script(p, pct);
    var verdict = pct >= 85 ? S.verdictHigh : pct >= 70 ? S.verdictMid : S.verdictLow;
    app.innerHTML = top() + img(pct >= 70 ? "receipt" : "chin") +
      '<div class="card"><span class="lead">' + esc(S.simLead.replace("{n}", st.k + 1)) + "</span>" + photo(p) +
      "<h2>" + esc(p.name) + '</h2><span class="price">약 ' + won(p.price) + "</span>" +
      '<ol class="script">' + lines.map(function (l, i) { return '<li style="animation-delay:' + (0.4 + i * 0.9) + 's">' + esc(l) + "</li>"; }).join("") + "</ol>" +
      '<div class="meter" style="animation-delay:3.1s"><span>' + esc(S.meter) + "</span><b>" + pct + '%</b><i><u style="width:' + pct + '%"></u></i></div>' +
      '<p class="why verdict" style="animation-delay:3.4s">' + esc(verdict) + "</p></div>" +
      '<div class="choices"><button class="btn primary" data-take="1">' + esc(S.take) + '</button>' +
      '<button class="btn strong" data-next="1">' + esc(S.next) + '</button>' +
      '<button class="btn link" data-next="1">' + esc(S.owned) + "</button></div>";
  }
  function cardLine() { var occ = (picked("occ").tags || [])[0]; return rnd(G.cards[occ] || G.cards.random); }
  function buyBtn(p, cls) {
    return p.url ? '<a class="btn ' + cls + '" href="' + esc(p.url) + '" target="_blank" rel="sponsored noopener">' + esc(S.buy) + "</a>"
      : '<span class="btn ' + cls + '" aria-disabled="true">' + esc(S.noLink) + "</span>";
  }
  function done() {
    var x = st.list[st.k], m = x.p, also = st.list.filter(function (y, i) { return i !== st.k; }).slice(0, G.settings.alternates);
    app.innerHTML = top() + img("receipt") +
      '<div class="card main"><span class="lead">' + esc(S.doneLead) + " · " + esc(S.meter) + " " + x.pct + "%</span>" + photo(m) +
      "<h2>" + esc(m.name) + '</h2><p class="why">' + esc(m.line) + '</p><span class="price">약 ' + won(m.price) + "</span>" + buyBtn(m, "primary") + "</div>" +
      '<div class="gcard"><span class="lead">' + esc(S.cardTitle) + '</span><span id="cardline">' + esc(cardLine()) + '</span>' +
      '<button class="btn link" data-card="1">' + esc(S.otherCard) + "</button></div>" +
      '<div class="also"><h3>' + esc(S.alsoTitle) + "</h3>" + also.map(function (y) {
        return (y.p.url ? '<a href="' + esc(y.p.url) + '" target="_blank" rel="sponsored noopener">' : "<a>") + "<span>" + esc(y.p.name) + "</span><span>" + won(y.p.price) + "</span></a>";
      }).join("") + "</div>" +
      '<div class="actions"><button class="btn strong" data-retry="1">' + esc(S.retry) + '</button><button class="btn" data-share="1">' + esc(S.share) + "</button></div>" +
      '<p class="toast" id="toast"></p>';
  }
  app.addEventListener("click", function (e) {
    var t = e.target.closest("button"); if (!t) return;
    var d = t.dataset;
    if (d.retry) return intro();
    if (d.start) return ask();
    if (d.more) { st.page++; return talk(); }
    if (d.opt != null) return pick(parseInt(d.opt, 10));
    if (d.back) { st.i = Math.max(0, st.i - 1); return ask(); }
    if (d.reask) return ask();
    if (d.next) { st.k++; window.scrollTo(0, 0); return sim(); }
    if (d.take) { window.scrollTo(0, 0); return done(); }
    if (d.card) { document.getElementById("cardline").textContent = cardLine(); return; }
    if (d.share) {
      var ok = function () { document.getElementById("toast").textContent = S.copied; };
      try { navigator.clipboard.writeText(location.href.split("#")[0]).then(ok, ok); } catch (err) { ok(); }
    }
  });
  intro();
})();
