(function () {
  "use strict";
  var G = window.GIFT, S = G.strings, app = document.getElementById("app");
  var st;
  function esc(x) { return String(x).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function won(n) { return n.toLocaleString("ko-KR") + "원"; }
  function img(pose) { return '<div class="stage"><img class="butler" src="/assets/gasungbi/' + pose + '.webp" alt=""></div>'; }
  // 배경음악: /useless 와 같은 음소거 설정(uy-muted)을 씁니다. 시작 버튼을 눌러야 재생됩니다.
  var bgm = null, muted = false;
  try { muted = localStorage.getItem("uy-muted") === "1"; } catch (e) {}
  function play() { var p = bgm.play(); if (p && p.catch) p.catch(function () {}); }
  function startMusic() {
    if (!bgm) { bgm = new Audio(G.settings.music.src); bgm.loop = true; bgm.volume = G.settings.music.volume; }
    bgm.muted = muted; play();
  }
  function mark() { var b = document.getElementById("mute"); if (b) { b.textContent = muted ? S.musicOff : S.musicOn; b.setAttribute("aria-pressed", muted ? "true" : "false"); } }
  function toggleMusic() {
    muted = !muted;
    try { localStorage.setItem("uy-muted", muted ? "1" : "0"); } catch (e) {}
    if (bgm) { bgm.muted = muted; if (!muted) play(); }
    mark();
  }
  // 상품 페이지로 넘어갈 때는 음악을 멈춥니다. 저장된 음소거 설정은 건드리지 않습니다.
  function stopForLink() { if (bgm) { try { bgm.pause(); } catch (e) {} } muted = true; mark(); }
  function top(noMusic) {
    return '<div class="top"><span class="brand">Uselessly Yours</span>' +
      (noMusic ? "" : '<span class="topr"><button class="mute" id="mute" data-mute="1" aria-pressed="' + muted + '">' + esc(muted ? S.musicOff : S.musicOn) + "</button></span>") + "</div>";
  }
  function q(id) { return G.questions.filter(function (x) { return x.id === id; })[0]; }
  function picked(id) { return q(id).options[st.ans[id]] || {}; }
  // 관계 키: 가족은 부모님·친척·형제자매로 한 번 더 나뉩니다.
  function relKey() {
    var r = (picked("rel").tags || [])[0];
    return r === "kin" ? (picked("fam").tags || [])[0] || "relative" : r;
  }
  // 관계에 맞게 말투나 보기 문구를 바꾼 질문(G.by). 보기의 개수와 순서는 그대로입니다.
  function qv(id) {
    var base = q(id), v = ((G.by || {})[relKey()] || {})[id];
    if (!v) return base;
    var o = {}; Object.keys(base).forEach(function (k) { o[k] = base[k]; });
    if (v.pre != null) o.pre = v.pre;
    if (v.text) o.text = v.text;
    if (v.opts) o.options = base.options.map(function (x, i) { var y = {}; Object.keys(x).forEach(function (k) { y[k] = x[k]; }); if (v.opts[i]) y.text = v.opts[i]; return y; });
    return o;
  }
  // 글자가 한 글자씩 써지는 말풍선입니다(/useless 와 같은 방식). 말풍선을 누르면 바로 끝까지 보여줍니다. **굵게** 를 지원합니다.
  var timer = null;
  function rich(t) { return esc(t).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, '<br><span class="gap"></span>'); }
  function typeInto(el, text, ms, minH) {
    var i = 0, reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    clearInterval(timer);
    var bx = el.closest(".bubble");
    if (bx) { bx.style.minHeight = "0"; el.innerHTML = rich(text); bx.style.minHeight = Math.max(bx.offsetHeight, minH || 0) + "px"; el.innerHTML = ""; }
    el.setAttribute("aria-label", text.replace(/\*\*/g, ""));
    if (reduce) { el.innerHTML = rich(text); return; }
    function done() { clearInterval(timer); el.innerHTML = rich(text); }
    timer = setInterval(function () {
      i++; var part = text.slice(0, i);
      if ((part.match(/\*\*/g) || []).length % 2) part += "**";
      el.innerHTML = rich(part);
      if (i >= text.length) done();
    }, ms || 24);
    if (el._skip) el.removeEventListener("click", el._skip);
    el._skip = function () { if (i < text.length) { i = text.length; done(); } };
    el.addEventListener("click", el._skip);
  }
  function rnd(a) { return a[Math.floor(Math.random() * a.length)]; }

  // 처음엔 실루엣과 제목만 보여주고, 시작 버튼을 누르면 음악이 켜지며 독백이 이어집니다.
  function cover() {
    st = { i: 0, ans: {}, asked: [G.route.core[0]], list: [], k: 0, max: 1, page: 0 };
    app.innerHTML = top(true) + '<div class="intro"><div class="stage silhouette"><img class="butler" src="/assets/gasungbi/silhouette.webp" alt=""></div>' +
      '<div><h1 class="intro-title">' + esc(S.headline) + '</h1><p class="intro-lead">' + esc(S.tagline) + "</p></div>" +
      '<button class="btn primary" data-open="1">' + esc(S.open) + "</button></div>";
    var h = document.querySelector(".intro-title"), px = parseFloat(getComputedStyle(h).fontSize);
    while (h.scrollWidth > h.parentNode.clientWidth && px > 16) { px -= 1; h.style.fontSize = px + "px"; }
  }
  function intro() {
    st = { i: 0, ans: {}, asked: [G.route.core[0]], list: [], k: 0, max: 1, page: 0 };
    talk();
  }
  // 시작 전 독백: 몇 장에 나눠서 한 장씩 넘깁니다.
  var introH = null;
  function talk() {
    var last = st.page >= S.intro.length - 1, pose = S.introPose[st.page] || "stand",
      btns = last ? '<button class="btn primary" data-start="1">' + esc(S.start) + '</button><button class="btn link" tabindex="-1" aria-hidden="true" style="visibility:hidden">' + esc(S.skip) + "</button>"
        : '<button class="btn primary" data-more="1">' + esc(S.more) + '</button><button class="btn link" data-start="1">' + esc(S.skip) + "</button>";
    var im = document.querySelector(".intro .butler"), box = document.getElementById("introbtn");
    // 페이지를 넘길 때는 화면을 다시 그리지 않고 그림·글·버튼만 바꿔서 깜빡임을 막습니다.
    if (im && box) {
      var src = "/assets/gasungbi/" + pose + ".webp";
      if (im.getAttribute("src") !== src) im.setAttribute("src", src);
      box.innerHTML = btns;
    } else {
      app.innerHTML = top() + '<div class="intro">' + img(pose) +
        '<div class="bubble" aria-live="polite"><span id="bub"></span></div><div id="introbtn" class="introbtn">' + btns + "</div></div>";
    }
    // 소개는 가장 긴 글에 맞춰 말풍선 높이를 모든 페이지에서 똑같이 맞춥니다(그림이 위아래로 움직이지 않게).
    if (introH == null) {
      var bb = document.getElementById("bub"), bx = bb.closest(".bubble"); introH = 0; bx.style.minHeight = "0";
      S.intro.forEach(function (t) { bb.innerHTML = rich(t); introH = Math.max(introH, bx.offsetHeight); });
      bb.innerHTML = "";
    }
    typeInto(document.getElementById("bub"), S.intro[st.page], 0, introH);
  }
  // 소개 그림은 미리 받아 둡니다.
  (S.introPose || []).concat(["stand", "chin"]).forEach(function (n) { new Image().src = "/assets/gasungbi/" + n + ".webp"; });
  function ask(still) {
    var qq = qv(st.asked[st.i]), total = Math.min(G.route.total, st.i + 1 + left().length), pct = Math.round(st.i / total * 100);
    app.innerHTML = top() + img(st.i % 2 ? "chin" : "stand").replace('class="stage"', 'class="stage short"') +
      '<div class="bubble" aria-live="polite"><div class="prog" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '"><i style="width:' + pct + '%"></i></div><span id="bub"></span></div>' +
      '<div class="choices">' + qq.options.map(function (o, k) {
        if (!qq.multi) return '<button class="btn" data-opt="' + k + '">' + esc(o.text) + "</button>";
        var on = (st.ans[qq.id] || []).indexOf(k) > -1;
        return '<button class="btn shopt' + (on ? " on" : "") + '" data-tog="' + k + '">' + esc(o.text) + "</button>";
      }).join("") + (qq.multi ? '<button class="btn primary" data-multi="1"' + ((st.ans[qq.id] || []).length ? "" : " disabled") + ">다음</button>" : "") +
      (st.i ? '<button class="btn link" data-back="1">한 칸 전으로</button>' : "") + "</div>";
    var line = (qq.pre ? qq.pre + "\n" : "") + "**" + qq.text + "**";
    // 복수 선택을 누를 때는 글을 다시 쓰지 않고 바로 보여줍니다.
    if (still) document.getElementById("bub").innerHTML = rich(line); else typeInto(document.getElementById("bub"), line);
  }
  function pick(k) {
    st.ans[st.asked[st.i]] = k;
    advance();
  }
  // 답이 바뀌면 그 뒤에 골라 둔 질문과 답은 버리고, 지금까지의 답으로 다음 질문을 다시 고릅니다.
  function advance() {
    st.asked.slice(st.i + 1).forEach(function (id) { delete st.ans[id]; });
    st.asked = st.asked.slice(0, st.i + 1);
    st.i++;
    var nx = st.i < G.route.total ? next() : null;
    if (nx) { st.asked.push(nx); return ask(); }
    st.list = rank(); st.k = 0;
    analysis();
  }
  // 지금까지의 답으로 아직 물을 만한 질문들: 이미 물었거나, 관계에 안 맞거나, 앞의 답이 이미 알려 준 질문은 뺍니다.
  function left() {
    var R = G.route, rk = relKey(), B = (R.byRel || {})[rk] || {}, raw = (picked("rel").tags || [])[0], cov = [];
    G.questions.forEach(function (x) {
      [].concat(x.multi && st.ans[x.id] ? st.ans[x.id] : []).forEach(function (k) { cov = cov.concat((x.options[k] || {}).covers || []); });
    });
    return R.core.concat(R.pool).filter(function (id) {
      return st.asked.indexOf(id) < 0 && (B.skip || []).indexOf(id) < 0 && cov.indexOf(id) < 0 && (!(R.only || {})[id] || R.only[id] === raw);
    });
  }
  // core 질문은 순서대로, 그 뒤에는 각 보기를 골랐을 때 상위 3개 후보가 가장 다양하게 갈리는 질문(관계에 맞는 질문은 가산점)을 고릅니다.
  function next() {
    var R = G.route, ids = left(), core = ids.filter(function (id) { return R.core.indexOf(id) > -1; });
    if (core.length) return core[0];
    var B = (R.byRel || {})[relKey()] || {}, best = null, bs = -1;
    ids.forEach(function (id) {
      var seen = {}, x = q(id);
      x.options.forEach(function (o, k) {
        var t = {}; Object.keys(st.ans).forEach(function (j) { t[j] = st.ans[j]; }); t[id] = x.multi ? [k] : k;
        rank(t, true).slice(0, 3).forEach(function (y) { seen[y.p.name] = 1; });
      });
      var sc = Object.keys(seen).length + Math.random() * 0.5 + ((B.prefer || []).indexOf(id) > -1 ? 1.5 : 0);
      if (sc > bs) { bs = sc; best = id; }
    });
    return best;
  }
  // 질문이 끝나면 이번 선물의 성격을 먼저 진단해 보여주고, 그다음 선물 시뮬레이션으로 넘어갑니다.
  function analysis() {
    var occ = (picked("occ").tags || [])[0], rel = relKey();
    var c = G.character.occ[occ] || G.character.occ.random;
    var unk = G.questions.filter(function (x) {
      return [].concat(st.ans[x.id]).some(function (k) { return x.options[k] && x.options[k].unk; });
    }).length, R = G.risk;
    var risk = Math.max(5, Math.min(97, R.base + R.perUnknown * unk + (R.rel[rel] || 0)));
    var tier = R.tiers.filter(function (t) { return risk <= t[0]; })[0] || R.tiers[R.tiers.length - 1];
    app.innerHTML = top() + img(risk > 55 ? "head" : "chin") +
      '<div class="card"><span class="lead">' + esc(S.analysisLead) + '</span><h2>' + esc(c[0]) + '</h2><p class="why">' + esc(c[1]) + '</p>' +
      (G.character.rel[rel] ? '<p class="why">' + esc(G.character.rel[rel]) + '</p>' : "") +
      '<div class="meter"><span>' + esc(S.riskLabel) + '</span><b>' + risk + '%</b><i><u style="width:' + risk + '%"></u></i></div>' +
      '<p class="why">' + esc(tier[1]) + '</p></div>' +
      '<button class="btn primary" data-go="1">' + esc(S.analysisNext) + '</button>';
  }
  function begin() {
    // 만족도의 분모: 답한 질문마다, 카탈로그에서 얻을 수 있는 가장 높은 점수를 합친 값입니다(아무도 못 맞추는 답은 세지 않습니다).
    var df = {}; G.products.forEach(function (p) { p.tags.forEach(function (t) { df[t] = (df[t] || 0) + 1; }); });
    st.max = G.questions.reduce(function (a, x) {
      var best = 0;
      [].concat(x.multi ? st.ans[x.id] || [] : st.ans[x.id] == null ? [] : [st.ans[x.id]]).forEach(function (k) {
        ((x.options[k] || {}).tags || []).forEach(function (t) { if (df[t]) best = Math.max(best, 0.25 + 0.75 * (1 - df[t] / G.products.length)); });
      });
      return a + (G.weights[x.id] || 1) * best;
    }, 0) || 1;
    if (!st.list.length) return empty(S.none);
    app.innerHTML = top() + img("calc") + '<div class="bubble" aria-live="polite"><span id="bub"></span></div>';
    typeInto(document.getElementById("bub"), S.calc);
    setTimeout(sim, 2600);
  }
  // 예산으로 거른 뒤, 고른 선택지의 태그와 겹칠 때마다 질문 가중치만큼 점수를 줍니다.
  function rank(ans, quiet) {
    ans = ans || st.ans;
    var S = [], EX = [];
    G.questions.forEach(function (x) {
      [].concat(x.multi ? (ans[x.id] || []) : ans[x.id] == null ? [] : [ans[x.id]]).forEach(function (k) { var o = x.options[k]; if (!o) return; S = S.concat(o.tags || []); EX = EX.concat(o.ex || []); });
    });
    // 피하는 것(ex)은 빼고, 반려동물·운동·게임·사진 같은 취미용 상품은 그 답을 고른 사람에게만 보여줍니다.
    var ok = G.products.filter(function (p) {
      if (p.tags.some(function (t) { return EX.indexOf(t) > -1; })) return false;
      return (G.gate || []).every(function (g) { return p.tags.indexOf(g) < 0 || S.indexOf(g) > -1; });
    });
    var df = {};
    G.products.forEach(function (p) { p.tags.forEach(function (t) { df[t] = (df[t] || 0) + 1; }); });
    var pool = ok;
    return pool
      .map(function (p) {
        var sc = 0;
        G.questions.forEach(function (x) {
          // 거의 모든 상품에 붙은 태그(친구, 20대 등)는 점수를 덜 주고, 드문 태그일수록 크게 줍니다. 복수 선택은 가장 잘 맞는 보기 하나만 셉니다.
          var best = 0;
          [].concat(x.multi ? ans[x.id] || [] : ans[x.id] == null ? [] : [ans[x.id]]).forEach(function (k) {
            ((x.options[k] || {}).tags || []).forEach(function (t) { if (p.tags.indexOf(t) > -1) best = Math.max(best, 0.25 + 0.75 * (1 - (df[t] || 0) / G.products.length)); });
          });
          sc += (G.weights[x.id] || 1) * best;
        });
        return { p: p, sc: sc + (p.boost || 0) + (quiet ? 0 : Math.random() * 0.15) };
      }).sort(function (a, b) { return b.sc - a.sc; });
  }
  // 만족도: 맞은 가중치 비율을 55~97% 로 펴고, 회의적이라 살짝 깎습니다.
  function score(x) { return Math.max(31, Math.min(97, Math.round(55 + 42 * Math.min(1, x.sc / (st.max * 0.7)) - 3))); }
  function script(p, pct) {
    if (pct < 70) return rnd(G.reactions.low);
    return p.rx || rnd(G.reactions.useful);
  }
  function empty(msg) {
    app.innerHTML = top() + img("chin") + '<div class="bubble" aria-live="polite"><span id="bub"></span></div><button class="btn primary" data-retry="1">' + esc(S.retry) + "</button>";
    typeInto(document.getElementById("bub"), msg);
  }
  function photo(p) { return p.img ? '<img class="pimg" src="' + esc(p.img) + '" alt="">' : '<div class="ph">상품 사진</div>'; }
  // 마지막 화면 하나에 반응 시뮬레이션, 구매 버튼, 카드 만들기, 다른 후보 보기까지 모았습니다.
  function sim() {
    if (st.k >= st.list.length) return empty(S.noMore);
    var x = st.list[st.k], p = x.p, pct = x.pct = score(x), lines = script(p, pct);
    var verdict = pct >= 85 ? S.verdictHigh : pct >= 70 ? S.verdictMid : S.verdictLow;
    var also = st.list.filter(function (y, i) { return i !== st.k; }).slice(0, G.settings.alternates);
    app.innerHTML = top() + img(pct >= 70 ? "receipt" : "head") +
      '<div class="card main"><span class="lead notice">' + esc(S.notice) + "</span>" + photo(p) +
      "<h2>" + esc(p.name) + '</h2><p class="why">' + esc(p.line) + "</p>" +
      '<ol class="script">' + lines.map(function (l, i) { return '<li style="animation-delay:' + (0.4 + i * 0.9) + 's">' + esc(l) + "</li>"; }).join("") + "</ol>" +
      '<div class="meter" style="animation-delay:3.1s"><span>' + esc(S.meter) + "</span><b>" + pct + '%</b><i><u style="width:' + pct + '%"></u></i></div>' +
      '<p class="why verdict" style="animation-delay:3.4s">' + esc(verdict) + "</p>" + buyBtn(p, "primary") + "</div>" +
      '<div class="gcard" id="cardbox"><button class="btn strong" data-mk="1">' + esc(S.cardMake) + "</button></div>" +
      '<div class="choices"><button class="btn strong" data-next="1">' + esc(S.next) + '</button>' +
      '<button class="btn link" data-next="1">' + esc(S.owned) + "</button></div>" +
      '<div class="also"><h3>' + esc(S.alsoTitle) + "</h3>" + also.map(function (y) {
        return (y.p.url ? '<a href="' + esc(y.p.url) + '" target="_blank" rel="sponsored noopener">' : "<a>") + "<span>" + esc(y.p.name) + "</span></a>";
      }).join("") + "</div>" +
      '<div class="actions"><button class="btn strong" data-retry="1">' + esc(S.retry) + '</button><button class="btn" data-share="1">' + esc(S.share) + "</button></div>" +
      '<a class="btn strong" href="/hub/?from=gift">' + esc(S.other) + "</a>" +
      '<p class="toast" id="toast"></p>';
  }
  // 카드 편지: 이유·관계·나이대로 세 줄을 골라 선 있는 노트에 적어 줍니다.
  function shuffle(a) { return a.map(function (v) { return [Math.random(), v]; }).sort(function (x, y) { return x[0] - y[0]; }).map(function (x) { return x[1]; }); }
  // 편지 순서: 이유별 인사 → 관계 → 상대를 떠올린 이야기 → 고른 선물 → 바람 → 광대다운 마무리.
  function letter(tone) {
    var L = G.letter, occ = (picked("occ").tags || [])[0], rel = relKey(), p = st.list[st.k].p;
    var o = (L.open[occ] || L.open.random)[tone], m = (L.mid[rel] || L.mid.friend)[tone];
    // 부모님은 성별에 따라 아빠·엄마(반말), 아버지·어머니(존댓말)로 적습니다.
    var dad = (picked("sex").tags || [])[0] === "male";
    m = m.replace("{p}", tone === "c" ? (dad ? "아빠" : "엄마") : (dad ? "아버지" : "어머니"));
    var mods = [], known = 0;
    Object.keys(L.trait.mods).forEach(function (id) {
      [].concat(st.ans[id] == null ? [] : st.ans[id]).forEach(function (k) {
        var t = L.trait.mods[id][k];
        if (!t) return;
        known++;
        if (t[1].some(function (g) { return p.tags.indexOf(g) > -1; })) mods.push(t[0]);
      });
    });
    mods = shuffle(mods).slice(0, 2);
    var tr = mods.length ? L.trait.lead[tone].replace("{t}", mods.join(", ")) : known ? L.trait.fallback[tone] : L.trait.none[tone];
    var out = [o, m, tr, p.card ? p.card[tone] : "", rnd(L.hope[tone])];
    // 부모님께 반말로 쓸 때는 "너" 대신 아빠·엄마로 부릅니다.
    if (rel === "parent" && tone === "c") {
      var w = dad ? "아빠" : "엄마";
      out = out.map(function (l) { return l.replace("너는", w + "는").replace("너에 대해", w + "에 대해").replace("네 생각", w + " 생각").replace("사람이잖아", "분이잖아"); });
    }
    return out;
  }
  // 받침이 있으면 "이", 없으면 "가"로 끝맺습니다(반말). 존댓말은 "드림".
  function sign(tone) {
    var w = st.who; if (!w) return "";
    var ch = w.charCodeAt(w.length - 1), n = w;
    if (tone === "c") n = w + (ch >= 0xAC00 && ch <= 0xD7A3 && (ch - 0xAC00) % 28 ? "이" : "가");
    return S.sincere + " " + G.letter.sign[tone].replace("{n}", n);
  }
  // 이미 "님"으로 끝나거나 가족 호칭이면 "님"을 또 붙이지 않습니다(선생님께, 어머니께). 직함은 팀장님께처럼 "님"을 붙입니다.
  function isTitle(n) {
    return /님$/.test(n) || ["어머니", "아버지", "엄마", "아빠", "할머니", "할아버지", "이모", "고모", "삼촌", "큰아버지", "큰어머니", "숙모", "고모부", "이모부", "누나", "언니", "오빠", "형"].indexOf(n) > -1;
  }
  // 편지 한쪽에 찍히는 소인(우체국 도장). 화면에서는 SVG, 저장 이미지에서는 canvas 로 같은 모양을 그립니다.
  var STAMP_RING = "USELESSLY YOURS · USELESSLY YOURS · ";
  function today() { var d = new Date(); return d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate(); }
  function stampSvg() {
    return '<svg class="stamp" viewBox="0 0 100 100" role="img" aria-label="Uselessly Yours 소인"><defs><path id="pm" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"/></defs>' +
      '<circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="50" r="27" fill="none" stroke="currentColor" stroke-width="1.2"/>' +
      '<text font-size="8.6" font-weight="700" letter-spacing="1.1" fill="currentColor"><textPath href="#pm" startOffset="0">' + STAMP_RING + '</textPath></text>' +
      '<text x="50" y="49" text-anchor="middle" font-size="9.5" font-weight="700" fill="currentColor">' + esc(S.stampMid) + '</text>' +
      '<text x="50" y="62" text-anchor="middle" font-size="7" fill="currentColor">' + today() + "</text></svg>";
  }
  function drawStamp(ctx, cx, cy, r) {
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(-0.2);
    ctx.strokeStyle = ctx.fillStyle = "rgba(13,13,13,.62)";
    ctx.lineWidth = r * 0.04; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke();
    ctx.lineWidth = r * 0.025; ctx.beginPath(); ctx.arc(0, 0, r * 0.57, 0, Math.PI * 2); ctx.stroke();
    var n = STAMP_RING.length;
    ctx.font = "700 " + Math.round(r * 0.18) + "px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    for (var i = 0; i < n; i++) {
      ctx.save(); ctx.rotate(i * Math.PI * 2 / n); ctx.translate(0, -r * 0.77); ctx.fillText(STAMP_RING[i], 0, 0); ctx.restore();
    }
    ctx.font = "700 " + Math.round(r * 0.22) + 'px "Noto Serif KR", serif'; ctx.fillText(S.stampMid, 0, -r * 0.07);
    ctx.font = Math.round(r * 0.15) + "px sans-serif"; ctx.fillText(today(), 0, r * 0.2);
    ctx.restore();
    // 소인 옆으로 흐르는 취소선 물결
    ctx.save(); ctx.strokeStyle = "rgba(13,13,13,.4)"; ctx.lineWidth = r * 0.03;
    for (var k = 0; k < 3; k++) {
      ctx.beginPath();
      for (var x = 0; x <= r * 2.6; x += 6) { var yy = cy - r * 0.3 + k * r * 0.3 + Math.sin(x / (r * 0.22)) * r * 0.06; x ? ctx.lineTo(cx + r * 1.05 + x, yy) : ctx.moveTo(cx + r * 1.05, yy); }
      ctx.stroke();
    }
    ctx.restore();
  }
  function note(tone) {
    st.tone = tone;
    var ls = letter(tone), s2 = sign(tone), cut = Math.max(0, ls.length - 1);
    var young = ["동생", "조카", "제자", "아들", "딸"].indexOf(st.to) > -1,
      to = st.to ? G.letter.to[young ? "c" : tone === "p" && isTitle(st.to) ? "pTitle" : tone].replace("{n}", st.to) : "";
    st.cardText = { lines: (to ? [to] : []).concat(ls, s2 ? [s2] : []), cut: cut + (to ? 1 : 0) };
    // 그림은 마지막 문단과 서명 옆에 떠서, 앞쪽 글은 카드 너비를 다 씁니다.
    var html = (to ? '<p class="to">' + esc(to) + "</p>" : "") + ls.slice(0, cut).map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("") +
      '<img src="/assets/gasungbi/thumbs.webp" alt="">' + ls.slice(cut).map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("") +
      (s2 ? '<p class="sign">' + esc(s2) + "</p>" : "") + '<div class="stampbox">' + stampSvg() + "</div>";
    document.getElementById("cardbox").innerHTML = '<div class="note">' + html + "</div>" +
      '<button class="btn strong" data-save="1">' + esc(S.cardSave) + '</button><button class="btn link" data-again="1">' + esc(S.cardAgain) + '</button><button class="btn link" data-mk="1">' + esc(S.cardSwap) + "</button>";
  }
  // 카드를 이미지로 그려서 저장합니다. 글은 선 있는 노트 위에 적고, 그림은 마지막 문단 옆에 둡니다.
  function saveCard() {
    var T = st.cardText; if (!T) return;
    var W = 1080, PAD = 72, LH = 90, FS = 56, FIGH = 480;
    var fig = new Image();
    fig.onload = function () {
      var go = function () {
        var cv = document.createElement("canvas"), ctx = cv.getContext("2d");
        var figW = Math.round(fig.width * FIGH / fig.height);
        ctx.font = FS + 'px "Nanum Pen Script", "Noto Serif KR", serif';
        function wrap(text, max) {
          var out = [], line = "";
          text.split(" ").forEach(function (w) {
            var t = line ? line + " " + w : w;
            if (ctx.measureText(t).width > max && line) { out.push(line); line = w; } else line = t;
          });
          if (line) out.push(line); return out;
        }
        var rows = [], figTop = null;
        T.lines.forEach(function (p, idx) {
          if (idx === T.cut) figTop = rows.length * LH;
          var narrow = idx >= T.cut, max = W - PAD * 2 - (narrow ? figW + 20 : 0);
          wrap(p, max).forEach(function (l) { rows.push({ t: l, right: p === T.lines[T.lines.length - 1] && p.indexOf(S.sincere) === 0 }); });
        });
        if (figTop == null) figTop = rows.length * LH;
        var STAMP_R = 105, H = Math.max(rows.length * LH, figTop + FIGH) + PAD * 1.5 + STAMP_R * 2 + 30;
        cv.width = W; cv.height = H;
        ctx.fillStyle = "#fffdf6"; ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = "#c9c4b6"; ctx.lineWidth = 3;
        for (var y = PAD + LH - 18; y < H - 20; y += LH) { ctx.beginPath(); ctx.moveTo(PAD / 2, y); ctx.lineTo(W - PAD / 2, y); ctx.stroke(); }
        ctx.font = FS + 'px "Nanum Pen Script", "Noto Serif KR", serif'; ctx.fillStyle = "#0d0d0d"; ctx.textBaseline = "alphabetic";
        rows.forEach(function (r, i) {
          ctx.textAlign = r.right ? "right" : "left";
          ctx.fillText(r.t, r.right ? W - PAD - figW - 20 : PAD, PAD + LH * (i + 1) - 30);
        });
        ctx.drawImage(fig, W - PAD - figW, PAD + figTop, figW, FIGH);
        drawStamp(ctx, PAD + STAMP_R + 10, H - PAD - STAMP_R + 10, STAMP_R);
        ctx.fillStyle = "#6b6b6b"; ctx.font = "26px sans-serif"; ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
        ctx.fillText("Uselessly Yours", PAD, H - 28);
        cv.toBlob(function (blob) {
          var file = new File([blob], "gift-card.png", { type: "image/png" });
          if (navigator.canShare && navigator.canShare({ files: [file] })) { navigator.share({ files: [file] }).catch(function () {}); return; }
          var u = URL.createObjectURL(blob), l = document.createElement("a");
          l.href = u; l.download = "gift-card.png"; document.body.appendChild(l); l.click(); l.remove();
          setTimeout(function () { URL.revokeObjectURL(u); }, 4000);
        }, "image/png");
      };
      if (document.fonts && document.fonts.load) document.fonts.load('56px "Nanum Pen Script"').then(go, go); else go();
    };
    fig.src = "/assets/gasungbi/thumbs.webp";
  }
  function nameAsk() {
    function field(id, label, hint, val) {
      return '<label class="whol">' + esc(label) + '<input id="' + id + '" class="who" type="text" maxlength="12" autocomplete="off" placeholder="' + esc(hint) + '" value="' + esc(val || "") + '"></label>';
    }
    // 관계와 성별로 호칭 후보를 뽑습니다(부모님 + 남성 → 아빠, 아버지).
    var N = (G.names || {})[relKey()] || {}, sx = (picked("sex").tags || [])[0] === "male" ? "m" : "f",
      toList = ((N.to || {})[sx]) || [], fromList = N.from || [];
    if (st.to == null && N.fill && toList.length) st.to = toList[0];
    function chips(id, list) {
      return list.length ? '<span class="chips">' + list.map(function (v) { return '<button type="button" class="chip" data-fill="' + id + '" data-v="' + esc(v) + '">' + esc(v) + "</button>"; }).join("") + "</span>" : "";
    }
    document.getElementById("cardbox").innerHTML = '<span class="lead">' + esc(S.nameAsk) + "</span>" +
      field("to", S.toLabel, S.toHint, st.to) + chips("to", toList) + field("who", S.fromLabel, S.fromHint, st.who) + chips("who", fromList) +
      '<div class="choices"><button class="btn strong" data-name="1">' + esc(S.nameOk) + '</button><button class="btn link" data-noname="1">' + esc(S.noName) + "</button></div>";
    document.getElementById("to").focus();
  }
  function readNames() { st.to = document.getElementById("to").value.trim(); st.who = document.getElementById("who").value.trim(); }
  function toneAsk() {
    document.getElementById("cardbox").innerHTML = '<span class="lead">' + esc(S.cardTone) + '</span><div class="choices"><button class="btn" data-tone="c">' + esc(S.toneC) +
      '</button><button class="btn" data-tone="p">' + esc(S.toneP) + "</button></div>";
  }
  function buyBtn(p, cls) {
    return p.url ? '<a class="btn ' + cls + '" href="' + esc(p.url) + '" target="_blank" rel="sponsored noopener">' + esc(S.buy) + "</a>"
      : '<span class="btn ' + cls + '" aria-disabled="true">' + esc(S.noLink) + "</span>";
  }
  app.addEventListener("click", function (e) {
    var t = e.target.closest("button"); if (!t) return;
    var d = t.dataset;
    if (d.mute) return toggleMusic();
    if (d.open) { startMusic(); return intro(); }
    if (d.retry) return intro();
    if (d.start) return ask();
    if (d.go) return begin();
    if (d.more) { st.page++; return talk(); }
    if (d.tog != null) {
      var qq = q(st.asked[st.i]), k = parseInt(d.tog, 10), cur = st.ans[qq.id] || [], at = cur.indexOf(k);
      if (at > -1) cur.splice(at, 1);
      else { cur = qq.options[k].solo ? [k] : cur.filter(function (j) { return !qq.options[j].solo; }).concat(k); }
      st.ans[qq.id] = cur; return ask(true);
    }
    if (d.multi) return advance();
    if (d.opt != null) return pick(parseInt(d.opt, 10));
    if (d.back) { st.i = Math.max(0, st.i - 1); return ask(); }
    if (d.reask) return ask();
    if (d.next) { st.k++; window.scrollTo(0, 0); return sim(); }
    if (d.mk) return toneAsk();
    if (d.tone) { st.tone = d.tone; return nameAsk(); }
    if (d.save) return saveCard();
    if (d.again) return note(st.tone);
    if (d.fill) { var inp = document.getElementById(d.fill); inp.value = d.v; return inp.focus(); }
    if (d.name) { readNames(); return note(st.tone); }
    if (d.noname) { st.to = ""; st.who = ""; return note(st.tone); }
    if (d.share) {
      var ok = function () { document.getElementById("toast").textContent = S.copied; };
      try { navigator.clipboard.writeText(location.href.split("#")[0]).then(ok, ok); } catch (err) { ok(); }
    }
  });
  app.addEventListener("click", function (e) { if (e.target.closest('a[href]:not([href^="/"])')) stopForLink(); });
  app.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && (e.target.id === "who" || e.target.id === "to")) { e.preventDefault(); if (e.target.id === "to") return document.getElementById("who").focus(); readNames(); note(st.tone); }
  });
  cover();
})();
