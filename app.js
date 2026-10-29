(function () {
  "use strict";
  var Q = window.QUIZ, S = Q.settings, lang = Q.lang;
  try { var sv = localStorage.getItem("uy-lang"); if (sv && Q.languages.indexOf(sv) > -1) lang = sv; } catch (e) {}
  if (lang === Q.lang && Q.languages.indexOf(Q.lang) > -1 && !localStorage_has()) lang = autoLang();
  function localStorage_has() { try { return !!localStorage.getItem("uy-lang"); } catch (e) { return false; } }
  function autoLang() { var n = ((navigator.languages && navigator.languages[0]) || navigator.language || "ko").slice(0, 2).toLowerCase(); return Q.languages.indexOf(n) > -1 ? n : Q.lang; }
  document.documentElement.lang = lang;
  var friend = null;
  try {
    var fm = /[#&]f=([\d.]+)/.exec(location.hash || "");
    if (fm) friend = fm[1].split(".").map(function (n) { return parseInt(n, 10); }).filter(function (n) { return n >= 0 && n < (Q.traits || []).length; });
    if (friend && !friend.length) friend = null;
  } catch (e) { friend = null; }
  var app = document.getElementById("app");
  var POSES = ["presenting", "thinking", "hands-behind"];
  var timer = null, st = fresh();
  var bgm = null, muted = false;
  try { muted = localStorage.getItem("uy-muted") === "1"; } catch (e) {}
  function startMusic() {
    if (!Q.music || !Q.music.src) return;
    if (!bgm) { bgm = new Audio(Q.music.src); bgm.loop = true; bgm.volume = Q.music.volume || 0.35; }
    bgm.muted = muted;
    var p = bgm.play(); if (p && p.catch) p.catch(function () {});
  }
  function toggleMusic() {
    muted = !muted;
    try { localStorage.setItem("uy-muted", muted ? "1" : "0"); } catch (e) {}
    if (bgm) { bgm.muted = muted; if (!muted) { var p = bgm.play(); if (p && p.catch) p.catch(function () {}); } }
    var b = document.getElementById("mute"); if (b) { b.textContent = muted ? s("musicOff") : s("musicOn"); b.setAttribute("aria-pressed", muted ? "true" : "false"); }
  }
  function musicBtn() { return Q.music && Q.music.src ? '<button class="mute" id="mute" data-mute="1" aria-pressed="' + (muted ? "true" : "false") + '">' + esc(muted ? s("musicOff") : s("musicOn")) + "</button>" : ""; }

  function fresh() { return { w: Q.products.map(function (p) { return p.prior || 1; }), asked: [], hist: [], guesses: 0, lastGuessAt: -9, log: [], mode: "intro", cur: null, guess: null, main: null }; }
  function T(o) { return o && typeof o === "object" ? (o[lang] != null ? o[lang] : o.ko) : o; }
  function s(k) { var d = Q.strings[lang] || Q.strings.ko; return d[k] != null ? d[k] : Q.strings.ko[k]; }
  function esc(x) { return String(x).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function sum(a) { return a.reduce(function (x, y) { return x + y; }, 0); }
  function url(p) { return (p.urlByLang && p.urlByLang[lang]) || p.url; }
  function img(pose) { return '<img class="butler" src="assets/butler/' + pose + '.webp" alt="" width="560" height="750">'; }

  function ranked() {
    return shuffleTies(Q.products.map(function (p, i) { return { p: p, i: i, w: st.w[i] }; })
      .filter(function (x) { return x.w > 0.0005; })
      .sort(function (a, b) { return b.w - a.w; }));
  }
  // 점수가 거의 같은(3% 이내) 상품끼리는 순서를 무작위로 섞습니다.
  function shuffleTies(r) {
    var out = [], i = 0;
    while (i < r.length) {
      var j = i + 1;
      while (j < r.length && r[j].w >= r[i].w * 0.97) j++;
      var g = r.slice(i, j);
      for (var k = g.length - 1; k > 0; k--) { var m = Math.floor(Math.random() * (k + 1)), t = g[k]; g[k] = g[m]; g[m] = t; }
      out = out.concat(g); i = j;
    }
    return out;
  }
  function pickQuestion() {
    if (!st.asked.length) { var f = Q.questions.filter(function (q) { return q.id === "useful"; })[0]; if (f) return f; }
    return QuizEngine.pick(Q, st.w, st.asked);
  }

  function answer(ans) {
    st.hist.push(JSON.stringify({ w: st.w, asked: st.asked, guesses: st.guesses, lastGuessAt: st.lastGuessAt }));
    st.asked = st.asked.concat(st.cur.id);
    st.log.push({ q: st.cur, a: ans });
    st.w = QuizEngine.apply(Q, st.w, st.cur, ans);
    advance();
  }
  function back() {
    if (!st.hist.length) return;
    var h = JSON.parse(st.hist.pop());
    st.log.pop();
    st.w = h.w; st.asked = h.asked; st.guesses = h.guesses; st.lastGuessAt = h.lastGuessAt;
    st.cur = null; ask();
  }
  function advance() {
    var n = st.asked.length, r = ranked();
    if (!r.length) return result(null);
    var share = r[0].w / sum(r.map(function (x) { return x.w; }));
    var canGuess = st.guesses < S.maxGuesses && n - st.lastGuessAt >= 3;
    var want = n >= S.minQuestions && (share >= S.guessThreshold || n >= S.maxQuestions);
    if (canGuess && want) return think(r[0]);
    if (n >= S.maxQuestions) return result(null);
    ask();
  }

  function brief() {
    st.mode = "brief";
    render({
      pose: "hands-behind", enter: true, head: "",
      bubble: '<div class="bubble" id="bub" aria-live="polite"></div>',
      body: '<div class="answers"><button class="btn primary wide" data-next="1">' + esc(s("next")) + "</button></div>",
      type: s("intro")
    });
  }
  // 몇 문항에서 끝날지는 답에 따라 달라서, 평균 길이를 기준으로 막대를 채우고 95%를 넘기지 않습니다.
  function prog(n) { return Math.min(95, Math.round((n - 1) / (S.minQuestions + 3) * 100)); }
  function ask(keep) {
    var q = keep && st.cur ? st.cur : pickQuestion();
    if (!q) { var r = ranked(); return r.length && st.guesses < S.maxGuesses ? think(r[0]) : result(null); }
    st.cur = q; st.mode = "ask";
    var n = st.asked.length + 1;
    render({
      pose: POSES[(n - 1) % POSES.length],
      head: "",
      bubble: '<div class="bubble" aria-live="polite"><div class="prog" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + prog(n) + '"><i style="width:' + prog(n) + '%"></i></div><span id="bub"></span></div>',
      body: '<div class="answers' + (q.options ? " choice" : "") + '">' + (q.options ?
        q.options.map(function (o, j) { return '<button class="btn strong" data-a="o' + j + '">' + esc(T(o.text)) + "</button>"; }).join("") :
        '<button class="btn primary" data-a="yes">' + esc(s("yes")) + "</button>" +
        '<button class="btn strong" data-a="no">' + esc(s("no")) + "</button>") +
        (st.hist.length ? '<button class="btn link wide" data-back="1">' + esc(s("back")) + "</button>" : "") +
        "</div>",
      type: lead(n - 1) + T(q.text)
    });
  }
  function lead(k) {
    var steps = S.stageSteps || [4, 8], L = (Q.strings[lang] || Q.strings.ko), K = Q.strings.ko;
    if (k === steps[0]) return L.stage2 || K.stage2 || "";
    if (k === steps[1]) return L.stage3 || K.stage3 || "";
    if (k === 0) return "";
    var arr = L.leads || K.leads || [];
    if (!arr.length || k % 2 === 0) return "";
    return arr[(k >> 1) % arr.length];
  }
  var CLOUD = '<svg class="thought" viewBox="0 0 200 150" aria-hidden="true">' +
    '<g class="dots-trail"><circle class="t1" cx="22" cy="138" r="5"/><circle class="t2" cx="42" cy="118" r="8"/><circle class="t3" cx="66" cy="98" r="12"/></g>' +
    '<g class="cloud"><g class="ol"><circle cx="86" cy="62" r="26"/><circle cx="118" cy="40" r="30"/><circle cx="154" cy="50" r="26"/><circle cx="166" cy="80" r="22"/><circle cx="130" cy="86" r="24"/><circle cx="98" cy="84" r="20"/></g>' +
    '<g class="fl"><circle cx="86" cy="62" r="23"/><circle cx="118" cy="40" r="27"/><circle cx="154" cy="50" r="23"/><circle cx="166" cy="80" r="19"/><circle cx="130" cy="86" r="21"/><circle cx="98" cy="84" r="17"/><rect x="95" y="50" width="62" height="34"/></g>' +
    '<g class="ell"><circle cx="108" cy="64" r="4.5"/><circle cx="128" cy="64" r="4.5"/><circle cx="148" cy="64" r="4.5"/></g></g></svg>';
  function think(top) {
    st.mode = "think"; st.top = top;
    draw(topbar("") + '<div class="stage think">' + img("thinking") + CLOUD + "</div>");
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    timer = setTimeout(function () { guess(top); }, reduce ? 700 : (Q.settings.thinkMs || 3200));
  }
  function traitById(id) { return (Q.traits || []).filter(function (t) { return t.id === id; })[0]; }
  var DFQ = null;
  function tagStats() {
    if (DFQ) return;
    DFQ = {};
    Q.questions.forEach(function (q) {
      var seen = {};
      (q.options ? q.options.reduce(function (x, o) { return x.concat(o.tags || []); }, []) : (q.yes || []).concat(q.no || [])).forEach(function (t) { if (!seen[t]) { seen[t] = 1; DFQ[t] = (DFQ[t] || 0) + 1; } });
    });
    (Q.traits || []).forEach(function (tr) {
      tr._df = Q.products.filter(function (p) { return tr.tags.some(function (t) { return p.tags.indexOf(t) > -1; }); }).length || 1;
    });
  }
  // 답한 내용과 마지막 상품을 함께 보고, 어울리는 성향(키워드)을 점수순으로 뽑습니다.
  function profile(top) {
    tagStats();
    var tags = {};
    st.log.forEach(function (e) {
      if (e.q.id === "useful") return;
      if (e.q.options) {
        var k = e.a === "none" ? -1 : parseInt(String(e.a).slice(1), 10);
        if (k >= 0) (e.q.options[k].tags || []).forEach(function (t) { tags[t] = (tags[t] || 0) + 1.2; });
        return;
      }
      var yes = e.q.yes || [], no = e.q.no || [];
      if (e.a === "yes") { yes.forEach(function (t) { tags[t] = (tags[t] || 0) + 1; }); no.forEach(function (t) { tags[t] = (tags[t] || 0) - 0.5; }); }
      else { no.forEach(function (t) { tags[t] = (tags[t] || 0) + 0.7; }); yes.forEach(function (t) { tags[t] = (tags[t] || 0) - 1; }); }
    });
    var out = [];
    (Q.traits || []).forEach(function (tr, idx) {
      var mx = 0, sum = 0, hit = 0;
      tr.tags.forEach(function (t) {
        var v = Math.max(tags[t] || 0, 0) / Math.sqrt(DFQ[t] || 1);
        mx = Math.max(mx, v); sum += v;
        if (top.p.tags.indexOf(t) > -1) hit = 1;
      });
      var sc = mx + 0.25 * (sum - mx);
      var val = (sc + (sc > 0 ? hit * 0.6 : 0)) * (hit ? 1 : 0.35) / Math.pow(tr._df, 0.8) * 10;
      out.push({ tr: tr, idx: idx, sc: val, hit: hit });
    });
    out.sort(function (x, y) { return y.sc - x.sc; });
    var good = out.filter(function (x) { return x.sc > 0.05; });
    if (!good.length) good = out.filter(function (x) { return x.hit; });
    return good.length ? good : out;
  }
  function relCard(label, tr, note) {
    return '<div class="relcard"><span class="rl">' + esc(label) + "</span><strong>" + esc(T(tr.kw)) + '</strong><span class="rn">' + esc(note) + "</span></div>";
  }
  function guess(top) {
    st.mode = "guess"; st.guess = top;
    var pr = profile(top); st.traits = pr.slice(0, 3);
    var me = pr[0].tr, opp = traitById(me.opp), mat = traitById(me.match);
    var text = s(me.rarity < 5 ? "rarityOpen" : "rarityOpen2").replace("{p}", me.rarity) + " " + s("kwFmt").replace("{kw}", T(me.kw)) + " " + T(me.inf);
    draw(topbar("") + '<div class="stage compact">' + img("presenting") + "</div>" +
      '<div class="bubble" aria-live="polite"><span id="bub"></span></div>' +
      '<div class="hold" id="gask"><div class="rel">' + relCard(s("oppLabel"), opp, s("oppNote")) + relCard(s("matchLabel"), mat, s("matchNote")) + '</div><p class="leadline plain">' + esc(s("guessAsk")) + "</p>" +
      '<div class="answers"><button class="btn" data-gans="yes">' + esc(s("guessYes")) + '</button><button class="btn" data-gans="no">' + esc(s("guessNo")) + "</button></div></div>");
    typeInto(document.getElementById("bub"), text, function () { var g = document.getElementById("gask"); if (g) g.classList.add("show"); });
  }
  function guess2(ans) {
    st.mode = "guess2"; st.gans = ans;
    draw(topbar("") + '<div class="stage compact">' + img("presenting") + "</div>" +
      '<div class="bubble" aria-live="polite"><span id="bub"></span></div>' +
      '<h2 class="found">' + esc(s("found")) + '</h2><p class="leadline">' + esc(s("traitLead")) + "</p>" +
      '<div class="answers late"><button class="btn primary wide" data-reveal="1">' + esc(s("reveal")) + "</button></div>");
    typeInto(document.getElementById("bub"), s(ans === "yes" ? "replyYes" : "replyNo"));
  }

  function friendCase(mine) {
    if (!friend || !friend.length) return null;
    var me = mine[0], f0 = Q.traits[friend[0]], key;
    if (!f0) return null;
    if (f0.id === me.tr.id) key = "cmpTwin";
    else if (me.tr.match === f0.id || f0.match === me.tr.id) key = "cmpMatch";
    else if (me.tr.opp === f0.id || f0.opp === me.tr.id) key = "cmpOpp";
    else if (mine.some(function (m) { return friend.indexOf(m.idx) > -1; })) key = "cmpSome";
    else key = "cmpNone";
    return { f0: f0, key: key };
  }
  function secretHtml(x) {
    return '<div class="card" id="secret" hidden><span class="lead">' + esc(s("secretLead")) + "</span><h2>" + esc(T(x.p.name)) + "</h2>" +
      '<p class="why">' + esc(T(x.p.line)) + "</p>" +
      '<a class="btn" href="' + esc(url(x.p)) + '" target="_blank" rel="sponsored noopener noreferrer">' + esc(s("resultBuy")) + "</a></div>";
  }
  function result(main) {
    st.mode = "result";
    var r = ranked(); if (!main) main = r[0];
    if (!main) { Q.products.forEach(function (_, i) { st.w[i] = 1; }); r = ranked(); main = r[0]; }
    st.main = main;
    if (!st.traits || !st.traits.length) st.traits = profile(main).slice(0, 3);
    var secret = r.filter(function (x) { return x.p.id !== main.p.id; })[0];
    var p = main.p, fc = friendCase(st.traits);
    var html = '<div class="stage big">' + img("gift") + "</div>" +
      '<div class="card"><span class="lead">' + esc(s("resultLead")) + "</span>" +
      "<h2>" + esc(T(p.name)) + "</h2>" +
      (p.img ? '<img class="pimg" src="' + esc(p.img) + '" alt="' + esc(T(p.name)) + '">' : "") +
      '<p class="why">' + esc(T(p.line)) + "</p>" +
      '<a class="btn primary" href="' + esc(url(p)) + '" target="_blank" rel="sponsored noopener noreferrer">' + esc(s("resultBuy")) + "</a>" +
      (S.showDisclosure === false ? "" : '<p class="note">' + esc(s("disclosure")) + "</p>") + "</div>" +
      (secret ? '<button class="btn wide" data-secret="1">' + esc(s("secretBtn")) + "</button>" + secretHtml(secret) : "") +
      (fc ? '<div class="cmp"><h3>' + esc(s("cmpTitle")) + "</h3><p>" + esc(s("friendMine")) + ": <strong>" + esc(T(fc.f0.kw)) + "</strong></p><p>" + esc(s(fc.key)) + "</p></div>" : "") +
      '<div class="cardwrap" id="cardwrap"><button class="btn wide" data-card="1">' + esc(s("makeCard")) + "</button></div>" +
      '<div class="actions"><button class="btn" data-again="1">' + esc(s("again")) + '</button><button class="btn primary" data-sendfriend="1">' + LINK + " " + esc(s("sendFriend")) + "</button></div>";
    draw(topbar("") + html);
  }

  function friendUrl() {
    return location.href.split("#")[0] + "#f=" + st.traits.map(function (x) { return x.idx; }).join(".");
  }
  function sendFriend(btn) {
    var me = st.traits[0].tr, text = s("friendText").replace("{kw}", T(me.kw)), u = friendUrl();
    if (navigator.share) { navigator.share({ text: text, url: u }).catch(function () {}); return; }
    try { navigator.clipboard.writeText(text + "\n" + u).then(function () { toast(s("copiedToast")); }, function () { toast(u); }); } catch (e) { toast(u); }
  }
  function loadImg(src) {
    return new Promise(function (res) { var i = new Image(); i.onload = function () { res(i); }; i.onerror = function () { res(null); }; i.src = src; });
  }
  function wrapLines(ctx, text, maxW) {
    var spaced = text.indexOf(" ") > -1, toks = spaced ? text.split(" ") : text.split(""), lines = [], cur = "";
    toks.forEach(function (t) {
      var test = cur ? (spaced ? cur + " " + t : cur + t) : t;
      if (ctx.measureText(test).width > maxW && cur) { lines.push(cur); cur = t; } else cur = test;
    });
    if (cur) lines.push(cur);
    return lines;
  }
  function makeCard() {
    var wrap = document.getElementById("cardwrap"); if (!wrap || !st.traits) return;
    var me = st.traits[0].tr, kw = T(me.kw), serif = getComputedStyle(document.documentElement).getPropertyValue("--serif") || "serif";
    var sans = getComputedStyle(document.documentElement).getPropertyValue("--sans") || "sans-serif";
    var fontsOk = document.fonts && document.fonts.load ? Promise.race([
      Promise.all([document.fonts.load("700 100px " + serif, kw), document.fonts.load("400 40px " + sans, s("headline"))]),
      new Promise(function (r) { setTimeout(r, 2500); })]) : Promise.resolve();
    Promise.all([loadImg("assets/butler/gift.webp"), loadImg("assets/logo/uselessly-yours.png"), fontsOk]).then(function (v) {
      var c = document.createElement("canvas"); c.width = 1080; c.height = 1920;
      var x = c.getContext("2d");
      x.fillStyle = "#fff"; x.fillRect(0, 0, 1080, 1920);
      x.strokeStyle = "#0d0d0d"; x.lineWidth = 3; x.strokeRect(40, 40, 1000, 1840);
      x.textAlign = "center"; x.textBaseline = "alphabetic";
      if (v[1]) { var lw = 560, lh = lw * v[1].height / v[1].width; x.drawImage(v[1], 540 - lw / 2, 120, lw, lh); }
      x.fillStyle = "#6b6b6b"; x.font = "400 38px " + sans; x.fillText(s("headline"), 540, 290);
      if (v[0]) { var bh = 880, bw = bh * v[0].width / v[0].height; x.drawImage(v[0], 540 - bw / 2, 340, bw, bh); }
      x.fillStyle = "#6b6b6b"; x.font = "400 44px " + sans; x.fillText(s("cardLead"), 540, 1400);
      x.fillStyle = "#0d0d0d"; x.font = "700 112px " + serif;
      var lines = wrapLines(x, kw, 900), y = 1530;
      if (lines.length > 1) { x.font = "700 92px " + serif; lines = wrapLines(x, kw, 900); y = 1510; }
      lines.forEach(function (ln, k) { x.fillText(ln, 540, y + k * 118); });
      x.fillStyle = "#6b6b6b"; x.font = "400 38px " + sans; x.fillText(s("cardRare").replace("{p}", me.rarity), 540, 1745);
      x.font = "400 32px " + sans; x.fillText(location.href.split("#")[0].replace(/^https?:\/\//, "").replace(/\/$/, ""), 540, 1830);
      st.card = c;
      wrap.innerHTML = '<img class="cardimg" src="' + c.toDataURL("image/png") + '" alt="">' +
        '<div class="answers"><button class="btn" data-savecard="1">' + esc(s("saveCard")) + '</button><button class="btn primary" data-sharecard="1">' + esc(s("shareCard")) + "</button></div>";
    });
  }
  function cardBlob(cb) { st.card.toBlob(cb, "image/png"); }
  function saveCard() {
    if (!st.card) return;
    cardBlob(function (b) { var a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = "uselessly-yours.png"; document.body.appendChild(a); a.click(); a.remove(); });
  }
  function shareCard() {
    if (!st.card) return;
    cardBlob(function (b) {
      var f = new File([b], "uselessly-yours.png", { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [f] })) navigator.share({ files: [f], text: s("friendText").replace("{kw}", T(st.traits[0].tr.kw)), url: friendUrl() }).catch(function () {});
      else saveCard();
    });
  }

  var LINK = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>';
  var CHECK = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  var GLOBE = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.7 5.7 3.7 9s-1.2 6.3-3.7 9c-2.5-2.7-3.7-5.7-3.7-9S9.5 5.7 12 3z"/></svg>';
  function langBtn() {
    if (Q.languages.length < 2) return "";
    return '<span class="langwrap"><button class="mute globe" data-globe="1" aria-label="Language" aria-expanded="false">' + GLOBE + '</button><div class="langmenu" id="langmenu" hidden>' +
      Q.languages.map(function (l) { return '<button data-lang="' + l + '" lang="' + l + '"' + (l === lang ? ' aria-current="true"' : "") + ">" + esc(Q.languageNames[l]) + "</button>"; }).join("") + "</div></span>";
  }
  function topbar(extra, noMusic) {
    return '<div class="top"><span class="brand"><img src="assets/logo/uselessly-yours.png" alt="' + esc(s("title")) + '" height="22"></span><span class="topr">' + (extra || "") + langBtn() + (noMusic ? "" : musicBtn()) + "</span></div>";
  }
  function render(o) {
    draw(topbar(o.head) + '<div class="stage' + (o.enter ? " enter" : "") + '">' + img(o.pose) + "</div>" + o.bubble + o.body);
    if (o.type) typeInto(document.getElementById("bub"), o.type);
  }
  function draw(html) { clearInterval(timer); app.innerHTML = html; }
  function rich(t) { return esc(t).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br><span class=\"gap\"></span>"); }
  function typeInto(el, text, cb) {
    var i = 0, plain = text.replace(/\*\*/g, ""), reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.setAttribute("aria-label", plain);
    if (reduce) { el.innerHTML = rich(text); if (cb) cb(); return; }
    function done() { clearInterval(timer); el.innerHTML = rich(text); if (cb) cb(); }
    // 입력 중에도 굵은 글씨가 유지되도록, 아직 닫히지 않은 ** 는 임시로 닫아서 보여줍니다.
    timer = setInterval(function () {
      i++; var part = text.slice(0, i);
      if ((part.match(/\*\*/g) || []).length % 2) part += "**";
      el.innerHTML = rich(part);
      if (i >= text.length) { clearInterval(timer); el.innerHTML = rich(text); if (cb) cb(); }
    }, 24);
    el.addEventListener("click", function () { if (i < text.length) { i = text.length; done(); } }, { once: true });
  }
  function intro(keep) {
    if (!keep) st = fresh();
    st.mode = "intro";
    draw(topbar('<button class="mute globe" data-copyonly="1" aria-label="' + esc(s("shareShort")) + '" title="' + esc(s("shareShort")) + '">' + LINK + "</button>", true) +
      '<div class="intro">' +
      '<div class="stage silhouette">' + img("hands-behind") + "</div>" +
      '<div><h1 class="intro-title">' + esc(s("headline")) + '</h1><p class="intro-lead">' + esc(s("tagline")) + "</p>" +
      (friend ? '<p class="friendline">' + rich(s("friendBanner").replace("{kw}", T(Q.traits[friend[0]].kw))) + "</p>" : "") + "</div>" +
      '<button class="btn primary" data-start="1">' + esc(s("start")) + "</button></div>");
    fit();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  }
  function fit() {
    var h = document.querySelector(".intro-title"); if (!h) return;
    h.style.fontSize = ""; var px = parseFloat(getComputedStyle(h).fontSize);
    while (h.scrollWidth > h.parentNode.clientWidth && px > 16) { px -= 1; h.style.fontSize = px + "px"; }
  }
  function setLang(l) {
    lang = l; document.documentElement.lang = l; document.title = s("title");
    try { localStorage.setItem("uy-lang", l); } catch (e) {}
    var m = st.mode;
    if (m === "intro") intro(true);
    else if (m === "brief") brief();
    else if (m === "ask") ask(true);
    else if (m === "think") think(st.top);
    else if (m === "guess") guess(st.guess);
    else if (m === "guess2") guess2(st.gans);
    else if (m === "result") result(st.main);
  }

  var toastEl = null, toastT = null;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement("div"); toastEl.className = "toast"; toastEl.setAttribute("role", "status"); document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add("on");
    clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove("on"); }, 1800);
  }
  function copyOnly(btn) {
    var u = location.href.split("#")[0], label = btn.innerHTML, icon = btn.classList.contains("globe"), full = s("shareText") + "\n" + u;
    function ok() { toast(s("copiedToast")); btn.innerHTML = icon ? CHECK : CHECK + " " + esc(s("copiedShort")); setTimeout(function () { btn.innerHTML = label; }, 1800); }
    try { navigator.clipboard.writeText(full).then(ok, function () { btn.textContent = u; }); } catch (e) { btn.textContent = u; }
  }

  app.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    if (b.dataset.globe) { var m = document.getElementById("langmenu"); m.hidden = !m.hidden; b.setAttribute("aria-expanded", m.hidden ? "false" : "true"); return; }
    if (b.dataset.lang) return setLang(b.dataset.lang);
    if (b.dataset.secret) { var sc = document.getElementById("secret"); sc.hidden = false; b.hidden = true; return; }
    if (b.dataset.card) return makeCard();
    if (b.dataset.savecard) return saveCard();
    if (b.dataset.sharecard) return shareCard();
    if (b.dataset.sendfriend) return sendFriend(b);
    if (b.dataset.mute) return toggleMusic();
    if (b.dataset.start) { startMusic(); return brief(); }
    if (b.dataset.next) return ask();
    if (b.dataset.a) return answer(b.dataset.a);
    if (b.dataset.back) return back();
    if (b.dataset.gans) return guess2(b.dataset.gans);
    if (b.dataset.reveal) return result(st.guess);
    if (b.dataset.g === "yes") return result(st.guess);
    if (b.dataset.g === "no") {
      st.w[st.guess.i] = 0; st.guesses++; st.lastGuessAt = st.asked.length;
      return st.guesses >= S.maxGuesses ? result(null) : ask();
    }
    if (b.dataset.again) return intro();
    if (b.dataset.copyonly) return copyOnly(b);
  });

  document.addEventListener("click", function (e) { var m = document.getElementById("langmenu"); if (m && !m.hidden && !e.target.closest(".langwrap")) m.hidden = true; });
  document.title = s("title");
  intro();
})();
