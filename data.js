// 질문, 상품, 링크, 문구는 이 파일 하나에서 바꿉니다.
// 질문 하나가 yes(예라고 답하면 어울리는 상품 태그), no(예라고 답하면 멀어지는 태그)에 점수를 줍니다.
window.QUIZ = {
 "lang": "ko",
 "languages": [
  "ko",
  "en",
  "zh",
  "ja",
  "es",
  "pt",
  "fr",
  "de",
  "th"
 ],
 "strings": {
  "ko": {
   "title": "Uselessly Yours",
   "subtitle": "",
   "headline": "쓸데없는 물건 추천기",
   "tagline": "쓸데없지만, 당신이 마음 깊은 곳에서 원하는 것을 알려드립니다.",
   "intro": "숨을 크게 들이쉬십시오. 여기서는 아무것도 증명하실 필요가 없습니다. 모든 것이 쓸모없으니까요. 진정한 쓸데없음은 힘을 뺄 때 나옵니다. 편하게 답해주십시오.",
   "start": "시작하겠습니다",
   "next": "다음",
   "shopExp": "세상에는 쓸데없는 물건을 쓰레기라고 생각하는 분들이 있습니다. 저는 그럴 때 마음이 아픕니다. 혹시 일부러 쓸모없는 물건을 사본 적이 있으십니까?",
   "shopAsk": "어디에서 쇼핑해보셨습니까? 해보신 곳을 모두 눌러주십시오. 해보지 않으셨다면 누르지 않으셔도 됩니다.",
   "shopDone": "체크했어요",
   "shopGo": "그럼 이제, 당신조차 모르는 당신에게 필요한 것을 알려드리겠습니다.",
   "qn": "{n}번째 질문",
   "yes": "예",
   "no": "아니오",
   "maybe": "아마도",
   "skip": "잘 모르겠습니다",
   "back": "한 칸 전으로",
   "guessLead": "당신이 마음 깊은 곳에서 원하던 것은…",
   "guessAsk": "어떻습니까. 이 정도면 꽤 맞는 것 같습니까?",
   "reveal": "그게 뭔데요?",
   "guessYes": "맞는 것 같습니다",
   "guessNo": "아예 아닙니다",
   "resultLead": "마음 깊은 곳에서 오래 기다리던 것입니다.",
   "resultBuy": "물건 보러가기",
   "alsoLead": "이런 것도 마음에 드실지 모릅니다.",
   "again": "다시 해보겠습니다",
   "shareShort": "공유하기",
   "copiedShort": "링크 복사됨",
   "copiedToast": "복사 완료",
   "shareText": "쓸데없는 물건 추천기",
   "disclosure": "이 사이트는 제휴 마케팅 활동의 일환으로 수수료를 제공받을 수 있습니다.",
   "disclosureShort": "제휴 링크를 포함하고 있으며, 구매 시 운영자가 수수료를 받을 수 있습니다.",
   "musicOn": "♪ 켜짐",
   "musicOff": "♪ 꺼짐",
   "thinking": "…잠시, 생각을 정리하겠습니다.",
   "leads": [
    "그렇군요. ",
    "좋습니다. ",
    "그렇다면, ",
    "조금 더 여쭙겠습니다. ",
    "알겠습니다. "
   ],
   "stage2": "이제 분위기를 조금 더 구체적으로 여쭙겠습니다. ",
   "stage3": "마지막으로, 세세한 부분을 여쭙겠습니다. ",
   "traitTwo": "당신은 {a}, 또 {b} 사람입니다.",
   "traitOne": "당신은 {a} 사람입니다.",
   "traitNone": "당신은 쓸모없는 것을 사랑할 줄 아는 사람입니다.",
   "traitLead": "이제 당신의 속마음이 가장 원하는 쓸데없는 물건을 알려드리겠습니다.",
   "found": "찾았습니다.",
   "kwFmt": "당신은 **{kw}**입니다.",
   "none": "딱히 해당 없습니다",
   "oppLabel": "정반대 성향",
   "matchLabel": "아주 잘 맞는 성향",
   "oppNote": "{d} 분들은, 당신과는 정반대편에 서 있으면서도 서로를 보완할 수 있습니다.",
   "matchNote": "{d} 분들은, 당신과 너무 닮아서 영혼의 단짝이 될 수 있습니다.",
   "rarityLine": "이 유형이 나올 확률은 약 **{p}%**입니다.",
   "rarityOpen": "놀랍군요. 이런 유형은 약 **{p}%**뿐입니다.",
   "rarityOpen2": "흥미롭군요. 이런 유형은 약 **{p}%**입니다.",
   "secretBtn": "숨겨진 2순위 보기",
   "secretLead": "당신도 모르게 마음에 걸려 있던 또 하나입니다.",
   "friendBanner": "친구는 **{kw}** 유형이 나왔습니다. 당신은 무엇이 나올까요?",
   "cmpTitle": "친구와의 궁합",
   "cmpTwin": "두 분은 같은 유형입니다. 말하지 않아도 같은 물건 앞에 서 있을 사람들입니다.",
   "cmpMatch": "친구는 당신과 아주 잘 맞는 유형입니다. 취향이 통해서 같이 있으면 이상하게 편할 겁니다.",
   "cmpOpp": "친구는 당신과 정반대 유형입니다. 서로의 세계를 구경하다 보면 의외로 오래 갈 사이입니다.",
   "cmpSome": "비슷한 구석이 하나쯤 있는 사이입니다. 그 하나가 대화의 시작이 될 겁니다.",
   "cmpNone": "서로 다른 별에서 온 사이입니다. 그래서 선물은 서로 고르지 마십시오.",
   "makeCard": "공유 카드 만들기",
   "saveCard": "이미지 저장",
   "saveHint": "이미지를 길게 눌러서도 저장하실 수 있습니다.",
   "shareCard": "이미지 공유",
   "sendFriend": "친구에게 보내기",
   "cardLead": "당신은",
   "friendText": "나는 '{kw}' 유형이 나왔어. 너는 뭐가 나올까?",
   "friendMine": "친구의 유형",
   "cardRare": "나올 확률 약 {p}%인 유형",
   "replyYes": "그럴 줄 알았습니다. 저는 틀린 적이 없습니다.",
   "replyNo": "그렇게 말씀하실 줄 알았습니다. 하지만 저는 틀린 적이 없습니다. 이 사실은 곧 증명됩니다."
  },
  "en": {
   "headline": "Useless Stuff Recommender",
   "tagline": "Useless, yes. But it's what you want deep down. Let me show you.",
   "intro": "Take a deep breath. You have nothing to prove here. Everything is useless, after all. True uselessness only appears when you relax. Just answer nice and easy.",
   "start": "Begin",
   "next": "Next",
   "shopExp": "Some people think useless things are just trash. That hurts me a little. Have you ever bought something useless on purpose?",
   "shopAsk": "Where have you shopped before? Tap every one you have tried. If you haven't, just leave it unchecked.",
   "shopDone": "Done checking",
   "shopGo": "Now then, I shall tell you what you need, something even you do not know yet.",
   "qn": "Question {n}",
   "yes": "Yes",
   "no": "No",
   "back": "Go back one",
   "reveal": "What is it?",
   "guessLead": "What you've wanted deep down is…",
   "resultLead": "It's what you've been waiting for, deep down.",
   "resultBuy": "Go see the item",
   "alsoLead": "You might like these too.",
   "again": "Try again",
   "shareShort": "Share",
   "copiedShort": "Link copied",
   "copiedToast": "Copied",
   "shareText": "Useless Stuff Recommender",
   "disclosure": "This site contains affiliate links and may earn a commission on purchases.",
   "musicOn": "♪ On",
   "musicOff": "♪ Off",
   "leads": [
    "I see. ",
    "Good. ",
    "Then, ",
    "One more thing. ",
    "Understood. "
   ],
   "stage2": "Now let me ask about the mood in a little more detail. ",
   "stage3": "Lastly, a few fine details. ",
   "traitTwo": "You are someone who {a}, and {b}.",
   "traitOne": "You are someone who {a}.",
   "traitNone": "You are someone who knows how to love the useless.",
   "traitLead": "Now I will tell you the useless object your heart wants most.",
   "found": "Found it.",
   "kwFmt": "You are **{kw}**.",
   "none": "None of these",
   "oppLabel": "Your opposite",
   "matchLabel": "Your best match",
   "oppNote": "Someone who {d} stands on the opposite side from you, yet the two of you can complete each other.",
   "matchNote": "Someone who {d} is so much like you that the two of you could be soulmates.",
   "rarityLine": "About **{p}%** of results land on this type.",
   "rarityOpen": "My, how surprising. Only about **{p}%** of people are this type.",
   "rarityOpen2": "How interesting. About **{p}%** of people are this type.",
   "secretBtn": "Reveal your hidden runner-up",
   "secretLead": "Another one that has been quietly on your mind.",
   "friendBanner": "Your friend got **{kw}**. What will you get?",
   "cmpTitle": "You and your friend",
   "cmpTwin": "You two are the same type. You would end up in front of the same object without a word.",
   "cmpMatch": "Your friend is a great match for you. Your tastes line up, so being together should feel strangely easy.",
   "cmpOpp": "Your friend is your opposite. Exploring each other's worlds could make this a surprisingly lasting pair.",
   "cmpSome": "You share at least one thing. That one thing can start the conversation.",
   "cmpNone": "You come from different stars. Maybe do not choose each other's gifts.",
   "makeCard": "Make a share card",
   "saveCard": "Save image",
   "saveHint": "You can also press and hold the image to save it.",
   "shareCard": "Share image",
   "sendFriend": "Send to a friend",
   "cardLead": "You are",
   "friendText": "I got '{kw}'. What will you get?",
   "friendMine": "Your friend's type",
   "cardRare": "About {p}% of people are this type",
   "guessAsk": "Well? Does that sound about right?",
   "guessYes": "Sounds right",
   "guessNo": "Not at all",
   "replyYes": "I thought so. I have never been wrong.",
   "replyNo": "I expected you to say that. Still, I have never been wrong, and that is about to be proven."
  },
  "zh": {
   "headline": "没用的东西推荐器",
   "tagline": "没什么用，但它是你内心深处真正想要的。让我告诉你。",
   "intro": "请深呼吸。在这里，你什么都不需要证明，因为一切都毫无用处。真正的无用，只在放松时出现。轻松地回答就好。",
   "start": "开始吧",
   "next": "下一步",
   "shopExp": "有些人觉得没用的东西就是垃圾，我听了会有点难过。你有没有故意买过没用的东西？",
   "shopAsk": "你在哪里购物过？试过的都点一下，没试过的不用点。",
   "shopDone": "选好了",
   "shopGo": "那么现在，我来告诉你，连你自己都不知道的、你需要的东西。",
   "qn": "第{n}个问题",
   "yes": "是的",
   "no": "不是",
   "back": "返回上一题",
   "reveal": "那是什么？",
   "guessLead": "你内心深处一直想要的是……",
   "resultLead": "这是你心底一直在等的东西。",
   "resultBuy": "去看看这件东西",
   "alsoLead": "你也许还会喜欢这些。",
   "again": "再来一次",
   "shareShort": "分享",
   "copiedShort": "链接已复制",
   "copiedToast": "已复制",
   "shareText": "没用的东西推荐器",
   "disclosure": "本网站参与联盟营销，购买后运营者可能获得佣金。",
   "musicOn": "♪ 开",
   "musicOff": "♪ 关",
   "leads": [
    "原来如此。",
    "很好。",
    "那么，",
    "再多问一点。",
    "明白了。"
   ],
   "stage2": "现在，我想把氛围问得更具体一些。",
   "stage3": "最后，问几个细节。",
   "traitTwo": "你是一个{a}，又{b}的人。",
   "traitOne": "你是一个{a}的人。",
   "traitNone": "你是懂得爱没用东西的人。",
   "traitLead": "现在，我来告诉你，你内心最想要的那件没用的东西。",
   "found": "找到了。",
   "kwFmt": "你是**{kw}**。",
   "none": "都不太符合",
   "oppLabel": "与你相反的类型",
   "matchLabel": "与你最合拍的类型",
   "oppNote": "{d}的人，和你站在完全相反的一端，却能互相弥补。",
   "matchNote": "{d}的人，和你太像了，可以成为灵魂伴侣。",
   "rarityLine": "出现这个类型的概率约为 **{p}%**。",
   "rarityOpen": "真令人惊讶。这种类型只占约 **{p}%**。",
   "rarityOpen2": "有意思。这种类型约占 **{p}%**。",
   "secretBtn": "查看隐藏的第二名",
   "secretLead": "这是你自己都没察觉、一直放在心里的另一件。",
   "friendBanner": "你的朋友得到的是**{kw}**。你会是什么？",
   "cmpTitle": "你和朋友的契合度",
   "cmpTwin": "你们是同一类型。不用说话，也会站在同一件东西前。",
   "cmpMatch": "朋友和你非常合拍。品味相通，待在一起应该会莫名轻松。",
   "cmpOpp": "朋友和你是完全相反的类型。互相逛逛对方的世界，反而可能走得很久。",
   "cmpSome": "你们至少有一个相似点。这一点就能成为聊天的开头。",
   "cmpNone": "你们来自不同的星球。所以，请不要互相挑选礼物。",
   "makeCard": "生成分享卡片",
   "saveCard": "保存图片",
   "saveHint": "也可以长按图片保存。",
   "shareCard": "分享图片",
   "sendFriend": "发给朋友",
   "cardLead": "你是",
   "friendText": "我的结果是「{kw}」。你会是什么呢？",
   "friendMine": "朋友的类型",
   "cardRare": "出现概率约 {p}% 的类型",
   "guessAsk": "怎么样？说得还算准吧？",
   "guessYes": "好像说中了",
   "guessNo": "完全不是",
   "replyYes": "我就知道。我从来没有错过。",
   "replyNo": "我就猜你会这么说。不过我从来没有错过，马上就会证明。"
  },
  "ja": {
   "headline": "役に立たないモノ推薦機",
   "tagline": "役には立たないけれど、あなたが心の奥で求めているものをお伝えします。",
   "intro": "大きく息を吸ってください。ここでは何も証明する必要はありません。すべてが役立たずですから。本物の無用は、力を抜いたときに現れます。気楽にお答えください。",
   "start": "はじめます",
   "next": "次へ",
   "shopExp": "世の中には、役に立たないものはゴミだと考える人もいます。私はそのたびに少し胸が痛みます。わざと役に立たないものを買ったことはありますか？",
   "shopAsk": "どこで買い物をしたことがありますか？利用したところを全部押してください。ない場合は押さなくて大丈夫です。",
   "shopDone": "チェックしました",
   "shopGo": "それでは、あなた自身も知らない、あなたに必要なものをお教えしましょう。",
   "qn": "{n}番目の質問",
   "yes": "はい",
   "no": "いいえ",
   "back": "ひとつ戻る",
   "reveal": "それは何ですか？",
   "guessLead": "あなたが心の奥で求めていたものは……",
   "resultLead": "心の奥でずっと待っていたものです。",
   "resultBuy": "ものを見に行く",
   "alsoLead": "こちらもお気に召すかもしれません。",
   "again": "もう一度",
   "shareShort": "シェアする",
   "copiedShort": "リンクをコピーしました",
   "copiedToast": "コピーしました",
   "shareText": "役に立たないモノ推薦機",
   "disclosure": "当サイトはアフィリエイト広告を利用しており、購入時に運営者が報酬を受け取る場合があります。",
   "musicOn": "♪ オン",
   "musicOff": "♪ オフ",
   "leads": [
    "なるほど。",
    "よろしいです。",
    "それでは、",
    "もう少しお尋ねします。",
    "承知しました。"
   ],
   "stage2": "ここからは、雰囲気をもう少し具体的にお尋ねします。",
   "stage3": "最後に、細かい部分をお尋ねします。",
   "traitTwo": "あなたは、{a}、そして{b}人です。",
   "traitOne": "あなたは、{a}人です。",
   "traitNone": "あなたは、役に立たないものを愛せる人です。",
   "traitLead": "では、あなたの本心がいちばん欲しがっている役立たずの品をお教えします。",
   "found": "見つけました。",
   "kwFmt": "あなたは**{kw}**です。",
   "none": "どれも当てはまりません",
   "oppLabel": "正反対のタイプ",
   "matchLabel": "相性ばつぐんのタイプ",
   "oppNote": "{d}人は、あなたとは正反対の側に立ちながら、お互いを補い合えます。",
   "matchNote": "{d}人は、あなたにとても似ていて、魂の相棒になれます。",
   "rarityLine": "このタイプが出る確率は約 **{p}%** です。",
   "rarityOpen": "これは驚きました。このタイプは約 **{p}%** しかいません。",
   "rarityOpen2": "興味深いですね。このタイプは約 **{p}%** です。",
   "secretBtn": "隠れた2位を見る",
   "secretLead": "自分でも気づかないうちに、心にひっかかっていたもう一つです。",
   "friendBanner": "お友だちは**{kw}**でした。あなたは何が出るでしょう？",
   "cmpTitle": "お友だちとの相性",
   "cmpTwin": "お二人は同じタイプです。言わなくても、同じ物の前に立っているでしょう。",
   "cmpMatch": "お友だちはあなたと相性ばつぐんのタイプです。好みが通じて、一緒にいるとなぜか楽でしょう。",
   "cmpOpp": "お友だちはあなたと正反対のタイプです。お互いの世界をのぞくうちに、意外と長続きする間柄です。",
   "cmpSome": "似ているところが一つはあります。その一つが会話のきっかけになります。",
   "cmpNone": "お二人は別々の星から来た間柄です。贈り物は、お互いに選ばないでください。",
   "makeCard": "シェアカードを作る",
   "saveCard": "画像を保存",
   "saveHint": "画像を長押しして保存することもできます。",
   "shareCard": "画像をシェア",
   "sendFriend": "友だちに送る",
   "cardLead": "あなたは",
   "friendText": "私は「{kw}」でした。あなたは何が出る？",
   "friendMine": "お友だちのタイプ",
   "cardRare": "出る確率 約{p}%のタイプ",
   "guessAsk": "いかがでしょう。だいたい当たっていますか？",
   "guessYes": "当たっている気がします",
   "guessNo": "全然違います",
   "replyYes": "やはりそうでしたか。私は間違えたことがありません。",
   "replyNo": "そうおっしゃると思っていました。それでも私は間違えたことがありません。すぐに証明されます。"
  },
  "es": {
   "headline": "Recomendador de cosas inútiles",
   "tagline": "Inútil, sí, pero es lo que deseas en lo más hondo. Te lo muestro.",
   "intro": "Respira hondo. Aquí no tienes que demostrar nada. Todo es inútil, al fin y al cabo. La verdadera inutilidad solo aparece cuando te relajas. Responde con calma.",
   "start": "Comenzar",
   "next": "Siguiente",
   "shopExp": "Hay quien piensa que lo inútil es basura. A mí eso me duele un poco. ¿Alguna vez has comprado algo inútil a propósito?",
   "shopAsk": "¿Dónde has comprado antes? Marca todas las tiendas que hayas usado. Si no has usado ninguna, no marques nada.",
   "shopDone": "Ya marqué",
   "shopGo": "Y ahora, te diré lo que necesitas, algo que ni tú mismo sabes todavía.",
   "qn": "Pregunta {n}",
   "yes": "Sí",
   "no": "No",
   "back": "Volver atrás",
   "reveal": "¿Qué es?",
   "guessLead": "Lo que deseabas en lo más hondo es…",
   "resultLead": "Lo que llevabas tiempo esperando en el fondo.",
   "resultBuy": "Ir a ver el objeto",
   "alsoLead": "Quizás también te guste esto.",
   "again": "Otra vez",
   "shareShort": "Compartir",
   "copiedShort": "Enlace copiado",
   "copiedToast": "Copiado",
   "shareText": "Recomendador de cosas inútiles",
   "disclosure": "Este sitio contiene enlaces de afiliado y puede recibir una comisión por las compras.",
   "musicOn": "♪ Activada",
   "musicOff": "♪ Apagada",
   "leads": [
    "Ya veo. ",
    "Bien. ",
    "Entonces, ",
    "Una cosa más. ",
    "Entendido. "
   ],
   "stage2": "Ahora te preguntaré con algo más de detalle. ",
   "stage3": "Por último, unos detalles finos. ",
   "traitTwo": "Eres alguien que {a} y {b}.",
   "traitOne": "Eres alguien que {a}.",
   "traitNone": "Eres alguien que sabe amar lo inútil.",
   "traitLead": "Ahora te diré el objeto inútil que tu corazón desea más.",
   "found": "Lo encontré.",
   "kwFmt": "Eres **{kw}**.",
   "none": "Ninguna de las anteriores",
   "oppLabel": "Tu opuesto",
   "matchLabel": "Tu mejor pareja",
   "oppNote": "Quien {d} está en el extremo opuesto al tuyo, y aun así podéis complementaros.",
   "matchNote": "Quien {d} se parece tanto a ti que podría ser tu alma gemela.",
   "rarityLine": "Este tipo sale en aproximadamente un **{p}%** de los casos.",
   "rarityOpen": "Vaya, qué sorpresa. Solo cerca del **{p}%** de las personas es de este tipo.",
   "rarityOpen2": "Qué interesante. Cerca del **{p}%** de las personas es de este tipo.",
   "secretBtn": "Ver tu segundo oculto",
   "secretLead": "Otro que llevaba tiempo rondándote sin que lo supieras.",
   "friendBanner": "A tu amigo le salió **{kw}**. ¿Qué te saldrá a ti?",
   "cmpTitle": "Tú y tu amigo",
   "cmpTwin": "Sois del mismo tipo. Sin decir nada acabaríais frente al mismo objeto.",
   "cmpMatch": "Tu amigo encaja muy bien contigo. Vuestros gustos coinciden, así que estar juntos debería resultar extrañamente fácil.",
   "cmpOpp": "Tu amigo es tu opuesto. Curiosear en el mundo del otro puede dar una pareja sorprendentemente duradera.",
   "cmpSome": "Tenéis al menos una cosa en común. Esa cosa puede iniciar la conversación.",
   "cmpNone": "Venís de estrellas distintas. Mejor no os elijáis los regalos.",
   "makeCard": "Crear tarjeta para compartir",
   "saveCard": "Guardar imagen",
   "saveHint": "También puedes mantener pulsada la imagen para guardarla.",
   "shareCard": "Compartir imagen",
   "sendFriend": "Enviar a un amigo",
   "cardLead": "Eres",
   "friendText": "Me salió «{kw}». ¿Qué te saldrá a ti?",
   "friendMine": "Tipo de tu amigo",
   "cardRare": "Un tipo que sale en un {p}% aprox.",
   "guessAsk": "¿Y bien? ¿Voy bastante cerca?",
   "guessYes": "Parece que sí",
   "guessNo": "Para nada",
   "replyYes": "Ya lo sabía. Jamás me he equivocado.",
   "replyNo": "Esperaba que dijeras eso. Aun así, jamás me he equivocado, y está a punto de demostrarse."
  },
  "pt": {
   "title": "Uselessly Yours",
   "headline": "Recomendador de Coisas Inúteis",
   "tagline": "Inúteis, sim. Mas é o que você quer lá no fundo. Deixe-me mostrar.",
   "intro": "Respire fundo. Você não precisa provar nada aqui. Afinal, tudo é inútil. A verdadeira inutilidade só aparece quando você relaxa. Responda com calma.",
   "start": "Começar",
   "next": "Continuar",
   "shopExp": "Tem gente que acha que coisa inútil é lixo. Isso me magoa um pouco. Você já comprou algo inútil de propósito?",
   "shopAsk": "Onde você já fez compras? Toque em todos que já usou. Se não usou nenhum, é só deixar sem marcar.",
   "shopDone": "Marquei",
   "shopGo": "Pois bem, vou lhe dizer do que você precisa, algo que nem você sabe ainda.",
   "qn": "Pergunta {n}",
   "yes": "Sim",
   "no": "Não",
   "back": "Voltar uma",
   "reveal": "O que é?",
   "guessLead": "O que você queria lá no fundo é…",
   "resultLead": "É o que você esperava havia tempo, lá no fundo.",
   "resultBuy": "Ver o item",
   "alsoLead": "Talvez você goste destes também.",
   "again": "Tentar de novo",
   "shareShort": "Compartilhar",
   "copiedShort": "Link copiado",
   "copiedToast": "Copiado",
   "shareText": "Recomendador de Coisas Inúteis",
   "disclosure": "Este site contém links de afiliados e pode receber comissão pelas compras.",
   "musicOn": "♪ Ligada",
   "musicOff": "♪ Desligada",
   "leads": [
    "Entendo. ",
    "Bom. ",
    "Então, ",
    "Mais uma coisa. ",
    "Certo. "
   ],
   "stage2": "Agora vou perguntar sobre o clima com um pouco mais de detalhe. ",
   "stage3": "Por fim, alguns detalhes finos. ",
   "traitTwo": "Você é alguém que {a}, e {b}.",
   "traitOne": "Você é alguém que {a}.",
   "traitNone": "Você é alguém que sabe amar o inútil.",
   "traitLead": "Agora vou lhe revelar o objeto inútil que o seu coração mais deseja.",
   "found": "Achei.",
   "kwFmt": "Você é **{kw}**.",
   "none": "Nenhuma delas",
   "oppLabel": "Seu oposto",
   "matchLabel": "Seu par perfeito",
   "oppNote": "Quem {d} está no extremo oposto ao seu, mas vocês dois podem se completar.",
   "matchNote": "Quem {d} é tão parecido com você que poderia ser sua alma gêmea.",
   "rarityLine": "Cerca de **{p}%** dos resultados caem neste tipo.",
   "rarityOpen": "Que surpresa. Apenas cerca de **{p}%** das pessoas são deste tipo.",
   "rarityOpen2": "Interessante. Cerca de **{p}%** das pessoas são deste tipo.",
   "secretBtn": "Revelar seu segundo colocado secreto",
   "secretLead": "Mais um que está quietinho na sua cabeça.",
   "friendBanner": "Seu amigo tirou **{kw}**. E você, o que vai tirar?",
   "cmpTitle": "Você e seu amigo",
   "cmpTwin": "Vocês são do mesmo tipo. Acabariam diante do mesmo objeto sem dizer uma palavra.",
   "cmpMatch": "Seu amigo combina muito com você. Os gostos se alinham, então estar juntos deve ser estranhamente fácil.",
   "cmpOpp": "Seu amigo é o seu oposto. Explorar o mundo um do outro pode dar uma dupla surpreendentemente duradoura.",
   "cmpSome": "Vocês têm pelo menos uma coisa em comum. Essa coisa pode puxar a conversa.",
   "cmpNone": "Vocês vêm de estrelas diferentes. Talvez seja melhor não escolher presentes um para o outro.",
   "makeCard": "Criar cartão para compartilhar",
   "saveCard": "Salvar imagem",
   "saveHint": "Você também pode manter a imagem pressionada para salvá-la.",
   "shareCard": "Compartilhar imagem",
   "sendFriend": "Enviar para um amigo",
   "cardLead": "Você é",
   "friendText": "Eu tirei '{kw}'. E você, o que vai tirar?",
   "friendMine": "Tipo do seu amigo",
   "cardRare": "Cerca de {p}% das pessoas são deste tipo",
   "guessAsk": "E então? Parece que acertei?",
   "guessYes": "Acertou",
   "guessNo": "Nem um pouco",
   "replyYes": "Eu sabia. Nunca errei.",
   "replyNo": "Já esperava que dissesse isso. Mesmo assim, nunca errei, e isso está prestes a ser provado."
  },
  "fr": {
   "title": "Uselessly Yours",
   "headline": "Recommandeur de Trucs Inutiles",
   "tagline": "Inutile, certes. Mais c'est ce que vous voulez au fond de vous. Laissez-moi vous le montrer.",
   "intro": "Respirez profondément. Vous n'avez rien à prouver ici. Tout est inutile, après tout. La véritable inutilité n'apparaît que lorsque l'on se détend. Répondez en toute simplicité.",
   "start": "Commencer",
   "next": "Suivant",
   "shopExp": "Certains pensent que les choses inutiles ne sont que des déchets. Cela me fait un peu de peine. Avez-vous déjà acheté quelque chose d'inutile exprès ?",
   "shopAsk": "Où avez-vous déjà fait vos achats ? Touchez tout ce que vous avez essayé. Sinon, laissez simplement décoché.",
   "shopDone": "J'ai coché",
   "shopGo": "Bien. Je vais maintenant vous dire ce dont vous avez besoin, quelque chose que vous ignorez vous-même.",
   "qn": "Question {n}",
   "yes": "Oui",
   "no": "Non",
   "back": "Revenir en arrière",
   "reveal": "C'est quoi ?",
   "guessLead": "Ce que vous désirez au fond de vous, c'est…",
   "resultLead": "C'est ce que vous attendiez depuis longtemps, au fond de vous.",
   "resultBuy": "Voir l'article",
   "alsoLead": "Ceux-ci pourraient aussi vous plaire.",
   "again": "Recommencer",
   "shareShort": "Partager",
   "copiedShort": "Lien copié",
   "copiedToast": "Copié",
   "shareText": "Recommandeur de Trucs Inutiles",
   "disclosure": "Ce site contient des liens d'affiliation et peut percevoir une commission sur les achats.",
   "musicOn": "♪ Activée",
   "musicOff": "♪ Coupée",
   "leads": [
    "Je vois. ",
    "Bien. ",
    "Dans ce cas, ",
    "Encore une chose. ",
    "Entendu. "
   ],
   "stage2": "Voyons maintenant l'ambiance avec un peu plus de précision. ",
   "stage3": "Enfin, quelques détails. ",
   "traitTwo": "Vous êtes quelqu'un qui {a}, et {b}.",
   "traitOne": "Vous êtes quelqu'un qui {a}.",
   "traitNone": "Vous êtes quelqu'un qui sait aimer l'inutile.",
   "traitLead": "Je vais maintenant vous révéler l'objet inutile que votre cœur désire le plus.",
   "found": "Trouvé.",
   "kwFmt": "Vous êtes **{kw}**.",
   "none": "Aucune de ces réponses",
   "oppLabel": "Votre opposé",
   "matchLabel": "Votre meilleur match",
   "oppNote": "Quelqu'un qui {d} se trouve à l'opposé de vous, et pourtant vous pouvez vous compléter.",
   "matchNote": "Quelqu'un qui {d} vous ressemble tellement que vous pourriez être des âmes sœurs.",
   "rarityLine": "Environ **{p} %** des résultats tombent sur ce type.",
   "rarityOpen": "Voyez-vous cela. Seulement **{p} %** environ des gens sont de ce type.",
   "rarityOpen2": "Intéressant. Environ **{p} %** des gens sont de ce type.",
   "secretBtn": "Révéler votre second choix caché",
   "secretLead": "Un autre qui trotte discrètement dans votre esprit.",
   "friendBanner": "Votre ami a obtenu **{kw}**. Et vous, qu'allez-vous obtenir ?",
   "cmpTitle": "Vous et votre ami",
   "cmpTwin": "Vous êtes du même type. Vous finiriez devant le même objet sans dire un mot.",
   "cmpMatch": "Votre ami vous correspond parfaitement. Vos goûts s'alignent, donc être ensemble devrait paraître étrangement facile.",
   "cmpOpp": "Votre ami est votre opposé. Explorer le monde de l'autre pourrait faire de vous un duo étonnamment durable.",
   "cmpSome": "Vous partagez au moins une chose. Cette chose peut lancer la conversation.",
   "cmpNone": "Vous venez d'étoiles différentes. Mieux vaut peut-être ne pas choisir les cadeaux de l'autre.",
   "makeCard": "Créer une carte à partager",
   "saveCard": "Enregistrer l'image",
   "saveHint": "Vous pouvez aussi appuyer longuement sur l'image pour l'enregistrer.",
   "shareCard": "Partager l'image",
   "sendFriend": "Envoyer à un ami",
   "cardLead": "Vous êtes",
   "friendText": "J'ai obtenu « {kw} ». Et toi, qu'est-ce que tu vas obtenir ?",
   "friendMine": "Le type de votre ami",
   "cardRare": "Environ {p} % des gens sont de ce type",
   "guessAsk": "Alors ? Est-ce à peu près ça ?",
   "guessYes": "C'est ça",
   "guessNo": "Pas du tout",
   "replyYes": "Je m'en doutais. Je ne me trompe jamais.",
   "replyNo": "Je m'attendais à cette réponse. Je ne me trompe pourtant jamais, et vous allez en avoir la preuve."
  },
  "de": {
   "title": "Uselessly Yours",
   "headline": "Empfehler nutzloser Dinge",
   "tagline": "Nutzlos, ja. Aber genau das wollen Sie tief im Inneren. Lassen Sie mich es Ihnen zeigen.",
   "intro": "Atmen Sie tief durch. Sie müssen hier nichts beweisen. Alles ist ja nutzlos. Echte Nutzlosigkeit zeigt sich erst, wenn man loslässt. Antworten Sie ganz entspannt.",
   "start": "Los geht's",
   "next": "Weiter",
   "shopExp": "Manche Leute halten nutzlose Dinge für Müll. Das tut mir ein wenig weh. Haben Sie schon einmal absichtlich etwas Nutzloses gekauft?",
   "shopAsk": "Wo haben Sie schon eingekauft? Tippen Sie alle an, die Sie ausprobiert haben. Wenn keine, lassen Sie einfach alles unmarkiert.",
   "shopDone": "Fertig markiert",
   "shopGo": "Nun denn, ich sage Ihnen, was Sie brauchen, etwas, das nicht einmal Sie selbst schon wissen.",
   "qn": "Frage {n}",
   "yes": "Ja",
   "no": "Nein",
   "back": "Einen zurück",
   "reveal": "Und das wäre?",
   "guessLead": "Was Sie sich tief im Inneren gewünscht haben, ist…",
   "resultLead": "Darauf haben Sie tief im Inneren schon lange gewartet.",
   "resultBuy": "Artikel ansehen",
   "alsoLead": "Diese könnten Ihnen auch gefallen.",
   "again": "Nochmal versuchen",
   "shareShort": "Teilen",
   "copiedShort": "Link kopiert",
   "copiedToast": "Kopiert",
   "shareText": "Empfehler nutzloser Dinge",
   "disclosure": "Diese Seite enthält Affiliate-Links und erhält bei Käufen möglicherweise eine Provision.",
   "musicOn": "♪ An",
   "musicOff": "♪ Aus",
   "leads": [
    "Verstehe. ",
    "Gut. ",
    "Dann, ",
    "Noch etwas. ",
    "Verstanden. "
   ],
   "stage2": "Nun frage ich etwas genauer nach der Stimmung. ",
   "stage3": "Zum Schluss noch ein paar feine Details. ",
   "traitTwo": "Sie sind jemand, der {a}, und {b}.",
   "traitOne": "Sie sind jemand, der {a}.",
   "traitNone": "Sie sind jemand, der das Nutzlose zu lieben weiß.",
   "traitLead": "Jetzt verrate ich Ihnen das nutzlose Objekt, das Ihr Herz am meisten begehrt.",
   "found": "Gefunden.",
   "kwFmt": "Sie sind **{kw}**.",
   "none": "Keine davon",
   "oppLabel": "Ihr Gegenpol",
   "matchLabel": "Ihr bester Match",
   "oppNote": "Jemand, der {d}, steht Ihnen genau gegenüber, und doch können Sie sich ergänzen.",
   "matchNote": "Jemand, der {d}, ist Ihnen so ähnlich, dass Sie Seelenverwandte sein könnten.",
   "rarityLine": "Etwa **{p} %** der Ergebnisse landen bei diesem Typ.",
   "rarityOpen": "Oh, wie überraschend. Nur etwa **{p} %** der Menschen sind dieser Typ.",
   "rarityOpen2": "Interessant. Etwa **{p} %** der Menschen sind dieser Typ.",
   "secretBtn": "Ihren heimlichen Zweitplatzierten enthüllen",
   "secretLead": "Noch einer, der Ihnen ganz leise im Kopf herumgeht.",
   "friendBanner": "Jemand aus Ihrem Freundeskreis hat **{kw}** bekommen. Und was bekommen Sie?",
   "cmpTitle": "Sie und Ihr Freund",
   "cmpTwin": "Sie beide sind derselbe Typ. Sie würden ohne ein Wort vor demselben Objekt landen.",
   "cmpMatch": "Ihr Freund passt hervorragend zu Ihnen. Ihr Geschmack stimmt überein, deshalb fühlt sich das Zusammensein seltsam leicht an.",
   "cmpOpp": "Ihr Freund ist Ihr Gegenteil. Die Welt des anderen zu erkunden, könnte ein überraschend beständiges Duo ergeben.",
   "cmpSome": "Sie teilen mindestens eine Sache. Diese eine Sache kann das Gespräch eröffnen.",
   "cmpNone": "Sie stammen von verschiedenen Sternen. Vielleicht wählen Sie besser nicht füreinander die Geschenke aus.",
   "makeCard": "Teilkarte erstellen",
   "saveCard": "Bild speichern",
   "saveHint": "Sie können das Bild auch gedrückt halten, um es zu speichern.",
   "shareCard": "Bild teilen",
   "sendFriend": "An einen Freund senden",
   "cardLead": "Sie sind",
   "friendText": "Ich habe „{kw}“ bekommen. Und was bekommst du?",
   "friendMine": "Typ Ihres Freundes",
   "cardRare": "Etwa {p} % der Menschen sind dieser Typ",
   "guessAsk": "Na? Klingt das ungefähr richtig?",
   "guessYes": "Klingt richtig",
   "guessNo": "Überhaupt nicht",
   "replyYes": "Das dachte ich mir. Ich habe mich noch nie geirrt.",
   "replyNo": "Ich habe damit gerechnet. Trotzdem habe ich mich noch nie geirrt, und das wird sich gleich beweisen."
  },
  "th": {
   "title": "Uselessly Yours",
   "headline": "ตัวแนะนำของไร้สาระ",
   "tagline": "ไร้สาระก็จริง แต่นี่คือสิ่งที่คุณต้องการลึกๆ ในใจ ให้ผมแสดงให้ดูครับ",
   "intro": "หายใจเข้าลึกๆ ครับ ที่นี่คุณไม่ต้องพิสูจน์อะไรทั้งนั้น เพราะทุกอย่างไร้สาระอยู่แล้ว ความไร้สาระแท้จริงจะปรากฏเมื่อเราผ่อนคลาย ตอบสบายๆ ได้เลยครับ",
   "start": "เริ่มเลยครับ",
   "next": "ต่อไป",
   "shopExp": "บางคนคิดว่าของไร้สาระคือขยะ ผมรู้สึกเจ็บใจนิดหน่อยเวลาได้ยินแบบนั้น คุณเคยซื้อของไร้ประโยชน์โดยตั้งใจไหมครับ",
   "shopAsk": "คุณเคยช้อปปิ้งที่ไหนมาบ้างครับ แตะทุกที่ที่เคยใช้ หากไม่เคยก็ไม่ต้องเลือกครับ",
   "shopDone": "เลือกเสร็จแล้ว",
   "shopGo": "ถ้าอย่างนั้น ผมจะบอกสิ่งที่คุณต้องการ ซึ่งแม้แต่คุณเองก็ยังไม่รู้ครับ",
   "qn": "คำถามที่ {n}",
   "yes": "ใช่",
   "no": "ไม่ใช่",
   "back": "ย้อนกลับ",
   "reveal": "มันคืออะไรครับ",
   "guessLead": "สิ่งที่คุณต้องการลึกๆ ในใจ คือ…",
   "resultLead": "สิ่งที่คุณรอคอยมานานในใจ",
   "resultBuy": "ไปดูสินค้า",
   "alsoLead": "คุณอาจชอบสิ่งเหล่านี้ด้วย",
   "again": "ลองใหม่",
   "shareShort": "แชร์",
   "copiedShort": "คัดลอกลิงก์แล้ว",
   "copiedToast": "คัดลอกแล้ว",
   "shareText": "ตัวแนะนำของไร้สาระ",
   "disclosure": "เว็บไซต์นี้มีลิงก์แอฟฟิลิเอต และอาจได้รับค่าคอมมิชชันเมื่อมีการซื้อ",
   "musicOn": "♪ เปิด",
   "musicOff": "♪ ปิด",
   "leads": [
    "เข้าใจแล้วครับ ",
    "ดีครับ ",
    "ถ้าอย่างนั้น ",
    "อีกอย่างหนึ่งครับ ",
    "รับทราบครับ "
   ],
   "stage2": "ต่อไปขอถามเรื่องบรรยากาศให้ละเอียดขึ้นอีกนิดครับ ",
   "stage3": "สุดท้าย ขอถามรายละเอียดเล็กน้อยครับ ",
   "traitTwo": "คุณเป็นคนที่{a} และ{b}",
   "traitOne": "คุณเป็นคนที่{a}",
   "traitNone": "คุณเป็นคนที่รู้จักรักสิ่งไร้ประโยชน์",
   "traitLead": "ต่อไปผมจะบอกของไร้สาระที่หัวใจคุณต้องการมากที่สุดครับ",
   "found": "เจอแล้วครับ",
   "kwFmt": "คุณคือ **{kw}** ครับ",
   "none": "ไม่มีข้อไหนเลย",
   "oppLabel": "ขั้วตรงข้ามของคุณ",
   "matchLabel": "คู่ที่เข้ากันที่สุด",
   "oppNote": "คนที่{d} อยู่คนละขั้วกับคุณ แต่ก็เติมเต็มกันได้",
   "matchNote": "คนที่{d} เหมือนคุณมากจนอาจเป็นเพื่อนแท้ทางใจได้",
   "rarityLine": "ประมาณ **{p}%** ของผลลัพธ์ตกที่ประเภทนี้",
   "rarityOpen": "น่าประหลาดใจจริงๆ ครับ มีคนประเภทนี้เพียงประมาณ **{p}%** เท่านั้นครับ",
   "rarityOpen2": "น่าสนใจครับ ประมาณ **{p}%** ของคนเป็นประเภทนี้ครับ",
   "secretBtn": "เปิดเผยอันดับสองที่ซ่อนอยู่",
   "secretLead": "อีกชิ้นที่แอบอยู่ในใจคุณเงียบๆ",
   "friendBanner": "เพื่อนของคุณได้ **{kw}** แล้วคุณจะได้อะไร",
   "cmpTitle": "คุณกับเพื่อน",
   "cmpTwin": "พวกคุณเป็นประเภทเดียวกัน ไม่ต้องพูดอะไรก็คงไปหยุดอยู่หน้าของชิ้นเดียวกัน",
   "cmpMatch": "เพื่อนของคุณเข้ากับคุณมาก รสนิยมตรงกัน อยู่ด้วยกันแล้วสบายใจอย่างประหลาด",
   "cmpOpp": "เพื่อนของคุณอยู่คนละขั้วกับคุณ การสำรวจโลกของกันและกันอาจทำให้เป็นคู่ที่อยู่ด้วยกันได้นานอย่างไม่คาดคิด",
   "cmpSome": "พวกคุณมีอย่างน้อยหนึ่งอย่างที่เหมือนกัน เรื่องนั้นเอาไว้เริ่มคุยได้",
   "cmpNone": "พวกคุณมาจากคนละดวงดาว บางทีอย่าเลือกของขวัญให้กันจะดีกว่า",
   "makeCard": "สร้างการ์ดสำหรับแชร์",
   "saveCard": "บันทึกรูป",
   "saveHint": "หรือกดรูปค้างไว้เพื่อบันทึกก็ได้",
   "shareCard": "แชร์รูป",
   "sendFriend": "ส่งให้เพื่อน",
   "cardLead": "คุณคือ",
   "friendText": "ฉันได้ '{kw}' แล้วเธอล่ะจะได้อะไร",
   "friendMine": "ประเภทของเพื่อนคุณ",
   "cardRare": "ประมาณ {p}% ของคนเป็นประเภทนี้",
   "guessAsk": "เป็นยังไงบ้างครับ ตรงใจไหม",
   "guessYes": "ตรงเลย",
   "guessNo": "ไม่ตรงเลย",
   "replyYes": "ผมรู้อยู่แล้วครับ ผมไม่เคยพลาด",
   "replyNo": "ผมก็คิดว่าคุณจะพูดแบบนั้น แต่ผมไม่เคยพลาดครับ และเดี๋ยวก็จะพิสูจน์ให้ดู"
  }
 },
 "analytics": {
  "id": "b879d6da-1b32-4120-b0f4-367e273fa58f",
  "src": "https://cloud.umami.is/script.js"
 },
 "music": {
  "src": "assets/music/bgm.mp3",
  "volume": 0.35
 },
 "settings": {
  "minQuestions": 9,
  "maxQuestions": 14,
  "guessThreshold": 0.3,
  "maxGuesses": 3,
  "alsoCount": 2,
  "showPrice": false,
  "showDisclosure": false,
  "stageSteps": [
   5,
   9
  ],
  "maxChoice": 9,
  "shopFactor": 0.06
 },
 "questions": [
  {
   "id": "useful",
   "text": {
    "ko": "방이나 책상 위를 꾸미는 일이, 당신에게는 쉬는 시간처럼 느껴집니까?",
    "en": "Does decorating your room or desk feel like a way of resting?",
    "zh": "布置房间或书桌，对你来说像是一种休息吗？",
    "ja": "部屋や机の上を飾ることは、あなたにとって休息のように感じられますか？",
    "es": "¿Decorar tu cuarto o tu escritorio te parece una forma de descansar?",
    "pt": "Decorar o quarto ou a mesa é, para você, uma forma de descansar?",
    "fr": "Décorer votre chambre ou votre bureau, est-ce une façon de vous reposer ?",
    "de": "Ist das Dekorieren Ihres Zimmers oder Schreibtischs für Sie eine Art, sich auszuruhen?",
    "th": "การแต่งห้องหรือโต๊ะทำงาน เป็นวิธีพักผ่อนอย่างหนึ่งของคุณหรือเปล่า?"
   },
   "yes": [
    "decor"
   ],
   "no": [
    "useful"
   ],
   "stage": 1
  },
  {
   "id": "funny",
   "text": {
    "ko": "솔직히, 귀여운 것보다 어딘가 사고 친 얼굴이 더 끌립니까?",
    "en": "Be honest: are you more drawn to a face that looks like it just caused trouble than to a cute one?",
    "zh": "老实说，比起可爱的脸，你是不是更被一张刚闯完祸的脸吸引？",
    "ja": "正直に言って、かわいい顔より、何かやらかした顔のほうに惹かれますか？",
    "es": "Seamos sinceros: ¿te atrae más una cara que acaba de liarla que una adorable?",
    "pt": "Sendo sincero(a): você se atrai mais por um rostinho com cara de quem aprontou do que por um fofinho?",
    "fr": "Soyons honnêtes : êtes-vous plus attiré(e) par une bouille qui a l'air d'avoir fait une bêtise que par une bouille mignonne ?",
    "de": "Ehrlich gesagt: Ziehen Sie ein Gesicht an, das aussieht, als hätte es gerade etwas ausgefressen, mehr an als ein niedliches?",
    "th": "ตอบตามตรงนะ คุณหลงหน้าตาที่ดูเหมือนเพิ่งก่อเรื่องมามากกว่าหน้าตาน่ารักใช่ไหม?"
   },
   "yes": [
    "funny_face",
    "prank",
    "cartoon"
   ],
   "no": [
    "cute",
    "doll",
    "plush"
   ],
   "stage": 1
  },
  {
   "id": "monster",
   "text": {
    "ko": "어릴 때 예쁜 인형 옆에 놓인 괴상한 괴물 피규어를 몰래 더 아꼈습니까?",
    "en": "As a kid, did you secretly love the weird monster figure more than the pretty doll next to it?",
    "zh": "小时候，你是不是偷偷更喜欢漂亮娃娃旁边那只怪模怪样的怪物玩偶？",
    "ja": "子どもの頃、きれいな人形の隣にいた変な怪獣のフィギュアを、こっそり大事にしていましたか？",
    "es": "De niño, ¿querías en secreto más a la figura de monstruo raro que a la muñeca bonita de al lado?",
    "pt": "Quando criança, você secretamente preferia o monstrinho esquisito à boneca bonita ao lado?",
    "fr": "Enfant, préfériez-vous en secret le monstre bizarre à la jolie poupée d'à côté ?",
    "de": "Mochten Sie als Kind heimlich die komische Monsterfigur lieber als die hübsche Puppe daneben?",
    "th": "ตอนเด็ก ๆ คุณแอบชอบฟิกเกอร์มอนสเตอร์แปลก ๆ มากกว่าตุ๊กตาสวย ๆ ข้าง ๆ ใช่หรือเปล่า?"
   },
   "yes": [
    "scary",
    "alien",
    "tough",
    "statue"
   ],
   "no": [
    "doll",
    "cute",
    "plush"
   ],
   "stage": 1
  },
  {
   "id": "keepdecor",
   "text": {
    "ko": "이사할 때마다 버릴까 고민하다가, 결국 박스에 다시 넣는 물건이 있습니까?",
    "en": "Is there something you consider throwing out every time you move, only to put it back in the box?",
    "zh": "每次搬家都想扔，最后又放回箱子里的东西，你有吗？",
    "ja": "引っ越しのたびに捨てようか迷って、結局また箱に戻す物がありますか？",
    "es": "¿Hay algo que cada mudanza piensas tirar y acabas devolviendo a la caja?",
    "pt": "Tem algo que você pensa em jogar fora a cada mudança, mas sempre acaba colocando de volta na caixa?",
    "fr": "Y a-t-il un objet que vous pensez jeter à chaque déménagement, avant de le remettre dans le carton ?",
    "de": "Gibt es etwas, das Sie bei jedem Umzug wegwerfen wollen und dann doch wieder in den Karton legen?",
    "th": "มีของที่คุณคิดจะทิ้งทุกครั้งที่ย้ายบ้าน แต่สุดท้ายก็ใส่กลับลงกล่องไหม?"
   },
   "yes": [
    "decor",
    "statue",
    "ceramic",
    "craft"
   ],
   "no": [
    "useful"
   ],
   "stage": 1
  },
  {
   "id": "odd_gift",
   "text": {
    "ko": "정체 모를 선물을 받고 '이게 뭐지' 하면서도, 결국 책상에 올려둔 적이 있습니까?",
    "en": "Have you ever received a mystery gift, thought 'what is this', and still put it on your desk?",
    "zh": "你有没有收到过来历不明的礼物，嘴上说“这是什么”，最后还是摆到了桌上？",
    "ja": "正体不明のプレゼントをもらって「なにこれ」と思いつつ、結局机に置いたことはありますか？",
    "es": "¿Has recibido alguna vez un regalo misterioso, pensado «¿qué es esto?» y acabado poniéndolo en tu escritorio?",
    "pt": "Já ganhou um presente misterioso, pensou \"o que é isso?\" e mesmo assim deixou na sua mesa?",
    "fr": "Avez-vous déjà reçu un cadeau mystère, pensé « mais c'est quoi, ça ? », et l'avoir quand même posé sur votre bureau ?",
    "de": "Haben Sie schon mal ein Überraschungsgeschenk bekommen, \"Was ist das denn?\" gedacht und es trotzdem auf den Schreibtisch gestellt?",
    "th": "เคยได้ของขวัญปริศนา คิดในใจว่า \"นี่มันอะไรเนี่ย\" แต่ก็ยังวางไว้บนโต๊ะไหม?"
   },
   "yes": [
    "decor",
    "funny_face",
    "prank"
   ],
   "no": [
    "useful",
    "storage"
   ],
   "stage": 2
  },
  {
   "id": "scales",
   "text": {
    "ko": "털보다는 비늘이나 깃털 같은, 살짝 낯선 질감에 눈이 갑니까?",
    "en": "Do your eyes go to slightly unfamiliar textures, like scales or feathers, rather than fur?",
    "zh": "比起毛，你的目光更容易被鳞片或羽毛这类有点陌生的质感吸引吗？",
    "ja": "毛よりも、うろこや羽のような少し馴染みのない質感に目が行きますか？",
    "es": "¿Se te van los ojos hacia texturas algo extrañas, como escamas o plumas, más que hacia el pelo?",
    "pt": "Seus olhos vão para texturas meio incomuns, como escamas ou penas, em vez de pelo?",
    "fr": "Votre regard va-t-il vers les textures un peu inhabituelles, comme les écailles ou les plumes, plutôt que vers les poils ?",
    "de": "Bleibt Ihr Blick eher an ungewöhnlichen Texturen wie Schuppen oder Federn hängen als an Fell?",
    "th": "สายตาคุณมักไปหยุดที่พื้นผิวแปลก ๆ อย่างเกล็ดหรือขนนก มากกว่าขนฟูใช่ไหม?"
   },
   "yes": [
    "frog",
    "alien"
   ],
   "no": [
    "cat",
    "dog",
    "monkey",
    "bear"
   ],
   "stage": 2
  },
  {
   "id": "east",
   "text": {
    "ko": "오래된 불상이나 옛 동양 그림 앞에서 발걸음이 저절로 느려진 적이 있습니까?",
    "en": "Have your steps ever slowed on their own in front of an old Buddha statue or a classical Eastern painting?",
    "zh": "在古老的佛像或东方古画前，你的脚步有没有不自觉地慢下来？",
    "ja": "古い仏像や東洋の古い絵の前で、足が自然とゆっくりになったことはありますか？",
    "es": "¿Se te han ralentizado los pasos solos ante una vieja estatua de Buda o una pintura oriental clásica?",
    "pt": "Seus passos já desaceleraram sozinhos diante de uma estátua antiga de Buda ou de uma pintura oriental clássica?",
    "fr": "Vos pas ont-ils déjà ralenti tout seuls devant une vieille statue de Bouddha ou une peinture orientale classique ?",
    "de": "Sind Ihre Schritte schon mal von allein langsamer geworden vor einer alten Buddha-Statue oder einem klassischen ostasiatischen Gemälde?",
    "th": "เคยเดินช้าลงเองเวลาเจอพระพุทธรูปเก่า ๆ หรือภาพวาดตะวันออกแบบโบราณไหม?"
   },
   "yes": [
    "east",
    "zen",
    "god",
    "incense"
   ],
   "no": [
    "west",
    "cartoon"
   ],
   "stage": 2
  },
  {
   "id": "wall",
   "text": {
    "ko": "남의 집 벽에 걸린 그림을 한참 쳐다본 적이 있습니까?",
    "en": "Have you ever stared for a long time at a picture on someone else's wall?",
    "zh": "你有没有在别人家里盯着墙上的画看了很久？",
    "ja": "人の家の壁にかかった絵を、長いこと眺めたことはありますか？",
    "es": "¿Has mirado durante mucho rato un cuadro en la pared de la casa de otro?",
    "pt": "Você já ficou um tempão olhando um quadro na parede de outra pessoa?",
    "fr": "Avez-vous déjà fixé longuement un tableau accroché chez quelqu'un d'autre ?",
    "de": "Haben Sie schon mal lange ein Bild an der Wand eines anderen angestarrt?",
    "th": "เคยจ้องภาพบนผนังบ้านคนอื่นอยู่นานไหม?"
   },
   "yes": [
    "wall",
    "calendar"
   ],
   "no": [
    "wearable"
   ],
   "stage": 2
  },
  {
   "id": "party",
   "text": {
    "ko": "회식 자리에서 누가 이상한 모자를 쓰자고 하면, 못 이기는 척 쓰는 편입니까?",
    "en": "If someone at a team dinner suggests wearing silly hats, do you pretend to resist and then put one on?",
    "zh": "聚餐时有人提议戴奇怪的帽子，你会半推半就地戴上吗？",
    "ja": "飲み会で誰かが変な帽子をかぶろうと言い出したら、しぶしぶのふりでかぶるほうですか？",
    "es": "Si en una cena de equipo alguien propone ponerse sombreros ridículos, ¿te haces el remolón y te lo pones?",
    "pt": "Se alguém propõe usar chapéus bobos no jantar da firma, você faz doce e depois coloca um?",
    "fr": "Si quelqu'un propose de porter des chapeaux ridicules au dîner d'équipe, faites-vous semblant de résister avant d'en mettre un ?",
    "de": "Wenn jemand beim Teamessen vorschlägt, alberne Hüte aufzusetzen, zieren Sie sich erst und setzen dann doch einen auf?",
    "th": "ถ้ามีคนชวนใส่หมวกตลก ๆ ตอนกินข้าวทีม คุณทำท่าไม่เอาแล้วสุดท้ายก็ใส่ใช่ไหม?"
   },
   "yes": [
    "headwear",
    "maskface",
    "prank",
    "wearable"
   ],
   "no": [
    "zen"
   ],
   "stage": 2
  },
  {
   "id": "prank",
   "text": {
    "ko": "친구 뒤로 몰래 다가가 놀라게 하는 일에서 삶의 작은 보람을 느낍니까?",
    "en": "Do you find a small meaning in life in sneaking up behind a friend to scare them?",
    "zh": "偷偷靠近朋友身后吓他一跳，会让你觉得人生有点小成就吗？",
    "ja": "友だちの後ろにこっそり近づいて驚かせることに、人生のささやかなやりがいを感じますか？",
    "es": "¿Encuentras un pequeño sentido a la vida acercándote por detrás a un amigo para asustarlo?",
    "pt": "Você acha um sentido pequeno na vida em chegar de mansinho atrás de um amigo para assustá-lo?",
    "fr": "Trouvez-vous un petit sens à la vie dans le fait de surprendre un ami par-derrière pour lui faire peur ?",
    "de": "Finden Sie einen kleinen Sinn im Leben darin, sich von hinten an eine Freundin oder einen Freund anzuschleichen und sie oder ihn zu erschrecken?",
    "th": "คุณรู้สึกว่าชีวิตมีความหมายเล็ก ๆ ตอนแอบย่องไปหลอกเพื่อนจากข้างหลังหรือเปล่า?"
   },
   "yes": [
    "prank",
    "scary",
    "sound"
   ],
   "no": [
    "zen",
    "cute"
   ],
   "stage": 2
  },
  {
   "id": "diy",
   "text": {
    "ko": "'유튜브 보고 만들어보자' 하고 새벽까지 붙잡고 있던 적이 있습니까?",
    "en": "Have you ever said 'let's just make it, I saw a video' and stayed up until dawn?",
    "zh": "你有没有说着“看个视频自己做吧”，然后熬到天亮？",
    "ja": "「動画を見て作ってみよう」と言って、明け方まで続けたことはありますか？",
    "es": "¿Has dicho «lo hago yo, que vi un vídeo» y te has quedado hasta el amanecer?",
    "pt": "Você já disse \"vamos fazer isso, eu vi um vídeo\" e acabou virando a noite?",
    "fr": "Avez-vous déjà dit « on le fabrique, j'ai vu une vidéo » avant de veiller jusqu'à l'aube ?",
    "de": "Haben Sie schon mal gesagt \"Das bauen wir selbst, ich hab da ein Video gesehen\" und dann bis zum Morgengrauen durchgemacht?",
    "th": "เคยพูดว่า \"ทำเองเลยดีกว่า เห็นวิดีโอมา\" แล้วนั่งทำจนสว่างไหม?"
   },
   "yes": [
    "craft",
    "mold"
   ],
   "no": [
    "wearable"
   ],
   "stage": 2
  },
  {
   "id": "fidget",
   "text": {
    "ko": "회의 중에 손에 쥔 펜을 계속 돌리는 편입니까?",
    "en": "In meetings, do you keep spinning the pen in your hand?",
    "zh": "开会时，你是不是总在手里转笔？",
    "ja": "会議中、手に持ったペンをずっと回しているほうですか？",
    "es": "En las reuniones, ¿te pasas el rato dando vueltas al bolígrafo?",
    "pt": "Nas reuniões, você fica girando a caneta na mão sem parar?",
    "fr": "En réunion, faites-vous tourner votre stylo entre les doigts sans arrêt ?",
    "de": "Drehen Sie in Meetings ständig den Stift in der Hand?",
    "th": "เวลาประชุม คุณหมุนปากกาเล่นในมืออยู่ตลอดใช่ไหม?"
   },
   "yes": [
    "toy",
    "tiny",
    "ceramic"
   ],
   "no": [
    "wall"
   ],
   "stage": 2
  },
  {
   "id": "foodtoy",
   "text": {
    "ko": "음식 모양 지우개나 열쇠고리를 보면 '이건 사야 해'가 먼저 나옵니까?",
    "en": "When you see a food-shaped eraser or keychain, is 'I have to buy this' your first thought?",
    "zh": "看到食物造型的橡皮或钥匙扣，你的第一反应是“这个必须买”吗？",
    "ja": "食べ物の形の消しゴムやキーホルダーを見ると、「これは買わなきゃ」が先に出ますか？",
    "es": "Al ver una goma o un llavero con forma de comida, ¿tu primer pensamiento es «tengo que comprarlo»?",
    "pt": "Ao ver uma borracha ou chaveiro em forma de comida, seu primeiro pensamento é \"preciso comprar\"?",
    "fr": "Devant une gomme ou un porte-clés en forme de nourriture, votre premier réflexe est-il « il me le faut » ?",
    "de": "Wenn Sie einen Radiergummi oder Schlüsselanhänger in Essensform sehen, ist Ihr erster Gedanke \"Muss ich haben\"?",
    "th": "เห็นยางลบหรือพวงกุญแจรูปอาหารแล้ว สิ่งแรกที่คิดคือ \"ต้องซื้อ\" ใช่ไหม?"
   },
   "yes": [
    "food",
    "funny_face",
    "toy"
   ],
   "no": [
    "scary"
   ],
   "stage": 2
  },
  {
   "id": "museum",
   "text": {
    "ko": "박물관에서 그림보다 뼈대 표본 앞에 더 오래 서 있습니까?",
    "en": "In a museum, do you stand longer in front of skeleton specimens than paintings?",
    "zh": "在博物馆里，你站在骨架标本前的时间比站在画前更长吗？",
    "ja": "博物館で、絵よりも骨格標本の前に長く立っていますか？",
    "es": "En un museo, ¿te quedas más rato frente a los esqueletos que frente a los cuadros?",
    "pt": "No museu, você fica mais tempo diante de esqueletos do que de pinturas?",
    "fr": "Au musée, restez-vous plus longtemps devant les squelettes que devant les tableaux ?",
    "de": "Stehen Sie im Museum länger vor Skeletten als vor Gemälden?",
    "th": "ในพิพิธภัณฑ์ คุณยืนดูโครงกระดูกนานกว่าดูภาพวาดใช่ไหม?"
   },
   "yes": [
    "anatomy",
    "scary",
    "statue",
    "skeleton"
   ],
   "no": [
    "cute"
   ],
   "stage": 2
  },
  {
   "id": "ugly",
   "text": {
    "ko": "못생긴 것이 귀여운 것보다 오래 기억에 남습니까?",
    "en": "Does an ugly thing stay in your memory longer than a cute one?",
    "zh": "丑的东西比可爱的东西更让你印象深刻吗？",
    "ja": "かわいいものより、ブサイクなものの方が記憶に残りますか？",
    "es": "¿Lo feo se queda en tu memoria más tiempo que lo bonito?",
    "pt": "Uma coisa feia fica na sua memória por mais tempo do que uma fofa?",
    "fr": "Une chose moche reste-t-elle plus longtemps dans votre mémoire qu'une chose mignonne ?",
    "de": "Bleibt etwas Hässliches länger in Ihrem Gedächtnis als etwas Niedliches?",
    "th": "ของน่าเกลียดติดอยู่ในความทรงจำคุณนานกว่าของน่ารักหรือเปล่า?"
   },
   "yes": [
    "funny_face",
    "scary",
    "prank"
   ],
   "no": [
    "cute",
    "doll"
   ],
   "stage": 2
  },
  {
   "id": "soft",
   "text": {
    "ko": "스트레스 받는 날, 폭신한 걸 안고 있으면 조금 나아집니까?",
    "en": "On a stressful day, does holding something soft make it a little better?",
    "zh": "压力大的日子，抱着软软的东西会好受一点吗？",
    "ja": "ストレスの多い日、ふわふわしたものを抱いていると少し楽になりますか？",
    "es": "En un día estresante, ¿abrazar algo blandito te alivia un poco?",
    "pt": "Num dia estressante, segurar algo macio melhora um pouquinho as coisas?",
    "fr": "Les jours de stress, tenir quelque chose de doux aide-t-il un peu ?",
    "de": "Hilft es an stressigen Tagen ein wenig, etwas Weiches in der Hand zu halten?",
    "th": "วันที่เครียด การกอดของนุ่ม ๆ ช่วยให้ดีขึ้นนิดหนึ่งไหม?"
   },
   "yes": [
    "plush",
    "cute",
    "doll"
   ],
   "no": [
    "scary",
    "tough"
   ],
   "stage": 2
  },
  {
   "id": "hero",
   "text": {
    "ko": "격투 영화를 보고 나면 어깨를 괜히 펴고 걸은 적이 있습니까?",
    "en": "After a fight movie, have you walked out with your shoulders oddly squared?",
    "zh": "看完格斗电影后，你有没有莫名挺着肩膀走路？",
    "ja": "格闘映画を観たあと、なぜか肩を張って歩いたことはありますか？",
    "es": "Después de una película de lucha, ¿has salido caminando con los hombros extrañamente erguidos?",
    "pt": "Depois de um filme de luta, você já saiu do cinema com os ombros estranhamente empertigados?",
    "fr": "Après un film de baston, êtes-vous déjà sorti(e) de la salle les épaules bizarrement redressées ?",
    "de": "Sind Sie nach einem Actionfilm schon mal mit seltsam gestrafften Schultern aus dem Kino gekommen?",
    "th": "ดูหนังบู๊จบแล้ว เคยเดินออกจากโรงโดยไหล่ตั้งขึ้นแปลก ๆ ไหม?"
   },
   "yes": [
    "tough",
    "human"
   ],
   "no": [
    "cute"
   ],
   "stage": 2
  },
  {
   "id": "vintage",
   "text": {
    "ko": "새 물건보다, 누군가 오래 쓴 흔적이 있는 물건에 더 끌립니까?",
    "en": "Are you more drawn to things that bear the marks of someone's long use than to new ones?",
    "zh": "比起新东西，你是不是更被带着别人长年使用痕迹的东西吸引？",
    "ja": "新品より、誰かが長く使った跡のある物に惹かれますか？",
    "es": "¿Te atraen más las cosas con huellas de un largo uso ajeno que las nuevas?",
    "pt": "Você se atrai mais por coisas com marcas do uso de alguém do que por coisas novas?",
    "fr": "Êtes-vous plus attiré(e) par les objets qui portent les marques d'un long usage que par les objets neufs ?",
    "de": "Ziehen Sie Dinge mit Gebrauchsspuren eher an als neue?",
    "th": "คุณหลงของที่มีรอยใช้งานมานานมากกว่าของใหม่ใช่ไหม?"
   },
   "yes": [
    "doll",
    "east",
    "god",
    "ceramic"
   ],
   "no": [
    "cartoon"
   ],
   "stage": 2
  },
  {
   "id": "uncanny",
   "text": {
    "ko": "사람을 너무 닮은 인형이 불편한데도 눈을 못 떼겠습니까?",
    "en": "Does a too-human doll make you uneasy, and yet you can't look away?",
    "zh": "太像真人的娃娃明明让你不舒服，却又移不开眼吗？",
    "ja": "人間に似すぎた人形が不気味なのに、目が離せませんか？",
    "es": "¿Una muñeca demasiado humana te inquieta y aun así no puedes dejar de mirarla?",
    "pt": "Uma boneca humana demais te deixa inquieto(a), mas você não consegue desviar o olhar?",
    "fr": "Une poupée trop humaine vous met-elle mal à l'aise, sans que vous puissiez détourner les yeux ?",
    "de": "Macht Sie eine zu menschliche Puppe unruhig, und Sie können trotzdem nicht wegschauen?",
    "th": "ตุ๊กตาที่เหมือนคนเกินไปทำให้คุณไม่สบายใจ แต่ก็ละสายตาไม่ได้ใช่ไหม?"
   },
   "yes": [
    "human",
    "doll",
    "statue",
    "scary",
    "west"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "otherlife",
   "text": {
    "ko": "당신은 한 번쯤, 다른 누군가의 삶을 꿈꿔본 적이 있습니까?",
    "en": "Have you ever, even once, dreamed of living someone else's life?",
    "zh": "你有没有哪怕一次，幻想过过别人的人生？",
    "ja": "一度でも、誰か別の人の人生を夢見たことはありますか？",
    "es": "¿Alguna vez has soñado con vivir la vida de otra persona?",
    "pt": "Você já sonhou, nem que seja uma vez, em viver a vida de outra pessoa?",
    "fr": "Avez-vous déjà rêvé, ne serait-ce qu'une fois, de vivre la vie de quelqu'un d'autre ?",
    "de": "Haben Sie schon mal, und sei es nur einmal, davon geträumt, das Leben eines anderen zu leben?",
    "th": "เคยฝันอยากใช้ชีวิตของคนอื่นสักครั้งไหม?"
   },
   "yes": [
    "costume",
    "wearable",
    "maskface",
    "human"
   ],
   "no": [],
   "stage": 1
  },
  {
   "id": "alterego",
   "text": {
    "ko": "하루만 부캐로 살 수 있다면, 이름부터 바꾸겠습니까?",
    "en": "If you could live one day as a side character of yourself, would you change your name first?",
    "zh": "如果能以“副角色”的身份活一天，你会先换名字吗？",
    "ja": "一日だけ別キャラとして生きられるなら、まず名前から変えますか？",
    "es": "Si pudieras vivir un día como tu alter ego, ¿lo primero sería cambiar de nombre?",
    "pt": "Se pudesse viver um dia como um personagem secundário de si mesmo(a), você mudaria o nome primeiro?",
    "fr": "Si vous pouviez vivre un jour en personnage secondaire de vous-même, changeriez-vous de nom en premier ?",
    "de": "Wenn Sie einen Tag lang eine Nebenfigur Ihrer selbst sein könnten, würden Sie als Erstes den Namen ändern?",
    "th": "ถ้าได้ใช้ชีวิตหนึ่งวันเป็นตัวประกอบของตัวเอง คุณจะเปลี่ยนชื่อก่อนเลยไหม?"
   },
   "yes": [
    "costume",
    "maskface",
    "headwear"
   ],
   "no": [],
   "stage": 3
  },
  {
   "id": "halloween",
   "text": {
    "ko": "할로윈 코스튬을 한 달 전부터 고민하는 편입니까?",
    "en": "Do you start agonizing over a Halloween costume a month in advance?",
    "zh": "你会提前一个月就开始纠结万圣节的装扮吗？",
    "ja": "ハロウィンの仮装を、一か月前から悩むほうですか？",
    "es": "¿Llevas un mes dándole vueltas a tu disfraz de Halloween?",
    "pt": "Você começa a sofrer com a fantasia de Halloween com um mês de antecedência?",
    "fr": "Vous tourmentez-vous pour votre déguisement d'Halloween un mois à l'avance ?",
    "de": "Zerbrechen Sie sich schon einen Monat vorher den Kopf über Ihr Halloween-Kostüm?",
    "th": "คุณเริ่มกลุ้มใจเรื่องชุดฮัลโลวีนตั้งแต่ล่วงหน้าเป็นเดือนไหม?"
   },
   "yes": [
    "costume",
    "wearable",
    "scary",
    "season",
    "skeleton"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "mustache",
   "text": {
    "ko": "콧수염을 기르면 인생이 달라질 거라고 은근히 믿습니까?",
    "en": "Do you secretly believe a mustache would change your life?",
    "zh": "你暗暗相信留一撮小胡子就能改变人生吗？",
    "ja": "口ひげを生やせば人生が変わると、ひそかに信じていますか？",
    "es": "¿Crees en secreto que un bigote te cambiaría la vida?",
    "pt": "Você acredita em segredo que um bigode mudaria sua vida?",
    "fr": "Croyez-vous en secret qu'une moustache changerait votre vie ?",
    "de": "Glauben Sie insgeheim, dass ein Schnurrbart Ihr Leben verändern würde?",
    "th": "คุณแอบเชื่อไหมว่าหนวดเพียงเส้นเดียวจะเปลี่ยนชีวิตได้?"
   },
   "yes": [
    "costume",
    "human",
    "west",
    "funny_face"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "fakeglass",
   "text": {
    "ko": "조용한 방에서 유리 깨지는 소리가 나면, 놀라기 전에 웃음이 먼저 나옵니까?",
    "en": "If glass shattered in a quiet room, would you laugh before you flinched?",
    "zh": "安静的房间里传来玻璃碎裂声，你会先笑出来而不是先吓一跳吗？",
    "ja": "静かな部屋でガラスの割れる音がしたら、驚く前に笑ってしまいますか？",
    "es": "Si se oyera vidrio romperse en una sala silenciosa, ¿te reirías antes de asustarte?",
    "pt": "Se um vidro se estilhaçasse numa sala silenciosa, você riria antes de se assustar?",
    "fr": "Si un verre se brisait dans une pièce silencieuse, riez-vous avant de sursauter ?",
    "de": "Wenn in einem stillen Raum Glas zerspringt, lachen Sie, bevor Sie zusammenzucken?",
    "th": "ถ้าแก้วแตกในห้องเงียบ ๆ คุณจะหัวเราะก่อนที่จะสะดุ้งไหม?"
   },
   "yes": [
    "sound",
    "prank",
    "magic"
   ],
   "no": [
    "zen"
   ],
   "stage": 3
  },
  {
   "id": "lazy",
   "text": {
    "ko": "게으름도 때로는 미덕이라고 생각합니까?",
    "en": "Do you think laziness can sometimes be a virtue?",
    "zh": "你觉得偷懒有时也算一种美德吗？",
    "ja": "怠けることも、ときには美徳だと思いますか？",
    "es": "¿Piensas que la pereza a veces es una virtud?",
    "pt": "Você acha que a preguiça às vezes pode ser uma virtude?",
    "fr": "Pensez-vous que la paresse peut parfois être une vertu ?",
    "de": "Finden Sie, dass Faulheit manchmal eine Tugend sein kann?",
    "th": "คุณคิดว่าความขี้เกียจบางครั้งก็เป็นคุณธรรมได้ไหม?"
   },
   "yes": [
    "cat",
    "cute",
    "puzzle",
    "plush"
   ],
   "no": [
    "tough"
   ],
   "stage": 3
  },
  {
   "id": "outdoor",
   "text": {
    "ko": "주말에 밖으로 나가 공을 던지며 노는 어른이고 싶습니까?",
    "en": "On weekends, do you want to be the kind of grown-up who goes outside and plays catch?",
    "zh": "周末你想当个跑到外面扔球玩的大人吗？",
    "ja": "週末は外でボール遊びをする大人でいたいですか？",
    "es": "¿Quieres ser de esos adultos que salen el fin de semana a jugar con una pelota?",
    "pt": "No fim de semana, você quer ser o tipo de adulto que sai para brincar de pega-pega?",
    "fr": "Le week-end, avez-vous envie d'être ce genre d'adulte qui sort jouer au ballon ?",
    "de": "Wollen Sie am Wochenende der Typ Erwachsener sein, der rausgeht und Fangen spielt?",
    "th": "วันหยุด คุณอยากเป็นผู้ใหญ่ที่ออกไปเล่นข้างนอกใช่ไหม?"
   },
   "yes": [
    "outdoor",
    "toy",
    "game",
    "tough"
   ],
   "no": [
    "plush",
    "cat",
    "puzzle"
   ],
   "stage": 2
  },
  {
   "id": "formal",
   "text": {
    "ko": "점잖은 어른들의 모임에서 장난을 치고 싶은 충동을 참아본 적이 있습니까?",
    "en": "Have you ever held back the urge to pull a prank at a very proper gathering?",
    "zh": "在一本正经的聚会上，你有没有忍住想恶作剧的冲动？",
    "ja": "お上品な大人の集まりで、いたずらしたい衝動をこらえたことはありますか？",
    "es": "¿Has contenido las ganas de gastar una broma en una reunión muy formal?",
    "pt": "Você já segurou a vontade de fazer uma pegadinha num encontro supercerimonioso?",
    "fr": "Avez-vous déjà retenu l'envie de faire une blague lors d'une réunion très guindée ?",
    "de": "Haben Sie sich bei einem sehr förmlichen Treffen schon mal den Drang verkniffen, einen Streich zu spielen?",
    "th": "เคยกลั้นความอยากแกล้งคนไว้ในงานที่เป็นทางการมาก ๆ ไหม?"
   },
   "yes": [
    "prank",
    "game",
    "funny_face",
    "human"
   ],
   "no": [
    "zen"
   ],
   "stage": 2
  },
  {
   "id": "boom",
   "text": {
    "ko": "예상치 못한 순간에 무언가 펑 터지는 것을 보면 통쾌합니까?",
    "en": "Does it feel great when something suddenly goes bang?",
    "zh": "看到什么东西在意料之外砰地炸开，你会觉得痛快吗？",
    "ja": "思いがけない瞬間に何かがパンと弾けると、スカッとしますか？",
    "es": "¿Te resulta genial cuando algo estalla de pronto?",
    "pt": "É ótimo quando algo de repente faz um estouro?",
    "fr": "Est-ce que ça fait un bien fou quand quelque chose explose d'un coup ?",
    "de": "Fühlt es sich großartig an, wenn etwas plötzlich knallt?",
    "th": "เวลาอะไรสักอย่างระเบิดเปรี้ยงขึ้นมาดื้อ ๆ รู้สึกฟินไหม?"
   },
   "yes": [
    "prank",
    "sound",
    "scary"
   ],
   "no": [
    "zen",
    "cute"
   ],
   "stage": 2
  },
  {
   "id": "lottery",
   "text": {
    "ko": "무엇이 나올지 모르는 선물 교환 시간을 좋아합니까?",
    "en": "Do you love gift swaps where nobody knows what will come out?",
    "zh": "你喜欢不知道会抽到什么的交换礼物吗？",
    "ja": "何が出るかわからないプレゼント交換は好きですか？",
    "es": "¿Te encantan los intercambios de regalos en los que nadie sabe qué saldrá?",
    "pt": "Você adora amigo-secreto em que ninguém sabe o que vai sair?",
    "fr": "Adorez-vous les échanges de cadeaux où personne ne sait ce qui va sortir ?",
    "de": "Lieben Sie Wichteln, bei dem niemand weiß, was herauskommt?",
    "th": "คุณชอบแลกของขวัญที่ไม่มีใครรู้ว่าจะได้อะไรไหม?"
   },
   "yes": [
    "prank",
    "funny_face",
    "game",
    "costume"
   ],
   "no": [
    "useful"
   ],
   "stage": 2
  },
  {
   "id": "oldplush",
   "text": {
    "ko": "낡을 대로 낡은 인형이 침대 위에 앉아 있는 풍경이 좋습니까?",
    "en": "Do you like the sight of a well-worn stuffed toy sitting on a bed?",
    "zh": "你喜欢床上坐着一只旧得不能再旧的玩偶的样子吗？",
    "ja": "使い込まれてくたびれたぬいぐるみがベッドにいる風景は好きですか？",
    "es": "¿Te gusta ver un peluche gastadísimo sentado sobre la cama?",
    "pt": "Você gosta de ver um bichinho de pelúcia bem gasto em cima da cama?",
    "fr": "Aimez-vous voir une peluche bien usée posée sur un lit ?",
    "de": "Mögen Sie den Anblick eines abgeliebten Stofftiers auf dem Bett?",
    "th": "คุณชอบภาพตุ๊กตาผ้าเก่า ๆ ที่นอนอยู่บนเตียงไหม?"
   },
   "yes": [
    "plush",
    "cat",
    "cute",
    "doll"
   ],
   "no": [
    "scary"
   ],
   "stage": 3
  },
  {
   "id": "alienhost",
   "text": {
    "ko": "외계 생명체가 문을 두드리면, 일단 차부터 대접하겠습니까?",
    "en": "If an alien knocked on your door, would you offer it tea first?",
    "zh": "如果外星生物来敲门，你会先请它喝茶吗？",
    "ja": "宇宙人が玄関をノックしたら、まずお茶を出しますか？",
    "es": "Si un extraterrestre llamara a tu puerta, ¿le ofrecerías té primero?",
    "pt": "Se um alienígena batesse na sua porta, você ofereceria um chá primeiro?",
    "fr": "Si un extraterrestre frappait à votre porte, lui offririez-vous d'abord un thé ?",
    "de": "Wenn ein Außerirdischer an Ihre Tür klopfte, würden Sie ihm zuerst einen Tee anbieten?",
    "th": "ถ้ามนุษย์ต่างดาวมาเคาะประตูบ้าน คุณจะเสิร์ฟชาให้ก่อนไหม?"
   },
   "yes": [
    "alien",
    "living",
    "plush",
    "funny_face"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "scarytoy",
   "text": {
    "ko": "무섭게 생긴 인형을 안고 자면, 오히려 마음이 놓일 것 같습니까?",
    "en": "Would sleeping with a scary-looking doll somehow put you at ease?",
    "zh": "抱着长得吓人的玩偶睡觉，你反而会觉得安心吗？",
    "ja": "怖い顔の人形を抱いて寝たら、かえって安心しそうですか？",
    "es": "¿Dormir abrazado a un muñeco de aspecto aterrador te tranquilizaría?",
    "pt": "Dormir com uma boneca de aparência assustadora de alguma forma te acalmaria?",
    "fr": "Dormir avec une poupée effrayante vous apaiserait-il, allez savoir pourquoi ?",
    "de": "Würde es Sie irgendwie beruhigen, mit einer gruselig aussehenden Puppe zu schlafen?",
    "th": "การนอนกอดตุ๊กตาหน้าน่ากลัว ทำให้คุณรู้สึกสบายใจขึ้นแบบแปลก ๆ ไหม?"
   },
   "yes": [
    "plush",
    "scary",
    "alien",
    "cute"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "collapse",
   "text": {
    "ko": "쌓아 올린 것이 무너지는 순간까지, 끝까지 지켜보고 싶습니까?",
    "en": "Do you want to watch a tower you built all the way until it collapses?",
    "zh": "你想一直看着堆起来的东西，直到它倒塌的那一刻吗？",
    "ja": "積み上げたものが崩れる瞬間まで、見届けたいですか？",
    "es": "¿Quieres mirar hasta el final cómo se derrumba lo que apilaste?",
    "pt": "Você quer ficar olhando a torre que construiu até ela desabar de vez?",
    "fr": "Voulez-vous regarder la tour que vous avez bâtie jusqu'à ce qu'elle s'effondre ?",
    "de": "Wollen Sie dem Turm, den Sie gebaut haben, zusehen, bis er ganz einstürzt?",
    "th": "คุณอยากดูหอคอยที่ตัวเองต่อไว้จนมันพังทั้งหมดไหม?"
   },
   "yes": [
    "game",
    "toy",
    "prank"
   ],
   "no": [
    "craft"
   ],
   "stage": 3
  },
  {
   "id": "brave",
   "text": {
    "ko": "가면을 쓰면 평소보다 용감해지는 편입니까?",
    "en": "Do you get braver when you put on a mask?",
    "zh": "戴上面具，你会比平时更勇敢吗？",
    "ja": "仮面をかぶると、いつもより勇敢になるほうですか？",
    "es": "¿Te vuelves más valiente cuando te pones una máscara?",
    "pt": "Você fica mais corajoso(a) quando coloca uma máscara?",
    "fr": "Devenez-vous plus courageux(se) quand vous mettez un masque ?",
    "de": "Werden Sie mutiger, wenn Sie eine Maske aufsetzen?",
    "th": "พอใส่หน้ากาก คุณกล้ามากขึ้นไหม?"
   },
   "yes": [
    "maskface",
    "costume",
    "headwear",
    "scary"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "scream",
   "text": {
    "ko": "가끔은 소리를 크게 한 번 지르고 싶어집니까?",
    "en": "Do you sometimes just want to let out one big scream?",
    "zh": "你有时会想大喊一声吗？",
    "ja": "ときどき、大声で一度叫びたくなりますか？",
    "es": "¿A veces te dan ganas de soltar un grito enorme?",
    "pt": "Às vezes você só quer soltar um grito enorme?",
    "fr": "Avez-vous parfois juste envie de pousser un grand cri ?",
    "de": "Haben Sie manchmal einfach Lust, einmal laut zu schreien?",
    "th": "บางครั้งคุณแค่อยากกรีดร้องออกมาดัง ๆ สักทีไหม?"
   },
   "yes": [
    "scary",
    "sound",
    "funny_face"
   ],
   "no": [
    "zen"
   ],
   "stage": 2
  },
  {
   "id": "worker",
   "text": {
    "ko": "열심히 일하는 사람의 뒷모습에서 이상하게 위로를 받습니까?",
    "en": "Do you find odd comfort in the back of someone working hard?",
    "zh": "看着努力工作的人的背影，你会莫名得到安慰吗？",
    "ja": "一生懸命働く人の背中に、なぜか慰められますか？",
    "es": "¿Encuentras un extraño consuelo en la espalda de alguien que trabaja duro?",
    "pt": "Você sente um conforto estranho ao ver as costas de alguém trabalhando duro?",
    "fr": "Trouvez-vous un étrange réconfort à voir quelqu'un travailler dur, de dos ?",
    "de": "Finden Sie es seltsam tröstlich, jemandem von hinten beim harten Arbeiten zuzusehen?",
    "th": "คุณรู้สึกอุ่นใจแปลก ๆ เวลามองแผ่นหลังของคนที่ทำงานหนักไหม?"
   },
   "yes": [
    "human",
    "calendar",
    "wall",
    "tough",
    "job"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "bigeyes",
   "text": {
    "ko": "눈이 비정상적으로 큰 존재에게도 연민을 느낍니까?",
    "en": "Do you feel pity even for a creature with unnaturally huge eyes?",
    "zh": "对眼睛大得不正常的生物，你也会生出怜悯吗？",
    "ja": "異様に目が大きい存在にも、哀れみを感じますか？",
    "es": "¿Sientes compasión incluso por una criatura de ojos exageradamente grandes?",
    "pt": "Você sente pena até de um bicho com olhos exageradamente enormes?",
    "fr": "Éprouvez-vous de la pitié même pour une créature aux yeux anormalement énormes ?",
    "de": "Haben Sie sogar mit einem Wesen mit unnatürlich riesigen Augen Mitleid?",
    "th": "คุณสงสารแม้แต่สิ่งมีชีวิตที่ตาโตผิดธรรมชาติไหม?"
   },
   "yes": [
    "scary",
    "cute",
    "alien",
    "living"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "toilet",
   "text": {
    "ko": "집에서 가장 지저분한 곳에도 귀여운 것을 하나 두고 싶습니까?",
    "en": "Would you put something cute even in the grubbiest corner of your home?",
    "zh": "你会想在家里最脏的角落也放一个可爱的东西吗？",
    "ja": "家でいちばん散らかった場所にも、かわいいものを一つ置きたいですか？",
    "es": "¿Pondrías algo adorable incluso en el rincón más sucio de tu casa?",
    "pt": "Você colocaria algo fofo até no cantinho mais sem graça da sua casa?",
    "fr": "Mettriez-vous un objet mignon jusque dans le recoin le plus miteux de votre maison ?",
    "de": "Würden Sie selbst in die trübste Ecke Ihrer Wohnung etwas Niedliches stellen?",
    "th": "คุณจะวางของน่ารักไว้แม้แต่ในมุมที่ดูทรุดโทรมที่สุดของบ้านไหม?"
   },
   "yes": [
    "storage",
    "frog",
    "cute",
    "ceramic",
    "useful"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "keys",
   "text": {
    "ko": "열쇠나 동전, 안경이 어디 있는지 하루에 한 번은 찾습니까?",
    "en": "Do you look for your keys, coins or glasses at least once a day?",
    "zh": "钥匙、硬币、眼镜在哪儿，你每天至少找一次吗？",
    "ja": "鍵や小銭、メガネの場所を、一日に一度は探しますか？",
    "es": "¿Buscas tus llaves, monedas o gafas al menos una vez al día?",
    "pt": "Você procura chaves, moedas ou óculos pelo menos uma vez por dia?",
    "fr": "Cherchez-vous vos clés, vos pièces ou vos lunettes au moins une fois par jour ?",
    "de": "Suchen Sie mindestens einmal am Tag nach Schlüsseln, Münzen oder Brille?",
    "th": "คุณหากุญแจ เหรียญ หรือแว่นอย่างน้อยวันละครั้งไหม?"
   },
   "yes": [
    "storage",
    "useful",
    "frog",
    "tiny"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "mischief",
   "text": {
    "ko": "모임의 분위기를 띄우려고 일부러 작은 소동을 일으킨 적이 있습니까?",
    "en": "Have you ever stirred up a little commotion on purpose to liven up a gathering?",
    "zh": "你有没有为了活跃气氛，故意制造过一点小骚动？",
    "ja": "場を盛り上げようと、わざとちょっとした騒ぎを起こしたことはありますか？",
    "es": "¿Alguna vez has armado un pequeño alboroto a propósito para animar una reunión?",
    "pt": "Você já provocou uma pequena confusão de propósito para animar a turma?",
    "fr": "Avez-vous déjà semé un petit chahut exprès pour animer une soirée ?",
    "de": "Haben Sie schon mal absichtlich ein bisschen Trubel gestiftet, um eine Runde aufzulockern?",
    "th": "เคยจงใจก่อเรื่องวุ่นวายเล็ก ๆ ให้วงสนุกขึ้นไหม?"
   },
   "yes": [
    "prank",
    "sound",
    "magic",
    "game",
    "costume",
    "funny_face"
   ],
   "no": [
    "zen",
    "decor",
    "statue",
    "ceramic",
    "calendar"
   ],
   "stage": 1
  },
  {
   "id": "touchplay",
   "text": {
    "ko": "눈으로 감상하는 물건보다, 손으로 만지고 갖고 노는 물건이 더 좋습니까?",
    "en": "Do you prefer things to touch and play with over things to simply look at?",
    "zh": "比起用眼睛欣赏的东西，你更喜欢能用手摸、拿来玩的东西吗？",
    "ja": "眺めるだけの物より、手で触って遊べる物のほうが好きですか？",
    "es": "¿Prefieres lo que se toca y con lo que se juega a lo que solo se mira?",
    "pt": "Você prefere coisas para tocar e brincar do que coisas só para olhar?",
    "fr": "Préférez-vous les choses qu'on touche et avec lesquelles on joue à celles qu'on regarde seulement ?",
    "de": "Mögen Sie lieber Dinge zum Anfassen und Spielen als Dinge, die man nur ansieht?",
    "th": "คุณชอบของที่ได้จับได้เล่น มากกว่าของที่ดูเฉย ๆ ใช่ไหม?"
   },
   "yes": [
    "toy",
    "game",
    "puzzle",
    "craft",
    "mold",
    "illusion",
    "magic"
   ],
   "no": [
    "decor",
    "statue",
    "wall",
    "calendar",
    "ceramic"
   ],
   "stage": 1
  },
  {
   "id": "spotlight",
   "text": {
    "ko": "사람들 앞에 서는 순간이 두렵기보다 은근히 설렙니까?",
    "en": "Does standing in front of people thrill you more than it scares you?",
    "zh": "站在众人面前的那一刻，比起害怕，你更会隐隐兴奋吗？",
    "ja": "人前に立つ瞬間は、怖いよりもなんだかわくわくしますか？",
    "es": "¿Ponerte delante de la gente te emociona más de lo que te asusta?",
    "pt": "Ficar na frente das pessoas te empolga mais do que te assusta?",
    "fr": "Vous tenir devant les gens vous excite-t-il plus qu'il ne vous effraie ?",
    "de": "Begeistert es Sie mehr, vor Leuten zu stehen, als dass es Sie ängstigt?",
    "th": "การยืนต่อหน้าคนอื่นทำให้คุณตื่นเต้นมากกว่ากลัวใช่ไหม?"
   },
   "yes": [
    "costume",
    "magic",
    "prank",
    "sound",
    "headwear",
    "maskface",
    "wearable"
   ],
   "no": [
    "zen",
    "decor",
    "calendar",
    "storage"
   ],
   "stage": 1
  },
  {
   "id": "spicy",
   "text": {
    "ko": "매운 것을 먹으며 눈물 흘리는 것까지 즐거움이라고 생각합니까?",
    "en": "Do you count even the tears from spicy food as part of the fun?",
    "zh": "你觉得吃辣吃到流泪也是乐趣的一部分吗？",
    "ja": "辛いものを食べて涙が出るところまで楽しみだと思いますか？",
    "es": "¿Consideras que incluso las lágrimas por el picante forman parte de la diversión?",
    "pt": "Você conta até as lágrimas da comida picante como parte da diversão?",
    "fr": "Comptez-vous même les larmes dues au piment comme faisant partie du plaisir ?",
    "de": "Zählen Sie sogar die Tränen vom scharfen Essen zum Spaß dazu?",
    "th": "คุณนับน้ำตาจากความเผ็ดเป็นส่วนหนึ่งของความสนุกด้วยไหม?"
   },
   "yes": [
    "spicy"
   ],
   "no": [],
   "stage": 3
  },
  {
   "id": "bones",
   "text": {
    "ko": "몸속을 들여다볼 수 있다면, 내장보다 뼈 쪽이 더 궁금합니까?",
    "en": "If you could peek inside a body, would you be more curious about the bones than the organs?",
    "zh": "如果能看透身体内部，你对骨骼比对内脏更好奇吗？",
    "ja": "体の中をのぞけるなら、内臓より骨のほうが気になりますか？",
    "es": "Si pudieras mirar dentro de un cuerpo, ¿te daría más curiosidad el esqueleto que los órganos?",
    "pt": "Se pudesse espiar dentro de um corpo, teria mais curiosidade pelos ossos do que pelos órgãos?",
    "fr": "Si vous pouviez jeter un œil à l'intérieur d'un corps, seriez-vous plus curieux(se) des os que des organes ?",
    "de": "Wenn Sie in einen Körper hineinschauen könnten, wären Sie auf die Knochen neugieriger als auf die Organe?",
    "th": "ถ้าแอบดูข้างในร่างกายได้ คุณอยากรู้เรื่องกระดูกมากกว่าอวัยวะภายในไหม?"
   },
   "yes": [
    "skeleton"
   ],
   "no": [
    "organ"
   ],
   "stage": 3
  },
  {
   "id": "celebrity",
   "text": {
    "ko": "유명한 스타의 얼굴로 하루만 살아볼 수 있다면, 해보겠습니까?",
    "en": "If you could live one day with a famous star's face, would you?",
    "zh": "如果能顶着明星的脸活一天，你愿意吗？",
    "ja": "有名なスターの顔で一日だけ生きられるなら、やってみたいですか？",
    "es": "Si pudieras vivir un día con la cara de una estrella famosa, ¿lo harías?",
    "pt": "Se pudesse viver um dia com o rosto de uma celebridade, você viveria?",
    "fr": "Si vous pouviez vivre un jour avec le visage d'une célébrité, le feriez-vous ?",
    "de": "Wenn Sie einen Tag mit dem Gesicht eines Stars leben könnten, würden Sie es tun?",
    "th": "ถ้าได้ใช้หน้าของดาราดังหนึ่งวัน คุณจะลองไหม?"
   },
   "yes": [
    "celebrity",
    "costume",
    "maskface",
    "human"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "c_3am",
   "text": {
    "ko": "새벽 3시, 문득 잠이 깼습니다. 당신은 무엇을 합니까?",
    "en": "It's 3 a.m. and you've suddenly woken up. What do you do?",
    "zh": "凌晨三点，你突然醒了。你会做什么？",
    "ja": "午前3時、ふと目が覚めました。あなたは何をしますか？",
    "es": "Son las 3 de la madrugada y te despiertas de golpe. ¿Qué haces?",
    "pt": "São 3 da manhã e você acordou de repente. O que faz?",
    "fr": "Il est 3 h du matin et vous vous réveillez d'un coup. Que faites-vous ?",
    "de": "Es ist 3 Uhr nachts und Sie sind plötzlich aufgewacht. Was tun Sie?",
    "th": "ตีสามแล้ว คุณตื่นขึ้นมากะทันหัน คุณจะทำอะไร?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "방 정리를 시작한다",
      "en": "Start tidying the room",
      "zh": "开始整理房间",
      "ja": "部屋の片づけを始める",
      "es": "Me pongo a ordenar el cuarto",
      "pt": "Começo a arrumar o quarto",
      "fr": "Je me mets à ranger la chambre",
      "de": "Ich fange an, das Zimmer aufzuräumen",
      "th": "เริ่มเก็บห้อง"
     },
     "tags": [
      "craft",
      "tiny",
      "useful"
     ]
    },
    {
     "text": {
      "ko": "누워서 핸드폰을 본다",
      "en": "Lie there scrolling my phone",
      "zh": "躺着刷手机",
      "ja": "横になってスマホを見る",
      "es": "Me quedo en la cama con el móvil",
      "pt": "Fico deitado(a) rolando o celular",
      "fr": "Je reste couché(e) à faire défiler mon téléphone",
      "de": "Ich liege da und scrolle am Handy",
      "th": "นอนเลื่อนมือถือ"
     },
     "tags": [
      "funny_face",
      "cartoon"
     ]
    },
    {
     "text": {
      "ko": "뭐라도 먹는다",
      "en": "Eat something",
      "zh": "找点东西吃",
      "ja": "何か食べる",
      "es": "Me pongo a comer algo",
      "pt": "Como alguma coisa",
      "fr": "Je mange quelque chose",
      "de": "Ich esse etwas",
      "th": "หาอะไรกิน"
     },
     "tags": [
      "food",
      "cute",
      "frog"
     ]
    }
   ]
  },
  {
   "id": "c_gift",
   "text": {
    "ko": "친구가 '아무거나 하나 사줄게'라고 합니다. 당신은?",
    "en": "A friend says 'I'll buy you anything'. What do you pick?",
    "zh": "朋友说“随便挑一样我送你”。你会选什么？",
    "ja": "友だちが「何でも一つ買ってあげる」と言います。あなたは？",
    "es": "Un amigo dice «te compro lo que quieras». ¿Qué eliges?",
    "pt": "Um amigo diz \"eu te compro o que você quiser\". O que você escolhe?",
    "fr": "Un ami dit : « Je t'offre ce que tu veux. » Que choisissez-vous ?",
    "de": "Ein Freund sagt: \"Ich kaufe dir alles, was du willst.\" Was wählen Sie?",
    "th": "เพื่อนบอกว่า \"จะซื้ออะไรให้ก็ได้\" คุณเลือกอะไร?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "한참 구경하다가 이상하게 마음이 가는 걸 고른다",
      "en": "Browse for a while, then pick whatever oddly calls to me",
      "zh": "逛上好一阵，挑那个莫名让我心动的",
      "ja": "しばらく見て回って、なぜか心が惹かれるものを選ぶ",
      "es": "Doy mil vueltas y elijo lo que me llama sin saber por qué",
      "pt": "Passeio um pouco e pego o que me chamar a atenção de um jeito estranho",
      "fr": "Je flâne un moment, puis je prends ce qui m'attire bizarrement",
      "de": "Ich stöbere eine Weile und nehme, was mich seltsam anzieht",
      "th": "เดินดูสักพัก แล้วหยิบอะไรก็ได้ที่ดึงดูดแบบแปลก ๆ"
     },
     "tags": [
      "decor",
      "funny_face",
      "statue"
     ]
    },
    {
     "text": {
      "ko": "가격표 눈치를 보면서, 오래 쓸 만한 걸 고른다",
      "en": "Glance at the price tags and pick something that will last",
      "zh": "留意着价签，挑一个能用很久的",
      "ja": "値札を気にしつつ、長く使えそうなものを選ぶ",
      "es": "Miro los precios de reojo y elijo algo que dure",
      "pt": "Dou uma olhada nos preços e escolho algo que dure",
      "fr": "Je jette un œil aux prix et je prends quelque chose de durable",
      "de": "Ich werfe einen Blick auf die Preise und nehme etwas Langlebiges",
      "th": "ดูราคาคร่าว ๆ แล้วเลือกของที่ใช้ได้นาน"
     },
     "tags": [
      "useful",
      "wall",
      "calendar"
     ]
    },
    {
     "text": {
      "ko": "같이 웃을 수 있는 장난스러운 걸 고른다",
      "en": "Pick something playful we can laugh about together",
      "zh": "挑个能一起笑一笑的有趣东西",
      "ja": "一緒に笑えるいたずら心のあるものを選ぶ",
      "es": "Elijo algo divertido para reírnos juntos",
      "pt": "Algo divertido para a gente rir juntos",
      "fr": "Quelque chose de rigolo dont on pourra rire ensemble",
      "de": "Etwas Verspieltes, worüber wir zusammen lachen können",
      "th": "ของขำ ๆ ที่เล่นแล้วหัวเราะด้วยกันได้"
     },
     "tags": [
      "sound",
      "scary"
     ]
    }
   ]
  },
  {
   "id": "c_corner",
   "text": {
    "ko": "방 한구석에 하나를 놓아야 합니다. 무엇이 좋겠습니까?",
    "en": "You must place one thing in a corner of your room. Which?",
    "zh": "房间角落必须放一样东西，你选哪个？",
    "ja": "部屋の隅に一つ置くなら、どれがいいですか？",
    "es": "Tienes que poner una cosa en un rincón de tu cuarto. ¿Cuál?",
    "pt": "Você precisa colocar uma coisa num canto do quarto. Qual?",
    "fr": "Vous devez poser un objet dans un coin de votre chambre. Lequel ?",
    "de": "Sie müssen eine Sache in eine Ecke Ihres Zimmers stellen. Welche?",
    "th": "คุณต้องวางของหนึ่งอย่างไว้ที่มุมห้อง เลือกอะไร?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "보자마자 피식 웃음이 나는 것",
      "en": "Something that makes me snort-laugh at first sight",
      "zh": "一看就忍不住笑出来的东西",
      "ja": "見た瞬間ふっと笑ってしまうもの",
      "es": "Algo que me hace soltar una risita nada más verlo",
      "pt": "Algo que me faz soltar uma risadinha assim que vejo",
      "fr": "Un truc qui me fait pouffer dès que je le vois",
      "de": "Etwas, bei dem ich sofort losprusten muss",
      "th": "ของที่เห็นแล้วหลุดขำทันที"
     },
     "tags": [
      "funny_face",
      "prank"
     ]
    },
    {
     "text": {
      "ko": "말없이 자리를 지키는 묵직한 조각상",
      "en": "A weighty statue holding its place in silence",
      "zh": "默默坐镇一方的厚重雕像",
      "ja": "黙って場所を守る重みのある像",
      "es": "Una estatua pesada que guarda su sitio en silencio",
      "pt": "Uma estátua pesada que guarda o seu lugar em silêncio",
      "fr": "Une statue imposante qui garde sa place en silence",
      "de": "Eine gewichtige Statue, die schweigend ihren Platz hält",
      "th": "รูปปั้นหนักแน่นที่เฝ้าที่ของมันอย่างเงียบ ๆ"
     },
     "tags": [
      "statue",
      "god",
      "east"
     ]
    },
    {
     "text": {
      "ko": "작고 말랑해서 괜히 쓰다듬고 싶은 것",
      "en": "Something small and soft I'd want to pet for no reason",
      "zh": "小小软软、莫名想摸一摸的东西",
      "ja": "小さくてやわらかく、つい撫でたくなるもの",
      "es": "Algo pequeño y blandito que dan ganas de acariciar sin motivo",
      "pt": "Algo pequeno e macio que dá vontade de acariciar sem motivo",
      "fr": "Un petit truc tout doux qu'on a envie de caresser sans raison",
      "de": "Etwas Kleines, Weiches, das man grundlos streicheln möchte",
      "th": "ของเล็กนุ่ม ๆ ที่อยากลูบโดยไม่มีเหตุผล"
     },
     "tags": [
      "cute",
      "plush",
      "animal"
     ]
    }
   ]
  },
  {
   "id": "c_role",
   "text": {
    "ko": "모임에서 당신의 역할은 보통 무엇입니까?",
    "en": "At gatherings, what's your usual role?",
    "zh": "聚会上，你通常扮演什么角色？",
    "ja": "集まりで、あなたの役割はたいてい何ですか？",
    "es": "En las reuniones, ¿cuál suele ser tu papel?",
    "pt": "Nos encontros, qual é o seu papel de sempre?",
    "fr": "Dans les réunions entre amis, quel est votre rôle habituel ?",
    "de": "Welche Rolle haben Sie bei Treffen meistens?",
    "th": "เวลาไปงานสังสรรค์ คุณมักรับบทอะไร?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "분위기 메이커",
      "en": "The mood maker",
      "zh": "气氛担当",
      "ja": "盛り上げ役",
      "es": "El que anima el ambiente",
      "pt": "O animador da turma",
      "fr": "L'ambianceur(se)",
      "de": "Der Stimmungsmacher",
      "th": "คนสร้างบรรยากาศ"
     },
     "tags": [
      "sound",
      "funny_face"
     ]
    },
    {
     "text": {
      "ko": "구석에서 조용히 관찰 중",
      "en": "Quietly observing from a corner",
      "zh": "在角落里默默观察",
      "ja": "隅で静かに観察中",
      "es": "Observando en silencio desde un rincón",
      "pt": "Observando quietinho de um canto",
      "fr": "J'observe tranquillement depuis un coin",
      "de": "Ich beobachte still aus einer Ecke",
      "th": "นั่งสังเกตเงียบ ๆ ที่มุมห้อง"
     },
     "tags": [
      "cat",
      "wall",
      "decor"
     ]
    },
    {
     "text": {
      "ko": "먹을 것과 정리 담당",
      "en": "Snacks and cleanup",
      "zh": "负责吃的和收拾",
      "ja": "食べ物と片づけ担当",
      "es": "Los snacks y la limpieza",
      "pt": "Petiscos e arrumação",
      "fr": "Les grignotages et le rangement",
      "de": "Snacks und Aufräumen",
      "th": "ขนมกับเก็บกวาด"
     },
     "tags": [
      "food",
      "useful"
     ]
    }
   ]
  },
  {
   "id": "c_weekend",
   "text": {
    "ko": "이번 주말, 당신의 계획은?",
    "en": "What's your plan this weekend?",
    "zh": "这个周末你的计划是？",
    "ja": "今週末の予定は？",
    "es": "¿Cuál es tu plan para este fin de semana?",
    "pt": "Qual é o seu plano para o fim de semana?",
    "fr": "Quel est votre programme ce week-end ?",
    "de": "Was haben Sie dieses Wochenende vor?",
    "th": "สุดสัปดาห์นี้คุณมีแผนอะไร?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "밖에서 몸을 쓰며 논다",
      "en": "Play outside and move around",
      "zh": "到外面活动玩耍",
      "ja": "外で体を動かして遊ぶ",
      "es": "Jugar y moverme al aire libre",
      "pt": "Brincar lá fora e me mexer",
      "fr": "Jouer dehors et bouger",
      "de": "Draußen spielen und mich bewegen",
      "th": "ออกไปเล่นข้างนอก ขยับตัวเยอะ ๆ"
     },
     "tags": [
      "outdoor",
      "toy",
      "game",
      "tough"
     ]
    },
    {
     "text": {
      "ko": "집에서 뭔가를 만든다",
      "en": "Make something at home",
      "zh": "在家做点什么",
      "ja": "家で何かを作る",
      "es": "Hacer algo en casa",
      "pt": "Fazer alguma coisa em casa",
      "fr": "Fabriquer quelque chose à la maison",
      "de": "Zu Hause etwas basteln",
      "th": "ทำอะไรสักอย่างอยู่บ้าน"
     },
     "tags": [
      "craft",
      "mold"
     ]
    },
    {
     "text": {
      "ko": "이불 속에서 장기 휴식",
      "en": "Long-term rest under the blanket",
      "zh": "在被窝里长期休养",
      "ja": "布団の中で長期休養",
      "es": "Descanso prolongado bajo la manta",
      "pt": "Descansar bastante debaixo do cobertor",
      "fr": "Un long repos sous la couette",
      "de": "Lange unter der Decke ausruhen",
      "th": "นอนพักยาว ๆ ใต้ผ้าห่ม"
     },
     "tags": [
      "cat",
      "plush",
      "cute",
      "zen",
      "frog"
     ]
    }
   ]
  },
  {
   "id": "c_taste",
   "text": {
    "ko": "'이건 내 취향이다' 싶은 순간은 언제입니까?",
    "en": "When do you think 'this is exactly my taste'?",
    "zh": "什么时候你会觉得“这就是我的菜”？",
    "ja": "「これは私の好みだ」と思うのはどんな瞬間ですか？",
    "es": "¿Cuándo piensas «esto es justo lo mío»?",
    "pt": "Quando você pensa \"isso é a minha cara\"?",
    "fr": "Quand pensez-vous « ça, c'est tout à fait mon style » ?",
    "de": "Wann denken Sie: \"Das ist genau mein Geschmack\"?",
    "th": "เมื่อไหร่ที่คุณคิดว่า \"นี่แหละสไตล์ฉัน\"?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "이상하게 생긴 걸 봤을 때",
      "en": "When I see something strange-looking",
      "zh": "看到长得奇怪的东西时",
      "ja": "変わった形の物を見たとき",
      "es": "Cuando veo algo de aspecto raro",
      "pt": "Quando vejo algo com aparência estranha",
      "fr": "Quand je vois un truc à l'air bizarre",
      "de": "Wenn ich etwas komisch Aussehendes sehe",
      "th": "เวลาเห็นของหน้าตาประหลาด"
     },
     "tags": [
      "funny_face",
      "scary",
      "alien"
     ]
    },
    {
     "text": {
      "ko": "오래된 것에서 분위기를 느꼈을 때",
      "en": "When something old has an atmosphere",
      "zh": "在旧东西身上感受到氛围时",
      "ja": "古い物に雰囲気を感じたとき",
      "es": "Cuando algo viejo tiene ambiente",
      "pt": "Quando algo antigo tem uma atmosfera",
      "fr": "Quand un objet ancien a de l'atmosphère",
      "de": "Wenn etwas Altes Atmosphäre hat",
      "th": "เวลาของเก่ามีบรรยากาศ"
     },
     "tags": [
      "east",
      "god",
      "statue"
     ]
    },
    {
     "text": {
      "ko": "작고 귀여운 걸 봤을 때",
      "en": "When I see something small and cute",
      "zh": "看到小小的可爱东西时",
      "ja": "小さくてかわいい物を見たとき",
      "es": "Cuando veo algo pequeño y adorable",
      "pt": "Quando vejo algo pequeno e fofo",
      "fr": "Quand je vois un truc petit et mignon",
      "de": "Wenn ich etwas Kleines und Niedliches sehe",
      "th": "เวลาเห็นของเล็ก ๆ น่ารัก"
     },
     "tags": [
      "cute",
      "tiny",
      "frog"
     ]
    }
   ]
  },
  {
   "id": "c_magic",
   "text": {
    "ko": "누군가 눈앞에서 마술을 보여줍니다. 속으로 드는 생각은?",
    "en": "Someone performs a magic trick right in front of you. What's your inner reaction?",
    "zh": "有人在你面前表演魔术，你心里想的是？",
    "ja": "目の前でマジックを見せられました。心の中で思うのは？",
    "es": "Alguien hace un truco de magia frente a ti. ¿Qué piensas por dentro?",
    "pt": "Alguém faz um truque de mágica bem na sua frente. Qual é sua reação por dentro?",
    "fr": "Quelqu'un fait un tour de magie juste devant vous. Votre réaction intérieure ?",
    "de": "Jemand führt direkt vor Ihnen einen Zaubertrick vor. Was denken Sie innerlich?",
    "th": "มีคนเล่นมายากลต่อหน้าคุณ ในใจคุณคิดอะไร?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "어떻게 한 거지, 한 번 더 보여줘",
      "en": "How did you do that? Once more",
      "zh": "怎么做到的，再来一次",
      "ja": "どうやったの、もう一回見せて",
      "es": "¿Cómo lo hiciste? Otra vez",
      "pt": "Como você fez isso? De novo!",
      "fr": "Comment tu as fait ? Encore une fois !",
      "de": "Wie hast du das gemacht? Noch mal!",
      "th": "ทำได้ไง? ขออีกรอบ!"
     },
     "tags": [
      "magic",
      "illusion"
     ]
    },
    {
     "text": {
      "ko": "나도 해보고 싶다",
      "en": "I want to try it too",
      "zh": "我也想试试",
      "ja": "自分もやってみたい",
      "es": "Yo también quiero probar",
      "pt": "Quero tentar também",
      "fr": "Je veux essayer aussi",
      "de": "Das will ich auch probieren",
      "th": "อยากลองเล่นบ้าง"
     },
     "tags": [
      "toy",
      "craft",
      "game"
     ]
    },
    {
     "text": {
      "ko": "속임수인 걸 알지만 기분은 좋다",
      "en": "I know it's a trick, but it feels good",
      "zh": "明知是骗人的，但心情不错",
      "ja": "タネがあるのは分かっているけど、気分はいい",
      "es": "Sé que es un truco, pero me hace sentir bien",
      "pt": "Sei que é truque, mas é gostoso mesmo assim",
      "fr": "Je sais que c'est un tour, mais ça fait du bien",
      "de": "Ich weiß, dass es ein Trick ist, aber es fühlt sich gut an",
      "th": "รู้ว่าเป็นกลก็จริง แต่รู้สึกดี"
     },
     "tags": [
      "prank",
      "funny_face"
     ]
    }
   ]
  },
  {
   "id": "c_desk",
   "text": {
    "ko": "책상 위에 올려둔다면, 어느 쪽입니까?",
    "en": "If it's going on your desk, which one?",
    "zh": "如果要放在书桌上，你选哪个？",
    "ja": "机の上に置くなら、どれですか？",
    "es": "Si va a estar en tu escritorio, ¿cuál?",
    "pt": "Se fosse para a sua mesa, qual seria?",
    "fr": "Pour votre bureau, vous prenez lequel ?",
    "de": "Wenn etwas auf Ihren Schreibtisch käme, was wäre es?",
    "th": "ถ้าจะวางบนโต๊ะทำงาน คุณเลือกอันไหน?"
   },
   "stage": 3,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "달력이나 그림",
      "en": "A calendar or picture",
      "zh": "日历或画",
      "ja": "カレンダーや絵",
      "es": "Un calendario o un cuadro",
      "pt": "Um calendário ou um quadro",
      "fr": "Un calendrier ou un tableau",
      "de": "Ein Kalender oder ein Bild",
      "th": "ปฏิทินหรือรูปภาพ"
     },
     "tags": [
      "calendar",
      "wall",
      "art"
     ]
    },
    {
     "text": {
      "ko": "작은 피규어",
      "en": "A tiny figure",
      "zh": "小小的手办",
      "ja": "小さなフィギュア",
      "es": "Una figurita",
      "pt": "Uma figurinha minúscula",
      "fr": "Une minuscule figurine",
      "de": "Eine winzige Figur",
      "th": "ฟิกเกอร์จิ๋ว ๆ"
     },
     "tags": [
      "statue",
      "tiny",
      "decor"
     ]
    },
    {
     "text": {
      "ko": "정리함이나 접시",
      "en": "A tray or organizer",
      "zh": "收纳盒或碟子",
      "ja": "小物入れやお皿",
      "es": "Una bandeja o un organizador",
      "pt": "Uma bandeja ou um organizador",
      "fr": "Un plateau ou un organiseur",
      "de": "Eine Ablage oder ein Organizer",
      "th": "ถาดหรือที่จัดระเบียบ"
     },
     "tags": [
      "storage",
      "ceramic",
      "frog",
      "useful"
     ]
    }
   ]
  },
  {
   "id": "c_pet",
   "text": {
    "ko": "동물 친구를 한 마리 만난다면 어떤 쪽이 끌립니까?",
    "en": "If you could meet one animal friend, which would draw you in?",
    "zh": "如果能遇见一位动物朋友，你会被哪种吸引？",
    "ja": "動物の友達に一匹出会えるなら、どれに惹かれますか？",
    "es": "Si pudieras conocer a un amigo animal, ¿cuál te atraería?",
    "pt": "Se você pudesse conhecer um amigo animal, qual o atrairia?",
    "fr": "Si vous pouviez rencontrer un ami animal, lequel vous attirerait ?",
    "de": "Wenn Sie einen tierischen Freund treffen könnten, welcher würde Sie anziehen?",
    "th": "ถ้าได้พบเพื่อนสัตว์สักตัว คุณจะสนใจตัวไหน?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "느긋하게 늘어진 고양이",
      "en": "A lazily sprawled cat",
      "zh": "懒洋洋摊开的猫",
      "ja": "だらんと伸びたネコ",
      "es": "Un gato despatarrado y perezoso",
      "pt": "Um gato esparramado e preguiçoso",
      "fr": "Un chat vautré paresseusement",
      "de": "Eine faul hingeräkelte Katze",
      "th": "แมวนอนแผ่สบาย ๆ"
     },
     "tags": [
      "cat",
      "plush",
      "cute"
     ]
    },
    {
     "text": {
      "ko": "말없이 앉아 있는 개구리",
      "en": "A frog sitting silently",
      "zh": "默默坐着的青蛙",
      "ja": "黙って座っているカエル",
      "es": "Una rana sentada en silencio",
      "pt": "Um sapo sentado em silêncio",
      "fr": "Une grenouille assise en silence",
      "de": "Ein still sitzender Frosch",
      "th": "กบที่นั่งเงียบ ๆ"
     },
     "tags": [
      "frog",
      "zen"
     ]
    },
    {
     "text": {
      "ko": "듬직하게 곁을 지키는 개나 곰",
      "en": "A dependable dog or bear by my side",
      "zh": "稳稳守在身边的狗或熊",
      "ja": "どっしり寄り添うイヌやクマ",
      "es": "Un perro u oso fiable a mi lado",
      "pt": "Um cachorro ou urso confiável ao meu lado",
      "fr": "Un chien ou un ours fiable à mes côtés",
      "de": "Ein verlässlicher Hund oder Bär an meiner Seite",
      "th": "หมาหรือหมีที่คอยอยู่ข้างกายอย่างพึ่งพาได้"
     },
     "tags": [
      "dog",
      "bear",
      "kangaroo",
      "tough"
     ]
    },
    {
     "text": {
      "ko": "장난기 많은 원숭이나 새",
      "en": "A mischievous monkey or bird",
      "zh": "调皮的猴子或小鸟",
      "ja": "いたずら好きなサルや鳥",
      "es": "Un mono o pájaro travieso",
      "pt": "Um macaco ou passarinho travesso",
      "fr": "Un singe ou un oiseau espiègle",
      "de": "Ein verspielter Affe oder Vogel",
      "th": "ลิงหรือนกจอมซน"
     },
     "tags": [
      "monkey",
      "bird",
      "prank"
     ]
    }
   ]
  },
  {
   "id": "c_rain",
   "text": {
    "ko": "비 오는 날, 집에서 가장 하고 싶은 것은 무엇입니까?",
    "en": "On a rainy day, what do you most want to do at home?",
    "zh": "下雨天，你在家最想做什么？",
    "ja": "雨の日、家でいちばんしたいことは何ですか？",
    "es": "En un día de lluvia, ¿qué es lo que más te apetece hacer en casa?",
    "pt": "Num dia de chuva, o que você mais quer fazer em casa?",
    "fr": "Un jour de pluie, que voulez-vous le plus faire chez vous ?",
    "de": "Was möchten Sie an einem Regentag zu Hause am liebsten tun?",
    "th": "วันฝนตก คุณอยากทำอะไรที่บ้านมากที่สุด?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "이불 속에서 빗소리 들으며 멍하니 있기",
      "en": "Zone out under the blanket listening to the rain",
      "zh": "窝在被子里听雨发呆",
      "ja": "布団の中で雨音を聞きながらぼんやりする",
      "es": "Desconectar bajo la manta escuchando la lluvia",
      "pt": "Ficar sem pensar debaixo do cobertor ouvindo a chuva",
      "fr": "Me laisser aller sous la couette en écoutant la pluie",
      "de": "Unter der Decke dem Regen lauschen und abschalten",
      "th": "นอนเหม่อฟังเสียงฝนใต้ผ้าห่ม"
     },
     "tags": [
      "frog",
      "sound",
      "zen"
     ]
    },
    {
     "text": {
      "ko": "고양이나 인형을 끌어안고 뒹굴기",
      "en": "Roll around hugging a cat or a plush",
      "zh": "抱着猫或玩偶打滚",
      "ja": "猫やぬいぐるみを抱いて転がる",
      "es": "Revolcarme abrazando un gato o un peluche",
      "pt": "Rolar abraçando um gato ou uma pelúcia",
      "fr": "Me rouler en serrant un chat ou une peluche",
      "de": "Mit einer Katze oder einem Plüschtier im Arm herumkugeln",
      "th": "กอดแมวหรือตุ๊กตากลิ้งไปมา"
     },
     "tags": [
      "cat",
      "plush",
      "cute"
     ]
    },
    {
     "text": {
      "ko": "향을 피우고 차를 천천히 마시기",
      "en": "Light incense and sip tea slowly",
      "zh": "点上香慢慢喝茶",
      "ja": "お香を焚いてゆっくりお茶を飲む",
      "es": "Encender incienso y beber té despacio",
      "pt": "Acender incenso e tomar chá devagar",
      "fr": "Allumer de l'encens et boire un thé lentement",
      "de": "Räucherwerk anzünden und langsam Tee trinken",
      "th": "จุดธูปแล้วจิบชาช้า ๆ"
     },
     "tags": [
      "incense",
      "zen",
      "ceramic"
     ]
    }
   ]
  },
  {
   "id": "c_party",
   "text": {
    "ko": "친구 생일 선물을 고르고 있습니다. 가장 손이 가는 쪽은?",
    "en": "You're picking a birthday gift for a friend. Which do you reach for?",
    "zh": "你在挑朋友的生日礼物，最想拿哪个？",
    "ja": "友だちの誕生日プレゼントを選んでいます。いちばん手が伸びるのは？",
    "es": "Estás eligiendo un regalo de cumpleaños para un amigo. ¿Cuál tomas?",
    "pt": "Você vai escolher um presente de aniversário para um amigo. Qual escolhe?",
    "fr": "Vous choisissez un cadeau d'anniversaire pour un ami. Lequel prenez-vous ?",
    "de": "Sie suchen ein Geburtstagsgeschenk für einen Freund aus. Wonach greifen Sie?",
    "th": "คุณกำลังเลือกของขวัญวันเกิดให้เพื่อน คุณหยิบอะไร?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "웃기게 생긴 모자나 소품",
      "en": "A funny-looking hat or accessory",
      "zh": "造型搞笑的帽子或小饰品",
      "ja": "笑える形の帽子や小物",
      "es": "Un sombrero o accesorio gracioso",
      "pt": "Um chapéu ou acessório de cara engraçada",
      "fr": "Un chapeau ou un accessoire à la bouille rigolote",
      "de": "Ein komisch aussehender Hut oder Schmuck",
      "th": "หมวกหรือเครื่องประดับหน้าตาตลก"
     },
     "tags": [
      "costume",
      "headwear",
      "funny_face"
     ]
    },
    {
     "text": {
      "ko": "같이 놀 수 있는 장난감이나 게임",
      "en": "A toy or game we can play together",
      "zh": "能一起玩的玩具或游戏",
      "ja": "一緒に遊べるおもちゃやゲーム",
      "es": "Un juguete o juego para jugar juntos",
      "pt": "Um brinquedo ou jogo para brincarmos juntos",
      "fr": "Un jouet ou un jeu pour jouer ensemble",
      "de": "Ein Spielzeug oder Spiel, das wir zusammen spielen können",
      "th": "ของเล่นหรือเกมที่เล่นด้วยกันได้"
     },
     "tags": [
      "toy",
      "game"
     ]
    },
    {
     "text": {
      "ko": "직접 만든 작은 것",
      "en": "Something small I made myself",
      "zh": "亲手做的小东西",
      "ja": "手作りの小さなもの",
      "es": "Algo pequeño hecho por mí",
      "pt": "Algo pequeno que eu mesmo(a) fiz",
      "fr": "Un petit truc que j'ai fabriqué moi-même",
      "de": "Etwas Kleines, das ich selbst gemacht habe",
      "th": "ของเล็ก ๆ ที่ทำเอง"
     },
     "tags": [
      "craft",
      "tiny",
      "storage"
     ]
    }
   ]
  },
  {
   "id": "c_end",
   "text": {
    "ko": "내일 지구가 끝난다면, 곁에 두고 싶은 것은?",
    "en": "If the world ends tomorrow, what do you want beside you?",
    "zh": "如果明天世界末日，你想把什么留在身边？",
    "ja": "明日、地球が終わるとしたら、そばに置きたいものは？",
    "es": "Si mañana se acaba el mundo, ¿qué quieres tener a tu lado?",
    "pt": "Se o mundo acabasse amanhã, o que você quereria ao seu lado?",
    "fr": "Si le monde finit demain, que voulez-vous près de vous ?",
    "de": "Wenn morgen die Welt untergeht, was soll neben Ihnen sein?",
    "th": "ถ้าพรุ่งนี้โลกแตก คุณอยากมีอะไรอยู่ข้าง ๆ?"
   },
   "stage": 3,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "좋아하는 동물",
      "en": "An animal I love",
      "zh": "喜欢的动物",
      "ja": "好きな動物",
      "es": "Un animal que quiero",
      "pt": "Um animal que eu amo",
      "fr": "Un animal que j'aime",
      "de": "Ein Tier, das ich liebe",
      "th": "สัตว์ที่ฉันรัก"
     },
     "tags": [
      "animal",
      "cat",
      "dog",
      "frog",
      "plush",
      "living"
     ]
    },
    {
     "text": {
      "ko": "웃기게 생긴 무언가",
      "en": "Something ridiculous-looking",
      "zh": "长得很好笑的东西",
      "ja": "おかしな顔をした何か",
      "es": "Algo de aspecto ridículo",
      "pt": "Algo de aparência ridícula",
      "fr": "Un truc à l'air ridicule",
      "de": "Etwas lächerlich Aussehendes",
      "th": "ของหน้าตาไร้สาระ"
     },
     "tags": [
      "funny_face",
      "cartoon",
      "human"
     ]
    },
    {
     "text": {
      "ko": "마음이 조용히 가라앉는 것",
      "en": "Something that quietly settles my mind",
      "zh": "能让心静静沉下来的东西",
      "ja": "心が静かに落ち着くもの",
      "es": "Algo que me serene en silencio",
      "pt": "Algo que acalme minha cabeça em silêncio",
      "fr": "Quelque chose qui apaise mon esprit en silence",
      "de": "Etwas, das meinen Kopf leise beruhigt",
      "th": "อะไรสักอย่างที่ทำให้ใจสงบเงียบ ๆ"
     },
     "tags": [
      "god",
      "zen",
      "statue",
      "incense",
      "decor"
     ]
    }
   ]
  },
  {
   "id": "c_island",
   "text": {
    "ko": "무인도에서 심심하지 않으려면 무엇이 있어야 합니까?",
    "en": "To avoid boredom on a desert island, what would you need?",
    "zh": "在荒岛上想不无聊，需要有什么？",
    "ja": "無人島で退屈しないためには、何が必要ですか？",
    "es": "Para no aburrirte en una isla desierta, ¿qué necesitarías?",
    "pt": "Para não ficar entediado(a) numa ilha deserta, o que você precisaria ter?",
    "fr": "Pour ne pas vous ennuyer sur une île déserte, de quoi auriez-vous besoin ?",
    "de": "Was bräuchten Sie, um sich auf einer einsamen Insel nicht zu langweilen?",
    "th": "ถ้าจะไม่เบื่อบนเกาะร้าง คุณต้องมีอะไร?"
   },
   "stage": 3,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "말동무가 되어줄 작은 생물",
      "en": "A small creature to talk to",
      "zh": "能陪我聊天的小生物",
      "ja": "話し相手になってくれる小さな生き物",
      "es": "Una pequeña criatura con quien hablar",
      "pt": "Uma pequena criatura para conversar",
      "fr": "Une petite créature avec qui parler",
      "de": "Ein kleines Wesen zum Reden",
      "th": "สิ่งมีชีวิตตัวเล็กไว้คุยด้วย"
     },
     "tags": [
      "animal",
      "living",
      "cute",
      "frog"
     ]
    },
    {
     "text": {
      "ko": "혼자 가지고 놀 장난감이나 게임",
      "en": "A toy or game to play with alone",
      "zh": "一个人玩的玩具或游戏",
      "ja": "一人で遊べるおもちゃやゲーム",
      "es": "Un juguete o juego para jugar solo",
      "pt": "Um brinquedo ou jogo para brincar sozinho(a)",
      "fr": "Un jouet ou un jeu pour jouer seul(e)",
      "de": "Ein Spielzeug oder Spiel zum Alleinspielen",
      "th": "ของเล่นหรือเกมไว้เล่นคนเดียว"
     },
     "tags": [
      "toy",
      "game",
      "puzzle"
     ]
    },
    {
     "text": {
      "ko": "보기만 해도 웃음이 나는 이상한 얼굴",
      "en": "A strange face that makes me laugh just by looking",
      "zh": "看一眼就想笑的奇怪脸孔",
      "ja": "見るだけで笑ってしまう変な顔",
      "es": "Una cara rara que me haga reír solo con mirarla",
      "pt": "Um rosto esquisito que me faz rir só de olhar",
      "fr": "Une drôle de tête qui me fait rire rien qu'en la regardant",
      "de": "Ein seltsames Gesicht, das mich schon beim Ansehen zum Lachen bringt",
      "th": "ใบหน้าแปลก ๆ ที่แค่มองก็หัวเราะ"
     },
     "tags": [
      "funny_face",
      "human",
      "cartoon"
     ]
    }
   ]
  },
  {
   "id": "c_profile",
   "text": {
    "ko": "프로필 사진으로 쓴다면, 어느 쪽입니까?",
    "en": "If it were your profile picture, which one?",
    "zh": "如果用作头像，你选哪个？",
    "ja": "プロフィール写真にするなら、どれですか？",
    "es": "Si fuera tu foto de perfil, ¿cuál sería?",
    "pt": "Se fosse a sua foto de perfil, qual seria?",
    "fr": "Si c'était votre photo de profil, laquelle ?",
    "de": "Wenn es Ihr Profilbild wäre, welches?",
    "th": "ถ้าเป็นรูปโปรไฟล์ของคุณ จะเป็นรูปไหน?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "표정이 이상하게 나온 사진",
      "en": "A photo where my face came out weird",
      "zh": "表情拍得很奇怪的照片",
      "ja": "変な顔に写った写真",
      "es": "Una foto donde salí con cara rara",
      "pt": "Uma foto em que meu rosto saiu esquisito",
      "fr": "Une photo où mon visage est sorti bizarre",
      "de": "Ein Foto, auf dem mein Gesicht komisch geworden ist",
      "th": "รูปที่หน้าออกมาตลก ๆ"
     },
     "tags": [
      "funny_face",
      "human"
     ]
    },
    {
     "text": {
      "ko": "동물 사진",
      "en": "A picture of an animal",
      "zh": "动物的照片",
      "ja": "動物の写真",
      "es": "Una foto de un animal",
      "pt": "Uma foto de um animal",
      "fr": "Une photo d'animal",
      "de": "Ein Bild von einem Tier",
      "th": "รูปสัตว์"
     },
     "tags": [
      "animal",
      "cat",
      "frog",
      "dog"
     ]
    },
    {
     "text": {
      "ko": "분위기 있는 물건이나 풍경",
      "en": "A moody object or landscape",
      "zh": "有氛围的物品或风景",
      "ja": "雰囲気のある物や風景",
      "es": "Un objeto o paisaje con ambiente",
      "pt": "Um objeto ou paisagem cheio de clima",
      "fr": "Un objet ou un paysage plein d'ambiance",
      "de": "Ein stimmungsvoller Gegenstand oder eine Landschaft",
      "th": "ของหรือวิวที่มีอารมณ์"
     },
     "tags": [
      "decor",
      "wall"
     ]
    }
   ]
  },
  {
   "id": "c_attach",
   "text": {
    "ko": "가방이나 옷에 하나 달 수 있다면 무엇을 달겠습니까?",
    "en": "If you could attach one thing to your bag or clothes, what would it be?",
    "zh": "如果能在包或衣服上挂一样东西，你会挂什么？",
    "ja": "バッグや服に一つだけ付けるなら、何を付けますか？",
    "es": "Si pudieras colgar una cosa en tu bolso o ropa, ¿cuál sería?",
    "pt": "Se pudesse pendurar uma coisa na bolsa ou na roupa, o que seria?",
    "fr": "Si vous pouviez accrocher un objet à votre sac ou vos vêtements, ce serait quoi ?",
    "de": "Wenn Sie nur eine Sache an Tasche oder Kleidung anbringen könnten, was wäre es?",
    "th": "ถ้าห้อยของได้หนึ่งอย่างที่กระเป๋าหรือเสื้อผ้า คุณจะห้อยอะไร?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "작은 인형 키링",
      "en": "A small doll keychain",
      "zh": "小玩偶挂件",
      "ja": "小さな人形のキーホルダー",
      "es": "Un llavero de muñeco pequeño",
      "pt": "Um chaveiro de bonequinho",
      "fr": "Un porte-clés en petite poupée",
      "de": "Ein kleiner Puppen-Schlüsselanhänger",
      "th": "พวงกุญแจตุ๊กตาตัวเล็ก"
     },
     "tags": [
      "plush",
      "cute",
      "doll",
      "tiny"
     ]
    },
    {
     "text": {
      "ko": "웃긴 그림이 그려진 배지",
      "en": "A badge with a funny drawing",
      "zh": "印着搞笑图案的徽章",
      "ja": "面白い絵のバッジ",
      "es": "Una chapa con un dibujo gracioso",
      "pt": "Um bóton com um desenho engraçado",
      "fr": "Un badge avec un dessin drôle",
      "de": "Ein Button mit lustiger Zeichnung",
      "th": "เข็มกลัดลายตลก ๆ"
     },
     "tags": [
      "cartoon",
      "funny_face"
     ]
    },
    {
     "text": {
      "ko": "묵직한 금속 장식",
      "en": "A weighty metal charm",
      "zh": "有分量的金属饰品",
      "ja": "ずっしりした金属の飾り",
      "es": "Un colgante de metal con peso",
      "pt": "Um pingente de metal pesado",
      "fr": "Une breloque en métal bien lourde",
      "de": "Ein schwerer Metallanhänger",
      "th": "เครื่องประดับโลหะหนัก ๆ"
     },
     "tags": [
      "metal",
      "tough",
      "jewelry"
     ]
    }
   ]
  },
  {
   "id": "c_home",
   "text": {
    "ko": "집에 들어왔을 때 가장 반가운 소리는?",
    "en": "Coming home, which sound would you be happiest to hear?",
    "zh": "回到家，最想听到的声音是？",
    "ja": "家に帰ったとき、いちばんうれしい音は？",
    "es": "Al llegar a casa, ¿qué sonido te alegraría más?",
    "pt": "Ao chegar em casa, qual som te deixaria mais feliz?",
    "fr": "En rentrant chez vous, quel son vous rendrait le plus heureux(se) ?",
    "de": "Wenn Sie nach Hause kommen, welches Geräusch würde Sie am meisten freuen?",
    "th": "กลับถึงบ้านแล้วได้ยินเสียงอะไรจะมีความสุขที่สุด?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "야옹, 혹은 멍멍",
      "en": "A meow or a woof",
      "zh": "喵，或者汪",
      "ja": "にゃあ、あるいはわん",
      "es": "Un miau o un guau",
      "pt": "Um miau ou um au-au",
      "fr": "Un miaou ou un ouaf",
      "de": "Ein Miau oder ein Wuff",
      "th": "เสียงเมี้ยวหรือโฮ่ง"
     },
     "tags": [
      "cat",
      "dog",
      "animal",
      "living"
     ]
    },
    {
     "text": {
      "ko": "개구리나 새의 울음소리",
      "en": "A frog or a bird singing",
      "zh": "蛙鸣或鸟叫",
      "ja": "カエルや鳥の鳴き声",
      "es": "Una rana o un pájaro cantando",
      "pt": "Um sapo ou um passarinho cantando",
      "fr": "Une grenouille ou un oiseau qui chante",
      "de": "Ein Frosch oder ein singender Vogel",
      "th": "เสียงกบหรือนกร้อง"
     },
     "tags": [
      "frog",
      "sound",
      "living"
     ]
    },
    {
     "text": {
      "ko": "누군가 켜둔 음악",
      "en": "Music someone left on",
      "zh": "有人开着的音乐",
      "ja": "誰かがつけておいた音楽",
      "es": "Música que alguien dejó puesta",
      "pt": "Uma música que alguém deixou tocando",
      "fr": "De la musique que quelqu'un a laissée allumée",
      "de": "Musik, die jemand angelassen hat",
      "th": "เพลงที่ใครเปิดทิ้งไว้"
     },
     "tags": [
      "sound",
      "guitar",
      "game"
     ]
    }
   ]
  },
  {
   "id": "c_dream",
   "text": {
    "ko": "꿈에서 누군가 말을 걸어온다면 누구일 것 같습니까?",
    "en": "If someone spoke to you in a dream, who would it be?",
    "zh": "如果梦里有人跟你说话，会是谁？",
    "ja": "夢の中で誰かに話しかけられるなら、誰だと思いますか？",
    "es": "Si alguien te hablara en un sueño, ¿quién sería?",
    "pt": "Se alguém falasse com você num sonho, quem seria?",
    "fr": "Si quelqu'un vous parlait dans un rêve, ce serait qui ?",
    "de": "Wenn im Traum jemand mit Ihnen spräche, wer wäre es?",
    "th": "ถ้าในฝันมีใครมาคุยด้วย จะเป็นใคร?"
   },
   "stage": 3,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "말하는 동물",
      "en": "A talking animal",
      "zh": "会说话的动物",
      "ja": "しゃべる動物",
      "es": "Un animal que habla",
      "pt": "Um animal falante",
      "fr": "Un animal qui parle",
      "de": "Ein sprechendes Tier",
      "th": "สัตว์ที่พูดได้"
     },
     "tags": [
      "animal",
      "frog",
      "cat",
      "monkey",
      "living"
     ]
    },
    {
     "text": {
      "ko": "거대한 신상이나 조각상",
      "en": "A giant divine statue",
      "zh": "巨大的神像或雕像",
      "ja": "巨大な神像や彫像",
      "es": "Una estatua divina gigante",
      "pt": "Uma estátua divina gigante",
      "fr": "Une statue divine géante",
      "de": "Eine riesige Götterstatue",
      "th": "รูปปั้นเทพองค์ยักษ์"
     },
     "tags": [
      "god",
      "statue",
      "scary"
     ]
    },
    {
     "text": {
      "ko": "처음 보는 외계 생물",
      "en": "An alien creature I've never seen",
      "zh": "从没见过的外星生物",
      "ja": "見たことのない宇宙生物",
      "es": "Una criatura alienígena que nunca he visto",
      "pt": "Uma criatura alienígena que nunca vi",
      "fr": "Une créature extraterrestre jamais vue",
      "de": "Ein Außerirdischer, den ich noch nie gesehen habe",
      "th": "มนุษย์ต่างดาวที่ไม่เคยเห็น"
     },
     "tags": [
      "alien",
      "illusion"
     ]
    }
   ]
  },
  {
   "id": "c_keep",
   "text": {
    "ko": "아끼는 작은 물건이 생겼습니다. 어디에 둡니까?",
    "en": "You have a small thing you treasure. Where do you put it?",
    "zh": "你有了一件珍爱的小物件。会把它放在哪里？",
    "ja": "大切にしたい小さな物ができました。どこに置きますか？",
    "es": "Tienes un objeto pequeño que aprecias. ¿Dónde lo pones?",
    "pt": "Você tem uma coisinha que considera um tesouro. Onde a coloca?",
    "fr": "Vous avez une petite chose qui vous est précieuse. Où la rangez-vous ?",
    "de": "Sie haben ein Dingelchen, das Ihnen kostbar ist. Wohin legen Sie es?",
    "th": "คุณมีของชิ้นเล็ก ๆ ที่หวงแหน คุณเก็บไว้ที่ไหน?"
   },
   "stage": 3,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "책상 위, 잘 보이는 곳",
      "en": "On my desk, in plain view",
      "zh": "书桌上显眼的地方",
      "ja": "机の上の、よく見える場所",
      "es": "En mi escritorio, bien a la vista",
      "pt": "Na minha mesa, à vista de todos",
      "fr": "Sur mon bureau, bien en vue",
      "de": "Auf meinen Schreibtisch, gut sichtbar",
      "th": "บนโต๊ะ เห็นชัด ๆ"
     },
     "tags": [
      "decor",
      "statue",
      "tiny",
      "doll"
     ]
    },
    {
     "text": {
      "ko": "벽에 건다",
      "en": "On the wall",
      "zh": "挂在墙上",
      "ja": "壁にかける",
      "es": "Colgado en la pared",
      "pt": "Na parede",
      "fr": "Au mur",
      "de": "An die Wand",
      "th": "บนผนัง"
     },
     "tags": [
      "wall",
      "calendar",
      "east"
     ]
    },
    {
     "text": {
      "ko": "서랍 속에 몰래 넣어둔다",
      "en": "Secretly in a drawer",
      "zh": "悄悄放进抽屉里",
      "ja": "引き出しの中にこっそり",
      "es": "A escondidas en un cajón",
      "pt": "Escondida na gaveta",
      "fr": "En secret dans un tiroir",
      "de": "Heimlich in eine Schublade",
      "th": "แอบไว้ในลิ้นชัก"
     },
     "tags": [
      "hide",
      "storage",
      "scary"
     ]
    }
   ]
  },
  {
   "id": "c_scary",
   "text": {
    "ko": "무서운 영화를 볼 때 당신은 어느 쪽입니까?",
    "en": "When watching a scary movie, which are you?",
    "zh": "看恐怖片时，你是哪一种？",
    "ja": "怖い映画を観るとき、あなたはどっちですか？",
    "es": "Viendo una película de miedo, ¿cuál eres?",
    "pt": "Ao assistir a um filme de terror, qual você é?",
    "fr": "Devant un film d'horreur, vous êtes plutôt...",
    "de": "Wenn Sie einen Horrorfilm schauen, welcher Typ sind Sie?",
    "th": "เวลาดูหนังผี คุณเป็นแบบไหน?"
   },
   "stage": 3,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "손가락 사이로 몰래 본다",
      "en": "Peeking through my fingers",
      "zh": "从指缝里偷看",
      "ja": "指の間からこっそり観る",
      "es": "Miro entre los dedos",
      "pt": "Espiando por entre os dedos",
      "fr": "À regarder entre mes doigts",
      "de": "Ich linse durch die Finger",
      "th": "แอบดูผ่านช่องนิ้ว"
     },
     "tags": [
      "scary",
      "anatomy",
      "organ"
     ]
    },
    {
     "text": {
      "ko": "무서운데 이상하게 웃음이 난다",
      "en": "Scared, but oddly laughing",
      "zh": "明明害怕却莫名想笑",
      "ja": "怖いのになぜか笑ってしまう",
      "es": "Con miedo, pero me río",
      "pt": "Com medo, mas rindo sem saber por quê",
      "fr": "Effrayé(e), mais je ris bizarrement",
      "de": "Ich habe Angst, lache aber komischerweise",
      "th": "กลัวแต่หัวเราะแปลก ๆ"
     },
     "tags": [
      "funny_face",
      "cartoon"
     ]
    },
    {
     "text": {
      "ko": "무서운 존재가 오히려 귀엽다",
      "en": "The scary creature is kind of cute",
      "zh": "可怕的家伙反而很可爱",
      "ja": "怖い存在がむしろかわいい",
      "es": "La criatura da miedo pero me parece mona",
      "pt": "A criatura assustadora é até meio fofa",
      "fr": "La créature effrayante est plutôt mignonne",
      "de": "Das gruselige Wesen ist irgendwie niedlich",
      "th": "ผีน่ากลัวแต่ดูน่ารักไปหน่อย"
     },
     "tags": [
      "cute",
      "scary",
      "plush",
      "alien"
     ]
    }
   ]
  },
  {
   "id": "c_hobby",
   "text": {
    "ko": "요즘 가장 시간을 많이 쓰는 건 어느 쪽입니까?",
    "en": "What have you been spending the most time on lately?",
    "zh": "最近花最多时间的是哪一类？",
    "ja": "最近いちばん時間を使っているのは？",
    "es": "¿En qué inviertes más tiempo últimamente?",
    "pt": "No que você mais tem gastado tempo ultimamente?",
    "fr": "Qu'est-ce qui vous occupe le plus ces derniers temps ?",
    "de": "Womit verbringen Sie in letzter Zeit die meiste Zeit?",
    "th": "ช่วงนี้คุณใช้เวลากับอะไรมากที่สุด?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "이상한 물건 구경하기",
      "en": "Browsing weird stuff",
      "zh": "逛奇奇怪怪的东西",
      "ja": "変な物を眺めること",
      "es": "Mirar cosas raras",
      "pt": "Fuçando coisas esquisitas",
      "fr": "Fouiner dans des trucs bizarres",
      "de": "Komisches Zeug durchstöbern",
      "th": "ไล่ดูของแปลก ๆ"
     },
     "tags": [
      "funny_face",
      "toy"
     ]
    },
    {
     "text": {
      "ko": "뭔가 직접 만들기",
      "en": "Making something myself",
      "zh": "自己动手做点什么",
      "ja": "何かを自分で作ること",
      "es": "Hacer algo con mis manos",
      "pt": "Fazendo alguma coisa com as próprias mãos",
      "fr": "Fabriquer quelque chose moi-même",
      "de": "Selbst etwas basteln",
      "th": "ลงมือทำอะไรสักอย่างเอง"
     },
     "tags": [
      "craft",
      "tiny"
     ]
    },
    {
     "text": {
      "ko": "동물 영상 보기",
      "en": "Watching animal videos",
      "zh": "看动物视频",
      "ja": "動物の動画を観ること",
      "es": "Ver vídeos de animales",
      "pt": "Vendo vídeos de bichinhos",
      "fr": "Regarder des vidéos d'animaux",
      "de": "Tiervideos schauen",
      "th": "ดูคลิปสัตว์"
     },
     "tags": [
      "animal",
      "cat",
      "frog",
      "dog",
      "cute"
     ]
    }
   ]
  },
  {
   "id": "mall",
   "text": {
    "ko": "쇼핑몰에 가면 살 것을 정해두기보다, 구경하며 시간을 보내는 쪽입니까?",
    "en": "At a shopping mall, do you wander and look rather than go in with a list?",
    "zh": "去商场的时候，你是边逛边看，而不是带着清单去买吗？",
    "ja": "ショッピングモールでは、買うものを決めるより、見て回って過ごすほうですか？",
    "es": "En un centro comercial, ¿prefieres pasear y mirar en vez de ir con una lista?",
    "pt": "No shopping, você prefere vagar e olhar em vez de entrar com uma lista na mão?",
    "fr": "Dans un centre commercial, préférez-vous flâner et regarder plutôt que d'entrer avec une liste ?",
    "de": "Streifen Sie im Einkaufszentrum lieber herum und schauen, statt mit einer Liste hineinzugehen?",
    "th": "เวลาไปห้าง คุณชอบเดินดูเรื่อย ๆ มากกว่าเข้าไปพร้อมลิสต์ใช่ไหม?"
   },
   "yes": [
    "funny_face",
    "prank",
    "decor"
   ],
   "no": [
    "useful"
   ],
   "stage": 2
  },
  {
   "id": "giftstay",
   "text": {
    "ko": "선물은 가격보다, 그 선물을 고른 마음이 오래 기억에 남습니까?",
    "en": "With a gift, do you remember the thought behind it longer than the price?",
    "zh": "收到礼物时，比起价格，你更久地记得挑选它的心意吗？",
    "ja": "プレゼントは、値段よりも選んでくれた気持ちのほうが長く記憶に残りますか？",
    "es": "En un regalo, ¿recuerdas más tiempo la intención que el precio?",
    "pt": "Num presente, você lembra do carinho por trás dele por mais tempo do que do preço?",
    "fr": "Pour un cadeau, vous souvenez-vous plus longtemps de l'attention que du prix ?",
    "de": "Erinnern Sie sich bei einem Geschenk länger an die Geste dahinter als an den Preis?",
    "th": "สำหรับของขวัญ คุณจำน้ำใจที่อยู่เบื้องหลังได้นานกว่าราคาใช่ไหม?"
   },
   "yes": [
    "decor",
    "statue",
    "cute"
   ],
   "no": [
    "useful"
   ],
   "stage": 2
  },
  {
   "id": "stationery",
   "text": {
    "ko": "어릴 때 문방구에서 산 이상한 장난감이 아직도 기억납니까?",
    "en": "Do you still remember some odd toy you bought at a stationery shop as a kid?",
    "zh": "小时候在文具店买的奇怪玩具，你现在还记得吗？",
    "ja": "子どもの頃に文房具店で買った変なおもちゃを、今でも覚えていますか？",
    "es": "¿Recuerdas todavía algún juguete raro que compraste de niño en la papelería?",
    "pt": "Você ainda lembra de algum brinquedo esquisito que comprou na papelaria quando era criança?",
    "fr": "Vous souvenez-vous encore d'un jouet bizarre acheté enfant à la papeterie ?",
    "de": "Erinnern Sie sich noch an irgendein seltsames Spielzeug, das Sie als Kind im Schreibwarenladen gekauft haben?",
    "th": "คุณยังจำของเล่นแปลก ๆ ที่เคยซื้อจากร้านเครื่องเขียนตอนเด็กได้ไหม?"
   },
   "yes": [
    "toy",
    "prank",
    "game",
    "magic"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "ugliest",
   "text": {
    "ko": "인형 뽑기 앞에서 가장 못생긴 인형에게 마음이 간 적이 있습니까?",
    "en": "At a claw machine, have you ever been drawn to the ugliest plush in the box?",
    "zh": "在夹娃娃机前，你有没有被最丑的那只娃娃吸引过？",
    "ja": "クレーンゲームの前で、いちばん不細工なぬいぐるみに心を奪われたことはありますか？",
    "es": "En una máquina de peluches, ¿te ha atraído alguna vez el más feo de todos?",
    "pt": "Na máquina de pelúcias, você já se sentiu atraído(a) pela pelúcia mais feia da caixa?",
    "fr": "Devant une pince à peluches, avez-vous déjà été attiré(e) par la peluche la plus moche du bac ?",
    "de": "Hat Sie am Greifautomaten schon mal das hässlichste Plüschtier in der Kiste angezogen?",
    "th": "ที่ตู้คีบตุ๊กตา เคยหลงตุ๊กตาที่น่าเกลียดที่สุดในตู้ไหม?"
   },
   "yes": [
    "funny_face",
    "plush",
    "doll",
    "monkey"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "deskpal",
   "text": {
    "ko": "책상 위에는 작은 존재 하나쯤 늘 놓여 있어야 합니까?",
    "en": "Does your desk always need a little something keeping you company?",
    "zh": "你的书桌上，是不是总得有个小小的“陪伴者”？",
    "ja": "机の上には、いつも小さな相棒が一つ置いてあるべきですか？",
    "es": "¿Tu escritorio siempre necesita un pequeño compañero?",
    "pt": "Sua mesa sempre precisa de alguma coisinha te fazendo companhia?",
    "fr": "Votre bureau a-t-il toujours besoin d'un petit quelque chose pour vous tenir compagnie ?",
    "de": "Braucht Ihr Schreibtisch immer eine Kleinigkeit, die Ihnen Gesellschaft leistet?",
    "th": "โต๊ะของคุณต้องมีอะไรเล็ก ๆ เป็นเพื่อนอยู่เสมอไหม?"
   },
   "yes": [
    "statue",
    "tiny",
    "doll",
    "animal",
    "decor"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "whatfor",
   "text": {
    "ko": "취향이 독특하다는 말을 들어본 적이 있습니까?",
    "en": "Has anyone told you that your taste is unusual?",
    "zh": "有人说过你的品味很独特吗？",
    "ja": "趣味が独特だと言われたことはありますか？",
    "es": "¿Alguna vez te han dicho que tu gusto es peculiar?",
    "pt": "Alguém já te disse que o seu gosto é diferente?",
    "fr": "Quelqu'un vous a-t-il déjà dit que vos goûts étaient originaux ?",
    "de": "Hat Ihnen schon mal jemand gesagt, dass Ihr Geschmack ungewöhnlich ist?",
    "th": "เคยมีคนบอกว่ารสนิยมของคุณแปลกไหม?"
   },
   "yes": [
    "funny_face",
    "prank",
    "alien",
    "magic",
    "toy"
   ],
   "no": [
    "useful"
   ],
   "stage": 2
  },
  {
   "id": "usefulgift",
   "text": {
    "ko": "선물을 고를 때, 실용적인 것보다 분위기 있는 것에 먼저 손이 갑니까?",
    "en": "When choosing a gift, do you reach first for something with character rather than something practical?",
    "zh": "挑选礼物时，比起实用的东西，你会先伸手去拿有氛围感的吗？",
    "ja": "プレゼントを選ぶとき、実用的なものより雰囲気のあるものに先に手が伸びますか？",
    "es": "Al elegir un regalo, ¿te decantas antes por algo con encanto que por algo práctico?",
    "pt": "Na hora de escolher um presente, você vai primeiro em algo com personalidade em vez de algo prático?",
    "fr": "Pour choisir un cadeau, optez-vous d'abord pour quelque chose qui a du caractère plutôt que pour du pratique ?",
    "de": "Greifen Sie bei der Geschenkwahl zuerst zu etwas mit Charakter statt zu etwas Praktischem?",
    "th": "เวลาเลือกของขวัญ คุณหยิบของที่มีเอกลักษณ์ก่อนของที่ใช้งานได้จริงไหม?"
   },
   "yes": [
    "decor",
    "funny_face",
    "prank"
   ],
   "no": [
    "useful",
    "storage"
   ],
   "stage": 2
  },
  {
   "id": "cutecreepy",
   "text": {
    "ko": "귀여우면서 동시에 조금 징그러운 것에 끌립니까?",
    "en": "Are you drawn to things that are cute and a little creepy at the same time?",
    "zh": "你会被又可爱又有点恶心的东西吸引吗？",
    "ja": "かわいいのに、少し気持ち悪いものに惹かれますか？",
    "es": "¿Te atrae lo que es mono y un poco grotesco a la vez?",
    "pt": "Você se atrai por coisas que são fofas e um pouquinho assustadoras ao mesmo tempo?",
    "fr": "Êtes-vous attiré(e) par ce qui est à la fois mignon et un peu inquiétant ?",
    "de": "Ziehen Sie Dinge an, die zugleich niedlich und ein bisschen gruselig sind?",
    "th": "คุณหลงของที่น่ารักและขนลุกนิด ๆ ในเวลาเดียวกันไหม?"
   },
   "yes": [
    "cute",
    "scary",
    "anatomy",
    "alien"
   ],
   "no": [],
   "stage": 3
  },
  {
   "id": "job",
   "text": {
    "ko": "직업이 뚜렷한 작은 인물이 책상에서 대기 중이면 마음이 놓입니까?",
    "en": "Does it comfort you to have a small figure with a clear job standing by on your desk?",
    "zh": "桌上有个职业分明的小人物待命，你会觉得安心吗？",
    "ja": "職業のはっきりした小さな人形が机でスタンバイしていると、安心しますか？",
    "es": "¿Te tranquiliza tener sobre el escritorio una figurita con un oficio muy claro?",
    "pt": "Te conforta ter uma figurinha com uma função bem definida de plantão na sua mesa?",
    "fr": "Cela vous rassure-t-il d'avoir sur votre bureau une petite figurine avec un métier bien défini, au garde-à-vous ?",
    "de": "Beruhigt es Sie, eine kleine Figur mit klarer Aufgabe auf Ihrem Schreibtisch Wache stehen zu haben?",
    "th": "การมีฟิกเกอร์ตัวเล็กที่มีหน้าที่ชัดเจนยืนเฝ้าบนโต๊ะ ทำให้คุณอุ่นใจไหม?"
   },
   "yes": [
    "job"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "season",
   "text": {
    "ko": "계절이 지난 장식을 일 년 내내 꺼내두고 싶습니까?",
    "en": "Do you want to keep seasonal decorations out all year round?",
    "zh": "你想把过季的装饰一年到头都摆在外面吗？",
    "ja": "季節を過ぎた飾りを、一年中出しておきたいですか？",
    "es": "¿Te gustaría dejar la decoración de temporada puesta todo el año?",
    "pt": "Você quer deixar os enfeites de época expostos o ano inteiro?",
    "fr": "Voulez-vous garder les décorations de saison toute l'année ?",
    "de": "Wollen Sie saisonale Dekoration das ganze Jahr über stehen lassen?",
    "th": "คุณอยากวางของตกแต่งตามเทศกาลทิ้งไว้ทั้งปีไหม?"
   },
   "yes": [
    "season"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "eyes",
   "text": {
    "ko": "책상 위의 눈알이 나를 쳐다본다고 상상하면 웃음이 납니까?",
    "en": "Does imagining an eyeball on your desk watching you make you laugh?",
    "zh": "想象书桌上有颗眼球盯着你，你会笑出来吗？",
    "ja": "机の上の目玉に見つめられると想像すると、笑ってしまいますか？",
    "es": "¿Te hace reír imaginar un ojo en tu escritorio que te mira?",
    "pt": "Imaginar um globo ocular na sua mesa te vigiando te faz rir?",
    "fr": "Imaginer un globe oculaire sur votre bureau qui vous observe vous fait-il rire ?",
    "de": "Bringt es Sie zum Lachen, sich ein Auge auf Ihrem Schreibtisch vorzustellen, das Sie beobachtet?",
    "th": "การนึกภาพลูกตาบนโต๊ะที่คอยจ้องคุณอยู่ ทำให้คุณขำไหม?"
   },
   "yes": [
    "eyes",
    "funny_face"
   ],
   "no": [],
   "stage": 3
  },
  {
   "id": "c_face2",
   "text": {
    "ko": "곁에 둘 물건의 표정은 어느 쪽이 좋겠습니까?",
    "en": "Which expression would you want on the thing beside you?",
    "zh": "放在身边的东西，你想要它是什么表情？",
    "ja": "そばに置く物には、どんな表情がいいですか？",
    "es": "¿Qué expresión querrías que tuviera el objeto que tengas cerca?",
    "pt": "Qual expressão você gostaria que o objeto ao seu lado tivesse?",
    "fr": "Quelle expression voudriez-vous à l'objet près de vous ?",
    "de": "Welchen Gesichtsausdruck soll der Gegenstand neben Ihnen haben?",
    "th": "คุณอยากให้ของที่วางไว้ข้างตัวมีสีหน้าแบบไหน?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "세상 다 귀찮은 듯한 무표정",
      "en": "A blank face, tired of the whole world",
      "zh": "对一切都嫌麻烦的面无表情",
      "ja": "世の中すべてが面倒そうな無表情",
      "es": "Cara inexpresiva, harta de todo",
      "pt": "Cara vazia, cansada do mundo todo",
      "fr": "Un visage de marbre, las de tout",
      "de": "Ein ausdrucksloses Gesicht, der Welt überdrüssig",
      "th": "หน้านิ่งเหมือนเบื่อโลกทั้งใบ"
     },
     "tags": [
      "funny_face",
      "zen",
      "statue"
     ]
    },
    {
     "text": {
      "ko": "억울하고 깜짝 놀란 얼굴",
      "en": "A wronged, startled face",
      "zh": "又委屈又吓一跳的脸",
      "ja": "理不尽にびっくりした顔",
      "es": "Una cara agraviada y sobresaltada",
      "pt": "Uma cara injustiçada e assustada",
      "fr": "Un visage outré et surpris",
      "de": "Ein empörtes, erschrockenes Gesicht",
      "th": "หน้าตาน้อยใจและตกใจ"
     },
     "tags": [
      "funny_face",
      "cartoon",
      "scary"
     ]
    },
    {
     "text": {
      "ko": "은은하게 웃고 있는 얼굴",
      "en": "A gently smiling face",
      "zh": "淡淡微笑的脸",
      "ja": "ほのかに微笑む顔",
      "es": "Una cara con una sonrisa suave",
      "pt": "Uma cara com um sorriso suave",
      "fr": "Un visage au doux sourire",
      "de": "Ein sanft lächelndes Gesicht",
      "th": "ใบหน้าที่ยิ้มอ่อนๆ"
     },
     "tags": [
      "cute",
      "god",
      "east"
     ]
    }
   ]
  },
  {
   "id": "c_form",
   "text": {
    "ko": "곁에 둔다면 어떤 모습이 가장 끌립니까?",
    "en": "Which form draws you most?",
    "zh": "你最被哪种形态吸引？",
    "ja": "どんな姿にいちばん惹かれますか？",
    "es": "¿Qué forma te atrae más?",
    "pt": "Qual forma te atrai mais?",
    "fr": "Quelle forme vous attire le plus ?",
    "de": "Welche Form zieht Sie am meisten an?",
    "th": "รูปทรงแบบไหนที่ดึงดูดคุณที่สุด?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "폭신해서 안고 싶은 것",
      "en": "Something fluffy I want to hug",
      "zh": "软绵绵想抱一抱的",
      "ja": "ふわふわで抱きしめたくなるもの",
      "es": "Algo mullido que dan ganas de abrazar",
      "pt": "Algo felpudo que dá vontade de abraçar",
      "fr": "Un truc duveteux qu'on a envie de serrer",
      "de": "Etwas Flauschiges, das man umarmen möchte",
      "th": "ของฟูฟ่องที่อยากกอด"
     },
     "tags": [
      "plush",
      "cute",
      "doll"
     ]
    },
    {
     "text": {
      "ko": "묵직하게 자리를 지키는 조각",
      "en": "A weighty sculpture that holds its place",
      "zh": "沉甸甸坐镇一方的雕像",
      "ja": "どっしりと居座る彫像",
      "es": "Una escultura pesada que se queda en su sitio",
      "pt": "Uma escultura pesada que segura o seu lugar",
      "fr": "Une sculpture lourde qui tient sa place",
      "de": "Eine gewichtige Skulptur, die ihren Platz behauptet",
      "th": "ประติมากรรมหนักแน่นที่ยึดที่ของตัวเอง"
     },
     "tags": [
      "statue",
      "metal",
      "tough",
      "decor",
      "ceramic"
     ]
    },
    {
     "text": {
      "ko": "손에 쥐고 만지작거리는 물건",
      "en": "Something to hold and fiddle with",
      "zh": "握在手里把玩的小物",
      "ja": "手に持っていじる小物",
      "es": "Algo para tener en la mano y toquetear",
      "pt": "Algo para segurar e ficar mexendo",
      "fr": "Un objet à tenir et à tripoter",
      "de": "Etwas zum Halten und Herumspielen",
      "th": "ของที่ถือแล้วเล่นได้"
     },
     "tags": [
      "toy",
      "tiny",
      "useful",
      "game",
      "sound"
     ]
    }
   ]
  },
  {
   "id": "c_stress",
   "text": {
    "ko": "스트레스 받는 날, 손이 먼저 가는 것은?",
    "en": "On a stressful day, what do your hands reach for first?",
    "zh": "压力大的日子，你的手最先伸向什么？",
    "ja": "ストレスの多い日、まず手が伸びるのは？",
    "es": "En un día de estrés, ¿qué buscan primero tus manos?",
    "pt": "Num dia estressante, no que suas mãos pegam primeiro?",
    "fr": "Un jour de stress, vers quoi vos mains vont-elles en premier ?",
    "de": "Wonach greifen Ihre Hände an einem stressigen Tag zuerst?",
    "th": "วันที่เครียด มือคุณจะคว้าอะไรก่อน?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "꽉 쥐면 말랑한 것",
      "en": "Something squishy to squeeze",
      "zh": "一捏就软的东西",
      "ja": "握るとやわらかいもの",
      "es": "Algo blandito que apretar",
      "pt": "Algo molinho para apertar",
      "fr": "Un truc mou à presser",
      "de": "Etwas Quetschiges zum Drücken",
      "th": "ของนิ่ม ๆ ที่บีบได้"
     },
     "tags": [
      "toy",
      "plush",
      "cute",
      "organ"
     ]
    },
    {
     "text": {
      "ko": "딸깍 소리가 나는 것",
      "en": "Something that clicks",
      "zh": "会发出咔哒声的东西",
      "ja": "カチッと音がするもの",
      "es": "Algo que haga clic",
      "pt": "Algo que faça clique",
      "fr": "Un truc qui fait clic",
      "de": "Etwas, das klickt",
      "th": "ของที่กดแล้วดัง คลิก"
     },
     "tags": [
      "sound",
      "toy",
      "tiny",
      "useful",
      "game"
     ]
    },
    {
     "text": {
      "ko": "멍하니 바라볼 수 있는 것",
      "en": "Something I can stare at blankly",
      "zh": "可以发呆盯着看的东西",
      "ja": "ぼんやり眺めていられるもの",
      "es": "Algo que pueda mirar sin pensar",
      "pt": "Algo para ficar olhando sem pensar em nada",
      "fr": "Un truc que je peux fixer sans penser à rien",
      "de": "Etwas, das ich gedankenverloren anstarren kann",
      "th": "ของที่ใช้จ้องเหม่อได้"
     },
     "tags": [
      "zen",
      "illusion",
      "bird",
      "magic",
      "decor"
     ]
    }
   ]
  },
  {
   "id": "c_human",
   "text": {
    "ko": "사람 모양 피규어 중에서는 어느 쪽에 마음이 갑니까?",
    "en": "Among person-shaped figures, which one draws you?",
    "zh": "在人形摆件里，你更喜欢哪种？",
    "ja": "人型のフィギュアなら、どれに惹かれますか？",
    "es": "Entre las figuras con forma humana, ¿cuál te atrae?",
    "pt": "Entre as figuras em forma de gente, qual te atrai?",
    "fr": "Parmi les figurines en forme de personne, laquelle vous attire ?",
    "de": "Welche menschenförmige Figur zieht Sie an?",
    "th": "ในบรรดาฟิกเกอร์รูปคน แบบไหนดึงดูดคุณ?"
   },
   "stage": 3,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "자기 일에 진심인 직업인",
      "en": "Someone dead serious about their job",
      "zh": "对自己工作一本正经的职业人",
      "ja": "仕事に本気の職業人",
      "es": "Un profesional que se toma muy en serio su oficio",
      "pt": "Alguém levando o trabalho a sério demais",
      "fr": "Quelqu'un de très sérieux dans son travail",
      "de": "Jemand, der seinen Job todernst nimmt",
      "th": "คนที่จริงจังกับงานสุด ๆ"
     },
     "tags": [
      "job",
      "tough",
      "human",
      "statue"
     ]
    },
    {
     "text": {
      "ko": "옛 서양 분위기의 신사나 광대",
      "en": "A gentleman or clown from old Europe",
      "zh": "旧时欧洲风的绅士或小丑",
      "ja": "昔の西洋風の紳士やピエロ",
      "es": "Un caballero o payaso de la vieja Europa",
      "pt": "Um cavalheiro ou palhaço da velha Europa",
      "fr": "Un gentleman ou un clown de la vieille Europe",
      "de": "Ein Gentleman oder Clown aus dem alten Europa",
      "th": "สุภาพบุรุษหรือตัวตลกจากยุโรปสมัยเก่า"
     },
     "tags": [
      "west",
      "costume",
      "human",
      "doll",
      "ceramic"
     ]
    },
    {
     "text": {
      "ko": "조용히 앉아 있는 사색가나 부처",
      "en": "A quiet thinker or Buddha",
      "zh": "安静坐着的思想者或佛像",
      "ja": "静かに座る考える人や仏像",
      "es": "Un pensador o Buda sentado en silencio",
      "pt": "Um pensador quieto ou um Buda",
      "fr": "Un penseur tranquille ou un Bouddha",
      "de": "Ein stiller Denker oder ein Buddha",
      "th": "นักคิดสงบ ๆ หรือพระพุทธรูป"
     },
     "tags": [
      "zen",
      "east",
      "god",
      "human",
      "statue"
     ]
    }
   ]
  },
  {
   "id": "c_creepy",
   "text": {
    "ko": "징그러운 것 중에서 그나마 괜찮은 쪽은 어디입니까?",
    "en": "Of the creepy things, which is the least bad?",
    "zh": "在恶心的东西里，哪种还算能接受？",
    "ja": "気味の悪いものの中で、まだマシなのはどれですか？",
    "es": "De lo repulsivo, ¿qué es lo menos malo?",
    "pt": "Entre as coisas arrepiantes, qual é a menos pior?",
    "fr": "Parmi les choses sinistres, laquelle est la moins pire ?",
    "de": "Welches Gruselding ist das kleinste Übel?",
    "th": "ในบรรดาของขนลุก อะไรที่แย่น้อยที่สุด?"
   },
   "stage": 3,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "손가락이나 뇌 같은 몸의 일부",
      "en": "Body parts like fingers or a brain",
      "zh": "手指或大脑之类的身体部位",
      "ja": "指や脳みそのような体の一部",
      "es": "Partes del cuerpo como dedos o un cerebro",
      "pt": "Partes do corpo, como dedos ou um cérebro",
      "fr": "Des parties du corps, comme des doigts ou un cerveau",
      "de": "Körperteile wie Finger oder ein Gehirn",
      "th": "อวัยวะ เช่น นิ้วหรือสมอง"
     },
     "tags": [
      "anatomy",
      "organ",
      "eyes",
      "scary"
     ]
    },
    {
     "text": {
      "ko": "심해나 촉수 같은 바다 괴물",
      "en": "Sea monsters, deep-sea or tentacled",
      "zh": "深海或触手之类的海怪",
      "ja": "深海や触手のような海の怪物",
      "es": "Monstruos marinos de las profundidades o con tentáculos",
      "pt": "Monstros marinhos, das profundezas ou de tentáculos",
      "fr": "Des monstres marins, des abysses ou à tentacules",
      "de": "Meeresungeheuer, aus der Tiefsee oder mit Tentakeln",
      "th": "สัตว์ประหลาดทะเล จากใต้ทะเลลึกหรือมีหนวด"
     },
     "tags": [
      "alien",
      "scary",
      "animal",
      "living"
     ]
    },
    {
     "text": {
      "ko": "해골이나 박쥐 같은 어둠의 것",
      "en": "Dark things like skulls or bats",
      "zh": "骷髅或蝙蝠之类的暗黑之物",
      "ja": "ドクロやコウモリのような闇のもの",
      "es": "Cosas oscuras como calaveras o murciélagos",
      "pt": "Coisas sombrias, como caveiras ou morcegos",
      "fr": "Des choses sombres comme des crânes ou des chauves-souris",
      "de": "Düsteres wie Totenköpfe oder Fledermäuse",
      "th": "ของมืด ๆ อย่างหัวกะโหลกหรือค้างคาว"
     },
     "tags": [
      "skeleton",
      "scary",
      "season",
      "animal"
     ]
    }
   ]
  },
  {
   "id": "metal",
   "text": {
    "ko": "묵직한 금속이나 돌의 무게를 손으로 확인하는 순간이 좋습니까?",
    "en": "Do you enjoy the moment of feeling the weight of heavy metal or stone in your hand?",
    "zh": "你喜欢掂量沉甸甸的金属或石头的那一刻吗？",
    "ja": "ずしりと重い金属や石を手で確かめる瞬間が好きですか？",
    "es": "¿Disfrutas notar en la mano el peso de un metal o una piedra?",
    "pt": "Você curte o momento de sentir o peso de um metal ou de uma pedra na mão?",
    "fr": "Aimez-vous ce moment où l'on sent le poids d'un métal ou d'une pierre lourde dans la main ?",
    "de": "Genießen Sie den Moment, das Gewicht von schwerem Metall oder Stein in der Hand zu spüren?",
    "th": "คุณชอบช่วงเวลาที่ได้รู้สึกถึงน้ำหนักของโลหะหรือหินหนัก ๆ ในมือไหม?"
   },
   "yes": [
    "metal",
    "tough",
    "statue"
   ],
   "no": [],
   "stage": 3
  },
  {
   "id": "loop",
   "text": {
    "ko": "같은 동작을 반복하는 물건을 멍하니 바라본 적이 있습니까?",
    "en": "Have you ever stared blankly at something repeating the same motion?",
    "zh": "你有没有对着一个重复同样动作的东西发过呆？",
    "ja": "同じ動きを繰り返すものを、ぼんやり眺めたことがありますか？",
    "es": "¿Alguna vez te has quedado mirando algo que repite el mismo movimiento?",
    "pt": "Você já ficou olhando, sem pensar em nada, para algo repetindo o mesmo movimento?",
    "fr": "Avez-vous déjà fixé dans le vide quelque chose qui répète le même mouvement ?",
    "de": "Haben Sie schon mal gedankenverloren etwas angestarrt, das immer dieselbe Bewegung wiederholt?",
    "th": "เคยจ้องของที่เคลื่อนไหวซ้ำ ๆ แบบเดิมเหม่อลอยไหม?"
   },
   "yes": [
    "bird",
    "magic",
    "illusion",
    "spin",
    "toy"
   ],
   "no": [],
   "stage": 3
  },
  {
   "id": "westdeco",
   "text": {
    "ko": "옛 유럽 영화 속 소품 같은 장식에 마음이 갑니까?",
    "en": "Are you drawn to decorations that look like props from old European films?",
    "zh": "你会被像老欧洲电影道具一样的装饰吸引吗？",
    "ja": "昔のヨーロッパ映画の小道具のような飾りに惹かれますか？",
    "es": "¿Te atraen los adornos que parecen utilería de una película europea antigua?",
    "pt": "Você se atrai por enfeites que parecem objetos de cena de filmes europeus antigos?",
    "fr": "Êtes-vous attiré(e) par les décorations qui ressemblent à des accessoires de vieux films européens ?",
    "de": "Ziehen Sie Deko an, die aussieht wie Requisiten aus alten europäischen Filmen?",
    "th": "คุณหลงของตกแต่งที่ดูเหมือนพร็อพจากหนังยุโรปเก่า ๆ ไหม?"
   },
   "yes": [
    "west",
    "costume",
    "doll",
    "statue",
    "human"
   ],
   "no": [],
   "stage": 3
  },
  {
   "id": "creepyfun",
   "text": {
    "ko": "무섭거나 징그러운데 이상하게 웃긴 것을 보면 오히려 반갑습니까?",
    "en": "Does something creepy yet oddly funny make you more glad than grossed out?",
    "zh": "看到又恶心又好笑的东西，你反而觉得高兴吗？",
    "ja": "不気味なのになぜか笑えるものを見ると、むしろうれしくなりますか？",
    "es": "¿Algo repulsivo pero curiosamente gracioso te alegra más que te asquea?",
    "pt": "Algo arrepiante, mas estranhamente engraçado, te deixa mais feliz do que enojado(a)?",
    "fr": "Un truc glauque mais bizarrement drôle vous réjouit-il plus qu'il ne vous dégoûte ?",
    "de": "Freut Sie etwas Gruseliges, aber seltsam Komisches mehr, als es Sie anekelt?",
    "th": "ของขนลุกแต่ตลกแปลก ๆ ทำให้คุณดีใจมากกว่าขยะแขยงไหม?"
   },
   "yes": [
    "scary",
    "anatomy",
    "funny_face",
    "alien"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "homebody",
   "text": {
    "ko": "쉬는 날에는 밖에 나가기보다, 집에서 혼자 만지작거리며 노는 쪽입니까?",
    "en": "On a day off, do you stay home and fiddle with things alone rather than go out?",
    "zh": "休息日，你更愿意待在家里自己摆弄东西，而不是出门吗？",
    "ja": "休みの日は、外に出るより、家で一人でいじって過ごすほうですか？",
    "es": "En un día libre, ¿prefieres quedarte en casa trasteando a solas antes que salir?",
    "pt": "Num dia de folga, você prefere ficar em casa mexendo em coisas sozinho(a) a sair?",
    "fr": "Un jour de congé, restez-vous chez vous à bricoler seul(e) plutôt que de sortir ?",
    "de": "Bleiben Sie an einem freien Tag lieber zu Hause und tüfteln allein an Dingen, statt auszugehen?",
    "th": "วันหยุด คุณอยู่บ้านนั่งเล่นของคนเดียวมากกว่าออกไปข้างนอกใช่ไหม?"
   },
   "yes": [
    "toy",
    "puzzle",
    "craft"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "firstsight",
   "text": {
    "ko": "물건을 고를 때, 후기나 평점보다 첫눈에 반하는 느낌을 더 믿습니까?",
    "en": "When choosing things, do you trust love at first sight over reviews and ratings?",
    "zh": "挑选东西时，比起评价和评分，你更相信一见钟情的感觉吗？",
    "ja": "物を選ぶとき、レビューや評価より、ひと目惚れの感覚を信じますか？",
    "es": "Al elegir cosas, ¿confías más en el flechazo que en las reseñas y las puntuaciones?",
    "pt": "Na hora de escolher, você confia mais no amor à primeira vista do que em avaliações e notas?",
    "fr": "Quand vous choisissez, faites-vous plus confiance au coup de foudre qu'aux avis et aux notes ?",
    "de": "Vertrauen Sie bei der Auswahl mehr auf Liebe auf den ersten Blick als auf Rezensionen und Bewertungen?",
    "th": "เวลาเลือกของ คุณเชื่อรักแรกพบมากกว่ารีวิวและคะแนนใช่ไหม?"
   },
   "yes": [
    "decor",
    "magic",
    "doll"
   ],
   "no": [],
   "stage": 2
  },
  {
   "id": "c_morning",
   "text": {
    "ko": "아침에 눈을 뜨자마자 가장 먼저 하는 일은 무엇입니까?",
    "en": "What is the first thing you do when you wake up?",
    "zh": "早上一睁眼，你最先做什么？",
    "ja": "朝、目が覚めて最初にすることは何ですか？",
    "es": "¿Qué es lo primero que haces al despertar?",
    "pt": "Qual é a primeira coisa que você faz ao acordar?",
    "fr": "Quelle est la première chose que vous faites en vous réveillant ?",
    "de": "Was tun Sie als Erstes, wenn Sie aufwachen?",
    "th": "สิ่งแรกที่คุณทำเมื่อตื่นนอนคืออะไร?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "이불 속에서 멍하니 천장 바라보기",
      "en": "Stare blankly at the ceiling under the blanket",
      "zh": "躺在被窝里望着天花板发呆",
      "ja": "布団の中でぼんやり天井を眺める",
      "es": "Mirar el techo sin pensar bajo la manta",
      "pt": "Ficar olhando o teto, sem pensar, debaixo do cobertor",
      "fr": "Fixer le plafond sans penser à rien sous la couette",
      "de": "Unter der Decke gedankenlos die Zimmerdecke anstarren",
      "th": "นอนเหม่อมองเพดานอยู่ในผ้าห่ม"
     },
     "tags": [
      "zen",
      "frog",
      "cat"
     ]
    },
    {
     "text": {
      "ko": "바로 일어나 몸 움직이기",
      "en": "Get up right away and move around",
      "zh": "马上起床活动身体",
      "ja": "すぐ起きて体を動かす",
      "es": "Levantarme enseguida y moverme",
      "pt": "Levantar na hora e me mexer",
      "fr": "Me lever tout de suite et bouger",
      "de": "Sofort aufstehen und mich bewegen",
      "th": "ลุกขึ้นแล้วขยับตัวทันที"
     },
     "tags": [
      "outdoor",
      "game",
      "toy"
     ]
    },
    {
     "text": {
      "ko": "휴대폰으로 웃긴 것 찾아보기",
      "en": "Look up something funny on my phone",
      "zh": "用手机找点好笑的东西",
      "ja": "スマホで面白いものを探す",
      "es": "Buscar algo gracioso en el móvil",
      "pt": "Procurar algo engraçado no celular",
      "fr": "Chercher quelque chose de drôle sur mon téléphone",
      "de": "Auf dem Handy etwas Lustiges suchen",
      "th": "เปิดมือถือหาอะไรตลก ๆ ดู"
     },
     "tags": [
      "funny_face",
      "prank",
      "cartoon"
     ]
    }
   ]
  },
  {
   "id": "c_gifted",
   "text": {
    "ko": "생일에 어떤 선물이 도착하면 가장 설렙니까?",
    "en": "Which birthday gift would excite you most?",
    "zh": "收到哪种生日礼物最让你心动？",
    "ja": "誕生日にどんな贈り物が届くと一番わくわくしますか？",
    "es": "¿Qué regalo de cumpleaños te ilusionaría más?",
    "pt": "Que presente de aniversário mais te deixaria animado(a)?",
    "fr": "Quel cadeau d'anniversaire vous ferait le plus plaisir ?",
    "de": "Welches Geburtstagsgeschenk würde Sie am meisten freuen?",
    "th": "ของขวัญวันเกิดแบบไหนที่ทำให้คุณตื่นเต้นที่สุด?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "정체를 알 수 없는 작은 상자",
      "en": "A small box of unknown contents",
      "zh": "一个不知道里面是什么的小盒子",
      "ja": "中身のわからない小さな箱",
      "es": "Una cajita de contenido desconocido",
      "pt": "Uma caixinha de conteúdo desconhecido",
      "fr": "Une petite boîte au contenu inconnu",
      "de": "Eine kleine Schachtel mit unbekanntem Inhalt",
      "th": "กล่องเล็ก ๆ ที่ไม่รู้ว่าข้างในคืออะไร"
     },
     "tags": [
      "magic",
      "illusion",
      "alien"
     ]
    },
    {
     "text": {
      "ko": "뜯는 순간 웃음이 터지는 물건",
      "en": "Something that makes me burst out laughing when I open it",
      "zh": "拆开瞬间会笑出声的东西",
      "ja": "開けた瞬間に笑ってしまうもの",
      "es": "Algo que me hace estallar de risa al abrirlo",
      "pt": "Algo que me faz cair na gargalhada ao abrir",
      "fr": "Quelque chose qui me fait éclater de rire en l'ouvrant",
      "de": "Etwas, bei dem ich beim Auspacken laut loslachen muss",
      "th": "ของที่แกะแล้วหัวเราะลั่นทันที"
     },
     "tags": [
      "prank",
      "funny_face",
      "cartoon"
     ]
    },
    {
     "text": {
      "ko": "손에 쥐면 마음이 놓이는 물건",
      "en": "Something that puts my mind at ease when I hold it",
      "zh": "握在手里就能安心的东西",
      "ja": "手に持つと心が落ち着くもの",
      "es": "Algo que me da paz al sostenerlo",
      "pt": "Algo que me acalma quando seguro",
      "fr": "Quelque chose qui m'apaise quand je le tiens",
      "de": "Etwas, das mich beruhigt, wenn ich es in der Hand halte",
      "th": "ของที่ถือแล้วใจสงบ"
     },
     "tags": [
      "plush",
      "cute",
      "doll"
     ]
    }
   ]
  },
  {
   "id": "c_walk",
   "text": {
    "ko": "산책길에서 저절로 걸음이 멈추는 것은 무엇입니까?",
    "en": "On a walk, what makes your steps stop on their own?",
    "zh": "散步时，什么会让你不由自主停下脚步？",
    "ja": "散歩中、思わず足が止まるのは何ですか？",
    "es": "En un paseo, ¿qué hace que tus pasos se detengan solos?",
    "pt": "Numa caminhada, o que faz seus passos pararem sozinhos?",
    "fr": "En vous promenant, qu'est-ce qui arrête vos pas tout seuls ?",
    "de": "Was lässt Ihre Schritte beim Spazierengehen von selbst stoppen?",
    "th": "ระหว่างเดินเล่น อะไรที่ทำให้เท้าคุณหยุดเองโดยไม่รู้ตัว?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "길고양이나 새",
      "en": "A stray cat or a bird",
      "zh": "流浪猫或小鸟",
      "ja": "野良猫や鳥",
      "es": "Un gato callejero o un pájaro",
      "pt": "Um gato de rua ou um passarinho",
      "fr": "Un chat errant ou un oiseau",
      "de": "Eine Streunerkatze oder ein Vogel",
      "th": "แมวจรหรือนก"
     },
     "tags": [
      "cat",
      "bird",
      "animal"
     ]
    },
    {
     "text": {
      "ko": "오래된 간판이나 낡은 건물",
      "en": "An old signboard or a worn-out building",
      "zh": "老招牌或破旧的建筑",
      "ja": "古い看板や古びた建物",
      "es": "Un cartel viejo o un edificio desgastado",
      "pt": "Uma placa velha ou um prédio desgastado",
      "fr": "Une vieille enseigne ou un bâtiment usé",
      "de": "Ein altes Schild oder ein verwittertes Gebäude",
      "th": "ป้ายเก่าหรืออาคารทรุดโทรม"
     },
     "tags": [
      "west",
      "east",
      "statue"
     ]
    },
    {
     "text": {
      "ko": "이상하게 생긴 낙서나 조형물",
      "en": "An oddly shaped graffiti or sculpture",
      "zh": "长得奇怪的涂鸦或造型",
      "ja": "変な形の落書きやオブジェ",
      "es": "Un grafiti o una escultura de forma rara",
      "pt": "Um grafite ou uma escultura de formato estranho",
      "fr": "Un graffiti ou une sculpture de forme étrange",
      "de": "Ein seltsam geformtes Graffiti oder eine Skulptur",
      "th": "กราฟฟิตี้หรือประติมากรรมรูปทรงประหลาด"
     },
     "tags": [
      "funny_face",
      "statue",
      "art"
     ]
    }
   ]
  },
  {
   "id": "c_music",
   "text": {
    "ko": "작업할 때 곁에 두고 싶은 소리는 무엇입니까?",
    "en": "Which sound would you like beside you while you work?",
    "zh": "工作时你想让哪种声音陪在身边？",
    "ja": "作業中にそばに置きたい音は何ですか？",
    "es": "¿Qué sonido te gustaría tener cerca mientras trabajas?",
    "pt": "Que som você gostaria de ter por perto enquanto trabalha?",
    "fr": "Quel son aimeriez-vous avoir près de vous quand vous travaillez ?",
    "de": "Welches Geräusch hätten Sie bei der Arbeit gern in der Nähe?",
    "th": "เสียงแบบไหนที่คุณอยากให้อยู่ข้างตัวตอนทำงาน?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "딸깍, 달그락 같은 작은 소리",
      "en": "Small clicks and clatters",
      "zh": "咔嗒、叮当之类的小声音",
      "ja": "カチッ、カタカタという小さな音",
      "es": "Pequeños clics y traqueteos",
      "pt": "Pequenos cliques e barulhinhos",
      "fr": "De petits clics et cliquetis",
      "de": "Kleine Klicks und Klappergeräusche",
      "th": "เสียงแก๊กแก๊กกริ๊งกริ๊งเบา ๆ"
     },
     "tags": [
      "sound",
      "guitar"
     ]
    },
    {
     "text": {
      "ko": "빗소리나 개구리 소리",
      "en": "Rain or frogs croaking",
      "zh": "雨声或蛙鸣",
      "ja": "雨の音やカエルの声",
      "es": "Lluvia o ranas croando",
      "pt": "Chuva ou sapos coaxando",
      "fr": "La pluie ou des grenouilles qui coassent",
      "de": "Regen oder quakende Frösche",
      "th": "เสียงฝนหรือเสียงกบร้อง"
     },
     "tags": [
      "zen",
      "frog"
     ]
    },
    {
     "text": {
      "ko": "아무 소리 없는 완전한 고요",
      "en": "Total, complete silence",
      "zh": "完全没有声音的寂静",
      "ja": "まったくの静けさ",
      "es": "Silencio absoluto",
      "pt": "Silêncio total",
      "fr": "Un silence total",
      "de": "Völlige Stille",
      "th": "ความเงียบสนิท"
     },
     "tags": [
      "statue",
      "god"
     ]
    }
   ]
  },
  {
   "id": "c_texture",
   "text": {
    "ko": "손에 쥐고 싶은 촉감은 무엇입니까?",
    "en": "Which feel do you want in your hand?",
    "zh": "你想握在手里的触感是什么？",
    "ja": "手に握りたい感触はどれですか？",
    "es": "¿Qué tacto quieres tener en la mano?",
    "pt": "Que textura você quer na mão?",
    "fr": "Quelle sensation voulez-vous dans la main ?",
    "de": "Welche Haptik möchten Sie in der Hand haben?",
    "th": "สัมผัสแบบไหนที่คุณอยากถือไว้ในมือ?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "말랑말랑 폭신한 것",
      "en": "Squishy and fluffy",
      "zh": "软软糯糯、蓬松的",
      "ja": "ふわふわ、むにむにしたもの",
      "es": "Blandito y esponjoso",
      "pt": "Macia e fofinha",
      "fr": "Doux et moelleux",
      "de": "Weich und flauschig",
      "th": "นุ่มนิ่มฟูฟ่อง"
     },
     "tags": [
      "plush",
      "cute"
     ]
    },
    {
     "text": {
      "ko": "차갑고 묵직한 금속이나 돌",
      "en": "Cold, heavy metal or stone",
      "zh": "冰凉厚重的金属或石头",
      "ja": "冷たくて重い金属や石",
      "es": "Metal o piedra fríos y pesados",
      "pt": "Metal ou pedra fria e pesada",
      "fr": "Métal ou pierre froids et lourds",
      "de": "Kaltes, schweres Metall oder Stein",
      "th": "โลหะหรือหินเย็น ๆ หนัก ๆ"
     },
     "tags": [
      "metal",
      "tough",
      "statue"
     ]
    },
    {
     "text": {
      "ko": "매끈하고 단단한 도자기 같은 것",
      "en": "Smooth, hard ceramic",
      "zh": "光滑结实的陶瓷",
      "ja": "つるりと硬い陶器のようなもの",
      "es": "Cerámica lisa y dura",
      "pt": "Cerâmica lisa e dura",
      "fr": "Céramique lisse et dure",
      "de": "Glatte, harte Keramik",
      "th": "เซรามิกเรียบลื่นแข็งแรง"
     },
     "tags": [
      "ceramic",
      "craft",
      "mold"
     ]
    }
   ]
  },
  {
   "id": "c_trip",
   "text": {
    "ko": "여행지에서 꼭 사 오는 기념품은 무엇입니까?",
    "en": "What souvenir do you always bring back from a trip?",
    "zh": "旅行时你一定会带回的纪念品是？",
    "ja": "旅行で必ず買って帰るお土産は何ですか？",
    "es": "¿Qué recuerdo traes siempre de un viaje?",
    "pt": "Que lembrancinha você sempre traz de viagem?",
    "fr": "Quel souvenir rapportez-vous toujours de voyage ?",
    "de": "Welches Souvenir bringen Sie von einer Reise immer mit?",
    "th": "ของที่ระลึกอะไรที่คุณต้องซื้อกลับมาทุกครั้งที่ไปเที่ยว?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "그 나라에서만 파는 이상한 인형",
      "en": "A strange doll sold only in that country",
      "zh": "只有当地才卖的奇怪娃娃",
      "ja": "その国でしか売っていない変な人形",
      "es": "Una muñeca rara que solo se vende en ese país",
      "pt": "Uma boneca estranha que só se vende naquele país",
      "fr": "Une poupée bizarre vendue seulement dans ce pays",
      "de": "Eine seltsame Puppe, die es nur in diesem Land gibt",
      "th": "ตุ๊กตาแปลก ๆ ที่ขายเฉพาะประเทศนั้น"
     },
     "tags": [
      "doll",
      "west",
      "east"
     ]
    },
    {
     "text": {
      "ko": "냉장고에 붙이는 작은 자석이나 열쇠고리",
      "en": "A small magnet or keychain for the fridge",
      "zh": "贴在冰箱上的小磁铁或钥匙扣",
      "ja": "冷蔵庫に貼る小さなマグネットやキーホルダー",
      "es": "Un imán o llavero pequeño para la nevera",
      "pt": "Um ímã ou chaveiro pequeno para a geladeira",
      "fr": "Un petit aimant ou porte-clés pour le frigo",
      "de": "Einen kleinen Magneten oder Schlüsselanhänger für den Kühlschrank",
      "th": "แม่เหล็กหรือพวงกุญแจเล็ก ๆ ติดตู้เย็น"
     },
     "tags": [
      "tiny",
      "cute"
     ]
    },
    {
     "text": {
      "ko": "어느 나라 것인지 모를 전통 공예품",
      "en": "A traditional craft of unknown origin",
      "zh": "不知来自哪国的传统手工艺品",
      "ja": "どこの国のものか分からない伝統工芸品",
      "es": "Una artesanía tradicional de origen desconocido",
      "pt": "Um artesanato tradicional de origem desconhecida",
      "fr": "Un artisanat traditionnel d'origine inconnue",
      "de": "Ein traditionelles Kunsthandwerk unbekannter Herkunft",
      "th": "งานฝีมือดั้งเดิมที่ไม่รู้ว่ามาจากประเทศไหน"
     },
     "tags": [
      "craft",
      "east",
      "statue"
     ]
    }
   ]
  },
  {
   "id": "c_movie",
   "text": {
    "ko": "영화에서 오래 기억에 남는 장면은 어느 쪽입니까?",
    "en": "Which movie scene stays with you the longest?",
    "zh": "电影里哪种画面会让你记很久？",
    "ja": "映画で長く記憶に残る場面はどれですか？",
    "es": "¿Qué escena de película se te queda más tiempo en la memoria?",
    "pt": "Que cena de filme fica mais tempo na sua memória?",
    "fr": "Quelle scène de film reste le plus longtemps dans votre mémoire ?",
    "de": "Welche Filmszene bleibt Ihnen am längsten im Gedächtnis?",
    "th": "ฉากไหนในหนังที่คุณจำได้นานที่สุด?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "누군가 크게 웃음이 터지는 장면",
      "en": "Someone bursting into laughter",
      "zh": "有人爆笑出声的场面",
      "ja": "誰かが大笑いする場面",
      "es": "Alguien estallando en carcajadas",
      "pt": "Alguém caindo na gargalhada",
      "fr": "Quelqu'un qui éclate de rire",
      "de": "Jemand, der in lautes Lachen ausbricht",
      "th": "ฉากที่ใครสักคนหัวเราะลั่น"
     },
     "tags": [
      "prank",
      "funny_face",
      "human"
     ]
    },
    {
     "text": {
      "ko": "아무 말 없이 오래 비추는 풍경",
      "en": "A landscape lingering without a word",
      "zh": "一言不发、长长停留的风景",
      "ja": "何も言わずに長く映る風景",
      "es": "Un paisaje que se detiene sin palabras",
      "pt": "Uma paisagem que se demora sem uma palavra",
      "fr": "Un paysage qui s'attarde sans un mot",
      "de": "Eine Landschaft, die lange wortlos im Bild bleibt",
      "th": "ฉากทิวทัศน์ที่ค้างอยู่นานโดยไม่มีคำพูด"
     },
     "tags": [
      "zen",
      "east",
      "wall"
     ]
    },
    {
     "text": {
      "ko": "괴물이 처음 모습을 드러내는 순간",
      "en": "The moment the monster first appears",
      "zh": "怪物第一次现身的瞬间",
      "ja": "怪物が初めて姿を現す瞬間",
      "es": "El momento en que aparece el monstruo",
      "pt": "O momento em que o monstro aparece pela primeira vez",
      "fr": "Le moment où le monstre apparaît pour la première fois",
      "de": "Der Moment, in dem das Monster zum ersten Mal auftaucht",
      "th": "ช่วงที่สัตว์ประหลาดปรากฏตัวครั้งแรก"
     },
     "tags": [
      "scary",
      "alien",
      "skeleton"
     ]
    }
   ]
  },
  {
   "id": "c_clothes",
   "text": {
    "ko": "옷장에서 가장 눈에 띄는 한 벌은 무엇입니까?",
    "en": "Which outfit stands out most in your closet?",
    "zh": "衣柜里最显眼的一件是什么？",
    "ja": "クローゼットで一番目立つ一着は何ですか？",
    "es": "¿Qué prenda destaca más en tu armario?",
    "pt": "Qual peça mais se destaca no seu guarda-roupa?",
    "fr": "Quelle tenue se remarque le plus dans votre placard ?",
    "de": "Welches Kleidungsstück fällt in Ihrem Schrank am meisten auf?",
    "th": "ชุดไหนในตู้เสื้อผ้าที่เด่นที่สุด?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "그림이나 글씨가 큼직한 티셔츠",
      "en": "A tee with a big picture or lettering",
      "zh": "印着大图案或文字的T恤",
      "ja": "大きな絵や文字入りのTシャツ",
      "es": "Una camiseta con un dibujo o letras grandes",
      "pt": "Uma camiseta com um desenho ou letras grandes",
      "fr": "Un tee-shirt avec un grand dessin ou des lettres",
      "de": "Ein T-Shirt mit großem Bild oder Schriftzug",
      "th": "เสื้อยืดลายใหญ่หรือตัวหนังสือใหญ่"
     },
     "tags": [
      "cartoon",
      "wearable"
     ]
    },
    {
     "text": {
      "ko": "눈에 띄는 모자나 액세서리",
      "en": "A striking hat or accessory",
      "zh": "显眼的帽子或配饰",
      "ja": "目立つ帽子やアクセサリー",
      "es": "Un sombrero o accesorio llamativo",
      "pt": "Um chapéu ou acessório chamativo",
      "fr": "Un chapeau ou accessoire voyant",
      "de": "Ein auffälliger Hut oder Accessoire",
      "th": "หมวกหรือเครื่องประดับสะดุดตา"
     },
     "tags": [
      "headwear",
      "costume",
      "wearable"
     ]
    },
    {
     "text": {
      "ko": "무난하지만 질 좋은 옷",
      "en": "Something plain but well made",
      "zh": "朴素但质量好的衣服",
      "ja": "地味だけど質のいい服",
      "es": "Algo sencillo pero de buena calidad",
      "pt": "Algo simples, mas de boa qualidade",
      "fr": "Quelque chose de simple mais de bonne qualité",
      "de": "Etwas Schlichtes, aber Hochwertiges",
      "th": "ชุดธรรมดาแต่คุณภาพดี"
     },
     "tags": [
      "useful",
      "tough"
     ]
    }
   ]
  },
  {
   "id": "c_energy",
   "text": {
    "ko": "기운이 바닥났을 때 충전하는 방법은 무엇입니까?",
    "en": "How do you recharge when you're out of energy?",
    "zh": "精力耗尽时，你怎么充电？",
    "ja": "元気がなくなったとき、どう充電しますか？",
    "es": "¿Cómo recargas cuando se te acaba la energía?",
    "pt": "Como você recarrega quando a energia acaba?",
    "fr": "Comment vous rechargez-vous quand vous n'avez plus d'énergie ?",
    "de": "Wie laden Sie sich auf, wenn die Energie leer ist?",
    "th": "เวลาพลังหมด คุณชาร์จตัวเองด้วยวิธีไหน?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "작은 동물 영상 보기",
      "en": "Watching small animal videos",
      "zh": "看小动物视频",
      "ja": "小動物の動画を見る",
      "es": "Viendo vídeos de animalitos",
      "pt": "Assistindo a vídeos de bichinhos",
      "fr": "En regardant des vidéos de petits animaux",
      "de": "Kleine Tiervideos anschauen",
      "th": "ดูคลิปสัตว์ตัวเล็ก"
     },
     "tags": [
      "animal",
      "cat",
      "dog",
      "cute"
     ]
    },
    {
     "text": {
      "ko": "손으로 뭔가 만지작거리기",
      "en": "Fiddling with something in my hands",
      "zh": "用手摆弄点什么",
      "ja": "手で何かをいじる",
      "es": "Trasteando con algo en las manos",
      "pt": "Mexendo em alguma coisa com as mãos",
      "fr": "En tripotant quelque chose entre mes mains",
      "de": "Mit etwas in den Händen herumspielen",
      "th": "เล่นอะไรสักอย่างด้วยมือ"
     },
     "tags": [
      "puzzle",
      "spin",
      "toy",
      "game"
     ]
    },
    {
     "text": {
      "ko": "아무것도 안 하고 누워 있기",
      "en": "Lying down and doing nothing",
      "zh": "什么也不做，躺着",
      "ja": "何もせず横になる",
      "es": "Tumbado sin hacer nada",
      "pt": "Deitando sem fazer nada",
      "fr": "En restant allongé(e) sans rien faire",
      "de": "Hinlegen und nichts tun",
      "th": "นอนเฉย ๆ ไม่ทำอะไร"
     },
     "tags": [
      "zen",
      "frog",
      "plush"
     ]
    }
   ]
  },
  {
   "id": "c_door",
   "text": {
    "ko": "현관문을 열면 맞이해줬으면 하는 것은 무엇입니까?",
    "en": "What would you like to greet you when you open the front door?",
    "zh": "打开家门，你希望迎接你的是什么？",
    "ja": "玄関を開けたとき、迎えてほしいものは何ですか？",
    "es": "¿Qué te gustaría que te recibiera al abrir la puerta de casa?",
    "pt": "O que você gostaria que te recebesse ao abrir a porta de casa?",
    "fr": "Qu'aimeriez-vous qui vous accueille quand vous ouvrez la porte d'entrée ?",
    "de": "Was würden Sie sich wünschen, das Sie beim Öffnen der Haustür begrüßt?",
    "th": "พอเปิดประตูบ้าน คุณอยากให้อะไรมาต้อนรับ?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "문 앞을 지키는 든든한 조각상",
      "en": "A sturdy statue guarding the entrance",
      "zh": "守在门口的可靠雕像",
      "ja": "玄関を守る頼もしい像",
      "es": "Una estatua firme que guarde la entrada",
      "pt": "Uma estátua firme guardando a entrada",
      "fr": "Une statue solide qui garde l'entrée",
      "de": "Eine standhafte Statue, die den Eingang bewacht",
      "th": "รูปปั้นแข็งแรงที่เฝ้าหน้าประตู"
     },
     "tags": [
      "statue",
      "god",
      "tough"
     ]
    },
    {
     "text": {
      "ko": "반겨주는 작은 인형이나 동물",
      "en": "A small doll or animal welcoming me",
      "zh": "迎接我的小娃娃或小动物",
      "ja": "出迎えてくれる小さな人形や動物",
      "es": "Una muñeca o animalito que me dé la bienvenida",
      "pt": "Uma boneca ou bichinho me dando boas-vindas",
      "fr": "Une petite poupée ou un animal qui m'accueille",
      "de": "Eine kleine Puppe oder ein Tier, das mich willkommen heißt",
      "th": "ตุ๊กตาหรือสัตว์ตัวเล็กที่มาต้อนรับ"
     },
     "tags": [
      "plush",
      "animal",
      "cute"
     ]
    },
    {
     "text": {
      "ko": "놀라서 웃게 되는 작은 장난",
      "en": "A little prank that surprises me into laughing",
      "zh": "让人吓一跳又笑出来的小恶作剧",
      "ja": "驚いて笑ってしまう小さないたずら",
      "es": "Una pequeña broma que me sorprenda y me haga reír",
      "pt": "Uma pequena pegadinha que me faz rir de susto",
      "fr": "Une petite farce qui me fait rire de surprise",
      "de": "Ein kleiner Streich, der mich überrascht zum Lachen bringt",
      "th": "การแกล้งเล็ก ๆ ที่ทำให้ตกใจแล้วหัวเราะ"
     },
     "tags": [
      "prank",
      "funny_face"
     ]
    }
   ]
  },
  {
   "id": "c_wall",
   "text": {
    "ko": "빈 벽 하나가 생겼다면 무엇을 걸겠습니까?",
    "en": "If you had one blank wall, what would you hang on it?",
    "zh": "如果多出一面空墙，你会挂什么？",
    "ja": "何もない壁が一面できたら、何を飾りますか？",
    "es": "Si tuvieras una pared vacía, ¿qué colgarías?",
    "pt": "Se você tivesse uma parede vazia, o que penduraria?",
    "fr": "Si vous aviez un mur vide, que feriez-vous y accrocher ?",
    "de": "Wenn Sie eine leere Wand hätten, was würden Sie aufhängen?",
    "th": "ถ้ามีผนังว่างหนึ่งด้าน คุณจะแขวนอะไร?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "그림이나 포스터",
      "en": "A picture or poster",
      "zh": "画或海报",
      "ja": "絵やポスター",
      "es": "Un cuadro o póster",
      "pt": "Um quadro ou pôster",
      "fr": "Un tableau ou une affiche",
      "de": "Ein Bild oder Poster",
      "th": "รูปภาพหรือโปสเตอร์"
     },
     "tags": [
      "wall",
      "art"
     ]
    },
    {
     "text": {
      "ko": "벽걸이 달력이나 시계",
      "en": "A wall calendar or a clock",
      "zh": "挂历或时钟",
      "ja": "壁掛けカレンダーや時計",
      "es": "Un calendario de pared o un reloj",
      "pt": "Um calendário de parede ou um relógio",
      "fr": "Un calendrier mural ou une horloge",
      "de": "Einen Wandkalender oder eine Uhr",
      "th": "ปฏิทินแขวนผนังหรือนาฬิกา"
     },
     "tags": [
      "calendar",
      "season"
     ]
    },
    {
     "text": {
      "ko": "삐뚤게 붙인 이상한 얼굴",
      "en": "A strange face stuck on crooked",
      "zh": "歪歪贴上去的奇怪脸孔",
      "ja": "斜めに貼った変な顔",
      "es": "Una cara rara pegada torcida",
      "pt": "Um rosto esquisito colado torto",
      "fr": "Une drôle de tête collée de travers",
      "de": "Ein seltsames Gesicht, schief aufgeklebt",
      "th": "ใบหน้าแปลก ๆ ที่แปะเอียง ๆ"
     },
     "tags": [
      "funny_face",
      "maskface",
      "wall"
     ]
    }
   ]
  },
  {
   "id": "c_snack",
   "text": {
    "ko": "간식 시간, 가장 먹고 싶은 것은 무엇입니까?",
    "en": "At snack time, what do you most want to eat?",
    "zh": "零食时间，你最想吃什么？",
    "ja": "おやつの時間、一番食べたいものは何ですか？",
    "es": "A la hora del tentempié, ¿qué es lo que más te apetece comer?",
    "pt": "Na hora do lanche, o que você mais quer comer?",
    "fr": "À l'heure du goûter, que voulez-vous manger en premier ?",
    "de": "Zur Snackzeit: Worauf haben Sie am meisten Appetit?",
    "th": "ช่วงเวลาของว่าง คุณอยากกินอะไรมากที่สุด?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "귀여운 모양으로 만든 달콤한 것",
      "en": "Something food-shaped and cute",
      "zh": "做成食物形状的可爱东西",
      "ja": "食べ物の形をしたかわいいもの",
      "es": "Algo con forma de comida, adorable",
      "pt": "Algo em forma de comida, fofo",
      "fr": "Quelque chose en forme de nourriture, mignon",
      "de": "Etwas in Essensform, niedlich",
      "th": "ของที่เป็นรูปอาหารน่ารัก ๆ"
     },
     "tags": [
      "food",
      "cute",
      "mold"
     ]
    },
    {
     "text": {
      "ko": "맵고 자극적인 것",
      "en": "Something spicy and sharp",
      "zh": "辣辣的、刺激的东西",
      "ja": "辛くて刺激的なもの",
      "es": "Algo picante e intenso",
      "pt": "Algo apimentado e intenso",
      "fr": "Quelque chose de piquant et d'intense",
      "de": "Etwas Scharfes und Kräftiges",
      "th": "ของเผ็ดแรง ๆ"
     },
     "tags": [
      "spicy",
      "scary"
     ]
    },
    {
     "text": {
      "ko": "차와 조용한 과자",
      "en": "Tea and a quiet cookie",
      "zh": "茶和安静的点心",
      "ja": "お茶と静かなお菓子",
      "es": "Té y una galleta tranquila",
      "pt": "Chá e um biscoito tranquilo",
      "fr": "Du thé et un petit biscuit tranquille",
      "de": "Tee und ein ruhiger Keks",
      "th": "ชากับขนมเงียบ ๆ"
     },
     "tags": [
      "zen",
      "ceramic",
      "incense"
     ]
    }
   ]
  },
  {
   "id": "c_secret",
   "text": {
    "ko": "아무에게도 말 못 한 취미가 있다면 무엇입니까?",
    "en": "If you had a hobby you've told no one about, what would it be?",
    "zh": "如果有个没对任何人说过的爱好，会是什么？",
    "ja": "誰にも言えない趣味があるとしたら、何ですか？",
    "es": "Si tuvieras un hobby que no le has contado a nadie, ¿cuál sería?",
    "pt": "Se você tivesse um hobby que nunca contou a ninguém, qual seria?",
    "fr": "Si vous aviez un passe-temps dont vous n'avez parlé à personne, ce serait quoi ?",
    "de": "Wenn Sie ein Hobby hätten, von dem Sie niemandem erzählt haben, was wäre es?",
    "th": "ถ้ามีงานอดิเรกที่ไม่เคยบอกใคร จะเป็นอะไร?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "이상한 물건 모으기",
      "en": "Collecting odd things",
      "zh": "收集奇怪的东西",
      "ja": "変なものを集めること",
      "es": "Coleccionar cosas raras",
      "pt": "Colecionar coisas esquisitas",
      "fr": "Collectionner des objets bizarres",
      "de": "Seltsame Dinge sammeln",
      "th": "สะสมของแปลก ๆ"
     },
     "tags": [
      "doll",
      "craft",
      "storage"
     ]
    },
    {
     "text": {
      "ko": "혼자 가면 쓰고 놀기",
      "en": "Playing alone in a mask",
      "zh": "一个人戴着面具玩",
      "ja": "一人でお面をかぶって遊ぶこと",
      "es": "Jugar a solas con una máscara",
      "pt": "Brincar sozinho(a) de máscara",
      "fr": "Jouer seul(e) avec un masque",
      "de": "Allein mit einer Maske spielen",
      "th": "เล่นคนเดียวโดยใส่หน้ากาก"
     },
     "tags": [
      "maskface",
      "costume",
      "hide"
     ]
    },
    {
     "text": {
      "ko": "몰래 동물에게 말 걸기",
      "en": "Secretly talking to animals",
      "zh": "偷偷跟动物说话",
      "ja": "こっそり動物に話しかけること",
      "es": "Hablar a escondidas con los animales",
      "pt": "Conversar escondido com os animais",
      "fr": "Parler en cachette aux animaux",
      "de": "Heimlich mit Tieren reden",
      "th": "แอบคุยกับสัตว์"
     },
     "tags": [
      "animal",
      "cat",
      "bird"
     ]
    }
   ]
  },
  {
   "id": "c_scale",
   "text": {
    "ko": "크기로 고른다면 무엇이 좋겠습니까?",
    "en": "If you chose by size, what would you like?",
    "zh": "如果按大小来选，你喜欢哪种？",
    "ja": "大きさで選ぶなら、どれがいいですか？",
    "es": "Si eligieras por tamaño, ¿cuál preferirías?",
    "pt": "Se escolhesse pelo tamanho, qual preferiria?",
    "fr": "Si vous choisissiez selon la taille, que préféreriez-vous ?",
    "de": "Wenn Sie nach Größe wählen würden, was hätten Sie gern?",
    "th": "ถ้าเลือกตามขนาด คุณชอบแบบไหน?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "손바닥에 올라가는 작은 것",
      "en": "Something small enough to sit on my palm",
      "zh": "能放在手心的小东西",
      "ja": "手のひらに乗る小さなもの",
      "es": "Algo pequeño que quepa en la palma",
      "pt": "Algo pequeno que cabe na palma da mão",
      "fr": "Un petit truc qui tient dans la paume",
      "de": "Etwas Kleines, das auf die Handfläche passt",
      "th": "ของเล็กที่วางบนฝ่ามือได้"
     },
     "tags": [
      "tiny",
      "cute"
     ]
    },
    {
     "text": {
      "ko": "두 팔로 안아야 하는 큰 것",
      "en": "Something big I have to hug with both arms",
      "zh": "要用双臂抱住的大东西",
      "ja": "両腕で抱える大きなもの",
      "es": "Algo grande que haya que abrazar con los dos brazos",
      "pt": "Algo grande que precisa ser abraçado com os dois braços",
      "fr": "Un gros truc qu'il faut serrer à deux bras",
      "de": "Etwas Großes, das man mit beiden Armen umarmen muss",
      "th": "ของใหญ่ที่ต้องกอดสองแขน"
     },
     "tags": [
      "plush",
      "tough",
      "statue"
     ]
    },
    {
     "text": {
      "ko": "벽 한 면을 차지하는 것",
      "en": "Something that takes up a whole wall",
      "zh": "占满一面墙的东西",
      "ja": "壁一面を占めるもの",
      "es": "Algo que ocupe toda una pared",
      "pt": "Algo que ocupa uma parede inteira",
      "fr": "Un truc qui occupe tout un mur",
      "de": "Etwas, das eine ganze Wand einnimmt",
      "th": "ของที่กินพื้นที่ผนังทั้งด้าน"
     },
     "tags": [
      "wall",
      "art",
      "calendar"
     ]
    }
   ]
  },
  {
   "id": "c_late",
   "text": {
    "ko": "야근하는 밤, 책상 위에 있었으면 하는 것은 무엇입니까?",
    "en": "On a late night at work, what do you want on your desk?",
    "zh": "加班的夜里，你希望桌上有什么？",
    "ja": "残業の夜、机の上にあってほしいものは何ですか？",
    "es": "En una noche de horas extra, ¿qué quieres sobre tu escritorio?",
    "pt": "Numa noite de hora extra, o que você quer em cima da mesa?",
    "fr": "Lors d'une nuit d'heures sup, que voulez-vous sur votre bureau ?",
    "de": "Was wünschen Sie sich in einer Überstundennacht auf Ihrem Schreibtisch?",
    "th": "คืนที่ต้องทำงานดึก คุณอยากมีอะไรบนโต๊ะ?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "응원해주는 작은 인형",
      "en": "A small doll cheering me on",
      "zh": "为我加油的小娃娃",
      "ja": "応援してくれる小さな人形",
      "es": "Una muñequita que me anime",
      "pt": "Uma bonequinha torcendo por mim",
      "fr": "Une petite poupée qui m'encourage",
      "de": "Eine kleine Puppe, die mich anfeuert",
      "th": "ตุ๊กตาตัวเล็กที่คอยเชียร์"
     },
     "tags": [
      "plush",
      "cute",
      "job"
     ]
    },
    {
     "text": {
      "ko": "묵직하게 곁을 지켜주는 작은 조각상",
      "en": "A small statue standing steadily by me",
      "zh": "沉稳守在身边的小雕像",
      "ja": "どっしり寄り添ってくれる小さな像",
      "es": "Una pequeña estatua que me acompaña con firmeza",
      "pt": "Uma pequena estátua que me acompanha com firmeza",
      "fr": "Une petite statue qui reste solidement à mes côtés",
      "de": "Eine kleine Statue, die standhaft bei mir bleibt",
      "th": "รูปปั้นเล็ก ๆ ที่อยู่เคียงข้างอย่างมั่นคง"
     },
     "tags": [
      "statue",
      "job",
      "tough"
     ]
    },
    {
     "text": {
      "ko": "웃음이 터지는 이상한 물건",
      "en": "A strange thing that makes me laugh",
      "zh": "让人笑出来的奇怪东西",
      "ja": "笑ってしまう変なもの",
      "es": "Algo raro que me haga reír",
      "pt": "Uma coisa esquisita que me faz rir",
      "fr": "Un truc bizarre qui me fait rire",
      "de": "Ein seltsames Ding, das mich zum Lachen bringt",
      "th": "ของแปลก ๆ ที่ทำให้หัวเราะ"
     },
     "tags": [
      "funny_face",
      "prank",
      "cartoon"
     ]
    }
   ]
  }
 ],
 "products": [
  {
   "id": 1,
   "tags": [
    "doll",
    "ceramic",
    "cute",
    "decor",
    "craft"
   ],
   "name": {
    "ko": "구워지다 만 표정의 도자기 친구",
    "en": "A Half-Baked Ceramic Friend",
    "zh": "烧到一半的陶瓷小伙伴",
    "ja": "焼きかけの表情をした陶器の友だち",
    "es": "Un amigo de cerámica a medio hornear",
    "pt": "Um Amigo de Cerâmica Mal Cozido",
    "fr": "Un ami en céramique mal cuit",
    "de": "Ein halbgarer Keramikfreund",
    "th": "เพื่อนเซรามิกอบไม่สุก"
   },
   "line": {
    "ko": "완성되지 않은 얼굴에서 위안을 얻는 분이시군요.",
    "en": "You find comfort in faces that never quite finished.",
    "zh": "你会从没完成的脸上得到安慰。",
    "ja": "未完成の顔に安らぎを感じる方ですね。",
    "es": "Encuentras consuelo en caras que nunca terminaron de hacerse.",
    "pt": "Você encontra conforto em rostos que nunca ficaram prontos.",
    "fr": "Vous trouvez du réconfort dans les visages jamais tout à fait terminés.",
    "de": "Sie finden Trost in Gesichtern, die nie ganz fertig wurden.",
    "th": "คุณสบายใจกับใบหน้าที่ไม่เคยเสร็จสมบูรณ์"
   },
   "origName": "핸드메이드 세라믹 미니 흙 인형",
   "url": "https://temu.to/k/gh0wnhe5gj7",
   "urlByLang": {},
   "img": "assets/products/1.webp",
   "prior": 0.719,
   "shop": "temu"
  },
  {
   "id": 2,
   "tags": [
    "food",
    "funny_face",
    "decor"
   ],
   "name": {
    "ko": "웃음을 참고 있는 바나나",
    "en": "A Banana Trying Not to Laugh",
    "zh": "憋着笑的香蕉",
    "ja": "笑いをこらえているバナナ",
    "es": "Un plátano que intenta no reírse",
    "pt": "Uma Banana Tentando Não Rir",
    "fr": "Une banane qui tente de ne pas rire",
    "de": "Eine Banane, die sich das Lachen verkneift",
    "th": "กล้วยที่พยายามกลั้นหัวเราะ"
   },
   "line": {
    "ko": "과일이 이렇게까지 자신만만해도 되는지, 저는 모르겠습니다.",
    "en": "I cannot say whether a fruit should be this confident.",
    "zh": "水果可以这么自信吗？我也不知道。",
    "ja": "果物がここまで自信満々でいいのか、私にはわかりません。",
    "es": "No sé si una fruta debería tener tanta seguridad.",
    "pt": "Não sei dizer se uma fruta deveria ter tanta confiança.",
    "fr": "Je ne saurais dire si un fruit devrait avoir autant d'aplomb.",
    "de": "Ich kann nicht sagen, ob eine Frucht so selbstbewusst sein sollte.",
    "th": "ผมบอกไม่ได้ว่าผลไม้ควรมั่นใจได้ขนาดนี้ไหม"
   },
   "origName": "웃는 표정 레진 바나나 피규어",
   "url": "https://temu.to/k/g5m76zx2jyv",
   "urlByLang": {},
   "img": "assets/products/2.webp",
   "prior": 4.239,
   "shop": "temu"
  },
  {
   "id": 3,
   "tags": [
    "frog",
    "animal",
    "living",
    "sound",
    "decor",
    "craft"
   ],
   "name": {
    "ko": "등을 긁어주면 우는 나무 개구리",
    "en": "A Wooden Frog That Croaks When Scratched",
    "zh": "刮背就会叫的木头青蛙",
    "ja": "背中をこするとなく木のカエル",
    "es": "Una rana de madera que croa al rascarle la espalda",
    "pt": "Um Sapo de Madeira que Coaxa Quando Raspado",
    "fr": "Une grenouille en bois qui coasse quand on la gratte",
    "de": "Ein Holzfrosch, der quakt, wenn man ihn kratzt",
    "th": "กบไม้ที่ร้องเมื่อถูไปบนหลัง"
   },
   "line": {
    "ko": "소리 나는 개구리를 외면하기란 쉽지 않은 일입니다.",
    "en": "A frog that makes noise is hard to ignore.",
    "zh": "会发声的青蛙，很难不理它。",
    "ja": "音の出るカエルを無視するのは難しいものです。",
    "es": "Una rana que hace ruido es difícil de ignorar.",
    "pt": "Um sapo que faz barulho é difícil de ignorar.",
    "fr": "Une grenouille qui fait du bruit, difficile à ignorer.",
    "de": "Ein Frosch, der Lärm macht, ist schwer zu übersehen.",
    "th": "กบที่ส่งเสียงได้ ยากที่จะเมินเฉย"
   },
   "origName": "나무 개구리 타악기(귀로)",
   "url": "https://temu.to/k/gc3d8ohed3t",
   "urlByLang": {},
   "img": "assets/products/3.webp",
   "prior": 2.903,
   "shop": "temu",
   "need": "vent"
  },
  {
   "id": 4,
   "tags": [
    "funny_face",
    "useful",
    "wearable",
    "phone"
   ],
   "name": {
    "ko": "당신의 폰에 얼굴을 하나 더 드립니다",
    "en": "One More Face for Your Phone",
    "zh": "给你的手机再添一张脸",
    "ja": "あなたのスマホにもう一つ顔を",
    "es": "Una cara más para tu móvil",
    "pt": "Mais um Rostinho para o Seu Celular",
    "fr": "Une bouille de plus pour votre téléphone",
    "de": "Noch ein Gesicht für Ihr Handy",
    "th": "หน้าอีกหน้าสำหรับโทรศัพท์ของคุณ"
   },
   "line": {
    "ko": "폰이 쳐다보고 있다는 사실을, 당신은 이미 즐기고 계십니다.",
    "en": "You already enjoy the thought of your phone staring back.",
    "zh": "手机在盯着你，这一点你其实很享受。",
    "ja": "スマホに見つめられることを、すでに楽しんでおられます。",
    "es": "Ya disfrutas de la idea de que tu móvil te mire.",
    "pt": "Você já curte a ideia de o celular encarar você de volta.",
    "fr": "Vous aimez déjà l'idée que votre téléphone vous regarde en retour.",
    "de": "Der Gedanke, dass Ihr Handy zurückstarrt, gefällt Ihnen schon.",
    "th": "คุณชอบความคิดที่ว่าโทรศัพท์จ้องกลับอยู่แล้ว"
   },
   "origName": "웃긴 얼굴 2D 폰케이스",
   "url": "https://temu.to/k/gwyxrwctne0",
   "urlByLang": {},
   "img": "assets/products/4.webp",
   "prior": 7.045,
   "shop": "temu",
   "need": "mirror"
  },
  {
   "id": 5,
   "tags": [
    "wearable",
    "funny_face",
    "maskface",
    "hide",
    "celebrity"
   ],
   "name": {
    "ko": "하루만 스타의 얼굴로 살아보는 마스크",
    "en": "A Mask to Live One Day as a Celebrity",
    "zh": "当一天明星的脸的面具",
    "ja": "一日だけスターの顔で生きるマスク",
    "es": "Una máscara para vivir un día como una estrella",
    "pt": "Uma Máscara para Viver um Dia de Celebridade",
    "fr": "Un masque pour vivre un jour en célébrité",
    "de": "Eine Maske, um einen Tag als Promi zu leben",
    "th": "หน้ากากให้ใช้ชีวิตวันหนึ่งเป็นคนดัง"
   },
   "line": {
    "ko": "유명한 누군가의 얼굴로 하루쯤 살아보고 싶은 마음이 있으시군요.",
    "en": "Part of you wants to live a day wearing a famous face.",
    "zh": "你心里想过，哪怕只有一天，用名人的脸活一次。",
    "ja": "有名な誰かの顔で、一日くらい生きてみたい気持ちがあるのですね。",
    "es": "Una parte de ti quiere vivir un día con la cara de alguien famoso.",
    "pt": "Uma parte de você quer viver um dia com um rosto famoso.",
    "fr": "Une part de vous veut vivre une journée avec un visage célèbre.",
    "de": "Ein Teil von Ihnen will einen Tag mit einem berühmten Gesicht leben.",
    "th": "ส่วนหนึ่งของคุณอยากใช้ชีวิตหนึ่งวันกับใบหน้าของคนดัง"
   },
   "origName": "3D프린팅 스타 마스크",
   "url": "https://temu.to/k/g5n2llvb5e9",
   "urlByLang": {},
   "img": "assets/products/5.webp",
   "prior": 3.724,
   "shop": "temu",
   "need": "role"
  },
  {
   "id": 6,
   "tags": [
    "frog",
    "animal",
    "living",
    "calendar",
    "wall",
    "useful"
   ],
   "name": {
    "ko": "365일 개구리와 함께 늙는 달력",
    "en": "A Calendar to Grow Old With a Frog",
    "zh": "和青蛙一起变老的365天日历",
    "ja": "365日カエルと年を重ねるカレンダー",
    "es": "Un calendario para envejecer 365 días con una rana",
    "pt": "Um Calendário para Envelhecer ao Lado de um Sapo",
    "fr": "Un calendrier pour vieillir avec une grenouille",
    "de": "Ein Kalender, um mit einem Frosch alt zu werden",
    "th": "ปฏิทินให้แก่ไปพร้อมกับกบ"
   },
   "line": {
    "ko": "시간은 흐르고, 개구리는 그 자리에 있습니다. 당신은 그 점이 마음에 드십니다.",
    "en": "Time passes. The frog stays. You like that.",
    "zh": "时间流逝，青蛙还在。你喜欢这一点。",
    "ja": "時は流れ、カエルはそこにいる。あなたはそこが気に入っています。",
    "es": "El tiempo pasa, la rana se queda. Eso te gusta.",
    "pt": "O tempo passa. O sapo fica. Você gosta disso.",
    "fr": "Le temps passe. La grenouille reste. Vous aimez ça.",
    "de": "Die Zeit vergeht. Der Frosch bleibt. Das gefällt Ihnen.",
    "th": "เวลาผ่านไป กบยังอยู่ คุณชอบแบบนั้น"
   },
   "origName": "2027 개구리 벽걸이 달력",
   "url": "https://temu.to/k/g3btbvz9v6y",
   "urlByLang": {},
   "img": "assets/products/6.webp",
   "prior": 0.963,
   "shop": "temu"
  },
  {
   "id": 7,
   "tags": [
    "bear",
    "animal",
    "living",
    "tough",
    "decor",
    "statue"
   ],
   "name": {
    "ko": "맷집 하나는 인정받은 복서 곰",
    "en": "A Boxing Bear With Proven Toughness",
    "zh": "公认耐打的拳击熊",
    "ja": "打たれ強さに定評のあるボクサーの熊",
    "es": "Un oso boxeador de aguante probado",
    "pt": "Um Urso Boxeador de Dureza Comprovada",
    "fr": "Un ours boxeur à la robustesse prouvée",
    "de": "Ein Boxer-Bär mit bewiesener Zähigkeit",
    "th": "หมีนักมวยที่พิสูจน์ความทนมาแล้ว"
   },
   "line": {
    "ko": "강인함 뒤의 다정함을 알아보시는 분이군요.",
    "en": "You notice the kindness behind the strength.",
    "zh": "你看得出力量背后的温柔。",
    "ja": "強さの裏のやさしさに気づく方です。",
    "es": "Notas la ternura detrás de la fuerza.",
    "pt": "Você percebe a bondade por trás da força.",
    "fr": "Vous voyez la douceur derrière la force.",
    "de": "Sie bemerken die Güte hinter der Stärke.",
    "th": "คุณเห็นความใจดีที่อยู่หลังความแข็งแกร่ง"
   },
   "origName": "근육 복싱 곰 레진 조각상",
   "url": "https://temu.to/k/gn89gymx4fm",
   "urlByLang": {},
   "img": "assets/products/7.webp",
   "prior": 1.794,
   "shop": "temu"
  },
  {
   "id": 8,
   "tags": [
    "cat",
    "dog",
    "animal",
    "living",
    "anatomy",
    "scary",
    "decor",
    "pricey",
    "skeleton"
   ],
   "name": {
    "ko": "뼈까지 솔직한 고양이와 개",
    "en": "A Cat and Dog, Honest to the Bone",
    "zh": "连骨头都坦率的猫和狗",
    "ja": "骨まで正直な猫と犬",
    "es": "Un gato y un perro, sinceros hasta los huesos",
    "pt": "Um Gato e um Cachorro, Honestos até os Ossos",
    "fr": "Un chat et un chien, honnêtes jusqu'aux os",
    "de": "Eine Katze und ein Hund, ehrlich bis auf die Knochen",
    "th": "แมวกับหมาที่ซื่อตรงถึงกระดูก"
   },
   "line": {
    "ko": "겉보다 속이 궁금하신 분. 드문 취향이지만 존중합니다.",
    "en": "You're curious about the inside more than the outside. Rare, but respected.",
    "zh": "比起外表，你更好奇里面。少见，但值得尊重。",
    "ja": "外側より中身が気になる方。珍しいですが、尊重します。",
    "es": "Te intriga más el interior que el exterior. Raro, pero respetable.",
    "pt": "Você tem mais curiosidade pelo lado de dentro do que pelo de fora. Raro, mas respeitável.",
    "fr": "Vous êtes plus curieux(se) de l'intérieur que de l'extérieur. Rare, mais respectable.",
    "de": "Sie sind neugieriger auf das Innere als auf das Äußere. Selten, aber respektabel.",
    "th": "คุณอยากรู้เรื่องข้างในมากกว่าข้างนอก หายากแต่น่านับถือ"
   },
   "origName": "고양이·개 전신 골격 해부 모델",
   "url": "https://temu.to/k/gphkzc2nm8v",
   "urlByLang": {},
   "img": "assets/products/8.webp",
   "prior": 2.477,
   "shop": "temu"
  },
  {
   "id": 9,
   "tags": [
    "funny_face",
    "mold",
    "craft",
    "useful"
   ],
   "name": {
    "ko": "표정을 찍어내는 비밀 틀",
    "en": "A Secret Mold for Stamping Faces",
    "zh": "压出表情的秘密模具",
    "ja": "表情を型取る秘密の型",
    "es": "Un molde secreto para estampar expresiones",
    "pt": "Um Molde Secreto para Carimbar Rostos",
    "fr": "Un moule secret pour estamper des visages",
    "de": "Eine Geheimform zum Stempeln von Gesichtern",
    "th": "แม่พิมพ์ลับสำหรับปั๊มใบหน้า"
   },
   "line": {
    "ko": "남의 얼굴을 빚는 일에 조용한 쾌감을 느끼십니다.",
    "en": "You take quiet pleasure in shaping a face.",
    "zh": "你悄悄享受塑造一张脸的乐趣。",
    "ja": "顔をかたどることに、静かな快感を覚えます。",
    "es": "Disfrutas en silencio de dar forma a una cara.",
    "pt": "Você sente um prazer discreto em dar forma a um rosto.",
    "fr": "Vous prenez un plaisir discret à donner forme à un visage.",
    "de": "Sie empfinden stilles Vergnügen daran, ein Gesicht zu formen.",
    "th": "คุณสุขใจเงียบ ๆ เวลาได้ปั้นใบหน้า"
   },
   "origName": "웃긴 얼굴 실리콘 몰드",
   "url": "https://temu.to/k/g1gu7wtho5h",
   "urlByLang": {},
   "img": "assets/products/9.webp",
   "prior": 2.575,
   "shop": "temu",
   "need": "play"
  },
  {
   "id": 10,
   "tags": [
    "alien",
    "living",
    "sound",
    "decor",
    "statue"
   ],
   "name": {
    "ko": "지구에 와서 플루트부터 분 외계인",
    "en": "An Alien Who Came to Earth to Play the Flute",
    "zh": "来地球先吹长笛的外星人",
    "ja": "地球に来てまずフルートを吹いた宇宙人",
    "es": "Un alienígena que llegó a la Tierra y lo primero que hizo fue tocar la flauta",
    "pt": "Um Alienígena que Veio à Terra Tocar Flauta",
    "fr": "Un extraterrestre venu sur Terre pour jouer de la flûte",
    "de": "Ein Außerirdischer, der zum Flötespielen auf die Erde kam",
    "th": "มนุษย์ต่างดาวที่มาโลกเพื่อเป่าขลุ่ย"
   },
   "line": {
    "ko": "그의 우선순위에 깊이 공감하고 계십니다.",
    "en": "You deeply understand his priorities.",
    "zh": "你完全理解他的优先顺序。",
    "ja": "彼の優先順位に深く共感しておられます。",
    "es": "Comprendes a fondo sus prioridades.",
    "pt": "Você entende profundamente as prioridades dele.",
    "fr": "Vous comprenez profondément ses priorités.",
    "de": "Sie verstehen seine Prioritäten zutiefst.",
    "th": "คุณเข้าใจลำดับความสำคัญของเขาอย่างลึกซึ้ง"
   },
   "origName": "플루트 부는 외계인 조각상",
   "url": "https://temu.to/k/gb5mfr5t20s",
   "urlByLang": {},
   "img": "assets/products/10.webp",
   "prior": 2.277,
   "shop": "temu",
   "need": "sound"
  },
  {
   "id": 11,
   "tags": [
    "kangaroo",
    "animal",
    "living",
    "tough",
    "decor",
    "statue",
    "pouch"
   ],
   "name": {
    "ko": "주먹으로 대화하는 캥거루",
    "en": "A Kangaroo Who Settles Things With Fists",
    "zh": "用拳头沟通的袋鼠",
    "ja": "拳で語り合うカンガルー",
    "es": "Un canguro que lo arregla todo a puñetazos",
    "pt": "Um Canguru que Resolve Tudo no Soco",
    "fr": "Un kangourou qui règle tout à coups de poing",
    "de": "Ein Känguru, das alles mit den Fäusten regelt",
    "th": "จิงโจ้ที่ตัดสินทุกเรื่องด้วยหมัด"
   },
   "line": {
    "ko": "주머니가 있는 격투가라니, 이보다 당신다운 조합은 없습니다.",
    "en": "A fighter with a pouch. No pairing suits you better.",
    "zh": "有育儿袋的格斗家，没有比这更像你的组合了。",
    "ja": "袋付きの格闘家。これ以上あなたらしい組み合わせはありません。",
    "es": "Un luchador con bolsa. Ninguna combinación te va mejor.",
    "pt": "Um lutador com bolso. Nenhum par combina melhor com você.",
    "fr": "Un bagarreur avec une poche. Aucun duo ne vous va mieux.",
    "de": "Ein Kämpfer mit Beutel. Kein Paar passt besser zu Ihnen.",
    "th": "นักสู้ที่มีกระเป๋า ไม่มีคู่ไหนเหมาะกับคุณกว่านี้อีกแล้ว"
   },
   "origName": "근육 복싱 캥거루 피규어",
   "url": "https://temu.to/k/gyfcu3precy",
   "urlByLang": {},
   "img": "assets/products/11.webp",
   "prior": 2.843,
   "shop": "temu"
  },
  {
   "id": 12,
   "tags": [
    "frog",
    "animal",
    "living",
    "incense",
    "east",
    "useful",
    "decor"
   ],
   "name": {
    "ko": "연기로 마음을 비우는 청동 개구리",
    "en": "A Bronze Frog That Clears Your Mind With Smoke",
    "zh": "用烟雾清空心灵的青铜青蛙",
    "ja": "煙で心を空にする青銅のカエル",
    "es": "Una rana de bronce que vacía la mente con humo",
    "pt": "Um Sapo de Bronze que Limpa a Mente com Fumaça",
    "fr": "Une grenouille en bronze qui purifie l'esprit par la fumée",
    "de": "Ein Bronzefrosch, der den Kopf mit Rauch freimacht",
    "th": "กบสำริดที่ล้างใจด้วยควัน"
   },
   "line": {
    "ko": "고요함 속에서도 개구리를 놓지 못하는 분이십니다.",
    "en": "Even in stillness, you can't let go of the frog.",
    "zh": "在宁静中，你也放不下青蛙。",
    "ja": "静けさの中でも、カエルを手放せない方です。",
    "es": "Incluso en la calma, no puedes soltar a la rana.",
    "pt": "Nem na calma você consegue largar o sapo.",
    "fr": "Même dans le calme, vous ne pouvez pas lâcher la grenouille.",
    "de": "Selbst in der Stille lassen Sie den Frosch nicht los.",
    "th": "แม้ในความสงบ คุณก็ปล่อยกบไม่ได้"
   },
   "origName": "청동색 개구리 향로",
   "url": "https://temu.to/k/gdqs14dnz3k",
   "urlByLang": {},
   "img": "assets/products/12.webp",
   "prior": 9.196,
   "shop": "temu"
  },
  {
   "id": 13,
   "tags": [
    "human",
    "living",
    "calendar",
    "wall",
    "funny_face",
    "west",
    "useful"
   ],
   "name": {
    "ko": "앞은 짧고 뒤는 긴, 한 해의 달력",
    "en": "A Calendar: Short in Front, Long in the Back",
    "zh": "前面短后面长的年历",
    "ja": "前は短く後ろは長い、一年のカレンダー",
    "es": "Un calendario corto por delante y largo por detrás",
    "pt": "Um Calendário: Curto na Frente, Comprido Atrás",
    "fr": "Un calendrier : court devant, long derrière",
    "de": "Ein Kalender: vorne kurz, hinten lang",
    "th": "ปฏิทิน ข้างหน้าสั้น ข้างหลังยาว"
   },
   "line": {
    "ko": "시간을 읽는 방식마저 개성이 있으셔야 합니다.",
    "en": "Even how you read time has to have personality.",
    "zh": "连读时间的方式也要有个性。",
    "ja": "時間の読み方にも個性がなくては。",
    "es": "Hasta la forma de leer el tiempo debe tener personalidad.",
    "pt": "Até o seu jeito de ler o tempo precisa ter personalidade.",
    "fr": "Même votre façon de lire le temps doit avoir du caractère.",
    "de": "Selbst Ihre Art, die Zeit zu lesen, braucht Persönlichkeit.",
    "th": "แม้วิธีอ่านเวลาของคุณก็ต้องมีบุคลิก"
   },
   "origName": "2027 멀렛 헤어 벽걸이 달력",
   "url": "https://temu.to/k/gvngrfdpn4p",
   "urlByLang": {},
   "img": "assets/products/13.webp",
   "prior": 1.293,
   "shop": "temu",
   "need": "time"
  },
  {
   "id": 14,
   "tags": [
    "wearable",
    "cartoon"
   ],
   "name": {
    "ko": "입는 순간 이야기가 시작되는 만화 티 (A)",
    "en": "A Cartoon Tee That Starts a Story the Moment You Wear It (A)",
    "zh": "一穿上就开始讲故事的漫画T恤（A）",
    "ja": "着た瞬間に物語が始まるマンガTシャツ（A）",
    "es": "Una camiseta de cómic que empieza una historia al ponértela (A)",
    "pt": "Uma Camiseta de Desenho que Começa uma Conversa Assim que Você Veste (A)",
    "fr": "Un tee-shirt dessin animé qui lance une histoire dès qu'on l'enfile (A)",
    "de": "Ein Cartoon-Shirt, das beim Anziehen sofort eine Geschichte beginnt (A)",
    "th": "เสื้อยืดการ์ตูนที่เริ่มเรื่องเล่าทันทีที่ใส่ (A)"
   },
   "line": {
    "ko": "옷으로 말을 거는 분. 조용히 시선을 모으는 방법입니다.",
    "en": "You talk through your clothes. A quiet way to draw eyes.",
    "zh": "你用衣服说话，这是悄悄吸引目光的方法。",
    "ja": "服で語りかける方。静かに視線を集める方法です。",
    "es": "Hablas con la ropa. Una forma discreta de atraer miradas.",
    "pt": "Você fala pela roupa. Um jeito discreto de atrair olhares.",
    "fr": "Vous parlez par vos vêtements. Une façon discrète d'attirer les regards.",
    "de": "Sie sprechen durch Ihre Kleidung. Eine stille Art, Blicke zu ziehen.",
    "th": "คุณพูดผ่านเสื้อผ้า เป็นวิธีเรียกสายตาแบบเงียบ ๆ"
   },
   "origName": "만화 프린트 티셔츠 A",
   "url": "https://temu.to/k/gtjzhdatng5",
   "urlByLang": {},
   "img": "assets/products/14.webp",
   "prior": 39.847,
   "shop": "temu",
   "need": "story"
  },
  {
   "id": 15,
   "tags": [
    "god",
    "incense",
    "east",
    "decor",
    "tiny"
   ],
   "name": {
    "ko": "작은 부자 신과 빈티지 주전자",
    "en": "A Tiny God of Wealth and a Vintage Teapot",
    "zh": "小财神与复古茶壶",
    "ja": "小さな福の神とヴィンテージの急須",
    "es": "Un diminuto dios de la riqueza y una tetera vintage",
    "pt": "Um Minideus da Fortuna e um Bule Vintage",
    "fr": "Un petit dieu de la fortune et une théière vintage",
    "de": "Ein winziger Glücksgott und eine Vintage-Teekanne",
    "th": "เทพเจ้าโชคลาภตัวจิ๋วกับกาน้ำชาวินเทจ"
   },
   "line": {
    "ko": "복은 작은 곳에서부터 시작된다고 믿으시는군요.",
    "en": "You believe fortune starts in small places.",
    "zh": "你相信福气从小处开始。",
    "ja": "福は小さなところから始まると信じておられます。",
    "es": "Crees que la fortuna empieza en lo pequeño.",
    "pt": "Você acredita que a sorte começa em lugares pequenos.",
    "fr": "Vous croyez que la chance commence dans les petits endroits.",
    "de": "Sie glauben, dass Glück an kleinen Orten beginnt.",
    "th": "คุณเชื่อว่าโชคเริ่มจากที่เล็ก ๆ"
   },
   "origName": "부자 신 향로+빈티지 주전자 2개 세트",
   "url": "https://temu.to/k/gp5wbp5hn92",
   "urlByLang": {},
   "img": "assets/products/15.webp",
   "prior": 3.93,
   "shop": "temu"
  },
  {
   "id": 16,
   "tags": [
    "wearable",
    "cartoon"
   ],
   "name": {
    "ko": "입는 순간 이야기가 시작되는 만화 티 (B)",
    "en": "A Cartoon Tee That Starts a Story the Moment You Wear It (B)",
    "zh": "一穿上就开始讲故事的漫画T恤（B）",
    "ja": "着た瞬間に物語が始まるマンガTシャツ（B）",
    "es": "Una camiseta de cómic que empieza una historia al ponértela (B)",
    "pt": "Uma Camiseta de Desenho que Começa uma Conversa Assim que Você Veste (B)",
    "fr": "Un tee-shirt dessin animé qui lance une histoire dès qu'on l'enfile (B)",
    "de": "Ein Cartoon-Shirt, das beim Anziehen sofort eine Geschichte beginnt (B)",
    "th": "เสื้อยืดการ์ตูนที่เริ่มเรื่องเล่าทันทีที่ใส่ (B)"
   },
   "line": {
    "ko": "같은 만화라도 조금 다른 쪽을 고르는 분이십니다.",
    "en": "Same cartoon, but you pick the slightly different side.",
    "zh": "同样是漫画，你偏爱稍微不同的那一边。",
    "ja": "同じマンガでも、少し違う側を選ぶ方です。",
    "es": "Mismo cómic, pero eliges el lado un poco distinto.",
    "pt": "O mesmo desenho, mas você escolhe o lado levemente diferente.",
    "fr": "Même dessin, mais vous choisissez la version légèrement différente.",
    "de": "Derselbe Cartoon, aber Sie wählen die leicht andere Seite.",
    "th": "การ์ตูนเดียวกัน แต่คุณเลือกอีกด้านที่ต่างนิดหน่อย"
   },
   "origName": "만화 프린트 티셔츠 B",
   "url": "https://temu.to/k/gkap10ee4zg",
   "urlByLang": {},
   "img": "assets/products/16.webp",
   "prior": 39.847,
   "shop": "temu",
   "need": "story"
  },
  {
   "id": 17,
   "tags": [
    "wearable",
    "funny_face",
    "headwear",
    "spicy",
    "food"
   ],
   "name": {
    "ko": "머리 위에 열정을 얹는 고추 모자",
    "en": "A Chili Hat to Wear Your Passion on Top",
    "zh": "把热情顶在头上的辣椒帽",
    "ja": "頭の上に情熱をのせる唐辛子の帽子",
    "es": "Un gorro de chile para llevar la pasión en la cabeza",
    "pt": "Um Chapéu de Pimenta para Usar a Paixão na Cabeça",
    "fr": "Un chapeau piment pour porter sa passion sur la tête",
    "de": "Ein Chili-Hut, um die Leidenschaft auf dem Kopf zu tragen",
    "th": "หมวกพริกที่สวมความหลงใหลไว้บนหัว"
   },
   "line": {
    "ko": "맵고 우스운 것을 두려워하지 않는 분입니다.",
    "en": "You're not afraid of things that are spicy and silly.",
    "zh": "你不怕又辣又好笑的东西。",
    "ja": "辛くて可笑しいものを恐れない方です。",
    "es": "No temes a lo picante y ridículo.",
    "pt": "Você não tem medo de coisas picantes e bobas.",
    "fr": "Vous n'avez pas peur de ce qui est pimenté et idiot.",
    "de": "Sie fürchten sich nicht vor Scharfem und Albernem.",
    "th": "คุณไม่กลัวอะไรที่เผ็ดและบ้า ๆ บอ ๆ"
   },
   "origName": "고추 모자 코스튬",
   "url": "https://temu.to/k/g7jo7dkcw9x",
   "urlByLang": {},
   "img": "assets/products/17.webp",
   "prior": 5.166,
   "shop": "temu",
   "need": "stim"
  },
  {
   "id": 18,
   "tags": [
    "monkey",
    "animal",
    "living",
    "mold",
    "craft",
    "useful"
   ],
   "name": {
    "ko": "원숭이 얼굴로 굽는 케이크 틀",
    "en": "A Cake Mold Shaped Like a Monkey Face",
    "zh": "用猴脸烤蛋糕的模具",
    "ja": "サルの顔で焼くケーキ型",
    "es": "Un molde de pastel con cara de mono",
    "pt": "Uma Forma de Bolo com Cara de Macaco",
    "fr": "Un moule à gâteau en forme de tête de singe",
    "de": "Eine Kuchenform in Form eines Affengesichts",
    "th": "พิมพ์ทำเค้กรูปหน้าลิง"
   },
   "line": {
    "ko": "달콤한 것에도 표정은 필요하다고 생각하십니다.",
    "en": "Even sweet things need an expression, you think.",
    "zh": "你觉得连甜点也该有表情。",
    "ja": "甘いものにも表情は必要だとお考えです。",
    "es": "Piensas que hasta lo dulce necesita expresión.",
    "pt": "Até as coisas doces precisam de expressão, você acha.",
    "fr": "Même les choses sucrées ont besoin d'une expression, selon vous.",
    "de": "Selbst Süßes braucht einen Gesichtsausdruck, finden Sie.",
    "th": "คุณคิดว่าแม้ของหวานก็ต้องมีสีหน้า"
   },
   "origName": "원숭이 얼굴 베이킹 몰드",
   "url": "https://temu.to/k/g2h9mdyj5jd",
   "urlByLang": {},
   "img": "assets/products/18.webp",
   "prior": 1.826,
   "shop": "temu",
   "need": "taste"
  },
  {
   "id": 19,
   "tags": [
    "food",
    "toy",
    "useful",
    "funny_face",
    "spin"
   ],
   "name": {
    "ko": "손 위에서 도는 햄버거 한 개",
    "en": "One Burger Spinning in Your Hand",
    "zh": "在手上转的一个汉堡",
    "ja": "手の上で回るハンバーガー一個",
    "es": "Una hamburguesa que gira en tu mano",
    "pt": "Um Hambúrguer Girando na Sua Mão",
    "fr": "Un burger qui tourne dans votre main",
    "de": "Ein Burger, der sich in Ihrer Hand dreht",
    "th": "เบอร์เกอร์ที่หมุนอยู่ในมือคุณ"
   },
   "line": {
    "ko": "먹지 못하는 햄버거에 위로받는 순간이 있습니다.",
    "en": "There are moments you take comfort in a burger you can't eat.",
    "zh": "有时候，不能吃的汉堡反而让你安心。",
    "ja": "食べられないハンバーガーに慰められる瞬間があります。",
    "es": "Hay momentos en que te consuela una hamburguesa que no puedes comer.",
    "pt": "Há momentos em que você se consola com um hambúrguer que não pode comer.",
    "fr": "Il y a des moments où vous vous consolez avec un burger qu'on ne peut pas manger.",
    "de": "Es gibt Momente, in denen ein nicht essbarer Burger Sie tröstet.",
    "th": "มีบางช่วงที่คุณปลอบใจด้วยเบอร์เกอร์ที่กินไม่ได้"
   },
   "origName": "햄버거 회전 핸드 장난감",
   "url": "https://temu.to/k/g8f13ydajxt",
   "urlByLang": {},
   "img": "assets/products/19.webp",
   "prior": 2.321,
   "shop": "temu"
  },
  {
   "id": 20,
   "tags": [
    "dog",
    "animal",
    "living",
    "anatomy",
    "scary",
    "decor",
    "pricey",
    "organ"
   ],
   "name": {
    "ko": "속이 훤히 보이는 개 한 마리",
    "en": "A Dog You Can See Right Through",
    "zh": "一眼看穿内脏的狗",
    "ja": "中身が丸見えの犬",
    "es": "Un perro al que se le ve todo por dentro",
    "pt": "Um Cachorro que Dá para Ver por Dentro",
    "fr": "Un chien qu'on voit à travers",
    "de": "Ein Hund, durch den man hindurchsehen kann",
    "th": "สุนัขที่มองทะลุได้"
   },
   "line": {
    "ko": "숨기는 것 없는 존재에게 끌리십니다.",
    "en": "You're drawn to beings with nothing to hide.",
    "zh": "你被毫无隐瞒的存在吸引。",
    "ja": "隠しごとのない存在に惹かれます。",
    "es": "Te atraen los seres que no esconden nada.",
    "pt": "Você se atrai por seres que não têm nada a esconder.",
    "fr": "Vous êtes attiré(e) par les êtres qui n'ont rien à cacher.",
    "de": "Sie fühlen sich zu Wesen hingezogen, die nichts zu verbergen haben.",
    "th": "คุณถูกดึงดูดไปหาสิ่งที่ไม่มีอะไรต้องปิดบัง"
   },
   "origName": "4D 개 장기 해부 모델",
   "url": "https://temu.to/k/goh6p081nnf",
   "urlByLang": {},
   "img": "assets/products/20.webp",
   "prior": 2.516,
   "shop": "temu"
  },
  {
   "id": 21,
   "tags": [
    "frog",
    "animal",
    "living",
    "useful",
    "cute",
    "decor"
   ],
   "name": {
    "ko": "안경을 대신 들어주는 졸린 개구리",
    "en": "A Sleepy Frog Who Holds Your Glasses",
    "zh": "替你拿眼镜的瞌睡青蛙",
    "ja": "メガネを代わりに持つ眠そうなカエル",
    "es": "Una rana dormilona que sostiene tus gafas",
    "pt": "Um Sapo Sonolento que Segura Seus Óculos",
    "fr": "Une grenouille somnolente qui tient vos lunettes",
    "de": "Ein verschlafener Frosch, der Ihre Brille hält",
    "th": "กบง่วงนอนที่ถือแว่นตาให้"
   },
   "line": {
    "ko": "도움이 되면서도 졸린 존재. 당신의 이상형입니다.",
    "en": "Helpful and sleepy at once. Your ideal type.",
    "zh": "又能帮忙又爱犯困，是你的理想型。",
    "ja": "役に立ちながら眠そう。あなたの理想のタイプです。",
    "es": "Útil y somnolienta a la vez. Tu tipo ideal.",
    "pt": "Prestativo e sonolento ao mesmo tempo. Seu tipo ideal.",
    "fr": "Serviable et somnolente à la fois. Votre type idéal.",
    "de": "Hilfsbereit und verschlafen zugleich. Ihr Idealtyp.",
    "th": "ช่วยเหลือและง่วงนอนในเวลาเดียวกัน สเปกในฝันของคุณ"
   },
   "origName": "졸린 개구리 안경 거치대",
   "url": "https://temu.to/k/g0nx61gojln",
   "urlByLang": {},
   "img": "assets/products/21.webp",
   "prior": 1.623,
   "shop": "temu",
   "need": "fix"
  },
  {
   "id": 22,
   "tags": [
    "wearable",
    "cartoon"
   ],
   "name": {
    "ko": "입는 순간 이야기가 시작되는 만화 티 (C)",
    "en": "A Cartoon Tee That Starts a Story the Moment You Wear It (C)",
    "zh": "一穿上就开始讲故事的漫画T恤（C）",
    "ja": "着た瞬間に物語が始まるマンガTシャツ（C）",
    "es": "Una camiseta de cómic que empieza una historia al ponértela (C)",
    "pt": "Uma Camiseta de Desenho que Começa uma Conversa Assim que Você Veste (C)",
    "fr": "Un tee-shirt dessin animé qui lance une histoire dès qu'on l'enfile (C)",
    "de": "Ein Cartoon-Shirt, das beim Anziehen sofort eine Geschichte beginnt (C)",
    "th": "เสื้อยืดการ์ตูนที่เริ่มเรื่องเล่าทันทีที่ใส่ (C)"
   },
   "line": {
    "ko": "세 번째 만화를 고르는 분은 끝까지 가는 분입니다.",
    "en": "Whoever picks the third cartoon goes all the way.",
    "zh": "选第三件漫画T恤的人，会坚持到底。",
    "ja": "三つ目のマンガを選ぶ方は、最後まで行く方です。",
    "es": "Quien elige el tercer cómic llega hasta el final.",
    "pt": "Quem escolhe o terceiro desenho vai até o fim.",
    "fr": "Qui choisit le troisième dessin va jusqu'au bout.",
    "de": "Wer den dritten Cartoon wählt, geht den ganzen Weg.",
    "th": "ใครเลือกการ์ตูนที่สามคือไปสุดทาง"
   },
   "origName": "만화 프린트 티셔츠 C",
   "url": "https://temu.to/k/gzhqgm69hk6",
   "urlByLang": {},
   "img": "assets/products/22.webp",
   "prior": 39.847,
   "shop": "temu",
   "need": "story"
  },
  {
   "id": 23,
   "tags": [
    "animal",
    "calendar",
    "wall",
    "funny_face",
    "useful",
    "butt"
   ],
   "name": {
    "ko": "열두 달 내내 뒤돌아 있는 동물들",
    "en": "Twelve Months of Animals Turning Their Backs",
    "zh": "十二个月都背对着你的动物们",
    "ja": "十二か月ずっと背を向けている動物たち",
    "es": "Doce meses de animales dándote la espalda",
    "pt": "Doze Meses de Animais de Costas",
    "fr": "Douze mois d'animaux qui tournent le dos",
    "de": "Zwölf Monate mit Tieren, die uns den Rücken zukehren",
    "th": "สิบสองเดือนของสัตว์หันหลังให้"
   },
   "line": {
    "ko": "정면보다 뒷모습이 솔직하다는 것을 아십니다.",
    "en": "You know a back view is more honest than a front.",
    "zh": "你知道背影比正面更诚实。",
    "ja": "正面より後ろ姿のほうが正直だと、ご存じです。",
    "es": "Sabes que una espalda es más sincera que un rostro.",
    "pt": "Você sabe que uma vista de costas é mais honesta que a da frente.",
    "fr": "Vous savez qu'une vue de dos est plus honnête que de face.",
    "de": "Sie wissen, dass eine Rückansicht ehrlicher ist als die Vorderseite.",
    "th": "คุณรู้ว่ามุมด้านหลังซื่อตรงกว่าด้านหน้า"
   },
   "origName": "2027 동물 엉덩이 벽걸이 달력",
   "url": "https://temu.to/k/gan2a1ti4zq",
   "urlByLang": {},
   "img": "assets/products/23.webp",
   "prior": 6.339,
   "shop": "temu"
  },
  {
   "id": 24,
   "tags": [
    "god",
    "human",
    "living",
    "statue",
    "west",
    "decor",
    "tiny"
   ],
   "name": {
    "ko": "손바닥 위의 작은 여신",
    "en": "A Tiny Goddess in Your Palm",
    "zh": "手掌上的小女神",
    "ja": "手のひらの小さな女神",
    "es": "Una diosa diminuta en la palma de tu mano",
    "pt": "Uma Minideusa na Palma da Mão",
    "fr": "Une minuscule déesse au creux de la main",
    "de": "Eine winzige Göttin in Ihrer Handfläche",
    "th": "เทพีตัวจิ๋วในฝ่ามือ"
   },
   "line": {
    "ko": "크기가 작다고 권위가 작은 것은 아닙니다.",
    "en": "Small size doesn't mean small authority.",
    "zh": "个头小，不代表威严小。",
    "ja": "小さいからといって、権威が小さいわけではありません。",
    "es": "Ser pequeña no significa tener poca autoridad.",
    "pt": "Tamanho pequeno não quer dizer pouca autoridade.",
    "fr": "Petite taille ne veut pas dire petite autorité.",
    "de": "Kleine Größe heißt nicht kleine Autorität.",
    "th": "ตัวเล็กไม่ได้แปลว่าอำนาจน้อย"
   },
   "origName": "힐리아 여신 미니 조각상",
   "url": "https://temu.to/k/gnmkkgys7e6",
   "urlByLang": {},
   "img": "assets/products/24.webp",
   "prior": 0.711,
   "shop": "temu",
   "need": "awe"
  },
  {
   "id": 25,
   "tags": [
    "cat",
    "animal",
    "living",
    "craft",
    "cute",
    "useful"
   ],
   "name": {
    "ko": "직접 짜서 키우는 마법 고양이",
    "en": "A Magic Cat You Crochet and Raise Yourself",
    "zh": "亲手钩织、慢慢养大的魔法猫",
    "ja": "自分で編んで育てる魔法の猫",
    "es": "Un gato mágico que tejes y crías tú mismo",
    "pt": "Um Gato Mágico que Você Mesmo Crocheta e Cria",
    "fr": "Un chat magique que vous crochetez et élevez vous-même",
    "de": "Eine magische Katze, die Sie selbst häkeln und aufziehen",
    "th": "แมวมายากลที่คุณถักและเลี้ยงเอง"
   },
   "line": {
    "ko": "키우는 데 시간이 드는 것에 마음을 쓰는 분이십니다.",
    "en": "You care about things that take time to grow.",
    "zh": "你在意那些需要时间养成的东西。",
    "ja": "育てるのに時間のかかるものを大切にする方です。",
    "es": "Te importan las cosas que tardan en crecer.",
    "pt": "Você valoriza o que leva tempo para crescer.",
    "fr": "Vous tenez aux choses qui prennent du temps à grandir.",
    "de": "Ihnen liegen Dinge am Herzen, die Zeit zum Wachsen brauchen.",
    "th": "คุณใส่ใจสิ่งที่ต้องใช้เวลาโต"
   },
   "origName": "마법 고양이 아미구루미 코바늘 키트",
   "url": "https://temu.to/k/g5jq5sn4e8d",
   "urlByLang": {},
   "img": "assets/products/25.webp",
   "prior": 1.362,
   "shop": "temu",
   "need": "play"
  },
  {
   "id": 26,
   "tags": [
    "human",
    "living",
    "funny_face",
    "prank",
    "statue",
    "west",
    "decor"
   ],
   "name": {
    "ko": "뒤집으면 표정이 바뀌는 노란 정장 신사",
    "en": "A Gentleman in a Yellow Suit Whose Face Flips",
    "zh": "翻过来表情会变的黄西装绅士",
    "ja": "裏返すと表情が変わる黄色いスーツの紳士",
    "es": "Un caballero de traje amarillo cuya cara se da la vuelta",
    "pt": "Um Cavalheiro de Terno Amarelo com o Rosto Reversível",
    "fr": "Un gentleman en costume jaune au visage réversible",
    "de": "Ein Gentleman im gelben Anzug mit umklappbarem Gesicht",
    "th": "สุภาพบุรุษสูทเหลืองที่พลิกหน้าได้"
   },
   "line": {
    "ko": "한 사람 안에 두 얼굴이 있다는 사실을 이미 알고 계십니다.",
    "en": "You already know there are two faces in one person.",
    "zh": "你早就知道一个人身上有两张脸。",
    "ja": "一人の中に二つの顔があることを、すでにご存じです。",
    "es": "Ya sabes que en una persona caben dos caras.",
    "pt": "Você já sabe que existem dois rostos em uma pessoa.",
    "fr": "Vous savez déjà qu'il y a deux visages dans une personne.",
    "de": "Sie wissen längst, dass in einem Menschen zwei Gesichter stecken.",
    "th": "คุณรู้อยู่แล้วว่าในคนหนึ่งคนมีสองหน้า"
   },
   "origName": "노란 정장 남자 양면 레진 피규어",
   "url": "https://temu.to/k/gqouwvheybj",
   "urlByLang": {},
   "img": "assets/products/26.webp",
   "prior": 0.31,
   "shop": "temu",
   "need": "mirror"
  },
  {
   "id": 27,
   "tags": [
    "frog",
    "animal",
    "living",
    "useful",
    "cute",
    "ceramic"
   ],
   "name": {
    "ko": "변기 나사를 지키는 개구리 두 마리",
    "en": "Two Frogs Guarding Your Toilet Bolts",
    "zh": "守护马桶螺丝的两只青蛙",
    "ja": "トイレのボルトを守るカエル二匹",
    "es": "Dos ranas que guardan los tornillos del inodoro",
    "pt": "Dois Sapos Guardando os Parafusos do Seu Vaso",
    "fr": "Deux grenouilles qui gardent les boulons de vos toilettes",
    "de": "Zwei Frösche, die Ihre Klobolzen bewachen",
    "th": "กบสองตัวเฝ้าน็อตชักโครกของคุณ"
   },
   "line": {
    "ko": "아무도 보지 않는 곳에도 개구리를 두는 분입니다.",
    "en": "You put frogs even where no one looks.",
    "zh": "没人看的地方，你也放青蛙。",
    "ja": "誰も見ない場所にもカエルを置く方です。",
    "es": "Pones ranas incluso donde nadie mira.",
    "pt": "Você coloca sapos até onde ninguém olha.",
    "fr": "Vous mettez des grenouilles même là où personne ne regarde.",
    "de": "Sie stellen Frösche auch dorthin, wo niemand hinsieht.",
    "th": "คุณวางกบแม้ในที่ที่ไม่มีใครมอง"
   },
   "origName": "개구리 변기 볼트 캡 2개",
   "url": "https://temu.to/k/gqwp3largv7",
   "urlByLang": {},
   "img": "assets/products/27.webp",
   "prior": 1.184,
   "shop": "temu",
   "need": "guard"
  },
  {
   "id": 28,
   "tags": [
    "frog",
    "animal",
    "living",
    "mold",
    "craft",
    "zen"
   ],
   "name": {
    "ko": "명상하는 개구리를 굳히는 틀",
    "en": "A Mold to Set a Meditating Frog in Wax",
    "zh": "把冥想青蛙凝固下来的蜡烛模具",
    "ja": "瞑想するカエルを固める型",
    "es": "Un molde para fijar una rana meditando en cera",
    "pt": "Um Molde para Fazer um Sapo Meditando de Cera",
    "fr": "Un moule pour couler une grenouille méditante en cire",
    "de": "Eine Form, um einen meditierenden Frosch in Wachs zu gießen",
    "th": "แม่พิมพ์หล่อกบนั่งสมาธิด้วยเทียน"
   },
   "line": {
    "ko": "고요함도 직접 만들 수 있다고 믿으십니다.",
    "en": "You believe you can make stillness yourself.",
    "zh": "你相信安静也可以亲手做出来。",
    "ja": "静けさも自分で作れると信じておられます。",
    "es": "Crees que la calma también se puede fabricar.",
    "pt": "Você acredita que pode fabricar a calma com as próprias mãos.",
    "fr": "Vous croyez pouvoir fabriquer le calme de vos mains.",
    "de": "Sie glauben, Stille selbst machen zu können.",
    "th": "คุณเชื่อว่าสร้างความสงบเองได้"
   },
   "origName": "명상 개구리 양초 몰드",
   "url": "https://temu.to/k/g2cyohbk0ph",
   "urlByLang": {},
   "img": "assets/products/28.webp",
   "prior": 3.326,
   "shop": "temu",
   "need": "calm"
  },
  {
   "id": 29,
   "tags": [
    "human",
    "living",
    "calendar",
    "wall",
    "useful"
   ],
   "name": {
    "ko": "공사는 계속되는 열두 달",
    "en": "Twelve Months of Never-Ending Construction",
    "zh": "永远在施工的十二个月",
    "ja": "終わらない工事の十二か月",
    "es": "Doce meses de obras que nunca terminan",
    "pt": "Doze Meses de Obra que Nunca Termina",
    "fr": "Douze mois de chantier sans fin",
    "de": "Zwölf Monate nie endende Baustelle",
    "th": "สิบสองเดือนของงานก่อสร้างที่ไม่มีวันจบ"
   },
   "line": {
    "ko": "끝나지 않는 일에서 이상한 안정감을 느끼십니다.",
    "en": "You find a strange calm in work that never ends.",
    "zh": "你在没有尽头的工作里感到奇怪的安定。",
    "ja": "終わらない仕事に、不思議な安心を覚える方です。",
    "es": "Sientes una extraña calma en el trabajo sin fin.",
    "pt": "Você acha uma calma estranha em trabalho que nunca acaba.",
    "fr": "Vous trouvez un étrange calme dans un travail qui ne finit jamais.",
    "de": "Sie finden eine seltsame Ruhe in Arbeit, die nie aufhört.",
    "th": "คุณพบความสงบแปลก ๆ ในงานที่ไม่มีวันเสร็จ"
   },
   "origName": "2027 건설 노동자 벽걸이 달력",
   "url": "https://temu.to/k/gq2gr278ikr",
   "urlByLang": {},
   "img": "assets/products/29.webp",
   "prior": 2.027,
   "shop": "temu"
  },
  {
   "id": 30,
   "tags": [
    "wall",
    "decor",
    "art"
   ],
   "name": {
    "ko": "액자도 없이 벽을 점령하는 그림",
    "en": "A Frameless Picture That Takes Over the Wall",
    "zh": "没有画框也占领整面墙的画",
    "ja": "額縁もなく壁を占拠する絵",
    "es": "Un cuadro sin marco que se adueña de la pared",
    "pt": "Um Quadro Sem Moldura que Toma Conta da Parede",
    "fr": "Un tableau sans cadre qui envahit le mur",
    "de": "Ein rahmenloses Bild, das die Wand übernimmt",
    "th": "ภาพไร้กรอบที่ยึดผนังทั้งด้าน"
   },
   "line": {
    "ko": "경계 없이 걸리는 것을 좋아하십니다.",
    "en": "You like things that hang without borders.",
    "zh": "你喜欢没有边界的挂着。",
    "ja": "縁のない掛け方を好まれます。",
    "es": "Te gusta lo que cuelga sin bordes.",
    "pt": "Você gosta de coisas que pendem sem bordas.",
    "fr": "Vous aimez les choses qui s'accrochent sans bordures.",
    "de": "Sie mögen Dinge, die ohne Rand hängen.",
    "th": "คุณชอบของที่แขวนโดยไม่มีขอบ"
   },
   "origName": "프레임리스 캔버스 포스터",
   "url": "https://temu.to/k/gbiac19pkv8",
   "urlByLang": {},
   "img": "assets/products/30.webp",
   "prior": 7.047,
   "shop": "temu"
  },
  {
   "id": 31,
   "tags": [
    "sound",
    "scary",
    "useful"
   ],
   "name": {
    "ko": "125데시벨의 비명을 품은 호루라기",
    "en": "A Whistle Holding a 125-Decibel Scream",
    "zh": "藏着125分贝尖叫的哨子",
    "ja": "125デシベルの悲鳴を秘めた笛",
    "es": "Un silbato con un grito de 125 decibelios",
    "pt": "Um Apito com um Grito de 125 Decibéis Dentro",
    "fr": "Un sifflet qui renferme un cri de 125 décibels",
    "de": "Eine Pfeife mit einem 125-Dezibel-Schrei",
    "th": "นกหวีดที่บรรจุเสียงกรีด 125 เดซิเบล"
   },
   "line": {
    "ko": "조용한 얼굴 뒤에 소리 지르고 싶은 마음이 있으십니다.",
    "en": "Behind that calm face, you want to scream.",
    "zh": "安静的脸背后，其实想大叫。",
    "ja": "静かな顔の裏で、叫びたい気持ちがおありです。",
    "es": "Detrás de esa cara tranquila, quieres gritar.",
    "pt": "Por trás desse rosto calmo, você quer gritar.",
    "fr": "Derrière ce visage calme, vous voulez crier.",
    "de": "Hinter diesem ruhigen Gesicht wollen Sie schreien.",
    "th": "หลังใบหน้าสงบนั้น คุณอยากกรีดร้อง"
   },
   "origName": "아즈텍 데스 휘슬",
   "url": "https://temu.to/k/g6ciot9tkzn",
   "urlByLang": {},
   "img": "assets/products/31.webp",
   "prior": 1.373,
   "shop": "temu"
  },
  {
   "id": 32,
   "tags": [
    "funny_face",
    "scary",
    "ceramic",
    "incense",
    "east",
    "decor"
   ],
   "name": {
    "ko": "비명을 지르며 향을 받는 도자기",
    "en": "A Ceramic Screamer That Receives Incense",
    "zh": "一边尖叫一边接受香火的陶瓷",
    "ja": "悲鳴をあげながらお香を受ける陶器",
    "es": "Una cerámica que grita mientras recibe incienso",
    "pt": "Um Gritador de Cerâmica que Recebe Incenso",
    "fr": "Un hurleur en céramique qui reçoit l'encens",
    "de": "Ein Keramik-Schreihals, der Räucherwerk empfängt",
    "th": "ตัวกรีดร้องเซรามิกที่รับธูป"
   },
   "line": {
    "ko": "평화와 비명을 한 자리에 두는 분. 균형 감각이 좋으십니다.",
    "en": "Peace and a scream in one place. You have a sense of balance.",
    "zh": "把平静和尖叫放在一起，你很会平衡。",
    "ja": "平和と悲鳴を同じ場所に置く方。バランス感覚が良いです。",
    "es": "Paz y grito en un mismo lugar. Tienes sentido del equilibrio.",
    "pt": "Paz e grito no mesmo lugar. Você tem senso de equilíbrio.",
    "fr": "La paix et le cri au même endroit. Vous avez le sens de l'équilibre.",
    "de": "Frieden und Schrei an einem Ort. Sie haben ein Gefühl für Balance.",
    "th": "สันติกับเสียงกรีดในที่เดียวกัน คุณมีสัมผัสแห่งความสมดุล"
   },
   "origName": "비명 얼굴 세라믹 향로",
   "url": "https://temu.to/k/gcazhxnrono",
   "urlByLang": {},
   "img": "assets/products/32.webp",
   "prior": 0.54,
   "shop": "temu",
   "need": "vent"
  },
  {
   "id": 33,
   "tags": [
    "zen",
    "funny_face",
    "decor",
    "statue"
   ],
   "name": {
    "ko": "요가하다 잠든 모아이",
    "en": "A Moai Who Fell Asleep Doing Yoga",
    "zh": "做瑜伽做到睡着的摩艾",
    "ja": "ヨガの途中で眠ったモアイ",
    "es": "Un moái que se quedó dormido haciendo yoga",
    "pt": "Um Moai que Dormiu Fazendo Yoga",
    "fr": "Un moaï endormi en plein yoga",
    "de": "Ein Moai, der beim Yoga eingeschlafen ist",
    "th": "โมอายที่หลับไปขณะทำโยคะ"
   },
   "line": {
    "ko": "깨달음과 낮잠 사이 어딘가에 계신 분입니다.",
    "en": "You live somewhere between enlightenment and a nap.",
    "zh": "你生活在觉悟与午睡之间。",
    "ja": "悟りと昼寝のあいだにおられる方です。",
    "es": "Vives entre la iluminación y la siesta.",
    "pt": "Você vive em algum ponto entre a iluminação e a soneca.",
    "fr": "Vous vivez quelque part entre l'illumination et la sieste.",
    "de": "Sie leben irgendwo zwischen Erleuchtung und Nickerchen.",
    "th": "คุณใช้ชีวิตอยู่ระหว่างการรู้แจ้งกับการงีบ"
   },
   "origName": "잠자는 모아이 요가 장식",
   "url": "https://temu.to/k/ge39ju6kurr",
   "urlByLang": {},
   "img": "assets/products/33.webp",
   "prior": 0.738,
   "shop": "temu",
   "need": "calm"
  },
  {
   "id": 34,
   "tags": [
    "scary",
    "cute",
    "living",
    "decor",
    "statue"
   ],
   "name": {
    "ko": "눈이 너무 큰 책상 위 불청객",
    "en": "An Uninvited Desk Guest With Eyes Too Big",
    "zh": "眼睛太大的桌上不速之客",
    "ja": "目が大きすぎる机の上の招かれざる客",
    "es": "Un intruso de ojos enormes sobre tu escritorio",
    "pt": "Um Convidado Indesejado de Olhos Grandes Demais na Mesa",
    "fr": "Un invité surprise aux yeux trop grands sur votre bureau",
    "de": "Ein ungebetener Schreibtischgast mit zu großen Augen",
    "th": "แขกไม่ได้เชิญตาโตเกินไปบนโต๊ะทำงาน"
   },
   "line": {
    "ko": "불편한 것에도 정이 드는 분이십니다.",
    "en": "You grow fond of things that make others uneasy.",
    "zh": "连让人不舒服的东西你也会生出感情。",
    "ja": "不気味なものにも情が湧く方です。",
    "es": "Te encariñas con lo que incomoda a otros.",
    "pt": "Você se afeiçoa a coisas que deixam os outros inquietos.",
    "fr": "Vous vous attachez aux choses qui mettent les autres mal à l'aise.",
    "de": "Sie schließen Dinge ins Herz, die andere verunsichern.",
    "th": "คุณผูกพันกับสิ่งที่ทำให้คนอื่นอึดอัด"
   },
   "origName": "큰 눈 기생충 데스크 피규어",
   "url": "https://temu.to/k/gq7n9uw3a2x",
   "urlByLang": {},
   "img": "assets/products/34.webp",
   "prior": 2.067,
   "shop": "temu",
   "need": "gaze"
  },
  {
   "id": 35,
   "tags": [
    "animal",
    "living",
    "cute",
    "calendar",
    "wall",
    "useful"
   ],
   "name": {
    "ko": "아무 일도 없는 카피바라의 한 해",
    "en": "A Year in the Life of a Capybara Where Nothing Happens",
    "zh": "什么事都没发生的水豚的一年",
    "ja": "何も起こらないカピバラの一年",
    "es": "Un año de capibara en el que no pasa nada",
    "pt": "Um Ano na Vida de uma Capivara em que Nada Acontece",
    "fr": "Une année de la vie d'un capybara où il ne se passe rien",
    "de": "Ein Jahr im Leben eines Wasserschweins, in dem nichts passiert",
    "th": "หนึ่งปีในชีวิตคาปิบาราที่ไม่มีอะไรเกิดขึ้น"
   },
   "line": {
    "ko": "평온함은 가장 큰 사치라고 생각하십니다.",
    "en": "You think calm is the greatest luxury.",
    "zh": "你觉得平静是最大的奢侈。",
    "ja": "穏やかさは最大の贅沢だとお考えです。",
    "es": "Crees que la calma es el mayor de los lujos.",
    "pt": "Você acha que a calma é o maior dos luxos.",
    "fr": "Vous pensez que le calme est le plus grand des luxes.",
    "de": "Sie finden, Ruhe ist der größte Luxus.",
    "th": "คุณคิดว่าความสงบคือความหรูหราสูงสุด"
   },
   "origName": "2027 카피바라 벽걸이 달력",
   "url": "https://temu.to/k/gehwn6mxg9w",
   "urlByLang": {},
   "img": "assets/products/35.webp",
   "prior": 0.805,
   "shop": "temu",
   "need": "calm"
  },
  {
   "id": 36,
   "tags": [
    "wearable",
    "useful",
    "bag"
   ],
   "name": {
    "ko": "즉흥 계획에 어울리는 끈 가방",
    "en": "A Drawstring Bag for Spontaneous Plans",
    "zh": "适合说走就走的束口包",
    "ja": "思いつきの計画に似合う巾着バッグ",
    "es": "Una mochila de cordón para planes improvisados",
    "pt": "Uma Mochila de Cordão para Planos de Última Hora",
    "fr": "Un sac à cordon pour projets impulsifs",
    "de": "Ein Kordelbeutel für spontane Pläne",
    "th": "กระเป๋าหูรูดสำหรับแผนฉับพลัน"
   },
   "line": {
    "ko": "갑자기 떠나는 일을 아직 포기하지 않으셨습니다.",
    "en": "You haven't given up on leaving suddenly.",
    "zh": "你还没放弃突然出发这件事。",
    "ja": "突然出かけることを、まだ諦めておられません。",
    "es": "Aún no has renunciado a irte de repente.",
    "pt": "Você não desistiu de sair de repente.",
    "fr": "Vous n'avez pas renoncé à partir sur un coup de tête.",
    "de": "Sie haben die Idee, plötzlich aufzubrechen, nicht aufgegeben.",
    "th": "คุณยังไม่ละความฝันที่จะออกเดินทางกะทันหัน"
   },
   "origName": "Sam Hyde 스타일 드로스트링 백팩",
   "url": "https://temu.to/k/gij3f5bglqh",
   "urlByLang": {},
   "img": "assets/products/36.webp",
   "prior": 5.749,
   "shop": "temu",
   "need": "move"
  },
  {
   "id": 37,
   "tags": [
    "dog",
    "animal",
    "living",
    "funny_face",
    "calendar",
    "wall",
    "useful",
    "painting"
   ],
   "name": {
    "ko": "르네상스 화풍의 못생긴 강아지 열두 점",
    "en": "Twelve Ugly Dogs in Renaissance Style",
    "zh": "文艺复兴画风的十二只丑狗",
    "ja": "ルネサンス風の不細工な犬十二点",
    "es": "Doce perros feos al estilo renacentista",
    "pt": "Doze Cachorros Feios em Estilo Renascentista",
    "fr": "Douze chiens moches dans le style Renaissance",
    "de": "Zwölf hässliche Hunde im Renaissance-Stil",
    "th": "สุนัขน่าเกลียดสิบสองตัวสไตล์เรอเนซองส์"
   },
   "line": {
    "ko": "못생김을 예술의 경지로 끌어올릴 줄 아십니다.",
    "en": "You can lift ugliness to the level of art.",
    "zh": "你能把丑提升到艺术的境界。",
    "ja": "不細工を芸術の域に高められる方です。",
    "es": "Sabes elevar la fealdad a arte.",
    "pt": "Você consegue elevar a feiura ao nível de arte.",
    "fr": "Vous savez élever la laideur au rang d'art.",
    "de": "Sie können Hässlichkeit auf das Niveau von Kunst heben.",
    "th": "คุณยกความน่าเกลียดขึ้นเป็นงานศิลปะได้"
   },
   "origName": "2027 못생긴 강아지 초상화 달력",
   "url": "https://temu.to/k/gxzwhzqge6w",
   "urlByLang": {},
   "img": "assets/products/37.webp",
   "prior": 2.673,
   "shop": "temu",
   "need": "brag"
  },
  {
   "id": 38,
   "tags": [
    "food",
    "funny_face",
    "cute",
    "decor",
    "statue"
   ],
   "name": {
    "ko": "웃고 있는 땅콩 한 알",
    "en": "One Smiling Peanut",
    "zh": "一颗在笑的花生",
    "ja": "笑っているピーナッツ一粒",
    "es": "Un cacahuete sonriente",
    "pt": "Um Amendoim Sorridente",
    "fr": "Une cacahuète souriante",
    "de": "Eine lächelnde Erdnuss",
    "th": "ถั่วลิสงยิ้มหนึ่งเม็ด"
   },
   "line": {
    "ko": "작은 것이 웃고 있으면 이유를 묻지 않으십니다.",
    "en": "When something small smiles, you don't ask why.",
    "zh": "小东西在笑的时候，你不会追问原因。",
    "ja": "小さなものが笑っていれば、理由は問いません。",
    "es": "Cuando algo pequeño sonríe, no preguntas por qué.",
    "pt": "Quando uma coisinha sorri, você não pergunta por quê.",
    "fr": "Quand une petite chose sourit, vous ne demandez pas pourquoi.",
    "de": "Wenn etwas Kleines lächelt, fragen Sie nicht warum.",
    "th": "เมื่อของเล็ก ๆ ยิ้ม คุณไม่ถามว่าทำไม"
   },
   "origName": "웃는 땅콩 피규어",
   "url": "https://temu.to/k/glvgza3k4u4",
   "urlByLang": {},
   "img": "assets/products/38.webp",
   "prior": 1.175,
   "shop": "temu"
  },
  {
   "id": 39,
   "tags": [
    "frog",
    "animal",
    "living",
    "game",
    "toy",
    "useful"
   ],
   "name": {
    "ko": "무너질 때까지 개구리를 쌓는 게임",
    "en": "A Game of Stacking Frogs Until They Fall",
    "zh": "叠到倒塌为止的青蛙游戏",
    "ja": "崩れるまでカエルを積むゲーム",
    "es": "Un juego de apilar ranas hasta que se caigan",
    "pt": "Um Jogo de Empilhar Sapos até Eles Caírem",
    "fr": "Un jeu d'empilage de grenouilles jusqu'à la chute",
    "de": "Ein Spiel, Frösche zu stapeln, bis sie fallen",
    "th": "เกมเรียงกบจนกว่าจะล้ม"
   },
   "line": {
    "ko": "쌓는 것도, 무너지는 것도 즐기시는 분입니다.",
    "en": "You enjoy both the stacking and the collapse.",
    "zh": "叠起来和倒下来，你都享受。",
    "ja": "積むのも、崩れるのも楽しめる方です。",
    "es": "Disfrutas tanto apilando como derrumbando.",
    "pt": "Você curte tanto empilhar quanto desabar.",
    "fr": "Vous aimez autant empiler que voir s'effondrer.",
    "de": "Sie genießen sowohl das Stapeln als auch den Einsturz.",
    "th": "คุณสนุกทั้งตอนเรียงและตอนพัง"
   },
   "origName": "개구리 균형 쌓기 게임",
   "url": "https://temu.to/k/gx6868s5vq1",
   "urlByLang": {},
   "img": "assets/products/39.webp",
   "prior": 0.424,
   "shop": "temu",
   "need": "play"
  },
  {
   "id": 40,
   "tags": [
    "sound",
    "useful",
    "pricey",
    "guitar"
   ],
   "name": {
    "ko": "주머니 속 기타 사운드 연구소",
    "en": "A Guitar Sound Lab in Your Pocket",
    "zh": "口袋里的吉他音色实验室",
    "ja": "ポケットの中のギターサウンド研究所",
    "es": "Un laboratorio de sonido de guitarra en tu bolsillo",
    "pt": "Um Laboratório de Som de Guitarra no Seu Bolso",
    "fr": "Un labo de sons de guitare dans votre poche",
    "de": "Ein Gitarrenklang-Labor in Ihrer Tasche",
    "th": "ห้องทดลองเสียงกีตาร์ในกระเป๋า"
   },
   "line": {
    "ko": "소리를 직접 만드는 일에 진지한 분이십니다.",
    "en": "You take making sound seriously.",
    "zh": "你对做出声音这件事很认真。",
    "ja": "音を作ることに真剣な方です。",
    "es": "Te tomas en serio crear sonidos.",
    "pt": "Você leva a sério fazer barulho.",
    "fr": "Vous prenez au sérieux le fait de faire du bruit.",
    "de": "Sie nehmen es ernst, Geräusche zu machen.",
    "th": "คุณจริงจังกับการทำเสียง"
   },
   "origName": "SONICAKE 기타 멀티 이펙터",
   "url": "https://temu.to/k/gkp5qhk5mv5",
   "urlByLang": {},
   "img": "assets/products/40.webp",
   "prior": 2.942,
   "shop": "temu"
  },
  {
   "id": 41,
   "tags": [
    "cat",
    "animal",
    "living",
    "zen",
    "east",
    "decor",
    "statue",
    "craft",
    "metal"
   ],
   "name": {
    "ko": "깨달음을 고민하는 황동 아기 고양이",
    "en": "A Brass Kitten Pondering Enlightenment",
    "zh": "苦思觉悟的黄铜小猫",
    "ja": "悟りを悩む真鍮の子猫",
    "es": "Un gatito de latón que reflexiona sobre la iluminación",
    "pt": "Um Gatinho de Latão Pensando na Iluminação",
    "fr": "Un chaton en laiton qui médite sur l'illumination",
    "de": "Ein Messing-Kätzchen, das über Erleuchtung nachdenkt",
    "th": "ลูกแมวทองเหลืองครุ่นคิดเรื่องการรู้แจ้ง"
   },
   "line": {
    "ko": "작은 몸으로 큰 고민을 하는 존재에게 끌리십니다.",
    "en": "You're drawn to small bodies with big worries.",
    "zh": "你被身体小却烦恼大的存在吸引。",
    "ja": "小さな体で大きな悩みを抱える存在に惹かれます。",
    "es": "Te atraen los cuerpos pequeños con grandes preocupaciones.",
    "pt": "Você se atrai por corpinhos com grandes preocupações.",
    "fr": "Vous êtes attiré(e) par les petits corps aux grands soucis.",
    "de": "Kleine Körper mit großen Sorgen ziehen Sie an.",
    "th": "คุณถูกดึงดูดไปหาร่างเล็กที่มีความกังวลใหญ่"
   },
   "origName": "명상하는 황동 아기 고양이",
   "url": "https://temu.to/k/gicia035i15",
   "urlByLang": {},
   "img": "assets/products/41.webp",
   "prior": 0.534,
   "shop": "temu"
  },
  {
   "id": 42,
   "tags": [
    "frog",
    "animal",
    "living",
    "plush",
    "cute",
    "scary"
   ],
   "name": {
    "ko": "초현실적으로 안기는 개구리",
    "en": "A Surreal Frog You Can Hug",
    "zh": "超现实又好抱的青蛙",
    "ja": "シュールに抱きしめられるカエル",
    "es": "Una rana surrealista para abrazar",
    "pt": "Um Sapo Surreal para Abraçar",
    "fr": "Une grenouille surréaliste à câliner",
    "de": "Ein surrealer Frosch zum Umarmen",
    "th": "กบเซอร์เรียลให้กอด"
   },
   "line": {
    "ko": "품에 안기는 것이 조금 이상해도 괜찮으십니다.",
    "en": "Being hugged is fine, even if a little strange.",
    "zh": "被抱着有点奇怪，你也无所谓。",
    "ja": "抱かれるのが少し変でも、平気な方です。",
    "es": "Que te abracen está bien, aunque sea un poco raro.",
    "pt": "Ser abraçado(a) está ótimo, mesmo que seja meio estranho.",
    "fr": "Se faire câliner, ça va, même si c'est un peu étrange.",
    "de": "Umarmt zu werden ist in Ordnung, auch wenn es ein bisschen seltsam ist.",
    "th": "การถูกกอดก็ไม่เป็นไร แม้จะแปลกนิด ๆ"
   },
   "origName": "초현실 개구리 봉제 인형",
   "url": "https://temu.to/k/g85mvtn3b9f",
   "urlByLang": {},
   "img": "assets/products/42.webp",
   "prior": 1.607,
   "shop": "temu"
  },
  {
   "id": 43,
   "tags": [
    "sound",
    "scary",
    "useful",
    "ceramic"
   ],
   "name": {
    "ko": "이빨을 다 드러내고 웃는 붉은 토기 휘슬",
    "en": "A Red Clay Whistle Grinning With Every Tooth",
    "zh": "露出满口牙齿咧嘴笑的红陶哨",
    "ja": "歯をむき出しに笑う赤い土笛",
    "es": "Un silbato de barro rojo que sonríe con todos los dientes",
    "pt": "Um Apito de Barro Vermelho Sorrindo com Todos os Dentes",
    "fr": "Un sifflet d'argile rouge qui sourit de toutes ses dents",
    "de": "Eine rote Tonpfeife, die mit allen Zähnen grinst",
    "th": "นกหวีดดินเหนียวแดงยิ้มเห็นฟันครบ"
   },
   "line": {
    "ko": "무서운 얼굴이 사실은 웃고 있다는 것을 알아보시는 분이시군요.",
    "en": "You can tell that a scary face is actually smiling.",
    "zh": "你看得出，吓人的脸其实在笑。",
    "ja": "怖い顔が実は笑っていると気づける方ですね。",
    "es": "Sabes ver que una cara aterradora en realidad está sonriendo.",
    "pt": "Você percebe que uma cara assustadora está, na verdade, sorrindo.",
    "fr": "Vous voyez qu'un visage effrayant sourit en réalité.",
    "de": "Sie erkennen, dass ein gruseliges Gesicht in Wahrheit lächelt.",
    "th": "คุณมองออกว่าหน้าน่ากลัวนั้นจริง ๆ แล้วกำลังยิ้ม"
   },
   "origName": "붉은 토기 아즈텍 데스 휘슬",
   "url": "https://temu.to/k/ghm480s8akx",
   "urlByLang": {},
   "img": "assets/products/43.webp",
   "prior": 1.002,
   "shop": "temu"
  },
  {
   "id": 44,
   "tags": [
    "doll",
    "human",
    "living",
    "west",
    "decor",
    "cute",
    "statue"
   ],
   "name": {
    "ko": "유럽 어딘가에서 온 순환 인형",
    "en": "A Vintage Doll From Somewhere in Europe",
    "zh": "来自欧洲某处的复古循环娃娃",
    "ja": "ヨーロッパのどこかから来たヴィンテージの人形",
    "es": "Una muñeca vintage de algún lugar de Europa",
    "pt": "Uma Boneca Vintage de Algum Lugar da Europa",
    "fr": "Une poupée vintage venue de quelque part en Europe",
    "de": "Eine Vintage-Puppe aus irgendeinem Winkel Europas",
    "th": "ตุ๊กตาวินเทจจากที่ไหนสักแห่งในยุโรป"
   },
   "line": {
    "ko": "오래된 것에 깃든 묘한 표정을 좋아하십니다.",
    "en": "You like the odd expression in old things.",
    "zh": "你喜欢旧东西里那种奇妙的表情。",
    "ja": "古いものに宿る不思議な表情がお好きです。",
    "es": "Te gusta la expresión extraña de las cosas antiguas.",
    "pt": "Você gosta da expressão esquisita das coisas antigas.",
    "fr": "Vous aimez l'expression bizarre des choses anciennes.",
    "de": "Sie mögen den seltsamen Ausdruck an alten Dingen.",
    "th": "คุณชอบสีหน้าแปลก ๆ ของของเก่า"
   },
   "origName": "유럽풍 빈티지 순환 인형 레진",
   "url": "https://temu.to/k/g6yzrgb4fho",
   "urlByLang": {},
   "img": "assets/products/44.webp",
   "prior": 0.529,
   "shop": "temu"
  },
  {
   "id": 45,
   "tags": [
    "frog",
    "animal",
    "living",
    "useful",
    "storage",
    "cute",
    "jewelry"
   ],
   "name": {
    "ko": "반지를 받아내는 개구리 접시",
    "en": "A Frog Dish That Catches Your Rings",
    "zh": "接住戒指的青蛙小碟",
    "ja": "指輪を受けとめるカエルの小皿",
    "es": "Un platito de rana que recibe tus anillos",
    "pt": "Um Pratinho de Sapo que Guarda Seus Anéis",
    "fr": "Un plat-grenouille qui accueille vos bagues",
    "de": "Eine Froschschale, die Ihre Ringe auffängt",
    "th": "จานกบรับแหวนของคุณ"
   },
   "line": {
    "ko": "소중한 것을 개구리에게 맡기는 분입니다.",
    "en": "You leave precious things in a frog's care.",
    "zh": "你把珍贵的东西交给青蛙保管。",
    "ja": "大切なものをカエルに預ける方です。",
    "es": "Dejas lo precioso al cuidado de una rana.",
    "pt": "Você deixa coisas preciosas aos cuidados de um sapo.",
    "fr": "Vous confiez vos choses précieuses à une grenouille.",
    "de": "Sie überlassen Kostbares der Obhut eines Frosches.",
    "th": "คุณฝากของมีค่าไว้ในความดูแลของกบ"
   },
   "origName": "개구리 3D프린팅 쥬얼리 트레이",
   "url": "https://temu.to/k/ggxw7a62i4m",
   "urlByLang": {},
   "img": "assets/products/45.webp",
   "prior": 0.848,
   "shop": "temu",
   "need": "fix"
  },
  {
   "id": 46,
   "tags": [
    "frog",
    "animal",
    "living",
    "useful",
    "storage",
    "ceramic",
    "funny_face"
   ],
   "name": {
    "ko": "열쇠와 동전을 삼키는 초록 개구리",
    "en": "A Green Frog Swallowing Keys and Coins",
    "zh": "吞下钥匙和硬币的绿青蛙",
    "ja": "鍵と小銭をのみ込む緑のカエル",
    "es": "Una rana verde que se traga llaves y monedas",
    "pt": "Um Sapo Verde que Engole Chaves e Moedas",
    "fr": "Une grenouille verte qui avale clés et pièces",
    "de": "Ein grüner Frosch, der Schlüssel und Münzen verschluckt",
    "th": "กบเขียวที่กลืนกุญแจและเหรียญ"
   },
   "line": {
    "ko": "잡동사니를 기꺼이 받아주는 존재에게 끌리십니다.",
    "en": "You're drawn to those who accept all your clutter.",
    "zh": "你被愿意接纳你所有杂物的存在吸引。",
    "ja": "がらくたを快く受け入れてくれる存在に惹かれます。",
    "es": "Te atraen quienes aceptan todo tu desorden.",
    "pt": "Você se atrai por quem aceita toda a sua bagunça.",
    "fr": "Vous êtes attiré(e) par ceux qui acceptent tout votre bazar.",
    "de": "Sie fühlen sich zu denen hingezogen, die Ihr ganzes Durcheinander annehmen.",
    "th": "คุณถูกดึงดูดไปหาคนที่รับความรกทั้งหมดของคุณ"
   },
   "origName": "큰 입 초록 개구리 접시",
   "url": "https://temu.to/k/giylttelg0e",
   "urlByLang": {},
   "img": "assets/products/46.webp",
   "prior": 3.614,
   "shop": "temu",
   "need": "fix"
  },
  {
   "id": 47,
   "tags": [
    "animal",
    "living",
    "useful",
    "storage",
    "cute",
    "metal"
   ],
   "name": {
    "ko": "약과 비타민을 품은 금속 소",
    "en": "A Metal Cow Holding Pills and Vitamins",
    "zh": "装着药和维生素的金属奶牛",
    "ja": "薬とビタミンを抱えた金属の牛",
    "es": "Una vaca de metal con pastillas y vitaminas",
    "pt": "Uma Vaca de Metal que Guarda Comprimidos e Vitaminas",
    "fr": "Une vache en métal qui garde pilules et vitamines",
    "de": "Eine Metallkuh, die Pillen und Vitamine hält",
    "th": "วัวโลหะที่ถือยาและวิตามิน"
   },
   "line": {
    "ko": "건강을 챙기는 일에도 유머는 필요합니다.",
    "en": "Even looking after your health needs humor.",
    "zh": "连照顾健康也需要幽默。",
    "ja": "健康管理にもユーモアは必要です。",
    "es": "Hasta cuidar la salud necesita humor.",
    "pt": "Até cuidar da saúde pede um pouco de humor.",
    "fr": "Même prendre soin de sa santé demande de l'humour.",
    "de": "Selbst die Gesundheitsvorsorge braucht Humor.",
    "th": "แม้การดูแลสุขภาพก็ต้องมีอารมณ์ขัน"
   },
   "origName": "우유소 금속 정리함",
   "url": "https://temu.to/k/gogx1sondoe",
   "urlByLang": {},
   "img": "assets/products/47.webp",
   "prior": 2.514,
   "shop": "temu"
  },
  {
   "id": 48,
   "tags": [
    "cat",
    "animal",
    "living",
    "anatomy",
    "scary",
    "decor",
    "organ"
   ],
   "name": {
    "ko": "내장까지 정직한 고양이",
    "en": "A Cat Honest Down to the Organs",
    "zh": "连内脏都诚实的猫",
    "ja": "内臓まで正直な猫",
    "es": "Un gato sincero hasta las vísceras",
    "pt": "Um Gato Honesto até os Órgãos",
    "fr": "Un chat honnête jusqu'aux organes",
    "de": "Eine Katze, ehrlich bis in die Organe",
    "th": "แมวซื่อตรงลึกถึงอวัยวะ"
   },
   "line": {
    "ko": "겉과 속이 같은 존재를 믿으십니다.",
    "en": "You trust beings whose outside matches the inside.",
    "zh": "你相信表里如一的存在。",
    "ja": "見た目と中身が同じ存在を信じておられます。",
    "es": "Confías en los seres cuyo exterior coincide con el interior.",
    "pt": "Você confia em seres cujo lado de fora combina com o de dentro.",
    "fr": "Vous faites confiance aux êtres dont l'extérieur correspond à l'intérieur.",
    "de": "Sie vertrauen Wesen, deren Äußeres zum Inneren passt.",
    "th": "คุณไว้ใจสิ่งที่ข้างนอกตรงกับข้างใน"
   },
   "origName": "고양이 장기·골격 해부 모델",
   "url": "https://temu.to/k/genw3omutdg",
   "urlByLang": {},
   "img": "assets/products/48.webp",
   "prior": 2.252,
   "shop": "temu"
  },
  {
   "id": 49,
   "tags": [
    "costume",
    "wearable",
    "funny_face",
    "human",
    "west",
    "tiny"
   ],
   "name": {
    "ko": "붙이는 순간 인생이 달라지는 콧수염",
    "en": "A Mustache That Changes Your Life",
    "zh": "贴上就改变人生的小胡子",
    "ja": "つけた瞬間に人生が変わる口ひげ",
    "es": "Un bigote que te cambia la vida",
    "pt": "Um Bigode que Muda a Sua Vida",
    "fr": "Une moustache qui change votre vie",
    "de": "Ein Schnurrbart, der Ihr Leben verändert",
    "th": "หนวดที่เปลี่ยนชีวิตคุณ"
   },
   "line": {
    "ko": "아직 한 번도 되어보지 못한 누군가가, 당신 안에 있습니다.",
    "en": "Someone you have never been yet is waiting inside you.",
    "zh": "你心里一直住着一个还没成为的人。",
    "ja": "まだなったことのない誰かが、あなたの中にいます。",
    "es": "Hay alguien que aún no has sido, esperando dentro de ti.",
    "pt": "Alguém que você ainda não foi espera dentro de você.",
    "fr": "Quelqu'un que vous n'avez pas encore été vous attend à l'intérieur.",
    "de": "In Ihnen wartet jemand, der Sie noch nie waren.",
    "th": "คนที่คุณยังไม่เคยเป็นกำลังรออยู่ข้างใน"
   },
   "origName": "8자 갈색 자체 접착 콧수염 소품",
   "url": "https://temu.to/k/ge09don4r55",
   "urlByLang": {},
   "img": "assets/products/49.webp",
   "prior": 0.587,
   "shop": "temu",
   "need": "role"
  },
  {
   "id": 50,
   "tags": [
    "illusion",
    "magic",
    "decor"
   ],
   "name": {
    "ko": "분명 비어 있는데 무언가 떠 있는 상자",
    "en": "A Box That Floats Something Inside Nothing",
    "zh": "明明是空的却浮着东西的盒子",
    "ja": "空っぽなのに何かが浮かんでいる箱",
    "es": "Una caja vacía con algo flotando",
    "pt": "Uma Caixa que Faz Algo Flutuar no Meio do Nada",
    "fr": "Une boîte qui fait flotter quelque chose dans le vide",
    "de": "Eine Box, in der etwas im Nichts schwebt",
    "th": "กล่องที่ทำให้บางสิ่งลอยอยู่ในความว่างเปล่า"
   },
   "line": {
    "ko": "눈에 보이는 것이 전부가 아니라는 말을 믿고 싶은 분이시군요.",
    "en": "You want to believe that what you see is not all there is.",
    "zh": "你是愿意相信眼见不为实的人。",
    "ja": "見えるものがすべてではないと、信じたい方ですね。",
    "es": "Quieres creer que lo que ves no es todo lo que hay.",
    "pt": "Você quer acreditar que o que se vê não é tudo.",
    "fr": "Vous voulez croire que ce qu'on voit n'est pas tout.",
    "de": "Sie wollen glauben, dass das Sichtbare nicht alles ist.",
    "th": "คุณอยากเชื่อว่าสิ่งที่เห็นไม่ใช่ทั้งหมด"
   },
   "origName": "3D 미라스코프 환상 상자",
   "url": "https://temu.to/k/g4q6oynp7ku",
   "urlByLang": {},
   "img": "assets/products/50.webp",
   "prior": 8.554,
   "shop": "temu"
  },
  {
   "id": 51,
   "tags": [
    "sound",
    "prank",
    "magic",
    "scary"
   ],
   "name": {
    "ko": "아무것도 깨지지 않았는데 깨지는 소리",
    "en": "A Crash Sound With Nothing Actually Broken",
    "zh": "什么都没碎却会碎裂作响的小装置",
    "ja": "何も割れていないのに割れる音がする装置",
    "es": "Un estruendo de cristales sin nada roto",
    "pt": "Um Barulho de Coisa Quebrando sem Quebrar Nada",
    "fr": "Un bruit de fracas sans rien de cassé",
    "de": "Ein Krachgeräusch, bei dem nichts kaputtgeht",
    "th": "เสียงของพังโครมครามโดยไม่มีอะไรพังจริง"
   },
   "line": {
    "ko": "조용한 방에 작은 소동을 심어두고 싶으십니까.",
    "en": "You would like to plant a small commotion in a quiet room.",
    "zh": "你想在安静的房间里埋下一点小骚动。",
    "ja": "静かな部屋に、小さな騒ぎを仕込んでおきたいのですね。",
    "es": "Quieres sembrar un pequeño alboroto en una sala tranquila.",
    "pt": "Você gostaria de plantar uma pequena confusão numa sala silenciosa.",
    "fr": "Vous aimeriez semer un petit tumulte dans une pièce silencieuse.",
    "de": "Sie würden gern einen kleinen Aufruhr in einen stillen Raum pflanzen.",
    "th": "คุณอยากหว่านความวุ่นวายเล็ก ๆ ในห้องเงียบ ๆ"
   },
   "origName": "깨짐 소리 효과 장치 2개",
   "url": "https://temu.to/k/gbindt66qm5",
   "urlByLang": {},
   "img": "assets/products/51.webp",
   "prior": 0.686,
   "shop": "temu",
   "need": "vent"
  },
  {
   "id": 52,
   "tags": [
    "magic",
    "toy",
    "cartoon",
    "prank"
   ],
   "name": {
    "ko": "분명 뽑았는데 아무도 다치지 않는 마법 검",
    "en": "A Magic Sword That Pierces Nobody",
    "zh": "明明刺穿了却没人受伤的魔法剑",
    "ja": "刺したはずなのに誰も傷つかない魔法の剣",
    "es": "Una espada mágica que no hiere a nadie",
    "pt": "Uma Espada Mágica que Não Fura Ninguém",
    "fr": "Une épée magique qui ne transperce personne",
    "de": "Ein magisches Schwert, das niemanden durchbohrt",
    "th": "ดาบวิเศษที่ไม่แทงใคร"
   },
   "line": {
    "ko": "위험한 척은 하고 싶지만, 다치는 건 싫은 마음을 압니다.",
    "en": "You want to look dangerous without anyone getting hurt.",
    "zh": "想装作危险，却不想有人受伤，这种心情我懂。",
    "ja": "危なそうに見せたいけれど、誰も傷つけたくない気持ち、わかります。",
    "es": "Quieres parecer peligroso sin que nadie salga herido.",
    "pt": "Você quer parecer perigoso(a) sem machucar ninguém.",
    "fr": "Vous voulez avoir l'air dangereux(se) sans blesser personne.",
    "de": "Sie wollen gefährlich wirken, ohne dass jemand verletzt wird.",
    "th": "คุณอยากดูอันตรายโดยไม่มีใครเจ็บ"
   },
   "origName": "텐요 마법 검",
   "url": "https://temu.to/k/gy31v71pqe7",
   "urlByLang": {},
   "img": "assets/products/52.webp",
   "prior": 1.001,
   "shop": "temu",
   "need": "trick"
  },
  {
   "id": 53,
   "tags": [
    "costume",
    "wearable",
    "funny_face",
    "human",
    "headwear",
    "set"
   ],
   "name": {
    "ko": "한 번도 살아본 적 없는 시대의 신사 세트",
    "en": "A Gentleman Kit From an Era You Never Lived In",
    "zh": "没活过的年代的绅士套装",
    "ja": "生きたことのない時代の紳士セット",
    "es": "Un kit de caballero de una época que nunca viviste",
    "pt": "Um Kit de Cavalheiro de uma Época que Você Nunca Viveu",
    "fr": "Un kit de gentleman d'une époque que vous n'avez pas connue",
    "de": "Ein Gentleman-Set aus einer Zeit, die Sie nie erlebt haben",
    "th": "ชุดสุภาพบุรุษจากยุคที่คุณไม่เคยอยู่"
   },
   "line": {
    "ko": "다른 시대의 누군가가 되어보는 것에 마음이 기웁니다.",
    "en": "Part of you leans toward becoming someone from another age.",
    "zh": "你的心有点倾向于变成另一个时代的人。",
    "ja": "別の時代の誰かになってみたい気持ちが、あなたにはあります。",
    "es": "Una parte de ti se inclina por ser alguien de otra época.",
    "pt": "Uma parte de você tende a virar alguém de outra era.",
    "fr": "Une part de vous penche pour devenir quelqu'un d'un autre âge.",
    "de": "Ein Teil von Ihnen neigt dazu, jemand aus einer anderen Epoche zu werden.",
    "th": "ส่วนหนึ่งของคุณโน้มเอียงที่จะเป็นคนจากยุคอื่น"
   },
   "origName": "크리스마스 옛날 의상 세트 7종",
   "url": "https://temu.to/k/gz6wiezi8gj",
   "urlByLang": {},
   "img": "assets/products/53.webp",
   "prior": 0.695,
   "shop": "temu"
  },
  {
   "id": 54,
   "tags": [
    "toy",
    "game",
    "outdoor",
    "useful",
    "tough"
   ],
   "name": {
    "ko": "핑크색 공을 던지는 데 진심인 어른의 세트",
    "en": "A Set for Adults Serious About Throwing Pink Balls",
    "zh": "认真对待投掷粉色球的大人套装",
    "ja": "ピンクのボール投げに本気な大人のセット",
    "es": "Un set para adultos que se toman en serio lanzar pelotas rosas",
    "pt": "Um Conjunto para Adultos que Levam a Sério o Arremesso de Bolas Cor-de-Rosa",
    "fr": "Un set pour adultes sérieux dans le lancer de balles roses",
    "de": "Ein Set für Erwachsene, die das Werfen rosa Bälle ernst nehmen",
    "th": "ชุดสำหรับผู้ใหญ่ที่จริงจังกับการขว้างลูกบอลสีชมพู"
   },
   "line": {
    "ko": "이긴 사람이 없어도 즐거운 놀이를 오래 기억하고 계십니다.",
    "en": "You remember games that were fun even when nobody won.",
    "zh": "你还记得那些没人赢也很开心的游戏。",
    "ja": "勝者がいなくても楽しかった遊びを、覚えていらっしゃいますね。",
    "es": "Recuerdas juegos divertidos aunque nadie ganara.",
    "pt": "Você lembra de jogos que eram divertidos mesmo quando ninguém ganhava.",
    "fr": "Vous vous souvenez des jeux amusants même quand personne ne gagnait.",
    "de": "Sie erinnern sich an Spiele, die Spaß machten, auch wenn niemand gewann.",
    "th": "คุณจำเกมที่สนุกแม้ไม่มีใครชนะได้"
   },
   "origName": "어린이 야외 스포츠 공 장난감 6개",
   "url": "https://temu.to/k/gxpreyo79m4",
   "urlByLang": {},
   "img": "assets/products/54.webp",
   "prior": 0.849,
   "shop": "temu"
  },
  {
   "id": 55,
   "tags": [
    "cat",
    "animal",
    "living",
    "plush",
    "cute",
    "funny_face"
   ],
   "name": {
    "ko": "주먹을 쥐고 폼을 잡는 아기 고양이 인형",
    "en": "A Kitten Plush Striking a Tough Pose",
    "zh": "摆出架势的小猫咪玩偶",
    "ja": "ファイティングポーズをとる子猫のぬいぐるみ",
    "es": "Un gatito de peluche en pose de pelea",
    "pt": "Uma Pelúcia de Gatinho Fazendo Pose de Durão",
    "fr": "Une peluche de chaton qui prend la pose du dur à cuire",
    "de": "Ein Kätzchen-Plüsch in harter Pose",
    "th": "ตุ๊กตาลูกแมวโพสท่าเท่"
   },
   "line": {
    "ko": "작고 순해 보이는데 속으로는 한가락 한다고 믿고 싶은 분이시군요.",
    "en": "You want to believe that something small and gentle-looking can still hold its own.",
    "zh": "你愿意相信，看起来小而温顺的存在，其实也有两下子。",
    "ja": "小さくて優しそうなのに、実は腕が立つと信じたい方ですね。",
    "es": "Quieres creer que algo pequeño y dulce también sabe defenderse.",
    "pt": "Você quer acreditar que algo pequeno e de aparência gentil ainda se defende.",
    "fr": "Vous voulez croire que quelque chose de petit et doux sait encore tenir tête.",
    "de": "Sie wollen glauben, dass etwas Kleines und Sanftes sich trotzdem behaupten kann.",
    "th": "คุณอยากเชื่อว่าสิ่งเล็กที่ดูอ่อนโยนก็ยังตั้งตัวได้"
   },
   "origName": "아기 고양이 포즈 봉제 인형",
   "url": "https://temu.to/k/gludcc6fsk7",
   "urlByLang": {},
   "img": "assets/products/55.webp",
   "prior": 0.814,
   "shop": "temu",
   "need": "sturdy"
  },
  {
   "id": 56,
   "tags": [
    "prank",
    "game",
    "sound",
    "funny_face"
   ],
   "name": {
    "ko": "맞는 순간 터지는 점잖은 골프공",
    "en": "A Dignified Golf Ball That Goes Off When Hit",
    "zh": "一打就炸的体面高尔夫球",
    "ja": "打った瞬間に弾ける上品なゴルフボール",
    "es": "Una elegante pelota de golf que estalla al golpearla",
    "pt": "Uma Bola de Golfe Digna que Explode ao Ser Atingida",
    "fr": "Une balle de golf digne qui explose quand on la frappe",
    "de": "Ein würdevoller Golfball, der beim Schlag explodiert",
    "th": "ลูกกอล์ฟสง่าที่ระเบิดเมื่อถูกตี"
   },
   "line": {
    "ko": "점잖은 자리에서 한 번쯤 장난치고 싶은 마음을 잘 참아오셨습니다.",
    "en": "You have held back the urge to prank at proper gatherings for a long time.",
    "zh": "你在体面的场合忍了很久想恶作剧的冲动。",
    "ja": "お上品な場でいたずらしたい気持ちを、よく我慢されてきました。",
    "es": "Llevas mucho tiempo conteniendo las ganas de bromear en reuniones formales.",
    "pt": "Você segura há muito tempo a vontade de pregar uma peça em encontros formais.",
    "fr": "Vous retenez depuis longtemps l'envie de faire une blague lors de réunions guindées.",
    "de": "Sie verkneifen sich schon lange den Drang, bei förmlichen Anlässen Streiche zu spielen.",
    "th": "คุณกลั้นความอยากแกล้งในงานเป็นทางการมานานแล้ว"
   },
   "origName": "장난용 폭발 골프공 3개",
   "url": "https://temu.to/k/ggid53p4h6x",
   "urlByLang": {},
   "img": "assets/products/56.webp",
   "prior": 0.146,
   "shop": "temu",
   "need": "trick"
  },
  {
   "id": 57,
   "tags": [
    "game",
    "illusion",
    "wearable",
    "prank"
   ],
   "name": {
    "ko": "세상을 거꾸로 보게 해주는 안경",
    "en": "Glasses That Turn the World Upside Down",
    "zh": "让你把世界看反的眼镜",
    "ja": "世界を逆さまに見せてくれるメガネ",
    "es": "Unas gafas que ponen el mundo del revés",
    "pt": "Óculos que Viram o Mundo de Cabeça para Baixo",
    "fr": "Des lunettes qui retournent le monde",
    "de": "Eine Brille, die die Welt auf den Kopf stellt",
    "th": "แว่นที่พลิกโลกกลับหัว"
   },
   "line": {
    "ko": "한 번쯤은 세상이 뒤집혀도 괜찮겠다고 생각하셨군요.",
    "en": "You once thought it might be fine if the world flipped over.",
    "zh": "你曾想过，世界翻过来一次也无妨。",
    "ja": "一度くらい世界がひっくり返ってもいい、と思ったことがあるのですね。",
    "es": "Alguna vez pensaste que no estaría mal que el mundo se diera la vuelta.",
    "pt": "Você já pensou que não seria mal se o mundo virasse.",
    "fr": "Vous avez déjà pensé que ce ne serait pas si mal si le monde se renversait.",
    "de": "Sie fanden einmal, es könnte ganz okay sein, wenn die Welt kippt.",
    "th": "คุณเคยคิดว่าถ้าโลกพลิกก็คงไม่เป็นไร"
   },
   "origName": "시야 뒤집기 안경 게임",
   "url": "https://temu.to/k/gdtit5ahcwh",
   "urlByLang": {},
   "img": "assets/products/57.webp",
   "prior": 1.339,
   "shop": "temu"
  },
  {
   "id": 58,
   "tags": [
    "puzzle",
    "game",
    "cat",
    "animal",
    "living",
    "cute",
    "zen"
   ],
   "name": {
    "ko": "천 조각으로 흩어진 게으른 고양이",
    "en": "A Lazy Fat Cat Scattered Into a Thousand Pieces",
    "zh": "散成一千片的懒猫",
    "ja": "千のピースに散らばった怠け者の猫",
    "es": "Un gato gordo y perezoso hecho mil pedazos",
    "pt": "Um Gato Gordo e Preguiçoso Espalhado em Mil Peças",
    "fr": "Un gros chat paresseux éparpillé en mille morceaux",
    "de": "Eine faule dicke Katze, in tausend Teile zerstreut",
    "th": "แมวอ้วนขี้เกียจที่กระจายเป็นพันชิ้น"
   },
   "line": {
    "ko": "게으름도 때로는 끝까지 완성할 가치가 있다고 믿으십니다.",
    "en": "You believe even laziness is sometimes worth finishing.",
    "zh": "你相信偷懒有时也值得做到最后。",
    "ja": "怠けることも、ときには最後までやり遂げる価値があると信じていますね。",
    "es": "Crees que incluso la pereza a veces merece terminarse.",
    "pt": "Você acredita que até a preguiça às vezes vale a pena terminar.",
    "fr": "Vous croyez que même la paresse vaut parfois la peine d'être menée à terme.",
    "de": "Sie glauben, dass sich selbst Faulheit manchmal lohnt zu vollenden.",
    "th": "คุณเชื่อว่าแม้ความขี้เกียจบางครั้งก็คุ้มค่าจะทำให้เสร็จ"
   },
   "origName": "게으른 뚱뚱한 고양이 퍼즐 500/1000피스",
   "url": "https://temu.to/k/gh3yrdgeb0i",
   "urlByLang": {},
   "img": "assets/products/58.webp",
   "prior": 2.225,
   "shop": "temu"
  },
  {
   "id": 59,
   "tags": [
    "frog",
    "animal",
    "living",
    "costume",
    "wearable",
    "funny_face",
    "cute"
   ],
   "name": {
    "ko": "인간이기를 하루만 쉬고 싶은 날의 개구리 옷",
    "en": "A Frog Suit for the Day You Want a Break From Being Human",
    "zh": "想休息一天不当人时穿的青蛙装",
    "ja": "人間を一日お休みしたい日のカエルの着ぐるみ",
    "es": "Un traje de rana para el día que quieres descansar de ser humano",
    "pt": "Uma Fantasia de Sapo para o Dia em que Você Quer uma Pausa de Ser Humano",
    "fr": "Un costume de grenouille pour le jour où l'on veut une pause d'être humain",
    "de": "Ein Froschkostüm für den Tag, an dem man eine Pause vom Menschsein will",
    "th": "ชุดกบสำหรับวันที่อยากพักจากการเป็นมนุษย์"
   },
   "line": {
    "ko": "잠깐만 사람 노릇을 쉬고 싶은 마음을 이해합니다.",
    "en": "I understand wanting to pause being a person, just briefly.",
    "zh": "我理解你想暂时歇一歇做人的心情。",
    "ja": "少しだけ人間をお休みしたい気持ち、わかります。",
    "es": "Entiendo las ganas de dejar de ser persona, solo un momento.",
    "pt": "Eu entendo querer pausar o ser pessoa, só por um instante.",
    "fr": "Je comprends l'envie de mettre l'humanité en pause, juste un instant.",
    "de": "Ich verstehe den Wunsch, das Menschsein kurz anzuhalten.",
    "th": "ผมเข้าใจความอยากหยุดเป็นคนสักแป๊บ"
   },
   "origName": "남성용 개구리 코스튬 점프수트",
   "url": "https://temu.to/k/gxw9wtqhdbz",
   "urlByLang": {},
   "img": "assets/products/59.webp",
   "prior": 0.201,
   "shop": "temu",
   "need": "role"
  },
  {
   "id": 60,
   "tags": [
    "costume",
    "wearable",
    "alien",
    "headwear",
    "funny_face",
    "living",
    "hide"
   ],
   "name": {
    "ko": "머리가 갑자기 외계로 길어지는 모자",
    "en": "A Cap That Stretches Your Head Into Outer Space",
    "zh": "把脑袋一下拉长到外太空的帽子",
    "ja": "頭が突然宇宙規模に伸びる帽子",
    "es": "Un gorro que estira tu cabeza hasta el espacio exterior",
    "pt": "Um Boné que Estica Sua Cabeça até o Espaço Sideral",
    "fr": "Une casquette qui étire votre tête jusqu'à l'espace",
    "de": "Eine Mütze, die Ihren Kopf bis ins All dehnt",
    "th": "หมวกแก๊ปที่ยืดหัวคุณไปถึงอวกาศ"
   },
   "line": {
    "ko": "머리카락 없는 자신을 상상하고도 웃을 수 있는 분이시군요.",
    "en": "You can imagine yourself bald and still laugh about it.",
    "zh": "你是想象自己没头发也能笑出来的人。",
    "ja": "髪のない自分を想像しても笑える方ですね。",
    "es": "Puedes imaginarte sin pelo y aun así reírte.",
    "pt": "Você consegue se imaginar careca e ainda rir disso.",
    "fr": "Vous pouvez vous imaginer chauve et en rire quand même.",
    "de": "Sie können sich glatzköpfig vorstellen und trotzdem darüber lachen.",
    "th": "คุณจินตนาการตัวเองหัวล้านแล้วยังขำได้"
   },
   "origName": "높은 대머리 모자 외계인 머리 덮개",
   "url": "https://temu.to/k/grr3q4u6fl7",
   "urlByLang": {},
   "img": "assets/products/60.webp",
   "prior": 0.737,
   "shop": "temu"
  },
  {
   "id": 61,
   "tags": [
    "sound",
    "bird",
    "animal",
    "living",
    "useful",
    "outdoor",
    "tiny"
   ],
   "name": {
    "ko": "불면 새가 대답해주는 작은 호루라기",
    "en": "A Tiny Whistle That Makes Birds Answer",
    "zh": "一吹就有鸟回答的小哨子",
    "ja": "吹くと鳥が答えてくれる小さな笛",
    "es": "Un silbatito al que los pájaros responden",
    "pt": "Um Apitinho que Faz os Pássaros Responderem",
    "fr": "Un petit sifflet qui fait répondre les oiseaux",
    "de": "Eine winzige Pfeife, auf die Vögel antworten",
    "th": "นกหวีดจิ๋วที่ทำให้นกตอบกลับ"
   },
   "line": {
    "ko": "새와 이야기할 수 있다고 은근히 믿어오셨군요.",
    "en": "You have quietly believed you could talk to birds.",
    "zh": "你一直暗暗相信自己能和鸟说话。",
    "ja": "鳥と話せると、ひそかに信じてこられたのですね。",
    "es": "Has creído en silencio que podías hablar con los pájaros.",
    "pt": "Você acredita em silêncio que poderia conversar com os pássaros.",
    "fr": "Vous avez discrètement cru pouvoir parler aux oiseaux.",
    "de": "Sie haben still geglaubt, Sie könnten mit Vögeln sprechen.",
    "th": "คุณเชื่อเงียบ ๆ ว่าคุยกับนกได้"
   },
   "origName": "매직 새소리 호루라기",
   "url": "https://temu.to/k/gonz508bf8l",
   "urlByLang": {},
   "img": "assets/products/61.webp",
   "prior": 1.508,
   "shop": "temu",
   "need": "sound"
  },
  {
   "id": 62,
   "tags": [
    "plush",
    "alien",
    "cute",
    "living",
    "funny_face"
   ],
   "name": {
    "ko": "회색 생물과 더 작은 회색 생물",
    "en": "A Grey Creature and an Even Smaller Grey Creature",
    "zh": "灰色的生物和更小的灰色生物",
    "ja": "灰色の生き物と、もっと小さい灰色の生き物",
    "es": "Una criatura gris y otra aún más pequeña",
    "pt": "Uma Criatura Cinza e uma Criatura Cinza Ainda Menor",
    "fr": "Une créature grise et une créature grise encore plus petite",
    "de": "Ein graues Wesen und ein noch kleineres graues Wesen",
    "th": "สิ่งมีชีวิตสีเทากับสิ่งมีชีวิตสีเทาที่เล็กกว่า"
   },
   "line": {
    "ko": "정체 모를 존재를 일단 안아주는 분이시군요.",
    "en": "You are someone who hugs the unknown first.",
    "zh": "你是会先抱一抱来历不明的存在的人。",
    "ja": "正体不明の存在を、とりあえず抱きしめる方ですね。",
    "es": "Eres de los que abrazan primero a lo desconocido.",
    "pt": "Você é do tipo que abraça o desconhecido primeiro.",
    "fr": "Vous êtes du genre à serrer l'inconnu dans vos bras d'abord.",
    "de": "Sie umarmen das Unbekannte zuerst.",
    "th": "คุณเป็นคนที่กอดสิ่งไม่รู้จักก่อน"
   },
   "origName": "지아추프와 작은 외계인 몬스터 인형 세트",
   "url": "https://temu.to/k/gp2vm3y0gni",
   "urlByLang": {},
   "img": "assets/products/62.webp",
   "prior": 0.773,
   "shop": "temu"
  },
  {
   "id": 63,
   "tags": [
    "cat",
    "animal",
    "living",
    "statue",
    "zen",
    "decor",
    "god",
    "egypt"
   ],
   "name": {
    "ko": "수수께끼를 내고 대답을 기다리는 스핑크스 고양이",
    "en": "A Sphinx Cat Who Poses a Riddle and Waits",
    "zh": "抛出谜语并等你回答的狮身猫",
    "ja": "謎を出して答えを待つスフィンクスの猫",
    "es": "Un gato esfinge que plantea un enigma y espera",
    "pt": "Um Gato Esfinge que Propõe um Enigma e Espera",
    "fr": "Un chat sphinx qui pose une énigme et attend",
    "de": "Eine Sphinx-Katze, die ein Rätsel stellt und wartet",
    "th": "แมวสฟิงซ์ที่ตั้งปริศนาแล้วรอ"
   },
   "line": {
    "ko": "대답 없이 기다려주는 존재에게 마음이 갑니다.",
    "en": "You are drawn to those who wait patiently without an answer.",
    "zh": "你会被不催促、只是等待的存在吸引。",
    "ja": "答えを急かさずに待ってくれる存在に、心が向きます。",
    "es": "Te atraen quienes esperan sin pedir respuesta.",
    "pt": "Você se atrai por quem espera com paciência, sem resposta.",
    "fr": "Vous êtes attiré(e) par ceux qui attendent patiemment sans réponse.",
    "de": "Sie fühlen sich zu denen hingezogen, die geduldig ohne Antwort warten.",
    "th": "คุณถูกดึงดูดไปหาคนที่รออย่างอดทนโดยไม่มีคำตอบ"
   },
   "origName": "사실적인 스핑크스 고양이 조각상",
   "url": "https://temu.to/k/gl9sal8yrfy",
   "urlByLang": {},
   "img": "assets/products/63.webp",
   "prior": 0.535,
   "shop": "temu",
   "need": "wonder"
  },
  {
   "id": 64,
   "tags": [
    "statue",
    "west",
    "tough",
    "decor",
    "human",
    "job"
   ],
   "name": {
    "ko": "책상 위를 묵묵히 지키는 중세 기사",
    "en": "A Medieval Knight Silently Guarding Your Desk",
    "zh": "默默守着书桌的中世纪骑士",
    "ja": "机の上を黙って守る中世の騎士",
    "es": "Un caballero medieval que vigila tu escritorio en silencio",
    "pt": "Um Cavaleiro Medieval Guardando a Sua Mesa em Silêncio",
    "fr": "Un chevalier médiéval qui garde silencieusement votre bureau",
    "de": "Ein mittelalterlicher Ritter, der still Ihren Schreibtisch bewacht",
    "th": "อัศวินยุคกลางเฝ้าโต๊ะคุณเงียบ ๆ"
   },
   "line": {
    "ko": "아무도 시키지 않았는데 지켜주는 존재에게 약하시군요.",
    "en": "You're weak for guardians nobody asked to guard.",
    "zh": "没人拜托，却默默守护你的存在，最让你心软。",
    "ja": "頼んでもいないのに守ってくれる存在に弱い方ですね。",
    "es": "Te ablandan quienes te protegen sin que nadie se lo pida.",
    "pt": "Você tem fraqueza por guardiões que ninguém pediu.",
    "fr": "Vous craquez pour les gardiens que personne n'a demandés.",
    "de": "Sie sind schwach für Wächter, die niemand bestellt hat.",
    "th": "คุณใจอ่อนให้ผู้พิทักษ์ที่ไม่มีใครขอ"
   },
   "origName": "드래곤 플라잉 래빗 댄스 중세 기사 데스크탑 장식품",
   "url": "https://s.click.aliexpress.com/e/_c3hCQEWJ",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/64.webp",
   "prior": 0.886
  },
  {
   "id": 65,
   "tags": [
    "east",
    "craft",
    "useful",
    "scary",
    "decor",
    "tiny"
   ],
   "name": {
    "ko": "이름을 새기면 괴수가 지켜주는 도장",
    "en": "A Name Seal Guarded by a Carved Beast",
    "zh": "刻上名字就有怪兽守护的印章",
    "ja": "名前を刻むと怪獣が守ってくれる印章",
    "es": "Un sello con tu nombre custodiado por una bestia tallada",
    "pt": "Um Selo de Nome Guardado por uma Fera Entalhada",
    "fr": "Un sceau à nom gardé par une bête sculptée",
    "de": "Ein Namenssiegel, bewacht von einem geschnitzten Untier",
    "th": "ตราประทับชื่อที่มีสัตว์แกะสลักเฝ้า"
   },
   "line": {
    "ko": "이름 하나 찍는 일에도 의식을 치르고 싶은 분이시군요.",
    "en": "You like turning even stamping your name into a ritual.",
    "zh": "连盖个名字，你也想弄得像一场仪式。",
    "ja": "名前を押すだけでも儀式にしたい方ですね。",
    "es": "Quieres convertir hasta el gesto de sellar tu nombre en un ritual.",
    "pt": "Você gosta de transformar até carimbar o próprio nome em ritual.",
    "fr": "Vous aimez faire de la simple signature de votre nom un rituel.",
    "de": "Sie machen selbst das Stempeln Ihres Namens gern zum Ritual.",
    "th": "คุณชอบเปลี่ยนแม้การประทับชื่อให้เป็นพิธี"
   },
   "origName": "쇼산석 맞춤 이름 인장 각인 스탬프",
   "url": "https://s.click.aliexpress.com/e/_c4kxBzBV",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/65.webp",
   "prior": 1.752,
   "need": "guard"
  },
  {
   "id": 66,
   "tags": [
    "east",
    "statue",
    "scary",
    "decor",
    "tough",
    "metal"
   ],
   "name": {
    "ko": "아무도 이기지 못할 것 같은 귀면 투구",
    "en": "A Fearsome Demon-Faced Helmet Nobody Could Beat",
    "zh": "感觉谁也打不赢的鬼面头盔",
    "ja": "誰にも負けなさそうな鬼面の兜",
    "es": "Un casco de rostro demoníaco al que nadie parece poder vencer",
    "pt": "Um Elmo Temível com Cara de Demônio que Ninguém Venceu",
    "fr": "Un casque à tête de démon terrifiant que personne n'a pu battre",
    "de": "Ein furchterregender Dämonenhelm, den niemand besiegen konnte",
    "th": "หมวกเกราะหน้าปีศาจสุดน่ากลัวที่ไม่มีใครเอาชนะได้"
   },
   "line": {
    "ko": "무서운 얼굴 뒤에 숨어 있을 때 마음이 놓이는 분이시군요.",
    "en": "You feel safest hiding behind a frightening face.",
    "zh": "躲在可怕的面孔后面，你才觉得安心。",
    "ja": "怖い顔の後ろに隠れていると落ち着く方ですね。",
    "es": "Te sientes a salvo escondido tras una cara que asusta.",
    "pt": "Você se sente mais seguro(a) escondido(a) atrás de um rosto assustador.",
    "fr": "Vous vous sentez plus en sécurité caché(e) derrière un visage effrayant.",
    "de": "Hinter einem furchterregenden Gesicht fühlen Sie sich am sichersten.",
    "th": "คุณรู้สึกปลอดภัยที่สุดเมื่อซ่อนหลังใบหน้าน่ากลัว"
   },
   "origName": "고대 헬멧 완성 모델 가정 장식 공예품",
   "url": "https://s.click.aliexpress.com/e/_c3xtXtcn",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/66.webp",
   "prior": 1.173
  },
  {
   "id": 67,
   "tags": [
    "animal",
    "living",
    "calendar",
    "wall",
    "funny_face",
    "useful"
   ],
   "name": {
    "ko": "열두 달 내내 셀카를 찍는 못생긴 동물들",
    "en": "Ugly Animals Taking Selfies All Twelve Months",
    "zh": "十二个月天天自拍的丑萌动物",
    "ja": "十二か月ずっと自撮りする不細工な動物たち",
    "es": "Animales feos haciéndose selfies los doce meses",
    "pt": "Animais Feios Tirando Selfies nos Doze Meses",
    "fr": "Des animaux moches qui se prennent en selfie les douze mois",
    "de": "Hässliche Tiere, die sich zwölf Monate lang selbst fotografieren",
    "th": "สัตว์น่าเกลียดเซลฟีกันทั้งสิบสองเดือน"
   },
   "line": {
    "ko": "못생긴 얼굴이 매달 말을 걸어주길 바라는 분이시군요.",
    "en": "You want a funny face to greet you every month.",
    "zh": "你希望每个月都有一张丑萌的脸跟你打招呼。",
    "ja": "毎月、変な顔に話しかけてほしい方ですね。",
    "es": "Quieres que una cara graciosa te salude cada mes.",
    "pt": "Você quer que uma cara engraçada te cumprimente todo mês.",
    "fr": "Vous voulez qu'une bouille drôle vous salue chaque mois.",
    "de": "Sie wollen jeden Monat von einem lustigen Gesicht begrüßt werden.",
    "th": "คุณอยากให้ใบหน้าตลกทักทายคุณทุกเดือน"
   },
   "origName": "2027 못생긴 동물들의 셀카 벽걸이 달력",
   "url": "https://s.click.aliexpress.com/e/_c3h32qg7",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/67.webp",
   "prior": 3.077
  },
  {
   "id": 68,
   "tags": [
    "plush",
    "animal",
    "living",
    "scary",
    "cute",
    "season"
   ],
   "name": {
    "ko": "거꾸로 매달려도 당당한 박쥐 인형",
    "en": "A Plush Bat Who Hangs Upside Down with Pride",
    "zh": "倒挂也理直气壮的蝙蝠玩偶",
    "ja": "逆さまでも堂々としたコウモリのぬいぐるみ",
    "es": "Un murciélago de peluche que cuelga boca abajo con orgullo",
    "pt": "Uma Pelúcia de Morcego que Fica de Cabeça para Baixo com Orgulho",
    "fr": "Une peluche chauve-souris qui pend la tête en bas avec fierté",
    "de": "Ein Plüsch-Fledermaus, die stolz kopfüber hängt",
    "th": "ตุ๊กตาค้างคาวที่ห้อยหัวอย่างภูมิใจ"
   },
   "line": {
    "ko": "세상을 뒤집어 보는 시간이 필요한 분이시군요.",
    "en": "You sometimes need time to see the world upside down.",
    "zh": "你偶尔需要把世界倒过来看一会儿。",
    "ja": "世界を逆さまに見る時間が必要な方ですね。",
    "es": "A veces necesitas ver el mundo del revés.",
    "pt": "Às vezes você precisa de tempo para ver o mundo de cabeça para baixo.",
    "fr": "Il vous faut parfois du temps pour voir le monde à l'envers.",
    "de": "Manchmal brauchen Sie Zeit, die Welt auf dem Kopf zu sehen.",
    "th": "บางครั้งคุณต้องการเวลามองโลกกลับหัว"
   },
   "origName": "박쥐 플러시 장난감 뱀파이어 박쥐 인형",
   "url": "https://s.click.aliexpress.com/e/_c3vhc2U3",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/68.webp",
   "prior": 4.143
  },
  {
   "id": 69,
   "tags": [
    "cat",
    "animal",
    "living",
    "ceramic",
    "funny_face",
    "useful",
    "food"
   ],
   "name": {
    "ko": "콧물처럼 말차를 흘리는 고양이 사발",
    "en": "A Cat Bowl That Drips Matcha Like a Runny Nose",
    "zh": "像流鼻涕一样淌抹茶的猫咪碗",
    "ja": "鼻水のように抹茶をたらす猫の器",
    "es": "Un cuenco de gato que gotea matcha como un moco",
    "pt": "Uma Tigela de Gato que Pinga Matcha como Nariz Escorrendo",
    "fr": "Un bol à chat qui goutte de matcha comme un nez qui coule",
    "de": "Ein Katzennapf, der Matcha tropft wie eine laufende Nase",
    "th": "ชามแมวที่หยดมัทฉะเหมือนน้ำมูกไหล"
   },
   "line": {
    "ko": "품위와 엉망 사이에서 편안해지는 분이시군요.",
    "en": "You relax somewhere between elegance and a mess.",
    "zh": "你在体面和狼狈之间反而最自在。",
    "ja": "上品さと散らかりの間で落ち着く方ですね。",
    "es": "Te sientes a gusto entre la elegancia y el desastre.",
    "pt": "Você relaxa em algum ponto entre a elegância e a bagunça.",
    "fr": "Vous vous détendez quelque part entre l'élégance et le désordre.",
    "de": "Sie entspannen irgendwo zwischen Eleganz und Chaos.",
    "th": "คุณผ่อนคลายอยู่ระหว่างความสง่างามกับความเละ"
   },
   "origName": "고양이 모양 말차 볼 세라믹 따르는 컵",
   "url": "https://s.click.aliexpress.com/e/_c33XB7ST",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/69.webp",
   "prior": 4.493
  },
  {
   "id": 70,
   "tags": [
    "human",
    "living",
    "toy",
    "funny_face",
    "decor"
   ],
   "name": {
    "ko": "빨간 팬티 한 장으로 당당한 말랑 아저씨",
    "en": "A Squishy Man Confident in Nothing but Red Briefs",
    "zh": "只穿一条红内裤也很坦荡的软萌大叔",
    "ja": "赤いパンツ一枚で堂々としたぷにぷにおじさん",
    "es": "Un hombre blandito muy digno con solo unos calzoncillos rojos",
    "pt": "Um Homem Molenga Confiante em Nada Além de uma Cueca Vermelha",
    "fr": "Un bonhomme mou qui n'a confiance qu'en son slip rouge",
    "de": "Ein Wabbelmann, der auf nichts als seine rote Unterhose vertraut",
    "th": "ชายตัวนิ่มที่มั่นใจแค่กางเกงในแดง"
   },
   "line": {
    "ko": "체면을 내려놓은 존재에게 은근히 위로받는 분이시군요.",
    "en": "You find quiet comfort in someone who dropped all pretense.",
    "zh": "你会从放下体面的存在身上悄悄获得安慰。",
    "ja": "体面を手放した存在に、ひそかに慰められる方ですね。",
    "es": "Te consuela en secreto quien ha soltado las apariencias.",
    "pt": "Você acha um conforto discreto em quem largou toda a pose.",
    "fr": "Vous trouvez un réconfort discret chez quelqu'un qui a lâché toute prétention.",
    "de": "Sie finden stillen Trost bei jemandem, der jede Fassade fallen ließ.",
    "th": "คุณพบความสบายใจเงียบ ๆ ในคนที่ทิ้งความเสแสร้งทั้งหมด"
   },
   "origName": "스트레스 해소용 말랑 장난감 큰 캐릭터",
   "url": "https://s.click.aliexpress.com/e/_c3S3eEtl",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/70.webp",
   "prior": 1.51
  },
  {
   "id": 71,
   "tags": [
    "scary",
    "anatomy",
    "living",
    "decor",
    "statue",
    "alien"
   ],
   "name": {
    "ko": "손가락으로 기어 다니는 게",
    "en": "A Crab That Scuttles on Human Fingers",
    "zh": "用人类手指爬行的螃蟹",
    "ja": "人の指で這い回るカニ",
    "es": "Un cangrejo que se arrastra sobre dedos humanos",
    "pt": "Um Caranguejo que Anda nos Dedos Humanos",
    "fr": "Un crabe qui court sur les doigts humains",
    "de": "Eine Krabbe, die auf menschlichen Fingern krabbelt",
    "th": "ปูที่วิ่งบนนิ้วมือคน"
   },
   "line": {
    "ko": "징그러운 것에서 이상하게 안도하는 분이시군요.",
    "en": "Something about the creepy oddly reassures you.",
    "zh": "你会从毛骨悚然的东西里莫名获得安心。",
    "ja": "気味の悪いものに、なぜか安心する方ですね。",
    "es": "Lo repulsivo te tranquiliza de un modo extraño.",
    "pt": "Algo no arrepiante estranhamente tranquiliza você.",
    "fr": "Quelque chose dans le glauque vous rassure étrangement.",
    "de": "Irgendetwas am Gruseligen beruhigt Sie seltsamerweise.",
    "th": "บางอย่างในความขนลุกทำให้คุณอุ่นใจอย่างแปลก"
   },
   "origName": "수지 손가락 게 현실적인 공포 모델 동상",
   "url": "https://s.click.aliexpress.com/e/_c2xOQpIL",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/71.webp",
   "prior": 0.661
  },
  {
   "id": 72,
   "tags": [
    "sound",
    "scary",
    "useful",
    "skeleton",
    "decor",
    "metal"
   ],
   "name": {
    "ko": "한 번 불면 모두가 돌아보는 해골 호루라기",
    "en": "A Skull Whistle That Makes Everyone Turn Around",
    "zh": "一吹全场回头的骷髅哨",
    "ja": "ひと吹きで全員が振り返るドクロの笛",
    "es": "Un silbato de calavera que hace girar todas las cabezas",
    "pt": "Um Apito de Caveira que Faz Todo Mundo se Virar",
    "fr": "Un sifflet tête de mort qui fait se retourner tout le monde",
    "de": "Eine Totenkopfpfeife, nach der sich alle umdrehen",
    "th": "นกหวีดกะโหลกที่ทำให้ทุกคนหันมา"
   },
   "line": {
    "ko": "사람들이 깜짝 놀라는 순간을 은근히 기다리는 분이시군요.",
    "en": "You quietly wait for the moment people jump.",
    "zh": "你悄悄期待着别人被吓一跳的那一刻。",
    "ja": "人が飛び上がる瞬間を、こっそり待っている方ですね。",
    "es": "Esperas en secreto el momento en que todos se sobresaltan.",
    "pt": "Você espera em silêncio o momento em que as pessoas pulam.",
    "fr": "Vous attendez discrètement le moment où les gens sursautent.",
    "de": "Sie warten still auf den Moment, in dem die Leute hochfahren.",
    "th": "คุณรอเงียบ ๆ ให้ถึงตอนที่คนสะดุ้ง"
   },
   "origName": "아즈텍 데스 휘슬 할로윈 소리 소품",
   "url": "https://s.click.aliexpress.com/e/_c31kiPtZ",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/72.webp",
   "prior": 5.058,
   "need": "vent"
  },
  {
   "id": 73,
   "tags": [
    "funny_face",
    "ceramic",
    "toy",
    "scary",
    "decor"
   ],
   "name": {
    "ko": "여드름이 돋아난 청자 얼굴",
    "en": "A Celadon Face with Pimples",
    "zh": "冒出痘痘的青瓷脸",
    "ja": "ニキビができた青磁の顔",
    "es": "Una cara de celadón llena de granitos",
    "pt": "Um Rosto de Celadon com Espinhas",
    "fr": "Un visage en céladon avec des boutons",
    "de": "Ein Seladon-Gesicht mit Pickeln",
    "th": "หน้าเซลาดอนที่มีสิว"
   },
   "line": {
    "ko": "완벽하지 않은 얼굴을 만지작거리며 마음을 푸는 분이시군요.",
    "en": "You loosen up by fiddling with an imperfect face.",
    "zh": "你会摆弄一张不完美的脸来放松心情。",
    "ja": "完璧でない顔をいじりながら心をほぐす方ですね。",
    "es": "Te relajas toqueteando una cara imperfecta.",
    "pt": "Você relaxa mexendo num rosto imperfeito.",
    "fr": "Vous vous détendez en tripotant un visage imparfait.",
    "de": "Sie entspannen, indem Sie an einem unperfekten Gesicht herumspielen.",
    "th": "คุณผ่อนคลายด้วยการเล่นกับใบหน้าที่ไม่สมบูรณ์"
   },
   "origName": "여드름 제거 장난감 스트레스 해소",
   "url": "https://s.click.aliexpress.com/e/_c3xQvf5v",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/73.webp",
   "prior": 0.289,
   "need": "welcome"
  },
  {
   "id": 74,
   "tags": [
    "frog",
    "animal",
    "living",
    "ceramic",
    "zen",
    "east",
    "decor",
    "statue"
   ],
   "name": {
    "ko": "합장하고 차를 기다리는 청자 개구리",
    "en": "A Celadon Frog Praying While It Waits for Tea",
    "zh": "合掌等茶的青瓷青蛙",
    "ja": "合掌してお茶を待つ青磁のカエル",
    "es": "Una rana de celadón en oración esperando el té",
    "pt": "Um Sapo de Celadon Rezando Enquanto Espera o Chá",
    "fr": "Une grenouille en céladon qui prie en attendant le thé",
    "de": "Ein Seladon-Frosch, der betet, während er auf den Tee wartet",
    "th": "กบเซลาดอนสวดมนต์ระหว่างรอชา"
   },
   "line": {
    "ko": "서두르지 않는 존재 옆에서 숨이 쉬어지는 분이시군요.",
    "en": "You breathe easier next to someone in no hurry.",
    "zh": "待在不慌不忙的存在身边，你才呼吸得顺畅。",
    "ja": "急がない存在のそばで息ができる方ですね。",
    "es": "Respiras mejor junto a quien no tiene prisa.",
    "pt": "Você respira melhor ao lado de quem não tem pressa.",
    "fr": "Vous respirez mieux à côté de quelqu'un qui n'est pas pressé.",
    "de": "Neben jemandem ohne Eile atmen Sie leichter.",
    "th": "คุณหายใจโล่งขึ้นเมื่ออยู่ข้างคนที่ไม่รีบ"
   },
   "origName": "도자기 요가 양서류 조형물 징더전 공예품",
   "url": "https://s.click.aliexpress.com/e/_c3ukkPfd",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/74.webp",
   "prior": 1.215
  },
  {
   "id": 75,
   "tags": [
    "anatomy",
    "organ",
    "ceramic",
    "useful",
    "food",
    "decor"
   ],
   "name": {
    "ko": "머릿속을 그대로 마시는 뇌 머그컵",
    "en": "A Brain Mug for Drinking Straight from Your Thoughts",
    "zh": "把脑袋直接喝下去的大脑马克杯",
    "ja": "頭の中をそのまま飲む脳みそマグカップ",
    "es": "Una taza-cerebro para beberte los pensamientos",
    "pt": "Uma Caneca em Forma de Cérebro para Beber Direto dos Seus Pensamentos",
    "fr": "Une tasse cerveau pour boire directement vos pensées",
    "de": "Eine Gehirn-Tasse, um direkt aus Ihren Gedanken zu trinken",
    "th": "แก้วสมองสำหรับดื่มจากความคิดโดยตรง"
   },
   "line": {
    "ko": "생각이 너무 많은 날을 유머로 넘기는 분이시군요.",
    "en": "You get through overthinking days with humor.",
    "zh": "你用幽默度过想太多的日子。",
    "ja": "考えすぎる日をユーモアで乗り越える方ですね。",
    "es": "Superas los días de darle demasiadas vueltas con humor.",
    "pt": "Você atravessa os dias de pensamento demais com humor.",
    "fr": "Vous traversez les jours de trop-penser avec humour.",
    "de": "Sie überstehen Grübeltage mit Humor.",
    "th": "คุณผ่านวันคิดมากด้วยอารมณ์ขัน"
   },
   "origName": "세라믹 공포 테마 머그컵",
   "url": "https://s.click.aliexpress.com/e/_c3uTCvCR",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/75.webp",
   "prior": 7.054,
   "need": "cool"
  },
  {
   "id": 76,
   "tags": [
    "funny_face",
    "useful",
    "decor",
    "alien"
   ],
   "name": {
    "ko": "발로 밟아도 표정이 변하지 않는 배 얼굴 매트",
    "en": "A Pear-Faced Mat That Keeps Its Expression Even Underfoot",
    "zh": "踩上去表情也不变的梨脸地垫",
    "ja": "踏んでも表情が変わらない洋梨顔のマット",
    "es": "Un felpudo con cara de pera que no cambia de gesto ni pisado",
    "pt": "Um Capacho de Cara de Pera que Mantém a Expressão até Debaixo dos Pés",
    "fr": "Un tapis tête de poire qui garde son expression même sous les pieds",
    "de": "Eine Birnengesicht-Matte, die selbst unter den Füßen ihre Miene bewahrt",
    "th": "พรมหน้าลูกแพร์ที่คงสีหน้าแม้ถูกเหยียบ"
   },
   "line": {
    "ko": "무표정한 얼굴 앞에서 오히려 웃음이 나는 분이시군요.",
    "en": "A deadpan face somehow makes you laugh.",
    "zh": "面对一张面无表情的脸，你反而想笑。",
    "ja": "無表情の顔の前で、むしろ笑ってしまう方ですね。",
    "es": "Una cara inexpresiva te da risa.",
    "pt": "Uma cara impassível, por algum motivo, faz você rir.",
    "fr": "Un visage impassible vous fait rire, allez savoir pourquoi.",
    "de": "Ein ausdrucksloses Gesicht bringt Sie irgendwie zum Lachen.",
    "th": "หน้านิ่ง ๆ ทำให้คุณขำได้อย่างไรไม่รู้"
   },
   "origName": "이상한 배 모양 인간 얼굴 도어매트",
   "url": "https://s.click.aliexpress.com/e/_c3GFJfn9",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/76.webp",
   "prior": 3.123,
   "need": "laugh"
  },
  {
   "id": 77,
   "tags": [
    "plush",
    "human",
    "living",
    "funny_face",
    "toy",
    "craft"
   ],
   "name": {
    "ko": "내 얼굴을 얹은 구부러지는 인형",
    "en": "A Bendy Doll Wearing Your Own Face",
    "zh": "顶着我自己脸的可弯曲玩偶",
    "ja": "自分の顔をのせた曲がる人形",
    "es": "Un muñeco flexible con tu propia cara",
    "pt": "Uma Boneca Flexível com o Seu Próprio Rosto",
    "fr": "Une poupée articulée à votre visage",
    "de": "Eine biegsame Puppe mit Ihrem eigenen Gesicht",
    "th": "ตุ๊กตางอได้ที่ใส่หน้าของคุณเอง"
   },
   "line": {
    "ko": "나 자신을 장난감으로 만들 용기가 있는 분이시군요.",
    "en": "You have the nerve to turn yourself into a toy.",
    "zh": "你有把自己做成玩具的勇气。",
    "ja": "自分をおもちゃにできる勇気のある方ですね。",
    "es": "Tienes el valor de convertirte a ti mismo en juguete.",
    "pt": "Você tem coragem de se transformar num brinquedo.",
    "fr": "Vous avez le culot de vous transformer en jouet.",
    "de": "Sie haben den Mut, sich selbst in ein Spielzeug zu verwandeln.",
    "th": "คุณกล้าที่จะเปลี่ยนตัวเองเป็นของเล่น"
   },
   "origName": "구부릴 수 있는 봉제인형 맞춤 이미지 프린팅",
   "url": "https://s.click.aliexpress.com/e/_c3yZid5t",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/77.webp",
   "prior": 1.07,
   "need": "mirror"
  },
  {
   "id": 78,
   "tags": [
    "animal",
    "living",
    "cute",
    "funny_face",
    "tiny",
    "plush"
   ],
   "name": {
    "ko": "앞니 두 개로 버티는 땅다람쥐 키링",
    "en": "A Groundhog Keychain Holding On with Two Buck Teeth",
    "zh": "靠两颗门牙撑着的土拨鼠钥匙扣",
    "ja": "前歯二本でがんばるジリスのキーホルダー",
    "es": "Un llavero de marmota que se sostiene con dos dientes",
    "pt": "Um Chaveiro de Marmota que Se Agarra com Dois Dentões",
    "fr": "Un porte-clés marmotte qui s'accroche avec deux grandes dents",
    "de": "Ein Murmeltier-Schlüsselanhänger, der sich mit zwei Nagezähnen festhält",
    "th": "พวงกุญแจมาร์มอตที่เกาะแน่นด้วยฟันหน้าสองซี่"
   },
   "line": {
    "ko": "허술해 보이는 존재의 필사적인 표정에 약한 분이시군요.",
    "en": "You're weak for the desperate face of something clumsy.",
    "zh": "你对笨拙小家伙拼命的表情毫无抵抗力。",
    "ja": "不器用な存在の必死な顔に弱い方ですね。",
    "es": "Te derrite la cara desesperada de algo torpe.",
    "pt": "Você tem fraqueza pelo rosto desesperado de algo desajeitado.",
    "fr": "Vous craquez pour le visage désespéré de ce qui est maladroit.",
    "de": "Sie sind schwach für das verzweifelte Gesicht von etwas Tollpatschigem.",
    "th": "คุณใจอ่อนให้ใบหน้าสิ้นหวังของสิ่งซุ่มซ่าม"
   },
   "origName": "실감 나는 땅다람쥐 인형 펜던트 키링",
   "url": "https://s.click.aliexpress.com/e/_c34i7NwL",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/78.webp",
   "prior": 0.827
  },
  {
   "id": 79,
   "tags": [
    "human",
    "living",
    "statue",
    "funny_face",
    "decor",
    "craft"
   ],
   "name": {
    "ko": "코를 막고 서 있는 두 사람",
    "en": "Two Figures Pinching Their Noses",
    "zh": "捏着鼻子站着的两个人",
    "ja": "鼻をつまんで立つ二人",
    "es": "Dos figuras tapándose la nariz",
    "pt": "Duas Figuras Tapando o Nariz",
    "fr": "Deux figurines qui se pincent le nez",
    "de": "Zwei Figuren, die sich die Nase zuhalten",
    "th": "ตุ๊กตาสองตัวบีบจมูก"
   },
   "line": {
    "ko": "말하지 못한 불편함을 표정으로 나눠 갖고 싶은 분이시군요.",
    "en": "You'd like to share unspoken discomfort through a shared face.",
    "zh": "你想用表情分担那些没说出口的不舒服。",
    "ja": "言えない居心地の悪さを、表情で分かち合いたい方ですね。",
    "es": "Quieres compartir con un gesto la incomodidad que no dices.",
    "pt": "Você gostaria de dividir um desconforto calado por meio de um rosto em comum.",
    "fr": "Vous aimeriez partager un malaise silencieux à travers un visage commun.",
    "de": "Sie würden unausgesprochenes Unbehagen gern durch ein gemeinsames Gesicht teilen.",
    "th": "คุณอยากแบ่งปันความอึดอัดที่ไม่พูดออกมาผ่านใบหน้าเดียวกัน"
   },
   "origName": "코를 꼬집는 모습의 레진 조형물",
   "url": "https://s.click.aliexpress.com/e/_c3H9ok1d",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/79.webp",
   "prior": 0.85
  },
  {
   "id": 80,
   "tags": [
    "animal",
    "living",
    "alien",
    "cute",
    "tiny",
    "toy",
    "decor"
   ],
   "name": {
    "ko": "심해에서 올라온 동그란 생물 다섯 마리",
    "en": "Five Round Creatures Who Floated Up from the Deep Sea",
    "zh": "从深海浮上来的五只圆滚滚生物",
    "ja": "深海から上がってきた丸い生き物五匹",
    "es": "Cinco criaturas redondas salidas de las profundidades",
    "pt": "Cinco Criaturas Redondas que Subiram do Fundo do Mar",
    "fr": "Cinq créatures rondes remontées des abysses",
    "de": "Fünf runde Wesen, die aus der Tiefsee aufgestiegen sind",
    "th": "สิ่งมีชีวิตกลมห้าตัวที่ลอยขึ้นจากทะเลลึก"
   },
   "line": {
    "ko": "처음 보는 생물에게 이름부터 붙여주는 분이시군요.",
    "en": "You name a creature the moment you meet it.",
    "zh": "第一次见到新生物，你就先给它起名字。",
    "ja": "初めて見る生き物に、まず名前をつける方ですね。",
    "es": "Le pones nombre a una criatura nada más verla.",
    "pt": "Você dá nome a uma criatura assim que a conhece.",
    "fr": "Vous donnez un nom à une créature dès que vous la rencontrez.",
    "de": "Sie geben einem Wesen einen Namen, sobald Sie ihm begegnen.",
    "th": "คุณตั้งชื่อสิ่งมีชีวิตทันทีที่เจอ"
   },
   "origName": "발광 심해 동물 피규어 가샤폰 이상한 물고기",
   "url": "https://s.click.aliexpress.com/e/_c2RoDTfN",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/80.webp",
   "prior": 1.254
  },
  {
   "id": 81,
   "tags": [
    "toy",
    "human",
    "living",
    "cute",
    "funny_face"
   ],
   "name": {
    "ko": "속이 훤히 비치는 말랑한 투명 인간",
    "en": "A Squishy See-Through Little Person",
    "zh": "里外全透明的软乎乎透明人",
    "ja": "中まで透けて見えるぷにぷに透明人間",
    "es": "Un muñequito transparente y blandito",
    "pt": "Uma Pessoinha Molenga e Transparente",
    "fr": "Un petit personnage mou et transparent",
    "de": "Ein weiches, durchsichtiges Männchen",
    "th": "คนตัวเล็กนิ่ม ๆ โปร่งใส"
   },
   "line": {
    "ko": "숨기는 것 없이 말랑한 존재에게 마음이 풀리는 분이시군요.",
    "en": "You soften around anything squishy and hiding nothing.",
    "zh": "面对毫无隐藏、软乎乎的存在，你的心就化了。",
    "ja": "隠し事のないぷにぷにした存在に、心がほどける方ですね。",
    "es": "Te ablandas ante lo mullido que no esconde nada.",
    "pt": "Você amolece com qualquer coisa macia que não esconde nada.",
    "fr": "Vous fondez devant tout ce qui est mou et ne cache rien.",
    "de": "Bei allem Weichen, das nichts verbirgt, werden Sie weich.",
    "th": "คุณใจอ่อนต่อทุกอย่างที่นิ่มและไม่ปิดบังอะไร"
   },
   "origName": "스퀴시 투명 젤리 스퀴즈 장난감",
   "url": "https://s.click.aliexpress.com/e/_c3T5b8dV",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/81.webp",
   "prior": 1.044,
   "need": "comfort"
  },
  {
   "id": 82,
   "tags": [
    "food",
    "funny_face",
    "decor",
    "magic",
    "scary",
    "statue",
    "eyes"
   ],
   "name": {
    "ko": "눈이 하나 달린 노란 바나나",
    "en": "A Yellow Banana with a Single Eye",
    "zh": "只有一只眼睛的黄香蕉",
    "ja": "目が一つだけついた黄色いバナナ",
    "es": "Un plátano amarillo con un solo ojo",
    "pt": "Uma Banana Amarela com um Olho Só",
    "fr": "Une banane jaune à un seul œil",
    "de": "Eine gelbe Banane mit nur einem Auge",
    "th": "กล้วยสีเหลืองมีตาข้างเดียว"
   },
   "line": {
    "ko": "과일에게서 시선을 느끼는 것도 나쁘지 않은 분이시군요.",
    "en": "You don't mind being watched by your fruit.",
    "zh": "被水果盯着看，你也不觉得讨厌。",
    "ja": "果物に見つめられるのも悪くない方ですね。",
    "es": "No te molesta que te mire tu fruta.",
    "pt": "Você não se importa de ser observado(a) pela sua fruta.",
    "fr": "Cela ne vous dérange pas d'être observé(e) par votre fruit.",
    "de": "Es stört Sie nicht, von Ihrem Obst beobachtet zu werden.",
    "th": "คุณไม่ถือสาที่ผลไม้จ้องมอง"
   },
   "origName": "매직 바나나 수지 소품",
   "url": "https://s.click.aliexpress.com/e/_c3OCvmYb",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/82.webp",
   "prior": 0.326
  },
  {
   "id": 83,
   "tags": [
    "frog",
    "animal",
    "living",
    "funny_face",
    "ceramic",
    "decor",
    "statue"
   ],
   "name": {
    "ko": "눈이 튀어나온 초록 양서류 가족",
    "en": "A Bug-Eyed Green Amphibian Family",
    "zh": "眼睛鼓出来的绿色两栖一家",
    "ja": "目が飛び出した緑の両生類ファミリー",
    "es": "Una familia de anfibios verdes de ojos saltones",
    "pt": "Uma Família de Anfíbios Verdes de Olhos Esbugalhados",
    "fr": "Une famille d'amphibiens verts aux yeux exorbités",
    "de": "Eine Familie glubschäugiger grüner Amphibien",
    "th": "ครอบครัวสัตว์สะเทินน้ำสะเทินบกสีเขียวตาโปน"
   },
   "line": {
    "ko": "놀란 표정이 평소 얼굴인 존재에게 동질감을 느끼는 분이시군요.",
    "en": "You relate to anyone whose default face is surprise.",
    "zh": "你会对那些一脸惊讶就是日常的存在产生共鸣。",
    "ja": "驚いた顔が通常運転の存在に、親近感を覚える方ですね。",
    "es": "Te sientes identificado con quien tiene cara de sorpresa permanente.",
    "pt": "Você se identifica com quem tem a surpresa como cara padrão.",
    "fr": "Vous vous reconnaissez en ceux dont le visage par défaut est la surprise.",
    "de": "Sie fühlen sich denen verbunden, deren Standardgesicht Überraschung ist.",
    "th": "คุณเข้าใจทุกคนที่หน้าปกติคือตกใจ"
   },
   "origName": "만화 캐릭터 양서류 화분 창의적인 동물 조형물",
   "url": "https://s.click.aliexpress.com/e/_c3ldfexD",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/83.webp",
   "prior": 1.01,
   "need": "laugh"
  },
  {
   "id": 84,
   "tags": [
    "art",
    "decor",
    "useful",
    "illusion",
    "tiny"
   ],
   "name": {
    "ko": "꿈에서 본 듯한 이상한 스티커 예순네 장",
    "en": "Sixty-Four Strange Stickers Like Scenes from a Dream",
    "zh": "像梦里见过的六十四张奇怪贴纸",
    "ja": "夢で見たような奇妙なステッカー六十四枚",
    "es": "Sesenta y cuatro pegatinas raras como escenas de un sueño",
    "pt": "Sessenta e Quatro Adesivos Estranhos como Cenas de um Sonho",
    "fr": "Soixante-quatre drôles d'autocollants comme des scènes de rêve",
    "de": "Vierundsechzig seltsame Sticker wie Szenen aus einem Traum",
    "th": "สติกเกอร์แปลก ๆ หกสิบสี่แผ่นเหมือนฉากในฝัน"
   },
   "line": {
    "ko": "어디서 본 건지 모를 풍경에 이끌리는 분이시군요.",
    "en": "You're drawn to places you can't remember seeing.",
    "zh": "你被说不清在哪见过的风景吸引。",
    "ja": "どこで見たか分からない風景に惹かれる方ですね。",
    "es": "Te atraen paisajes que no recuerdas haber visto.",
    "pt": "Você se atrai por lugares de que não lembra ter visto.",
    "fr": "Vous êtes attiré(e) par des lieux dont vous ne vous souvenez pas les avoir vus.",
    "de": "Orte, an die Sie sich nicht erinnern, sie gesehen zu haben, ziehen Sie an.",
    "th": "คุณถูกดึงดูดไปหาที่ที่จำไม่ได้ว่าเคยเห็น"
   },
   "origName": "드림코어 스타일 SF 아트 스티커 세트 64개",
   "url": "https://s.click.aliexpress.com/e/_c38mAZ6T",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/84.webp",
   "prior": 7.445,
   "need": "wonder"
  },
  {
   "id": 85,
   "tags": [
    "scary",
    "alien",
    "living",
    "decor",
    "useful",
    "statue",
    "funny_face"
   ],
   "name": {
    "ko": "촉수로 화분을 끌어안은 괴물",
    "en": "A Tentacled Monster Hugging Its Plant Pot",
    "zh": "用触手抱着花盆的怪物",
    "ja": "触手で植木鉢を抱きしめる怪物",
    "es": "Un monstruo de tentáculos abrazando su maceta",
    "pt": "Um Monstro de Tentáculos Abraçando o Vaso de Planta",
    "fr": "Un monstre à tentacules qui serre son pot de plante",
    "de": "Ein Tentakelmonster, das seinen Blumentopf umarmt",
    "th": "สัตว์ประหลาดหนวดปลาหมึกกอดกระถางต้นไม้"
   },
   "line": {
    "ko": "초록 식물 옆에서도 서늘한 분위기를 놓지 않는 분이시군요.",
    "en": "Even next to greenery, you keep a little chill.",
    "zh": "即便在绿植旁边，你也保留着一丝凉意。",
    "ja": "緑の植物の隣でも、ひんやりした気配を手放さない方ですね。",
    "es": "Hasta junto a las plantas conservas un aire sombrío.",
    "pt": "Mesmo ao lado do verde, você mantém um pouco de arrepio.",
    "fr": "Même près de la verdure, vous gardez un petit frisson.",
    "de": "Selbst neben Grünzeug behalten Sie ein bisschen Gänsehaut.",
    "th": "แม้อยู่ข้างต้นไม้ คุณก็ยังขนลุกนิด ๆ"
   },
   "origName": "괴물 문어 촉수 레진 화분",
   "url": "https://s.click.aliexpress.com/e/_c3i07HB5",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/85.webp",
   "prior": 0.71,
   "need": "company"
  },
  {
   "id": 86,
   "tags": [
    "funny_face",
    "human",
    "living",
    "tiny",
    "decor",
    "ceramic",
    "east",
    "scary"
   ],
   "name": {
    "ko": "비명을 지르는 자사 얼굴 세 개",
    "en": "Three Purple-Clay Faces Screaming on Your Tea Tray",
    "zh": "茶盘上放声尖叫的三个紫砂脑袋",
    "ja": "茶盤の上で叫ぶ紫泥の顔三つ",
    "es": "Tres caritas de arcilla púrpura gritando sobre tu bandeja de té",
    "pt": "Três Carinhas de Argila Roxa Gritando na Bandeja de Chá",
    "fr": "Trois visages en argile pourpre qui hurlent sur votre plateau à thé",
    "de": "Drei Gesichter aus Purpurton, die auf Ihrem Teetablett schreien",
    "th": "ใบหน้าดินม่วงสามหน้าที่กรีดร้องบนถาดชา"
   },
   "line": {
    "ko": "조용한 찻상 위에서 대신 소리쳐줄 존재가 필요한 분이시군요.",
    "en": "You want someone to scream on your behalf over a quiet tea tray.",
    "zh": "你想有个替你在安静茶桌上大声尖叫的存在。",
    "ja": "静かな茶席で代わりに叫んでくれる存在がほしい方ですね。",
    "es": "Quieres a alguien que grite por ti sobre una bandeja de té tranquila.",
    "pt": "Você quer alguém que grite por você numa bandeja de chá tranquila.",
    "fr": "Vous voulez quelqu'un qui crie à votre place sur un plateau à thé tranquille.",
    "de": "Sie wünschen sich jemanden, der an Ihrer Stelle auf dem stillen Teetablett schreit.",
    "th": "คุณอยากมีใครสักคนกรีดร้องแทนคุณบนถาดชาที่เงียบสงบ"
   },
   "origName": "찻잔 장식용 못생긴 듯 귀여운 인간 머리 조각상",
   "url": "https://s.click.aliexpress.com/e/_c2zmAzjV",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/86.webp",
   "prior": 0.183,
   "need": "vent"
  },
  {
   "id": 87,
   "tags": [
    "plush",
    "god",
    "east",
    "cute",
    "funny_face",
    "zen"
   ],
   "name": {
    "ko": "배 속에 깨달음을 담아둔 회색 부처 인형",
    "en": "A Gray Plush Buddha Storing Enlightenment in Its Belly",
    "zh": "把顿悟装进肚子里的灰色佛像玩偶",
    "ja": "お腹に悟りをためた灰色の仏さまぬいぐるみ",
    "es": "Un Buda de peluche gris con la iluminación en la barriga",
    "pt": "Um Buda de Pelúcia Cinza que Guarda a Iluminação na Barriga",
    "fr": "Un Bouddha en peluche grise qui stocke l'illumination dans son ventre",
    "de": "Ein grauer Plüsch-Buddha, der die Erleuchtung im Bauch speichert",
    "th": "พระพุทธรูปตุ๊กตาเทาที่เก็บการรู้แจ้งไว้ในพุง"
   },
   "line": {
    "ko": "큰 배처럼 너그러운 존재에게 안기고 싶은 분이시군요.",
    "en": "You want to lean on someone generous as a big belly.",
    "zh": "你想靠在像大肚子一样宽厚的存在身上。",
    "ja": "大きなお腹のように寛大な存在に寄りかかりたい方ですね。",
    "es": "Quieres apoyarte en alguien tan generoso como una gran barriga.",
    "pt": "Você quer se apoiar em alguém generoso como uma barriga grande.",
    "fr": "Vous voulez vous appuyer sur quelqu'un de généreux comme un gros ventre.",
    "de": "Sie wollen sich an jemanden lehnen, der großzügig ist wie ein dicker Bauch.",
    "th": "คุณอยากพิงคนใจกว้างเหมือนพุงใหญ่"
   },
   "origName": "못생기고 귀여운 힐링 미륵불 플러시 인형",
   "url": "https://s.click.aliexpress.com/e/_c3xNEG6X",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/87.webp",
   "prior": 1.882
  },
  {
   "id": 88,
   "tags": [
    "plush",
    "animal",
    "living",
    "cute",
    "funny_face"
   ],
   "name": {
    "ko": "입꼬리가 처진 채로 세상을 이해한 심해어",
    "en": "A Deep-Sea Fish That Understood the World with a Droopy Mouth",
    "zh": "嘴角下垂却看透世界的深海鱼",
    "ja": "口角が下がったまま世の中を理解した深海魚",
    "es": "Un pez abisal que entendió el mundo con la boca caída",
    "pt": "Um Peixe de Águas Profundas que Entendeu o Mundo de Boca Caída",
    "fr": "Un poisson des abysses qui a compris le monde la bouche tombante",
    "de": "Ein Tiefseefisch, der die Welt mit hängenden Mundwinkeln verstand",
    "th": "ปลาทะเลลึกที่เข้าใจโลกด้วยปากตก"
   },
   "line": {
    "ko": "처진 표정에서 오히려 위안을 얻는 분이시군요.",
    "en": "A drooping face is oddly comforting to you.",
    "zh": "你反而从垮着的表情里获得安慰。",
    "ja": "垂れた表情に、かえって慰められる方ですね。",
    "es": "Una cara caída te consuela, curiosamente.",
    "pt": "Um rosto caído conforta você de um jeito estranho.",
    "fr": "Un visage tombant vous réconforte étrangement.",
    "de": "Ein hängendes Gesicht tröstet Sie seltsamerweise.",
    "th": "ใบหน้าตก ๆ ปลอบใจคุณได้อย่างแปลก"
   },
   "origName": "만화 큰 입 블롭피쉬 봉제인형 못난이 베개",
   "url": "https://s.click.aliexpress.com/e/_c2Q1KPOb",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/88.webp",
   "prior": 0.906
  },
  {
   "id": 89,
   "tags": [
    "prank",
    "useful",
    "funny_face",
    "decor"
   ],
   "name": {
    "ko": "침대 위에 놓인 방지턱 베개",
    "en": "A Speed Bump Pillow Laid Across Your Bed",
    "zh": "放在床上的减速带抱枕",
    "ja": "ベッドの上に置かれた減速帯クッション",
    "es": "Un cojín-resalto de velocidad sobre tu cama",
    "pt": "Um Travesseiro Quebra-Molas Atravessado na Sua Cama",
    "fr": "Un oreiller dos-d'âne posé en travers de votre lit",
    "de": "Ein Bremsschwellen-Kissen quer über Ihrem Bett",
    "th": "หมอนลูกระนาดพาดบนเตียงคุณ"
   },
   "line": {
    "ko": "일상의 과속을 장난으로 멈춰 세우고 싶은 분이시군요.",
    "en": "You want to slow down daily life with a prank.",
    "zh": "你想用恶作剧让日常的急速慢下来。",
    "ja": "日常の速度超過を、いたずらで止めたい方ですね。",
    "es": "Quieres frenar la prisa diaria con una broma.",
    "pt": "Você quer desacelerar o dia a dia com uma pegadinha.",
    "fr": "Vous voulez ralentir le quotidien avec une blague.",
    "de": "Sie wollen den Alltag mit einem Streich entschleunigen.",
    "th": "คุณอยากชะลอชีวิตประจำวันด้วยการแกล้ง"
   },
   "origName": "속도 감속 장치 모양 장난용 베개",
   "url": "https://s.click.aliexpress.com/e/_c3r0CSrD",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/89.webp",
   "prior": 2.694,
   "need": "trick"
  },
  {
   "id": 90,
   "tags": [
    "anatomy",
    "organ",
    "scary",
    "toy",
    "tiny"
   ],
   "name": {
    "ko": "꽉 쥘수록 생각이 새어 나오는 뇌 공",
    "en": "A Brain Ball That Leaks Thoughts the Harder You Squeeze",
    "zh": "越捏越会漏出想法的大脑球",
    "ja": "握るほど考えがにじみ出る脳みそボール",
    "es": "Una pelota-cerebro que suelta ideas cuanto más la aprietas",
    "pt": "Uma Bola de Cérebro que Vaza Pensamentos Quanto Mais Você Aperta",
    "fr": "Une balle cerveau qui laisse fuir les pensées quand on la serre",
    "de": "Ein Gehirnball, der Gedanken verliert, je fester man drückt",
    "th": "ลูกบอลสมองที่ปล่อยความคิดออกมาเมื่อบีบแรง"
   },
   "line": {
    "ko": "머리가 복잡한 날 손부터 바빠지는 분이시군요.",
    "en": "When your head is busy, your hands get busy too.",
    "zh": "脑子乱的日子，你的手先忙起来。",
    "ja": "頭が複雑な日は、まず手が忙しくなる方ですね。",
    "es": "Cuando tu cabeza está liada, tus manos se ponen a trabajar.",
    "pt": "Quando a cabeça está agitada, as mãos também ficam.",
    "fr": "Quand la tête s'agite, les mains s'agitent aussi.",
    "de": "Wenn der Kopf beschäftigt ist, werden auch die Hände beschäftigt.",
    "th": "เมื่อหัวยุ่ง มือก็ยุ่งตามไปด้วย"
   },
   "origName": "부드러운 고무 뇌 모양 스트레스볼",
   "url": "https://s.click.aliexpress.com/e/_c3IoSQlH",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/90.webp",
   "prior": 1.969,
   "need": "play"
  },
  {
   "id": 91,
   "tags": [
    "toy",
    "bird",
    "animal",
    "living",
    "magic",
    "illusion",
    "decor"
   ],
   "name": {
    "ko": "영원히 고개를 숙이며 물을 마시는 새",
    "en": "A Bird That Bows and Drinks Water Forever",
    "zh": "永远低头喝水的小鸟",
    "ja": "いつまでもおじぎをして水を飲む鳥",
    "es": "Un pájaro que bebe agua inclinándose eternamente",
    "pt": "Um Pássaro que se Curva e Bebe Água para Sempre",
    "fr": "Un oiseau qui s'incline et boit de l'eau pour toujours",
    "de": "Ein Vogel, der sich verbeugt und ewig Wasser trinkt",
    "th": "นกที่ก้มดื่มน้ำไม่หยุด"
   },
   "line": {
    "ko": "같은 행동을 끝없이 지켜보는 시간이 편한 분이시군요.",
    "en": "You find watching one motion on repeat restful.",
    "zh": "你觉得盯着同一个动作看个没完很舒服。",
    "ja": "同じ動きをずっと眺める時間が心地よい方ですね。",
    "es": "Mirar un mismo movimiento sin fin te resulta relajante.",
    "pt": "Você acha relaxante ver um único movimento se repetir.",
    "fr": "Vous trouvez reposant de regarder un seul mouvement se répéter.",
    "de": "Sie finden es erholsam, eine einzige Bewegung sich wiederholen zu sehen.",
    "th": "คุณพบว่าการดูการเคลื่อนไหวเดียวซ้ำ ๆ ทำให้ผ่อนคลาย"
   },
   "origName": "음주하는 새 무지개 깜빡이는 유리잔 행운의 새",
   "url": "https://s.click.aliexpress.com/e/_c3y7uzJl",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/91.webp",
   "prior": 3.932,
   "need": "cool"
  },
  {
   "id": 92,
   "tags": [
    "scary",
    "anatomy",
    "useful",
    "decor",
    "funny_face",
    "tiny",
    "eyes"
   ],
   "name": {
    "ko": "클립을 쥐고 당신을 바라보는 눈알",
    "en": "An Eyeball That Holds Your Paperclips and Watches You",
    "zh": "握着回形针盯着你的眼球",
    "ja": "クリップを握ってあなたを見つめる目玉",
    "es": "Un ojo que sujeta tus clips y te mira",
    "pt": "Um Olho que Guarda Seus Clipes e Vigia Você",
    "fr": "Un globe oculaire qui garde vos trombones et vous observe",
    "de": "Ein Augapfel, der Ihre Büroklammern hält und Sie beobachtet",
    "th": "ลูกตาที่ถือคลิปหนีบกระดาษและจ้องคุณ"
   },
   "line": {
    "ko": "누군가 지켜보는 듯한 기분이 은근히 든든한 분이시군요.",
    "en": "Being quietly watched oddly reassures you.",
    "zh": "被人默默注视的感觉，对你来说居然有点踏实。",
    "ja": "誰かに見守られている感じが、なぜか心強い方ですね。",
    "es": "Que te vigilen en silencio te da una extraña tranquilidad.",
    "pt": "Ser observado(a) em silêncio estranhamente tranquiliza você.",
    "fr": "Être observé(e) en silence vous rassure étrangement.",
    "de": "Still beobachtet zu werden beruhigt Sie seltsamerweise.",
    "th": "การถูกมองเงียบ ๆ ทำให้คุณอุ่นใจอย่างแปลก"
   },
   "origName": "페이퍼클립 스탠드 레트로 눈알 장식품",
   "url": "https://s.click.aliexpress.com/e/_c45hNnPN",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/92.webp",
   "prior": 0.851
  },
  {
   "id": 93,
   "tags": [
    "human",
    "living",
    "statue",
    "decor",
    "funny_face",
    "tiny",
    "west",
    "job"
   ],
   "name": {
    "ko": "청진기를 목에 건 채 대기 중인 미니 의사",
    "en": "A Mini Doctor Waiting with a Stethoscope Around the Neck",
    "zh": "脖子挂着听诊器待命的迷你医生",
    "ja": "聴診器を首にかけて待機中のミニ先生",
    "es": "Un mini médico en espera con el estetoscopio al cuello",
    "pt": "Um Minimédico de Estetoscópio no Pescoço, Esperando",
    "fr": "Un mini-médecin qui attend, stéthoscope autour du cou",
    "de": "Ein Mini-Arzt, der mit Stethoskop um den Hals wartet",
    "th": "หมอจิ๋วรออยู่พร้อมหูฟังคล้องคอ"
   },
   "line": {
    "ko": "누군가 괜찮냐고 물어봐 주길 기다리는 분이시군요.",
    "en": "You're waiting for someone to ask if you're okay.",
    "zh": "你在等一个人问你一句“还好吗”。",
    "ja": "誰かに「大丈夫？」と聞いてほしい方ですね。",
    "es": "Esperas a que alguien te pregunte si estás bien.",
    "pt": "Você espera que alguém pergunte se você está bem.",
    "fr": "Vous attendez que quelqu'un vous demande si ça va.",
    "de": "Sie warten darauf, dass jemand fragt, ob es Ihnen gut geht.",
    "th": "คุณรอให้ใครสักคนถามว่าโอเคไหม"
   },
   "origName": "재미있는 의사/간호사 피규어 청진기",
   "url": "https://s.click.aliexpress.com/e/_c3HOa1f9",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/93.webp",
   "prior": 0.828,
   "need": "comfort"
  },
  {
   "id": 94,
   "tags": [
    "human",
    "living",
    "statue",
    "decor",
    "tough",
    "tiny",
    "funny_face",
    "job"
   ],
   "name": {
    "ko": "드릴과 전구를 들고 서 있는 전기 기술자",
    "en": "An Electrician Standing with a Drill and a Light Bulb",
    "zh": "拿着电钻和灯泡站着的电工",
    "ja": "ドリルと電球を持って立つ電気技師",
    "es": "Un electricista con taladro y bombilla",
    "pt": "Um Eletricista Parado com Furadeira e Lâmpada",
    "fr": "Un électricien debout avec une perceuse et une ampoule",
    "de": "Ein Elektriker mit Bohrmaschine und Glühbirne",
    "th": "ช่างไฟยืนถือสว่านกับหลอดไฟ"
   },
   "line": {
    "ko": "맡기면 해결해줄 것 같은 존재가 곁에 있길 바라는 분이시군요.",
    "en": "You like having someone who'd fix things standing nearby.",
    "zh": "你希望身边有个“交给他就行”的存在。",
    "ja": "任せれば何とかしてくれそうな存在がそばにほしい方ですね。",
    "es": "Te gusta tener cerca a alguien que lo arregle todo.",
    "pt": "Você gosta de ter por perto alguém que consertaria as coisas.",
    "fr": "Vous aimez avoir près de vous quelqu'un qui réparerait les choses.",
    "de": "Sie mögen es, jemanden in der Nähe zu haben, der Dinge reparieren würde.",
    "th": "คุณชอบมีคนที่พร้อมซ่อมของยืนอยู่ใกล้ ๆ"
   },
   "origName": "재미있는 전기 기술자 피규어 드릴 전구",
   "url": "https://s.click.aliexpress.com/e/_c37KCyAn",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/94.webp",
   "prior": 0.35,
   "need": "fix"
  },
  {
   "id": 95,
   "tags": [
    "human",
    "living",
    "ceramic",
    "statue",
    "decor",
    "west",
    "funny_face",
    "costume"
   ],
   "name": {
    "ko": "웃음을 멈출 줄 모르는 도자기 광대",
    "en": "A Porcelain Clown Who Can't Stop Laughing",
    "zh": "停不下来笑的陶瓷小丑",
    "ja": "笑いが止まらない陶器のピエロ",
    "es": "Un payaso de porcelana que no puede dejar de reír",
    "pt": "Um Palhaço de Porcelana que Não Consegue Parar de Rir",
    "fr": "Un clown en porcelaine qui n'arrête pas de rire",
    "de": "Ein Porzellan-Clown, der nicht aufhören kann zu lachen",
    "th": "ตัวตลกกระเบื้องที่หัวเราะไม่หยุด"
   },
   "line": {
    "ko": "웃는 얼굴 뒤가 궁금해지는 분이시군요.",
    "en": "You wonder what's behind a laughing face.",
    "zh": "你总会好奇笑脸背后是什么。",
    "ja": "笑顔の裏が気になってしまう方ですね。",
    "es": "Te intriga lo que hay detrás de una cara sonriente.",
    "pt": "Você se pergunta o que há por trás de um rosto que ri.",
    "fr": "Vous vous demandez ce qu'il y a derrière un visage qui rit.",
    "de": "Sie fragen sich, was hinter einem lachenden Gesicht steckt.",
    "th": "คุณสงสัยว่าอะไรอยู่หลังใบหน้าที่หัวเราะ"
   },
   "origName": "서커스 세라믹 웃는 광대 인형 장식품",
   "url": "https://s.click.aliexpress.com/e/_c3VYIj6x",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/95.webp",
   "prior": 0.696
  },
  {
   "id": 96,
   "tags": [
    "human",
    "living",
    "statue",
    "decor",
    "west",
    "funny_face",
    "season"
   ],
   "name": {
    "ko": "불이 들어오는 장난기 많은 산타",
    "en": "A Mischievous Santa That Lights Up",
    "zh": "会亮灯的调皮圣诞老人",
    "ja": "明かりがともるいたずら好きなサンタ",
    "es": "Un Papá Noel travieso que se ilumina",
    "pt": "Um Papai Noel Travesso que Acende",
    "fr": "Un Père Noël espiègle qui s'allume",
    "de": "Ein frecher Weihnachtsmann, der leuchtet",
    "th": "ซานต้าจอมซนที่ติดไฟได้"
   },
   "line": {
    "ko": "계절이 지나도 장난기를 간직하는 분이시군요.",
    "en": "You keep your playfulness long after the season ends.",
    "zh": "节日过了，你依然留着那份顽皮。",
    "ja": "季節が過ぎても遊び心を手放さない方ですね。",
    "es": "Conservas la picardía mucho después de la temporada.",
    "pt": "Você mantém o espírito brincalhão muito depois da época.",
    "fr": "Vous gardez votre côté joueur bien après la saison.",
    "de": "Sie bewahren Ihre Verspieltheit lange über die Saison hinaus.",
    "th": "คุณเก็บความขี้เล่นไว้นานหลังหมดฤดู"
   },
   "origName": "재미있는 산타클로스 장식품 불빛 크리스마스",
   "url": "https://s.click.aliexpress.com/e/_c36IPW5l",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/96.webp",
   "prior": 0.892
  },
  {
   "id": 97,
   "tags": [
    "skeleton",
    "scary",
    "anatomy",
    "decor",
    "statue",
    "west",
    "tiny",
    "season"
   ],
   "name": {
    "ko": "책상 위에 눌러앉은 미니 해골",
    "en": "A Tiny Skull That Moved In on Your Desk",
    "zh": "赖在书桌上不走的迷你骷髅",
    "ja": "机の上に居座るミニドクロ",
    "es": "Una mini calavera instalada en tu escritorio",
    "pt": "Uma Caveirinha que Se Mudou para a Sua Mesa",
    "fr": "Une minuscule tête de mort installée sur votre bureau",
    "de": "Ein winziger Totenkopf, der auf Ihrem Schreibtisch eingezogen ist",
    "th": "กะโหลกจิ๋วที่ย้ายมาอยู่บนโต๊ะคุณ"
   },
   "line": {
    "ko": "죽음도 귀엽게 소화해내는 분이시군요.",
    "en": "You can make even mortality look a bit cute.",
    "zh": "你连死亡都能消化得有点可爱。",
    "ja": "死さえもかわいく受け止められる方ですね。",
    "es": "Hasta la muerte te parece un poco adorable.",
    "pt": "Você consegue tornar até a mortalidade um pouco fofa.",
    "fr": "Vous savez rendre même la mortalité un peu mignonne.",
    "de": "Sie schaffen es, selbst die Sterblichkeit ein bisschen niedlich zu machen.",
    "th": "คุณทำให้แม้ความตายดูน่ารักได้นิดหน่อย"
   },
   "origName": "고딕 할로윈 해골 장식 레진 미니 해골",
   "url": "https://s.click.aliexpress.com/e/_c33s9YU3",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/97.webp",
   "prior": 0.575
  },
  {
   "id": 98,
   "tags": [
    "frog",
    "animal",
    "living",
    "zen",
    "east",
    "decor",
    "statue",
    "metal"
   ],
   "name": {
    "ko": "요가하는 황동 개구리",
    "en": "A Brass Frog Doing Yoga",
    "zh": "做瑜伽的黄铜青蛙",
    "ja": "ヨガをする真鍮のカエル",
    "es": "Una rana de latón haciendo yoga",
    "pt": "Um Sapo de Latão Fazendo Yoga",
    "fr": "Une grenouille en laiton qui fait du yoga",
    "de": "Ein Messingfrosch beim Yoga",
    "th": "กบทองเหลืองทำโยคะ"
   },
   "line": {
    "ko": "굳어도 평온한 존재를 곁에 두고 싶은 분이시군요.",
    "en": "You'd like something calm, even when set in metal, near you.",
    "zh": "你想把那个就算凝固成金属也依然平静的存在放在身边。",
    "ja": "金属になっても穏やかな存在をそばに置きたい方ですね。",
    "es": "Quieres cerca algo que sigue en calma aun hecho de metal.",
    "pt": "Você quer ter por perto algo calmo, mesmo em metal.",
    "fr": "Vous aimeriez avoir près de vous quelque chose de calme, même en métal.",
    "de": "Sie hätten gern etwas Ruhiges in der Nähe, selbst wenn es aus Metall ist.",
    "th": "คุณอยากมีสิ่งสงบอยู่ใกล้ แม้เป็นโลหะ"
   },
   "origName": "황동 요가 개구리 조각상",
   "url": "https://s.click.aliexpress.com/e/_c3sSuLhv",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/98.webp",
   "prior": 0.998
  },
  {
   "id": 99,
   "tags": [
    "alien",
    "living",
    "statue",
    "decor",
    "funny_face",
    "tiny"
   ],
   "name": {
    "ko": "맥주 한 캔에 지구를 용서한 외계인",
    "en": "An Alien Who Forgave Earth over a Beer",
    "zh": "一罐啤酒就原谅了地球的外星人",
    "ja": "ビール一杯で地球を許した宇宙人",
    "es": "Un extraterrestre que perdonó a la Tierra con una cerveza",
    "pt": "Um Alienígena que Perdoou a Terra com uma Cerveja",
    "fr": "Un extraterrestre qui a pardonné à la Terre autour d'une bière",
    "de": "Ein Außerirdischer, der der Erde bei einem Bier verziehen hat",
    "th": "มนุษย์ต่างดาวที่ให้อภัยโลกเพราะเบียร์"
   },
   "line": {
    "ko": "퇴근길 한 잔에 모든 걸 용서하는 분이시군요.",
    "en": "One drink after work forgives everything for you.",
    "zh": "下班后一杯酒，你就能原谅一切。",
    "ja": "仕事帰りの一杯で、すべてを許せる方ですね。",
    "es": "Una copa tras el trabajo te hace perdonarlo todo.",
    "pt": "Para você, um drinque depois do trabalho perdoa tudo.",
    "fr": "Pour vous, un verre après le travail pardonne tout.",
    "de": "Ein Feierabendgetränk verzeiht für Sie alles.",
    "th": "เครื่องดื่มหลังเลิกงานให้อภัยได้ทุกอย่างสำหรับคุณ"
   },
   "origName": "독특한 외계인 맥주 마시는 레진 피규어",
   "url": "https://s.click.aliexpress.com/e/_c31jtKOf",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/99.webp",
   "prior": 0.58,
   "need": "cool"
  },
  {
   "id": 100,
   "tags": [
    "human",
    "living",
    "statue",
    "funny_face",
    "decor",
    "zen",
    "west",
    "useful"
   ],
   "name": {
    "ko": "변기 위에서 인류를 고민하는 사색가",
    "en": "A Thinker on the Toilet Pondering Humanity",
    "zh": "坐在马桶上思考人类的思想者",
    "ja": "便座の上で人類を悩む考える人",
    "es": "Un pensador sobre el inodoro meditando sobre la humanidad",
    "pt": "Um Pensador no Vaso Refletindo sobre a Humanidade",
    "fr": "Un penseur sur les toilettes qui médite sur l'humanité",
    "de": "Ein Denker auf der Toilette, der über die Menschheit nachsinnt",
    "th": "นักคิดบนชักโครกครุ่นคิดเรื่องมนุษยชาติ"
   },
   "line": {
    "ko": "가장 편한 자리에서 가장 깊게 생각하는 분이시군요.",
    "en": "You think deepest in the most comfortable spot.",
    "zh": "你在最舒服的地方想得最深。",
    "ja": "いちばん楽な場所で、いちばん深く考える方ですね。",
    "es": "Piensas más hondo en el lugar más cómodo.",
    "pt": "Você pensa mais fundo no lugar mais confortável.",
    "fr": "Vous réfléchissez le plus profondément à l'endroit le plus confortable.",
    "de": "Am bequemsten Ort denken Sie am tiefsten.",
    "th": "คุณคิดลึกที่สุดในที่ที่สบายที่สุด"
   },
   "origName": "변기상의 사색하는 인물 조각상",
   "url": "https://s.click.aliexpress.com/e/_c4qXnexD",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/100.webp",
   "prior": 1.206,
   "need": "cool"
  },
  {
   "id": 101,
   "tags": [
    "toy",
    "game",
    "prank",
    "scary",
    "sound"
   ],
   "name": {
    "ko": "손대는 순간 찌릿해지는 전기 미로",
    "en": "An Electric Maze That Zaps the Moment You Touch",
    "zh": "一碰就触电的电击迷宫",
    "ja": "触れた瞬間びりっとする電気迷路",
    "es": "Un laberinto eléctrico que da calambre al tocar",
    "pt": "Um Labirinto Elétrico que Dá Choque ao Toque",
    "fr": "Un labyrinthe électrique qui pique dès qu'on le touche",
    "de": "Ein elektrisches Labyrinth, das bei Berührung zappt",
    "th": "เขาวงกตไฟฟ้าที่ช็อตทันทีที่แตะ"
   },
   "line": {
    "ko": "살짝 아플 줄 알면서도 도전하는 분이시군요.",
    "en": "You take the challenge even knowing it'll sting a bit.",
    "zh": "明知会有点疼，你还是会去挑战。",
    "ja": "少し痛いと分かっていても挑戦する方ですね。",
    "es": "Aceptas el reto aunque sepas que picará un poco.",
    "pt": "Você aceita o desafio mesmo sabendo que vai arder um pouco.",
    "fr": "Vous relevez le défi même en sachant que ça piquera un peu.",
    "de": "Sie nehmen die Herausforderung an, auch wenn es ein bisschen brennt.",
    "th": "คุณรับความท้าทายแม้รู้ว่าจะเจ็บนิดหน่อย"
   },
   "origName": "어린이 충격 전기 장난감 터치 미로 게임",
   "url": "https://s.click.aliexpress.com/e/_c4ngroqX",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/101.webp",
   "prior": 0.155
  },
  {
   "id": 102,
   "tags": [
    "sound",
    "toy",
    "tiny",
    "wearable",
    "useful",
    "east",
    "zen",
    "animal",
    "living"
   ],
   "name": {
    "ko": "딸깍 소리로 번뇌를 끊는 나무 물고기",
    "en": "A Wooden Fish That Clicks Your Worries Away",
    "zh": "用咔哒声斩断烦恼的木鱼",
    "ja": "カチカチ音で煩悩を断つ木の魚",
    "es": "Un pez de madera que corta las preocupaciones con un clic",
    "pt": "Um Peixe de Madeira que Clica Embora as Preocupações",
    "fr": "Un poisson en bois qui clique vos soucis au loin",
    "de": "Ein Holzfisch, der Ihre Sorgen wegklickt",
    "th": "ปลาไม้ที่เคาะกล่อมความกังวลของคุณ"
   },
   "line": {
    "ko": "작은 소리 하나로 마음을 비우는 분이시군요.",
    "en": "One small sound can empty your mind.",
    "zh": "一个小小的声音就能让你放空心思。",
    "ja": "小さな音一つで心を空にできる方ですね。",
    "es": "Un solo sonido pequeño te vacía la mente.",
    "pt": "Um único som pequeno pode esvaziar sua mente.",
    "fr": "Un seul petit son peut vider votre esprit.",
    "de": "Ein einziger kleiner Klang kann Ihren Kopf leeren.",
    "th": "เสียงเล็ก ๆ เสียงเดียวทำให้หัวโล่งได้"
   },
   "origName": "스트레스 해소 나무 물고기 키링 키캡 클릭커",
   "url": "https://s.click.aliexpress.com/e/_c4t4QAeB",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/102.webp",
   "prior": 1.909,
   "need": "calm"
  },
  {
   "id": 103,
   "tags": [
    "statue",
    "funny_face",
    "decor",
    "useful",
    "tough",
    "storage"
   ],
   "name": {
    "ko": "팔짱 끼고 연기를 내뿜는 모아이 재떨이",
    "en": "A Moai Ashtray Standing Arms Crossed with a Smoke",
    "zh": "抱着胳膊吞云吐雾的摩艾烟灰缸",
    "ja": "腕を組んで煙をくゆらすモアイの灰皿",
    "es": "Un cenicero moai con los brazos cruzados y un cigarrillo",
    "pt": "Um Cinzeiro Moai de Braços Cruzados com um Cigarro",
    "fr": "Un cendrier moaï les bras croisés avec une cigarette",
    "de": "Ein Moai-Aschenbecher mit verschränkten Armen und einer Zigarette",
    "th": "ที่เขี่ยบุหรี่โมอายยืนกอดอกพร้อมบุหรี่"
   },
   "line": {
    "ko": "쉬어가는 시간에 혼자 팔짱 끼고 서 있고 싶은 분이시군요.",
    "en": "You like standing alone with your arms crossed during a break.",
    "zh": "休息时，你喜欢一个人抱着胳膊站着。",
    "ja": "休憩時間に、一人で腕を組んで立っていたい方ですね。",
    "es": "En los descansos te gusta quedarte solo con los brazos cruzados.",
    "pt": "Você gosta de ficar sozinho(a) de braços cruzados no intervalo.",
    "fr": "Vous aimez rester seul(e), les bras croisés, pendant une pause.",
    "de": "Sie stehen in der Pause gern allein mit verschränkten Armen da.",
    "th": "คุณชอบยืนกอดอกอยู่คนเดียวในช่วงพัก"
   },
   "origName": "창의적이고 귀여운 독특한 남자 모양 담배 재떨이 장식",
   "url": "https://s.click.aliexpress.com/e/_c3WSukpH",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/103.webp",
   "prior": 1.614
  },
  {
   "id": 104,
   "tags": [
    "animal",
    "living",
    "bird",
    "funny_face",
    "prank",
    "decor",
    "statue"
   ],
   "name": {
    "ko": "가운뎃손가락을 세우고 유유히 헤엄치는 오리",
    "en": "A Duck Calmly Swimming with Its Middle Finger Up",
    "zh": "竖着中指悠然游动的鸭子",
    "ja": "中指を立ててゆうゆうと泳ぐアヒル",
    "es": "Un pato nadando tranquilo con el dedo medio en alto",
    "pt": "Um Pato Nadando Tranquilo com o Dedo do Meio Levantado",
    "fr": "Un canard qui nage tranquillement avec le majeur levé",
    "de": "Eine Ente, die gelassen mit erhobenem Mittelfinger schwimmt",
    "th": "เป็ดว่ายน้ำสบาย ๆ พร้อมชูนิ้วกลาง"
   },
   "line": {
    "ko": "하고 싶은 말을 대신 해주는 존재가 반가운 분이시군요.",
    "en": "You're glad when something says what you can't.",
    "zh": "有谁替你说出想说的话，你会很高兴。",
    "ja": "言いたいことを代わりに言ってくれる存在が嬉しい方ですね。",
    "es": "Te alegra que algo diga lo que tú no puedes.",
    "pt": "Você fica contente quando algo diz o que você não consegue dizer.",
    "fr": "Vous êtes content(e) quand quelque chose dit ce que vous ne pouvez pas dire.",
    "de": "Sie freuen sich, wenn etwas das sagt, was Sie nicht sagen können.",
    "th": "คุณดีใจเมื่อมีสิ่งหนึ่งพูดสิ่งที่คุณพูดไม่ได้"
   },
   "origName": "중간 손가락 장식이 있는 오리 장식품",
   "url": "https://s.click.aliexpress.com/e/_c2zrSIg7",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/104.webp",
   "prior": 0.262,
   "need": "laugh"
  },
  {
   "id": 105,
   "tags": [
    "human",
    "living",
    "statue",
    "funny_face",
    "decor",
    "west",
    "magic",
    "outdoor"
   ],
   "name": {
    "ko": "연기를 내뿜으며 정원을 지키는 마법사 난쟁이",
    "en": "A Wizard Gnome Puffing Smoke While Guarding the Garden",
    "zh": "吞云吐雾守护花园的魔法师地精",
    "ja": "煙をくゆらせながら庭を守る魔法使いのノーム",
    "es": "Un gnomo mago que echa humo mientras guarda el jardín",
    "pt": "Um Gnomo Mago Soltando Fumaça e Guardando o Jardim",
    "fr": "Un gnome magicien qui crache de la fumée en gardant le jardin",
    "de": "Ein Zauberer-Gartenzwerg, der Rauch paffend den Garten bewacht",
    "th": "พ่อมดโนมพ่นควันเฝ้าสวน"
   },
   "line": {
    "ko": "느긋한 존재가 정원에 있으면 마음이 편해지는 분이시군요.",
    "en": "You feel at ease when something laid-back guards the garden.",
    "zh": "花园里有个悠闲的家伙，你就觉得安心。",
    "ja": "のんびりした存在が庭にいると、心が落ち着く方ですね。",
    "es": "Te tranquiliza que algo relajado vigile el jardín.",
    "pt": "Você relaxa quando algo tranquilo guarda o jardim.",
    "fr": "Vous êtes à l'aise quand quelque chose de décontracté garde le jardin.",
    "de": "Sie fühlen sich wohl, wenn etwas Entspanntes den Garten bewacht.",
    "th": "คุณสบายใจเมื่อมีสิ่งชิล ๆ เฝ้าสวน"
   },
   "origName": "재미있는 흡연 난쟁이 정원 조각 장식품",
   "url": "https://s.click.aliexpress.com/e/_c45wwZJz",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/105.webp",
   "prior": 0.601,
   "need": "guard"
  },
  {
   "id": 106,
   "tags": [
    "toy",
    "tiny",
    "funny_face",
    "useful",
    "sound"
   ],
   "name": {
    "ko": "한 개비씩 터뜨리는 담뱃갑 모양 버블 장난감",
    "en": "A Cigarette-Box Bubble Toy You Pop One at a Time",
    "zh": "一个个捏破的烟盒造型泡泡玩具",
    "ja": "一本ずつ弾けるたばこの箱型バブルおもちゃ",
    "es": "Un juguete de burbujas con forma de cajetilla que se revienta de a uno",
    "pt": "Um Brinquedo de Bolhas em Maço de Cigarro para Estourar Uma a Uma",
    "fr": "Un jouet à bulles en paquet de cigarettes à éclater une à une",
    "de": "Ein Zigarettenschachtel-Blasenspielzeug zum Eindrücken, eins nach dem anderen",
    "th": "ของเล่นบับเบิลซองบุหรี่ให้กดทีละเม็ด"
   },
   "line": {
    "ko": "손에 쥘 것이 필요한 순간을 안전하게 넘기는 분이시군요.",
    "en": "You get through restless moments with something harmless in your hand.",
    "zh": "手上需要有点东西的时候，你会用无害的方式度过。",
    "ja": "手持ち無沙汰な時間を、害のないもので乗り切る方ですね。",
    "es": "Superas los momentos de inquietud con algo inofensivo entre las manos.",
    "pt": "Você atravessa os momentos inquietos com algo inofensivo na mão.",
    "fr": "Vous traversez les moments agités avec quelque chose d'inoffensif en main.",
    "de": "Sie überstehen unruhige Momente mit etwas Harmlosem in der Hand.",
    "th": "คุณผ่านช่วงกระวนกระวายด้วยของไม่เป็นอันตรายในมือ"
   },
   "origName": "담배갑 버블 장난감 스트레스 해소",
   "url": "https://s.click.aliexpress.com/e/_c3UYOlrl",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/106.webp",
   "prior": 0.841,
   "need": "play"
  }
 ],
 "languageNames": {
  "ko": "한국어",
  "zh": "中文",
  "en": "English",
  "ja": "日本語",
  "es": "Español",
  "pt": "Português",
  "fr": "Français",
  "de": "Deutsch",
  "th": "ไทย"
 },
 "traits": [
  {
   "id": "prank",
   "tags": [
    "prank",
    "boom"
   ],
   "ko": "작은 장난과 소동을 은근히 즐기는",
   "en": "enjoys a little mischief and commotion",
   "zh": "喜欢小小的恶作剧和骚动",
   "ja": "ちょっとしたいたずらや騒ぎを楽しむ",
   "es": "disfruta de un poco de travesura y alboroto",
   "kw": {
    "ko": "장난 빌런",
    "en": "a prank villain",
    "zh": "整蛊反派",
    "ja": "いたずらヴィラン",
    "es": "un villano bromista",
    "pt": "o terror das pegadinhas",
    "fr": "la terreur des farces",
    "de": "ein Streich-Bösewicht",
    "th": "ตัวร้ายสายแกล้ง"
   },
   "inf": {
    "ko": "당신은 세상을 너무 진지하게만 보면 숨이 막힌다는 것을 본능으로 압니다. 분위기가 무거워지면 가장 먼저 그것을 감지하고, 말 한마디나 표정 하나로 공기를 풀어버립니다. 사람들은 이를 가벼움이라 부르지만, 사실은 상당한 눈치와 배려가 필요한 기술입니다.\n그래서 곁에 있으면 편안한 사람, 모임에 한 명쯤 있어야 하는 사람으로 통합니다. 반면 정작 본인이 힘들 때는 농담으로 넘겨버리는 버릇이 있어서, 진짜 속마음은 아무도 모르는 경우가 많습니다. 웃기는 사람이 늘 괜찮은 것은 아닙니다.\n마음속으로 가장 바라는 것은 장난을 쳐도 미움받지 않는 안전한 자리, 그리고 같이 웃어줄 단 한 사람입니다.",
    "en": "You sense, almost by instinct, that taking the world too seriously makes it hard to breathe. When a room grows heavy, you are the first to feel it, and a single remark or expression is enough to let the air out. People call this lightness, but it takes real tact and care.\nThat is why you are someone people relax around, the one a group seems to need. The catch is that when you are the one struggling, you tend to joke it away, so few people ever see what you actually feel. The funny one is not always the one who is fine.\nWhat you want most, deep down, is a safe place where you can be mischievous without being disliked, and one person who will laugh along.",
    "zh": "你几乎是出于本能地知道，把世界看得太严肃会让人喘不过气。气氛一变沉重，你总是第一个察觉，一句话、一个表情就能把空气放松下来。别人叫它轻松，其实这需要相当的眼力和体贴。\n所以你是那种让人安心的人，是聚会里总该有一个的人。不过，轮到自己难受时，你习惯用玩笑带过，真正的心事往往没人知道。爱逗人笑的人，并不总是没事。\n你心底最想要的，是一个可以淘气却不会被讨厌的安全位置，以及一个愿意陪你一起笑的人。",
    "ja": "あなたは、世界をまじめに見すぎると息が詰まることを、ほとんど本能で知っています。場が重くなるといち早く気づき、一言や表情ひとつで空気をほぐしてしまいます。人はそれを軽さと呼びますが、実はかなりの気配りと思いやりが要る技です。\nだから、そばにいると安心する人、集まりに一人はいてほしい人として扱われます。一方で、自分がつらいときは冗談で流す癖があり、本当の気持ちは誰にも知られないことが多いのです。笑わせる人がいつも大丈夫とは限りません。\n心の奥で一番望んでいるのは、いたずらをしても嫌われない安全な場所と、一緒に笑ってくれるたった一人です。",
    "es": "Sabes, casi por instinto, que tomarse el mundo demasiado en serio quita el aire. Cuando una sala se pone pesada, eres el primero en notarlo, y basta una frase o un gesto para aligerar el ambiente. La gente lo llama ligereza, pero requiere mucho tacto y cuidado.\nPor eso eres alguien con quien se está a gusto, el que a un grupo le hace falta. El problema es que, cuando eres tú quien lo pasa mal, tiendes a quitarle hierro con una broma, y casi nadie llega a ver lo que sientes de verdad. El gracioso no siempre está bien.\nLo que más deseas en el fondo es un lugar seguro donde ser travieso sin que te rechacen, y una sola persona que se ría contigo.",
    "pt": "Você percebe, quase por instinto, que levar o mundo a sério demais tira o ar da gente. Quando o clima pesa, você é a primeira pessoa a sentir, e basta uma frase ou uma expressão para deixar o ambiente respirar. Chamam isso de leveza, mas exige tato e cuidado de verdade.\nPor isso as pessoas relaxam perto de você, e todo grupo parece precisar de alguém assim. O porém é que, quando é você quem está mal, costuma levar na brincadeira, e poucos chegam a ver o que você sente de verdade. Quem faz rir nem sempre é quem está bem.\nO que você mais quer, lá no fundo, é um lugar seguro onde possa ser travesso(a) sem ser rejeitado(a), e uma pessoa que ria junto.",
    "fr": "Vous sentez presque d'instinct qu'on étouffe à prendre le monde trop au sérieux. Quand l'ambiance s'alourdit, vous êtes le premier ou la première à le percevoir, et une remarque ou une mimique suffit à aérer la pièce. On appelle ça de la légèreté, mais cela demande du tact et de l'attention.\nC'est pour cela qu'on se détend près de vous, et que tout groupe semble avoir besoin de quelqu'un comme vous. Le revers, c'est que lorsque c'est vous qui allez mal, vous balayez ça d'une blague, et peu de gens voient ce que vous ressentez vraiment. Celui ou celle qui fait rire ne va pas toujours bien.\nCe que vous voulez le plus, au fond, c'est un endroit sûr où vous pouvez faire le malin sans être détesté(e), et quelqu'un qui rira avec vous.",
    "de": "Sie spüren fast instinktiv, dass einem die Luft wegbleibt, wenn man die Welt zu ernst nimmt. Wird die Stimmung schwer, merken Sie es als Erste(r), und ein Satz oder eine Miene genügt, um die Luft rauszulassen. Man nennt das Leichtigkeit, doch dahinter steckt echtes Taktgefühl.\nDeshalb entspannen sich Menschen in Ihrer Nähe, und jede Runde scheint jemanden wie Sie zu brauchen. Der Haken: Wenn es Ihnen selbst schlecht geht, scherzen Sie es weg, und kaum jemand sieht, was Sie wirklich fühlen. Wer andere zum Lachen bringt, ist nicht immer derjenige, dem es gut geht.\nWas Sie sich im Innersten am meisten wünschen, ist ein sicherer Ort, an dem Sie übermütig sein dürfen, ohne unbeliebt zu werden, und ein Mensch, der mitlacht.",
    "th": "คุณรู้สึกได้แทบจะโดยสัญชาตญาณว่า การเอาจริงเอาจังกับโลกมากเกินไปทำให้หายใจไม่ออก เวลาบรรยากาศเริ่มหนัก คุณคือคนแรกที่สัมผัสได้ และแค่คำพูดเดียวหรือสีหน้าเดียวก็ปล่อยอากาศให้โปร่งได้ คนเรียกว่าความเบาสบาย แต่จริง ๆ แล้วมันต้องใช้ทั้งความช่างสังเกตและความใส่ใจอย่างมาก\nนี่คือเหตุผลที่คนรอบตัวผ่อนคลายเวลาอยู่กับคุณ และกลุ่มไหนก็ดูเหมือนต้องมีคนแบบคุณ ข้อเสียคือ พอเป็นตัวคุณเองที่ไม่ไหว คุณมักหัวเราะกลบเกลื่อน เลยมีคนน้อยมากที่เห็นว่าคุณรู้สึกอย่างไรจริง ๆ คนตลกไม่ได้โอเคเสมอไป\nสิ่งที่คุณต้องการที่สุดลึก ๆ คือพื้นที่ปลอดภัยที่ซนได้โดยไม่ถูกเกลียด และใครสักคนที่หัวเราะไปด้วยกัน"
   },
   "opp": "calm",
   "match": "human",
   "rarity": 4.3,
   "need": "laugh",
   "advice": {
    "ko": "단톡방에 아무 설명 없이 감자 사진을 올려보는 건 어떨까요?",
    "en": "How about posting a photo of a potato in the group chat with no explanation?",
    "zh": "要不要在群里不加任何解释地发一张土豆照片？",
    "ja": "グループチャットに説明なしでジャガイモの写真を投稿してみるのはどうでしょう？",
    "es": "¿Qué tal subir al chat del grupo una foto de una patata sin dar explicaciones?",
    "pt": "Que tal postar no grupo uma foto de uma batata, sem nenhuma explicação?",
    "fr": "Et si vous postiez une photo de pomme de terre dans le groupe, sans aucune explication ?",
    "de": "Wie wäre es, ohne jede Erklärung ein Kartoffelfoto in den Gruppenchat zu posten?",
    "th": "ลองโพสต์รูปมันฝรั่งลงกลุ่มแชตโดยไม่อธิบายอะไรเลยดีไหมครับ?"
   },
   "pt": "adora uma travessura e um alvoroço",
   "fr": "adore un peu de chahut et de chamboulement",
   "de": "ein bisschen Unfug und Trubel liebt",
   "th": "ชอบความซนและความวุ่นวายเล็ก ๆ"
  },
  {
   "id": "funny_face",
   "tags": [
    "funny_face",
    "ugly"
   ],
   "ko": "웃기게 생긴 것에 정이 가는",
   "en": "has a soft spot for things that look funny",
   "zh": "对长得好笑的东西格外有感情",
   "ja": "面白い顔をしたものに情が湧く",
   "es": "le tiene cariño a lo que tiene pinta graciosa",
   "kw": {
    "ko": "허당 맛집 단골",
    "en": "a hot-mess regular",
    "zh": "憨憨店常客",
    "ja": "うっかり名店の常連",
    "es": "un fijo de lo despistado",
    "pt": "cliente fiel de carinha esquisita",
    "fr": "accro aux bouilles ratées",
    "de": "ein Stammkunde für Pannengesichter",
    "th": "ขาประจำสายหน้าเพี้ยน"
   },
   "inf": {
    "ko": "당신은 완벽한 것보다 허술한 것에서 더 큰 위안을 받습니다. 매끈하게 잘 만든 물건 앞에서는 어쩐지 긴장하고, 어딘가 빠져 보이는 표정 앞에서는 마음이 놓입니다. 이는 자신에게도 같은 관대함을 허락하고 싶은 마음의 반영입니다.\n사람을 볼 때도 비슷합니다. 잘난 척하지 않는 사람, 실수를 웃어넘기는 사람에게 정을 느끼고, 그런 이들과 오래 갑니다. 타인의 모자란 구석을 흠이 아니라 매력으로 읽는 눈은 흔치 않은 재능입니다.\n다만 스스로에게는 의외로 엄격할 때가 있습니다. 남의 허술함은 귀엽게 보면서 자신의 허술함은 용서하지 못하는 모순이 남몰래 있습니다.",
    "en": "You find more comfort in the imperfect than in the polished. Sleek, flawless things make you faintly tense, while a face that looks slightly unfinished puts you at ease. It reflects a wish to be allowed the same leniency yourself.\nPeople work the same way for you. You warm to those who do not show off and who laugh at their own slips, and you keep those friends for a long time. Reading someone's shortcomings as charm instead of flaws is a rare talent.\nYet with yourself you can be surprisingly strict. You find other people's clumsiness endearing while quietly refusing to forgive your own, and that contradiction is worth noticing.",
    "zh": "比起完美，你在不完美的东西里更容易得到安慰。过于光滑精致的东西让你隐约紧张，而看上去有点欠缺的表情却让你放下心来。这反映出你也想对自己同样宽容。\n看人也是这样。你对不炫耀、能笑着面对自己失误的人产生感情，并和他们长久相处。把别人的不足读成魅力而不是缺点，是难得的才能。\n只是对自己，你有时出奇地严格。你觉得别人的笨拙可爱，却不肯原谅自己的笨拙，这个矛盾悄悄存在着。",
    "ja": "あなたは完璧なものより、不完全なものに慰められます。つるんと整ったものの前では少し緊張し、どこか抜けた表情の前ではほっとします。それは、自分にも同じ寛容さを許したいという気持ちの表れです。\n人を見るときも同じです。見栄を張らない人、失敗を笑い飛ばせる人に情が移り、そういう人と長く付き合います。他人の欠点を欠点ではなく魅力として読める目は、めずらしい才能です。\nただ、自分には意外と厳しいことがあります。他人のぎこちなさはかわいいのに、自分のぎこちなさは許せないという矛盾が、ひそかに潜んでいます。",
    "es": "Encuentras más consuelo en lo imperfecto que en lo pulido. Las cosas lisas y perfectas te tensan un poco, mientras que una cara algo despistada te tranquiliza. Refleja las ganas de concederte a ti mismo la misma indulgencia.\nCon las personas es igual. Te encariñas con quien no presume y se ríe de sus tropiezos, y conservas a esos amigos mucho tiempo. Leer los defectos ajenos como encanto, y no como falla, es un talento raro.\nEso sí, contigo mismo a veces eres sorprendentemente estricto. La torpeza ajena te enternece, pero la tuya no te la perdonas, y esa contradicción convive en silencio.",
    "pt": "Você encontra mais conforto no imperfeito do que no polido. Coisas lisas e impecáveis te deixam levemente tenso(a), enquanto uma carinha meio inacabada te deixa à vontade. Isso mostra o desejo de receber a mesma indulgência.\nCom as pessoas é igual. Você se afeiçoa a quem não se exibe e ri dos próprios escorregões, e mantém essas amizades por muito tempo. Enxergar defeito alheio como charme, e não como falha, é um talento raro.\nMas consigo mesmo(a) você pode ser surpreendentemente rigoroso(a). Acha o desastre dos outros adorável e, em silêncio, se recusa a perdoar o seu. Essa contradição merece atenção.",
    "fr": "Vous trouvez plus de réconfort dans l'imparfait que dans le lisse. Les choses trop polies et sans défaut vous tendent légèrement, tandis qu'une bouille un peu inachevée vous met à l'aise. Cela traduit le désir de recevoir la même indulgence pour vous-même.\nC'est pareil avec les gens. Vous vous attachez à ceux qui ne friment pas et qui rient de leurs propres bévues, et vous les gardez longtemps. Lire les défauts d'autrui comme du charme plutôt que comme des failles est un talent rare.\nMais avec vous-même, vous pouvez être étonnamment sévère. Vous trouvez la maladresse des autres touchante tout en refusant en silence de pardonner la vôtre. Cette contradiction mérite qu'on s'y arrête.",
    "de": "Im Unperfekten finden Sie mehr Trost als im Geschliffenen. Glatte, makellose Dinge machen Sie leicht angespannt, während ein etwas unfertig wirkendes Gesicht Sie entspannt. Das spiegelt den Wunsch, selbst dieselbe Nachsicht zu erfahren.\nBei Menschen ist es genauso. Sie schließen Leute ins Herz, die nicht angeben und über ihre eigenen Patzer lachen, und Sie behalten diese Freunde lange. Die Schwächen anderer als Charme statt als Fehler zu lesen, ist ein seltenes Talent.\nMit sich selbst können Sie dagegen erstaunlich streng sein. Die Tollpatschigkeit anderer finden Sie liebenswert, die eigene verzeihen Sie sich still und leise nicht. Dieser Widerspruch ist einen Gedanken wert.",
    "th": "คุณได้ความสบายใจจากสิ่งที่ไม่สมบูรณ์มากกว่าสิ่งที่เนี้ยบ ของที่เรียบลื่นไร้ที่ติทำให้คุณเกร็งนิด ๆ ส่วนหน้าตาที่ดูเหมือนยังทำไม่เสร็จกลับทำให้คุณผ่อนคลาย นี่สะท้อนความอยากได้รับความใจดีแบบเดียวกันกับตัวเอง\nกับคนก็เหมือนกัน คุณผูกพันกับคนที่ไม่อวดและหัวเราะกับความพลาดของตัวเอง และเก็บเพื่อนแบบนั้นไว้ได้นาน การมองข้อด้อยของคนอื่นว่าเป็นเสน่ห์ไม่ใช่ข้อเสีย เป็นพรสวรรค์ที่หาได้ยาก\nแต่กับตัวเอง คุณกลับเข้มงวดอย่างน่าแปลกใจ คุณเห็นความซุ่มซ่ามของคนอื่นน่ารัก แต่เงียบ ๆ ไม่ยอมให้อภัยความซุ่มซ่ามของตัวเอง ความขัดแย้งนี้น่าสังเกตเหมือนกัน"
   },
   "opp": "useful",
   "match": "craft",
   "rarity": 0.7,
   "need": "welcome",
   "advice": {
    "ko": "오늘은 일부러 한 가지 정도 틀려보는 건 어떨까요?",
    "en": "How about getting one thing wrong on purpose today?",
    "zh": "今天要不要故意错一件事？",
    "ja": "今日はわざと一つくらい間違えてみるのはどうでしょう？",
    "es": "¿Qué tal equivocarte a propósito en una cosa hoy?",
    "pt": "Que tal errar uma coisinha de propósito hoje?",
    "fr": "Et si vous vous trompiez exprès sur un petit détail aujourd'hui ?",
    "de": "Wie wäre es, heute absichtlich eine Kleinigkeit falsch zu machen?",
    "th": "ลองทำอะไรผิดสักอย่างโดยตั้งใจวันนี้ดีไหมครับ?"
   },
   "pt": "tem um fraco por coisas de aparência engraçada",
   "fr": "a un faible pour les choses à l'air drôle",
   "de": "eine Schwäche für komisch aussehende Dinge hat",
   "th": "มีจุดอ่อนให้ของที่หน้าตาตลก ๆ"
  },
  {
   "id": "costume",
   "tags": [
    "costume",
    "maskface",
    "headwear",
    "wearable"
   ],
   "ko": "다른 누군가가 되어보는 상상을 해본",
   "en": "has imagined becoming someone else",
   "zh": "幻想过变成别人",
   "ja": "誰か別の人になってみる想像をしたことのある",
   "es": "ha imaginado ser otra persona",
   "kw": {
    "ko": "인생 체험판 신청자",
    "en": "a free-trial applicant for other lives",
    "zh": "人生体验版申请者",
    "ja": "人生お試し版の申込者",
    "es": "un aspirante a vidas de prueba",
    "pt": "aspirante a outras vidas",
    "fr": "en période d'essai pour d'autres vies",
    "de": "ein Probe-Abo-Kandidat für andere Leben",
    "th": "ผู้สมัครทดลองใช้ชีวิตอื่น"
   },
   "inf": {
    "ko": "당신의 머릿속에는 지금의 나 말고도 여러 명의 내가 대기하고 있습니다. 다른 직업, 다른 말투, 다른 도시에서 사는 나를 상상하는 일이 즐거운 사람입니다. 호기심이 많고 상상력이 풍부하며, 한 가지 모습으로 고정되는 것을 은근히 답답해합니다.\n이 성향은 새로운 환경에 적응하는 속도로 나타납니다. 처음 보는 자리에서도 그 자리에 맞는 사람이 되는 데 능숙합니다. 대신 어느 쪽이 진짜 나인지 문득 헷갈리는 순간이 오기도 합니다. 정체성을 찾는 일은 평생의 숙제처럼 따라다닙니다.\n마음 깊은 곳에서는 평가받지 않고 아무 역할이나 마음껏 해볼 수 있는 무대를 원합니다. 단 하루라도 좋으니 말입니다.",
    "en": "Several versions of you are waiting offstage. You enjoy imagining a different job, a different way of speaking, a different city. You are curious and imaginative, and being fixed into a single shape feels faintly stifling.\nThis shows in how quickly you adapt. In an unfamiliar room you can become the person the room needs. The price is that now and then you wonder which version is the real one. Identity stays a lifelong homework assignment.\nDeep down, you want a stage where nobody is judging and you may try any role you like, even for a single day.",
    "zh": "你的脑海里有好几个“我”在待命。想象自己做另一份工作、换一种说话方式、住在另一座城市，对你来说很有乐趣。你好奇、想象力丰富，被固定成一种样子会让你隐隐觉得闷。\n这体现在你的适应速度上。到了陌生场合，你也能成为那里需要的人。代价是偶尔会恍惚：哪一个才是真正的我？寻找自我像是一辈子的功课。\n内心深处，你想要一个无人评判的舞台，哪怕只有一天，也能随心尝试任何角色。",
    "ja": "あなたの頭の中には、今の自分のほかに何人もの自分が待機しています。別の仕事、別の話し方、別の街で暮らす自分を想像するのが楽しい人です。好奇心が強く想像力も豊かで、一つの姿に固定されるのが少し息苦しく感じられます。\nこの性質は、環境に適応する速さに表れます。初めての場でも、その場に合う人になれます。そのかわり、どれが本当の自分なのか、ふと分からなくなる瞬間があります。自分探しは一生の宿題のようについてきます。\n心の奥では、評価されずにどんな役でも思い切り試せる舞台を望んでいます。たった一日でもいいのです。",
    "es": "Dentro de ti esperan varias versiones tuyas. Te divierte imaginar otro trabajo, otra forma de hablar, otra ciudad. Eres curioso e imaginativo, y quedar fijado en una sola forma te agobia un poco.\nSe nota en lo rápido que te adaptas. En un lugar desconocido puedes ser la persona que ese lugar necesita. El precio es que a veces te preguntas cuál es la versión real. Encontrar la identidad es una tarea de toda la vida.\nEn el fondo quieres un escenario donde nadie te juzgue y puedas probar cualquier papel, aunque sea un solo día.",
    "pt": "Várias versões suas esperam nos bastidores. Você se diverte imaginando outro emprego, outro jeito de falar, outra cidade. É curioso(a) e imaginativo(a), e ficar preso(a) a uma forma só dá uma leve sensação de abafamento.\nIsso aparece na rapidez com que você se adapta. Num ambiente desconhecido, vira a pessoa de que o lugar precisa. O preço é que, de vez em quando, você se pergunta qual versão é a verdadeira. Identidade continua sendo um dever de casa para a vida toda.\nNo fundo, você quer um palco sem julgamento, onde possa experimentar qualquer papel, nem que seja por um dia só.",
    "fr": "Plusieurs versions de vous attendent en coulisses. Vous aimez imaginer un autre métier, une autre manière de parler, une autre ville. Vous êtes curieux(se) et imaginatif(ve), et être figé(e) dans une seule forme vous étouffe un peu.\nCela se voit à votre rapidité d'adaptation. Dans un lieu inconnu, vous devenez la personne dont l'endroit a besoin. En contrepartie, vous vous demandez de temps en temps quelle version est la vraie. L'identité reste un devoir à rendre toute la vie.\nAu fond, vous voulez une scène où personne ne juge et où vous pouvez essayer n'importe quel rôle, ne serait-ce qu'une journée.",
    "de": "Mehrere Versionen von Ihnen warten hinter der Bühne. Sie malen sich gern einen anderen Beruf, eine andere Art zu sprechen, eine andere Stadt aus. Sie sind neugierig und fantasievoll, und die Festlegung auf eine einzige Gestalt fühlt sich leicht erstickend an.\nDas zeigt sich daran, wie schnell Sie sich anpassen. In einem fremden Raum werden Sie zu der Person, die der Raum braucht. Der Preis: Hin und wieder fragen Sie sich, welche Version die echte ist. Identität bleibt eine lebenslange Hausaufgabe.\nIm Innersten wünschen Sie sich eine Bühne, auf der niemand urteilt und Sie jede Rolle ausprobieren dürfen, und sei es nur für einen Tag.",
    "th": "ตัวตนหลายเวอร์ชันของคุณกำลังรออยู่หลังเวที คุณสนุกกับการจินตนาการถึงอาชีพอื่น วิธีพูดอื่น หรือเมืองอื่น คุณอยากรู้อยากเห็นและมีจินตนาการ และการถูกตรึงให้เป็นรูปแบบเดียวทำให้รู้สึกอึดอัดเล็กน้อย\nสิ่งนี้เห็นได้จากความเร็วในการปรับตัว ในที่แปลกหน้า คุณกลายเป็นคนที่ที่นั่นต้องการได้ ราคาที่ต้องจ่ายคือบางครั้งคุณสงสัยว่าเวอร์ชันไหนคือตัวจริง ตัวตนยังคงเป็นการบ้านตลอดชีวิต\nลึก ๆ แล้ว คุณอยากได้เวทีที่ไม่มีใครตัดสิน ที่ได้ลองบทไหนก็ได้ แม้เพียงวันเดียว"
   },
   "opp": "wall",
   "match": "magic",
   "rarity": 9.1,
   "need": "role",
   "advice": {
    "ko": "이번 주말엔 이름도 말투도 바꿔서 하루 살아보는 건 어떨까요?",
    "en": "How about spending this weekend for a day with a new name and a new way of talking?",
    "zh": "这个周末要不要换个名字、换种说话方式过一天？",
    "ja": "今週末は名前も話し方も変えて一日過ごしてみるのはどうでしょう？",
    "es": "¿Qué tal pasar un día de este fin de semana con otro nombre y otra forma de hablar?",
    "pt": "Que tal passar um dia deste fim de semana com um nome novo e outro jeito de falar?",
    "fr": "Et si vous passiez une journée de ce week-end avec un nouveau nom et une nouvelle façon de parler ?",
    "de": "Wie wäre es, an diesem Wochenende einen Tag lang mit neuem Namen und neuer Sprechweise zu verbringen?",
    "th": "ลองใช้เวลาหนึ่งวันของสุดสัปดาห์นี้ด้วยชื่อใหม่และท่าทางการพูดแบบใหม่ดีไหมครับ?"
   },
   "pt": "já imaginou virar outra pessoa",
   "fr": "a déjà imaginé devenir quelqu'un d'autre",
   "de": "sich schon vorgestellt hat, jemand anderes zu werden",
   "th": "เคยจินตนาการว่าได้เป็นคนอื่น"
  },
  {
   "id": "magic",
   "tags": [
    "magic",
    "illusion"
   ],
   "ko": "눈에 보이는 것이 전부가 아니라고 믿고 싶은",
   "en": "wants to believe what you see isn't everything",
   "zh": "愿意相信眼见不为实",
   "ja": "目に見えるものがすべてではないと信じたい",
   "es": "quiere creer que lo que ve no es todo",
   "kw": {
    "ko": "세계관 덕후",
    "en": "a lore nerd",
    "zh": "世界观宅",
    "ja": "世界観オタク",
    "es": "un friki del lore",
    "pt": "nerd de lore",
    "fr": "fana de lore",
    "de": "ein Lore-Nerd",
    "th": "เนิร์ดสายลอร์"
   },
   "inf": {
    "ko": "당신은 세상에 설명되지 않는 구석이 남아 있기를 은근히 바랍니다. 모든 것이 데이터와 이유로 풀리는 세상이 조금 심심하고, 우연히 맞아떨어지는 순간이나 이상하게 좋은 예감을 가볍게 넘기지 않습니다. 현실감각이 없는 것이 아니라, 경이로움을 느낄 줄 아는 감각을 지키고 있는 것입니다.\n그래서 감수성이 섬세하고 분위기의 변화를 잘 읽습니다. 같은 장소에서도 남들이 못 보는 것을 보는 편이며, 그 덕에 창의적인 발상이 자주 나옵니다. 다만 기대가 큰 만큼 현실이 시시할 때 실망도 깊은 편입니다.\n속마음은 평범한 일상 속에서도 작은 기적 하나쯤은 일어날 수 있다고 믿고 싶어 합니다. 그 믿음은 약점이 아니라 당신의 가장 좋은 동력입니다.",
    "en": "You quietly hope that some corners of the world stay unexplained. A life where everything resolves into data and reasons feels a little dull, and you do not wave away a lucky coincidence or an oddly good feeling. This is not a lack of realism. It is a sense of wonder you have chosen to protect.\nThat makes you sensitive and quick to read shifts in atmosphere. You often see in a place what others miss, which feeds your creativity. The flip side is that the higher your hopes, the deeper the disappointment when reality turns out ordinary.\nInside, you want to believe a small miracle can still happen on an ordinary day. That belief is not your weakness. It is your best fuel.",
    "zh": "你暗暗希望世界上还留着一些无法解释的角落。一个凡事都能用数据和理由说通的世界让你觉得有点无聊，碰巧的吻合或莫名的好预感，你不会轻易略过。这不是缺乏现实感，而是你守护着惊叹的能力。\n因此你感受细腻，善于读出氛围的变化。同一个地方，你常看到别人看不到的东西，创意也因此不断。不过期待越高，现实平淡时的失落也越深。\n你内心想相信，平凡的日子里也可能发生一个小小的奇迹。这份信念不是你的弱点，而是你最好的动力。",
    "ja": "あなたは、世界に説明のつかない隅っこが残っていてほしいと、ひそかに願っています。すべてがデータと理由で解ける世の中は少し退屈で、偶然の一致や理由のない良い予感を軽く流しません。現実感がないのではなく、驚きを感じる感覚を守っているのです。\nそのため感受性が繊細で、雰囲気の変化をよく読みます。同じ場所でも他の人が見ないものを見て、独創的な発想がよく出ます。ただ、期待が大きい分、現実が平凡なときの落胆も深くなりがちです。\n心の奥では、何でもない日常にも小さな奇跡がひとつくらい起こると信じたいのです。その信念は弱点ではなく、あなたの一番の原動力です。",
    "es": "En secreto esperas que el mundo conserve rincones sin explicar. Una vida donde todo se resuelve con datos y razones te parece algo aburrida, y no pasas por alto una coincidencia afortunada o una corazonada extrañamente buena. No te falta realismo: proteges tu capacidad de asombro.\nEso te hace sensible y buen lector de los cambios de ambiente. En el mismo sitio ves lo que otros no ven, y de ahí salen ideas creativas. La otra cara es que, cuanto mayor la esperanza, más profunda la decepción cuando la realidad resulta corriente.\nPor dentro quieres creer que un pequeño milagro todavía puede ocurrir en un día cualquiera. Esa creencia no es tu debilidad, sino tu mejor combustible.",
    "pt": "Você espera, em silêncio, que alguns cantos do mundo continuem sem explicação. Uma vida em que tudo se resolve em dados e motivos parece meio sem graça, e você não ignora uma coincidência feliz nem um pressentimento estranhamente bom. Isso não é falta de realismo. É um senso de admiração que você escolheu proteger.\nPor isso você é sensível e rápido(a) em notar mudanças de clima. Em um lugar, costuma ver o que os outros deixam passar, e isso alimenta sua criatividade. O outro lado é que, quanto maiores as expectativas, mais fundo vai a decepção quando a realidade é comum.\nPor dentro, você quer acreditar que um pequeno milagre ainda pode acontecer num dia qualquer. Essa crença não é fraqueza. É o seu melhor combustível.",
    "fr": "Vous espérez discrètement que certains recoins du monde resteront inexpliqués. Une vie où tout se résout en données et en raisons vous paraît un peu fade, et vous ne balayez pas une coïncidence heureuse ni un pressentiment étrangement bon. Ce n'est pas un manque de réalisme. C'est un sens de l'émerveillement que vous avez choisi de protéger.\nCela fait de vous quelqu'un de sensible, prompt à lire les changements d'atmosphère. Dans un lieu, vous voyez souvent ce que les autres manquent, ce qui nourrit votre créativité. Revers de la médaille : plus vos attentes sont hautes, plus la déception est profonde quand le réel est ordinaire.\nÀ l'intérieur, vous voulez croire qu'un petit miracle peut encore arriver un jour ordinaire. Cette croyance n'est pas votre faiblesse. C'est votre meilleur carburant.",
    "de": "Insgeheim hoffen Sie, dass manche Winkel der Welt unerklärt bleiben. Ein Leben, in dem sich alles in Daten und Gründe auflöst, kommt Ihnen ein wenig fad vor, und einen glücklichen Zufall oder ein seltsam gutes Gefühl tun Sie nicht einfach ab. Das ist kein Mangel an Realismus. Es ist ein Sinn für Staunen, den Sie bewusst schützen.\nDas macht Sie sensibel und schnell darin, Stimmungswechsel zu lesen. An einem Ort sehen Sie oft, was andere übersehen, und das nährt Ihre Kreativität. Die Kehrseite: Je höher die Hoffnung, desto tiefer die Enttäuschung, wenn die Wirklichkeit gewöhnlich bleibt.\nInnerlich möchten Sie glauben, dass an einem gewöhnlichen Tag noch ein kleines Wunder geschehen kann. Dieser Glaube ist keine Schwäche. Er ist Ihr bester Treibstoff.",
    "th": "คุณหวังเงียบ ๆ ว่าบางมุมของโลกจะยังคงอธิบายไม่ได้ ชีวิตที่ทุกอย่างลงเอยเป็นข้อมูลและเหตุผลดูน่าเบื่อไปหน่อย และคุณไม่ปัดทิ้งความบังเอิญดี ๆ หรือความรู้สึกดีแบบประหลาด นี่ไม่ใช่การขาดความเป็นจริง แต่เป็นความรู้สึกตื่นเต้นที่คุณเลือกปกป้องไว้\nนั่นทำให้คุณอ่อนไหวและจับการเปลี่ยนของบรรยากาศได้เร็ว ในที่เดียวกัน คุณมักเห็นสิ่งที่คนอื่นมองข้าม ซึ่งหล่อเลี้ยงความคิดสร้างสรรค์ แต่อีกด้านคือ ยิ่งหวังสูง ยิ่งผิดหวังลึกเมื่อความจริงธรรมดา\nข้างในใจ คุณอยากเชื่อว่าปาฏิหาริย์เล็ก ๆ ยังเกิดขึ้นได้ในวันธรรมดา ความเชื่อนี้ไม่ใช่จุดอ่อน แต่เป็นพลังงานที่ดีที่สุดของคุณ"
   },
   "opp": "useful",
   "match": "costume",
   "rarity": 5.2,
   "need": "wonder",
   "advice": {
    "ko": "오늘 만난 사람 하나에게 나만의 설정집을 써보는 건 어떨까요?",
    "en": "How about writing your own lore file for one person you met today?",
    "zh": "要不要给今天遇到的一个人写一份专属设定集？",
    "ja": "今日会った人のひとりに、自分だけの設定資料集を書いてみるのはどうでしょう？",
    "es": "¿Qué tal escribir tu propio libro de lore sobre alguien que conociste hoy?",
    "pt": "Que tal escrever o seu próprio arquivo de lore sobre alguém que você conheceu hoje?",
    "fr": "Et si vous écriviez votre propre fiche de lore sur une personne rencontrée aujourd'hui ?",
    "de": "Wie wäre es, eine eigene Lore-Akte über einen Menschen zu schreiben, den Sie heute getroffen haben?",
    "th": "ลองเขียนแฟ้มลอร์ของตัวเองเกี่ยวกับคนที่เพิ่งเจอวันนี้สักคนดีไหมครับ?"
   },
   "pt": "quer acreditar que há mais do que se vê",
   "fr": "veut croire que ce qu'on voit n'est pas tout",
   "de": "glauben möchte, dass es mehr gibt, als man sieht",
   "th": "อยากเชื่อว่าสิ่งที่เห็นไม่ใช่ทั้งหมด"
  },
  {
   "id": "scary",
   "tags": [
    "scary",
    "anatomy"
   ],
   "ko": "무서운 것도 한참 들여다보게 되는",
   "en": "can't help staring at scary things",
   "zh": "连吓人的东西也会盯着看很久",
   "ja": "怖いものも、つい長く見つめてしまう",
   "es": "no puede evitar quedarse mirando lo que da miedo",
   "kw": {
    "ko": "손가락 틈 관객",
    "en": "a finger-gap viewer",
    "zh": "指缝观众",
    "ja": "指の隙間の観客",
    "es": "un espectador entre los dedos",
    "pt": "quem espia entre os dedos",
    "fr": "du genre à regarder entre ses doigts",
    "de": "ein Durch-die-Finger-Gucker",
    "th": "คนดูผ่านช่องนิ้ว"
   },
   "inf": {
    "ko": "당신은 불편한 것에서 눈을 돌리기보다 한 번 더 들여다보는 쪽입니다. 무섭거나 기괴한 것 앞에서 겁먹으면서도 이상하게 끌리는 것은, 두려움을 안전한 거리에서 다뤄보고 싶은 호기심과 용기가 섞여 있기 때문입니다.\n성격은 의외로 차분하고 관찰력이 좋습니다. 감정이 큰 일이 생겨도 겉으로는 담담하지만, 속에서는 모든 것을 꼼꼼히 곱씹는 타입입니다. 사람에 대해서도 겉모습보다 어두운 이면과 사연에 관심이 갑니다. 그래서 깊은 대화를 나누기에 믿을 만한 상대입니다.\n마음속 욕구는 평소 숨겨둔 자신의 그늘까지 이해받고 싶다는 것입니다. 착한 모습만이 아니라 조금 기묘한 구석도 받아들여 주는 사람을 오랫동안 기다려 왔습니다.",
    "en": "When something unsettling appears, you look at it again instead of looking away. Being frightened and drawn in at once means curiosity and courage are mixed together: you want to handle fear at a safe distance.\nYour temperament is calmer and more observant than people expect. Even when something big happens you stay composed on the outside, while inside you go over every detail. You are interested in the shadowed side of people and their backstories, which makes you someone trusted with deep conversation.\nWhat you long for is to be understood, shadows included. You have waited a long time for someone who accepts the slightly strange parts of you, not only the kind ones.",
    "zh": "遇到令人不安的东西，你不是移开视线，而是再看一眼。又害怕又被吸引，说明好奇与勇气混在一起：你想在安全的距离外面对恐惧。\n你的性格比外表看起来更冷静、更善于观察。发生大事时表面平静，心里却把每个细节反复咀嚼。你对人的阴暗面和背后的故事感兴趣，所以适合做深谈的对象。\n你渴望的是被理解，连同阴影一起。你一直在等一个人，接受你有点奇怪的一面，而不只是善良的一面。",
    "ja": "あなたは、不気味なものから目をそらすより、もう一度見つめる側の人です。怖がりながらも不思議と惹かれるのは、好奇心と勇気が混ざっているからで、恐れを安全な距離で扱ってみたいのです。\n性格は意外と落ち着いていて観察力があります。大きな出来事があっても表向きは淡々としていますが、内側ではすべてを丁寧に噛みしめています。人の暗い面や背景の物語にも関心があり、深い話を打ち明けられる相手として信頼されます。\n心の奥の望みは、影の部分まで理解されたいということです。優しい面だけでなく、ちょっと奇妙な面も受け入れてくれる人を、長く待ってきました。",
    "es": "Ante lo inquietante, en lugar de apartar la vista, miras otra vez. Sentir miedo y atracción a la vez significa que se mezclan curiosidad y valentía: quieres tratar con el miedo desde una distancia segura.\nTu carácter es más sereno y observador de lo que parece. Aunque ocurra algo grande, por fuera mantienes la calma, mientras por dentro repasas cada detalle. Te interesa el lado oscuro de las personas y sus historias, así que eres alguien con quien se puede hablar a fondo.\nLo que anhelas es que te comprendan con todo y sombras. Llevas mucho tiempo esperando a alguien que acepte también tus rincones algo extraños, no solo los amables.",
    "pt": "Quando surge algo perturbador, você olha de novo em vez de desviar o olhar. Sentir medo e atração ao mesmo tempo mostra que curiosidade e coragem andam misturadas: você quer lidar com o medo a uma distância segura.\nSeu temperamento é mais calmo e observador do que parece. Mesmo quando algo grande acontece, você fica composto(a) por fora enquanto repassa cada detalhe por dentro. Você se interessa pelo lado sombrio das pessoas e pelas histórias por trás delas, e por isso é alguém a quem se confiam conversas profundas.\nO que você deseja é ser compreendido(a), sombras incluídas. Há muito tempo você espera alguém que aceite também as partes um pouco estranhas, não só as gentis.",
    "fr": "Quand quelque chose d'inquiétant apparaît, vous regardez à nouveau au lieu de détourner les yeux. Être effrayé(e) et attiré(e) à la fois montre que curiosité et courage sont mêlés : vous voulez affronter la peur à distance de sécurité.\nVotre tempérament est plus calme et plus observateur qu'on ne le croit. Même lorsque quelque chose de grave arrive, vous restez posé(e) à l'extérieur, tandis qu'à l'intérieur vous repassez chaque détail. Vous vous intéressez au côté sombre des gens et à leurs histoires, ce qui fait de vous quelqu'un à qui l'on confie des conversations profondes.\nCe que vous désirez, c'est être compris(e), ombres comprises. Vous attendez depuis longtemps quelqu'un qui accepte aussi vos parts un peu étranges, pas seulement les gentilles.",
    "de": "Wenn etwas Unheimliches auftaucht, schauen Sie noch einmal hin, statt wegzusehen. Gleichzeitig Angst zu haben und angezogen zu sein zeigt, dass sich Neugier und Mut mischen: Sie wollen die Angst aus sicherer Entfernung bewältigen.\nIhr Temperament ist ruhiger und beobachtender, als man erwartet. Selbst wenn etwas Großes passiert, bleiben Sie äußerlich gefasst, während Sie innen jedes Detail durchgehen. Sie interessieren sich für die Schattenseiten der Menschen und ihre Vorgeschichten, weshalb man Ihnen tiefe Gespräche anvertraut.\nSie sehnen sich danach, verstanden zu werden, Schatten inklusive. Lange warten Sie schon auf jemanden, der auch die leicht seltsamen Seiten an Ihnen annimmt, nicht nur die netten.",
    "th": "เวลามีอะไรที่น่าไม่สบายใจปรากฏขึ้น คุณมองซ้ำอีกครั้งแทนที่จะหันหนี การกลัวและถูกดึงดูดในเวลาเดียวกันแสดงว่าความอยากรู้และความกล้าผสมกันอยู่ คุณอยากจัดการกับความกลัวจากระยะที่ปลอดภัย\nนิสัยของคุณสงบและช่างสังเกตกว่าที่คนคิด แม้เรื่องใหญ่เกิดขึ้น ภายนอกคุณยังนิ่ง ขณะที่ข้างในทบทวนทุกรายละเอียด คุณสนใจด้านมืดของคนและเรื่องราวเบื้องหลัง จึงเป็นคนที่ถูกไว้ใจให้คุยเรื่องลึก ๆ\nสิ่งที่คุณโหยหาคือการถูกเข้าใจ พร้อมกับเงามืดด้วย คุณรอมานานให้ใครสักคนยอมรับส่วนแปลก ๆ ของคุณ ไม่ใช่แค่ส่วนที่ใจดี"
   },
   "opp": "soft",
   "match": "alien",
   "rarity": 3.4,
   "need": "stim",
   "advice": {
    "ko": "무서운 영화를 낮에 불 다 켜고 정주행해보는 건 어떨까요?",
    "en": "How about binge-watching a scary movie in the daytime with every light on?",
    "zh": "要不要白天开着所有的灯把恐怖片一口气看完？",
    "ja": "怖い映画を昼間に全部の電気をつけて一気見してみるのはどうでしょう？",
    "es": "¿Qué tal maratonear una película de miedo de día y con todas las luces encendidas?",
    "pt": "Que tal maratonar um filme de terror em pleno dia, com todas as luzes acesas?",
    "fr": "Et si vous enchaîniez un film d'horreur en plein jour, toutes lumières allumées ?",
    "de": "Wie wäre es, tagsüber bei voller Beleuchtung einen Horrorfilm am Stück zu schauen?",
    "th": "ลองดูหนังผีรวดเดียวตอนกลางวันโดยเปิดไฟทุกดวงดีไหมครับ?"
   },
   "pt": "não consegue parar de encarar coisas assustadoras",
   "fr": "ne peut pas s'empêcher de fixer les choses effrayantes",
   "de": "den Blick von Gruseligem nicht abwenden kann",
   "th": "อดจ้องของน่ากลัวไม่ได้"
  },
  {
   "id": "alien",
   "tags": [
    "alien"
   ],
   "ko": "낯선 존재에게도 먼저 차를 내줄 수 있는",
   "en": "would offer tea even to a stranger from space",
   "zh": "连陌生的存在也愿意先请它喝茶",
   "ja": "見知らぬ存在にも、先にお茶を出せる",
   "es": "ofrecería té incluso a un extraño de otro mundo",
   "kw": {
    "ko": "외계 친화형 인간",
    "en": "a natural friend of aliens",
    "zh": "亲外星型人类",
    "ja": "宇宙人と仲良くなれるタイプ",
    "es": "un amigo natural de los extraterrestres",
    "pt": "parça de alienígena de nascença",
    "fr": "pote d'office des extraterrestres",
    "de": "ein natürlicher Freund von Außerirdischen",
    "th": "เพื่อนแท้ของมนุษย์ต่างดาวโดยธรรมชาติ"
   },
   "inf": {
    "ko": "당신은 낯선 존재 앞에서 경계보다 호기심이 먼저 반응합니다. 나와 다른 생김새, 다른 사고방식, 다른 문화를 만나면 거부감보다 \"저건 어떤 세계일까\" 하는 궁금증이 앞섭니다. 열린 마음과 넓은 포용력이 타고난 장점입니다.\n사람들 사이에서는 주류에 속하지 않아도 불안해하지 않는 편이며, 오히려 소외된 사람이나 어색한 사람 곁에 자연스럽게 앉습니다. 그 덕에 당신 곁에는 독특한 사람들이 모입니다. 다만 본인도 가끔은 이 세상에 어색하게 와 있는 사람처럼 느낄 때가 있습니다.\n속마음은 나를 설명하지 않아도 있는 그대로 받아들여지는 곳을 찾고 있습니다. 어쩌면 당신 자신이 누군가에게는 가장 편안한 외계인일지도 모릅니다.",
    "en": "In front of something unfamiliar, curiosity answers before caution does. A different appearance, way of thinking or culture makes you wonder \"what kind of world is that?\" instead of pulling away. An open mind and wide tolerance are your natural gifts.\nAmong people, you do not fret about being outside the mainstream. You tend to sit beside the left-out or the awkward, so unusual people gather around you. Still, you sometimes feel like someone who arrived in this world slightly out of place.\nWhat you seek is a place where you are accepted without explaining yourself. You may well be the most comfortable alien someone has ever met.",
    "zh": "面对陌生的存在，好奇心比戒备先一步反应。不同的外表、不同的想法、不同的文化，你想的是“那是个什么样的世界”，而不是退开。开放的心和宽广的包容是你天生的优点。\n在人群中，你不会因为不属于主流而不安，反而自然地坐到被冷落或不自在的人身边。所以你身边聚集着独特的人。不过你自己偶尔也觉得像是不太自在地来到这个世界。\n你想找的是一个无需解释自己、也能被接纳的地方。说不定你就是某个人遇到过的最让人安心的外星人。",
    "ja": "あなたは、見慣れない存在を前にすると、警戒より先に好奇心が動きます。違う見た目、違う考え方、違う文化に出会っても、避けるより「どんな世界なのだろう」と思います。開かれた心と広い包容力が生まれつきの長所です。\n人の中では、主流に属さなくても不安になりません。むしろ、のけ者にされた人やぎこちない人のそばに自然と座ります。そのためあなたの周りには個性的な人が集まります。ただ、自分自身もときどき、この世界に少し場違いに来た人のように感じることがあります。\n心が探しているのは、自分を説明しなくてもそのまま受け入れられる場所です。もしかすると、あなたは誰かにとって一番安心できる宇宙人かもしれません。",
    "es": "Ante lo desconocido, la curiosidad responde antes que la cautela. Otro aspecto, otra forma de pensar, otra cultura: te preguntas \"¿cómo será ese mundo?\" en vez de retroceder. Una mente abierta y una amplia tolerancia son tus dones naturales.\nEntre la gente no te inquieta quedar fuera de la corriente principal; sueles sentarte junto a los marginados o a los torpes, así que te rodean personas singulares. Aun así, a veces sientes que llegaste a este mundo un poco fuera de lugar.\nBuscas un sitio donde te acepten sin tener que explicarte. Quizá seas el extraterrestre más reconfortante que alguien haya conocido.",
    "pt": "Diante do desconhecido, a curiosidade responde antes da cautela. Uma aparência, um jeito de pensar ou uma cultura diferente te faz querer saber \"que tipo de mundo é esse?\", em vez de recuar. Mente aberta e muita tolerância são dons seus.\nEntre as pessoas, você não se preocupa em ficar fora do padrão. Costuma se sentar ao lado de quem está de fora ou sem jeito, e por isso gente fora do comum se reúne ao seu redor. Ainda assim, às vezes você sente que chegou a este mundo meio deslocado(a).\nO que você busca é um lugar onde seja aceito(a) sem precisar se explicar. Talvez você seja o alienígena mais confortável que alguém já conheceu.",
    "fr": "Devant l'inconnu, la curiosité répond avant la prudence. Une apparence, une façon de penser ou une culture différentes vous font demander « quel genre de monde est-ce ? » plutôt que reculer. L'esprit ouvert et la grande tolérance sont vos dons naturels.\nParmi les gens, vous ne vous inquiétez pas d'être hors norme. Vous vous asseyez volontiers à côté de ceux qu'on laisse de côté ou qui sont mal à l'aise, si bien que les personnes originales se rassemblent autour de vous. Pourtant, il vous arrive de vous sentir arrivé(e) dans ce monde un peu de travers.\nCe que vous cherchez, c'est un endroit où l'on vous accepte sans que vous ayez à vous expliquer. Vous êtes peut-être l'extraterrestre le plus à l'aise que quelqu'un ait rencontré.",
    "de": "Vor Unbekanntem antwortet die Neugier schneller als die Vorsicht. Ein anderes Aussehen, eine andere Denkweise oder Kultur lässt Sie fragen: \"Was ist das wohl für eine Welt?\", statt zurückzuweichen. Ein offener Geist und große Toleranz sind Ihre natürlichen Gaben.\nUnter Menschen sorgen Sie sich nicht darum, außerhalb des Mainstreams zu stehen. Sie setzen sich gern neben die Ausgeschlossenen oder Unbeholfenen, deshalb sammeln sich ungewöhnliche Menschen um Sie. Trotzdem fühlen Sie sich manchmal, als wären Sie ein wenig fehl am Platz in diese Welt gekommen.\nSie suchen einen Ort, an dem man Sie annimmt, ohne dass Sie sich erklären müssen. Vielleicht sind Sie der gemütlichste Außerirdische, dem je jemand begegnet ist.",
    "th": "เมื่อเจอสิ่งที่ไม่คุ้นเคย ความอยากรู้ตอบสนองก่อนความระวัง หน้าตา วิธีคิด หรือวัฒนธรรมที่ต่างออกไปทำให้คุณสงสัยว่า \"นั่นเป็นโลกแบบไหนนะ\" แทนที่จะถอยหนี ใจเปิดกว้างและความเผื่อแผ่เป็นของขวัญตามธรรมชาติของคุณ\nท่ามกลางผู้คน คุณไม่กังวลที่อยู่นอกกระแสหลัก คุณมักไปนั่งข้างคนที่ถูกทิ้งหรืออึดอัด คนแปลก ๆ จึงมารวมตัวรอบคุณ แม้อย่างนั้น บางครั้งคุณก็รู้สึกเหมือนมาถึงโลกนี้แบบไม่ค่อยเข้าที่\nสิ่งที่คุณหาคือที่ที่ได้รับการยอมรับโดยไม่ต้องอธิบายตัวเอง บางทีคุณอาจเป็นมนุษย์ต่างดาวที่สบายใจที่สุดเท่าที่ใครเคยเจอ"
   },
   "opp": "tough",
   "match": "magic",
   "rarity": 5.9,
   "need": "welcome",
   "advice": {
    "ko": "처음 보는 사람에게 먼저 차 한 잔 권해보는 건 어떨까요?",
    "en": "How about offering a cup of tea first to someone you have just met?",
    "zh": "要不要先给刚认识的人递上一杯茶？",
    "ja": "初めて会った人に、先にお茶を一杯すすめてみるのはどうでしょう？",
    "es": "¿Qué tal ofrecerle primero una taza de té a alguien que acabas de conocer?",
    "pt": "Que tal oferecer uma xícara de chá, primeiro, a alguém que você acabou de conhecer?",
    "fr": "Et si vous offriez d'abord une tasse de thé à quelqu'un que vous venez de rencontrer ?",
    "de": "Wie wäre es, jemandem, den Sie gerade erst kennengelernt haben, zuerst eine Tasse Tee anzubieten?",
    "th": "ลองยื่นชาให้คนที่เพิ่งรู้จักสักแก้วก่อนดีไหมครับ?"
   },
   "pt": "ofereceria chá até a um forasteiro do espaço",
   "fr": "offrirait du thé même à un inconnu venu de l'espace",
   "de": "sogar einem Fremden aus dem All Tee anbieten würde",
   "th": "ชงชาให้แม้แต่คนแปลกหน้าจากอวกาศ"
  },
  {
   "id": "calm",
   "tags": [
    "east",
    "zen",
    "incense",
    "god"
   ],
   "ko": "고요하고 오래된 것 앞에서 걸음이 느려지는",
   "en": "slows down in front of anything quiet and ancient",
   "zh": "在安静而古老的东西面前会放慢脚步",
   "ja": "静かで古いものの前で足がゆっくりになる",
   "es": "aminora el paso ante lo silencioso y antiguo",
   "kw": {
    "ko": "빈티지 중독자",
    "en": "a vintage addict",
    "zh": "复古成瘾者",
    "ja": "ヴィンテージ中毒",
    "es": "un adicto a lo vintage",
    "pt": "rato de brechó",
    "fr": "accro au vintage",
    "de": "ein Vintage-Süchtiger",
    "th": "คนติดของวินเทจ"
   },
   "inf": {
    "ko": "당신은 빠르게 변하는 세상에서도 자기만의 속도를 지키는 사람입니다. 오래된 것과 조용한 것 앞에서 걸음이 느려지고, 그 순간 마음이 가장 안정됩니다. 소란에 휩쓸리지 않고 중심을 잡는 힘은 당신의 큰 강점입니다.\n사고방식은 신중하고 깊습니다. 결정을 내리기 전에 오래 생각하고, 한번 마음먹으면 쉽게 흔들리지 않습니다. 관계에서도 많은 사람보다 몇 안 되는 깊은 관계를 택합니다. 다만 변화가 필요한 순간에 너무 오래 머무르는 것은 조심하셔야 합니다.\n속마음은 아무도 재촉하지 않는 시간을 원합니다. 조용한 것을 곁에 두는 일은 단순한 취향이 아니라, 일상을 버티게 하는 작은 충전소입니다.",
    "en": "You keep your own pace even in a fast-moving world. Old and quiet things slow your steps, and that is when your mind feels steadiest. The strength to stay centered amid noise is one of your biggest assets.\nYou think carefully and deeply. You take your time before deciding, and once your mind is made up you rarely waver. In relationships you choose a few deep bonds over many shallow ones. Just be careful not to linger too long when change is genuinely needed.\nInside, you want time that nobody hurries. Keeping quiet things near you is not mere taste. It is a small charging station that helps you get through the day.",
    "zh": "在快速变化的世界里，你依然守着自己的节奏。面对安静和古老的事物，脚步会慢下来，那一刻内心最安稳。在喧嚣中不被卷走、守住中心的力量，是你很大的优势。\n你思考慎重而深入。做决定前想很久，一旦决定就不轻易动摇。在关系里，你选择少数深厚的关系，而不是众多浅交。只是需要改变的时候，要小心停留太久。\n内心深处，你想要一段没人催促的时间。把安静的东西放在身边，并不只是喜好，而是支撑日常的小小充电站。",
    "ja": "あなたは、速く変わる世の中でも自分のペースを守る人です。静かなもの、古いものの前で歩みが遅くなり、そのとき心が一番落ち着きます。騒がしさに流されずに軸を保つ力は、大きな強みです。\n考え方は慎重で深く、決める前に長く考え、一度決めたら簡単には揺れません。人間関係も、多くの浅い関係より少数の深い関係を選びます。ただ、変化が必要なときに留まりすぎないよう気をつけてください。\n心の奥では、誰も急かさない時間を望んでいます。静かなものをそばに置くのは単なる好みではなく、毎日を支える小さな充電所です。",
    "es": "Mantienes tu propio ritmo incluso en un mundo que cambia deprisa. Ante lo antiguo y lo silencioso tus pasos se hacen lentos, y entonces tu ánimo es más estable. La fuerza para mantenerte centrado entre el ruido es una de tus mayores bazas.\nPiensas con cuidado y profundidad. Tardas en decidir y, una vez decidido, rara vez vacilas. En las relaciones prefieres pocos vínculos hondos a muchos superficiales. Solo cuida de no quedarte demasiado cuando de verdad toca cambiar.\nPor dentro quieres un tiempo que nadie te apure. Tener cosas silenciosas cerca no es un simple gusto: es una pequeña estación de carga que te ayuda a sostener el día.",
    "pt": "Você mantém o seu próprio ritmo mesmo num mundo acelerado. Coisas antigas e quietas desaceleram seus passos, e é aí que sua mente fica mais firme. A força de permanecer centrado(a) no meio do barulho é um dos seus maiores trunfos.\nVocê pensa com cuidado e profundidade. Leva tempo antes de decidir e, depois de decidir, raramente vacila. Nas relações, prefere poucos laços profundos a muitos superficiais. Só tome cuidado para não demorar demais quando a mudança é realmente necessária.\nPor dentro, você quer um tempo que ninguém apresse. Manter coisas quietas por perto não é só gosto: é uma pequena estação de recarga que ajuda você a atravessar o dia.",
    "fr": "Vous gardez votre propre rythme même dans un monde qui va vite. Les choses anciennes et calmes ralentissent vos pas, et c'est alors que votre esprit est le plus stable. La force de rester centré(e) au milieu du bruit est l'un de vos plus grands atouts.\nVous réfléchissez avec soin et profondeur. Vous prenez votre temps avant de décider et, une fois votre choix fait, vous vacillez rarement. En amitié, vous préférez quelques liens profonds à beaucoup de liens superficiels. Prenez juste garde à ne pas vous attarder quand le changement est vraiment nécessaire.\nÀ l'intérieur, vous voulez un temps que personne ne presse. Garder des choses calmes près de soi n'est pas qu'une question de goût : c'est une petite station de recharge qui vous aide à traverser la journée.",
    "de": "Sie halten Ihr eigenes Tempo, selbst in einer schnellen Welt. Alte und stille Dinge verlangsamen Ihre Schritte, und dann ist Ihr Geist am ruhigsten. Die Kraft, mitten im Lärm bei sich zu bleiben, ist eine Ihrer größten Stärken.\nSie denken sorgfältig und tief. Vor einer Entscheidung lassen Sie sich Zeit, und ist der Entschluss gefasst, wackeln Sie selten. In Beziehungen wählen Sie wenige tiefe Bindungen statt vieler oberflächlicher. Achten Sie nur darauf, nicht zu lange zu verweilen, wenn Veränderung wirklich nötig ist.\nInnerlich wünschen Sie sich Zeit, die niemand antreibt. Stille Dinge in der Nähe zu haben ist nicht bloß Geschmack. Es ist eine kleine Ladestation, die Ihnen durch den Tag hilft.",
    "th": "คุณรักษาจังหวะของตัวเอง แม้ในโลกที่เปลี่ยนเร็ว ของเก่าและเงียบทำให้ก้าวของคุณช้าลง และนั่นคือตอนที่ใจนิ่งที่สุด พลังที่จะอยู่กับศูนย์กลางท่ามกลางเสียงอึกทึกเป็นจุดแข็งที่ใหญ่ของคุณ\nคุณคิดอย่างรอบคอบและลึกซึ้ง ใช้เวลาก่อนตัดสินใจ และเมื่อตัดสินใจแล้วก็แทบไม่หวั่นไหว ในความสัมพันธ์ คุณเลือกความผูกพันลึก ๆ ไม่กี่คนแทนความรู้จักผิวเผินหลายคน แค่ระวังอย่าอยู่นานเกินไปเมื่อต้องเปลี่ยนจริง ๆ\nข้างในใจ คุณอยากได้เวลาที่ไม่มีใครเร่ง การมีของเงียบ ๆ อยู่ใกล้ตัวไม่ใช่แค่รสนิยม แต่เป็นสถานีชาร์จเล็ก ๆ ที่ช่วยให้ผ่านวันไปได้"
   },
   "opp": "prank",
   "match": "wall",
   "rarity": 6.5,
   "need": "cool",
   "advice": {
    "ko": "서랍 속 옛날 물건 하나를 꺼내서 오늘 써보는 건 어떨까요?",
    "en": "How about taking one old thing out of a drawer and using it today?",
    "zh": "要不要从抽屉里翻出一件旧物，今天就用起来？",
    "ja": "引き出しの奥の古い物をひとつ出して、今日使ってみるのはどうでしょう？",
    "es": "¿Qué tal sacar un objeto viejo del cajón y usarlo hoy?",
    "pt": "Que tal tirar uma coisa velha da gaveta e usá-la hoje?",
    "fr": "Et si vous sortiez un objet ancien d'un tiroir pour l'utiliser aujourd'hui ?",
    "de": "Wie wäre es, heute ein altes Ding aus der Schublade zu holen und zu benutzen?",
    "th": "ลองหยิบของเก่าชิ้นหนึ่งออกจากลิ้นชักมาใช้วันนี้ดีไหมครับ?"
   },
   "pt": "desacelera diante de tudo que é quieto e antigo",
   "fr": "ralentit devant tout ce qui est calme et ancien",
   "de": "bei allem Stillen und Uralten langsamer wird",
   "th": "ก้าวช้าลงเมื่อเจอสิ่งที่เงียบและเก่าแก่"
  },
  {
   "id": "keep",
   "tags": [
    "statue",
    "decor"
   ],
   "ko": "쓸모는 없어도 곁에 두고 싶은 것이 있는",
   "en": "keeps something useless close because it feels right",
   "zh": "有着没用却想留在身边的东西",
   "ja": "役に立たなくても、そばに置きたいものがある",
   "es": "guarda cerca algo inútil porque le parece correcto",
   "kw": {
    "ko": "쓸모없는 것의 수호자",
    "en": "a guardian of the useless",
    "zh": "没用之物的守护者",
    "ja": "役に立たないものの守り人",
    "es": "un guardián de lo inútil",
    "pt": "a alma guardiã das inutilidades",
    "fr": "dernier rempart de l'inutile",
    "de": "ein Hüter des Nutzlosen",
    "th": "ผู้พิทักษ์สิ่งไร้ประโยชน์"
   },
   "inf": {
    "ko": "당신은 쓸모의 기준으로 물건을 판단하지 않습니다. 기능이 없어도 의미가 있다면 남기고, 효율이 떨어져도 정이 가면 곁에 둡니다. 이는 낭비가 아니라 가치의 기준이 남들과 다르다는 뜻이며, 감정과 기억을 소중히 다루는 성향의 증거입니다.\n관계에서도 비슷합니다. 한번 마음을 준 사람과 인연을 쉽게 정리하지 못하고, 오래된 친구를 소중히 합니다. 그래서 신뢰받는 사람이 되지만, 놓아야 할 것을 놓지 못해 마음이 무거워지는 일도 있습니다.\n마음 깊은 곳의 바람은 효율과 성과로 평가되지 않는 것들도 이 세상에 있어도 된다는 확인입니다. 당신은 쓸모없는 것들의 가장 믿음직한 수호자입니다.",
    "en": "You do not judge objects by usefulness. If something means something, it stays, and if it is inefficient but dear, you keep it close. That is not waste. It shows that your sense of value differs from most people's, and that you treat feelings and memories with care.\nRelationships work the same way. Once you have given someone your heart, you struggle to let the connection go, and you cherish old friends. People trust you for it, though not letting go of what you should can weigh on you.\nYour deep wish is confirmation that things not measured by efficiency or results are allowed to exist. You are the most dependable guardian of useless things.",
    "zh": "你不以有用与否来评判物品。有意义就留下，效率低但有感情就放在身边。这不是浪费，而是价值标准与别人不同，说明你珍视感情和记忆。\n人际关系也类似。一旦付出真心，就很难轻易了结，你珍惜老朋友。所以你值得信赖，但有时放不下该放下的东西，心里会变沉。\n你深层的愿望，是确认那些不以效率和成果衡量的东西也可以存在。你是无用之物最可靠的守护者。",
    "ja": "あなたは、役に立つかどうかで物を判断しません。機能がなくても意味があれば残し、効率が悪くても愛着があればそばに置きます。それは無駄ではなく、価値の基準が人と違うということで、感情や思い出を大切にする性質の表れです。\n人間関係も似ています。一度心を預けた人との縁を簡単には整理できず、古い友人を大切にします。だから信頼される人ですが、手放すべきものを手放せず、心が重くなることもあります。\n心の奥の願いは、効率や成果で測れないものもこの世にあっていい、という確認です。あなたは役に立たないものたちの、一番頼もしい守り手です。",
    "es": "No juzgas los objetos por su utilidad. Si significan algo, se quedan; si son poco eficientes pero queridos, los tienes cerca. No es derroche: muestra que tu escala de valores es distinta y que cuidas los sentimientos y los recuerdos.\nLas relaciones funcionan igual. Una vez que das tu corazón, te cuesta cerrar un vínculo, y aprecias a los viejos amigos. Por eso se confía en ti, aunque no soltar lo que debes soltar a veces pesa.\nTu deseo profundo es confirmar que lo que no se mide por eficiencia ni resultados también puede existir. Eres el guardián más fiable de las cosas inútiles.",
    "pt": "Você não julga os objetos pela utilidade. Se algo significa alguma coisa, fica; se é ineficiente mas querido, você o mantém perto. Isso não é desperdício. Mostra que seu senso de valor difere do da maioria e que você trata sentimentos e lembranças com cuidado.\nAs relações funcionam do mesmo jeito. Depois de entregar o coração, é difícil largar o vínculo, e você valoriza os velhos amigos. Por isso confiam em você, embora não soltar o que deveria pesar às vezes.\nSeu desejo profundo é a confirmação de que o que não se mede por eficiência ou resultado também tem direito de existir. Você é o guardião mais confiável das coisas inúteis.",
    "fr": "Vous ne jugez pas les objets à leur utilité. Si quelque chose a du sens, il reste ; s'il est inefficace mais cher à votre cœur, vous le gardez près de vous. Ce n'est pas du gaspillage. Cela montre que votre échelle de valeurs diffère de celle de la plupart des gens, et que vous traitez les sentiments et les souvenirs avec soin.\nIl en va de même en amitié. Une fois que vous avez donné votre cœur, vous avez du mal à lâcher le lien, et vous chérissez vos vieux amis. On vous fait confiance pour cela, même si ne pas lâcher ce qu'il faudrait peut vous peser.\nVotre souhait profond est de voir confirmé que ce qui ne se mesure pas en efficacité ou en résultats a le droit d'exister. Vous êtes le gardien le plus fiable des choses inutiles.",
    "de": "Sie beurteilen Gegenstände nicht nach ihrem Nutzen. Hat etwas Bedeutung, bleibt es, und ist es ineffizient, aber lieb, halten Sie es nah bei sich. Das ist keine Verschwendung. Es zeigt, dass Ihr Wertgefühl von dem der meisten abweicht und dass Sie Gefühle und Erinnerungen sorgsam behandeln.\nMit Beziehungen ist es genauso. Haben Sie einmal Ihr Herz geschenkt, fällt es schwer, die Verbindung zu lösen, und Sie schätzen alte Freunde. Deshalb vertraut man Ihnen, auch wenn das Nichtloslassen von dem, was man loslassen sollte, manchmal schwer wiegt.\nIhr tiefer Wunsch ist die Bestätigung, dass Dinge, die man nicht an Effizienz oder Ergebnissen misst, existieren dürfen. Sie sind der verlässlichste Hüter nutzloser Dinge.",
    "th": "คุณไม่ตัดสินสิ่งของจากประโยชน์ใช้สอย ถ้ามันมีความหมายก็เก็บไว้ ถ้าไม่คุ้มแต่รักก็ให้อยู่ใกล้ตัว นี่ไม่ใช่ความสิ้นเปลือง แต่แสดงว่าเกณฑ์ค่าของคุณต่างจากคนส่วนใหญ่ และคุณใส่ใจความรู้สึกกับความทรงจำ\nความสัมพันธ์ก็เป็นแบบเดียวกัน เมื่อมอบใจให้ใครแล้ว คุณปล่อยมือยาก และให้ค่ากับเพื่อนเก่า คนจึงไว้ใจคุณ แม้การไม่ปล่อยสิ่งที่ควรปล่อยบางครั้งก็หนักใจ\nความปรารถนาลึก ๆ ของคุณคือการยืนยันว่าสิ่งที่วัดด้วยประสิทธิภาพหรือผลลัพธ์ไม่ได้ก็มีสิทธิ์ดำรงอยู่ คุณคือผู้พิทักษ์ที่ไว้ใจได้ที่สุดของสิ่งไร้ประโยชน์"
   },
   "opp": "useful",
   "match": "calm",
   "rarity": 0.5,
   "need": "free",
   "advice": {
    "ko": "당당하게 쓸모없는 물건 하나에게 자리를 내어주는 건 어떨까요?",
    "en": "How about proudly giving one useless thing a place of honor?",
    "zh": "要不要大大方方地给一件没用的东西留个位置？",
    "ja": "堂々と、役に立たないものにひとつ居場所をあげてみるのはどうでしょう？",
    "es": "¿Qué tal darle con orgullo un lugar a una cosa inútil?",
    "pt": "Que tal dar a uma coisa inútil um lugar de honra, com muito orgulho?",
    "fr": "Et si vous offriez fièrement une place d'honneur à une chose inutile ?",
    "de": "Wie wäre es, einem nutzlosen Ding stolz einen Ehrenplatz zu geben?",
    "th": "ลองมอบที่นั่งเกียรติยศให้ของไร้ประโยชน์สักชิ้นอย่างภาคภูมิดีไหมครับ?"
   },
   "pt": "guarda perto algo inútil porque sente que é certo",
   "fr": "garde près de lui quelque chose d'inutile parce que ça lui semble juste",
   "de": "etwas Nutzloses in der Nähe behält, weil es sich richtig anfühlt",
   "th": "เก็บของไร้ประโยชน์ไว้ใกล้ตัวเพราะรู้สึกว่าใช่"
  },
  {
   "id": "craft",
   "tags": [
    "ceramic",
    "craft",
    "mold"
   ],
   "ko": "손으로 빚은 어설픈 매력에 마음이 가는",
   "en": "is drawn to the clumsy charm of things made by hand",
   "zh": "被手工做出的笨拙魅力吸引",
   "ja": "手で作られたぎこちない魅力に惹かれる",
   "es": "se siente atraído por el encanto torpe de lo hecho a mano",
   "kw": {
    "ko": "찌꺼기 콜렉터",
    "en": "a scrap collector",
    "zh": "边角料收藏家",
    "ja": "カス収集家",
    "es": "un coleccionista de restos",
    "pt": "colecionador de sobras",
    "fr": "fan de bricoles ramassées",
    "de": "ein Krimskrams-Sammler",
    "th": "นักสะสมเศษของ"
   },
   "inf": {
    "ko": "당신은 매끈한 완성품보다 손의 흔적이 남은 것에 마음이 움직입니다. 삐뚤어진 선, 어딘가 어긋난 비율에서 만든 이의 정성과 사정이 느껴지기 때문입니다. 결과보다 과정을, 완벽함보다 진심을 읽어내는 감각이 뛰어납니다.\n사람을 대할 때도 겉으로 번지르르한 사람보다 서툴러도 성의 있는 사람을 신뢰합니다. 따뜻하고 인간적인 판단 기준이라 할 수 있습니다. 반면 스스로 무언가 만들거나 보여줄 때는 완성도가 부족하다는 불안이 앞서서 시작을 미루기도 합니다.\n속마음은 어설퍼도 괜찮다는 허락을 누군가에게서, 혹은 자신에게서 받고 싶어 합니다. 당신이 어설픈 것을 사랑하는 일은 곧 자신을 사랑하는 연습입니다.",
    "en": "You are moved less by polished finished goods than by things that carry the trace of a hand. A wobbly line or an off proportion lets you feel the care and circumstances of whoever made it. You read process over result and sincerity over perfection.\nWith people, too, you trust the clumsy but earnest over the glossy. It is a warm, human standard. When it comes to making or showing something yourself, though, worry about falling short can make you postpone starting.\nInside, you want permission, from someone or from yourself, to be imperfect. Loving the clumsy is, for you, practice in loving yourself.",
    "zh": "比起光滑的成品，你更被留着手痕的东西打动。歪斜的线条、不太对的比例，让你感到制作者的用心与处境。你读的是过程而非结果，是诚意而非完美。\n对待人也是，比起光鲜的人，你更信任笨拙却认真的人。这是一个温暖而有人情味的标准。不过轮到自己制作或展示时，担心不够好的不安会让你推迟开始。\n你内心想从别人或自己那里得到许可：不完美也没关系。爱上笨拙的东西，就是你练习爱自己的方式。",
    "ja": "あなたは、つるりとした完成品より、手の跡が残るものに心を動かされます。曲がった線やずれた比率に、作った人の心づくしや事情を感じるからです。結果より過程、完璧さより誠意を読み取る感覚に優れています。\n人に対しても、見栄えのいい人より、不器用でも誠実な人を信頼します。温かく人間らしい基準です。一方、自分で何かを作ったり見せたりするときは、出来が足りないという不安が先に立って、始めるのを先延ばしにすることがあります。\n心の奥では、不器用でもいいという許しを、誰かから、あるいは自分から受け取りたいのです。不器用なものを愛することは、自分を愛する練習でもあります。",
    "es": "Te conmueve más lo que lleva la huella de una mano que el producto pulido. Una línea torcida o una proporción desviada te dejan sentir el cuidado y las circunstancias de quien lo hizo. Lees el proceso antes que el resultado y la sinceridad antes que la perfección.\nCon las personas también confías más en lo torpe pero sincero que en lo reluciente. Es un criterio cálido y humano. Eso sí, cuando te toca crear o mostrar algo, el miedo a no estar a la altura puede hacerte retrasar el comienzo.\nPor dentro quieres un permiso, de alguien o tuyo, para ser imperfecto. Amar lo torpe es, para ti, practicar el quererte.",
    "pt": "Você se comove menos com produtos lisos e acabados do que com coisas que carregam a marca de uma mão. Uma linha torta ou uma proporção estranha faz você sentir o cuidado e a situação de quem fez. Você lê o processo mais que o resultado e a sinceridade mais que a perfeição.\nCom as pessoas também, confia mais no desajeitado e sincero do que no reluzente. É um critério caloroso e humano. Já na hora de fazer ou mostrar algo seu, a preocupação de não estar bom o bastante pode fazer você adiar o começo.\nPor dentro, você quer a permissão, de alguém ou de si mesmo(a), para ser imperfeito(a). Amar o desajeitado é, para você, um treino de amar a si.",
    "fr": "Vous êtes moins touché(e) par les produits finis et lisses que par les choses qui portent la trace d'une main. Un trait de travers ou une proportion approximative vous fait sentir l'attention et la situation de celui ou celle qui l'a fait. Vous lisez le processus plutôt que le résultat, la sincérité plutôt que la perfection.\nAvec les gens aussi, vous faites plus confiance aux maladroits sincères qu'aux brillants. C'est un critère chaleureux et humain. Mais quand il s'agit de créer ou de montrer quelque chose vous-même, la crainte de ne pas être à la hauteur peut vous faire repousser le début.\nÀ l'intérieur, vous voulez la permission, d'un autre ou de vous-même, d'être imparfait(e). Aimer le maladroit est, pour vous, un exercice pour apprendre à vous aimer.",
    "de": "Glatte Fertigprodukte bewegen Sie weniger als Dinge, die die Spur einer Hand tragen. Eine wackelige Linie oder schiefe Proportion lässt Sie die Sorgfalt und die Umstände des Machers spüren. Sie lesen den Prozess statt des Ergebnisses und die Aufrichtigkeit statt der Perfektion.\nAuch bei Menschen vertrauen Sie den Unbeholfenen, aber Ernsthaften mehr als den Glänzenden. Das ist ein warmer, menschlicher Maßstab. Geht es aber darum, selbst etwas zu machen oder zu zeigen, kann die Sorge, nicht gut genug zu sein, den Anfang hinauszögern.\nInnerlich wünschen Sie sich die Erlaubnis, von anderen oder von sich selbst, unperfekt sein zu dürfen. Das Unbeholfene zu lieben ist für Sie eine Übung darin, sich selbst zu lieben.",
    "th": "คุณประทับใจของที่ยังมีร่องรอยของมือมากกว่าของสำเร็จรูปเรียบเนียน เส้นเบี้ยวหรือสัดส่วนแปลก ๆ ทำให้คุณสัมผัสถึงความใส่ใจและสถานการณ์ของคนทำ คุณอ่านกระบวนการมากกว่าผลลัพธ์ และอ่านความจริงใจมากกว่าความสมบูรณ์แบบ\nกับคนก็เช่นกัน คุณไว้ใจคนซุ่มซ่ามแต่จริงใจมากกว่าคนเงางาม มันเป็นเกณฑ์ที่อบอุ่นและเป็นมนุษย์ แต่พอถึงตอนต้องทำหรือโชว์เอง ความกังวลว่าจะไม่ดีพออาจทำให้คุณเลื่อนการเริ่มออกไป\nข้างในใจ คุณอยากได้อนุญาตจากใครสักคนหรือจากตัวเองว่าไม่สมบูรณ์แบบก็ได้ การรักสิ่งซุ่มซ่ามคือการฝึกรักตัวเองของคุณ"
   },
   "opp": "sound",
   "match": "keep",
   "rarity": 6.2,
   "need": "play",
   "advice": {
    "ko": "오늘 주운 이상한 조각 하나를 책상에 전시해보는 건 어떨까요?",
    "en": "How about displaying one odd scrap you picked up today on your desk?",
    "zh": "要不要把今天捡到的一块奇怪碎片摆在书桌上展览？",
    "ja": "今日拾った変なかけらをひとつ、机の上に展示してみるのはどうでしょう？",
    "es": "¿Qué tal exponer en tu escritorio un trozo raro que recogiste hoy?",
    "pt": "Que tal expor na mesa uma sobra esquisita que você encontrou hoje?",
    "fr": "Et si vous exposiez sur votre bureau une drôle de bricole ramassée aujourd'hui ?",
    "de": "Wie wäre es, ein seltsames Fundstück von heute auf Ihrem Schreibtisch auszustellen?",
    "th": "ลองวางเศษของแปลก ๆ ที่เก็บได้วันนี้ไว้บนโต๊ะดีไหมครับ?"
   },
   "pt": "se encanta com o charme desajeitado do feito à mão",
   "fr": "est attiré par le charme maladroit du fait main",
   "de": "vom unbeholfenen Charme selbstgemachter Dinge angezogen wird",
   "th": "หลงเสน่ห์ซุ่มซ่ามของงานทำมือ"
  },
  {
   "id": "soft",
   "tags": [
    "cute",
    "plush",
    "doll"
   ],
   "ko": "폭신하고 작은 것에게 위로받는",
   "en": "is comforted by soft little things",
   "zh": "会被软软的小东西安慰",
   "ja": "ふわふわした小さなものに慰められる",
   "es": "se consuela con cosas pequeñas y blanditas",
   "kw": {
    "ko": "말랑한 것 중독자",
    "en": "a softness addict",
    "zh": "软萌成瘾者",
    "ja": "ふわふわ中毒者",
    "es": "un adicto a lo blandito",
    "pt": "refém de coisa macia",
    "fr": "accro au doudou",
    "de": "ein Kuschelweich-Süchtiger",
    "th": "ติดของนุ่ม ๆ"
   },
   "inf": {
    "ko": "당신은 부드럽고 작은 것에서 안정을 얻는 섬세한 사람입니다. 하루 동안 쌓인 긴장과 피로를 풀어줄 확실한 무언가가 곁에 있을 때 마음이 가라앉습니다. 이는 약함이 아니라 자신의 감정 상태를 정확히 알고 돌보는 능력입니다.\n성격은 온화하고 공감 능력이 높아 타인의 기분에 민감합니다. 그래서 주변에 편안함을 주지만, 남의 감정까지 떠안아 혼자 지치는 일이 많습니다. 거절하는 일이 어렵고, 괜찮은 척하는 데 능숙합니다.\n마음속 욕구는 누군가를 챙기는 쪽이 아니라 챙김을 받는 쪽이 되어보고 싶다는 것입니다. 오늘만큼은 당신이 기대어도 되는 존재를 하나쯤 가져도 좋겠습니다.",
    "en": "You find stability in soft, small things, a sensitive person who knows what actually eases the day's accumulated tension. That is not weakness. It is the ability to read your own state accurately and look after it.\nGentle by nature and high in empathy, you are tuned to other people's moods. That brings comfort to those around you, but you often take on their feelings and end up tired alone. Saying no is hard, and pretending to be fine comes easily.\nWhat you secretly want is to be the one who is looked after for once. You are allowed to have at least one thing you can lean on today.",
    "zh": "你从柔软小巧的东西里获得安定，是个细腻的人，清楚什么能缓解一天积累的紧绷。这不是软弱，而是准确了解并照顾自己状态的能力。\n你性格温和，共情力强，对他人的情绪很敏感。这给周围带来安慰，但你常把别人的情绪也揽下来，独自疲惫。拒绝很难，装作没事却很熟练。\n你暗地里想的，是偶尔也做被照顾的一方。今天，你也可以拥有一样能依靠的东西。",
    "ja": "あなたは、やわらかくて小さなものから安らぎを得る繊細な人です。一日のうちに溜まった緊張や疲れをほぐしてくれる確かな何かがそばにあると、心が落ち着きます。それは弱さではなく、自分の状態を正確に知って労わる力です。\n性格は穏やかで共感力が高く、他人の気分に敏感です。周りに安心を与えますが、他人の感情まで背負って一人で疲れることが多く、断るのが難しく、平気なふりが上手です。\n心の中の望みは、気遣う側ではなく、気遣われる側になってみたいということです。今日くらいは、もたれかかってもいい存在をひとつ持っていいのです。",
    "es": "Encuentras estabilidad en lo blando y pequeño; eres sensible y sabes qué alivia la tensión acumulada del día. Eso no es debilidad, sino la capacidad de conocer con exactitud tu estado y cuidarlo.\nDe carácter suave y mucha empatía, captas el ánimo ajeno. Eso reconforta a quienes te rodean, pero a menudo cargas con sus emociones y acabas agotado a solas. Decir que no cuesta y fingir que estás bien se te da fácil.\nEn secreto quieres ser, por una vez, quien recibe cuidados. Hoy te mereces tener algo en lo que apoyarte.",
    "pt": "Você encontra estabilidade em coisas macias e pequenas. É uma pessoa sensível que sabe o que realmente alivia a tensão acumulada do dia. Isso não é fraqueza: é a capacidade de ler o próprio estado com precisão e cuidar dele.\nGentil por natureza e com muita empatia, você sintoniza com o humor dos outros. Isso conforta quem está por perto, mas você costuma carregar os sentimentos alheios e acaba cansado(a) sozinho(a). Dizer não é difícil, e fingir que está bem é fácil.\nO que você quer em segredo é ser, pelo menos uma vez, quem recebe cuidado. Hoje você tem direito a ter pelo menos uma coisa em que se apoiar.",
    "fr": "Vous trouvez la stabilité dans les choses douces et petites. Vous êtes sensible et vous savez ce qui apaise réellement la tension accumulée de la journée. Ce n'est pas une faiblesse : c'est la capacité de lire précisément votre état et d'en prendre soin.\nDoux(ce) par nature et très empathique, vous êtes accordé(e) à l'humeur des autres. Cela réconforte votre entourage, mais vous prenez souvent leurs émotions sur vous et vous finissez fatigué(e) tout(e) seul(e). Dire non est difficile, faire semblant d'aller bien est facile.\nCe que vous voulez en secret, c'est être, pour une fois, celui ou celle dont on prend soin. Vous avez le droit d'avoir au moins une chose sur laquelle vous appuyer aujourd'hui.",
    "de": "Sie finden Halt in weichen, kleinen Dingen. Sie sind ein sensibler Mensch und wissen, was die über den Tag angesammelte Anspannung wirklich lindert. Das ist keine Schwäche. Es ist die Fähigkeit, den eigenen Zustand genau zu lesen und für ihn zu sorgen.\nVon Natur aus sanft und sehr empathisch, sind Sie auf die Stimmungen anderer eingestellt. Das tröstet die Menschen um Sie herum, doch Sie nehmen deren Gefühle oft auf und sind am Ende allein müde. Nein zu sagen fällt schwer, so zu tun, als sei alles gut, leicht.\nHeimlich wünschen Sie sich, einmal diejenige oder derjenige zu sein, um die oder den man sich kümmert. Sie dürfen heute mindestens eine Sache haben, an die Sie sich anlehnen können.",
    "th": "คุณพบความมั่นคงในสิ่งนุ่ม ๆ เล็ก ๆ คุณเป็นคนละเอียดอ่อนที่รู้ว่าอะไรช่วยคลายความตึงเครียดที่สะสมมาทั้งวันได้จริง นี่ไม่ใช่ความอ่อนแอ แต่เป็นความสามารถในการอ่านสภาพตัวเองอย่างแม่นยำและดูแลมัน\nคุณอ่อนโยนโดยธรรมชาติและเห็นอกเห็นใจสูง ไวต่ออารมณ์ของคนอื่น ซึ่งช่วยปลอบคนรอบตัว แต่คุณมักแบกความรู้สึกของพวกเขามาด้วยจนเหนื่อยอยู่คนเดียว การปฏิเสธเป็นเรื่องยาก ส่วนการทำเป็นไม่เป็นไรเป็นเรื่องง่าย\nสิ่งที่คุณอยากได้เงียบ ๆ คือสักครั้งได้เป็นฝ่ายที่มีคนดูแล วันนี้คุณมีสิทธิ์มีอย่างน้อยหนึ่งสิ่งให้พิงได้"
   },
   "opp": "scary",
   "match": "cat",
   "rarity": 7.2,
   "need": "comfort",
   "advice": {
    "ko": "오늘 밤은 말랑한 것 하나 안고 일찍 자보는 건 어떨까요?",
    "en": "How about hugging something squishy and going to bed early tonight?",
    "zh": "今晚要不要抱着软软的东西早点睡？",
    "ja": "今夜はやわらかいものをひとつ抱いて、早めに寝てみるのはどうでしょう？",
    "es": "¿Qué tal abrazar algo blandito y acostarte pronto esta noche?",
    "pt": "Que tal abraçar algo fofinho e dormir cedo hoje?",
    "fr": "Et si vous serriez quelque chose de tout mou et alliez vous coucher tôt ce soir ?",
    "de": "Wie wäre es, heute Abend etwas Quetschiges zu umarmen und früh ins Bett zu gehen?",
    "th": "คืนนี้ลองกอดอะไรนิ่ม ๆ แล้วเข้านอนเร็ว ๆ ดีไหมครับ?"
   },
   "pt": "se conforta com coisinhas macias",
   "fr": "se réconforte avec de petites choses douces",
   "de": "von weichen kleinen Dingen getröstet wird",
   "th": "ได้รับการปลอบประโลมจากของนุ่ม ๆ ชิ้นเล็ก ๆ"
  },
  {
   "id": "cat",
   "tags": [
    "cat"
   ],
   "ko": "게으르고 도도한 고양이 쪽에 마음이 가는",
   "en": "leans toward lazy, haughty cats",
   "zh": "偏爱慵懒又傲娇的猫",
   "ja": "怠け者で気高い猫に心が向く",
   "es": "se inclina por los gatos perezosos y altivos",
   "kw": {
    "ko": "고양이 집사 예약자",
    "en": "a cat-butler in waiting",
    "zh": "预约铲屎官",
    "ja": "猫の執事候補",
    "es": "un mayordomo de gatos en espera",
    "pt": "futuro mordomo de gato",
    "fr": "majordome de chat en devenir",
    "de": "ein Katzenbutler in spe",
    "th": "ทาสแมวที่รอเป็น"
   },
   "inf": {
    "ko": "당신은 자기 속도와 거리를 중요하게 여깁니다. 도도하고 게으른 것을 보면 이상하게 마음이 가는 것은, 눈치 보지 않고 자기 방식대로 사는 모습에 대한 동경이 있기 때문입니다. 평소에는 배려하느라 못 했던 것을 그 존재가 대신 해주는 셈입니다.\n사람들과는 적당한 거리를 유지하는 편이고, 친해지면 의외로 다정합니다. 독립심이 강하고 혼자 있는 시간에서 에너지를 얻습니다. 다만 거리를 두는 습관이 때로는 다가오려는 사람을 밀어내는 것으로 오해받기도 합니다.\n속마음은 아무에게도 설명하지 않고 쉬어도 되는 자유를 원합니다. 조금 게으르게 살아도 괜찮다는 허락이 당신에게 가장 필요한 것입니다.",
    "en": "You value your own pace and distance. The pull you feel toward lazy, aloof things comes from admiring a creature that lives its own way without watching anyone's face. It does on your behalf what consideration usually prevents you from doing.\nYou keep a comfortable distance from people, and once close, you are unexpectedly affectionate. You are independent and recharge in time alone, though keeping distance can be mistaken for pushing away those who approach.\nDeep down, you want the freedom to rest without explaining yourself. Permission to live a little lazily is what you need most.",
    "zh": "你重视自己的节奏和距离。对慵懒又高傲的东西莫名倾心，是因为你羡慕那种不看别人脸色、按自己方式生活的样子。平时因为体贴而没做的事，它替你做了。\n你与人保持适度距离，熟了之后却出人意料地温柔。你独立，在独处中恢复能量。只是保持距离的习惯有时会被误会成推开想靠近的人。\n内心深处，你想要不用向任何人解释就能休息的自由。你最需要的，是允许自己活得懒散一点。",
    "ja": "あなたは、自分のペースと距離を大切にします。気ままで気位の高いものに不思議と惹かれるのは、人の顔色を見ず自分流に生きる姿への憧れがあるからです。普段は気遣いで我慢していることを、その存在が代わりにしてくれるのです。\n人とは適度な距離を保ち、親しくなると意外に優しい人です。独立心が強く、一人の時間でエネルギーを得ます。ただ、距離を置く習慣が、近づこうとする人を遠ざけていると誤解されることもあります。\n心の奥では、誰にも説明せずに休んでいい自由を望んでいます。少し怠けて生きてもいいという許しが、あなたに一番必要なものです。",
    "es": "Valoras tu propio ritmo y tu distancia. La atracción por lo perezoso y altivo viene de admirar a quien vive a su manera sin mirar caras. Esa criatura hace por ti lo que la consideración te suele impedir.\nMantienes una distancia cómoda con la gente y, ya con confianza, eres sorprendentemente cariñoso. Eres independiente y recuperas energía en soledad, aunque la costumbre de guardar distancia a veces se malinterpreta como rechazo.\nEn el fondo quieres la libertad de descansar sin dar explicaciones. El permiso de vivir un poco a lo perezoso es lo que más necesitas.",
    "pt": "Você valoriza o seu ritmo e a sua distância. A atração por coisas preguiçosas e distantes vem de admirar um bicho que vive do seu jeito, sem olhar a cara de ninguém. Ele faz por você o que a consideração costuma impedir.\nVocê mantém uma distância confortável das pessoas e, depois que se aproxima, é inesperadamente carinhoso(a). É independente e recarrega as energias no tempo a sós, mas a distância pode ser confundida com um afastamento de quem se aproxima.\nNo fundo, você quer a liberdade de descansar sem se explicar. A permissão para viver um pouco preguiçoso(a) é o que você mais precisa.",
    "fr": "Vous tenez à votre rythme et à votre distance. L'attrait que vous ressentez pour les choses paresseuses et distantes vient de l'admiration pour une créature qui vit à sa façon sans surveiller le regard de personne. Elle fait pour vous ce que la délicatesse vous empêche habituellement de faire.\nVous gardez une distance confortable avec les gens et, une fois proche, vous êtes étonnamment affectueux(se). Vous êtes indépendant(e) et vous rechargez vos batteries dans le temps passé seul(e), même si cette distance peut être prise pour un rejet par ceux qui s'approchent.\nAu fond, vous voulez la liberté de vous reposer sans vous justifier. La permission de vivre un peu paresseusement est ce dont vous avez le plus besoin.",
    "de": "Sie schätzen Ihr eigenes Tempo und Ihre Distanz. Der Sog, den träge, unnahbare Wesen auf Sie ausüben, kommt von der Bewunderung für ein Geschöpf, das auf seine Art lebt, ohne auf jemandes Gesicht zu achten. Es tut stellvertretend für Sie, woran Rücksichtnahme Sie sonst hindert.\nSie halten angenehmen Abstand zu Menschen und sind, wenn man Ihnen nahe ist, überraschend zugewandt. Sie sind unabhängig und tanken in der Zeit allein auf, auch wenn die Distanz leicht als Zurückweisung derer missverstanden wird, die sich nähern.\nIm Innersten wünschen Sie sich die Freiheit, sich auszuruhen, ohne sich zu erklären. Die Erlaubnis, ein wenig faul zu leben, brauchen Sie am meisten.",
    "th": "คุณให้ค่ากับจังหวะและระยะห่างของตัวเอง ที่คุณถูกดึงดูดไปหาสิ่งที่ขี้เกียจและเมินเฉย เป็นเพราะชื่นชมสิ่งมีชีวิตที่อยู่ในแบบของตัวเองโดยไม่มองสีหน้าใคร มันทำแทนคุณในสิ่งที่ความเกรงใจมักห้ามไว้\nคุณรักษาระยะห่างพอสบายกับผู้คน และเมื่อสนิทแล้วกลับอ่อนโยนเกินคาด คุณเป็นตัวของตัวเองและฟื้นพลังในเวลาที่อยู่คนเดียว แม้การรักษาระยะอาจถูกเข้าใจผิดว่าผลักคนที่เข้ามา\nลึก ๆ แล้ว คุณอยากได้อิสระที่จะพักโดยไม่ต้องอธิบาย การอนุญาตให้ตัวเองใช้ชีวิตขี้เกียจสักหน่อยคือสิ่งที่คุณต้องการที่สุด"
   },
   "opp": "tough",
   "match": "soft",
   "rarity": 7.3,
   "need": "cool",
   "advice": {
    "ko": "고양이처럼 오늘 하루 아무것도 안 해보는 건 어떨까요?",
    "en": "How about doing absolutely nothing today, like a cat?",
    "zh": "要不要像猫一样，今天什么都不做？",
    "ja": "猫のように、今日は一日何もしないでみるのはどうでしょう？",
    "es": "¿Qué tal no hacer absolutamente nada hoy, como un gato?",
    "pt": "Que tal não fazer absolutamente nada hoje, como um gato?",
    "fr": "Et si vous ne faisiez absolument rien aujourd'hui, comme un chat ?",
    "de": "Wie wäre es, heute wie eine Katze absolut nichts zu tun?",
    "th": "ลองไม่ทำอะไรเลยทั้งวันเหมือนแมวดีไหมครับ?"
   },
   "pt": "se inclina para gatos preguiçosos e arrogantes",
   "fr": "penche pour les chats paresseux et hautains",
   "de": "zu faulen, hochnäsigen Katzen neigt",
   "th": "เอนเอียงไปทางแมวขี้เกียจที่เชิดหยิ่ง"
  },
  {
   "id": "frog",
   "tags": [
    "frog"
   ],
   "ko": "개구리 같은 존재에게 은근히 마음이 가는",
   "en": "quietly feels for frog-like creatures",
   "zh": "暗暗偏爱像青蛙一样的存在",
   "ja": "カエルのような存在に、なんとなく心が向く",
   "es": "siente algo por las criaturas como las ranas",
   "kw": {
    "ko": "개구리 애호가",
    "en": "a frog enthusiast",
    "zh": "青蛙爱好者",
    "ja": "カエル愛好家",
    "es": "un entusiasta de las ranas",
    "pt": "fã de sapo",
    "fr": "fan de grenouilles",
    "de": "ein Froschfan",
    "th": "แฟนคลับกบ"
   },
   "inf": {
    "ko": "당신은 남들이 크게 주목하지 않는 존재에게서 매력을 발견하는 사람입니다. 개구리처럼 화려하지 않지만 묘하게 정이 가는 것을 알아보는 눈은, 사람과 상황을 겉이 아니라 결로 읽는 감각에서 옵니다.\n성격은 소박하고 유머 감각이 있으며, 거창한 목표보다 소소한 즐거움을 소중히 합니다. 유행에 휩쓸리지 않고 자신만의 기준을 가지고 있어서 오래 봐야 진가가 드러나는 타입입니다. 다만 겸손이 지나쳐 자신의 매력을 낮게 평가하는 경향이 있습니다.\n속마음은 특별해 보이지 않아도 괜찮다는 확인을 받고 싶어 합니다. 눈에 띄지 않는 것을 사랑하는 사람은, 결국 눈에 띄지 않는 자신도 사랑할 수 있게 됩니다.",
    "en": "You find charm in things most people do not notice. Spotting something unflashy yet oddly endearing, like a frog, comes from reading people and situations by their texture instead of their surface.\nYou are modest and have a sense of humor, preferring small pleasures to grand goals. You follow your own standards rather than trends, so your worth shows only after people have known you a while. Your modesty, though, can lead you to rate your own appeal too low.\nInside, you want reassurance that you do not need to look special. Someone who loves the unnoticed can eventually love the unnoticed self too.",
    "zh": "你能在别人不太注意的东西里发现魅力。像青蛙那样不华丽却莫名可爱的东西，你能认出来，源于你用质地而不是表面去读人与情境。\n你朴素、有幽默感，比起远大目标更珍惜小小的乐趣。你不追赶潮流，有自己的标准，所以相处久了才显出价值。不过谦逊过头，容易低估自己的魅力。\n内心里，你想得到确认：不显得特别也没关系。爱着不起眼之物的人，最终也能爱上不起眼的自己。",
    "ja": "あなたは、人があまり注目しない存在に魅力を見つける人です。カエルのように派手ではないのにどこか憎めないものを見抜く目は、人や状況を表面ではなく質感で読む感覚から来ています。\n性格は素朴でユーモアがあり、大きな目標より小さな楽しみを大切にします。流行に流されず自分の基準を持っているので、長く付き合うほど真価が見えるタイプです。ただ、謙虚さが過ぎて、自分の魅力を低く見積もりがちです。\n心の奥では、特別に見えなくても大丈夫という確認がほしいのです。目立たないものを愛する人は、いずれ目立たない自分も愛せるようになります。",
    "es": "Encuentras encanto en lo que casi nadie nota. Reconocer algo poco vistoso pero extrañamente entrañable, como una rana, viene de leer a las personas y las situaciones por su textura y no por su superficie.\nEres sencillo y con sentido del humor, y valoras los pequeños placeres más que las grandes metas. No sigues modas y tienes tus propios criterios, así que tu valor se ve con el tiempo. La humildad, eso sí, puede llevarte a subestimar tu atractivo.\nPor dentro quieres la confirmación de que no hace falta parecer especial. Quien ama lo que pasa desapercibido acaba pudiendo amar también al que pasa desapercibido en sí mismo.",
    "pt": "Você acha charme no que a maioria nem percebe. Notar algo discreto, mas estranhamente adorável, como um sapo, vem de ler pessoas e situações pela textura, e não pela superfície.\nVocê é modesto(a) e tem senso de humor, e prefere pequenos prazeres a grandes metas. Segue os seus próprios critérios em vez das modas, por isso o seu valor só aparece depois que as pessoas te conhecem um pouco. A modéstia, porém, pode levar você a subestimar o próprio encanto.\nPor dentro, você quer a garantia de que não precisa parecer especial. Quem ama o que passa despercebido acaba amando também o seu eu despercebido.",
    "fr": "Vous trouvez du charme à ce que la plupart ne remarquent pas. Repérer une chose discrète mais étrangement attachante, comme une grenouille, vient du fait de lire les gens et les situations par leur texture plutôt que par leur surface.\nVous êtes modeste et avez de l'humour, préférant les petits plaisirs aux grands objectifs. Vous suivez vos propres critères plutôt que les modes, si bien que votre valeur n'apparaît qu'après qu'on vous a connu(e) un moment. Votre modestie peut toutefois vous faire sous-estimer votre propre attrait.\nÀ l'intérieur, vous voulez être rassuré(e) : vous n'avez pas besoin d'avoir l'air spécial(e). Qui aime ce qui passe inaperçu finit par aimer aussi le soi inaperçu.",
    "de": "Sie finden Charme in Dingen, die den meisten nicht auffallen. Etwas Unauffälliges, aber seltsam Liebenswertes wie einen Frosch zu entdecken, entsteht daraus, Menschen und Situationen nach ihrer Beschaffenheit statt nach ihrer Oberfläche zu lesen.\nSie sind bescheiden und haben Humor, und kleine Freuden sind Ihnen lieber als große Ziele. Sie folgen eigenen Maßstäben statt Trends, deshalb zeigt sich Ihr Wert erst, wenn man Sie eine Weile kennt. Ihre Bescheidenheit kann Sie allerdings dazu verleiten, Ihre eigene Anziehungskraft zu niedrig einzuschätzen.\nInnerlich möchten Sie die Gewissheit, dass Sie nicht besonders aussehen müssen. Wer das Unbeachtete liebt, kann irgendwann auch das unbeachtete Ich lieben.",
    "th": "คุณมองเห็นเสน่ห์ในสิ่งที่คนส่วนใหญ่ไม่ทันสังเกต การเห็นสิ่งที่ไม่หวือหวาแต่น่าเอ็นดูอย่างประหลาด เช่นกบ มาจากการอ่านคนและสถานการณ์ด้วยเนื้อสัมผัส ไม่ใช่ผิวเผิน\nคุณถ่อมตัวและมีอารมณ์ขัน ชอบความสุขเล็ก ๆ มากกว่าเป้าหมายใหญ่ ๆ คุณทำตามเกณฑ์ของตัวเองมากกว่ากระแส ดังนั้นคุณค่าของคุณปรากฏเมื่อคนรู้จักไปสักพัก แต่ความถ่อมตัวอาจทำให้คุณประเมินเสน่ห์ตัวเองต่ำไป\nข้างในใจ คุณอยากได้ความมั่นใจว่าไม่ต้องดูพิเศษก็ได้ คนที่รักสิ่งที่ถูกมองข้ามย่อมรักตัวเองที่ถูกมองข้ามได้ในที่สุด"
   },
   "opp": "outdoor",
   "match": "cat",
   "rarity": 8.1,
   "need": "free",
   "advice": {
    "ko": "비 오는 날 개구리처럼 가만히 앉아 멍때려보는 건 어떨까요?",
    "en": "How about sitting still and zoning out like a frog on a rainy day?",
    "zh": "要不要在下雨天像青蛙一样静静坐着发呆？",
    "ja": "雨の日にカエルのようにじっと座ってぼーっとしてみるのはどうでしょう？",
    "es": "¿Qué tal sentarte quieto y quedarte en blanco como una rana un día de lluvia?",
    "pt": "Que tal ficar parado(a), desligado(a) como um sapo num dia de chuva?",
    "fr": "Et si vous restiez immobile à rêvasser comme une grenouille un jour de pluie ?",
    "de": "Wie wäre es, an einem Regentag wie ein Frosch still zu sitzen und abzuschalten?",
    "th": "ลองนั่งนิ่ง ๆ เหม่อลอยเหมือนกบในวันฝนตกดีไหมครับ?"
   },
   "pt": "sente carinho por criaturas parecidas com sapos",
   "fr": "a une tendresse discrète pour les créatures qui ressemblent à des grenouilles",
   "de": "im Stillen für froschartige Geschöpfe schwärmt",
   "th": "เอ็นดูสิ่งมีชีวิตหน้าตาเหมือนกบอย่างเงียบ ๆ"
  },
  {
   "id": "animal",
   "tags": [
    "animal",
    "living",
    "monkey",
    "dog"
   ],
   "ko": "동물 앞에서 마음이 약해지는",
   "en": "goes soft around animals",
   "zh": "在动物面前会心软",
   "ja": "動物の前では心がゆるむ",
   "es": "se ablanda ante los animales",
   "kw": {
    "ko": "동물 앞에서 무방비한 사람",
    "en": "someone defenseless around animals",
    "zh": "在动物面前毫无防备的人",
    "ja": "動物の前では無防備な人",
    "es": "alguien indefenso ante los animales",
    "pt": "pessoa indefesa diante de bicho",
    "fr": "sans défense face aux animaux",
    "de": "bei Tieren völlig wehrlos",
    "th": "คนไร้พิษสงเมื่อเจอสัตว์"
   },
   "inf": {
    "ko": "당신은 말이 통하지 않아도 마음이 통하는 존재 앞에서 가장 솔직해집니다. 사람 앞에서는 계산하고 조절하던 감정이 동물 앞에서는 그냥 풀려버립니다. 이는 당신이 평소 얼마나 많은 감정을 조심스럽게 다루고 있는지를 보여줍니다.\n성격은 따뜻하고 순수한 면이 있어서 약한 존재를 지나치지 못합니다. 그래서 책임감이 강한 편이고, 한번 마음을 주면 끝까지 챙깁니다. 다만 감정이입이 커서 타인의 아픔에 쉽게 지치고, 자신을 돌보는 일은 뒷전이 되기도 합니다.\n속마음은 조건 없이 받아들여지는 관계를 갈망합니다. 판단도, 기대도 없이 곁에 있어주는 존재가 당신에게는 가장 큰 위로입니다.",
    "en": "You are most honest in front of creatures who connect without words. The feelings you calculate and adjust around people simply loosen around animals, which shows how carefully you handle your emotions day to day.\nWarm and pure-hearted, you cannot walk past something vulnerable. You carry a strong sense of responsibility and, once you commit, you look after them to the end. But strong empathy means others' pain tires you quickly, and caring for yourself slides to the back.\nWhat you long for is unconditional acceptance: no judgment, no expectations, just someone present. That is your greatest comfort.",
    "zh": "在无需言语就能心意相通的存在面前，你最坦率。在人面前计算、调整的情绪，在动物面前自然松开，这说明你平时多么小心地处理感情。\n你温暖而纯真，无法对弱小的存在视而不见。责任感强，一旦付出就照顾到底。但共情太强，容易被他人的痛苦耗尽，自己的照顾反而排在最后。\n你渴望的是无条件的接纳：没有评判，没有期待，只是陪在身边。这对你是最大的安慰。",
    "ja": "あなたは、言葉が通じなくても心が通じる存在の前でいちばん素直になります。人の前では計算し調整している感情が、動物の前ではそのままほどけます。普段いかに気持ちを慎重に扱っているかがわかります。\n温かく純粋なところがあり、弱いものを素通りできません。責任感が強く、一度心を預けたら最後まで面倒を見ます。ただ共感が大きいぶん、他人の痛みで疲れやすく、自分を労わるのは後回しになりがちです。\n心の奥で求めているのは、条件のない受容です。判断も期待もなく、ただそばにいてくれる存在が、あなたにとって最大の慰めです。",
    "es": "Eres más sincero ante seres que conectan sin palabras. Las emociones que calculas y ajustas ante las personas se aflojan sin más ante los animales, lo que muestra con cuánto cuidado manejas tus sentimientos a diario.\nCálido y de corazón puro, no puedes pasar de largo ante lo vulnerable. Tienes un fuerte sentido de la responsabilidad y, una vez comprometido, cuidas hasta el final. Pero con tanta empatía el dolor ajeno te agota enseguida y cuidarte a ti queda para el final.\nLo que anhelas es una aceptación sin condiciones: sin juicios, sin expectativas, solo compañía. Ese es tu mayor consuelo.",
    "pt": "Você é mais sincero(a) diante de quem se conecta sem palavras. Os sentimentos que você calcula e ajusta perto de pessoas simplesmente se soltam perto de animais, o que mostra o cuidado com que lida com as emoções no dia a dia.\nCaloroso(a) e de coração puro, você não consegue passar ao lado de algo frágil. Tem um forte senso de responsabilidade e, uma vez comprometido(a), cuida até o fim. Mas muita empatia significa que a dor alheia cansa rápido e o seu próprio cuidado vai para o fim da fila.\nO que você deseja é aceitação incondicional: sem julgamento, sem expectativa, só alguém presente. Esse é o seu maior conforto.",
    "fr": "Vous êtes le plus sincère devant ceux qui communiquent sans mots. Les sentiments que vous calculez et ajustez avec les gens se relâchent simplement auprès des animaux, ce qui montre avec quel soin vous gérez vos émotions au quotidien.\nChaleureux(se) et pur(e) de cœur, vous ne pouvez pas passer à côté de ce qui est fragile. Vous avez un fort sens des responsabilités et, une fois engagé(e), vous veillez jusqu'au bout. Mais une forte empathie signifie que la douleur des autres vous épuise vite et que prendre soin de vous passe au dernier rang.\nCe que vous désirez, c'est l'acceptation inconditionnelle : pas de jugement, pas d'attentes, juste une présence. C'est votre plus grand réconfort.",
    "de": "Vor Wesen, die ohne Worte verbinden, sind Sie am ehrlichsten. Die Gefühle, die Sie bei Menschen berechnen und anpassen, lösen sich bei Tieren einfach, und das zeigt, wie sorgsam Sie im Alltag mit Ihren Emotionen umgehen.\nHerzlich und reinen Herzens, können Sie an etwas Schutzbedürftigem nicht vorbeigehen. Sie haben ein starkes Verantwortungsgefühl, und haben Sie sich einmal verpflichtet, kümmern Sie sich bis zum Ende. Doch starke Empathie heißt, dass der Schmerz anderer Sie schnell erschöpft und die Sorge um sich selbst nach hinten rutscht.\nSie sehnen sich nach bedingungsloser Annahme: kein Urteil, keine Erwartungen, nur jemand, der da ist. Das ist Ihr größter Trost.",
    "th": "คุณจริงใจที่สุดต่อหน้าสิ่งมีชีวิตที่เชื่อมใจกันได้โดยไม่ต้องใช้คำพูด ความรู้สึกที่คุณคำนวณและปรับกับคนจะคลายออกเองเมื่ออยู่กับสัตว์ แสดงว่าคุณดูแลอารมณ์อย่างระมัดระวังในแต่ละวัน\nคุณอบอุ่นและใจบริสุทธิ์ เดินผ่านสิ่งที่อ่อนแอไม่ได้ มีความรับผิดชอบสูง เมื่อรับปากแล้วก็ดูแลจนถึงที่สุด แต่เพราะเห็นอกเห็นใจมาก ความเจ็บปวดของผู้อื่นจึงทำให้คุณเหนื่อยเร็ว และการดูแลตัวเองถูกเลื่อนไปท้ายสุด\nสิ่งที่คุณโหยหาคือการยอมรับแบบไม่มีเงื่อนไข ไม่ตัดสิน ไม่คาดหวัง แค่มีใครอยู่ข้าง ๆ นั่นคือความสบายใจที่ใหญ่ที่สุดของคุณ"
   },
   "opp": "human",
   "match": "soft",
   "rarity": 0.5,
   "need": "comfort",
   "advice": {
    "ko": "산책길에 만난 동물에게 인사부터 해보는 건 어떨까요?",
    "en": "How about greeting the first animal you meet on a walk?",
    "zh": "要不要散步时先跟遇到的小动物打个招呼？",
    "ja": "散歩で出会った動物に、まず挨拶してみるのはどうでしょう？",
    "es": "¿Qué tal saludar primero al animal que te encuentres en el paseo?",
    "pt": "Que tal cumprimentar o primeiro animal que você encontrar na rua?",
    "fr": "Et si vous saluiez le premier animal croisé pendant votre promenade ?",
    "de": "Wie wäre es, beim Spaziergang das erste Tier zu grüßen, dem Sie begegnen?",
    "th": "ลองทักทายสัตว์ตัวแรกที่เจอระหว่างเดินเล่นดีไหมครับ?"
   },
   "pt": "se derrete perto de animais",
   "fr": "fond devant les animaux",
   "de": "bei Tieren weich wird",
   "th": "ใจอ่อนเวลาอยู่กับสัตว์"
  },
  {
   "id": "tough",
   "tags": [
    "tough",
    "bear",
    "kangaroo"
   ],
   "ko": "투박해도 든든한 존재를 좋아하는",
   "en": "likes rough-looking but dependable beings",
   "zh": "喜欢外表粗犷却可靠的存在",
   "ja": "無骨でも頼もしい存在が好きな",
   "es": "aprecia a los seres toscos pero fiables",
   "kw": {
    "ko": "투박 근본파",
    "en": "a rugged OG",
    "zh": "粗犷老派",
    "ja": "無骨な根っからの人",
    "es": "un auténtico tosco",
    "pt": "veterano casca-grossa",
    "fr": "un vieux de la vieille",
    "de": "ein raues Urgestein",
    "th": "เก๋าเกมสายแกร่ง"
   },
   "inf": {
    "ko": "당신은 화려한 것보다 믿을 수 있는 것을 중시하는 현실적인 낭만가입니다. 투박해도 단단하고 든든한 존재에게 마음이 가는 것은, 쉽게 흔들리지 않는 안정감을 삶에서 가장 높게 치기 때문입니다.\n사람을 대할 때도 말을 많이 하는 사람보다 행동으로 보여주는 사람을 신뢰합니다. 본인 역시 필요할 때 묵묵히 나서주는 든든한 사람으로 통합니다. 다만 의지가 되는 입장에만 오래 서 있다 보니, 자신이 힘들다는 말은 꺼내기 어려워합니다.\n속마음은 늘 단단해야 한다는 부담에서 잠시 벗어나고 싶습니다. 든든한 사람도 누군가에게 기대어도 된다는 것을 기억하셨으면 합니다.",
    "en": "You are a practical romantic who prizes what can be trusted over what dazzles. Being drawn to the sturdy, if rough, comes from rating steadiness that does not waver at the very top.\nYou trust people who show it through actions more than those who talk a lot, and you yourself are known as the dependable one who steps up quietly. But after standing in the role of support for so long, saying you are tired is difficult.\nInside, you want a break from the pressure to always be strong. Even the dependable are allowed to lean on someone, and it is worth remembering.",
    "zh": "你是个务实的浪漫派，看重可以信赖的东西胜过耀眼的东西。被粗犷却结实可靠的存在吸引，是因为你把不动摇的安定感排在最前面。\n对人也一样，比起话多的人，你更信任用行动表示的人，你自己也被看作默默出手的可靠之人。不过长期站在支撑者的位置，让你难以开口说自己累了。\n内心里，你想暂时摆脱必须一直坚强的压力。可靠的人也可以依靠别人，希望你记得。",
    "ja": "あなたは、華やかなものより信頼できるものを重んじる、現実的なロマンチストです。武骨でも頑丈で頼もしい存在に惹かれるのは、簡単に揺らがない安定感を人生で最も高く評価しているからです。\n人に対しても、言葉の多い人より行動で示す人を信頼します。あなた自身も、必要なときに黙って前に出てくれる頼もしい人と思われています。ただ、支える側に長く立ちすぎて、つらいと言い出しにくくなっています。\n心の奥では、いつも強くなければという重荷から、少し離れたいと思っています。頼もしい人も誰かにもたれていいのだと、思い出してください。",
    "es": "Eres un romántico práctico que valora lo fiable por encima de lo deslumbrante. Que te atraiga lo recio pero sólido viene de poner la estabilidad que no se tambalea en lo más alto.\nCon la gente confías más en quien lo demuestra con hechos que en quien habla mucho, y a ti se te considera esa persona fiable que da un paso al frente sin hacer ruido. Pero tras tanto tiempo sosteniendo a otros, te cuesta decir que estás cansado.\nPor dentro quieres descansar de la presión de ser siempre fuerte. Recuerda que hasta quien es un apoyo puede apoyarse en alguien.",
    "pt": "Você é um(a) romântico(a) prático(a), que valoriza o que é confiável mais do que o que deslumbra. A atração pelo resistente, ainda que tosco, vem de colocar a firmeza que não vacila no topo da lista.\nVocê confia mais em quem mostra pelas ações do que em quem fala muito, e é conhecido(a) como a pessoa confiável que age em silêncio. Porém, depois de tanto tempo no papel de apoio, fica difícil dizer que está cansado(a).\nPor dentro, você quer uma folga da pressão de ser sempre forte. Até quem é confiável pode se apoiar em alguém, e vale lembrar disso.",
    "fr": "Vous êtes un(e) romantique pragmatique, qui estime ce en quoi l'on peut avoir confiance plus que ce qui éblouit. Être attiré(e) par ce qui est solide, même rustre, vient du fait de placer la stabilité qui ne vacille pas tout en haut.\nVous faites plus confiance à ceux qui le montrent par leurs actes qu'à ceux qui parlent beaucoup, et vous passez vous-même pour la personne fiable qui intervient en silence. Mais après avoir tenu si longtemps le rôle de soutien, il est difficile de dire que vous êtes fatigué(e).\nÀ l'intérieur, vous voulez une pause dans la pression d'être toujours fort(e). Même les gens fiables ont le droit de s'appuyer sur quelqu'un, et cela vaut la peine de s'en souvenir.",
    "de": "Sie sind praktisch und romantisch zugleich und schätzen das Verlässliche mehr als das Blendende. Die Anziehung zum Robusten, wenn auch Groben, entspringt dem Wert, den Sie unerschütterlicher Beständigkeit ganz oben zuordnen.\nSie vertrauen eher Menschen, die es durch Taten zeigen, als denen, die viel reden, und gelten selbst als die verlässliche Person, die still einspringt. Doch nach so langer Zeit in der Rolle der Stütze fällt es schwer zu sagen, dass Sie müde sind.\nInnerlich wünschen Sie sich eine Pause vom Druck, immer stark sein zu müssen. Auch Verlässliche dürfen sich an jemanden anlehnen, und daran sollten Sie sich erinnern.",
    "th": "คุณเป็นโรแมนติกแบบติดดิน ให้ค่ากับสิ่งที่ไว้ใจได้มากกว่าสิ่งที่ตระการตา การถูกดึงดูดไปหาสิ่งที่ทนทานแม้จะหยาบ มาจากการให้ความมั่นคงที่ไม่สั่นคลอนอยู่อันดับแรก\nคุณไว้ใจคนที่แสดงออกด้วยการกระทำมากกว่าคนที่พูดเยอะ และตัวคุณเองก็เป็นคนพึ่งพาได้ที่ลงมือเงียบ ๆ แต่เมื่ออยู่ในบทบาทผู้ค้ำจุนมานาน การบอกว่าเหนื่อยก็ยากขึ้น\nข้างในใจ คุณอยากพักจากแรงกดดันที่ต้องเข้มแข็งเสมอ แม้คนที่พึ่งพาได้ก็พึ่งพาใครได้ และอยากให้จำไว้"
   },
   "opp": "soft",
   "match": "outdoor",
   "rarity": 5.3,
   "need": "sturdy",
   "advice": {
    "ko": "오래 쓴 묵직한 물건 하나를 칭찬해주는 건 어떨까요?",
    "en": "How about complimenting one heavy old thing you have used for years?",
    "zh": "要不要夸一夸用了很久的那件沉甸甸的东西？",
    "ja": "長く使っている重みのある物をひとつ、褒めてあげるのはどうでしょう？",
    "es": "¿Qué tal elogiar un objeto pesado que llevas años usando?",
    "pt": "Que tal elogiar uma coisa velha e pesada que você usa há anos?",
    "fr": "Et si vous complimentiez un objet lourd et vieux que vous utilisez depuis des années ?",
    "de": "Wie wäre es, ein schweres altes Ding, das Sie seit Jahren benutzen, zu loben?",
    "th": "ลองชมของหนัก ๆ เก่า ๆ ที่ใช้มาหลายปีสักชิ้นดีไหมครับ?"
   },
   "pt": "gosta de seres de aparência bruta, mas confiáveis",
   "fr": "aime les êtres à l'air rude mais fiables",
   "de": "raue, aber verlässliche Wesen mag",
   "th": "ชอบสิ่งที่ดูหยาบแต่พึ่งพาได้"
  },
  {
   "id": "sound",
   "tags": [
    "sound",
    "bird"
   ],
   "ko": "소리 하나에 마음이 움직이는",
   "en": "is moved by a single sound",
   "zh": "会被一个声音打动",
   "ja": "ひとつの音に心が動く",
   "es": "se deja mover por un solo sonido",
   "kw": {
    "ko": "ASMR 중독자",
    "en": "an ASMR addict",
    "zh": "ASMR上瘾者",
    "ja": "ASMR中毒",
    "es": "un adicto al ASMR",
    "pt": "viciado em ASMR",
    "fr": "accro à l'ASMR",
    "de": "ein ASMR-Süchtiger",
    "th": "ติดเสียง ASMR"
   },
   "inf": {
    "ko": "당신은 눈보다 귀로 세상을 받아들이는 감각이 예민한 사람입니다. 어떤 소리 하나가 기분과 기억을 통째로 바꾸어 놓는 경험이 잦고, 분위기를 소리로 먼저 파악합니다. 감수성이 풍부하고 감정의 결이 섬세하다는 증거입니다.\n사람과의 관계에서도 말의 내용보다 말투와 목소리의 온도에 반응합니다. 그래서 상대의 기분 변화를 빨리 알아채고, 진심인지 아닌지도 직감적으로 구분합니다. 반면 소음이나 불편한 소리에 쉽게 지치는 편이라 조용한 휴식이 꼭 필요합니다.\n속마음은 말로 다 설명하지 못하는 감정을 소리로라도 전하고 싶어 합니다. 당신의 마음을 가장 잘 아는 것은 어쩌면 말이 아니라 소리일 것입니다.",
    "en": "You take in the world more through ears than eyes, and you are sensitive. A single sound can change your mood and memories entirely, and you read atmosphere by sound first. It is a sign of rich sensitivity and fine emotional grain.\nIn relationships you respond to tone and the warmth of a voice more than to the content of words. You catch shifts in someone's mood fast and sense instinctively whether they are sincere. On the other hand noise wears you out easily, so quiet rest is essential.\nInside, you want to convey with sound the feelings you cannot explain in words. What understands you best may be sound rather than speech.",
    "zh": "你用耳朵多于眼睛来接收世界，感觉敏锐。一个声音就能彻底改变你的心情和记忆，你总是先从声音判断氛围。这说明你感受丰富、情绪纹理细腻。\n在关系中，你对语气和声音的温度的反应，胜过话语的内容。你很快察觉对方情绪的变化，也凭直觉分辨真假。另一方面，你容易被噪音和刺耳的声音累到，所以安静的休息必不可少。\n内心里，你想把说不清的感情用声音传达出去。最懂你的，也许不是语言，而是声音。",
    "ja": "あなたは、目より耳で世界を受け取る感覚が鋭い人です。ひとつの音で気分や記憶ががらりと変わる経験が多く、雰囲気をまず音で把握します。感受性が豊かで、感情の肌理が細かい証拠です。\n人付き合いでも、言葉の内容より声の調子や温度に反応します。相手の気分の変化にすぐ気づき、本心かどうかも直感で見分けます。その反面、騒音や不快な音で疲れやすく、静かな休息が欠かせません。\n心の奥では、言葉で説明しきれない気持ちを音ででも伝えたいと思っています。あなたの心を一番よく知っているのは、言葉ではなく音かもしれません。",
    "es": "Recibes el mundo más por los oídos que por los ojos, y eres sensible. Un solo sonido puede cambiar por completo tu ánimo y tus recuerdos, y percibes el ambiente primero por el sonido. Es señal de una gran riqueza emocional y de matices finos.\nEn las relaciones respondes al tono y al calor de la voz más que al contenido de las palabras. Notas rápido los cambios de humor de alguien y distingues por intuición si es sincero. Por otro lado, el ruido te agota con facilidad, así que el descanso silencioso es esencial.\nPor dentro quieres transmitir con sonidos lo que no puedes explicar con palabras. Quizá lo que mejor te entiende no sea el habla, sino el sonido.",
    "pt": "Você capta o mundo mais pelos ouvidos do que pelos olhos, e é sensível. Um único som pode mudar totalmente seu humor e suas lembranças, e você lê o clima primeiro pelo som. É sinal de uma sensibilidade rica e de emoções de textura fina.\nNas relações, você reage ao tom e ao calor da voz mais do que ao conteúdo das palavras. Percebe rápido as mudanças de humor de alguém e sente por instinto se é sincero. Por outro lado, o barulho cansa você fácil, então o descanso em silêncio é essencial.\nPor dentro, você quer transmitir com som os sentimentos que não sabe explicar com palavras. O que melhor entende você talvez seja o som, e não a fala.",
    "fr": "Vous recevez le monde davantage par les oreilles que par les yeux, et vous êtes sensible. Un seul son peut changer complètement votre humeur et vos souvenirs, et vous lisez d'abord l'atmosphère par le son. C'est le signe d'une riche sensibilité et d'un grain émotionnel fin.\nEn amitié, vous réagissez au ton et à la chaleur de la voix plus qu'au contenu des mots. Vous percevez vite un changement d'humeur et sentez d'instinct si quelqu'un est sincère. En revanche, le bruit vous épuise facilement, si bien qu'un repos silencieux est essentiel.\nÀ l'intérieur, vous voulez transmettre par le son les sentiments que vous ne savez pas expliquer en mots. Ce qui vous comprend le mieux est peut-être le son plutôt que la parole.",
    "de": "Sie nehmen die Welt mehr mit den Ohren als mit den Augen auf, und Sie sind feinfühlig. Ein einziger Klang kann Stimmung und Erinnerungen völlig verändern, und Atmosphäre lesen Sie zuerst am Klang. Das ist ein Zeichen reicher Sensibilität und feiner emotionaler Maserung.\nIn Beziehungen reagieren Sie auf Tonfall und Wärme der Stimme stärker als auf den Inhalt der Worte. Sie bemerken schnell Stimmungswechsel und spüren instinktiv, ob jemand aufrichtig ist. Andererseits zehrt Lärm leicht an Ihnen, deshalb ist stille Erholung unverzichtbar.\nInnerlich möchten Sie mit Klang vermitteln, was Sie nicht in Worte fassen können. Was Sie am besten versteht, ist vielleicht Klang statt Sprache.",
    "th": "คุณรับรู้โลกผ่านหูมากกว่าตา และเป็นคนละเอียดอ่อน เสียงเพียงเสียงเดียวเปลี่ยนอารมณ์และความทรงจำได้ทั้งหมด และคุณอ่านบรรยากาศจากเสียงก่อนเสมอ นี่คือสัญญาณของความอ่อนไหวที่ลึกซึ้งและเนื้ออารมณ์ที่ละเอียด\nในความสัมพันธ์ คุณตอบสนองต่อน้ำเสียงและความอบอุ่นของเสียงมากกว่าเนื้อหาของคำพูด จับการเปลี่ยนอารมณ์ได้เร็ว และรู้สึกโดยสัญชาตญาณว่าใครจริงใจหรือไม่ ในอีกด้าน เสียงดังทำให้คุณเหนื่อยง่าย การพักเงียบ ๆ จึงสำคัญ\nข้างในใจ คุณอยากถ่ายทอดความรู้สึกที่อธิบายด้วยคำไม่ได้ด้วยเสียง สิ่งที่เข้าใจคุณดีที่สุดอาจเป็นเสียง ไม่ใช่คำพูด"
   },
   "opp": "wall",
   "match": "play",
   "rarity": 5.1,
   "need": "sound",
   "advice": {
    "ko": "오늘 잠들기 전 소리 하나만 골라서 끝까지 들어보는 건 어떨까요?",
    "en": "How about picking one sound tonight and listening to it all the way through before sleep?",
    "zh": "今晚睡前要不要只挑一种声音，从头听到尾？",
    "ja": "今夜は寝る前に音をひとつ選んで、最後まで聴いてみるのはどうでしょう？",
    "es": "¿Qué tal elegir un solo sonido esta noche y escucharlo entero antes de dormir?",
    "pt": "Que tal escolher um som esta noite e ouvi-lo até o fim antes de dormir?",
    "fr": "Et si vous choisissiez un son ce soir pour l'écouter jusqu'au bout avant de dormir ?",
    "de": "Wie wäre es, heute Abend ein Geräusch auszuwählen und es vor dem Schlafen bis zum Ende anzuhören?",
    "th": "คืนนี้ลองเลือกเสียงหนึ่งแล้วฟังให้จบก่อนนอนดีไหมครับ?"
   },
   "pt": "se emociona com um único som",
   "fr": "est ému par un seul son",
   "de": "von einem einzigen Geräusch bewegt wird",
   "th": "ประทับใจเพียงเสียงเดียว"
  },
  {
   "id": "play",
   "tags": [
    "game",
    "toy",
    "puzzle",
    "spin"
   ],
   "ko": "손으로 만지고 맞추며 노는 시간을 아끼는",
   "en": "treasures time spent playing with their hands",
   "zh": "珍惜用手摆弄、拼凑的游玩时光",
   "ja": "手で触れて組み立てて遊ぶ時間を大切にする",
   "es": "valora el tiempo de jugar con las manos",
   "kw": {
    "ko": "만지작 폐인",
    "en": "a fidget junkie",
    "zh": "手欠废人",
    "ja": "いじりまくり廃人",
    "es": "un yonqui del trasteo",
    "pt": "viciado em fidget",
    "fr": "accro au fidget",
    "de": "ein Fidget-Junkie",
    "th": "ขาแก้เหงามือ"
   },
   "inf": {
    "ko": "당신은 머리보다 손으로 생각하는 사람입니다. 무언가를 만지고 맞추고 돌려보는 동안 복잡했던 생각이 정리되고, 그 시간 자체가 휴식이 됩니다. 집중력이 높고 몰입하면 시간을 잊는 타입입니다.\n성격은 호기심이 많고 작은 디테일에 만족을 느끼는 편입니다. 결과를 빨리 내라는 압박보다는 자기 페이스로 가지고 놀 수 있는 여유가 있을 때 가장 창의적입니다. 다만 몰입이 깊은 만큼 해야 할 일을 미루고 소소한 즐거움으로 도피하는 일도 있습니다.\n속마음은 생산적이어야 한다는 압박 없이 그저 놀아도 된다는 허락을 원합니다. 손장난은 시간 낭비가 아니라 당신의 마음을 정리하는 가장 정직한 방법입니다.",
    "en": "You think with your hands more than your head. While touching, fitting and turning something, tangled thoughts sort themselves out, and that time itself is rest. You concentrate well and lose track of time once absorbed.\nCurious and satisfied by small details, you are most creative when you can play at your own pace, not under pressure for quick results. Because the absorption is deep, though, you sometimes postpone what must be done and escape into small pleasures.\nWhat you want is permission to simply play, with no pressure to be productive. Fiddling is not wasted time. It is your most honest way of tidying your mind.",
    "zh": "你用手思考，多于用脑。触摸、拼合、转动的时候，纷乱的念头会理顺，这段时间本身就是休息。你专注力强，一旦投入就忘了时间。\n你好奇，在小细节中得到满足，不被催着出结果、能按自己节奏摆弄时最有创意。不过投入得深，有时会拖延该做的事，躲进小小的乐趣里。\n你想要的是不受“必须有产出”压力的许可：就只是玩。摆弄东西不是浪费时间，而是你整理心情最诚实的方式。",
    "ja": "あなたは、頭より手で考える人です。何かを触って、はめて、回してみる間に、ごちゃついた考えが整理され、その時間そのものが休息になります。集中力が高く、没頭すると時間を忘れるタイプです。\n好奇心が強く、小さな細部に満足を感じます。結果を急かされるより、自分のペースでいじれる余裕があるときに一番創造的です。ただ、没頭が深いぶん、やるべきことを先延ばしにして小さな楽しみへ逃げることもあります。\n心の奥では、生産的でなければという圧力なしに、ただ遊んでいいという許しを望んでいます。手遊びは時間の無駄ではなく、あなたの心を整理する一番正直な方法です。",
    "es": "Piensas más con las manos que con la cabeza. Mientras tocas, encajas y giras algo, los pensamientos enredados se ordenan, y ese rato ya es descanso. Te concentras bien y pierdes la noción del tiempo cuando te absorbes.\nCurioso y satisfecho con los pequeños detalles, eres más creativo cuando puedes jugar a tu ritmo, sin la presión de resultados rápidos. Pero, por lo hondo de tu absorción, a veces pospones lo que toca y te refugias en pequeños placeres.\nLo que quieres es permiso para jugar sin más, sin la presión de ser productivo. Trastear no es perder el tiempo: es tu manera más honesta de ordenar la mente.",
    "pt": "Você pensa mais com as mãos do que com a cabeça. Enquanto toca, encaixa e gira algo, os pensamentos embaralhados se organizam, e esse tempo já é descanso. Você se concentra bem e perde a noção das horas quando mergulha.\nCurioso(a) e satisfeito(a) com pequenos detalhes, é mais criativo(a) quando pode brincar no seu ritmo, sem pressão por resultado rápido. Como a imersão é funda, às vezes você adia o que precisa ser feito e foge para pequenos prazeres.\nO que você quer é a permissão de simplesmente brincar, sem pressão de ser produtivo(a). Mexer em coisas não é tempo perdido: é o seu jeito mais honesto de arrumar a cabeça.",
    "fr": "Vous pensez davantage avec vos mains qu'avec votre tête. Pendant que vous touchez, assemblez et tournez quelque chose, les pensées emmêlées se démêlent, et ce moment est déjà du repos. Vous vous concentrez bien et perdez la notion du temps une fois absorbé(e).\nCurieux(se) et comblé(e) par les petits détails, vous êtes le plus créatif(ve) quand vous pouvez jouer à votre rythme, sans pression pour un résultat rapide. Comme l'immersion est profonde, il vous arrive toutefois de remettre à plus tard ce qui doit être fait pour vous réfugier dans de petits plaisirs.\nCe que vous voulez, c'est la permission de simplement jouer, sans pression d'être productif(ve). Tripoter n'est pas du temps perdu : c'est votre façon la plus honnête de ranger votre esprit.",
    "de": "Sie denken mehr mit den Händen als mit dem Kopf. Während Sie etwas anfassen, zusammenstecken und drehen, ordnen sich verworrene Gedanken, und diese Zeit ist selbst schon Erholung. Sie können sich gut konzentrieren und vergessen die Zeit, sobald Sie versunken sind.\nNeugierig und von kleinen Details erfüllt, sind Sie am kreativsten, wenn Sie in Ihrem eigenen Tempo spielen dürfen, ohne Druck auf schnelle Ergebnisse. Weil das Versinken tief ist, schieben Sie manchmal aber auf, was getan werden muss, und flüchten in kleine Freuden.\nSie wünschen sich die Erlaubnis, einfach zu spielen, ohne Druck, produktiv zu sein. Herumspielen ist keine verlorene Zeit. Es ist Ihre ehrlichste Art, den Kopf aufzuräumen.",
    "th": "คุณคิดด้วยมือมากกว่าด้วยหัว ขณะแตะ ประกอบ และหมุนของบางอย่าง ความคิดที่พันกันก็คลี่ออกเอง และเวลานั้นเองคือการพัก คุณมีสมาธิดี และลืมเวลาเมื่อจมอยู่กับมัน\nคุณช่างสงสัยและอิ่มใจกับรายละเอียดเล็ก ๆ สร้างสรรค์ที่สุดเมื่อได้เล่นตามจังหวะของตัวเอง โดยไม่ถูกเร่งให้ได้ผลเร็ว แต่เพราะจมลึก บางครั้งคุณเลื่อนสิ่งที่ต้องทำและหนีไปหาความสุขเล็ก ๆ\nสิ่งที่คุณอยากได้คือการอนุญาตให้เล่นเฉย ๆ โดยไม่ต้องกดดันให้ได้ผลงาน การเล่นของไม่ใช่เวลาที่เสียไป แต่เป็นวิธีจัดระเบียบใจที่ซื่อตรงที่สุดของคุณ"
   },
   "opp": "calm",
   "match": "outdoor",
   "rarity": 6.3,
   "need": "play",
   "advice": {
    "ko": "오늘은 손에 뭐든 쥐고 한 시간 만지작거려보는 건 어떨까요?",
    "en": "How about holding something and fiddling with it for a whole hour today?",
    "zh": "今天要不要手里握点什么，摆弄上一个小时？",
    "ja": "今日は何でも手に持って、一時間いじってみるのはどうでしょう？",
    "es": "¿Qué tal agarrar algo y trastear con ello una hora entera hoy?",
    "pt": "Que tal pegar um objeto e ficar mexendo nele por uma hora inteira hoje?",
    "fr": "Et si vous teniez un objet à tripoter pendant une heure entière aujourd'hui ?",
    "de": "Wie wäre es, heute eine ganze Stunde lang etwas in der Hand zu halten und damit herumzuspielen?",
    "th": "วันนี้ลองถืออะไรสักอย่างแล้วเล่นมันทั้งชั่วโมงดีไหมครับ?"
   },
   "pt": "valoriza o tempo brincando com as mãos",
   "fr": "chérit le temps passé à jouer avec ses mains",
   "de": "gern stundenlang mit den Händen spielt",
   "th": "รักเวลาที่ได้เล่นของด้วยมือ"
  },
  {
   "id": "outdoor",
   "tags": [
    "outdoor"
   ],
   "ko": "밖에서 몸을 움직이며 노는 걸 잊지 않은",
   "en": "hasn't forgotten how to play outside",
   "zh": "没有忘记在外面活动玩耍的",
   "ja": "外で体を動かして遊ぶことを忘れていない",
   "es": "no ha olvidado cómo jugar al aire libre",
   "kw": {
    "ko": "만년 초딩",
    "en": "a forever fifth-grader",
    "zh": "永远的小学生",
    "ja": "万年小学生",
    "es": "un eterno niño de primaria",
    "pt": "eterno aluno do quinto ano",
    "fr": "éternellement en CM2",
    "de": "ein ewiger Fünftklässler",
    "th": "เด็ก ป.5 ตลอดกาล"
   },
   "inf": {
    "ko": "당신은 어른이 되어도 몸을 움직이며 노는 즐거움을 놓지 않은 사람입니다. 책상 앞에서 생각만 하기보다 직접 뛰어들고 부딪치며 배우는 성향이고, 에너지가 넘칩니다. 어린 시절의 순수한 감각을 지키고 있다는 것은 큰 자산입니다.\n사람을 사귀는 방식도 시원시원하고 편견이 적어서 금세 친해집니다. 분위기를 활기차게 만들지만, 가만히 있어야 하는 시간이나 오래 앉아 있는 일에는 답답함을 크게 느낍니다. 쉬는 것을 게으름으로 여기는 습관도 조심하셔야 합니다.\n속마음은 의무와 책임에 짓눌리지 않고 마음껏 뛰어놀던 시절의 자유로 돌아가고 싶어 합니다. 당신에게 놀이는 사치가 아니라 생기를 되찾는 방법입니다.",
    "en": "You never gave up the joy of moving your body and playing, even as an adult. You learn by plunging in and bumping into things rather than just thinking at a desk, and you have plenty of energy. Keeping a childlike sense alive is a real asset.\nYou make friends in an easygoing way with few prejudices, and you lift the mood of a room. But stillness and long sitting feel stifling, and be careful about treating rest as laziness.\nInside, you want to return to the freedom of running around unburdened by duty. For you, play is not a luxury. It is how you recover your vitality.",
    "zh": "长大成人后，你依然没有丢掉活动身体、尽情玩耍的乐趣。比起坐在桌前空想，你更爱亲自投入、碰撞中学习，精力充沛。保有童年的纯真感觉是一笔很大的财富。\n你交朋友爽快，偏见少，很快就能熟络，也能让气氛活跃起来。但需要安静不动或久坐时会觉得很闷，也要小心把休息当成偷懒的习惯。\n内心里，你想回到不被义务和责任压着、尽情奔跑的自由。对你来说，玩不是奢侈，而是找回生气的方式。",
    "ja": "あなたは、大人になっても体を動かして遊ぶ楽しさを手放さなかった人です。机の前で考えるだけより、自分から飛び込んでぶつかりながら学ぶ性質で、エネルギーにあふれています。子どもの頃の純粋な感覚を保っているのは大きな財産です。\n人付き合いもさっぱりして偏見が少なく、すぐ打ち解けます。場を明るくしますが、じっとしている時間や長く座ることには窮屈さを強く感じます。休むことを怠けと考える習慣にも気をつけてください。\n心の奥では、義務や責任に押しつぶされず、思い切り走り回っていた頃の自由に戻りたいと思っています。あなたにとって遊びは贅沢ではなく、生気を取り戻す方法です。",
    "es": "No renunciaste, ya de adulto, a la alegría de mover el cuerpo y jugar. Aprendes lanzándote y chocando, más que pensando ante un escritorio, y rebosas energía. Conservar la sensación de la infancia es un gran activo.\nHaces amigos con soltura y pocos prejuicios, y animas el ambiente. Pero la quietud y estar mucho rato sentado te agobian, y cuidado con considerar el descanso como pereza.\nPor dentro quieres volver a la libertad de correr sin el peso del deber. Para ti, jugar no es un lujo: es la forma de recuperar la vitalidad.",
    "pt": "Você nunca abriu mão da alegria de mexer o corpo e brincar, nem depois de adulto. Aprende se jogando e esbarrando nas coisas, em vez de só pensar numa mesa, e tem muita energia. Manter vivo o jeito de criança é um tesouro de verdade.\nVocê faz amizade com leveza e poucos preconceitos, e levanta o astral do ambiente. Mas ficar parado e sentado por muito tempo sufoca, e cuidado para não tratar o descanso como preguiça.\nPor dentro, você quer voltar à liberdade de correr por aí sem o peso das obrigações. Para você, brincar não é luxo: é o jeito de recuperar a vitalidade.",
    "fr": "Vous n'avez jamais renoncé à la joie de bouger votre corps et de jouer, même adulte. Vous apprenez en vous lançant et en vous cognant aux choses plutôt qu'en réfléchissant à un bureau, et vous avez beaucoup d'énergie. Garder vivant un esprit d'enfant est un vrai atout.\nVous vous faites des amis facilement, avec peu de préjugés, et vous mettez de l'ambiance. Mais l'immobilité et les longues heures assis vous étouffent, et prenez garde à ne pas voir le repos comme de la paresse.\nÀ l'intérieur, vous voulez retrouver la liberté de courir partout sans le poids des obligations. Pour vous, jouer n'est pas un luxe : c'est la façon de retrouver votre vitalité.",
    "de": "Die Freude, den Körper zu bewegen und zu spielen, haben Sie auch als Erwachsene(r) nie aufgegeben. Sie lernen, indem Sie hineinspringen und anecken, statt nur am Schreibtisch zu denken, und haben viel Energie. Einen kindlichen Sinn lebendig zu halten ist ein echter Gewinn.\nSie schließen unkompliziert Freundschaften, mit wenig Vorurteilen, und heben die Stimmung in der Runde. Stillstand und langes Sitzen fühlen sich dagegen erstickend an, und hüten Sie sich davor, Ausruhen als Faulheit zu sehen.\nInnerlich möchten Sie zur Freiheit zurück, herumzurennen, unbelastet von Pflichten. Spielen ist für Sie kein Luxus. Es ist Ihr Weg, die Lebensgeister zurückzuholen.",
    "th": "แม้โตแล้ว คุณก็ไม่เคยทิ้งความสุขของการขยับร่างกายและเล่นสนุก คุณเรียนรู้จากการลงมือและชนกับสิ่งต่าง ๆ มากกว่าการนั่งคิดที่โต๊ะ และมีพลังเหลือเฟือ การรักษาความรู้สึกแบบเด็กไว้เป็นทรัพย์สินจริง ๆ\nคุณเป็นมิตรง่าย มีอคติน้อย สนิทกับคนไวและยกระดับบรรยากาศได้ แต่การนิ่งอยู่กับที่หรือนั่งนาน ๆ ทำให้อึดอัด และระวังการมองว่าการพักคือความขี้เกียจ\nข้างในใจ คุณอยากกลับไปมีอิสระวิ่งเล่นโดยไม่มีภาระหน้าที่กด สำหรับคุณ การเล่นไม่ใช่ความฟุ่มเฟือย แต่เป็นวิธีเรียกพลังชีวิตคืนมา"
   },
   "opp": "frog",
   "match": "play",
   "rarity": 1.6,
   "need": "move",
   "advice": {
    "ko": "퇴근길에 한 정거장 먼저 내려서 뛰어가보는 건 어떨까요?",
    "en": "How about getting off one stop early on the way home and running the rest?",
    "zh": "下班路上要不要提前一站下车，一路跑回去？",
    "ja": "帰り道に一駅手前で降りて、走ってみるのはどうでしょう？",
    "es": "¿Qué tal bajarte una parada antes al volver a casa y correr el resto?",
    "pt": "Que tal descer um ponto antes na volta para casa e correr o resto do caminho?",
    "fr": "Et si vous descendiez un arrêt plus tôt en rentrant et finissiez le trajet en courant ?",
    "de": "Wie wäre es, auf dem Heimweg eine Haltestelle früher auszusteigen und den Rest zu rennen?",
    "th": "ลองลงรถก่อนถึงบ้านหนึ่งป้ายแล้ววิ่งต่อดีไหมครับ?"
   },
   "pt": "não esqueceu como se brinca na rua",
   "fr": "n'a pas oublié comment jouer dehors",
   "de": "das Draußenspielen nicht verlernt hat",
   "th": "ยังไม่ลืมวิธีเล่นนอกบ้าน"
  },
  {
   "id": "food",
   "tags": [
    "food"
   ],
   "ko": "음식이 웃고 있으면 먹기 미안해지는",
   "en": "feels bad eating food that smiles",
   "zh": "看到食物在笑就不好意思吃",
   "ja": "笑っている食べ物は食べるのが申し訳なくなる",
   "es": "siente pena de comerse una comida que sonríe",
   "kw": {
    "ko": "음식한테 미안한 사람",
    "en": "someone sorry for their food",
    "zh": "对食物抱歉的人",
    "ja": "食べ物に申し訳なくなる人",
    "es": "alguien que pide perdón a su comida",
    "pt": "quem sente pena da comida",
    "fr": "en pleine culpabilité alimentaire",
    "de": "jemand, dem sein Essen leidtut",
    "th": "คนที่รู้สึกผิดต่ออาหาร"
   },
   "inf": {
    "ko": "당신은 대상에 감정을 이입하는 능력이 뛰어난 사람입니다. 음식이든 물건이든 표정이 있으면 사람처럼 대하게 되고, 그 때문에 함부로 다루지 못합니다. 이는 따뜻하고 상상력이 풍부한 마음에서 나오는 성향입니다.\n일상에서는 사소한 것에도 의미를 부여하고 즐거움을 찾는 능력이 있습니다. 남들이 지나치는 장면에서 이야기를 읽어내기 때문에 대화가 재미있고 유머도 풍부합니다. 반면 감정이입이 지나쳐 결정을 내릴 때 미안함이 앞서는 일이 잦습니다.\n속마음은 모든 것이 조금 더 다정한 세상이기를 바랍니다. 당신이 먹거리에게까지 보내는 다정함은 당신이 사람에게 쏟는 마음의 크기를 짐작하게 합니다.",
    "en": "You have an exceptional ability to empathize with things. Food or object, once it has an expression you treat it like a person, so you cannot handle it roughly. This comes from a warm and imaginative heart.\nIn daily life you can give meaning to small things and find joy in them. You read stories in scenes others pass by, so your conversation is entertaining and full of humor. The downside is that overflowing empathy often makes guilt come first when you must decide something.\nYou hope for a world that is a little kinder in everything. The tenderness you offer even to food hints at how much you give to people.",
    "zh": "你对事物有出色的共情能力。不论食物还是物品，一旦有了表情，你就把它当人，因此不能随意对待。这出自温暖而富有想象力的心。\n日常中，你能给小事赋予意义并从中找到乐趣。别人路过的场景里，你读出故事，所以聊天有趣，幽默也多。不过共情过头，做决定时常常先涌上歉意。\n你希望一切都更温柔一点。你连对食物都那么温柔，不难想象你对人倾注了多少心意。",
    "ja": "あなたは、対象に感情移入する力が優れた人です。食べ物でも物でも、表情があれば人のように扱ってしまい、乱暴にできません。温かく想像力豊かな心から来る性質です。\n日常では、些細なことにも意味を見出して楽しみを見つけられます。人が通り過ぎる場面から物語を読み取るので、会話が楽しくユーモアも豊かです。ただ、感情移入が過ぎて、決断するとき申し訳なさが先に立つことがよくあります。\n心の奥の望みは、すべてがもう少し優しい世界です。食べ物にまで向けるその優しさは、人に注ぐ気持ちの大きさを想像させます。",
    "es": "Tienes una capacidad excepcional para ponerte en el lugar de las cosas. Comida u objeto, si tiene expresión lo tratas como a una persona, así que no puedes manejarlo con brusquedad. Nace de un corazón cálido e imaginativo.\nEn el día a día das sentido a lo pequeño y encuentras alegría en ello. Lees historias en escenas por las que otros pasan de largo, así que tu conversación es entretenida y llena de humor. La otra cara es que, con tanta empatía, a menudo la culpa llega antes al decidir.\nDeseas un mundo algo más amable en todo. La ternura que ofreces incluso a la comida deja intuir cuánto das a las personas.",
    "pt": "Você tem uma capacidade excepcional de se compadecer das coisas. Comida ou objeto, se tem uma expressão, você o trata como gente, e por isso não consegue lidar com ele de qualquer jeito. Isso vem de um coração caloroso e imaginativo.\nNo dia a dia, você dá significado às coisas pequenas e encontra alegria nelas. Lê histórias em cenas por onde os outros passam, então sua conversa é divertida e cheia de humor. O lado ruim é que, com tanta empatia, a culpa muitas vezes vem antes quando é preciso decidir.\nVocê espera um mundo um pouco mais gentil em tudo. A ternura que você oferece até à comida mostra o quanto você dá às pessoas.",
    "fr": "Vous avez une capacité exceptionnelle d'empathie envers les choses. Nourriture ou objet, dès qu'il a une expression, vous le traitez comme une personne, et vous ne pouvez donc pas le manipuler à la légère. Cela vient d'un cœur chaleureux et imaginatif.\nAu quotidien, vous savez donner du sens aux petites choses et y trouver de la joie. Vous lisez des histoires dans des scènes que les autres dépassent sans les voir, si bien que votre conversation est divertissante et pleine d'humour. Revers : avec une telle empathie, la culpabilité arrive souvent en premier quand il faut décider.\nVous espérez un monde un peu plus doux en tout. La tendresse que vous offrez même à la nourriture laisse deviner tout ce que vous donnez aux gens.",
    "de": "Sie haben eine außergewöhnliche Fähigkeit, mit Dingen mitzufühlen. Ob Essen oder Gegenstand: Sobald es einen Ausdruck hat, behandeln Sie es wie einen Menschen und können es deshalb nicht grob anfassen. Das kommt aus einem warmen, fantasievollen Herzen.\nIm Alltag können Sie kleinen Dingen Bedeutung geben und Freude daran finden. In Szenen, an denen andere vorbeigehen, lesen Sie Geschichten, deshalb ist Ihre Unterhaltung unterhaltsam und voller Humor. Die Kehrseite: Bei so viel Mitgefühl kommt oft zuerst die Entschuldigung, wenn Sie etwas entscheiden müssen.\nSie wünschen sich eine Welt, die in allem ein wenig freundlicher ist. Die Zärtlichkeit, die Sie sogar Essen entgegenbringen, deutet an, wie viel Sie Menschen geben.",
    "th": "คุณมีความสามารถพิเศษในการเอาใจเข้าไปใส่สิ่งของ ไม่ว่าอาหารหรือของใช้ พอมีสีหน้าขึ้นมา คุณก็ปฏิบัติต่อมันเหมือนคน จึงทำอะไรหยาบ ๆ กับมันไม่ได้ นี่มาจากหัวใจที่อบอุ่นและมีจินตนาการ\nในชีวิตประจำวัน คุณให้ความหมายกับเรื่องเล็ก ๆ และพบความสุขในนั้น คุณอ่านเรื่องราวจากฉากที่คนอื่นผ่านไป บทสนทนาของคุณจึงสนุกและเต็มไปด้วยอารมณ์ขัน ข้อเสียคือ เมื่อเห็นอกเห็นใจล้นเกิน ความรู้สึกผิดมักมาก่อนเวลาต้องตัดสินใจ\nคุณหวังให้ทุกอย่างอ่อนโยนขึ้นอีกนิด ความอ่อนโยนที่คุณมอบให้แม้แต่อาหารบอกใบ้ว่าคุณให้คนมากเพียงใด"
   },
   "opp": "scary",
   "match": "tiny",
   "rarity": 1.9,
   "need": "comfort",
   "advice": {
    "ko": "오늘 한 끼는 웃는 음식에게 인사하고 먹어보는 건 어떨까요?",
    "en": "How about saying hello to a smiling meal before eating it today?",
    "zh": "今天这一顿要不要先跟微笑的食物打个招呼再吃？",
    "ja": "今日の一食は、笑っている食べ物にあいさつしてから食べてみるのはどうでしょう？",
    "es": "¿Qué tal saludar a una comida sonriente antes de comerla hoy?",
    "pt": "Que tal dar um oi para uma refeição sorridente antes de comê-la hoje?",
    "fr": "Et si vous disiez bonjour à un plat souriant avant de le manger aujourd'hui ?",
    "de": "Wie wäre es, heute einem lächelnden Gericht Hallo zu sagen, bevor Sie es essen?",
    "th": "วันนี้ลองทักทายมื้ออาหารที่กำลังยิ้มก่อนกินดีไหมครับ?"
   },
   "pt": "se sente mal ao comer comida que sorri",
   "fr": "se sent mal de manger un plat qui sourit",
   "de": "sich schlecht dabei fühlt, Essen zu essen, das lächelt",
   "th": "รู้สึกไม่ดีที่จะกินอาหารที่ยิ้มอยู่"
  },
  {
   "id": "wall",
   "tags": [
    "calendar",
    "wall",
    "art"
   ],
   "ko": "벽에 걸린 것을 오래 바라보는",
   "en": "stares at what hangs on the wall for a long time",
   "zh": "会久久凝视墙上挂着的东西",
   "ja": "壁にかかったものを長く眺める",
   "es": "se queda mirando mucho rato lo que cuelga de la pared",
   "kw": {
    "ko": "벽 응시 전문가",
    "en": "a professional wall-gazer",
    "zh": "盯墙专家",
    "ja": "壁を見つめる専門家",
    "es": "un experto en mirar paredes",
    "pt": "olheiro profissional de parede",
    "fr": "pro de la contemplation de murs",
    "de": "ein professioneller Wandstarrer",
    "th": "นักจ้องผนังมืออาชีพ"
   },
   "inf": {
    "ko": "당신은 한 곳을 오래 바라보며 생각에 잠기는 시간이 필요한 사람입니다. 벽에 걸린 것 하나가 공간의 분위기를 바꾸고 마음을 정돈해 준다고 믿으며, 환경이 감정에 미치는 영향을 잘 압니다. 미적 감각과 정서적 민감성이 높은 편입니다.\n사고방식은 사색적이고 의미를 따지는 쪽이어서, 가볍게 넘어가는 대화보다 깊이 있는 대화를 좋아합니다. 혼자만의 공간을 꾸미는 일에서 안정을 느끼며, 그 공간이 곧 자신의 마음 상태를 보여줍니다. 다만 생각이 길어져 행동으로 옮기는 데 시간이 걸릴 때가 있습니다.\n속마음은 자신을 설명해주는 어떤 상징을 곁에 두고 싶어 합니다. 말로는 다 전하지 못하는 나를 벽 위의 물건이 대신 말해줄 때 마음이 놓입니다.",
    "en": "You need time to gaze at one spot and sink into thought. You believe a single thing on a wall can change the feel of a space and settle the mind, and you understand how surroundings shape emotion. Your aesthetic sense and emotional sensitivity run high.\nYou are reflective and look for meaning, so you prefer deep conversation to light chatter. Arranging your own space brings you calm, and that space shows your state of mind. Thoughts may run long, though, and acting on them can take time.\nInside, you want to keep a symbol nearby that explains you. When an object on the wall says what you cannot put into words, you feel at ease.",
    "zh": "你需要一段时间，注视一处并陷入沉思。你相信墙上的一件东西能改变空间的气氛、整理心绪，也清楚环境对情绪的影响。你的审美和情感敏感度都很高。\n你善于思索、在意意义，所以比起轻飘飘的聊天，更喜欢有深度的对话。布置自己的空间让你安心，那个空间也映出你的心境。不过思考可能拉得很长，行动需要时间。\n内心里，你想在身边放一件能说明你的象征。当墙上的东西替你说出无法言说的自己时，你就安心了。",
    "ja": "あなたは、ひとつの場所をじっと見つめて物思いにふける時間が必要な人です。壁に掛けたもの一つが空間の雰囲気を変え、心を整えてくれると信じ、環境が感情に与える影響をよく知っています。美的感覚も情緒の感受性も高い方です。\n考え方は思索的で意味を重んじ、軽い会話より深い話を好みます。自分の空間を整えることに安らぎを感じ、その空間があなたの心の状態を映します。ただ、考えが長くなって、行動に移すまで時間がかかることがあります。\n心の奥では、自分を説明してくれる象徴をそばに置きたいと思っています。言葉では伝えきれない自分を壁の上のものが代わりに語ってくれると、心が落ち着きます。",
    "es": "Necesitas tiempo para mirar un punto y perderte en tus pensamientos. Crees que una sola cosa en la pared puede cambiar el aire de un espacio y ordenar la mente, y entiendes cómo el entorno moldea la emoción. Tu sentido estético y tu sensibilidad emocional son altos.\nEres reflexivo y buscas sentido, así que prefieres la conversación profunda a la charla ligera. Arreglar tu propio espacio te da calma, y ese espacio muestra tu estado de ánimo. Los pensamientos pueden alargarse, y pasar a la acción a veces tarda.\nPor dentro quieres tener cerca un símbolo que te explique. Cuando un objeto en la pared dice lo que tú no sabes expresar, te quedas tranquilo.",
    "pt": "Você precisa de um tempo para fixar o olhar num ponto e mergulhar nos pensamentos. Acredita que uma única coisa na parede pode mudar o clima de um espaço e acalmar a mente, e entende como o entorno molda a emoção. Seu senso estético e sua sensibilidade emocional são altos.\nVocê é reflexivo(a) e busca sentido, por isso prefere conversas profundas a papo leve. Arrumar o seu espaço traz calma, e esse espaço mostra o seu estado de espírito. Os pensamentos podem se alongar, porém, e agir leva tempo.\nPor dentro, você quer manter por perto um símbolo que explique você. Quando um objeto na parede diz o que você não consegue pôr em palavras, você relaxa.",
    "fr": "Vous avez besoin de temps pour fixer un point et vous plonger dans vos pensées. Vous croyez qu'une seule chose au mur peut changer l'atmosphère d'un lieu et apaiser l'esprit, et vous comprenez comment l'environnement façonne l'émotion. Votre sens esthétique et votre sensibilité émotionnelle sont élevés.\nVous êtes réfléchi(e) et cherchez du sens, si bien que vous préférez les conversations profondes au bavardage léger. Aménager votre espace vous apaise, et cet espace reflète votre état d'esprit. Vos pensées peuvent toutefois s'étirer, et passer à l'action prend du temps.\nÀ l'intérieur, vous voulez garder près de vous un symbole qui vous explique. Quand un objet au mur dit ce que vous ne pouvez pas mettre en mots, vous êtes serein(e).",
    "de": "Sie brauchen Zeit, um einen Punkt zu betrachten und in Gedanken zu versinken. Sie glauben, dass ein einziges Ding an der Wand die Stimmung eines Raums verändern und den Geist beruhigen kann, und Sie verstehen, wie die Umgebung Gefühle formt. Ihr ästhetisches Empfinden und Ihre emotionale Sensibilität sind hoch.\nSie sind nachdenklich und suchen Sinn, deshalb bevorzugen Sie tiefe Gespräche gegenüber leichtem Geplauder. Den eigenen Raum zu gestalten bringt Ihnen Ruhe, und dieser Raum zeigt Ihre Verfassung. Die Gedanken können sich allerdings lange hinziehen, und das Handeln braucht Zeit.\nInnerlich möchten Sie ein Symbol in der Nähe halten, das Sie erklärt. Wenn ein Gegenstand an der Wand sagt, was Sie nicht in Worte fassen können, sind Sie beruhigt.",
    "th": "คุณต้องการเวลาเพื่อจ้องไปที่จุดเดียวและจมอยู่ในความคิด คุณเชื่อว่าสิ่งเดียวบนผนังเปลี่ยนบรรยากาศของห้องและทำให้ใจสงบได้ และเข้าใจว่าสภาพแวดล้อมหล่อหลอมอารมณ์ รสนิยมด้านสุนทรียะและความไวทางอารมณ์ของคุณสูง\nคุณช่างคิดและมองหาความหมาย จึงชอบบทสนทนาลึก ๆ มากกว่าคุยเล่นเบา ๆ การจัดพื้นที่ของตัวเองทำให้คุณสงบ และพื้นที่นั้นสะท้อนสภาพใจ แต่ความคิดอาจยืดยาว และการลงมือต้องใช้เวลา\nข้างในใจ คุณอยากเก็บสัญลักษณ์ที่อธิบายตัวคุณไว้ใกล้ตัว เมื่อสิ่งบนผนังพูดแทนสิ่งที่คุณพูดเป็นคำไม่ได้ คุณก็สบายใจ"
   },
   "opp": "costume",
   "match": "calm",
   "rarity": 7.3,
   "need": "view",
   "advice": {
    "ko": "벽에 걸 물건 하나를 한 달 동안 고민해보는 건 어떨까요?",
    "en": "How about spending a whole month deciding what to hang on one wall?",
    "zh": "要不要花一个月，认真想想墙上该挂点什么？",
    "ja": "壁にかけるものをひとつ、一か月かけて悩んでみるのはどうでしょう？",
    "es": "¿Qué tal pasar un mes entero decidiendo qué colgar en una pared?",
    "pt": "Que tal passar um mês inteiro decidindo o que pendurar em uma parede?",
    "fr": "Et si vous passiez un mois entier à décider ce que vous accrochez sur un mur ?",
    "de": "Wie wäre es, einen ganzen Monat lang zu überlegen, was an eine einzige Wand gehängt wird?",
    "th": "ลองใช้เวลาทั้งเดือนตัดสินใจว่าจะแขวนอะไรบนผนังด้านเดียวดีไหมครับ?"
   },
   "pt": "fica muito tempo olhando para o que está pendurado na parede",
   "fr": "fixe longtemps ce qui est accroché au mur",
   "de": "lange auf das starrt, was an der Wand hängt",
   "th": "จ้องสิ่งที่แขวนบนผนังอยู่นาน"
  },
  {
   "id": "human",
   "tags": [
    "human",
    "west"
   ],
   "ko": "점잖은 사람의 엉뚱한 모습에 웃음이 나는",
   "en": "laughs when a dignified person does something silly",
   "zh": "看到正经人做傻事就想笑",
   "ja": "きちんとした人の変な行動に笑ってしまう",
   "es": "se ríe cuando alguien solemne hace una tontería",
   "kw": {
    "ko": "엄근진 파괴 구독자",
    "en": "a straight-face-cracking fan",
    "zh": "破功围观党",
    "ja": "真顔崩壊ウォッチャー",
    "es": "un fan de las caras serias que se rompen",
    "pt": "fã de ver cara séria rachar",
    "fr": "fan de sérieux qui craque",
    "de": "ein Fan des Pokerface-Zerbröselns",
    "th": "แฟนคลับสายทำหน้านิ่งแตก"
   },
   "inf": {
    "ko": "당신은 격식과 체면의 무게를 누구보다 잘 아는 사람이기에, 그것이 살짝 무너지는 순간에 가장 크게 웃습니다. 점잖은 사람의 엉뚱함은 사람은 누구나 인간적이라는 증거로 느껴져서 안도감을 줍니다. 위선을 싫어하고 진솔함을 사랑하는 성향입니다.\n관계에서는 직급이나 나이보다 사람 자체를 보려는 태도를 지니고 있습니다. 그래서 격 없이 편안하게 지내는 친구가 많지만, 형식을 중시하는 자리에서는 속으로 웃음을 참느라 애를 먹기도 합니다. 때로는 이 솔직함이 오해를 부르기도 합니다.\n속마음은 체면을 내려놓아도 괜찮은 관계를 원합니다. 당신이 웃음으로 가리고 있는 것은 사실 진짜 얼굴로 사랑받고 싶은 마음입니다.",
    "en": "Because you know how heavy formality and face-saving can be, you laugh hardest when they slip a little. A dignified person's eccentric moment reassures you that everyone is human. You dislike hypocrisy and love candor.\nIn relationships you try to see the person rather than rank or age. You have many friends who feel easy and unceremonious, though in formal settings you struggle to keep from laughing inwardly. Sometimes your honesty is misunderstood.\nInside, you want a relationship where you can put down the front. What you hide behind laughter is really a wish to be loved with your true face.",
    "zh": "正因为你比谁都清楚体面和客套有多重，当它们稍稍崩塌的那一刻，你笑得最开心。端庄的人冒出的怪念头，让你感到安心：人人都有人情味。你讨厌虚伪，喜欢真诚。\n在关系里，你想看的是人本身，而不是职位或年纪。你有很多相处随意的朋友，但在讲究形式的场合，你常要拼命忍住笑。有时这份坦率也会引起误会。\n内心里，你想要一段可以放下面子的关系。你用笑声遮住的，其实是想以真实的面孔被爱。",
    "ja": "あなたは、格式や体面の重さを誰よりも知っているからこそ、それが少し崩れた瞬間に一番笑います。きちんとした人の意外な一面は、人は誰でも人間らしいという証拠のようで、安心を与えます。偽善を嫌い、率直さを愛する性質です。\n人間関係では、肩書きや年齢より人そのものを見ようとします。だから堅苦しくない気楽な友人が多い一方、形式を重んじる席では心の中で笑いをこらえるのに苦労します。その率直さが誤解を招くこともあります。\n心の奥では、体面を下ろしても大丈夫な関係を望んでいます。あなたが笑いで隠しているのは、本当の顔のままで愛されたいという気持ちです。",
    "es": "Como sabes mejor que nadie cuánto pesan la formalidad y las apariencias, te ríes más cuando se tambalean un poco. El momento excéntrico de alguien digno te tranquiliza: todos somos humanos. Detestas la hipocresía y amas la franqueza.\nEn las relaciones intentas ver a la persona, no el cargo ni la edad. Tienes muchos amigos con quienes todo es fácil y sin ceremonias, aunque en situaciones formales luchas por contener la risa por dentro. A veces tu franqueza se malinterpreta.\nPor dentro quieres una relación en la que puedas bajar la guardia. Lo que escondes tras la risa es, en realidad, el deseo de ser querido con tu verdadera cara.",
    "pt": "Como você sabe o peso que a formalidade e a pose podem ter, ri mais quando elas escorregam um pouco. O momento excêntrico de alguém digno tranquiliza você: todo mundo é humano. Você não suporta hipocrisia e adora sinceridade.\nNas relações, tenta ver a pessoa, não o cargo nem a idade. Tem muitos amigos à vontade e sem cerimônia, mas em ocasiões formais precisa se esforçar para não rir por dentro. Às vezes sua honestidade é mal interpretada.\nPor dentro, você quer uma relação em que possa baixar a máscara. O que você esconde atrás do riso é, na verdade, o desejo de ser amado(a) de cara limpa.",
    "fr": "Parce que vous savez combien le formalisme et les apparences peuvent peser, vous riez le plus fort quand ils dérapent un peu. Le moment excentrique d'une personne digne vous rassure : tout le monde est humain. Vous détestez l'hypocrisie et aimez la franchise.\nEn amitié, vous essayez de voir la personne plutôt que son rang ou son âge. Vous avez beaucoup d'amis décontractés et sans cérémonie, mais dans les cadres officiels, vous avez du mal à ne pas rire intérieurement. Votre franchise est parfois mal comprise.\nÀ l'intérieur, vous voulez une relation où vous pouvez poser le masque. Ce que vous cachez derrière le rire, c'est en réalité l'envie d'être aimé(e) tel(le) que vous êtes.",
    "de": "Weil Sie wissen, wie schwer Förmlichkeit und Gesichtswahren wiegen können, lachen Sie am lautesten, wenn sie ein wenig verrutschen. Der exzentrische Moment einer würdevollen Person beruhigt Sie: Alle sind Menschen. Heuchelei mögen Sie nicht, Offenheit lieben Sie.\nIn Beziehungen versuchen Sie, den Menschen zu sehen statt Rang oder Alter. Sie haben viele Freunde, bei denen es locker und ohne Förmlichkeit zugeht, doch bei offiziellen Anlässen müssen Sie sich anstrengen, nicht innerlich zu lachen. Manchmal wird Ihre Ehrlichkeit missverstanden.\nInnerlich wünschen Sie sich eine Beziehung, in der Sie die Fassade ablegen können. Was Sie hinter dem Lachen verbergen, ist in Wahrheit der Wunsch, mit echtem Gesicht geliebt zu werden.",
    "th": "เพราะคุณรู้ว่าพิธีรีตองและการรักษาหน้าหนักเพียงใด คุณจึงหัวเราะดังที่สุดเมื่อมันหลุดไปนิด ช่วงเวลาประหลาดของคนสง่างามทำให้คุณอุ่นใจว่า ทุกคนก็เป็นมนุษย์ คุณเกลียดความตอแหลและรักความตรงไปตรงมา\nในความสัมพันธ์ คุณพยายามมองที่ตัวคน ไม่ใช่ตำแหน่งหรืออายุ คุณมีเพื่อนสบาย ๆ ไม่ถือตัวมากมาย แต่ในงานทางการคุณต้องพยายามไม่หัวเราะอยู่ในใจ บางครั้งความจริงใจของคุณก็ถูกเข้าใจผิด\nข้างในใจ คุณอยากได้ความสัมพันธ์ที่วางหน้ากากลงได้ สิ่งที่คุณซ่อนไว้หลังเสียงหัวเราะ จริง ๆ คืออยากถูกรักด้วยใบหน้าจริง"
   },
   "opp": "animal",
   "match": "prank",
   "rarity": 2.9,
   "need": "laugh",
   "advice": {
    "ko": "엄숙한 자리에서 속으로만 효과음을 틀어보는 건 어떨까요?",
    "en": "How about playing sound effects in your head during a solemn moment?",
    "zh": "要不要在庄严的场合里，只在心里放音效？",
    "ja": "厳かな場で、心の中だけで効果音を鳴らしてみるのはどうでしょう？",
    "es": "¿Qué tal poner efectos de sonido en tu cabeza durante un momento solemne?",
    "pt": "Que tal tocar efeitos sonoros na cabeça durante um momento solene?",
    "fr": "Et si vous passiez des bruitages dans votre tête pendant un moment solennel ?",
    "de": "Wie wäre es, in einem feierlichen Moment im Kopf Soundeffekte abzuspielen?",
    "th": "ลองเปิดเสียงเอฟเฟกต์ในหัวระหว่างช่วงเวลาขรึม ๆ ดีไหมครับ?"
   },
   "pt": "ri quando uma pessoa digna faz algo bobo",
   "fr": "rit quand une personne digne fait une bêtise",
   "de": "lacht, wenn eine würdevolle Person etwas Albernes tut",
   "th": "หัวเราะเมื่อคนสง่าทำเรื่องโง่ ๆ"
  },
  {
   "id": "tiny",
   "tags": [
    "tiny"
   ],
   "ko": "손바닥만 한 것에 마음을 빼앗기는",
   "en": "is charmed by anything palm-sized",
   "zh": "会被巴掌大的东西夺走心",
   "ja": "手のひらサイズのものに心を奪われる",
   "es": "se encandila con lo que cabe en la palma",
   "kw": {
    "ko": "미니 수집광",
    "en": "a mini-things hoarder",
    "zh": "迷你收藏狂",
    "ja": "ミニチュア収集マニア",
    "es": "un acaparador de miniaturas",
    "pt": "acumulador de miniaturas",
    "fr": "accro aux miniatures",
    "de": "ein Mini-Dinge-Hamsterer",
    "th": "นักกักตุนของจิ๋ว"
   },
   "inf": {
    "ko": "당신은 작은 것에서 큰 기쁨을 얻는 집중력 있는 사람입니다. 손바닥에 올라오는 크기의 세계는 통제할 수 있고, 안전하고, 온전히 내 것처럼 느껴지기 때문입니다. 세상이 너무 크게 느껴질 때 마음을 가라앉히는 방법을 알고 있다는 것입니다.\n성격은 섬세하고 디테일에 강해서 남들이 놓치는 부분을 알아봅니다. 완성도 높은 일 처리가 장점이고, 작은 변화에도 민감하게 반응합니다. 다만 사소한 것에 신경이 쏠려 큰 그림을 놓치거나, 작은 걱정이 필요 이상으로 커지는 일이 있습니다.\n속마음은 감당 가능한 크기의 세상을 원합니다. 작은 것을 아끼는 마음은 곧 자신의 평온을 지키려는 현명한 방어입니다.",
    "en": "You gain great joy from small things and have a strong focus. A world that fits in a palm feels controllable, safe and wholly yours, so you already know how to settle your mind when everything feels too large.\nDelicate and strong on detail, you notice what others miss. High-quality work is your strength, and you react to small changes. But attention to trifles can make you miss the big picture, and small worries can grow bigger than they need to be.\nWhat you want is a world of manageable size. Cherishing small things is a sensible defense for keeping your own peace.",
    "zh": "你能从小东西里得到很大的快乐，专注力很强。能放在手心的世界，让人觉得可控、安全、完全属于自己，所以你早就知道，当世界太大时怎样让心安定。\n你细腻，擅长细节，能注意到别人错过的地方。完成度高是你的优点，对细小的变化也很敏感。不过心思放在琐事上，容易错过大局，小担心也可能被放大。\n你想要的是一个大小刚好能应付的世界。珍惜小东西，是为守住自己的平静而做的明智防御。",
    "ja": "あなたは、小さなものから大きな喜びを得る集中力のある人です。手のひらに載る大きさの世界は、制御できて、安全で、完全に自分のものに感じられます。世界が大きすぎると感じるとき、心を落ち着かせる方法を知っているのです。\n性格は繊細で細部に強く、他人が見落とす部分に気づきます。完成度の高い仕事が長所で、小さな変化にも敏感です。ただ、些細なことに気を取られて全体を見失ったり、小さな心配が必要以上に大きくなったりすることがあります。\n心の奥の望みは、手に負える大きさの世界です。小さなものを大切にする気持ちは、自分の平穏を守る賢い防御です。",
    "es": "Obtienes gran alegría de lo pequeño y tienes mucha concentración. Un mundo que cabe en la palma de la mano parece controlable, seguro y totalmente tuyo, así que ya sabes cómo calmar la mente cuando todo se siente demasiado grande.\nDelicado y fuerte en el detalle, notas lo que otros pasan por alto. Tu punto fuerte es el trabajo bien acabado, y reaccionas a los cambios pequeños. Pero la atención a nimiedades puede hacerte perder la visión de conjunto, y las pequeñas preocupaciones crecer más de lo necesario.\nLo que quieres es un mundo de tamaño manejable. Apreciar lo pequeño es una defensa sensata para guardar tu paz.",
    "pt": "Você tira grande alegria de coisas pequenas e tem muito foco. Um mundo que cabe na palma da mão parece controlável, seguro e todo seu, então você já sabe acalmar a cabeça quando tudo parece grande demais.\nDelicado(a) e forte nos detalhes, você nota o que os outros perdem. Trabalho de alta qualidade é seu ponto forte, e você reage a pequenas mudanças. Mas a atenção às miudezas pode fazer você perder o quadro geral, e pequenas preocupações podem crescer mais do que precisam.\nO que você quer é um mundo de tamanho administrável. Valorizar as coisas pequenas é uma defesa sensata para manter a sua paz.",
    "fr": "Vous tirez une grande joie des petites choses et avez une forte concentration. Un monde qui tient dans une paume paraît maîtrisable, sûr et entièrement à vous, alors vous savez déjà apaiser votre esprit quand tout semble trop grand.\nDélicat(e) et fort(e) sur les détails, vous remarquez ce que les autres manquent. Le travail de grande qualité est votre point fort, et vous réagissez aux petits changements. Mais l'attention aux broutilles peut vous faire manquer le tableau d'ensemble, et les petits soucis peuvent grossir plus que nécessaire.\nCe que vous voulez, c'est un monde de taille gérable. Chérir les petites choses est une défense sensée pour préserver votre paix.",
    "de": "Aus kleinen Dingen ziehen Sie große Freude und haben starken Fokus. Eine Welt, die in eine Handfläche passt, wirkt kontrollierbar, sicher und ganz Ihre eigene, deshalb wissen Sie schon, wie Sie Ihren Geist beruhigen, wenn alles zu groß wirkt.\nZart und stark im Detail, bemerken Sie, was andere übersehen. Hochwertige Arbeit ist Ihre Stärke, und Sie reagieren auf kleine Veränderungen. Doch die Aufmerksamkeit für Kleinigkeiten kann Sie das große Ganze verpassen lassen, und kleine Sorgen können größer werden als nötig.\nSie wünschen sich eine Welt von überschaubarer Größe. Kleine Dinge zu hegen ist eine vernünftige Abwehr, um den eigenen Frieden zu wahren.",
    "th": "คุณได้ความสุขใหญ่จากของชิ้นเล็ก และมีสมาธิสูง โลกที่ใส่ในฝ่ามือได้ให้ความรู้สึกควบคุมได้ ปลอดภัย และเป็นของคุณเต็มตัว คุณจึงรู้วิธีทำให้ใจสงบอยู่แล้วเมื่อทุกอย่างใหญ่เกินไป\nคุณละเอียดอ่อนและแข็งแกร่งเรื่องรายละเอียด สังเกตสิ่งที่คนอื่นพลาด งานคุณภาพสูงคือจุดแข็ง และคุณไวต่อการเปลี่ยนแปลงเล็ก ๆ แต่การใส่ใจเรื่องจุกจิกอาจทำให้พลาดภาพใหญ่ และความกังวลเล็ก ๆ อาจบานปลายเกินจำเป็น\nสิ่งที่คุณอยากได้คือโลกที่มีขนาดจัดการได้ การทะนุถนอมของเล็ก ๆ คือการป้องกันที่ฉลาดเพื่อรักษาความสงบของตัวเอง"
   },
   "opp": "tough",
   "match": "food",
   "rarity": 4.2,
   "need": "view",
   "advice": {
    "ko": "손바닥만 한 물건 하나를 주머니에 넣고 하루 다녀보는 건 어떨까요?",
    "en": "How about carrying one palm-sized thing in your pocket for the whole day?",
    "zh": "要不要把一件巴掌大的东西放口袋里带上一整天？",
    "ja": "手のひらサイズのものをひとつポケットに入れて、一日過ごしてみるのはどうでしょう？",
    "es": "¿Qué tal llevar en el bolsillo algo del tamaño de la palma durante todo el día?",
    "pt": "Que tal levar no bolso, o dia inteiro, uma coisinha que caiba na palma da mão?",
    "fr": "Et si vous gardiez dans la poche toute la journée un objet qui tient dans la paume ?",
    "de": "Wie wäre es, einen ganzen Tag lang ein handtellergroßes Ding in der Tasche mitzunehmen?",
    "th": "ลองพกของขนาดฝ่ามือชิ้นหนึ่งไว้ในกระเป๋าทั้งวันดีไหมครับ?"
   },
   "pt": "se encanta com tudo que cabe na palma da mão",
   "fr": "est charmé par tout ce qui tient dans la paume",
   "de": "von allem, was in die Handfläche passt, bezaubert ist",
   "th": "หลงเสน่ห์ของทุกอย่างที่ขนาดเท่าฝ่ามือ"
  },
  {
   "id": "useful",
   "tags": [
    "useful",
    "storage"
   ],
   "ko": "쓸모없는 것 속에서도 아주 조금은 쓸모를 찾는",
   "en": "still looks for a tiny bit of use in the useless",
   "zh": "在没用的东西里也想找一点点用处",
   "ja": "役に立たないものの中にも、ほんの少しの使い道を探す",
   "es": "busca un poquito de utilidad hasta en lo inútil",
   "kw": {
    "ko": "사놓고 합리화 장인",
    "en": "a buy-then-rationalize master",
    "zh": "买完合理化大师",
    "ja": "買ってから正当化の達人",
    "es": "un maestro de comprar y justificar",
    "pt": "mestre em comprar e depois justificar",
    "fr": "pro de l'achat puis de la justification",
    "de": "ein Kaufen-dann-Rechtfertigen-Meister",
    "th": "เซียนซื้อก่อนหาเหตุผลทีหลัง"
   },
   "inf": {
    "ko": "당신은 낭만을 즐기면서도 마음 한구석에서 현실 감각이 작동하는 균형 잡힌 사람입니다. 쓸모없는 것에서도 아주 조금의 쓸모를 찾아내는 것은, 즐거움과 합리성 사이에서 스스로를 설득하는 방식이 몸에 배어 있다는 뜻입니다.\n사고방식은 실리적이고 계획적이며, 감정에 휩쓸리기보다 한 번 더 따져보는 편입니다. 그래서 주변에서는 믿고 맡길 수 있는 사람으로 통합니다. 다만 즐거운 일에도 명분이 있어야 마음이 편하기 때문에 순수하게 즐기는 일이 서툴 수 있습니다.\n속마음은 아무 이유 없이 좋아해도 된다는 허락을 원합니다. 오늘만큼은 쓸모를 따지지 않고 그냥 좋아하는 연습을 해보시기를 권합니다.",
    "en": "You enjoy romance while a sense of reality keeps working in a corner of your mind. Finding even a bit of use in the useless means you have grown used to persuading yourself between pleasure and reason.\nYou think practically and plan ahead, preferring to weigh things once more over being swept away by feeling. People see you as someone they can trust. But since you need a justification even for fun, enjoying things purely can come out awkward.\nInside, you want permission to like something for no reason at all. Today, try simply liking things without asking what they are good for.",
    "zh": "你享受浪漫，心里同时有现实感在运作。在无用之物里也找出一点用处，说明你已习惯在快乐与理性之间说服自己。\n你思考务实、有计划，比起被情绪带走，更习惯再权衡一次。所以周围把你当作可以托付的人。不过连快乐的事也需要一个理由才安心，纯粹地享受反而可能显得生疏。\n内心里，你想要一份许可：没有理由也可以喜欢。今天，试着不问有什么用，就只是喜欢吧。",
    "ja": "あなたは、ロマンを楽しみながら、心の片隅で現実感覚が働いているバランスの取れた人です。役に立たないものの中にもほんの少しの使い道を見つけるのは、楽しさと合理性の間で自分を納得させる方法が身についているということです。\n考え方は実利的で計画的、感情に流されず、もう一度よく考える方です。そのため周りから、安心して任せられる人と見られます。ただ、楽しいことにも名分があるほうが落ち着くので、純粋に楽しむのが少し苦手かもしれません。\n心の奥では、理由なんてなくても好きでいいという許しを望んでいます。今日は役に立つかどうかを問わず、ただ好きになる練習をしてみてください。",
    "es": "Disfrutas del romanticismo mientras el sentido de la realidad sigue trabajando en un rincón de tu mente. Encontrar un poco de utilidad hasta en lo inútil indica que te has acostumbrado a convencerte entre el placer y la razón.\nPiensas con practicidad y planificas, y prefieres sopesar una vez más antes que dejarte llevar por el sentimiento. Los demás te ven como alguien en quien se puede confiar. Pero como necesitas una justificación incluso para divertirte, disfrutar de forma pura puede resultarte torpe.\nPor dentro quieres permiso para que algo te guste sin motivo. Hoy, prueba a disfrutar sin preguntar para qué sirve.",
    "pt": "Você curte o romance, enquanto o senso de realidade continua trabalhando num canto da cabeça. Achar um pouco de utilidade no inútil mostra que você se acostumou a se convencer entre o prazer e a razão.\nVocê pensa de forma prática e planeja com antecedência, preferindo pesar mais uma vez a se deixar levar pela emoção. As pessoas te veem como alguém em quem se pode confiar. Mas, como até a diversão precisa de justificativa, aproveitar sem culpa pode sair desajeitado.\nPor dentro, você quer a permissão de gostar de algo sem motivo nenhum. Hoje, tente simplesmente gostar das coisas sem perguntar para que servem.",
    "fr": "Vous aimez le romantisme, tandis qu'un sens du réel continue de travailler dans un coin de votre tête. Trouver ne serait-ce qu'un peu d'utilité à l'inutile montre que vous avez pris l'habitude de vous convaincre entre plaisir et raison.\nVous pensez de façon pratique et planifiez à l'avance, préférant peser une fois de plus plutôt que de vous laisser emporter par le sentiment. On vous voit comme quelqu'un en qui on peut avoir confiance. Mais comme il vous faut une justification même pour vous amuser, profiter purement des choses peut sembler un peu gauche.\nÀ l'intérieur, vous voulez la permission d'aimer quelque chose sans raison. Aujourd'hui, essayez d'aimer simplement les choses sans demander à quoi elles servent.",
    "de": "Sie genießen die Romantik, während in einer Ecke Ihres Kopfes ein Sinn für Realität weiterarbeitet. Selbst im Nutzlosen ein bisschen Nutzen zu finden zeigt, dass Sie sich daran gewöhnt haben, sich zwischen Vergnügen und Vernunft zu überzeugen.\nSie denken praktisch und planen voraus und wägen lieber noch einmal ab, statt sich vom Gefühl mitreißen zu lassen. Andere sehen in Ihnen jemanden, dem man vertrauen kann. Weil Sie aber selbst für Spaß eine Rechtfertigung brauchen, kann reines Genießen ungelenk wirken.\nInnerlich wünschen Sie sich die Erlaubnis, etwas ohne jeden Grund zu mögen. Versuchen Sie heute, Dinge einfach zu mögen, ohne zu fragen, wofür sie gut sind.",
    "th": "คุณเพลิดเพลินกับความโรแมนติก ขณะที่สามัญสำนึกทำงานอยู่ในมุมหนึ่งของหัว การหาประโยชน์สักนิดจากสิ่งไร้ประโยชน์แสดงว่าคุณชินกับการโน้มน้าวตัวเองระหว่างความสุขกับเหตุผล\nคุณคิดแบบใช้งานได้จริงและวางแผนล่วงหน้า ชอบชั่งอีกรอบมากกว่าถูกอารมณ์พัดไป คนมองว่าคุณเป็นคนที่ไว้ใจได้ แต่เพราะต้องมีเหตุผลแม้แต่กับความสนุก การเพลิดเพลินล้วน ๆ จึงอาจดูเก้ ๆ กัง ๆ\nข้างในใจ คุณอยากได้อนุญาตให้ชอบอะไรโดยไม่มีเหตุผล วันนี้ลองชอบสิ่งต่าง ๆ เฉย ๆ โดยไม่ถามว่ามันใช้ทำอะไร"
   },
   "opp": "keep",
   "match": "craft",
   "rarity": 0.5,
   "need": "free",
   "advice": {
    "ko": "사놓은 물건에 거창한 사용 계획서를 써보는 건 어떨까요?",
    "en": "How about writing a grand usage plan for something you already bought?",
    "zh": "要不要给已经买下的东西写一份隆重的使用计划书？",
    "ja": "買ってしまったものに、大げさな使用計画書を書いてみるのはどうでしょう？",
    "es": "¿Qué tal escribir un gran plan de uso para algo que ya compraste?",
    "pt": "Que tal escrever um grandioso plano de uso para algo que você já comprou?",
    "fr": "Et si vous rédigiez un grand plan d'usage pour quelque chose que vous avez déjà acheté ?",
    "de": "Wie wäre es, einen großartigen Verwendungsplan für etwas zu schreiben, das Sie schon gekauft haben?",
    "th": "ลองเขียนแผนการใช้งานอันยิ่งใหญ่ให้ของที่ซื้อมาแล้วดีไหมครับ?"
   },
   "pt": "ainda procura um pouquinho de utilidade no inútil",
   "fr": "cherche encore un petit peu d'utilité dans l'inutile",
   "de": "im Nutzlosen noch ein winziges bisschen Nutzen sucht",
   "th": "ยังหาประโยชน์นิดหน่อยจากของไร้ประโยชน์"
  },
  {
   "id": "hide",
   "tags": [
    "hide"
   ],
   "ko": "가끔은 정체를 숨기고 싶은",
   "en": "sometimes wants to hide who they are",
   "zh": "有时想隐藏自己的身份",
   "ja": "ときどき正体を隠したくなる",
   "es": "a veces quiere ocultar quién es",
   "kw": {
    "ko": "부캐 지원자",
    "en": "an alter-ego applicant",
    "zh": "分身申请者",
    "ja": "サブキャ志望者",
    "es": "un aspirante a alter ego",
    "pt": "aspirante a alter ego",
    "fr": "en casting pour un alter ego",
    "de": "ein Alter-Ego-Bewerber",
    "th": "ผู้สมัครอัตลักษณ์ใหม่"
   },
   "inf": {
    "ko": "당신은 때때로 세상의 시선에서 사라지고 싶은 마음을 가진 사람입니다. 이는 소심해서가 아니라, 늘 보여지고 평가받는 일에 너무 많은 에너지를 쓰고 있기 때문입니다. 감수성이 풍부하고 타인의 시선을 민감하게 의식하는 성향입니다.\n겉으로는 사회성이 좋아 보여도, 혼자만의 공간에서 비로소 편안해지는 타입입니다. 가면을 쓰고 있어야 더 자유로워지는 역설도 있습니다. 그래서 속마음을 쉽게 드러내지 않지만, 한번 마음을 연 사람에게는 의외로 솔직합니다.\n속마음은 누구도 나를 알아보지 못하는 곳에서 잠시 쉬고 싶습니다. 숨는 것은 도망이 아니라 다시 나로 돌아오기 위한 재충전이라는 점을 기억하셨으면 합니다.",
    "en": "At times you wish to disappear from the world's gaze. That is not shyness. It is that being seen and judged all the time costs you a lot of energy. You are sensitive and keenly aware of others' eyes.\nYou may look sociable, yet you are the type who is truly comfortable in your own space. There is even a paradox where wearing a mask makes you freer. So you do not reveal your heart easily, but once you open up to someone you are unexpectedly honest.\nInside, you want a rest somewhere nobody recognizes you. Hiding is not running away. It is recharging so you can come back to yourself.",
    "zh": "你有时想从世界的目光中消失。这不是胆小，而是总被看见、被评价，消耗了你太多精力。你感受细腻，对他人的目光很敏感。\n外表看起来很擅长交际，其实是在独处的空间里才真正自在的类型。甚至有一个悖论：戴上面具反而更自由。所以你不轻易露出内心，但对敞开心扉的人，出人意料地坦诚。\n内心里，你想在没人认得你的地方休息一会儿。躲起来不是逃避，而是为了重新回到自己而充电。",
    "ja": "あなたは、ときどき世間の視線から消えたくなる人です。それは気が弱いからではなく、いつも見られ評価されることにあまりに多くのエネルギーを使っているからです。感受性が豊かで、他人の視線に敏感な性質です。\n外から見ると社交的でも、自分だけの空間でやっと安らぐタイプです。仮面をつけているほうが自由になれるという逆説もあります。だから本音を簡単には見せませんが、一度心を開いた人には意外なほど正直です。\n心の奥では、誰にも気づかれない場所でしばらく休みたいと思っています。隠れることは逃げではなく、また自分に戻るための充電だと覚えておいてください。",
    "es": "A veces deseas desaparecer de la mirada del mundo. No es timidez: es que ser visto y juzgado siempre te cuesta mucha energía. Eres sensible y muy consciente de los ojos ajenos.\nPuedes parecer sociable, pero eres de los que solo se sienten de verdad cómodos en su propio espacio. Incluso existe la paradoja de que llevar máscara te hace más libre. Por eso no muestras tu corazón con facilidad, aunque con quien te abres eres sorprendentemente sincero.\nPor dentro quieres descansar en un lugar donde nadie te reconozca. Esconderse no es huir: es recargar para volver a ti.",
    "pt": "Às vezes você deseja sumir do olhar do mundo. Isso não é timidez: ser visto e julgado o tempo todo custa muita energia. Você é sensível e muito consciente dos olhos dos outros.\nPode parecer sociável, mas é do tipo que só fica realmente à vontade no próprio espaço. Existe até um paradoxo em que usar máscara te deixa mais livre. Por isso você não revela o coração com facilidade, mas, quando se abre com alguém, é de uma honestidade inesperada.\nPor dentro, você quer um descanso num lugar onde ninguém te reconheça. Esconder-se não é fugir: é recarregar para voltar a si mesmo(a).",
    "fr": "Il vous arrive de vouloir disparaître du regard du monde. Ce n'est pas de la timidité : être vu(e) et jugé(e) en permanence vous coûte beaucoup d'énergie. Vous êtes sensible et très conscient(e) du regard des autres.\nVous pouvez paraître sociable, mais vous êtes du genre à vous sentir vraiment à l'aise dans votre propre espace. Il y a même un paradoxe où porter un masque vous rend plus libre. Aussi ne dévoilez-vous pas facilement votre cœur, mais une fois ouvert(e) à quelqu'un, vous êtes d'une honnêteté inattendue.\nÀ l'intérieur, vous voulez un repos quelque part où personne ne vous reconnaît. Se cacher n'est pas fuir : c'est se recharger pour revenir à soi.",
    "de": "Manchmal wünschen Sie sich, dem Blick der Welt zu entschwinden. Das ist keine Schüchternheit. Es kostet Sie viel Energie, ständig gesehen und beurteilt zu werden. Sie sind sensibel und sich der Blicke anderer sehr bewusst.\nSie wirken vielleicht gesellig, sind aber der Typ, der sich im eigenen Raum wirklich wohlfühlt. Es gibt sogar ein Paradox, bei dem eine Maske Sie freier macht. Deshalb zeigen Sie Ihr Herz nicht leicht, sind aber, wenn Sie sich jemandem öffnen, unerwartet ehrlich.\nInnerlich wünschen Sie sich eine Auszeit an einem Ort, wo Sie niemand erkennt. Sich zu verstecken ist keine Flucht. Es ist Aufladen, um zu sich selbst zurückzukommen.",
    "th": "บางครั้งคุณอยากหายไปจากสายตาของโลก นี่ไม่ใช่ความขี้อาย แต่การถูกมองและถูกตัดสินตลอดเวลาทำให้คุณเสียพลังมาก คุณละเอียดอ่อนและรับรู้สายตาคนอื่นอย่างชัด\nคุณอาจดูเข้าสังคมเก่ง แต่จริง ๆ เป็นคนที่สบายใจจริงเมื่ออยู่ในพื้นที่ของตัวเอง ถึงขั้นมีความย้อนแย้งที่ว่าการใส่หน้ากากกลับทำให้คุณอิสระขึ้น คุณจึงไม่เปิดใจง่าย ๆ แต่เมื่อเปิดกับใครแล้วก็ตรงไปตรงมาเกินคาด\nข้างในใจ คุณอยากพักที่ใดที่หนึ่งที่ไม่มีใครจำคุณได้ การซ่อนตัวไม่ใช่การหนี แต่เป็นการชาร์จพลังเพื่อกลับมาเป็นตัวเอง"
   },
   "opp": "prank",
   "match": "calm",
   "rarity": 0.6,
   "need": "cool",
   "advice": {
    "ko": "오늘 하루는 부캐 이름으로 주문해보는 건 어떨까요?",
    "en": "How about placing your order today under your alter ego's name?",
    "zh": "今天要不要用分身的名字下单？",
    "ja": "今日は一日、サブキャの名前で注文してみるのはどうでしょう？",
    "es": "¿Qué tal hacer tu pedido hoy con el nombre de tu alter ego?",
    "pt": "Que tal fazer o seu pedido de hoje no nome do seu alter ego?",
    "fr": "Et si vous passiez votre commande du jour sous le nom de votre alter ego ?",
    "de": "Wie wäre es, Ihre heutige Bestellung unter dem Namen Ihres Alter Egos aufzugeben?",
    "th": "วันนี้ลองสั่งของในชื่ออีกตัวตนของคุณดีไหมครับ?"
   },
   "pt": "às vezes quer esconder quem é",
   "fr": "veut parfois cacher qui il est",
   "de": "sich manchmal verstecken möchte",
   "th": "บางครั้งอยากซ่อนว่าตัวเองเป็นใคร"
  }
 ],
 "needs": {
  "cool": {
   "ko": "당신에겐 머리를 식히는 시간이 필요합니다.",
   "en": "What you need is a little time to cool your head.",
   "zh": "你需要的是一点让头脑降温的时间。",
   "ja": "あなたに必要なのは、頭を冷やす時間です。",
   "es": "Lo que necesitas es un rato para enfriar la cabeza.",
   "pt": "O que você precisa é de um tempinho para esfriar a cabeça.",
   "fr": "Ce dont vous avez besoin, c'est d'un peu de temps pour vous rafraîchir les idées.",
   "de": "Was Sie brauchen, ist ein bisschen Zeit, um den Kopf abzukühlen.",
   "th": "สิ่งที่คุณต้องการคือเวลาสักหน่อยให้หัวเย็นลง",
   "tags": [
    "zen",
    "frog",
    "incense",
    "ceramic"
   ]
  },
  "stim": {
   "ko": "당신에겐 따분한 일상을 달래줄 자극이 필요합니다.",
   "en": "What you need is a spark to soothe a dull routine.",
   "zh": "你需要的是一点刺激，来安抚乏味的日常。",
   "ja": "あなたに必要なのは、退屈な日常をなだめる刺激です。",
   "es": "Lo que necesitas es un estímulo que calme una rutina aburrida.",
   "pt": "O que você precisa é de uma faísca para suavizar uma rotina sem graça.",
   "fr": "Ce dont vous avez besoin, c'est d'une étincelle pour adoucir une routine terne.",
   "de": "Was Sie brauchen, ist ein Funke, der einen faden Alltag besänftigt.",
   "th": "สิ่งที่คุณต้องการคือประกายเล็ก ๆ ที่ปลอบประโลมชีวิตประจำวันอันน่าเบื่อ",
   "tags": [
    "scary",
    "spicy",
    "prank",
    "game"
   ]
  },
  "laugh": {
   "ko": "당신에겐 아무 이유 없이 크게 웃을 일이 필요합니다.",
   "en": "What you need is something to laugh at for no reason at all.",
   "zh": "你需要的是一件毫无理由就能大笑的事。",
   "ja": "あなたに必要なのは、理由もなく大笑いできる何かです。",
   "es": "Lo que necesitas es algo de lo que reírte sin ningún motivo.",
   "pt": "O que você precisa é de algo para rir sem motivo nenhum.",
   "fr": "Ce dont vous avez besoin, c'est de quelque chose pour rire sans aucune raison.",
   "de": "Was Sie brauchen, ist etwas, worüber Sie grundlos lachen können.",
   "th": "สิ่งที่คุณต้องการคือเรื่องให้หัวเราะโดยไม่มีเหตุผลเลย",
   "tags": [
    "funny_face",
    "prank",
    "human",
    "cartoon",
    "monkey"
   ]
  },
  "comfort": {
   "ko": "당신에겐 말없이 기대어도 되는 존재가 필요합니다.",
   "en": "What you need is something you can lean on without a word.",
   "zh": "你需要的是一个可以不用开口就能依靠的存在。",
   "ja": "あなたに必要なのは、何も言わずにもたれかかれる存在です。",
   "es": "Lo que necesitas es algo en lo que apoyarte sin decir nada.",
   "pt": "O que você precisa é de algo em que se apoiar sem dizer uma palavra.",
   "fr": "Ce dont vous avez besoin, c'est de quelque chose sur quoi vous appuyer sans un mot.",
   "de": "Was Sie brauchen, ist etwas, an das Sie sich ohne ein Wort anlehnen können.",
   "th": "สิ่งที่คุณต้องการคือสิ่งที่พิงได้โดยไม่ต้องพูดสักคำ",
   "tags": [
    "plush",
    "cute",
    "animal",
    "cat"
   ]
  },
  "play": {
   "ko": "당신에겐 아무 목적 없이 손을 움직이는 시간이 필요합니다.",
   "en": "What you need is time to move your hands with no purpose at all.",
   "zh": "你需要的是一段不带任何目的、只是动动手的时间。",
   "ja": "あなたに必要なのは、目的もなく手を動かす時間です。",
   "es": "Lo que necesitas es un tiempo para mover las manos sin ningún propósito.",
   "pt": "O que você precisa é de um tempo para mexer as mãos sem propósito nenhum.",
   "fr": "Ce dont vous avez besoin, c'est d'un moment pour bouger les mains sans aucun but.",
   "de": "Was Sie brauchen, ist Zeit, die Hände völlig zwecklos zu bewegen.",
   "th": "สิ่งที่คุณต้องการคือเวลาให้ขยับมือเล่นโดยไม่มีจุดประสงค์ใด ๆ",
   "tags": [
    "toy",
    "game",
    "puzzle",
    "spin"
   ]
  },
  "move": {
   "ko": "당신에겐 책상에서 일어나 뛰어놀 핑계가 필요합니다.",
   "en": "What you need is an excuse to leave the desk and go play.",
   "zh": "你需要的是一个离开书桌、出去玩的借口。",
   "ja": "あなたに必要なのは、机を離れて遊びに出る口実です。",
   "es": "Lo que necesitas es una excusa para dejar el escritorio e ir a jugar.",
   "pt": "O que você precisa é de uma desculpa para largar a mesa e ir brincar.",
   "fr": "Ce dont vous avez besoin, c'est d'une excuse pour quitter le bureau et aller jouer.",
   "de": "Was Sie brauchen, ist eine Ausrede, den Schreibtisch zu verlassen und spielen zu gehen.",
   "th": "สิ่งที่คุณต้องการคือข้ออ้างให้ลุกจากโต๊ะไปเล่น",
   "tags": [
    "outdoor",
    "game",
    "toy"
   ]
  },
  "role": {
   "ko": "당신에겐 잠시 다른 누군가가 되어볼 기회가 필요합니다.",
   "en": "What you need is a chance to be someone else for a while.",
   "zh": "你需要的是一个暂时成为另一个人的机会。",
   "ja": "あなたに必要なのは、しばらく別の誰かになれる機会です。",
   "es": "Lo que necesitas es la oportunidad de ser otra persona por un rato.",
   "pt": "O que você precisa é da chance de ser outra pessoa por um tempo.",
   "fr": "Ce dont vous avez besoin, c'est de la chance d'être quelqu'un d'autre un moment.",
   "de": "Was Sie brauchen, ist die Chance, eine Weile jemand anderes zu sein.",
   "th": "สิ่งที่คุณต้องการคือโอกาสได้เป็นคนอื่นสักพัก",
   "tags": [
    "costume",
    "headwear",
    "maskface",
    "celebrity"
   ]
  },
  "wonder": {
   "ko": "당신에겐 세상이 아직 신비롭다는 작은 증거가 필요합니다.",
   "en": "What you need is small proof that the world is still mysterious.",
   "zh": "你需要的是一点小小的证据，证明这个世界依然神秘。",
   "ja": "あなたに必要なのは、世界はまだ不思議だという小さな証拠です。",
   "es": "Lo que necesitas es una pequeña prueba de que el mundo sigue siendo misterioso.",
   "pt": "O que você precisa é de uma pequena prova de que o mundo ainda é misterioso.",
   "fr": "Ce dont vous avez besoin, c'est d'une petite preuve que le monde reste mystérieux.",
   "de": "Was Sie brauchen, ist ein kleiner Beweis dafür, dass die Welt noch geheimnisvoll ist.",
   "th": "สิ่งที่คุณต้องการคือหลักฐานเล็ก ๆ ว่าโลกยังลึกลับอยู่",
   "tags": [
    "magic",
    "illusion",
    "alien",
    "egypt"
   ]
  },
  "sound": {
   "ko": "당신에겐 귓가를 채워줄 작은 소리가 필요합니다.",
   "en": "What you need is a small sound to fill your ears.",
   "zh": "你需要的是一个能填满耳畔的小小声音。",
   "ja": "あなたに必要なのは、耳元を満たしてくれる小さな音です。",
   "es": "Lo que necesitas es un pequeño sonido que llene tus oídos.",
   "pt": "O que você precisa é de um som pequeno para encher seus ouvidos.",
   "fr": "Ce dont vous avez besoin, c'est d'un petit son pour remplir vos oreilles.",
   "de": "Was Sie brauchen, ist ein kleiner Klang, der Ihre Ohren füllt.",
   "th": "สิ่งที่คุณต้องการคือเสียงเล็ก ๆ มาเติมเต็มหู",
   "tags": [
    "sound",
    "guitar"
   ]
  },
  "free": {
   "ko": "당신에겐 쓸모를 따지지 않고 좋아해도 된다는 허락이 필요합니다.",
   "en": "What you need is permission to like something without asking what it is for.",
   "zh": "你需要的是一份许可：不问有什么用，也可以喜欢。",
   "ja": "あなたに必要なのは、役に立つかどうかを問わずに好きになっていいという許しです。",
   "es": "Lo que necesitas es permiso para querer algo sin preguntar para qué sirve.",
   "pt": "O que você precisa é da permissão de gostar de algo sem perguntar para que serve.",
   "fr": "Ce dont vous avez besoin, c'est de la permission d'aimer quelque chose sans demander à quoi ça sert.",
   "de": "Was Sie brauchen, ist die Erlaubnis, etwas zu mögen, ohne zu fragen, wozu es gut ist.",
   "th": "สิ่งที่คุณต้องการคือการอนุญาตให้ชอบอะไรได้โดยไม่ต้องถามว่าใช้ทำอะไร",
   "tags": []
  },
  "view": {
   "ko": "당신에겐 눈길이 머물 작은 풍경이 필요합니다.",
   "en": "What you need is a small view for your eyes to rest on.",
   "zh": "你需要的是一处能让目光停留的小小风景。",
   "ja": "あなたに必要なのは、視線が留まる小さな風景です。",
   "es": "Lo que necesitas es un pequeño paisaje donde descansar la vista.",
   "pt": "O que você precisa é de uma pequena paisagem onde seus olhos possam descansar.",
   "fr": "Ce dont vous avez besoin, c'est d'un petit paysage où poser le regard.",
   "de": "Was Sie brauchen, ist eine kleine Aussicht, auf der Ihr Blick ruhen kann.",
   "th": "สิ่งที่คุณต้องการคือวิวเล็ก ๆ ให้สายตาได้พัก",
   "tags": [
    "wall",
    "painting",
    "art"
   ]
  },
  "welcome": {
   "ko": "당신에겐 이상하고 어설퍼도 환영받는 자리가 필요합니다.",
   "en": "What you need is a place where being odd and clumsy is welcome.",
   "zh": "你需要的是一个古怪又笨拙也被欢迎的地方。",
   "ja": "あなたに必要なのは、変でぎこちなくても歓迎される居場所です。",
   "es": "Lo que necesitas es un lugar donde ser raro y torpe sea bienvenido.",
   "pt": "O que você precisa é de um lugar onde ser esquisito e desajeitado seja bem-vindo.",
   "fr": "Ce dont vous avez besoin, c'est d'un endroit où l'on est bienvenu même bizarre et maladroit.",
   "de": "Was Sie brauchen, ist ein Ort, an dem man auch seltsam und unbeholfen willkommen ist.",
   "th": "สิ่งที่คุณต้องการคือที่ที่แปลกและซุ่มซ่ามก็ยังได้รับการต้อนรับ",
   "tags": [
    "craft",
    "funny_face"
   ]
  },
  "sturdy": {
   "ko": "당신에겐 오늘 하루 단단히 붙잡아 줄 든든한 무언가가 필요합니다.",
   "en": "What you need is something sturdy to hold on to today.",
   "zh": "你需要的是今天能牢牢抓住的、可靠的东西。",
   "ja": "あなたに必要なのは、今日をしっかり支えてくれる頼もしい何かです。",
   "es": "Lo que necesitas es algo firme a lo que agarrarte hoy.",
   "pt": "O que você precisa é de algo firme em que se agarrar hoje.",
   "fr": "Ce dont vous avez besoin, c'est de quelque chose de solide à quoi vous accrocher aujourd'hui.",
   "de": "Was Sie brauchen, ist heute etwas Stabiles zum Festhalten.",
   "th": "สิ่งที่คุณต้องการวันนี้คือสิ่งที่มั่นคงให้เกาะ",
   "tags": [
    "tough",
    "metal",
    "bear",
    "kangaroo"
   ]
  },
  "guard": {
   "tags": [
    "job",
    "tough",
    "metal",
    "statue",
    "god"
   ],
   "ko": "당신에겐 책상 위를 말없이 지켜줄 든든한 존재가 필요합니다.",
   "en": "What you need is a steady presence to quietly watch over your desk.",
   "zh": "你需要的是一个默默守护书桌的可靠存在。",
   "ja": "あなたに必要なのは、机の上を黙って見守ってくれる頼もしい存在です。",
   "es": "Lo que necesitas es una presencia firme que vigile tu escritorio en silencio.",
   "pt": "O que você precisa é de uma presença firme para vigiar sua mesa em silêncio.",
   "fr": "Ce dont vous avez besoin, c'est d'une présence solide qui veille en silence sur votre bureau.",
   "de": "Was Sie brauchen, ist eine verlässliche Präsenz, die still über Ihren Schreibtisch wacht.",
   "th": "สิ่งที่คุณต้องการคือผู้เฝ้าที่พึ่งพาได้ คอยเฝ้าโต๊ะของคุณอย่างเงียบ ๆ"
  },
  "awe": {
   "tags": [
    "god",
    "zen",
    "east",
    "incense",
    "statue"
   ],
   "ko": "당신에겐 가끔 올려다보며 숨을 고를 작은 존재가 필요합니다.",
   "en": "What you need is a small presence to look up to and catch your breath.",
   "zh": "你需要的是一个偶尔可以仰望、让你喘口气的小小存在。",
   "ja": "あなたに必要なのは、ときどき見上げて息をつける小さな存在です。",
   "es": "Lo que necesitas es una pequeña presencia a la que mirar hacia arriba para tomar aire.",
   "pt": "O que você precisa é de uma pequena presença para olhar para cima e tomar fôlego.",
   "fr": "Ce dont vous avez besoin, c'est d'une petite présence vers qui lever les yeux pour reprendre votre souffle.",
   "de": "Was Sie brauchen, ist ein kleines Wesen, zu dem Sie aufblicken und durchatmen können.",
   "th": "สิ่งที่คุณต้องการคือสิ่งเล็ก ๆ ให้เงยหน้ามองแล้วได้หายใจโล่ง"
  },
  "calm": {
   "tags": [
    "zen",
    "incense",
    "frog",
    "ceramic",
    "east"
   ],
   "ko": "당신에겐 아무것도 안 해도 되는 조용한 구석이 필요합니다.",
   "en": "What you need is a quiet corner where you don't have to do anything.",
   "zh": "你需要的是一个什么都不用做的安静角落。",
   "ja": "あなたに必要なのは、何もしなくていい静かな片隅です。",
   "es": "Lo que necesitas es un rincón tranquilo donde no tengas que hacer nada.",
   "pt": "O que você precisa é de um cantinho tranquilo onde não precise fazer nada.",
   "fr": "Ce dont vous avez besoin, c'est d'un coin tranquille où l'on n'a rien à faire.",
   "de": "Was Sie brauchen, ist eine ruhige Ecke, in der Sie nichts tun müssen.",
   "th": "สิ่งที่คุณต้องการคือมุมเงียบ ๆ ที่ไม่ต้องทำอะไรเลย"
  },
  "company": {
   "tags": [
    "animal",
    "cat",
    "dog",
    "bird",
    "plush",
    "doll",
    "cute"
   ],
   "ko": "당신에겐 책상 위에서 함께해줄 말 없는 동료가 필요합니다.",
   "en": "What you need is a wordless colleague to keep you company on your desk.",
   "zh": "你需要的是一位在书桌上默默陪伴你的同伴。",
   "ja": "あなたに必要なのは、机の上で黙って一緒にいてくれる仲間です。",
   "es": "Lo que necesitas es un compañero sin palabras que te acompañe en tu escritorio.",
   "pt": "O que você precisa é de um colega sem palavras para te fazer companhia na mesa.",
   "fr": "Ce dont vous avez besoin, c'est d'un collègue sans paroles pour vous tenir compagnie sur votre bureau.",
   "de": "Was Sie brauchen, ist ein wortloser Kollege, der Ihnen am Schreibtisch Gesellschaft leistet.",
   "th": "สิ่งที่คุณต้องการคือเพื่อนร่วมงานที่ไม่พูดอะไร คอยอยู่เป็นเพื่อนบนโต๊ะ"
  },
  "trick": {
   "tags": [
    "prank",
    "illusion",
    "magic",
    "hide"
   ],
   "ko": "당신에겐 아무도 모르게 벌일 작은 장난이 필요합니다.",
   "en": "What you need is a small prank to pull when nobody is looking.",
   "zh": "你需要的是一个趁没人注意时开的小玩笑。",
   "ja": "あなたに必要なのは、誰にも気づかれずに仕掛ける小さないたずらです。",
   "es": "Lo que necesitas es una pequeña broma para gastar cuando nadie mire.",
   "pt": "O que você precisa é de uma pequena pegadinha para aprontar quando ninguém estiver olhando.",
   "fr": "Ce dont vous avez besoin, c'est d'une petite farce à faire quand personne ne regarde.",
   "de": "Was Sie brauchen, ist ein kleiner Streich, den Sie spielen, wenn niemand hinsieht.",
   "th": "สิ่งที่คุณต้องการคือการแกล้งเล็ก ๆ ที่ทำตอนไม่มีใครเห็น"
  },
  "mirror": {
   "tags": [
    "funny_face",
    "maskface",
    "celebrity",
    "human",
    "monkey"
   ],
   "ko": "당신에겐 당신보다 더 어이없는 표정을 지어줄 존재가 필요합니다.",
   "en": "What you need is someone who can pull a more ridiculous face than you.",
   "zh": "你需要的是一个比你表情更离谱的存在。",
   "ja": "あなたに必要なのは、あなたよりもっと間抜けな顔をしてくれる存在です。",
   "es": "Lo que necesitas es alguien que ponga una cara más ridícula que la tuya.",
   "pt": "O que você precisa é de alguém que faça uma cara mais ridícula que a sua.",
   "fr": "Ce dont vous avez besoin, c'est de quelqu'un qui fait une tête encore plus ridicule que la vôtre.",
   "de": "Was Sie brauchen, ist jemand, der ein noch lächerlicheres Gesicht macht als Sie.",
   "th": "สิ่งที่คุณต้องการคือใครสักคนที่ทำหน้าไร้สาระกว่าคุณ"
  },
  "story": {
   "tags": [
    "cartoon",
    "costume",
    "headwear"
   ],
   "ko": "당신에겐 입는 순간 이야기가 시작되는 한 벌이 필요합니다.",
   "en": "What you need is something to wear that starts a story the moment it's on.",
   "zh": "你需要的是一件穿上就开始有故事的东西。",
   "ja": "あなたに必要なのは、身につけた瞬間に物語が始まる一着です。",
   "es": "Lo que necesitas es algo que ponerte que empiece una historia en cuanto lo llevas.",
   "pt": "O que você precisa é de algo para vestir que comece uma história assim que você o coloca.",
   "fr": "Ce dont vous avez besoin, c'est de quelque chose à porter qui lance une histoire dès qu'on l'enfile.",
   "de": "Was Sie brauchen, ist etwas zum Anziehen, das sofort eine Geschichte beginnt.",
   "th": "สิ่งที่คุณต้องการคือของที่ใส่แล้วเรื่องเล่าเริ่มทันที"
  },
  "time": {
   "tags": [
    "calendar"
   ],
   "ko": "당신에겐 한 해를 웃으며 넘길 달력이 필요합니다.",
   "en": "What you need is a calendar to get through the year with a smile.",
   "zh": "你需要的是一本能笑着过完一年的日历。",
   "ja": "あなたに必要なのは、笑いながら一年を越せるカレンダーです。",
   "es": "Lo que necesitas es un calendario para pasar el año con una sonrisa.",
   "pt": "O que você precisa é de um calendário para atravessar o ano sorrindo.",
   "fr": "Ce dont vous avez besoin, c'est d'un calendrier pour traverser l'année en souriant.",
   "de": "Was Sie brauchen, ist ein Kalender, mit dem Sie lächelnd durchs Jahr kommen.",
   "th": "สิ่งที่คุณต้องการคือปฏิทินที่ช่วยให้ผ่านทั้งปีไปพร้อมรอยยิ้ม"
  },
  "fix": {
   "tags": [
    "storage",
    "job"
   ],
   "ko": "당신에겐 책상 위의 사소한 혼란을 맡아줄 존재가 필요합니다.",
   "en": "What you need is someone to take charge of the small chaos on your desk.",
   "zh": "你需要的是一个替你管着书桌上琐碎混乱的存在。",
   "ja": "あなたに必要なのは、机の上のささやかな散らかりを引き受けてくれる存在です。",
   "es": "Lo que necesitas es alguien que se encargue del pequeño caos de tu escritorio.",
   "pt": "O que você precisa é de alguém para cuidar do pequeno caos da sua mesa.",
   "fr": "Ce dont vous avez besoin, c'est de quelqu'un qui prend en charge le petit chaos de votre bureau.",
   "de": "Was Sie brauchen, ist jemand, der das kleine Chaos auf Ihrem Schreibtisch übernimmt.",
   "th": "สิ่งที่คุณต้องการคือคนที่รับผิดชอบความวุ่นวายจุกจิกบนโต๊ะแทนคุณ"
  },
  "spook": {
   "tags": [
    "scary",
    "skeleton",
    "anatomy",
    "organ"
   ],
   "ko": "당신에겐 안전한 거리에서 만나는 작은 오싹함이 필요합니다.",
   "en": "What you need is a small shiver, met from a safe distance.",
   "zh": "你需要的是一点在安全距离之外遇见的小小寒意。",
   "ja": "あなたに必要なのは、安全な距離で出会える小さなぞくっとする感覚です。",
   "es": "Lo que necesitas es un pequeño escalofrío, vivido desde una distancia segura.",
   "pt": "O que você precisa é de um pequeno arrepio, vivido a uma distância segura.",
   "fr": "Ce dont vous avez besoin, c'est d'un petit frisson, vécu à bonne distance.",
   "de": "Was Sie brauchen, ist ein kleiner Schauer, aus sicherer Entfernung erlebt.",
   "th": "สิ่งที่คุณต้องการคือความขนลุกเล็ก ๆ ที่เจอได้จากระยะปลอดภัย"
  },
  "vent": {
   "tags": [
    "sound",
    "guitar",
    "spicy"
   ],
   "ko": "당신에겐 소리를 한번 크게 내볼 핑계가 필요합니다.",
   "en": "What you need is an excuse to make one big noise.",
   "zh": "你需要的是一个放声发出一次巨响的借口。",
   "ja": "あなたに必要なのは、一度大きな音を出してみる口実です。",
   "es": "Lo que necesitas es una excusa para hacer un ruido enorme.",
   "pt": "O que você precisa é de uma desculpa para fazer um barulhão.",
   "fr": "Ce dont vous avez besoin, c'est d'une excuse pour faire un grand bruit.",
   "de": "Was Sie brauchen, ist eine Ausrede, einmal richtig Lärm zu machen.",
   "th": "สิ่งที่คุณต้องการคือข้ออ้างให้ส่งเสียงดัง ๆ สักครั้ง"
  },
  "taste": {
   "tags": [
    "food",
    "mold"
   ],
   "ko": "당신에겐 먹을 수 없어서 더 사랑스러운 것이 필요합니다.",
   "en": "What you need is something all the more lovable because you can't eat it.",
   "zh": "你需要的是一样因为不能吃而更可爱的东西。",
   "ja": "あなたに必要なのは、食べられないからこそ愛おしいものです。",
   "es": "Lo que necesitas es algo más adorable precisamente porque no se puede comer.",
   "pt": "O que você precisa é de algo ainda mais adorável justamente por não poder ser comido.",
   "fr": "Ce dont vous avez besoin, c'est de quelque chose d'autant plus adorable qu'on ne peut pas le manger.",
   "de": "Was Sie brauchen, ist etwas, das gerade deshalb liebenswert ist, weil man es nicht essen kann.",
   "th": "สิ่งที่คุณต้องการคือของที่น่ารักยิ่งขึ้นเพราะกินไม่ได้"
  },
  "nostalgia": {
   "tags": [
    "west",
    "doll",
    "egypt"
   ],
   "ko": "당신에겐 어디선가 본 듯한 옛 시절의 한 조각이 필요합니다.",
   "en": "What you need is a fragment of some old era you feel you've seen before.",
   "zh": "你需要的是一块似曾相识的旧时光碎片。",
   "ja": "あなたに必要なのは、どこかで見たことがあるような昔の一片です。",
   "es": "Lo que necesitas es un fragmento de una época antigua que sientes haber visto antes.",
   "pt": "O que você precisa é de um fragmento de uma época antiga que parece já ter visto.",
   "fr": "Ce dont vous avez besoin, c'est d'un fragment d'une époque ancienne que vous croyez avoir déjà vue.",
   "de": "Was Sie brauchen, ist ein Stück einer alten Zeit, das Ihnen irgendwie bekannt vorkommt.",
   "th": "สิ่งที่คุณต้องการคือเศษเสี้ยวของยุคเก่าที่รู้สึกเหมือนเคยเห็นมาก่อน"
  },
  "brag": {
   "tags": [
    "pricey",
    "art",
    "jewelry",
    "painting"
   ],
   "ko": "당신에겐 괜히 자랑하고 싶어지는 한 점이 필요합니다.",
   "en": "What you need is one piece you'll want to show off for no good reason.",
   "zh": "你需要的是一件让你莫名想炫耀的东西。",
   "ja": "あなたに必要なのは、なぜか自慢したくなる一点です。",
   "es": "Lo que necesitas es una pieza que te den ganas de presumir sin razón.",
   "pt": "O que você precisa é de uma peça que dê vontade de exibir sem motivo nenhum.",
   "fr": "Ce dont vous avez besoin, c'est d'une pièce que vous aurez envie de montrer sans raison.",
   "de": "Was Sie brauchen, ist ein Stück, mit dem Sie ohne Grund angeben möchten.",
   "th": "สิ่งที่คุณต้องการคือชิ้นหนึ่งที่อยากอวดโดยไม่มีเหตุผล"
  },
  "gaze": {
   "tags": [
    "eyes",
    "anatomy"
   ],
   "ko": "당신에겐 책상에서 마주칠 시선이 필요합니다.",
   "en": "What you need is a pair of eyes to meet across your desk.",
   "zh": "你需要的是一道能在书桌上与你对视的目光。",
   "ja": "あなたに必要なのは、机の上で目が合う視線です。",
   "es": "Lo que necesitas es una mirada con la que cruzarte en tu escritorio.",
   "pt": "O que você precisa é de um olhar para cruzar com o seu na mesa.",
   "fr": "Ce dont vous avez besoin, c'est d'un regard qui croise le vôtre sur votre bureau.",
   "de": "Was Sie brauchen, ist ein Blick, der Ihrem am Schreibtisch begegnet.",
   "th": "สิ่งที่คุณต้องการคือสายตาคู่หนึ่งที่สบกันบนโต๊ะ"
  },
  "tinyworld": {
   "tags": [
    "tiny"
   ],
   "ko": "당신에겐 손바닥만 한 세상이 필요합니다.",
   "en": "What you need is a world the size of your palm.",
   "zh": "你需要的是一个巴掌大的世界。",
   "ja": "あなたに必要なのは、手のひらサイズの世界です。",
   "es": "Lo que necesitas es un mundo del tamaño de tu palma.",
   "pt": "O que você precisa é de um mundo do tamanho da palma da mão.",
   "fr": "Ce dont vous avez besoin, c'est d'un monde de la taille de votre paume.",
   "de": "Was Sie brauchen, ist eine Welt in der Größe Ihrer Handfläche.",
   "th": "สิ่งที่คุณต้องการคือโลกใบเล็กขนาดฝ่ามือ"
  }
 }
};
