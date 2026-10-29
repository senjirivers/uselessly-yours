// 질문, 상품, 링크, 문구는 이 파일 하나에서 바꿉니다.
// 질문 하나가 yes(예라고 답하면 어울리는 상품 태그), no(예라고 답하면 멀어지는 태그)에 점수를 줍니다.
window.QUIZ = {
 "lang": "ko",
 "languages": [
  "ko",
  "en",
  "zh",
  "ja",
  "es"
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
   "cardRare": "나올 확률 약 {p}%",
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
   "cardRare": "About {p}% get this",
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
   "cardRare": "出现概率约 {p}%",
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
   "cardRare": "出る確率 約 {p}%",
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
   "cardRare": "Sale en un {p}% aprox.",
   "guessAsk": "¿Y bien? ¿Voy bastante cerca?",
   "guessYes": "Parece que sí",
   "guessNo": "Para nada",
   "replyYes": "Ya lo sabía. Jamás me he equivocado.",
   "replyNo": "Esperaba que dijeras eso. Aun así, jamás me he equivocado, y está a punto de demostrarse."
  }
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
  "maxChoice": 6,
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
    "es": "¿Decorar tu cuarto o tu escritorio te parece una forma de descansar?"
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
    "es": "Seamos sinceros: ¿te atrae más una cara que acaba de liarla que una adorable?"
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
    "es": "De niño, ¿querías en secreto más a la figura de monstruo raro que a la muñeca bonita de al lado?"
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
    "es": "¿Hay algo que cada mudanza piensas tirar y acabas devolviendo a la caja?"
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
    "es": "¿Has recibido alguna vez un regalo misterioso, pensado «¿qué es esto?» y acabado poniéndolo en tu escritorio?"
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
    "es": "¿Se te van los ojos hacia texturas algo extrañas, como escamas o plumas, más que hacia el pelo?"
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
    "es": "¿Se te han ralentizado los pasos solos ante una vieja estatua de Buda o una pintura oriental clásica?"
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
    "es": "¿Has mirado durante mucho rato un cuadro en la pared de la casa de otro?"
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
    "es": "Si en una cena de equipo alguien propone ponerse sombreros ridículos, ¿te haces el remolón y te lo pones?"
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
    "es": "¿Encuentras un pequeño sentido a la vida acercándote por detrás a un amigo para asustarlo?"
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
    "es": "¿Has dicho «lo hago yo, que vi un vídeo» y te has quedado hasta el amanecer?"
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
    "es": "En las reuniones, ¿te pasas el rato dando vueltas al bolígrafo?"
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
    "es": "Al ver una goma o un llavero con forma de comida, ¿tu primer pensamiento es «tengo que comprarlo»?"
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
    "es": "En un museo, ¿te quedas más rato frente a los esqueletos que frente a los cuadros?"
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
    "es": "¿Lo feo se queda en tu memoria más tiempo que lo bonito?"
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
    "es": "En un día estresante, ¿abrazar algo blandito te alivia un poco?"
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
    "es": "Después de una película de lucha, ¿has salido caminando con los hombros extrañamente erguidos?"
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
    "es": "¿Te atraen más las cosas con huellas de un largo uso ajeno que las nuevas?"
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
    "es": "¿Una muñeca demasiado humana te inquieta y aun así no puedes dejar de mirarla?"
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
    "es": "¿Alguna vez has soñado con vivir la vida de otra persona?"
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
    "es": "Si pudieras vivir un día como tu alter ego, ¿lo primero sería cambiar de nombre?"
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
    "es": "¿Llevas un mes dándole vueltas a tu disfraz de Halloween?"
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
    "es": "¿Crees en secreto que un bigote te cambiaría la vida?"
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
    "es": "Si se oyera vidrio romperse en una sala silenciosa, ¿te reirías antes de asustarte?"
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
    "es": "¿Piensas que la pereza a veces es una virtud?"
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
    "es": "¿Quieres ser de esos adultos que salen el fin de semana a jugar con una pelota?"
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
    "es": "¿Has contenido las ganas de gastar una broma en una reunión muy formal?"
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
    "es": "¿Te resulta genial cuando algo estalla de pronto?"
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
    "es": "¿Te encantan los intercambios de regalos en los que nadie sabe qué saldrá?"
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
    "es": "¿Te gusta ver un peluche gastadísimo sentado sobre la cama?"
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
    "es": "Si un extraterrestre llamara a tu puerta, ¿le ofrecerías té primero?"
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
    "es": "¿Dormir abrazado a un muñeco de aspecto aterrador te tranquilizaría?"
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
    "es": "¿Quieres mirar hasta el final cómo se derrumba lo que apilaste?"
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
    "es": "¿Te vuelves más valiente cuando te pones una máscara?"
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
    "es": "¿A veces te dan ganas de soltar un grito enorme?"
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
    "es": "¿Encuentras un extraño consuelo en la espalda de alguien que trabaja duro?"
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
    "es": "¿Sientes compasión incluso por una criatura de ojos exageradamente grandes?"
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
    "es": "¿Pondrías algo adorable incluso en el rincón más sucio de tu casa?"
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
    "es": "¿Buscas tus llaves, monedas o gafas al menos una vez al día?"
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
    "es": "¿Alguna vez has armado un pequeño alboroto a propósito para animar una reunión?"
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
    "es": "¿Prefieres lo que se toca y con lo que se juega a lo que solo se mira?"
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
    "es": "¿Ponerte delante de la gente te emociona más de lo que te asusta?"
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
    "es": "¿Consideras que incluso las lágrimas por el picante forman parte de la diversión?"
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
    "es": "Si pudieras mirar dentro de un cuerpo, ¿te daría más curiosidad el esqueleto que los órganos?"
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
    "es": "Si pudieras vivir un día con la cara de una estrella famosa, ¿lo harías?"
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
    "es": "Son las 3 de la madrugada y te despiertas de golpe. ¿Qué haces?"
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
      "es": "Me pongo a ordenar el cuarto"
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
      "es": "Me quedo en la cama con el móvil"
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
      "es": "Me pongo a comer algo"
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
    "es": "Un amigo dice «te compro lo que quieras». ¿Qué eliges?"
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
      "es": "Doy mil vueltas y elijo lo que me llama sin saber por qué"
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
      "es": "Miro los precios de reojo y elijo algo que dure"
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
      "es": "Elijo algo divertido para reírnos juntos"
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
    "es": "Tienes que poner una cosa en un rincón de tu cuarto. ¿Cuál?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "수상하게 웃는 작은 얼굴",
      "en": "A small, suspiciously smiling face",
      "zh": "一张笑得可疑的小脸",
      "ja": "怪しく笑う小さな顔",
      "es": "Una carita que sonríe con sospecha"
     },
     "tags": [
      "funny_face",
      "cute"
     ]
    },
    {
     "text": {
      "ko": "조용히 앉아 있는 조각상",
      "en": "A quietly seated statue",
      "zh": "安静坐着的雕像",
      "ja": "静かに座っている像",
      "es": "Una estatua sentada en silencio"
     },
     "tags": [
      "statue",
      "god",
      "east"
     ]
    },
    {
     "text": {
      "ko": "묘하게 기괴한데 자꾸 눈이 가는 것",
      "en": "Something oddly eerie that keeps catching my eye",
      "zh": "怪异得有点诡，却总忍不住多看两眼的东西",
      "ja": "妙に不気味なのに、つい目が行くもの",
      "es": "Algo raro y siniestro que no dejo de mirar"
     },
     "tags": [
      "scary",
      "anatomy",
      "alien"
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
    "es": "En las reuniones, ¿cuál suele ser tu papel?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "분위기 메이커",
      "en": "The mood maker",
      "zh": "气氛担当",
      "ja": "盛り上げ役",
      "es": "El que anima el ambiente"
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
      "es": "Observando en silencio desde un rincón"
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
      "es": "Los snacks y la limpieza"
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
    "es": "¿Cuál es tu plan para este fin de semana?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "밖에서 몸을 쓰며 논다",
      "en": "Play outside and move around",
      "zh": "到外面活动玩耍",
      "ja": "外で体を動かして遊ぶ",
      "es": "Jugar y moverme al aire libre"
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
      "es": "Hacer algo en casa"
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
      "es": "Descanso prolongado bajo la manta"
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
    "es": "¿Cuándo piensas «esto es justo lo mío»?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "이상하게 생긴 걸 봤을 때",
      "en": "When I see something strange-looking",
      "zh": "看到长得奇怪的东西时",
      "ja": "変わった形の物を見たとき",
      "es": "Cuando veo algo de aspecto raro"
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
      "es": "Cuando algo viejo tiene ambiente"
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
      "es": "Cuando veo algo pequeño y adorable"
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
    "es": "Alguien hace un truco de magia frente a ti. ¿Qué piensas por dentro?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "어떻게 한 거지, 한 번 더 보여줘",
      "en": "How did you do that? Once more",
      "zh": "怎么做到的，再来一次",
      "ja": "どうやったの、もう一回見せて",
      "es": "¿Cómo lo hiciste? Otra vez"
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
      "es": "Yo también quiero probar"
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
      "es": "Sé que es un truco, pero me hace sentir bien"
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
    "es": "Si va a estar en tu escritorio, ¿cuál?"
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
      "es": "Un calendario o un cuadro"
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
      "es": "Una figurita"
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
      "es": "Una bandeja o un organizador"
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
   "id": "c_face",
   "text": {
    "ko": "어떤 표정에 가장 마음이 갑니까?",
    "en": "Which expression gets to you most?",
    "zh": "哪种表情最让你心动？",
    "ja": "どんな表情にいちばん心が動きますか？",
    "es": "¿Qué expresión te conmueve más?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "당황한 얼굴",
      "en": "A flustered face",
      "zh": "慌张的脸",
      "ja": "慌てた顔",
      "es": "Una cara de apuro"
     },
     "tags": [
      "funny_face",
      "human"
     ]
    },
    {
     "text": {
      "ko": "무표정한 정면",
      "en": "A blank, straight-on stare",
      "zh": "面无表情的正脸",
      "ja": "無表情の正面顔",
      "es": "Una mirada de frente sin expresión"
     },
     "tags": [
      "statue",
      "god",
      "cat"
     ]
    },
    {
     "text": {
      "ko": "졸린 얼굴",
      "en": "A sleepy face",
      "zh": "困倦的脸",
      "ja": "眠そうな顔",
      "es": "Una cara somnolienta"
     },
     "tags": [
      "frog",
      "cat",
      "cute"
     ]
    }
   ]
  },
  {
   "id": "c_rain",
   "text": {
    "ko": "비 오는 날, 창가에서 당신 곁에 있는 것은?",
    "en": "It's raining and you're by the window. What's next to you?",
    "zh": "下雨天，你在窗边，身旁是什么？",
    "ja": "雨の日、窓辺のあなたのそばにあるのは？",
    "es": "Llueve y estás junto a la ventana. ¿Qué tienes al lado?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "개구리 울음소리 같은 빗소리",
      "en": "Rain sounding like a chorus of frogs",
      "zh": "像蛙鸣一样的雨声",
      "ja": "カエルの合唱みたいな雨音",
      "es": "Una lluvia que suena a coro de ranas"
     },
     "tags": [
      "frog",
      "sound",
      "living"
     ]
    },
    {
     "text": {
      "ko": "무릎 위에 올라온 고양이",
      "en": "A cat that climbed into my lap",
      "zh": "爬到膝盖上的猫",
      "ja": "膝に乗ってきた猫",
      "es": "Un gato que se sube a mi regazo"
     },
     "tags": [
      "cat",
      "animal",
      "cute",
      "plush"
     ]
    },
    {
     "text": {
      "ko": "조용히 피어오르는 향",
      "en": "A quietly rising scent of incense",
      "zh": "静静升起的香",
      "ja": "静かに立ちのぼるお香",
      "es": "El humo tranquilo de un incienso"
     },
     "tags": [
      "incense",
      "zen"
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
    "es": "Estás eligiendo un regalo de cumpleaños para un amigo. ¿Cuál tomas?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "웃기게 생긴 모자나 소품",
      "en": "A funny-looking hat or accessory",
      "zh": "造型搞笑的帽子或小饰品",
      "ja": "笑える形の帽子や小物",
      "es": "Un sombrero o accesorio gracioso"
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
      "es": "Un juguete o juego para jugar juntos"
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
      "es": "Algo pequeño hecho por mí"
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
    "es": "Si mañana se acaba el mundo, ¿qué quieres tener a tu lado?"
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
      "es": "Un animal que quiero"
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
      "es": "Algo de aspecto ridículo"
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
      "es": "Algo que me serene en silencio"
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
    "ko": "무인도에 딱 하나만 가져간다면?",
    "en": "You can take just one thing to a desert island. Which?",
    "zh": "只能带一样东西去无人岛，你选哪个？",
    "ja": "無人島に一つだけ持っていくなら？",
    "es": "Solo puedes llevar una cosa a una isla desierta. ¿Cuál?"
   },
   "stage": 3,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "살아 있는 것",
      "en": "Something alive",
      "zh": "活的东西",
      "ja": "生きているもの",
      "es": "Algo vivo"
     },
     "tags": [
      "living",
      "animal",
      "cute"
     ]
    },
    {
     "text": {
      "ko": "소리 나는 것",
      "en": "Something that makes sound",
      "zh": "会发出声音的东西",
      "ja": "音が出るもの",
      "es": "Algo que suene"
     },
     "tags": [
      "sound",
      "guitar",
      "game",
      "toy"
     ]
    },
    {
     "text": {
      "ko": "보고만 있어도 웃긴 것",
      "en": "Something funny just to look at",
      "zh": "光是看着就好笑的东西",
      "ja": "見ているだけで笑えるもの",
      "es": "Algo que da risa solo con mirarlo"
     },
     "tags": [
      "funny_face",
      "statue",
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
    "es": "Si fuera tu foto de perfil, ¿cuál sería?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "표정이 이상하게 나온 사진",
      "en": "A photo where my face came out weird",
      "zh": "表情拍得很奇怪的照片",
      "ja": "変な顔に写った写真",
      "es": "Una foto donde salí con cara rara"
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
      "es": "Una foto de un animal"
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
      "es": "Un objeto o paisaje con ambiente"
     },
     "tags": [
      "decor",
      "wall"
     ]
    }
   ]
  },
  {
   "id": "c_hat",
   "text": {
    "ko": "새 모자를 산다면, 어느 쪽에 손이 갑니까?",
    "en": "If you were buying a new hat, which would you reach for?",
    "zh": "如果要买一顶新帽子，你会伸手拿哪顶？",
    "ja": "新しい帽子を買うなら、どれに手が伸びますか？",
    "es": "Si te compraras un sombrero nuevo, ¿cuál tomarías?"
   },
   "stage": 3,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "동물 귀가 달린 것",
      "en": "One with animal ears",
      "zh": "带动物耳朵的",
      "ja": "動物の耳がついたもの",
      "es": "Uno con orejas de animal"
     },
     "tags": [
      "headwear",
      "animal",
      "plush",
      "cute",
      "costume"
     ]
    },
    {
     "text": {
      "ko": "눈에 확 띄는 이상한 것",
      "en": "Something strange that stands out",
      "zh": "一眼就很显眼的怪帽子",
      "ja": "一目で目立つ変わったもの",
      "es": "Algo raro que llame la atención"
     },
     "tags": [
      "headwear",
      "funny_face",
      "costume"
     ]
    },
    {
     "text": {
      "ko": "조용히 어울리는 것",
      "en": "Something that quietly suits me",
      "zh": "安静地很合适的",
      "ja": "静かに似合うもの",
      "es": "Algo que me quede bien sin hacer ruido"
     },
     "tags": [
      "wearable",
      "useful",
      "east"
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
    "es": "Al llegar a casa, ¿qué sonido te alegraría más?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "야옹, 혹은 멍멍",
      "en": "A meow or a woof",
      "zh": "喵，或者汪",
      "ja": "にゃあ、あるいはわん",
      "es": "Un miau o un guau"
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
      "es": "Una rana o un pájaro cantando"
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
      "es": "Música que alguien dejó puesta"
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
    "ko": "어젯밤 꿈에 이상한 것이 나왔습니다. 무엇이었을 것 같습니까?",
    "en": "Something strange showed up in last night's dream. What was it?",
    "zh": "昨晚的梦里出现了奇怪的东西，你觉得是什么？",
    "ja": "昨夜の夢に変なものが出てきました。何だったと思いますか？",
    "es": "Anoche algo extraño apareció en tu sueño. ¿Qué crees que fue?"
   },
   "stage": 3,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "말을 거는 동물",
      "en": "An animal that talked to me",
      "zh": "跟我说话的动物",
      "ja": "話しかけてくる動物",
      "es": "Un animal que me hablaba"
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
      "ko": "거대한 얼굴이나 신상",
      "en": "A giant face or idol",
      "zh": "巨大的脸或神像",
      "ja": "巨大な顔や神像",
      "es": "Una cara gigante o un ídolo"
     },
     "tags": [
      "god",
      "statue",
      "human",
      "scary"
     ]
    },
    {
     "text": {
      "ko": "처음 보는 신기한 도구",
      "en": "A strange tool I'd never seen",
      "zh": "从没见过的神奇道具",
      "ja": "見たことのない不思議な道具",
      "es": "Una herramienta extraña que nunca vi"
     },
     "tags": [
      "toy",
      "game",
      "alien"
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
    "es": "Tienes un objeto pequeño que aprecias. ¿Dónde lo pones?"
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
      "es": "En mi escritorio, bien a la vista"
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
      "es": "Colgado en la pared"
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
      "es": "A escondidas en un cajón"
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
    "es": "Viendo una película de miedo, ¿cuál eres?"
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
      "es": "Miro entre los dedos"
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
      "es": "Con miedo, pero me río"
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
      "es": "La criatura da miedo pero me parece mona"
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
    "es": "¿En qué inviertes más tiempo últimamente?"
   },
   "stage": 2,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "이상한 물건 구경하기",
      "en": "Browsing weird stuff",
      "zh": "逛奇奇怪怪的东西",
      "ja": "変な物を眺めること",
      "es": "Mirar cosas raras"
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
      "es": "Hacer algo con mis manos"
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
      "es": "Ver vídeos de animales"
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
    "es": "En un centro comercial, ¿prefieres pasear y mirar en vez de ir con una lista?"
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
    "es": "En un regalo, ¿recuerdas más tiempo la intención que el precio?"
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
    "es": "¿Recuerdas todavía algún juguete raro que compraste de niño en la papelería?"
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
    "es": "En una máquina de peluches, ¿te ha atraído alguna vez el más feo de todos?"
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
    "es": "¿Tu escritorio siempre necesita un pequeño compañero?"
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
    "es": "¿Alguna vez te han dicho que tu gusto es peculiar?"
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
    "es": "Al elegir un regalo, ¿te decantas antes por algo con encanto que por algo práctico?"
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
    "es": "¿Te atrae lo que es mono y un poco grotesco a la vez?"
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
    "es": "¿Te tranquiliza tener sobre el escritorio una figurita con un oficio muy claro?"
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
    "es": "¿Te gustaría dejar la decoración de temporada puesta todo el año?"
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
    "es": "¿Te hace reír imaginar un ojo en tu escritorio que te mira?"
   },
   "yes": [
    "eyes",
    "funny_face"
   ],
   "no": [],
   "stage": 3
  },
  {
   "id": "c_being",
   "text": {
    "ko": "책상 위에 누군가 살게 된다면, 어떤 존재가 좋겠습니까?",
    "en": "If something were going to live on your desk, what would you want it to be?",
    "zh": "如果书桌上要住进一位新成员，你希望是什么？",
    "ja": "机の上に誰かが住みつくなら、どんな存在がいいですか？",
    "es": "Si algo fuera a vivir en tu escritorio, ¿qué te gustaría que fuera?"
   },
   "stage": 1,
   "yes": [],
   "no": [],
   "options": [
    {
     "text": {
      "ko": "작은 동물이나 생물",
      "en": "A small animal or creature",
      "zh": "小动物或小生物",
      "ja": "小さな動物や生き物",
      "es": "Un animalito o criatura"
     },
     "tags": [
      "animal",
      "living",
      "cute",
      "frog",
      "cat"
     ]
    },
    {
     "text": {
      "ko": "사람 모양의 작은 인물",
      "en": "A tiny person-shaped figure",
      "zh": "人形的小人物",
      "ja": "人の形をした小さな人物",
      "es": "Una figurita con forma humana"
     },
     "tags": [
      "human",
      "statue",
      "west",
      "job",
      "costume"
     ]
    },
    {
     "text": {
      "ko": "정체를 알 수 없는 이상한 존재",
      "en": "Some strange being of unknown identity",
      "zh": "来历不明的奇怪存在",
      "ja": "正体不明の変な存在",
      "es": "Un ser extraño de identidad desconocida"
     },
     "tags": [
      "alien",
      "scary",
      "anatomy",
      "funny_face"
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
    "es": "¿Qué forma te atrae más?"
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
      "es": "Algo mullido que dan ganas de abrazar"
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
      "es": "Una escultura pesada que se queda en su sitio"
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
      "es": "Algo para tener en la mano y toquetear"
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
    "es": "En un día de estrés, ¿qué buscan primero tus manos?"
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
      "es": "Algo blandito que apretar"
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
      "es": "Algo que haga clic"
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
      "es": "Algo que pueda mirar sin pensar"
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
    "es": "Entre las figuras con forma humana, ¿cuál te atrae?"
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
      "es": "Un profesional que se toma muy en serio su oficio"
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
      "es": "Un caballero o payaso de la vieja Europa"
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
      "es": "Un pensador o Buda sentado en silencio"
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
    "es": "De lo repulsivo, ¿qué es lo menos malo?"
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
      "es": "Partes del cuerpo como dedos o un cerebro"
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
      "es": "Monstruos marinos de las profundidades o con tentáculos"
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
      "es": "Cosas oscuras como calaveras o murciélagos"
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
    "es": "¿Disfrutas notar en la mano el peso de un metal o una piedra?"
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
    "es": "¿Alguna vez te has quedado mirando algo que repite el mismo movimiento?"
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
    "es": "¿Te atraen los adornos que parecen utilería de una película europea antigua?"
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
    "es": "¿Algo repulsivo pero curiosamente gracioso te alegra más que te asquea?"
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
    "es": "En un día libre, ¿prefieres quedarte en casa trasteando a solas antes que salir?"
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
    "es": "Al elegir cosas, ¿confías más en el flechazo que en las reseñas y las puntuaciones?"
   },
   "yes": [
    "decor",
    "magic",
    "doll"
   ],
   "no": [],
   "stage": 2
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
    "es": "Un amigo de cerámica a medio hornear"
   },
   "line": {
    "ko": "완성되지 않은 얼굴에서 위안을 얻는 분이시군요.",
    "en": "You find comfort in faces that never quite finished.",
    "zh": "你会从没完成的脸上得到安慰。",
    "ja": "未完成の顔に安らぎを感じる方ですね。",
    "es": "Encuentras consuelo en caras que nunca terminaron de hacerse."
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
    "es": "Un plátano que intenta no reírse"
   },
   "line": {
    "ko": "과일이 이렇게까지 자신만만해도 되는지, 저는 모르겠습니다.",
    "en": "I cannot say whether a fruit should be this confident.",
    "zh": "水果可以这么自信吗？我也不知道。",
    "ja": "果物がここまで自信満々でいいのか、私にはわかりません。",
    "es": "No sé si una fruta debería tener tanta seguridad."
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
    "es": "Una rana de madera que croa al rascarle la espalda"
   },
   "line": {
    "ko": "소리 나는 개구리를 외면하기란 쉽지 않은 일입니다.",
    "en": "A frog that makes noise is hard to ignore.",
    "zh": "会发声的青蛙，很难不理它。",
    "ja": "音の出るカエルを無視するのは難しいものです。",
    "es": "Una rana que hace ruido es difícil de ignorar."
   },
   "origName": "나무 개구리 타악기(귀로)",
   "url": "https://temu.to/k/gc3d8ohed3t",
   "urlByLang": {},
   "img": "assets/products/3.webp",
   "prior": 2.903,
   "shop": "temu"
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
    "es": "Una cara más para tu móvil"
   },
   "line": {
    "ko": "폰이 쳐다보고 있다는 사실을, 당신은 이미 즐기고 계십니다.",
    "en": "You already enjoy the thought of your phone staring back.",
    "zh": "手机在盯着你，这一点你其实很享受。",
    "ja": "スマホに見つめられることを、すでに楽しんでおられます。",
    "es": "Ya disfrutas de la idea de que tu móvil te mire."
   },
   "origName": "웃긴 얼굴 2D 폰케이스",
   "url": "https://temu.to/k/gwyxrwctne0",
   "urlByLang": {},
   "img": "assets/products/4.webp",
   "prior": 7.045,
   "shop": "temu"
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
    "es": "Una máscara para vivir un día como una estrella"
   },
   "line": {
    "ko": "유명한 누군가의 얼굴로 하루쯤 살아보고 싶은 마음이 있으시군요.",
    "en": "Part of you wants to live a day wearing a famous face.",
    "zh": "你心里想过，哪怕只有一天，用名人的脸活一次。",
    "ja": "有名な誰かの顔で、一日くらい生きてみたい気持ちがあるのですね。",
    "es": "Una parte de ti quiere vivir un día con la cara de alguien famoso."
   },
   "origName": "3D프린팅 스타 마스크",
   "url": "https://temu.to/k/g5n2llvb5e9",
   "urlByLang": {},
   "img": "assets/products/5.webp",
   "prior": 3.724,
   "shop": "temu"
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
    "es": "Un calendario para envejecer 365 días con una rana"
   },
   "line": {
    "ko": "시간은 흐르고, 개구리는 그 자리에 있습니다. 당신은 그 점이 마음에 드십니다.",
    "en": "Time passes. The frog stays. You like that.",
    "zh": "时间流逝，青蛙还在。你喜欢这一点。",
    "ja": "時は流れ、カエルはそこにいる。あなたはそこが気に入っています。",
    "es": "El tiempo pasa, la rana se queda. Eso te gusta."
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
    "es": "Un oso boxeador de aguante probado"
   },
   "line": {
    "ko": "강인함 뒤의 다정함을 알아보시는 분이군요.",
    "en": "You notice the kindness behind the strength.",
    "zh": "你看得出力量背后的温柔。",
    "ja": "強さの裏のやさしさに気づく方です。",
    "es": "Notas la ternura detrás de la fuerza."
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
    "es": "Un gato y un perro, sinceros hasta los huesos"
   },
   "line": {
    "ko": "겉보다 속이 궁금하신 분. 드문 취향이지만 존중합니다.",
    "en": "You're curious about the inside more than the outside. Rare, but respected.",
    "zh": "比起外表，你更好奇里面。少见，但值得尊重。",
    "ja": "外側より中身が気になる方。珍しいですが、尊重します。",
    "es": "Te intriga más el interior que el exterior. Raro, pero respetable."
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
    "es": "Un molde secreto para estampar expresiones"
   },
   "line": {
    "ko": "남의 얼굴을 빚는 일에 조용한 쾌감을 느끼십니다.",
    "en": "You take quiet pleasure in shaping a face.",
    "zh": "你悄悄享受塑造一张脸的乐趣。",
    "ja": "顔をかたどることに、静かな快感を覚えます。",
    "es": "Disfrutas en silencio de dar forma a una cara."
   },
   "origName": "웃긴 얼굴 실리콘 몰드",
   "url": "https://temu.to/k/g1gu7wtho5h",
   "urlByLang": {},
   "img": "assets/products/9.webp",
   "prior": 2.575,
   "shop": "temu"
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
    "es": "Un alienígena que llegó a la Tierra y lo primero que hizo fue tocar la flauta"
   },
   "line": {
    "ko": "그의 우선순위에 깊이 공감하고 계십니다.",
    "en": "You deeply understand his priorities.",
    "zh": "你完全理解他的优先顺序。",
    "ja": "彼の優先順位に深く共感しておられます。",
    "es": "Comprendes a fondo sus prioridades."
   },
   "origName": "플루트 부는 외계인 조각상",
   "url": "https://temu.to/k/gb5mfr5t20s",
   "urlByLang": {},
   "img": "assets/products/10.webp",
   "prior": 2.277,
   "shop": "temu"
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
    "es": "Un canguro que lo arregla todo a puñetazos"
   },
   "line": {
    "ko": "주머니가 있는 격투가라니, 이보다 당신다운 조합은 없습니다.",
    "en": "A fighter with a pouch. No pairing suits you better.",
    "zh": "有育儿袋的格斗家，没有比这更像你的组合了。",
    "ja": "袋付きの格闘家。これ以上あなたらしい組み合わせはありません。",
    "es": "Un luchador con bolsa. Ninguna combinación te va mejor."
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
    "es": "Una rana de bronce que vacía la mente con humo"
   },
   "line": {
    "ko": "고요함 속에서도 개구리를 놓지 못하는 분이십니다.",
    "en": "Even in stillness, you can't let go of the frog.",
    "zh": "在宁静中，你也放不下青蛙。",
    "ja": "静けさの中でも、カエルを手放せない方です。",
    "es": "Incluso en la calma, no puedes soltar a la rana."
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
    "es": "Un calendario corto por delante y largo por detrás"
   },
   "line": {
    "ko": "시간을 읽는 방식마저 개성이 있으셔야 합니다.",
    "en": "Even how you read time has to have personality.",
    "zh": "连读时间的方式也要有个性。",
    "ja": "時間の読み方にも個性がなくては。",
    "es": "Hasta la forma de leer el tiempo debe tener personalidad."
   },
   "origName": "2027 멀렛 헤어 벽걸이 달력",
   "url": "https://temu.to/k/gvngrfdpn4p",
   "urlByLang": {},
   "img": "assets/products/13.webp",
   "prior": 1.293,
   "shop": "temu"
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
    "es": "Una camiseta de cómic que empieza una historia al ponértela (A)"
   },
   "line": {
    "ko": "옷으로 말을 거는 분. 조용히 시선을 모으는 방법입니다.",
    "en": "You talk through your clothes. A quiet way to draw eyes.",
    "zh": "你用衣服说话，这是悄悄吸引目光的方法。",
    "ja": "服で語りかける方。静かに視線を集める方法です。",
    "es": "Hablas con la ropa. Una forma discreta de atraer miradas."
   },
   "origName": "만화 프린트 티셔츠 A",
   "url": "https://temu.to/k/gtjzhdatng5",
   "urlByLang": {},
   "img": "assets/products/14.webp",
   "prior": 39.847,
   "shop": "temu"
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
    "es": "Un diminuto dios de la riqueza y una tetera vintage"
   },
   "line": {
    "ko": "복은 작은 곳에서부터 시작된다고 믿으시는군요.",
    "en": "You believe fortune starts in small places.",
    "zh": "你相信福气从小处开始。",
    "ja": "福は小さなところから始まると信じておられます。",
    "es": "Crees que la fortuna empieza en lo pequeño."
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
    "es": "Una camiseta de cómic que empieza una historia al ponértela (B)"
   },
   "line": {
    "ko": "같은 만화라도 조금 다른 쪽을 고르는 분이십니다.",
    "en": "Same cartoon, but you pick the slightly different side.",
    "zh": "同样是漫画，你偏爱稍微不同的那一边。",
    "ja": "同じマンガでも、少し違う側を選ぶ方です。",
    "es": "Mismo cómic, pero eliges el lado un poco distinto."
   },
   "origName": "만화 프린트 티셔츠 B",
   "url": "https://temu.to/k/gkap10ee4zg",
   "urlByLang": {},
   "img": "assets/products/16.webp",
   "prior": 39.847,
   "shop": "temu"
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
    "es": "Un gorro de chile para llevar la pasión en la cabeza"
   },
   "line": {
    "ko": "맵고 우스운 것을 두려워하지 않는 분입니다.",
    "en": "You're not afraid of things that are spicy and silly.",
    "zh": "你不怕又辣又好笑的东西。",
    "ja": "辛くて可笑しいものを恐れない方です。",
    "es": "No temes a lo picante y ridículo."
   },
   "origName": "고추 모자 코스튬",
   "url": "https://temu.to/k/g7jo7dkcw9x",
   "urlByLang": {},
   "img": "assets/products/17.webp",
   "prior": 5.166,
   "shop": "temu"
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
    "es": "Un molde de pastel con cara de mono"
   },
   "line": {
    "ko": "달콤한 것에도 표정은 필요하다고 생각하십니다.",
    "en": "Even sweet things need an expression, you think.",
    "zh": "你觉得连甜点也该有表情。",
    "ja": "甘いものにも表情は必要だとお考えです。",
    "es": "Piensas que hasta lo dulce necesita expresión."
   },
   "origName": "원숭이 얼굴 베이킹 몰드",
   "url": "https://temu.to/k/g2h9mdyj5jd",
   "urlByLang": {},
   "img": "assets/products/18.webp",
   "prior": 1.826,
   "shop": "temu"
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
    "es": "Una hamburguesa que gira en tu mano"
   },
   "line": {
    "ko": "먹지 못하는 햄버거에 위로받는 순간이 있습니다.",
    "en": "There are moments you take comfort in a burger you can't eat.",
    "zh": "有时候，不能吃的汉堡反而让你安心。",
    "ja": "食べられないハンバーガーに慰められる瞬間があります。",
    "es": "Hay momentos en que te consuela una hamburguesa que no puedes comer."
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
    "es": "Un perro al que se le ve todo por dentro"
   },
   "line": {
    "ko": "숨기는 것 없는 존재에게 끌리십니다.",
    "en": "You're drawn to beings with nothing to hide.",
    "zh": "你被毫无隐瞒的存在吸引。",
    "ja": "隠しごとのない存在に惹かれます。",
    "es": "Te atraen los seres que no esconden nada."
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
    "es": "Una rana dormilona que sostiene tus gafas"
   },
   "line": {
    "ko": "도움이 되면서도 졸린 존재. 당신의 이상형입니다.",
    "en": "Helpful and sleepy at once. Your ideal type.",
    "zh": "又能帮忙又爱犯困，是你的理想型。",
    "ja": "役に立ちながら眠そう。あなたの理想のタイプです。",
    "es": "Útil y somnolienta a la vez. Tu tipo ideal."
   },
   "origName": "졸린 개구리 안경 거치대",
   "url": "https://temu.to/k/g0nx61gojln",
   "urlByLang": {},
   "img": "assets/products/21.webp",
   "prior": 1.623,
   "shop": "temu"
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
    "es": "Una camiseta de cómic que empieza una historia al ponértela (C)"
   },
   "line": {
    "ko": "세 번째 만화를 고르는 분은 끝까지 가는 분입니다.",
    "en": "Whoever picks the third cartoon goes all the way.",
    "zh": "选第三件漫画T恤的人，会坚持到底。",
    "ja": "三つ目のマンガを選ぶ方は、最後まで行く方です。",
    "es": "Quien elige el tercer cómic llega hasta el final."
   },
   "origName": "만화 프린트 티셔츠 C",
   "url": "https://temu.to/k/gzhqgm69hk6",
   "urlByLang": {},
   "img": "assets/products/22.webp",
   "prior": 39.847,
   "shop": "temu"
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
    "es": "Doce meses de animales dándote la espalda"
   },
   "line": {
    "ko": "정면보다 뒷모습이 솔직하다는 것을 아십니다.",
    "en": "You know a back view is more honest than a front.",
    "zh": "你知道背影比正面更诚实。",
    "ja": "正面より後ろ姿のほうが正直だと、ご存じです。",
    "es": "Sabes que una espalda es más sincera que un rostro."
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
    "es": "Una diosa diminuta en la palma de tu mano"
   },
   "line": {
    "ko": "크기가 작다고 권위가 작은 것은 아닙니다.",
    "en": "Small size doesn't mean small authority.",
    "zh": "个头小，不代表威严小。",
    "ja": "小さいからといって、権威が小さいわけではありません。",
    "es": "Ser pequeña no significa tener poca autoridad."
   },
   "origName": "힐리아 여신 미니 조각상",
   "url": "https://temu.to/k/gnmkkgys7e6",
   "urlByLang": {},
   "img": "assets/products/24.webp",
   "prior": 0.711,
   "shop": "temu"
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
    "es": "Un gato mágico que tejes y crías tú mismo"
   },
   "line": {
    "ko": "키우는 데 시간이 드는 것에 마음을 쓰는 분이십니다.",
    "en": "You care about things that take time to grow.",
    "zh": "你在意那些需要时间养成的东西。",
    "ja": "育てるのに時間のかかるものを大切にする方です。",
    "es": "Te importan las cosas que tardan en crecer."
   },
   "origName": "마법 고양이 아미구루미 코바늘 키트",
   "url": "https://temu.to/k/g5jq5sn4e8d",
   "urlByLang": {},
   "img": "assets/products/25.webp",
   "prior": 1.362,
   "shop": "temu"
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
    "es": "Un caballero de traje amarillo cuya cara se da la vuelta"
   },
   "line": {
    "ko": "한 사람 안에 두 얼굴이 있다는 사실을 이미 알고 계십니다.",
    "en": "You already know there are two faces in one person.",
    "zh": "你早就知道一个人身上有两张脸。",
    "ja": "一人の中に二つの顔があることを、すでにご存じです。",
    "es": "Ya sabes que en una persona caben dos caras."
   },
   "origName": "노란 정장 남자 양면 레진 피규어",
   "url": "https://temu.to/k/gqouwvheybj",
   "urlByLang": {},
   "img": "assets/products/26.webp",
   "prior": 0.31,
   "shop": "temu"
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
    "es": "Dos ranas que guardan los tornillos del inodoro"
   },
   "line": {
    "ko": "아무도 보지 않는 곳에도 개구리를 두는 분입니다.",
    "en": "You put frogs even where no one looks.",
    "zh": "没人看的地方，你也放青蛙。",
    "ja": "誰も見ない場所にもカエルを置く方です。",
    "es": "Pones ranas incluso donde nadie mira."
   },
   "origName": "개구리 변기 볼트 캡 2개",
   "url": "https://temu.to/k/gqwp3largv7",
   "urlByLang": {},
   "img": "assets/products/27.webp",
   "prior": 1.184,
   "shop": "temu"
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
    "es": "Un molde para fijar una rana meditando en cera"
   },
   "line": {
    "ko": "고요함도 직접 만들 수 있다고 믿으십니다.",
    "en": "You believe you can make stillness yourself.",
    "zh": "你相信安静也可以亲手做出来。",
    "ja": "静けさも自分で作れると信じておられます。",
    "es": "Crees que la calma también se puede fabricar."
   },
   "origName": "명상 개구리 양초 몰드",
   "url": "https://temu.to/k/g2cyohbk0ph",
   "urlByLang": {},
   "img": "assets/products/28.webp",
   "prior": 3.326,
   "shop": "temu"
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
    "es": "Doce meses de obras que nunca terminan"
   },
   "line": {
    "ko": "끝나지 않는 일에서 이상한 안정감을 느끼십니다.",
    "en": "You find a strange calm in work that never ends.",
    "zh": "你在没有尽头的工作里感到奇怪的安定。",
    "ja": "終わらない仕事に、不思議な安心を覚える方です。",
    "es": "Sientes una extraña calma en el trabajo sin fin."
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
    "es": "Un cuadro sin marco que se adueña de la pared"
   },
   "line": {
    "ko": "경계 없이 걸리는 것을 좋아하십니다.",
    "en": "You like things that hang without borders.",
    "zh": "你喜欢没有边界的挂着。",
    "ja": "縁のない掛け方を好まれます。",
    "es": "Te gusta lo que cuelga sin bordes."
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
    "es": "Un silbato con un grito de 125 decibelios"
   },
   "line": {
    "ko": "조용한 얼굴 뒤에 소리 지르고 싶은 마음이 있으십니다.",
    "en": "Behind that calm face, you want to scream.",
    "zh": "安静的脸背后，其实想大叫。",
    "ja": "静かな顔の裏で、叫びたい気持ちがおありです。",
    "es": "Detrás de esa cara tranquila, quieres gritar."
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
    "es": "Una cerámica que grita mientras recibe incienso"
   },
   "line": {
    "ko": "평화와 비명을 한 자리에 두는 분. 균형 감각이 좋으십니다.",
    "en": "Peace and a scream in one place. You have a sense of balance.",
    "zh": "把平静和尖叫放在一起，你很会平衡。",
    "ja": "平和と悲鳴を同じ場所に置く方。バランス感覚が良いです。",
    "es": "Paz y grito en un mismo lugar. Tienes sentido del equilibrio."
   },
   "origName": "비명 얼굴 세라믹 향로",
   "url": "https://temu.to/k/gcazhxnrono",
   "urlByLang": {},
   "img": "assets/products/32.webp",
   "prior": 0.54,
   "shop": "temu"
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
    "es": "Un moái que se quedó dormido haciendo yoga"
   },
   "line": {
    "ko": "깨달음과 낮잠 사이 어딘가에 계신 분입니다.",
    "en": "You live somewhere between enlightenment and a nap.",
    "zh": "你生活在觉悟与午睡之间。",
    "ja": "悟りと昼寝のあいだにおられる方です。",
    "es": "Vives entre la iluminación y la siesta."
   },
   "origName": "잠자는 모아이 요가 장식",
   "url": "https://temu.to/k/ge39ju6kurr",
   "urlByLang": {},
   "img": "assets/products/33.webp",
   "prior": 0.738,
   "shop": "temu"
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
    "es": "Un intruso de ojos enormes sobre tu escritorio"
   },
   "line": {
    "ko": "불편한 것에도 정이 드는 분이십니다.",
    "en": "You grow fond of things that make others uneasy.",
    "zh": "连让人不舒服的东西你也会生出感情。",
    "ja": "不気味なものにも情が湧く方です。",
    "es": "Te encariñas con lo que incomoda a otros."
   },
   "origName": "큰 눈 기생충 데스크 피규어",
   "url": "https://temu.to/k/gq7n9uw3a2x",
   "urlByLang": {},
   "img": "assets/products/34.webp",
   "prior": 2.067,
   "shop": "temu"
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
    "es": "Un año de capibara en el que no pasa nada"
   },
   "line": {
    "ko": "평온함은 가장 큰 사치라고 생각하십니다.",
    "en": "You think calm is the greatest luxury.",
    "zh": "你觉得平静是最大的奢侈。",
    "ja": "穏やかさは最大の贅沢だとお考えです。",
    "es": "Crees que la calma es el mayor de los lujos."
   },
   "origName": "2027 카피바라 벽걸이 달력",
   "url": "https://temu.to/k/gehwn6mxg9w",
   "urlByLang": {},
   "img": "assets/products/35.webp",
   "prior": 0.805,
   "shop": "temu"
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
    "es": "Una mochila de cordón para planes improvisados"
   },
   "line": {
    "ko": "갑자기 떠나는 일을 아직 포기하지 않으셨습니다.",
    "en": "You haven't given up on leaving suddenly.",
    "zh": "你还没放弃突然出发这件事。",
    "ja": "突然出かけることを、まだ諦めておられません。",
    "es": "Aún no has renunciado a irte de repente."
   },
   "origName": "Sam Hyde 스타일 드로스트링 백팩",
   "url": "https://temu.to/k/gij3f5bglqh",
   "urlByLang": {},
   "img": "assets/products/36.webp",
   "prior": 5.749,
   "shop": "temu"
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
    "es": "Doce perros feos al estilo renacentista"
   },
   "line": {
    "ko": "못생김을 예술의 경지로 끌어올릴 줄 아십니다.",
    "en": "You can lift ugliness to the level of art.",
    "zh": "你能把丑提升到艺术的境界。",
    "ja": "不細工を芸術の域に高められる方です。",
    "es": "Sabes elevar la fealdad a arte."
   },
   "origName": "2027 못생긴 강아지 초상화 달력",
   "url": "https://temu.to/k/gxzwhzqge6w",
   "urlByLang": {},
   "img": "assets/products/37.webp",
   "prior": 2.673,
   "shop": "temu"
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
    "es": "Un cacahuete sonriente"
   },
   "line": {
    "ko": "작은 것이 웃고 있으면 이유를 묻지 않으십니다.",
    "en": "When something small smiles, you don't ask why.",
    "zh": "小东西在笑的时候，你不会追问原因。",
    "ja": "小さなものが笑っていれば、理由は問いません。",
    "es": "Cuando algo pequeño sonríe, no preguntas por qué."
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
    "es": "Un juego de apilar ranas hasta que se caigan"
   },
   "line": {
    "ko": "쌓는 것도, 무너지는 것도 즐기시는 분입니다.",
    "en": "You enjoy both the stacking and the collapse.",
    "zh": "叠起来和倒下来，你都享受。",
    "ja": "積むのも、崩れるのも楽しめる方です。",
    "es": "Disfrutas tanto apilando como derrumbando."
   },
   "origName": "개구리 균형 쌓기 게임",
   "url": "https://temu.to/k/gx6868s5vq1",
   "urlByLang": {},
   "img": "assets/products/39.webp",
   "prior": 0.424,
   "shop": "temu"
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
    "es": "Un laboratorio de sonido de guitarra en tu bolsillo"
   },
   "line": {
    "ko": "소리를 직접 만드는 일에 진지한 분이십니다.",
    "en": "You take making sound seriously.",
    "zh": "你对做出声音这件事很认真。",
    "ja": "音を作ることに真剣な方です。",
    "es": "Te tomas en serio crear sonidos."
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
    "es": "Un gatito de latón que reflexiona sobre la iluminación"
   },
   "line": {
    "ko": "작은 몸으로 큰 고민을 하는 존재에게 끌리십니다.",
    "en": "You're drawn to small bodies with big worries.",
    "zh": "你被身体小却烦恼大的存在吸引。",
    "ja": "小さな体で大きな悩みを抱える存在に惹かれます。",
    "es": "Te atraen los cuerpos pequeños con grandes preocupaciones."
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
    "es": "Una rana surrealista para abrazar"
   },
   "line": {
    "ko": "품에 안기는 것이 조금 이상해도 괜찮으십니다.",
    "en": "Being hugged is fine, even if a little strange.",
    "zh": "被抱着有点奇怪，你也无所谓。",
    "ja": "抱かれるのが少し変でも、平気な方です。",
    "es": "Que te abracen está bien, aunque sea un poco raro."
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
    "es": "Un silbato de barro rojo que sonríe con todos los dientes"
   },
   "line": {
    "ko": "무서운 얼굴이 사실은 웃고 있다는 것을 알아보시는 분이시군요.",
    "en": "You can tell that a scary face is actually smiling.",
    "zh": "你看得出，吓人的脸其实在笑。",
    "ja": "怖い顔が実は笑っていると気づける方ですね。",
    "es": "Sabes ver que una cara aterradora en realidad está sonriendo."
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
    "es": "Una muñeca vintage de algún lugar de Europa"
   },
   "line": {
    "ko": "오래된 것에 깃든 묘한 표정을 좋아하십니다.",
    "en": "You like the odd expression in old things.",
    "zh": "你喜欢旧东西里那种奇妙的表情。",
    "ja": "古いものに宿る不思議な表情がお好きです。",
    "es": "Te gusta la expresión extraña de las cosas antiguas."
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
    "es": "Un platito de rana que recibe tus anillos"
   },
   "line": {
    "ko": "소중한 것을 개구리에게 맡기는 분입니다.",
    "en": "You leave precious things in a frog's care.",
    "zh": "你把珍贵的东西交给青蛙保管。",
    "ja": "大切なものをカエルに預ける方です。",
    "es": "Dejas lo precioso al cuidado de una rana."
   },
   "origName": "개구리 3D프린팅 쥬얼리 트레이",
   "url": "https://temu.to/k/ggxw7a62i4m",
   "urlByLang": {},
   "img": "assets/products/45.webp",
   "prior": 0.848,
   "shop": "temu"
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
    "es": "Una rana verde que se traga llaves y monedas"
   },
   "line": {
    "ko": "잡동사니를 기꺼이 받아주는 존재에게 끌리십니다.",
    "en": "You're drawn to those who accept all your clutter.",
    "zh": "你被愿意接纳你所有杂物的存在吸引。",
    "ja": "がらくたを快く受け入れてくれる存在に惹かれます。",
    "es": "Te atraen quienes aceptan todo tu desorden."
   },
   "origName": "큰 입 초록 개구리 접시",
   "url": "https://temu.to/k/giylttelg0e",
   "urlByLang": {},
   "img": "assets/products/46.webp",
   "prior": 3.614,
   "shop": "temu"
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
    "es": "Una vaca de metal con pastillas y vitaminas"
   },
   "line": {
    "ko": "건강을 챙기는 일에도 유머는 필요합니다.",
    "en": "Even looking after your health needs humor.",
    "zh": "连照顾健康也需要幽默。",
    "ja": "健康管理にもユーモアは必要です。",
    "es": "Hasta cuidar la salud necesita humor."
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
    "es": "Un gato sincero hasta las vísceras"
   },
   "line": {
    "ko": "겉과 속이 같은 존재를 믿으십니다.",
    "en": "You trust beings whose outside matches the inside.",
    "zh": "你相信表里如一的存在。",
    "ja": "見た目と中身が同じ存在を信じておられます。",
    "es": "Confías en los seres cuyo exterior coincide con el interior."
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
    "es": "Un bigote que te cambia la vida"
   },
   "line": {
    "ko": "아직 한 번도 되어보지 못한 누군가가, 당신 안에 있습니다.",
    "en": "Someone you have never been yet is waiting inside you.",
    "zh": "你心里一直住着一个还没成为的人。",
    "ja": "まだなったことのない誰かが、あなたの中にいます。",
    "es": "Hay alguien que aún no has sido, esperando dentro de ti."
   },
   "origName": "8자 갈색 자체 접착 콧수염 소품",
   "url": "https://temu.to/k/ge09don4r55",
   "urlByLang": {},
   "img": "assets/products/49.webp",
   "prior": 0.587,
   "shop": "temu"
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
    "es": "Una caja vacía con algo flotando"
   },
   "line": {
    "ko": "눈에 보이는 것이 전부가 아니라는 말을 믿고 싶은 분이시군요.",
    "en": "You want to believe that what you see is not all there is.",
    "zh": "你是愿意相信眼见不为实的人。",
    "ja": "見えるものがすべてではないと、信じたい方ですね。",
    "es": "Quieres creer que lo que ves no es todo lo que hay."
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
    "es": "Un estruendo de cristales sin nada roto"
   },
   "line": {
    "ko": "조용한 방에 작은 소동을 심어두고 싶으십니까.",
    "en": "You would like to plant a small commotion in a quiet room.",
    "zh": "你想在安静的房间里埋下一点小骚动。",
    "ja": "静かな部屋に、小さな騒ぎを仕込んでおきたいのですね。",
    "es": "Quieres sembrar un pequeño alboroto en una sala tranquila."
   },
   "origName": "깨짐 소리 효과 장치 2개",
   "url": "https://temu.to/k/gbindt66qm5",
   "urlByLang": {},
   "img": "assets/products/51.webp",
   "prior": 0.686,
   "shop": "temu"
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
    "es": "Una espada mágica que no hiere a nadie"
   },
   "line": {
    "ko": "위험한 척은 하고 싶지만, 다치는 건 싫은 마음을 압니다.",
    "en": "You want to look dangerous without anyone getting hurt.",
    "zh": "想装作危险，却不想有人受伤，这种心情我懂。",
    "ja": "危なそうに見せたいけれど、誰も傷つけたくない気持ち、わかります。",
    "es": "Quieres parecer peligroso sin que nadie salga herido."
   },
   "origName": "텐요 마법 검",
   "url": "https://temu.to/k/gy31v71pqe7",
   "urlByLang": {},
   "img": "assets/products/52.webp",
   "prior": 1.001,
   "shop": "temu"
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
    "es": "Un kit de caballero de una época que nunca viviste"
   },
   "line": {
    "ko": "다른 시대의 누군가가 되어보는 것에 마음이 기웁니다.",
    "en": "Part of you leans toward becoming someone from another age.",
    "zh": "你的心有点倾向于变成另一个时代的人。",
    "ja": "別の時代の誰かになってみたい気持ちが、あなたにはあります。",
    "es": "Una parte de ti se inclina por ser alguien de otra época."
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
    "es": "Un set para adultos que se toman en serio lanzar pelotas rosas"
   },
   "line": {
    "ko": "이긴 사람이 없어도 즐거운 놀이를 오래 기억하고 계십니다.",
    "en": "You remember games that were fun even when nobody won.",
    "zh": "你还记得那些没人赢也很开心的游戏。",
    "ja": "勝者がいなくても楽しかった遊びを、覚えていらっしゃいますね。",
    "es": "Recuerdas juegos divertidos aunque nadie ganara."
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
    "cute",
    "funny_face",
    "statue"
   ],
   "name": {
    "ko": "주먹을 쥐고 폼을 잡는 아기 고양이",
    "en": "A Kitten Striking a Tough Pose",
    "zh": "摆出架势的小猫咪",
    "ja": "ファイティングポーズをとる子猫",
    "es": "Un gatito en pose de pelea"
   },
   "line": {
    "ko": "작고 순해 보이는데 속으로는 한가락 한다고 믿고 싶은 분이시군요.",
    "en": "You want to believe that something small and gentle-looking can still hold its own.",
    "zh": "你愿意相信，看起来小而温顺的存在，其实也有两下子。",
    "ja": "小さくて優しそうなのに、実は腕が立つと信じたい方ですね。",
    "es": "Quieres creer que algo pequeño y dulce también sabe defenderse."
   },
   "origName": "아기 고양이 포즈 피규어",
   "url": "https://temu.to/k/gludcc6fsk7",
   "urlByLang": {},
   "img": "assets/products/55.webp",
   "prior": 0.814,
   "shop": "temu"
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
    "es": "Una elegante pelota de golf que estalla al golpearla"
   },
   "line": {
    "ko": "점잖은 자리에서 한 번쯤 장난치고 싶은 마음을 잘 참아오셨습니다.",
    "en": "You have held back the urge to prank at proper gatherings for a long time.",
    "zh": "你在体面的场合忍了很久想恶作剧的冲动。",
    "ja": "お上品な場でいたずらしたい気持ちを、よく我慢されてきました。",
    "es": "Llevas mucho tiempo conteniendo las ganas de bromear en reuniones formales."
   },
   "origName": "장난용 폭발 골프공 3개",
   "url": "https://temu.to/k/ggid53p4h6x",
   "urlByLang": {},
   "img": "assets/products/56.webp",
   "prior": 0.146,
   "shop": "temu"
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
    "es": "Unas gafas que ponen el mundo del revés"
   },
   "line": {
    "ko": "한 번쯤은 세상이 뒤집혀도 괜찮겠다고 생각하셨군요.",
    "en": "You once thought it might be fine if the world flipped over.",
    "zh": "你曾想过，世界翻过来一次也无妨。",
    "ja": "一度くらい世界がひっくり返ってもいい、と思ったことがあるのですね。",
    "es": "Alguna vez pensaste que no estaría mal que el mundo se diera la vuelta."
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
    "es": "Un gato gordo y perezoso hecho mil pedazos"
   },
   "line": {
    "ko": "게으름도 때로는 끝까지 완성할 가치가 있다고 믿으십니다.",
    "en": "You believe even laziness is sometimes worth finishing.",
    "zh": "你相信偷懒有时也值得做到最后。",
    "ja": "怠けることも、ときには最後までやり遂げる価値があると信じていますね。",
    "es": "Crees que incluso la pereza a veces merece terminarse."
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
    "es": "Un traje de rana para el día que quieres descansar de ser humano"
   },
   "line": {
    "ko": "잠깐만 사람 노릇을 쉬고 싶은 마음을 이해합니다.",
    "en": "I understand wanting to pause being a person, just briefly.",
    "zh": "我理解你想暂时歇一歇做人的心情。",
    "ja": "少しだけ人間をお休みしたい気持ち、わかります。",
    "es": "Entiendo las ganas de dejar de ser persona, solo un momento."
   },
   "origName": "남성용 개구리 코스튬 점프수트",
   "url": "https://temu.to/k/gxw9wtqhdbz",
   "urlByLang": {},
   "img": "assets/products/59.webp",
   "prior": 0.201,
   "shop": "temu"
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
    "es": "Un gorro que estira tu cabeza hasta el espacio exterior"
   },
   "line": {
    "ko": "머리카락 없는 자신을 상상하고도 웃을 수 있는 분이시군요.",
    "en": "You can imagine yourself bald and still laugh about it.",
    "zh": "你是想象自己没头发也能笑出来的人。",
    "ja": "髪のない自分を想像しても笑える方ですね。",
    "es": "Puedes imaginarte sin pelo y aun así reírte."
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
    "es": "Un silbatito al que los pájaros responden"
   },
   "line": {
    "ko": "새와 이야기할 수 있다고 은근히 믿어오셨군요.",
    "en": "You have quietly believed you could talk to birds.",
    "zh": "你一直暗暗相信自己能和鸟说话。",
    "ja": "鳥と話せると、ひそかに信じてこられたのですね。",
    "es": "Has creído en silencio que podías hablar con los pájaros."
   },
   "origName": "매직 새소리 호루라기",
   "url": "https://temu.to/k/gonz508bf8l",
   "urlByLang": {},
   "img": "assets/products/61.webp",
   "prior": 1.508,
   "shop": "temu"
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
    "es": "Una criatura gris y otra aún más pequeña"
   },
   "line": {
    "ko": "정체 모를 존재를 일단 안아주는 분이시군요.",
    "en": "You are someone who hugs the unknown first.",
    "zh": "你是会先抱一抱来历不明的存在的人。",
    "ja": "正体不明の存在を、とりあえず抱きしめる方ですね。",
    "es": "Eres de los que abrazan primero a lo desconocido."
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
    "es": "Un gato esfinge que plantea un enigma y espera"
   },
   "line": {
    "ko": "대답 없이 기다려주는 존재에게 마음이 갑니다.",
    "en": "You are drawn to those who wait patiently without an answer.",
    "zh": "你会被不催促、只是等待的存在吸引。",
    "ja": "答えを急かさずに待ってくれる存在に、心が向きます。",
    "es": "Te atraen quienes esperan sin pedir respuesta."
   },
   "origName": "사실적인 스핑크스 고양이 조각상",
   "url": "https://temu.to/k/gl9sal8yrfy",
   "urlByLang": {},
   "img": "assets/products/63.webp",
   "prior": 0.535,
   "shop": "temu"
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
    "es": "Un caballero medieval que vigila tu escritorio en silencio"
   },
   "line": {
    "ko": "아무도 시키지 않았는데 지켜주는 존재에게 약하시군요.",
    "en": "You're weak for guardians nobody asked to guard.",
    "zh": "没人拜托，却默默守护你的存在，最让你心软。",
    "ja": "頼んでもいないのに守ってくれる存在に弱い方ですね。",
    "es": "Te ablandan quienes te protegen sin que nadie se lo pida."
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
    "es": "Un sello con tu nombre custodiado por una bestia tallada"
   },
   "line": {
    "ko": "이름 하나 찍는 일에도 의식을 치르고 싶은 분이시군요.",
    "en": "You like turning even stamping your name into a ritual.",
    "zh": "连盖个名字，你也想弄得像一场仪式。",
    "ja": "名前を押すだけでも儀式にしたい方ですね。",
    "es": "Quieres convertir hasta el gesto de sellar tu nombre en un ritual."
   },
   "origName": "쇼산석 맞춤 이름 인장 각인 스탬프",
   "url": "https://s.click.aliexpress.com/e/_c4kxBzBV",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/65.webp",
   "prior": 1.752
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
    "es": "Un casco de rostro demoníaco al que nadie parece poder vencer"
   },
   "line": {
    "ko": "무서운 얼굴 뒤에 숨어 있을 때 마음이 놓이는 분이시군요.",
    "en": "You feel safest hiding behind a frightening face.",
    "zh": "躲在可怕的面孔后面，你才觉得安心。",
    "ja": "怖い顔の後ろに隠れていると落ち着く方ですね。",
    "es": "Te sientes a salvo escondido tras una cara que asusta."
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
    "es": "Animales feos haciéndose selfies los doce meses"
   },
   "line": {
    "ko": "못생긴 얼굴이 매달 말을 걸어주길 바라는 분이시군요.",
    "en": "You want a funny face to greet you every month.",
    "zh": "你希望每个月都有一张丑萌的脸跟你打招呼。",
    "ja": "毎月、変な顔に話しかけてほしい方ですね。",
    "es": "Quieres que una cara graciosa te salude cada mes."
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
    "es": "Un murciélago de peluche que cuelga boca abajo con orgullo"
   },
   "line": {
    "ko": "세상을 뒤집어 보는 시간이 필요한 분이시군요.",
    "en": "You sometimes need time to see the world upside down.",
    "zh": "你偶尔需要把世界倒过来看一会儿。",
    "ja": "世界を逆さまに見る時間が必要な方ですね。",
    "es": "A veces necesitas ver el mundo del revés."
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
    "es": "Un cuenco de gato que gotea matcha como un moco"
   },
   "line": {
    "ko": "품위와 엉망 사이에서 편안해지는 분이시군요.",
    "en": "You relax somewhere between elegance and a mess.",
    "zh": "你在体面和狼狈之间反而最自在。",
    "ja": "上品さと散らかりの間で落ち着く方ですね。",
    "es": "Te sientes a gusto entre la elegancia y el desastre."
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
    "es": "Un hombre blandito muy digno con solo unos calzoncillos rojos"
   },
   "line": {
    "ko": "체면을 내려놓은 존재에게 은근히 위로받는 분이시군요.",
    "en": "You find quiet comfort in someone who dropped all pretense.",
    "zh": "你会从放下体面的存在身上悄悄获得安慰。",
    "ja": "体面を手放した存在に、ひそかに慰められる方ですね。",
    "es": "Te consuela en secreto quien ha soltado las apariencias."
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
    "es": "Un cangrejo que se arrastra sobre dedos humanos"
   },
   "line": {
    "ko": "징그러운 것에서 이상하게 안도하는 분이시군요.",
    "en": "Something about the creepy oddly reassures you.",
    "zh": "你会从毛骨悚然的东西里莫名获得安心。",
    "ja": "気味の悪いものに、なぜか安心する方ですね。",
    "es": "Lo repulsivo te tranquiliza de un modo extraño."
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
    "es": "Un silbato de calavera que hace girar todas las cabezas"
   },
   "line": {
    "ko": "사람들이 깜짝 놀라는 순간을 은근히 기다리는 분이시군요.",
    "en": "You quietly wait for the moment people jump.",
    "zh": "你悄悄期待着别人被吓一跳的那一刻。",
    "ja": "人が飛び上がる瞬間を、こっそり待っている方ですね。",
    "es": "Esperas en secreto el momento en que todos se sobresaltan."
   },
   "origName": "아즈텍 데스 휘슬 할로윈 소리 소품",
   "url": "https://s.click.aliexpress.com/e/_c31kiPtZ",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/72.webp",
   "prior": 5.058
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
    "es": "Una cara de celadón llena de granitos"
   },
   "line": {
    "ko": "완벽하지 않은 얼굴을 만지작거리며 마음을 푸는 분이시군요.",
    "en": "You loosen up by fiddling with an imperfect face.",
    "zh": "你会摆弄一张不完美的脸来放松心情。",
    "ja": "完璧でない顔をいじりながら心をほぐす方ですね。",
    "es": "Te relajas toqueteando una cara imperfecta."
   },
   "origName": "여드름 제거 장난감 스트레스 해소",
   "url": "https://s.click.aliexpress.com/e/_c3xQvf5v",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/73.webp",
   "prior": 0.289
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
    "es": "Una rana de celadón en oración esperando el té"
   },
   "line": {
    "ko": "서두르지 않는 존재 옆에서 숨이 쉬어지는 분이시군요.",
    "en": "You breathe easier next to someone in no hurry.",
    "zh": "待在不慌不忙的存在身边，你才呼吸得顺畅。",
    "ja": "急がない存在のそばで息ができる方ですね。",
    "es": "Respiras mejor junto a quien no tiene prisa."
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
    "es": "Una taza-cerebro para beberte los pensamientos"
   },
   "line": {
    "ko": "생각이 너무 많은 날을 유머로 넘기는 분이시군요.",
    "en": "You get through overthinking days with humor.",
    "zh": "你用幽默度过想太多的日子。",
    "ja": "考えすぎる日をユーモアで乗り越える方ですね。",
    "es": "Superas los días de darle demasiadas vueltas con humor."
   },
   "origName": "세라믹 공포 테마 머그컵",
   "url": "https://s.click.aliexpress.com/e/_c3uTCvCR",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/75.webp",
   "prior": 7.054
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
    "es": "Un felpudo con cara de pera que no cambia de gesto ni pisado"
   },
   "line": {
    "ko": "무표정한 얼굴 앞에서 오히려 웃음이 나는 분이시군요.",
    "en": "A deadpan face somehow makes you laugh.",
    "zh": "面对一张面无表情的脸，你反而想笑。",
    "ja": "無表情の顔の前で、むしろ笑ってしまう方ですね。",
    "es": "Una cara inexpresiva te da risa."
   },
   "origName": "이상한 배 모양 인간 얼굴 도어매트",
   "url": "https://s.click.aliexpress.com/e/_c3GFJfn9",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/76.webp",
   "prior": 3.123
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
    "es": "Un muñeco flexible con tu propia cara"
   },
   "line": {
    "ko": "나 자신을 장난감으로 만들 용기가 있는 분이시군요.",
    "en": "You have the nerve to turn yourself into a toy.",
    "zh": "你有把自己做成玩具的勇气。",
    "ja": "自分をおもちゃにできる勇気のある方ですね。",
    "es": "Tienes el valor de convertirte a ti mismo en juguete."
   },
   "origName": "구부릴 수 있는 봉제인형 맞춤 이미지 프린팅",
   "url": "https://s.click.aliexpress.com/e/_c3yZid5t",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/77.webp",
   "prior": 1.07
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
    "es": "Un llavero de marmota que se sostiene con dos dientes"
   },
   "line": {
    "ko": "허술해 보이는 존재의 필사적인 표정에 약한 분이시군요.",
    "en": "You're weak for the desperate face of something clumsy.",
    "zh": "你对笨拙小家伙拼命的表情毫无抵抗力。",
    "ja": "不器用な存在の必死な顔に弱い方ですね。",
    "es": "Te derrite la cara desesperada de algo torpe."
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
    "es": "Dos figuras tapándose la nariz"
   },
   "line": {
    "ko": "말하지 못한 불편함을 표정으로 나눠 갖고 싶은 분이시군요.",
    "en": "You'd like to share unspoken discomfort through a shared face.",
    "zh": "你想用表情分担那些没说出口的不舒服。",
    "ja": "言えない居心地の悪さを、表情で分かち合いたい方ですね。",
    "es": "Quieres compartir con un gesto la incomodidad que no dices."
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
    "es": "Cinco criaturas redondas salidas de las profundidades"
   },
   "line": {
    "ko": "처음 보는 생물에게 이름부터 붙여주는 분이시군요.",
    "en": "You name a creature the moment you meet it.",
    "zh": "第一次见到新生物，你就先给它起名字。",
    "ja": "初めて見る生き物に、まず名前をつける方ですね。",
    "es": "Le pones nombre a una criatura nada más verla."
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
    "es": "Un muñequito transparente y blandito"
   },
   "line": {
    "ko": "숨기는 것 없이 말랑한 존재에게 마음이 풀리는 분이시군요.",
    "en": "You soften around anything squishy and hiding nothing.",
    "zh": "面对毫无隐藏、软乎乎的存在，你的心就化了。",
    "ja": "隠し事のないぷにぷにした存在に、心がほどける方ですね。",
    "es": "Te ablandas ante lo mullido que no esconde nada."
   },
   "origName": "스퀴시 투명 젤리 스퀴즈 장난감",
   "url": "https://s.click.aliexpress.com/e/_c3T5b8dV",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/81.webp",
   "prior": 1.044
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
    "es": "Un plátano amarillo con un solo ojo"
   },
   "line": {
    "ko": "과일에게서 시선을 느끼는 것도 나쁘지 않은 분이시군요.",
    "en": "You don't mind being watched by your fruit.",
    "zh": "被水果盯着看，你也不觉得讨厌。",
    "ja": "果物に見つめられるのも悪くない方ですね。",
    "es": "No te molesta que te mire tu fruta."
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
    "es": "Una familia de anfibios verdes de ojos saltones"
   },
   "line": {
    "ko": "놀란 표정이 평소 얼굴인 존재에게 동질감을 느끼는 분이시군요.",
    "en": "You relate to anyone whose default face is surprise.",
    "zh": "你会对那些一脸惊讶就是日常的存在产生共鸣。",
    "ja": "驚いた顔が通常運転の存在に、親近感を覚える方ですね。",
    "es": "Te sientes identificado con quien tiene cara de sorpresa permanente."
   },
   "origName": "만화 캐릭터 양서류 화분 창의적인 동물 조형물",
   "url": "https://s.click.aliexpress.com/e/_c3ldfexD",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/83.webp",
   "prior": 1.01
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
    "es": "Sesenta y cuatro pegatinas raras como escenas de un sueño"
   },
   "line": {
    "ko": "어디서 본 건지 모를 풍경에 이끌리는 분이시군요.",
    "en": "You're drawn to places you can't remember seeing.",
    "zh": "你被说不清在哪见过的风景吸引。",
    "ja": "どこで見たか分からない風景に惹かれる方ですね。",
    "es": "Te atraen paisajes que no recuerdas haber visto."
   },
   "origName": "드림코어 스타일 SF 아트 스티커 세트 64개",
   "url": "https://s.click.aliexpress.com/e/_c38mAZ6T",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/84.webp",
   "prior": 7.445
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
    "es": "Un monstruo de tentáculos abrazando su maceta"
   },
   "line": {
    "ko": "초록 식물 옆에서도 서늘한 분위기를 놓지 않는 분이시군요.",
    "en": "Even next to greenery, you keep a little chill.",
    "zh": "即便在绿植旁边，你也保留着一丝凉意。",
    "ja": "緑の植物の隣でも、ひんやりした気配を手放さない方ですね。",
    "es": "Hasta junto a las plantas conservas un aire sombrío."
   },
   "origName": "괴물 문어 촉수 레진 화분",
   "url": "https://s.click.aliexpress.com/e/_c3i07HB5",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/85.webp",
   "prior": 0.71
  },
  {
   "id": 86,
   "tags": [
    "funny_face",
    "human",
    "living",
    "tiny",
    "cute",
    "decor",
    "ceramic"
   ],
   "name": {
    "ko": "찻잔 가장자리에서 표정을 짓는 못생긴 얼굴",
    "en": "An Ugly-Cute Face Pulling Expressions on a Teacup Rim",
    "zh": "挂在茶杯边上做表情的丑萌脑袋",
    "ja": "湯のみのふちで表情を作る不細工かわいい顔",
    "es": "Una carita fea y graciosa en el borde de la taza"
   },
   "line": {
    "ko": "소소한 일상에 이상한 표정 하나를 걸쳐두고 싶은 분이시군요.",
    "en": "You like perching one odd expression on everyday life.",
    "zh": "你想在平凡日常里挂上一个奇怪的表情。",
    "ja": "ささやかな日常に変な表情を一つ添えたい方ですね。",
    "es": "Te gusta colgar una expresión rara en lo cotidiano."
   },
   "origName": "찻잔 장식용 못생긴 듯 귀여운 인간 머리 조각상",
   "url": "https://s.click.aliexpress.com/e/_c2zmAzjV",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "",
   "prior": 0.183
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
    "es": "Un Buda de peluche gris con la iluminación en la barriga"
   },
   "line": {
    "ko": "큰 배처럼 너그러운 존재에게 안기고 싶은 분이시군요.",
    "en": "You want to lean on someone generous as a big belly.",
    "zh": "你想靠在像大肚子一样宽厚的存在身上。",
    "ja": "大きなお腹のように寛大な存在に寄りかかりたい方ですね。",
    "es": "Quieres apoyarte en alguien tan generoso como una gran barriga."
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
    "es": "Un pez abisal que entendió el mundo con la boca caída"
   },
   "line": {
    "ko": "처진 표정에서 오히려 위안을 얻는 분이시군요.",
    "en": "A drooping face is oddly comforting to you.",
    "zh": "你反而从垮着的表情里获得安慰。",
    "ja": "垂れた表情に、かえって慰められる方ですね。",
    "es": "Una cara caída te consuela, curiosamente."
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
    "es": "Un cojín-resalto de velocidad sobre tu cama"
   },
   "line": {
    "ko": "일상의 과속을 장난으로 멈춰 세우고 싶은 분이시군요.",
    "en": "You want to slow down daily life with a prank.",
    "zh": "你想用恶作剧让日常的急速慢下来。",
    "ja": "日常の速度超過を、いたずらで止めたい方ですね。",
    "es": "Quieres frenar la prisa diaria con una broma."
   },
   "origName": "속도 감속 장치 모양 장난용 베개",
   "url": "https://s.click.aliexpress.com/e/_c3r0CSrD",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/89.webp",
   "prior": 2.694
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
    "es": "Una pelota-cerebro que suelta ideas cuanto más la aprietas"
   },
   "line": {
    "ko": "머리가 복잡한 날 손부터 바빠지는 분이시군요.",
    "en": "When your head is busy, your hands get busy too.",
    "zh": "脑子乱的日子，你的手先忙起来。",
    "ja": "頭が複雑な日は、まず手が忙しくなる方ですね。",
    "es": "Cuando tu cabeza está liada, tus manos se ponen a trabajar."
   },
   "origName": "부드러운 고무 뇌 모양 스트레스볼",
   "url": "https://s.click.aliexpress.com/e/_c3IoSQlH",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/90.webp",
   "prior": 1.969
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
    "es": "Un pájaro que bebe agua inclinándose eternamente"
   },
   "line": {
    "ko": "같은 행동을 끝없이 지켜보는 시간이 편한 분이시군요.",
    "en": "You find watching one motion on repeat restful.",
    "zh": "你觉得盯着同一个动作看个没完很舒服。",
    "ja": "同じ動きをずっと眺める時間が心地よい方ですね。",
    "es": "Mirar un mismo movimiento sin fin te resulta relajante."
   },
   "origName": "음주하는 새 무지개 깜빡이는 유리잔 행운의 새",
   "url": "https://s.click.aliexpress.com/e/_c3y7uzJl",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/91.webp",
   "prior": 3.932
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
    "es": "Un ojo que sujeta tus clips y te mira"
   },
   "line": {
    "ko": "누군가 지켜보는 듯한 기분이 은근히 든든한 분이시군요.",
    "en": "Being quietly watched oddly reassures you.",
    "zh": "被人默默注视的感觉，对你来说居然有点踏实。",
    "ja": "誰かに見守られている感じが、なぜか心強い方ですね。",
    "es": "Que te vigilen en silencio te da una extraña tranquilidad."
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
    "es": "Un mini médico en espera con el estetoscopio al cuello"
   },
   "line": {
    "ko": "누군가 괜찮냐고 물어봐 주길 기다리는 분이시군요.",
    "en": "You're waiting for someone to ask if you're okay.",
    "zh": "你在等一个人问你一句“还好吗”。",
    "ja": "誰かに「大丈夫？」と聞いてほしい方ですね。",
    "es": "Esperas a que alguien te pregunte si estás bien."
   },
   "origName": "재미있는 의사/간호사 피규어 청진기",
   "url": "https://s.click.aliexpress.com/e/_c3HOa1f9",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/93.webp",
   "prior": 0.828
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
    "es": "Un electricista con taladro y bombilla"
   },
   "line": {
    "ko": "맡기면 해결해줄 것 같은 존재가 곁에 있길 바라는 분이시군요.",
    "en": "You like having someone who'd fix things standing nearby.",
    "zh": "你希望身边有个“交给他就行”的存在。",
    "ja": "任せれば何とかしてくれそうな存在がそばにほしい方ですね。",
    "es": "Te gusta tener cerca a alguien que lo arregle todo."
   },
   "origName": "재미있는 전기 기술자 피규어 드릴 전구",
   "url": "https://s.click.aliexpress.com/e/_c37KCyAn",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/94.webp",
   "prior": 0.35
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
    "es": "Un payaso de porcelana que no puede dejar de reír"
   },
   "line": {
    "ko": "웃는 얼굴 뒤가 궁금해지는 분이시군요.",
    "en": "You wonder what's behind a laughing face.",
    "zh": "你总会好奇笑脸背后是什么。",
    "ja": "笑顔の裏が気になってしまう方ですね。",
    "es": "Te intriga lo que hay detrás de una cara sonriente."
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
    "es": "Un Papá Noel travieso que se ilumina"
   },
   "line": {
    "ko": "계절이 지나도 장난기를 간직하는 분이시군요.",
    "en": "You keep your playfulness long after the season ends.",
    "zh": "节日过了，你依然留着那份顽皮。",
    "ja": "季節が過ぎても遊び心を手放さない方ですね。",
    "es": "Conservas la picardía mucho después de la temporada."
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
    "es": "Una mini calavera instalada en tu escritorio"
   },
   "line": {
    "ko": "죽음도 귀엽게 소화해내는 분이시군요.",
    "en": "You can make even mortality look a bit cute.",
    "zh": "你连死亡都能消化得有点可爱。",
    "ja": "死さえもかわいく受け止められる方ですね。",
    "es": "Hasta la muerte te parece un poco adorable."
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
    "es": "Una rana de latón haciendo yoga"
   },
   "line": {
    "ko": "굳어도 평온한 존재를 곁에 두고 싶은 분이시군요.",
    "en": "You'd like something calm, even when set in metal, near you.",
    "zh": "你想把那个就算凝固成金属也依然平静的存在放在身边。",
    "ja": "金属になっても穏やかな存在をそばに置きたい方ですね。",
    "es": "Quieres cerca algo que sigue en calma aun hecho de metal."
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
    "es": "Un extraterrestre que perdonó a la Tierra con una cerveza"
   },
   "line": {
    "ko": "퇴근길 한 잔에 모든 걸 용서하는 분이시군요.",
    "en": "One drink after work forgives everything for you.",
    "zh": "下班后一杯酒，你就能原谅一切。",
    "ja": "仕事帰りの一杯で、すべてを許せる方ですね。",
    "es": "Una copa tras el trabajo te hace perdonarlo todo."
   },
   "origName": "독특한 외계인 맥주 마시는 레진 피규어",
   "url": "https://s.click.aliexpress.com/e/_c31jtKOf",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/99.webp",
   "prior": 0.58
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
    "es": "Un pensador sobre el inodoro meditando sobre la humanidad"
   },
   "line": {
    "ko": "가장 편한 자리에서 가장 깊게 생각하는 분이시군요.",
    "en": "You think deepest in the most comfortable spot.",
    "zh": "你在最舒服的地方想得最深。",
    "ja": "いちばん楽な場所で、いちばん深く考える方ですね。",
    "es": "Piensas más hondo en el lugar más cómodo."
   },
   "origName": "변기상의 사색하는 인물 조각상",
   "url": "https://s.click.aliexpress.com/e/_c4qXnexD",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/100.webp",
   "prior": 1.206
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
    "es": "Un laberinto eléctrico que da calambre al tocar"
   },
   "line": {
    "ko": "살짝 아플 줄 알면서도 도전하는 분이시군요.",
    "en": "You take the challenge even knowing it'll sting a bit.",
    "zh": "明知会有点疼，你还是会去挑战。",
    "ja": "少し痛いと分かっていても挑戦する方ですね。",
    "es": "Aceptas el reto aunque sepas que picará un poco."
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
    "es": "Un pez de madera que corta las preocupaciones con un clic"
   },
   "line": {
    "ko": "작은 소리 하나로 마음을 비우는 분이시군요.",
    "en": "One small sound can empty your mind.",
    "zh": "一个小小的声音就能让你放空心思。",
    "ja": "小さな音一つで心を空にできる方ですね。",
    "es": "Un solo sonido pequeño te vacía la mente."
   },
   "origName": "스트레스 해소 나무 물고기 키링 키캡 클릭커",
   "url": "https://s.click.aliexpress.com/e/_c4t4QAeB",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/102.webp",
   "prior": 1.909
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
    "es": "Un cenicero moai con los brazos cruzados y un cigarrillo"
   },
   "line": {
    "ko": "쉬어가는 시간에 혼자 팔짱 끼고 서 있고 싶은 분이시군요.",
    "en": "You like standing alone with your arms crossed during a break.",
    "zh": "休息时，你喜欢一个人抱着胳膊站着。",
    "ja": "休憩時間に、一人で腕を組んで立っていたい方ですね。",
    "es": "En los descansos te gusta quedarte solo con los brazos cruzados."
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
    "es": "Un pato nadando tranquilo con el dedo medio en alto"
   },
   "line": {
    "ko": "하고 싶은 말을 대신 해주는 존재가 반가운 분이시군요.",
    "en": "You're glad when something says what you can't.",
    "zh": "有谁替你说出想说的话，你会很高兴。",
    "ja": "言いたいことを代わりに言ってくれる存在が嬉しい方ですね。",
    "es": "Te alegra que algo diga lo que tú no puedes."
   },
   "origName": "중간 손가락 장식이 있는 오리 장식품",
   "url": "https://s.click.aliexpress.com/e/_c2zrSIg7",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/104.webp",
   "prior": 0.262
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
    "es": "Un gnomo mago que echa humo mientras guarda el jardín"
   },
   "line": {
    "ko": "느긋한 존재가 정원에 있으면 마음이 편해지는 분이시군요.",
    "en": "You feel at ease when something laid-back guards the garden.",
    "zh": "花园里有个悠闲的家伙，你就觉得安心。",
    "ja": "のんびりした存在が庭にいると、心が落ち着く方ですね。",
    "es": "Te tranquiliza que algo relajado vigile el jardín."
   },
   "origName": "재미있는 흡연 난쟁이 정원 조각 장식품",
   "url": "https://s.click.aliexpress.com/e/_c45wwZJz",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/105.webp",
   "prior": 0.601
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
    "es": "Un juguete de burbujas con forma de cajetilla que se revienta de a uno"
   },
   "line": {
    "ko": "손에 쥘 것이 필요한 순간을 안전하게 넘기는 분이시군요.",
    "en": "You get through restless moments with something harmless in your hand.",
    "zh": "手上需要有点东西的时候，你会用无害的方式度过。",
    "ja": "手持ち無沙汰な時間を、害のないもので乗り切る方ですね。",
    "es": "Superas los momentos de inquietud con algo inofensivo entre las manos."
   },
   "origName": "담배갑 버블 장난감 스트레스 해소",
   "url": "https://s.click.aliexpress.com/e/_c3UYOlrl",
   "shop": "aliexpress",
   "urlByLang": {},
   "img": "assets/products/106.webp",
   "prior": 0.841
  }
 ],
 "languageNames": {
  "ko": "한국어",
  "zh": "中文",
  "en": "English",
  "ja": "日本語",
  "es": "Español"
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
    "ko": "소소한 장난꾼",
    "en": "a small-time troublemaker",
    "zh": "小小的捣蛋鬼",
    "ja": "ささやかないたずら者",
    "es": "un pequeño bromista"
   },
   "inf": {
    "ko": "당신은 세상을 너무 진지하게만 보면 숨이 막힌다는 것을 본능으로 압니다. 분위기가 무거워지면 가장 먼저 그것을 감지하고, 말 한마디나 표정 하나로 공기를 풀어버립니다. 사람들은 이를 가벼움이라 부르지만, 사실은 상당한 눈치와 배려가 필요한 기술입니다.\n그래서 곁에 있으면 편안한 사람, 모임에 한 명쯤 있어야 하는 사람으로 통합니다. 반면 정작 본인이 힘들 때는 농담으로 넘겨버리는 버릇이 있어서, 진짜 속마음은 아무도 모르는 경우가 많습니다. 웃기는 사람이 늘 괜찮은 것은 아닙니다.\n마음속으로 가장 바라는 것은 장난을 쳐도 미움받지 않는 안전한 자리, 그리고 같이 웃어줄 단 한 사람입니다.",
    "en": "You sense, almost by instinct, that taking the world too seriously makes it hard to breathe. When a room grows heavy, you are the first to feel it, and a single remark or expression is enough to let the air out. People call this lightness, but it takes real tact and care.\nThat is why you are someone people relax around, the one a group seems to need. The catch is that when you are the one struggling, you tend to joke it away, so few people ever see what you actually feel. The funny one is not always the one who is fine.\nWhat you want most, deep down, is a safe place where you can be mischievous without being disliked, and one person who will laugh along.",
    "zh": "你几乎是出于本能地知道，把世界看得太严肃会让人喘不过气。气氛一变沉重，你总是第一个察觉，一句话、一个表情就能把空气放松下来。别人叫它轻松，其实这需要相当的眼力和体贴。\n所以你是那种让人安心的人，是聚会里总该有一个的人。不过，轮到自己难受时，你习惯用玩笑带过，真正的心事往往没人知道。爱逗人笑的人，并不总是没事。\n你心底最想要的，是一个可以淘气却不会被讨厌的安全位置，以及一个愿意陪你一起笑的人。",
    "ja": "あなたは、世界をまじめに見すぎると息が詰まることを、ほとんど本能で知っています。場が重くなるといち早く気づき、一言や表情ひとつで空気をほぐしてしまいます。人はそれを軽さと呼びますが、実はかなりの気配りと思いやりが要る技です。\nだから、そばにいると安心する人、集まりに一人はいてほしい人として扱われます。一方で、自分がつらいときは冗談で流す癖があり、本当の気持ちは誰にも知られないことが多いのです。笑わせる人がいつも大丈夫とは限りません。\n心の奥で一番望んでいるのは、いたずらをしても嫌われない安全な場所と、一緒に笑ってくれるたった一人です。",
    "es": "Sabes, casi por instinto, que tomarse el mundo demasiado en serio quita el aire. Cuando una sala se pone pesada, eres el primero en notarlo, y basta una frase o un gesto para aligerar el ambiente. La gente lo llama ligereza, pero requiere mucho tacto y cuidado.\nPor eso eres alguien con quien se está a gusto, el que a un grupo le hace falta. El problema es que, cuando eres tú quien lo pasa mal, tiendes a quitarle hierro con una broma, y casi nadie llega a ver lo que sientes de verdad. El gracioso no siempre está bien.\nLo que más deseas en el fondo es un lugar seguro donde ser travieso sin que te rechacen, y una sola persona que se ría contigo."
   },
   "opp": "calm",
   "match": "human",
   "rarity": 4.3,
   "need": "laugh"
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
    "ko": "허술함 애호가",
    "en": "a connoisseur of the slightly off",
    "zh": "破绽爱好者",
    "ja": "ゆるさの愛好家",
    "es": "un amante de lo imperfecto"
   },
   "inf": {
    "ko": "당신은 완벽한 것보다 허술한 것에서 더 큰 위안을 받습니다. 매끈하게 잘 만든 물건 앞에서는 어쩐지 긴장하고, 어딘가 빠져 보이는 표정 앞에서는 마음이 놓입니다. 이는 자신에게도 같은 관대함을 허락하고 싶은 마음의 반영입니다.\n사람을 볼 때도 비슷합니다. 잘난 척하지 않는 사람, 실수를 웃어넘기는 사람에게 정을 느끼고, 그런 이들과 오래 갑니다. 타인의 모자란 구석을 흠이 아니라 매력으로 읽는 눈은 흔치 않은 재능입니다.\n다만 스스로에게는 의외로 엄격할 때가 있습니다. 남의 허술함은 귀엽게 보면서 자신의 허술함은 용서하지 못하는 모순이 남몰래 있습니다.",
    "en": "You find more comfort in the imperfect than in the polished. Sleek, flawless things make you faintly tense, while a face that looks slightly unfinished puts you at ease. It reflects a wish to be allowed the same leniency yourself.\nPeople work the same way for you. You warm to those who do not show off and who laugh at their own slips, and you keep those friends for a long time. Reading someone's shortcomings as charm instead of flaws is a rare talent.\nYet with yourself you can be surprisingly strict. You find other people's clumsiness endearing while quietly refusing to forgive your own, and that contradiction is worth noticing.",
    "zh": "比起完美，你在不完美的东西里更容易得到安慰。过于光滑精致的东西让你隐约紧张，而看上去有点欠缺的表情却让你放下心来。这反映出你也想对自己同样宽容。\n看人也是这样。你对不炫耀、能笑着面对自己失误的人产生感情，并和他们长久相处。把别人的不足读成魅力而不是缺点，是难得的才能。\n只是对自己，你有时出奇地严格。你觉得别人的笨拙可爱，却不肯原谅自己的笨拙，这个矛盾悄悄存在着。",
    "ja": "あなたは完璧なものより、不完全なものに慰められます。つるんと整ったものの前では少し緊張し、どこか抜けた表情の前ではほっとします。それは、自分にも同じ寛容さを許したいという気持ちの表れです。\n人を見るときも同じです。見栄を張らない人、失敗を笑い飛ばせる人に情が移り、そういう人と長く付き合います。他人の欠点を欠点ではなく魅力として読める目は、めずらしい才能です。\nただ、自分には意外と厳しいことがあります。他人のぎこちなさはかわいいのに、自分のぎこちなさは許せないという矛盾が、ひそかに潜んでいます。",
    "es": "Encuentras más consuelo en lo imperfecto que en lo pulido. Las cosas lisas y perfectas te tensan un poco, mientras que una cara algo despistada te tranquiliza. Refleja las ganas de concederte a ti mismo la misma indulgencia.\nCon las personas es igual. Te encariñas con quien no presume y se ríe de sus tropiezos, y conservas a esos amigos mucho tiempo. Leer los defectos ajenos como encanto, y no como falla, es un talento raro.\nEso sí, contigo mismo a veces eres sorprendentemente estricto. La torpeza ajena te enternece, pero la tuya no te la perdonas, y esa contradicción convive en silencio."
   },
   "opp": "useful",
   "match": "craft",
   "rarity": 0.7,
   "need": "welcome"
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
    "es": "un aspirante a vidas de prueba"
   },
   "inf": {
    "ko": "당신의 머릿속에는 지금의 나 말고도 여러 명의 내가 대기하고 있습니다. 다른 직업, 다른 말투, 다른 도시에서 사는 나를 상상하는 일이 즐거운 사람입니다. 호기심이 많고 상상력이 풍부하며, 한 가지 모습으로 고정되는 것을 은근히 답답해합니다.\n이 성향은 새로운 환경에 적응하는 속도로 나타납니다. 처음 보는 자리에서도 그 자리에 맞는 사람이 되는 데 능숙합니다. 대신 어느 쪽이 진짜 나인지 문득 헷갈리는 순간이 오기도 합니다. 정체성을 찾는 일은 평생의 숙제처럼 따라다닙니다.\n마음 깊은 곳에서는 평가받지 않고 아무 역할이나 마음껏 해볼 수 있는 무대를 원합니다. 단 하루라도 좋으니 말입니다.",
    "en": "Several versions of you are waiting offstage. You enjoy imagining a different job, a different way of speaking, a different city. You are curious and imaginative, and being fixed into a single shape feels faintly stifling.\nThis shows in how quickly you adapt. In an unfamiliar room you can become the person the room needs. The price is that now and then you wonder which version is the real one. Identity stays a lifelong homework assignment.\nDeep down, you want a stage where nobody is judging and you may try any role you like, even for a single day.",
    "zh": "你的脑海里有好几个“我”在待命。想象自己做另一份工作、换一种说话方式、住在另一座城市，对你来说很有乐趣。你好奇、想象力丰富，被固定成一种样子会让你隐隐觉得闷。\n这体现在你的适应速度上。到了陌生场合，你也能成为那里需要的人。代价是偶尔会恍惚：哪一个才是真正的我？寻找自我像是一辈子的功课。\n内心深处，你想要一个无人评判的舞台，哪怕只有一天，也能随心尝试任何角色。",
    "ja": "あなたの頭の中には、今の自分のほかに何人もの自分が待機しています。別の仕事、別の話し方、別の街で暮らす自分を想像するのが楽しい人です。好奇心が強く想像力も豊かで、一つの姿に固定されるのが少し息苦しく感じられます。\nこの性質は、環境に適応する速さに表れます。初めての場でも、その場に合う人になれます。そのかわり、どれが本当の自分なのか、ふと分からなくなる瞬間があります。自分探しは一生の宿題のようについてきます。\n心の奥では、評価されずにどんな役でも思い切り試せる舞台を望んでいます。たった一日でもいいのです。",
    "es": "Dentro de ti esperan varias versiones tuyas. Te divierte imaginar otro trabajo, otra forma de hablar, otra ciudad. Eres curioso e imaginativo, y quedar fijado en una sola forma te agobia un poco.\nSe nota en lo rápido que te adaptas. En un lugar desconocido puedes ser la persona que ese lugar necesita. El precio es que a veces te preguntas cuál es la versión real. Encontrar la identidad es una tarea de toda la vida.\nEn el fondo quieres un escenario donde nadie te juzgue y puedas probar cualquier papel, aunque sea un solo día."
   },
   "opp": "wall",
   "match": "magic",
   "rarity": 9.1,
   "need": "role"
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
    "ko": "경이로움 수집가",
    "en": "a collector of wonder",
    "zh": "惊奇收藏家",
    "ja": "驚きのコレクター",
    "es": "un coleccionista de maravillas"
   },
   "inf": {
    "ko": "당신은 세상에 설명되지 않는 구석이 남아 있기를 은근히 바랍니다. 모든 것이 데이터와 이유로 풀리는 세상이 조금 심심하고, 우연히 맞아떨어지는 순간이나 이상하게 좋은 예감을 가볍게 넘기지 않습니다. 현실감각이 없는 것이 아니라, 경이로움을 느낄 줄 아는 감각을 지키고 있는 것입니다.\n그래서 감수성이 섬세하고 분위기의 변화를 잘 읽습니다. 같은 장소에서도 남들이 못 보는 것을 보는 편이며, 그 덕에 창의적인 발상이 자주 나옵니다. 다만 기대가 큰 만큼 현실이 시시할 때 실망도 깊은 편입니다.\n속마음은 평범한 일상 속에서도 작은 기적 하나쯤은 일어날 수 있다고 믿고 싶어 합니다. 그 믿음은 약점이 아니라 당신의 가장 좋은 동력입니다.",
    "en": "You quietly hope that some corners of the world stay unexplained. A life where everything resolves into data and reasons feels a little dull, and you do not wave away a lucky coincidence or an oddly good feeling. This is not a lack of realism. It is a sense of wonder you have chosen to protect.\nThat makes you sensitive and quick to read shifts in atmosphere. You often see in a place what others miss, which feeds your creativity. The flip side is that the higher your hopes, the deeper the disappointment when reality turns out ordinary.\nInside, you want to believe a small miracle can still happen on an ordinary day. That belief is not your weakness. It is your best fuel.",
    "zh": "你暗暗希望世界上还留着一些无法解释的角落。一个凡事都能用数据和理由说通的世界让你觉得有点无聊，碰巧的吻合或莫名的好预感，你不会轻易略过。这不是缺乏现实感，而是你守护着惊叹的能力。\n因此你感受细腻，善于读出氛围的变化。同一个地方，你常看到别人看不到的东西，创意也因此不断。不过期待越高，现实平淡时的失落也越深。\n你内心想相信，平凡的日子里也可能发生一个小小的奇迹。这份信念不是你的弱点，而是你最好的动力。",
    "ja": "あなたは、世界に説明のつかない隅っこが残っていてほしいと、ひそかに願っています。すべてがデータと理由で解ける世の中は少し退屈で、偶然の一致や理由のない良い予感を軽く流しません。現実感がないのではなく、驚きを感じる感覚を守っているのです。\nそのため感受性が繊細で、雰囲気の変化をよく読みます。同じ場所でも他の人が見ないものを見て、独創的な発想がよく出ます。ただ、期待が大きい分、現実が平凡なときの落胆も深くなりがちです。\n心の奥では、何でもない日常にも小さな奇跡がひとつくらい起こると信じたいのです。その信念は弱点ではなく、あなたの一番の原動力です。",
    "es": "En secreto esperas que el mundo conserve rincones sin explicar. Una vida donde todo se resuelve con datos y razones te parece algo aburrida, y no pasas por alto una coincidencia afortunada o una corazonada extrañamente buena. No te falta realismo: proteges tu capacidad de asombro.\nEso te hace sensible y buen lector de los cambios de ambiente. En el mismo sitio ves lo que otros no ven, y de ahí salen ideas creativas. La otra cara es que, cuanto mayor la esperanza, más profunda la decepción cuando la realidad resulta corriente.\nPor dentro quieres creer que un pequeño milagro todavía puede ocurrir en un día cualquiera. Esa creencia no es tu debilidad, sino tu mejor combustible."
   },
   "opp": "useful",
   "match": "costume",
   "rarity": 5.2,
   "need": "wonder"
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
    "ko": "무서운 것을 못 끊는 사람",
    "en": "someone who can't quit scary things",
    "zh": "戒不掉恐怖的人",
    "ja": "怖いものがやめられない人",
    "es": "alguien que no puede dejar lo aterrador"
   },
   "inf": {
    "ko": "당신은 불편한 것에서 눈을 돌리기보다 한 번 더 들여다보는 쪽입니다. 무섭거나 기괴한 것 앞에서 겁먹으면서도 이상하게 끌리는 것은, 두려움을 안전한 거리에서 다뤄보고 싶은 호기심과 용기가 섞여 있기 때문입니다.\n성격은 의외로 차분하고 관찰력이 좋습니다. 감정이 큰 일이 생겨도 겉으로는 담담하지만, 속에서는 모든 것을 꼼꼼히 곱씹는 타입입니다. 사람에 대해서도 겉모습보다 어두운 이면과 사연에 관심이 갑니다. 그래서 깊은 대화를 나누기에 믿을 만한 상대입니다.\n마음속 욕구는 평소 숨겨둔 자신의 그늘까지 이해받고 싶다는 것입니다. 착한 모습만이 아니라 조금 기묘한 구석도 받아들여 주는 사람을 오랫동안 기다려 왔습니다.",
    "en": "When something unsettling appears, you look at it again instead of looking away. Being frightened and drawn in at once means curiosity and courage are mixed together: you want to handle fear at a safe distance.\nYour temperament is calmer and more observant than people expect. Even when something big happens you stay composed on the outside, while inside you go over every detail. You are interested in the shadowed side of people and their backstories, which makes you someone trusted with deep conversation.\nWhat you long for is to be understood, shadows included. You have waited a long time for someone who accepts the slightly strange parts of you, not only the kind ones.",
    "zh": "遇到令人不安的东西，你不是移开视线，而是再看一眼。又害怕又被吸引，说明好奇与勇气混在一起：你想在安全的距离外面对恐惧。\n你的性格比外表看起来更冷静、更善于观察。发生大事时表面平静，心里却把每个细节反复咀嚼。你对人的阴暗面和背后的故事感兴趣，所以适合做深谈的对象。\n你渴望的是被理解，连同阴影一起。你一直在等一个人，接受你有点奇怪的一面，而不只是善良的一面。",
    "ja": "あなたは、不気味なものから目をそらすより、もう一度見つめる側の人です。怖がりながらも不思議と惹かれるのは、好奇心と勇気が混ざっているからで、恐れを安全な距離で扱ってみたいのです。\n性格は意外と落ち着いていて観察力があります。大きな出来事があっても表向きは淡々としていますが、内側ではすべてを丁寧に噛みしめています。人の暗い面や背景の物語にも関心があり、深い話を打ち明けられる相手として信頼されます。\n心の奥の望みは、影の部分まで理解されたいということです。優しい面だけでなく、ちょっと奇妙な面も受け入れてくれる人を、長く待ってきました。",
    "es": "Ante lo inquietante, en lugar de apartar la vista, miras otra vez. Sentir miedo y atracción a la vez significa que se mezclan curiosidad y valentía: quieres tratar con el miedo desde una distancia segura.\nTu carácter es más sereno y observador de lo que parece. Aunque ocurra algo grande, por fuera mantienes la calma, mientras por dentro repasas cada detalle. Te interesa el lado oscuro de las personas y sus historias, así que eres alguien con quien se puede hablar a fondo.\nLo que anhelas es que te comprendan con todo y sombras. Llevas mucho tiempo esperando a alguien que acepte también tus rincones algo extraños, no solo los amables."
   },
   "opp": "soft",
   "match": "alien",
   "rarity": 3.4,
   "need": "stim"
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
    "es": "un amigo natural de los extraterrestres"
   },
   "inf": {
    "ko": "당신은 낯선 존재 앞에서 경계보다 호기심이 먼저 반응합니다. 나와 다른 생김새, 다른 사고방식, 다른 문화를 만나면 거부감보다 \"저건 어떤 세계일까\" 하는 궁금증이 앞섭니다. 열린 마음과 넓은 포용력이 타고난 장점입니다.\n사람들 사이에서는 주류에 속하지 않아도 불안해하지 않는 편이며, 오히려 소외된 사람이나 어색한 사람 곁에 자연스럽게 앉습니다. 그 덕에 당신 곁에는 독특한 사람들이 모입니다. 다만 본인도 가끔은 이 세상에 어색하게 와 있는 사람처럼 느낄 때가 있습니다.\n속마음은 나를 설명하지 않아도 있는 그대로 받아들여지는 곳을 찾고 있습니다. 어쩌면 당신 자신이 누군가에게는 가장 편안한 외계인일지도 모릅니다.",
    "en": "In front of something unfamiliar, curiosity answers before caution does. A different appearance, way of thinking or culture makes you wonder \"what kind of world is that?\" instead of pulling away. An open mind and wide tolerance are your natural gifts.\nAmong people, you do not fret about being outside the mainstream. You tend to sit beside the left-out or the awkward, so unusual people gather around you. Still, you sometimes feel like someone who arrived in this world slightly out of place.\nWhat you seek is a place where you are accepted without explaining yourself. You may well be the most comfortable alien someone has ever met.",
    "zh": "面对陌生的存在，好奇心比戒备先一步反应。不同的外表、不同的想法、不同的文化，你想的是“那是个什么样的世界”，而不是退开。开放的心和宽广的包容是你天生的优点。\n在人群中，你不会因为不属于主流而不安，反而自然地坐到被冷落或不自在的人身边。所以你身边聚集着独特的人。不过你自己偶尔也觉得像是不太自在地来到这个世界。\n你想找的是一个无需解释自己、也能被接纳的地方。说不定你就是某个人遇到过的最让人安心的外星人。",
    "ja": "あなたは、見慣れない存在を前にすると、警戒より先に好奇心が動きます。違う見た目、違う考え方、違う文化に出会っても、避けるより「どんな世界なのだろう」と思います。開かれた心と広い包容力が生まれつきの長所です。\n人の中では、主流に属さなくても不安になりません。むしろ、のけ者にされた人やぎこちない人のそばに自然と座ります。そのためあなたの周りには個性的な人が集まります。ただ、自分自身もときどき、この世界に少し場違いに来た人のように感じることがあります。\n心が探しているのは、自分を説明しなくてもそのまま受け入れられる場所です。もしかすると、あなたは誰かにとって一番安心できる宇宙人かもしれません。",
    "es": "Ante lo desconocido, la curiosidad responde antes que la cautela. Otro aspecto, otra forma de pensar, otra cultura: te preguntas \"¿cómo será ese mundo?\" en vez de retroceder. Una mente abierta y una amplia tolerancia son tus dones naturales.\nEntre la gente no te inquieta quedar fuera de la corriente principal; sueles sentarte junto a los marginados o a los torpes, así que te rodean personas singulares. Aun así, a veces sientes que llegaste a este mundo un poco fuera de lugar.\nBuscas un sitio donde te acepten sin tener que explicarte. Quizá seas el extraterrestre más reconfortante que alguien haya conocido."
   },
   "opp": "tough",
   "match": "magic",
   "rarity": 5.9,
   "need": "welcome"
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
    "ko": "고요 애호가",
    "en": "a lover of stillness",
    "zh": "宁静爱好者",
    "ja": "静けさの愛好家",
    "es": "un amante de la quietud"
   },
   "inf": {
    "ko": "당신은 빠르게 변하는 세상에서도 자기만의 속도를 지키는 사람입니다. 오래된 것과 조용한 것 앞에서 걸음이 느려지고, 그 순간 마음이 가장 안정됩니다. 소란에 휩쓸리지 않고 중심을 잡는 힘은 당신의 큰 강점입니다.\n사고방식은 신중하고 깊습니다. 결정을 내리기 전에 오래 생각하고, 한번 마음먹으면 쉽게 흔들리지 않습니다. 관계에서도 많은 사람보다 몇 안 되는 깊은 관계를 택합니다. 다만 변화가 필요한 순간에 너무 오래 머무르는 것은 조심하셔야 합니다.\n속마음은 아무도 재촉하지 않는 시간을 원합니다. 조용한 것을 곁에 두는 일은 단순한 취향이 아니라, 일상을 버티게 하는 작은 충전소입니다.",
    "en": "You keep your own pace even in a fast-moving world. Old and quiet things slow your steps, and that is when your mind feels steadiest. The strength to stay centered amid noise is one of your biggest assets.\nYou think carefully and deeply. You take your time before deciding, and once your mind is made up you rarely waver. In relationships you choose a few deep bonds over many shallow ones. Just be careful not to linger too long when change is genuinely needed.\nInside, you want time that nobody hurries. Keeping quiet things near you is not mere taste. It is a small charging station that helps you get through the day.",
    "zh": "在快速变化的世界里，你依然守着自己的节奏。面对安静和古老的事物，脚步会慢下来，那一刻内心最安稳。在喧嚣中不被卷走、守住中心的力量，是你很大的优势。\n你思考慎重而深入。做决定前想很久，一旦决定就不轻易动摇。在关系里，你选择少数深厚的关系，而不是众多浅交。只是需要改变的时候，要小心停留太久。\n内心深处，你想要一段没人催促的时间。把安静的东西放在身边，并不只是喜好，而是支撑日常的小小充电站。",
    "ja": "あなたは、速く変わる世の中でも自分のペースを守る人です。静かなもの、古いものの前で歩みが遅くなり、そのとき心が一番落ち着きます。騒がしさに流されずに軸を保つ力は、大きな強みです。\n考え方は慎重で深く、決める前に長く考え、一度決めたら簡単には揺れません。人間関係も、多くの浅い関係より少数の深い関係を選びます。ただ、変化が必要なときに留まりすぎないよう気をつけてください。\n心の奥では、誰も急かさない時間を望んでいます。静かなものをそばに置くのは単なる好みではなく、毎日を支える小さな充電所です。",
    "es": "Mantienes tu propio ritmo incluso en un mundo que cambia deprisa. Ante lo antiguo y lo silencioso tus pasos se hacen lentos, y entonces tu ánimo es más estable. La fuerza para mantenerte centrado entre el ruido es una de tus mayores bazas.\nPiensas con cuidado y profundidad. Tardas en decidir y, una vez decidido, rara vez vacilas. En las relaciones prefieres pocos vínculos hondos a muchos superficiales. Solo cuida de no quedarte demasiado cuando de verdad toca cambiar.\nPor dentro quieres un tiempo que nadie te apure. Tener cosas silenciosas cerca no es un simple gusto: es una pequeña estación de carga que te ayuda a sostener el día."
   },
   "opp": "prank",
   "match": "wall",
   "rarity": 6.5,
   "need": "cool"
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
    "es": "un guardián de lo inútil"
   },
   "inf": {
    "ko": "당신은 쓸모의 기준으로 물건을 판단하지 않습니다. 기능이 없어도 의미가 있다면 남기고, 효율이 떨어져도 정이 가면 곁에 둡니다. 이는 낭비가 아니라 가치의 기준이 남들과 다르다는 뜻이며, 감정과 기억을 소중히 다루는 성향의 증거입니다.\n관계에서도 비슷합니다. 한번 마음을 준 사람과 인연을 쉽게 정리하지 못하고, 오래된 친구를 소중히 합니다. 그래서 신뢰받는 사람이 되지만, 놓아야 할 것을 놓지 못해 마음이 무거워지는 일도 있습니다.\n마음 깊은 곳의 바람은 효율과 성과로 평가되지 않는 것들도 이 세상에 있어도 된다는 확인입니다. 당신은 쓸모없는 것들의 가장 믿음직한 수호자입니다.",
    "en": "You do not judge objects by usefulness. If something means something, it stays, and if it is inefficient but dear, you keep it close. That is not waste. It shows that your sense of value differs from most people's, and that you treat feelings and memories with care.\nRelationships work the same way. Once you have given someone your heart, you struggle to let the connection go, and you cherish old friends. People trust you for it, though not letting go of what you should can weigh on you.\nYour deep wish is confirmation that things not measured by efficiency or results are allowed to exist. You are the most dependable guardian of useless things.",
    "zh": "你不以有用与否来评判物品。有意义就留下，效率低但有感情就放在身边。这不是浪费，而是价值标准与别人不同，说明你珍视感情和记忆。\n人际关系也类似。一旦付出真心，就很难轻易了结，你珍惜老朋友。所以你值得信赖，但有时放不下该放下的东西，心里会变沉。\n你深层的愿望，是确认那些不以效率和成果衡量的东西也可以存在。你是无用之物最可靠的守护者。",
    "ja": "あなたは、役に立つかどうかで物を判断しません。機能がなくても意味があれば残し、効率が悪くても愛着があればそばに置きます。それは無駄ではなく、価値の基準が人と違うということで、感情や思い出を大切にする性質の表れです。\n人間関係も似ています。一度心を預けた人との縁を簡単には整理できず、古い友人を大切にします。だから信頼される人ですが、手放すべきものを手放せず、心が重くなることもあります。\n心の奥の願いは、効率や成果で測れないものもこの世にあっていい、という確認です。あなたは役に立たないものたちの、一番頼もしい守り手です。",
    "es": "No juzgas los objetos por su utilidad. Si significan algo, se quedan; si son poco eficientes pero queridos, los tienes cerca. No es derroche: muestra que tu escala de valores es distinta y que cuidas los sentimientos y los recuerdos.\nLas relaciones funcionan igual. Una vez que das tu corazón, te cuesta cerrar un vínculo, y aprecias a los viejos amigos. Por eso se confía en ti, aunque no soltar lo que debes soltar a veces pesa.\nTu deseo profundo es confirmar que lo que no se mide por eficiencia ni resultados también puede existir. Eres el guardián más fiable de las cosas inútiles."
   },
   "opp": "useful",
   "match": "calm",
   "rarity": 0.5,
   "need": "free"
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
    "ko": "어설픔 감식가",
    "en": "a connoisseur of clumsiness",
    "zh": "笨拙鉴赏家",
    "ja": "ぎこちなさの目利き",
    "es": "un catador de torpezas"
   },
   "inf": {
    "ko": "당신은 매끈한 완성품보다 손의 흔적이 남은 것에 마음이 움직입니다. 삐뚤어진 선, 어딘가 어긋난 비율에서 만든 이의 정성과 사정이 느껴지기 때문입니다. 결과보다 과정을, 완벽함보다 진심을 읽어내는 감각이 뛰어납니다.\n사람을 대할 때도 겉으로 번지르르한 사람보다 서툴러도 성의 있는 사람을 신뢰합니다. 따뜻하고 인간적인 판단 기준이라 할 수 있습니다. 반면 스스로 무언가 만들거나 보여줄 때는 완성도가 부족하다는 불안이 앞서서 시작을 미루기도 합니다.\n속마음은 어설퍼도 괜찮다는 허락을 누군가에게서, 혹은 자신에게서 받고 싶어 합니다. 당신이 어설픈 것을 사랑하는 일은 곧 자신을 사랑하는 연습입니다.",
    "en": "You are moved less by polished finished goods than by things that carry the trace of a hand. A wobbly line or an off proportion lets you feel the care and circumstances of whoever made it. You read process over result and sincerity over perfection.\nWith people, too, you trust the clumsy but earnest over the glossy. It is a warm, human standard. When it comes to making or showing something yourself, though, worry about falling short can make you postpone starting.\nInside, you want permission, from someone or from yourself, to be imperfect. Loving the clumsy is, for you, practice in loving yourself.",
    "zh": "比起光滑的成品，你更被留着手痕的东西打动。歪斜的线条、不太对的比例，让你感到制作者的用心与处境。你读的是过程而非结果，是诚意而非完美。\n对待人也是，比起光鲜的人，你更信任笨拙却认真的人。这是一个温暖而有人情味的标准。不过轮到自己制作或展示时，担心不够好的不安会让你推迟开始。\n你内心想从别人或自己那里得到许可：不完美也没关系。爱上笨拙的东西，就是你练习爱自己的方式。",
    "ja": "あなたは、つるりとした完成品より、手の跡が残るものに心を動かされます。曲がった線やずれた比率に、作った人の心づくしや事情を感じるからです。結果より過程、完璧さより誠意を読み取る感覚に優れています。\n人に対しても、見栄えのいい人より、不器用でも誠実な人を信頼します。温かく人間らしい基準です。一方、自分で何かを作ったり見せたりするときは、出来が足りないという不安が先に立って、始めるのを先延ばしにすることがあります。\n心の奥では、不器用でもいいという許しを、誰かから、あるいは自分から受け取りたいのです。不器用なものを愛することは、自分を愛する練習でもあります。",
    "es": "Te conmueve más lo que lleva la huella de una mano que el producto pulido. Una línea torcida o una proporción desviada te dejan sentir el cuidado y las circunstancias de quien lo hizo. Lees el proceso antes que el resultado y la sinceridad antes que la perfección.\nCon las personas también confías más en lo torpe pero sincero que en lo reluciente. Es un criterio cálido y humano. Eso sí, cuando te toca crear o mostrar algo, el miedo a no estar a la altura puede hacerte retrasar el comienzo.\nPor dentro quieres un permiso, de alguien o tuyo, para ser imperfecto. Amar lo torpe es, para ti, practicar el quererte."
   },
   "opp": "sound",
   "match": "keep",
   "rarity": 6.2,
   "need": "play"
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
    "es": "un adicto a lo blandito"
   },
   "inf": {
    "ko": "당신은 부드럽고 작은 것에서 안정을 얻는 섬세한 사람입니다. 하루 동안 쌓인 긴장과 피로를 풀어줄 확실한 무언가가 곁에 있을 때 마음이 가라앉습니다. 이는 약함이 아니라 자신의 감정 상태를 정확히 알고 돌보는 능력입니다.\n성격은 온화하고 공감 능력이 높아 타인의 기분에 민감합니다. 그래서 주변에 편안함을 주지만, 남의 감정까지 떠안아 혼자 지치는 일이 많습니다. 거절하는 일이 어렵고, 괜찮은 척하는 데 능숙합니다.\n마음속 욕구는 누군가를 챙기는 쪽이 아니라 챙김을 받는 쪽이 되어보고 싶다는 것입니다. 오늘만큼은 당신이 기대어도 되는 존재를 하나쯤 가져도 좋겠습니다.",
    "en": "You find stability in soft, small things, a sensitive person who knows what actually eases the day's accumulated tension. That is not weakness. It is the ability to read your own state accurately and look after it.\nGentle by nature and high in empathy, you are tuned to other people's moods. That brings comfort to those around you, but you often take on their feelings and end up tired alone. Saying no is hard, and pretending to be fine comes easily.\nWhat you secretly want is to be the one who is looked after for once. You are allowed to have at least one thing you can lean on today.",
    "zh": "你从柔软小巧的东西里获得安定，是个细腻的人，清楚什么能缓解一天积累的紧绷。这不是软弱，而是准确了解并照顾自己状态的能力。\n你性格温和，共情力强，对他人的情绪很敏感。这给周围带来安慰，但你常把别人的情绪也揽下来，独自疲惫。拒绝很难，装作没事却很熟练。\n你暗地里想的，是偶尔也做被照顾的一方。今天，你也可以拥有一样能依靠的东西。",
    "ja": "あなたは、やわらかくて小さなものから安らぎを得る繊細な人です。一日のうちに溜まった緊張や疲れをほぐしてくれる確かな何かがそばにあると、心が落ち着きます。それは弱さではなく、自分の状態を正確に知って労わる力です。\n性格は穏やかで共感力が高く、他人の気分に敏感です。周りに安心を与えますが、他人の感情まで背負って一人で疲れることが多く、断るのが難しく、平気なふりが上手です。\n心の中の望みは、気遣う側ではなく、気遣われる側になってみたいということです。今日くらいは、もたれかかってもいい存在をひとつ持っていいのです。",
    "es": "Encuentras estabilidad en lo blando y pequeño; eres sensible y sabes qué alivia la tensión acumulada del día. Eso no es debilidad, sino la capacidad de conocer con exactitud tu estado y cuidarlo.\nDe carácter suave y mucha empatía, captas el ánimo ajeno. Eso reconforta a quienes te rodean, pero a menudo cargas con sus emociones y acabas agotado a solas. Decir que no cuesta y fingir que estás bien se te da fácil.\nEn secreto quieres ser, por una vez, quien recibe cuidados. Hoy te mereces tener algo en lo que apoyarte."
   },
   "opp": "scary",
   "match": "cat",
   "rarity": 7.2,
   "need": "comfort"
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
    "ko": "도도함 애호가",
    "en": "an admirer of aloofness",
    "zh": "傲娇爱好者",
    "ja": "気高さの愛好家",
    "es": "un admirador de lo altivo"
   },
   "inf": {
    "ko": "당신은 자기 속도와 거리를 중요하게 여깁니다. 도도하고 게으른 것을 보면 이상하게 마음이 가는 것은, 눈치 보지 않고 자기 방식대로 사는 모습에 대한 동경이 있기 때문입니다. 평소에는 배려하느라 못 했던 것을 그 존재가 대신 해주는 셈입니다.\n사람들과는 적당한 거리를 유지하는 편이고, 친해지면 의외로 다정합니다. 독립심이 강하고 혼자 있는 시간에서 에너지를 얻습니다. 다만 거리를 두는 습관이 때로는 다가오려는 사람을 밀어내는 것으로 오해받기도 합니다.\n속마음은 아무에게도 설명하지 않고 쉬어도 되는 자유를 원합니다. 조금 게으르게 살아도 괜찮다는 허락이 당신에게 가장 필요한 것입니다.",
    "en": "You value your own pace and distance. The pull you feel toward lazy, aloof things comes from admiring a creature that lives its own way without watching anyone's face. It does on your behalf what consideration usually prevents you from doing.\nYou keep a comfortable distance from people, and once close, you are unexpectedly affectionate. You are independent and recharge in time alone, though keeping distance can be mistaken for pushing away those who approach.\nDeep down, you want the freedom to rest without explaining yourself. Permission to live a little lazily is what you need most.",
    "zh": "你重视自己的节奏和距离。对慵懒又高傲的东西莫名倾心，是因为你羡慕那种不看别人脸色、按自己方式生活的样子。平时因为体贴而没做的事，它替你做了。\n你与人保持适度距离，熟了之后却出人意料地温柔。你独立，在独处中恢复能量。只是保持距离的习惯有时会被误会成推开想靠近的人。\n内心深处，你想要不用向任何人解释就能休息的自由。你最需要的，是允许自己活得懒散一点。",
    "ja": "あなたは、自分のペースと距離を大切にします。気ままで気位の高いものに不思議と惹かれるのは、人の顔色を見ず自分流に生きる姿への憧れがあるからです。普段は気遣いで我慢していることを、その存在が代わりにしてくれるのです。\n人とは適度な距離を保ち、親しくなると意外に優しい人です。独立心が強く、一人の時間でエネルギーを得ます。ただ、距離を置く習慣が、近づこうとする人を遠ざけていると誤解されることもあります。\n心の奥では、誰にも説明せずに休んでいい自由を望んでいます。少し怠けて生きてもいいという許しが、あなたに一番必要なものです。",
    "es": "Valoras tu propio ritmo y tu distancia. La atracción por lo perezoso y altivo viene de admirar a quien vive a su manera sin mirar caras. Esa criatura hace por ti lo que la consideración te suele impedir.\nMantienes una distancia cómoda con la gente y, ya con confianza, eres sorprendentemente cariñoso. Eres independiente y recuperas energía en soledad, aunque la costumbre de guardar distancia a veces se malinterpreta como rechazo.\nEn el fondo quieres la libertad de descansar sin dar explicaciones. El permiso de vivir un poco a lo perezoso es lo que más necesitas."
   },
   "opp": "tough",
   "match": "soft",
   "rarity": 7.3,
   "need": "cool"
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
    "es": "un entusiasta de las ranas"
   },
   "inf": {
    "ko": "당신은 남들이 크게 주목하지 않는 존재에게서 매력을 발견하는 사람입니다. 개구리처럼 화려하지 않지만 묘하게 정이 가는 것을 알아보는 눈은, 사람과 상황을 겉이 아니라 결로 읽는 감각에서 옵니다.\n성격은 소박하고 유머 감각이 있으며, 거창한 목표보다 소소한 즐거움을 소중히 합니다. 유행에 휩쓸리지 않고 자신만의 기준을 가지고 있어서 오래 봐야 진가가 드러나는 타입입니다. 다만 겸손이 지나쳐 자신의 매력을 낮게 평가하는 경향이 있습니다.\n속마음은 특별해 보이지 않아도 괜찮다는 확인을 받고 싶어 합니다. 눈에 띄지 않는 것을 사랑하는 사람은, 결국 눈에 띄지 않는 자신도 사랑할 수 있게 됩니다.",
    "en": "You find charm in things most people do not notice. Spotting something unflashy yet oddly endearing, like a frog, comes from reading people and situations by their texture instead of their surface.\nYou are modest and have a sense of humor, preferring small pleasures to grand goals. You follow your own standards rather than trends, so your worth shows only after people have known you a while. Your modesty, though, can lead you to rate your own appeal too low.\nInside, you want reassurance that you do not need to look special. Someone who loves the unnoticed can eventually love the unnoticed self too.",
    "zh": "你能在别人不太注意的东西里发现魅力。像青蛙那样不华丽却莫名可爱的东西，你能认出来，源于你用质地而不是表面去读人与情境。\n你朴素、有幽默感，比起远大目标更珍惜小小的乐趣。你不追赶潮流，有自己的标准，所以相处久了才显出价值。不过谦逊过头，容易低估自己的魅力。\n内心里，你想得到确认：不显得特别也没关系。爱着不起眼之物的人，最终也能爱上不起眼的自己。",
    "ja": "あなたは、人があまり注目しない存在に魅力を見つける人です。カエルのように派手ではないのにどこか憎めないものを見抜く目は、人や状況を表面ではなく質感で読む感覚から来ています。\n性格は素朴でユーモアがあり、大きな目標より小さな楽しみを大切にします。流行に流されず自分の基準を持っているので、長く付き合うほど真価が見えるタイプです。ただ、謙虚さが過ぎて、自分の魅力を低く見積もりがちです。\n心の奥では、特別に見えなくても大丈夫という確認がほしいのです。目立たないものを愛する人は、いずれ目立たない自分も愛せるようになります。",
    "es": "Encuentras encanto en lo que casi nadie nota. Reconocer algo poco vistoso pero extrañamente entrañable, como una rana, viene de leer a las personas y las situaciones por su textura y no por su superficie.\nEres sencillo y con sentido del humor, y valoras los pequeños placeres más que las grandes metas. No sigues modas y tienes tus propios criterios, así que tu valor se ve con el tiempo. La humildad, eso sí, puede llevarte a subestimar tu atractivo.\nPor dentro quieres la confirmación de que no hace falta parecer especial. Quien ama lo que pasa desapercibido acaba pudiendo amar también al que pasa desapercibido en sí mismo."
   },
   "opp": "outdoor",
   "match": "cat",
   "rarity": 8.1,
   "need": "free"
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
    "es": "alguien indefenso ante los animales"
   },
   "inf": {
    "ko": "당신은 말이 통하지 않아도 마음이 통하는 존재 앞에서 가장 솔직해집니다. 사람 앞에서는 계산하고 조절하던 감정이 동물 앞에서는 그냥 풀려버립니다. 이는 당신이 평소 얼마나 많은 감정을 조심스럽게 다루고 있는지를 보여줍니다.\n성격은 따뜻하고 순수한 면이 있어서 약한 존재를 지나치지 못합니다. 그래서 책임감이 강한 편이고, 한번 마음을 주면 끝까지 챙깁니다. 다만 감정이입이 커서 타인의 아픔에 쉽게 지치고, 자신을 돌보는 일은 뒷전이 되기도 합니다.\n속마음은 조건 없이 받아들여지는 관계를 갈망합니다. 판단도, 기대도 없이 곁에 있어주는 존재가 당신에게는 가장 큰 위로입니다.",
    "en": "You are most honest in front of creatures who connect without words. The feelings you calculate and adjust around people simply loosen around animals, which shows how carefully you handle your emotions day to day.\nWarm and pure-hearted, you cannot walk past something vulnerable. You carry a strong sense of responsibility and, once you commit, you look after them to the end. But strong empathy means others' pain tires you quickly, and caring for yourself slides to the back.\nWhat you long for is unconditional acceptance: no judgment, no expectations, just someone present. That is your greatest comfort.",
    "zh": "在无需言语就能心意相通的存在面前，你最坦率。在人面前计算、调整的情绪，在动物面前自然松开，这说明你平时多么小心地处理感情。\n你温暖而纯真，无法对弱小的存在视而不见。责任感强，一旦付出就照顾到底。但共情太强，容易被他人的痛苦耗尽，自己的照顾反而排在最后。\n你渴望的是无条件的接纳：没有评判，没有期待，只是陪在身边。这对你是最大的安慰。",
    "ja": "あなたは、言葉が通じなくても心が通じる存在の前でいちばん素直になります。人の前では計算し調整している感情が、動物の前ではそのままほどけます。普段いかに気持ちを慎重に扱っているかがわかります。\n温かく純粋なところがあり、弱いものを素通りできません。責任感が強く、一度心を預けたら最後まで面倒を見ます。ただ共感が大きいぶん、他人の痛みで疲れやすく、自分を労わるのは後回しになりがちです。\n心の奥で求めているのは、条件のない受容です。判断も期待もなく、ただそばにいてくれる存在が、あなたにとって最大の慰めです。",
    "es": "Eres más sincero ante seres que conectan sin palabras. Las emociones que calculas y ajustas ante las personas se aflojan sin más ante los animales, lo que muestra con cuánto cuidado manejas tus sentimientos a diario.\nCálido y de corazón puro, no puedes pasar de largo ante lo vulnerable. Tienes un fuerte sentido de la responsabilidad y, una vez comprometido, cuidas hasta el final. Pero con tanta empatía el dolor ajeno te agota enseguida y cuidarte a ti queda para el final.\nLo que anhelas es una aceptación sin condiciones: sin juicios, sin expectativas, solo compañía. Ese es tu mayor consuelo."
   },
   "opp": "human",
   "match": "soft",
   "rarity": 0.5,
   "need": "comfort"
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
    "ko": "든든함 신봉자",
    "en": "a believer in dependability",
    "zh": "可靠信徒",
    "ja": "頼もしさの信奉者",
    "es": "un creyente en la fiabilidad"
   },
   "inf": {
    "ko": "당신은 화려한 것보다 믿을 수 있는 것을 중시하는 현실적인 낭만가입니다. 투박해도 단단하고 든든한 존재에게 마음이 가는 것은, 쉽게 흔들리지 않는 안정감을 삶에서 가장 높게 치기 때문입니다.\n사람을 대할 때도 말을 많이 하는 사람보다 행동으로 보여주는 사람을 신뢰합니다. 본인 역시 필요할 때 묵묵히 나서주는 든든한 사람으로 통합니다. 다만 의지가 되는 입장에만 오래 서 있다 보니, 자신이 힘들다는 말은 꺼내기 어려워합니다.\n속마음은 늘 단단해야 한다는 부담에서 잠시 벗어나고 싶습니다. 든든한 사람도 누군가에게 기대어도 된다는 것을 기억하셨으면 합니다.",
    "en": "You are a practical romantic who prizes what can be trusted over what dazzles. Being drawn to the sturdy, if rough, comes from rating steadiness that does not waver at the very top.\nYou trust people who show it through actions more than those who talk a lot, and you yourself are known as the dependable one who steps up quietly. But after standing in the role of support for so long, saying you are tired is difficult.\nInside, you want a break from the pressure to always be strong. Even the dependable are allowed to lean on someone, and it is worth remembering.",
    "zh": "你是个务实的浪漫派，看重可以信赖的东西胜过耀眼的东西。被粗犷却结实可靠的存在吸引，是因为你把不动摇的安定感排在最前面。\n对人也一样，比起话多的人，你更信任用行动表示的人，你自己也被看作默默出手的可靠之人。不过长期站在支撑者的位置，让你难以开口说自己累了。\n内心里，你想暂时摆脱必须一直坚强的压力。可靠的人也可以依靠别人，希望你记得。",
    "ja": "あなたは、華やかなものより信頼できるものを重んじる、現実的なロマンチストです。武骨でも頑丈で頼もしい存在に惹かれるのは、簡単に揺らがない安定感を人生で最も高く評価しているからです。\n人に対しても、言葉の多い人より行動で示す人を信頼します。あなた自身も、必要なときに黙って前に出てくれる頼もしい人と思われています。ただ、支える側に長く立ちすぎて、つらいと言い出しにくくなっています。\n心の奥では、いつも強くなければという重荷から、少し離れたいと思っています。頼もしい人も誰かにもたれていいのだと、思い出してください。",
    "es": "Eres un romántico práctico que valora lo fiable por encima de lo deslumbrante. Que te atraiga lo recio pero sólido viene de poner la estabilidad que no se tambalea en lo más alto.\nCon la gente confías más en quien lo demuestra con hechos que en quien habla mucho, y a ti se te considera esa persona fiable que da un paso al frente sin hacer ruido. Pero tras tanto tiempo sosteniendo a otros, te cuesta decir que estás cansado.\nPor dentro quieres descansar de la presión de ser siempre fuerte. Recuerda que hasta quien es un apoyo puede apoyarse en alguien."
   },
   "opp": "soft",
   "match": "outdoor",
   "rarity": 5.3,
   "need": "sturdy"
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
    "ko": "소리 수집가",
    "en": "a collector of sounds",
    "zh": "声音收藏家",
    "ja": "音のコレクター",
    "es": "un coleccionista de sonidos"
   },
   "inf": {
    "ko": "당신은 눈보다 귀로 세상을 받아들이는 감각이 예민한 사람입니다. 어떤 소리 하나가 기분과 기억을 통째로 바꾸어 놓는 경험이 잦고, 분위기를 소리로 먼저 파악합니다. 감수성이 풍부하고 감정의 결이 섬세하다는 증거입니다.\n사람과의 관계에서도 말의 내용보다 말투와 목소리의 온도에 반응합니다. 그래서 상대의 기분 변화를 빨리 알아채고, 진심인지 아닌지도 직감적으로 구분합니다. 반면 소음이나 불편한 소리에 쉽게 지치는 편이라 조용한 휴식이 꼭 필요합니다.\n속마음은 말로 다 설명하지 못하는 감정을 소리로라도 전하고 싶어 합니다. 당신의 마음을 가장 잘 아는 것은 어쩌면 말이 아니라 소리일 것입니다.",
    "en": "You take in the world more through ears than eyes, and you are sensitive. A single sound can change your mood and memories entirely, and you read atmosphere by sound first. It is a sign of rich sensitivity and fine emotional grain.\nIn relationships you respond to tone and the warmth of a voice more than to the content of words. You catch shifts in someone's mood fast and sense instinctively whether they are sincere. On the other hand noise wears you out easily, so quiet rest is essential.\nInside, you want to convey with sound the feelings you cannot explain in words. What understands you best may be sound rather than speech.",
    "zh": "你用耳朵多于眼睛来接收世界，感觉敏锐。一个声音就能彻底改变你的心情和记忆，你总是先从声音判断氛围。这说明你感受丰富、情绪纹理细腻。\n在关系中，你对语气和声音的温度的反应，胜过话语的内容。你很快察觉对方情绪的变化，也凭直觉分辨真假。另一方面，你容易被噪音和刺耳的声音累到，所以安静的休息必不可少。\n内心里，你想把说不清的感情用声音传达出去。最懂你的，也许不是语言，而是声音。",
    "ja": "あなたは、目より耳で世界を受け取る感覚が鋭い人です。ひとつの音で気分や記憶ががらりと変わる経験が多く、雰囲気をまず音で把握します。感受性が豊かで、感情の肌理が細かい証拠です。\n人付き合いでも、言葉の内容より声の調子や温度に反応します。相手の気分の変化にすぐ気づき、本心かどうかも直感で見分けます。その反面、騒音や不快な音で疲れやすく、静かな休息が欠かせません。\n心の奥では、言葉で説明しきれない気持ちを音ででも伝えたいと思っています。あなたの心を一番よく知っているのは、言葉ではなく音かもしれません。",
    "es": "Recibes el mundo más por los oídos que por los ojos, y eres sensible. Un solo sonido puede cambiar por completo tu ánimo y tus recuerdos, y percibes el ambiente primero por el sonido. Es señal de una gran riqueza emocional y de matices finos.\nEn las relaciones respondes al tono y al calor de la voz más que al contenido de las palabras. Notas rápido los cambios de humor de alguien y distingues por intuición si es sincero. Por otro lado, el ruido te agota con facilidad, así que el descanso silencioso es esencial.\nPor dentro quieres transmitir con sonidos lo que no puedes explicar con palabras. Quizá lo que mejor te entiende no sea el habla, sino el sonido."
   },
   "opp": "wall",
   "match": "play",
   "rarity": 5.1,
   "need": "sound"
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
    "ko": "손장난 장인",
    "en": "a master of fidgeting",
    "zh": "手上功夫匠人",
    "ja": "手遊びの職人",
    "es": "un maestro del trasteo"
   },
   "inf": {
    "ko": "당신은 머리보다 손으로 생각하는 사람입니다. 무언가를 만지고 맞추고 돌려보는 동안 복잡했던 생각이 정리되고, 그 시간 자체가 휴식이 됩니다. 집중력이 높고 몰입하면 시간을 잊는 타입입니다.\n성격은 호기심이 많고 작은 디테일에 만족을 느끼는 편입니다. 결과를 빨리 내라는 압박보다는 자기 페이스로 가지고 놀 수 있는 여유가 있을 때 가장 창의적입니다. 다만 몰입이 깊은 만큼 해야 할 일을 미루고 소소한 즐거움으로 도피하는 일도 있습니다.\n속마음은 생산적이어야 한다는 압박 없이 그저 놀아도 된다는 허락을 원합니다. 손장난은 시간 낭비가 아니라 당신의 마음을 정리하는 가장 정직한 방법입니다.",
    "en": "You think with your hands more than your head. While touching, fitting and turning something, tangled thoughts sort themselves out, and that time itself is rest. You concentrate well and lose track of time once absorbed.\nCurious and satisfied by small details, you are most creative when you can play at your own pace, not under pressure for quick results. Because the absorption is deep, though, you sometimes postpone what must be done and escape into small pleasures.\nWhat you want is permission to simply play, with no pressure to be productive. Fiddling is not wasted time. It is your most honest way of tidying your mind.",
    "zh": "你用手思考，多于用脑。触摸、拼合、转动的时候，纷乱的念头会理顺，这段时间本身就是休息。你专注力强，一旦投入就忘了时间。\n你好奇，在小细节中得到满足，不被催着出结果、能按自己节奏摆弄时最有创意。不过投入得深，有时会拖延该做的事，躲进小小的乐趣里。\n你想要的是不受“必须有产出”压力的许可：就只是玩。摆弄东西不是浪费时间，而是你整理心情最诚实的方式。",
    "ja": "あなたは、頭より手で考える人です。何かを触って、はめて、回してみる間に、ごちゃついた考えが整理され、その時間そのものが休息になります。集中力が高く、没頭すると時間を忘れるタイプです。\n好奇心が強く、小さな細部に満足を感じます。結果を急かされるより、自分のペースでいじれる余裕があるときに一番創造的です。ただ、没頭が深いぶん、やるべきことを先延ばしにして小さな楽しみへ逃げることもあります。\n心の奥では、生産的でなければという圧力なしに、ただ遊んでいいという許しを望んでいます。手遊びは時間の無駄ではなく、あなたの心を整理する一番正直な方法です。",
    "es": "Piensas más con las manos que con la cabeza. Mientras tocas, encajas y giras algo, los pensamientos enredados se ordenan, y ese rato ya es descanso. Te concentras bien y pierdes la noción del tiempo cuando te absorbes.\nCurioso y satisfecho con los pequeños detalles, eres más creativo cuando puedes jugar a tu ritmo, sin la presión de resultados rápidos. Pero, por lo hondo de tu absorción, a veces pospones lo que toca y te refugias en pequeños placeres.\nLo que quieres es permiso para jugar sin más, sin la presión de ser productivo. Trastear no es perder el tiempo: es tu manera más honesta de ordenar la mente."
   },
   "opp": "calm",
   "match": "outdoor",
   "rarity": 6.3,
   "need": "play"
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
    "ko": "어른이 아이",
    "en": "a grown-up child",
    "zh": "大人里的小孩",
    "ja": "大人になった子ども",
    "es": "un niño adulto"
   },
   "inf": {
    "ko": "당신은 어른이 되어도 몸을 움직이며 노는 즐거움을 놓지 않은 사람입니다. 책상 앞에서 생각만 하기보다 직접 뛰어들고 부딪치며 배우는 성향이고, 에너지가 넘칩니다. 어린 시절의 순수한 감각을 지키고 있다는 것은 큰 자산입니다.\n사람을 사귀는 방식도 시원시원하고 편견이 적어서 금세 친해집니다. 분위기를 활기차게 만들지만, 가만히 있어야 하는 시간이나 오래 앉아 있는 일에는 답답함을 크게 느낍니다. 쉬는 것을 게으름으로 여기는 습관도 조심하셔야 합니다.\n속마음은 의무와 책임에 짓눌리지 않고 마음껏 뛰어놀던 시절의 자유로 돌아가고 싶어 합니다. 당신에게 놀이는 사치가 아니라 생기를 되찾는 방법입니다.",
    "en": "You never gave up the joy of moving your body and playing, even as an adult. You learn by plunging in and bumping into things rather than just thinking at a desk, and you have plenty of energy. Keeping a childlike sense alive is a real asset.\nYou make friends in an easygoing way with few prejudices, and you lift the mood of a room. But stillness and long sitting feel stifling, and be careful about treating rest as laziness.\nInside, you want to return to the freedom of running around unburdened by duty. For you, play is not a luxury. It is how you recover your vitality.",
    "zh": "长大成人后，你依然没有丢掉活动身体、尽情玩耍的乐趣。比起坐在桌前空想，你更爱亲自投入、碰撞中学习，精力充沛。保有童年的纯真感觉是一笔很大的财富。\n你交朋友爽快，偏见少，很快就能熟络，也能让气氛活跃起来。但需要安静不动或久坐时会觉得很闷，也要小心把休息当成偷懒的习惯。\n内心里，你想回到不被义务和责任压着、尽情奔跑的自由。对你来说，玩不是奢侈，而是找回生气的方式。",
    "ja": "あなたは、大人になっても体を動かして遊ぶ楽しさを手放さなかった人です。机の前で考えるだけより、自分から飛び込んでぶつかりながら学ぶ性質で、エネルギーにあふれています。子どもの頃の純粋な感覚を保っているのは大きな財産です。\n人付き合いもさっぱりして偏見が少なく、すぐ打ち解けます。場を明るくしますが、じっとしている時間や長く座ることには窮屈さを強く感じます。休むことを怠けと考える習慣にも気をつけてください。\n心の奥では、義務や責任に押しつぶされず、思い切り走り回っていた頃の自由に戻りたいと思っています。あなたにとって遊びは贅沢ではなく、生気を取り戻す方法です。",
    "es": "No renunciaste, ya de adulto, a la alegría de mover el cuerpo y jugar. Aprendes lanzándote y chocando, más que pensando ante un escritorio, y rebosas energía. Conservar la sensación de la infancia es un gran activo.\nHaces amigos con soltura y pocos prejuicios, y animas el ambiente. Pero la quietud y estar mucho rato sentado te agobian, y cuidado con considerar el descanso como pereza.\nPor dentro quieres volver a la libertad de correr sin el peso del deber. Para ti, jugar no es un lujo: es la forma de recuperar la vitalidad."
   },
   "opp": "frog",
   "match": "play",
   "rarity": 1.6,
   "need": "move"
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
    "ko": "먹거리 감정이입러",
    "en": "an empath of snacks",
    "zh": "对食物也会共情的人",
    "ja": "食べ物に感情移入する人",
    "es": "un empático con la comida"
   },
   "inf": {
    "ko": "당신은 대상에 감정을 이입하는 능력이 뛰어난 사람입니다. 음식이든 물건이든 표정이 있으면 사람처럼 대하게 되고, 그 때문에 함부로 다루지 못합니다. 이는 따뜻하고 상상력이 풍부한 마음에서 나오는 성향입니다.\n일상에서는 사소한 것에도 의미를 부여하고 즐거움을 찾는 능력이 있습니다. 남들이 지나치는 장면에서 이야기를 읽어내기 때문에 대화가 재미있고 유머도 풍부합니다. 반면 감정이입이 지나쳐 결정을 내릴 때 미안함이 앞서는 일이 잦습니다.\n속마음은 모든 것이 조금 더 다정한 세상이기를 바랍니다. 당신이 먹거리에게까지 보내는 다정함은 당신이 사람에게 쏟는 마음의 크기를 짐작하게 합니다.",
    "en": "You have an exceptional ability to empathize with things. Food or object, once it has an expression you treat it like a person, so you cannot handle it roughly. This comes from a warm and imaginative heart.\nIn daily life you can give meaning to small things and find joy in them. You read stories in scenes others pass by, so your conversation is entertaining and full of humor. The downside is that overflowing empathy often makes guilt come first when you must decide something.\nYou hope for a world that is a little kinder in everything. The tenderness you offer even to food hints at how much you give to people.",
    "zh": "你对事物有出色的共情能力。不论食物还是物品，一旦有了表情，你就把它当人，因此不能随意对待。这出自温暖而富有想象力的心。\n日常中，你能给小事赋予意义并从中找到乐趣。别人路过的场景里，你读出故事，所以聊天有趣，幽默也多。不过共情过头，做决定时常常先涌上歉意。\n你希望一切都更温柔一点。你连对食物都那么温柔，不难想象你对人倾注了多少心意。",
    "ja": "あなたは、対象に感情移入する力が優れた人です。食べ物でも物でも、表情があれば人のように扱ってしまい、乱暴にできません。温かく想像力豊かな心から来る性質です。\n日常では、些細なことにも意味を見出して楽しみを見つけられます。人が通り過ぎる場面から物語を読み取るので、会話が楽しくユーモアも豊かです。ただ、感情移入が過ぎて、決断するとき申し訳なさが先に立つことがよくあります。\n心の奥の望みは、すべてがもう少し優しい世界です。食べ物にまで向けるその優しさは、人に注ぐ気持ちの大きさを想像させます。",
    "es": "Tienes una capacidad excepcional para ponerte en el lugar de las cosas. Comida u objeto, si tiene expresión lo tratas como a una persona, así que no puedes manejarlo con brusquedad. Nace de un corazón cálido e imaginativo.\nEn el día a día das sentido a lo pequeño y encuentras alegría en ello. Lees historias en escenas por las que otros pasan de largo, así que tu conversación es entretenida y llena de humor. La otra cara es que, con tanta empatía, a menudo la culpa llega antes al decidir.\nDeseas un mundo algo más amable en todo. La ternura que ofreces incluso a la comida deja intuir cuánto das a las personas."
   },
   "opp": "scary",
   "match": "tiny",
   "rarity": 1.9,
   "need": "comfort"
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
    "es": "un experto en mirar paredes"
   },
   "inf": {
    "ko": "당신은 한 곳을 오래 바라보며 생각에 잠기는 시간이 필요한 사람입니다. 벽에 걸린 것 하나가 공간의 분위기를 바꾸고 마음을 정돈해 준다고 믿으며, 환경이 감정에 미치는 영향을 잘 압니다. 미적 감각과 정서적 민감성이 높은 편입니다.\n사고방식은 사색적이고 의미를 따지는 쪽이어서, 가볍게 넘어가는 대화보다 깊이 있는 대화를 좋아합니다. 혼자만의 공간을 꾸미는 일에서 안정을 느끼며, 그 공간이 곧 자신의 마음 상태를 보여줍니다. 다만 생각이 길어져 행동으로 옮기는 데 시간이 걸릴 때가 있습니다.\n속마음은 자신을 설명해주는 어떤 상징을 곁에 두고 싶어 합니다. 말로는 다 전하지 못하는 나를 벽 위의 물건이 대신 말해줄 때 마음이 놓입니다.",
    "en": "You need time to gaze at one spot and sink into thought. You believe a single thing on a wall can change the feel of a space and settle the mind, and you understand how surroundings shape emotion. Your aesthetic sense and emotional sensitivity run high.\nYou are reflective and look for meaning, so you prefer deep conversation to light chatter. Arranging your own space brings you calm, and that space shows your state of mind. Thoughts may run long, though, and acting on them can take time.\nInside, you want to keep a symbol nearby that explains you. When an object on the wall says what you cannot put into words, you feel at ease.",
    "zh": "你需要一段时间，注视一处并陷入沉思。你相信墙上的一件东西能改变空间的气氛、整理心绪，也清楚环境对情绪的影响。你的审美和情感敏感度都很高。\n你善于思索、在意意义，所以比起轻飘飘的聊天，更喜欢有深度的对话。布置自己的空间让你安心，那个空间也映出你的心境。不过思考可能拉得很长，行动需要时间。\n内心里，你想在身边放一件能说明你的象征。当墙上的东西替你说出无法言说的自己时，你就安心了。",
    "ja": "あなたは、ひとつの場所をじっと見つめて物思いにふける時間が必要な人です。壁に掛けたもの一つが空間の雰囲気を変え、心を整えてくれると信じ、環境が感情に与える影響をよく知っています。美的感覚も情緒の感受性も高い方です。\n考え方は思索的で意味を重んじ、軽い会話より深い話を好みます。自分の空間を整えることに安らぎを感じ、その空間があなたの心の状態を映します。ただ、考えが長くなって、行動に移すまで時間がかかることがあります。\n心の奥では、自分を説明してくれる象徴をそばに置きたいと思っています。言葉では伝えきれない自分を壁の上のものが代わりに語ってくれると、心が落ち着きます。",
    "es": "Necesitas tiempo para mirar un punto y perderte en tus pensamientos. Crees que una sola cosa en la pared puede cambiar el aire de un espacio y ordenar la mente, y entiendes cómo el entorno moldea la emoción. Tu sentido estético y tu sensibilidad emocional son altos.\nEres reflexivo y buscas sentido, así que prefieres la conversación profunda a la charla ligera. Arreglar tu propio espacio te da calma, y ese espacio muestra tu estado de ánimo. Los pensamientos pueden alargarse, y pasar a la acción a veces tarda.\nPor dentro quieres tener cerca un símbolo que te explique. Cuando un objeto en la pared dice lo que tú no sabes expresar, te quedas tranquilo."
   },
   "opp": "costume",
   "match": "calm",
   "rarity": 7.3,
   "need": "view"
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
    "ko": "점잖음 파괴 감상가",
    "en": "an appreciator of dignity collapsing",
    "zh": "正经崩坏鉴赏家",
    "ja": "お上品さ崩壊の鑑賞家",
    "es": "un apreciador de la solemnidad que se desmorona"
   },
   "inf": {
    "ko": "당신은 격식과 체면의 무게를 누구보다 잘 아는 사람이기에, 그것이 살짝 무너지는 순간에 가장 크게 웃습니다. 점잖은 사람의 엉뚱함은 사람은 누구나 인간적이라는 증거로 느껴져서 안도감을 줍니다. 위선을 싫어하고 진솔함을 사랑하는 성향입니다.\n관계에서는 직급이나 나이보다 사람 자체를 보려는 태도를 지니고 있습니다. 그래서 격 없이 편안하게 지내는 친구가 많지만, 형식을 중시하는 자리에서는 속으로 웃음을 참느라 애를 먹기도 합니다. 때로는 이 솔직함이 오해를 부르기도 합니다.\n속마음은 체면을 내려놓아도 괜찮은 관계를 원합니다. 당신이 웃음으로 가리고 있는 것은 사실 진짜 얼굴로 사랑받고 싶은 마음입니다.",
    "en": "Because you know how heavy formality and face-saving can be, you laugh hardest when they slip a little. A dignified person's eccentric moment reassures you that everyone is human. You dislike hypocrisy and love candor.\nIn relationships you try to see the person rather than rank or age. You have many friends who feel easy and unceremonious, though in formal settings you struggle to keep from laughing inwardly. Sometimes your honesty is misunderstood.\nInside, you want a relationship where you can put down the front. What you hide behind laughter is really a wish to be loved with your true face.",
    "zh": "正因为你比谁都清楚体面和客套有多重，当它们稍稍崩塌的那一刻，你笑得最开心。端庄的人冒出的怪念头，让你感到安心：人人都有人情味。你讨厌虚伪，喜欢真诚。\n在关系里，你想看的是人本身，而不是职位或年纪。你有很多相处随意的朋友，但在讲究形式的场合，你常要拼命忍住笑。有时这份坦率也会引起误会。\n内心里，你想要一段可以放下面子的关系。你用笑声遮住的，其实是想以真实的面孔被爱。",
    "ja": "あなたは、格式や体面の重さを誰よりも知っているからこそ、それが少し崩れた瞬間に一番笑います。きちんとした人の意外な一面は、人は誰でも人間らしいという証拠のようで、安心を与えます。偽善を嫌い、率直さを愛する性質です。\n人間関係では、肩書きや年齢より人そのものを見ようとします。だから堅苦しくない気楽な友人が多い一方、形式を重んじる席では心の中で笑いをこらえるのに苦労します。その率直さが誤解を招くこともあります。\n心の奥では、体面を下ろしても大丈夫な関係を望んでいます。あなたが笑いで隠しているのは、本当の顔のままで愛されたいという気持ちです。",
    "es": "Como sabes mejor que nadie cuánto pesan la formalidad y las apariencias, te ríes más cuando se tambalean un poco. El momento excéntrico de alguien digno te tranquiliza: todos somos humanos. Detestas la hipocresía y amas la franqueza.\nEn las relaciones intentas ver a la persona, no el cargo ni la edad. Tienes muchos amigos con quienes todo es fácil y sin ceremonias, aunque en situaciones formales luchas por contener la risa por dentro. A veces tu franqueza se malinterpreta.\nPor dentro quieres una relación en la que puedas bajar la guardia. Lo que escondes tras la risa es, en realidad, el deseo de ser querido con tu verdadera cara."
   },
   "opp": "animal",
   "match": "prank",
   "rarity": 2.9,
   "need": "laugh"
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
    "ko": "작은 것 중독자",
    "en": "a tiny-things addict",
    "zh": "小东西成瘾者",
    "ja": "小さなもの中毒者",
    "es": "un adicto a las cosas pequeñas"
   },
   "inf": {
    "ko": "당신은 작은 것에서 큰 기쁨을 얻는 집중력 있는 사람입니다. 손바닥에 올라오는 크기의 세계는 통제할 수 있고, 안전하고, 온전히 내 것처럼 느껴지기 때문입니다. 세상이 너무 크게 느껴질 때 마음을 가라앉히는 방법을 알고 있다는 것입니다.\n성격은 섬세하고 디테일에 강해서 남들이 놓치는 부분을 알아봅니다. 완성도 높은 일 처리가 장점이고, 작은 변화에도 민감하게 반응합니다. 다만 사소한 것에 신경이 쏠려 큰 그림을 놓치거나, 작은 걱정이 필요 이상으로 커지는 일이 있습니다.\n속마음은 감당 가능한 크기의 세상을 원합니다. 작은 것을 아끼는 마음은 곧 자신의 평온을 지키려는 현명한 방어입니다.",
    "en": "You gain great joy from small things and have a strong focus. A world that fits in a palm feels controllable, safe and wholly yours, so you already know how to settle your mind when everything feels too large.\nDelicate and strong on detail, you notice what others miss. High-quality work is your strength, and you react to small changes. But attention to trifles can make you miss the big picture, and small worries can grow bigger than they need to be.\nWhat you want is a world of manageable size. Cherishing small things is a sensible defense for keeping your own peace.",
    "zh": "你能从小东西里得到很大的快乐，专注力很强。能放在手心的世界，让人觉得可控、安全、完全属于自己，所以你早就知道，当世界太大时怎样让心安定。\n你细腻，擅长细节，能注意到别人错过的地方。完成度高是你的优点，对细小的变化也很敏感。不过心思放在琐事上，容易错过大局，小担心也可能被放大。\n你想要的是一个大小刚好能应付的世界。珍惜小东西，是为守住自己的平静而做的明智防御。",
    "ja": "あなたは、小さなものから大きな喜びを得る集中力のある人です。手のひらに載る大きさの世界は、制御できて、安全で、完全に自分のものに感じられます。世界が大きすぎると感じるとき、心を落ち着かせる方法を知っているのです。\n性格は繊細で細部に強く、他人が見落とす部分に気づきます。完成度の高い仕事が長所で、小さな変化にも敏感です。ただ、些細なことに気を取られて全体を見失ったり、小さな心配が必要以上に大きくなったりすることがあります。\n心の奥の望みは、手に負える大きさの世界です。小さなものを大切にする気持ちは、自分の平穏を守る賢い防御です。",
    "es": "Obtienes gran alegría de lo pequeño y tienes mucha concentración. Un mundo que cabe en la palma de la mano parece controlable, seguro y totalmente tuyo, así que ya sabes cómo calmar la mente cuando todo se siente demasiado grande.\nDelicado y fuerte en el detalle, notas lo que otros pasan por alto. Tu punto fuerte es el trabajo bien acabado, y reaccionas a los cambios pequeños. Pero la atención a nimiedades puede hacerte perder la visión de conjunto, y las pequeñas preocupaciones crecer más de lo necesario.\nLo que quieres es un mundo de tamaño manejable. Apreciar lo pequeño es una defensa sensata para guardar tu paz."
   },
   "opp": "tough",
   "match": "food",
   "rarity": 4.2,
   "need": "view"
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
    "ko": "실속 있는 낭만가",
    "en": "a practical romantic",
    "zh": "务实的浪漫主义者",
    "ja": "実利派のロマンチスト",
    "es": "un romántico práctico"
   },
   "inf": {
    "ko": "당신은 낭만을 즐기면서도 마음 한구석에서 현실 감각이 작동하는 균형 잡힌 사람입니다. 쓸모없는 것에서도 아주 조금의 쓸모를 찾아내는 것은, 즐거움과 합리성 사이에서 스스로를 설득하는 방식이 몸에 배어 있다는 뜻입니다.\n사고방식은 실리적이고 계획적이며, 감정에 휩쓸리기보다 한 번 더 따져보는 편입니다. 그래서 주변에서는 믿고 맡길 수 있는 사람으로 통합니다. 다만 즐거운 일에도 명분이 있어야 마음이 편하기 때문에 순수하게 즐기는 일이 서툴 수 있습니다.\n속마음은 아무 이유 없이 좋아해도 된다는 허락을 원합니다. 오늘만큼은 쓸모를 따지지 않고 그냥 좋아하는 연습을 해보시기를 권합니다.",
    "en": "You enjoy romance while a sense of reality keeps working in a corner of your mind. Finding even a bit of use in the useless means you have grown used to persuading yourself between pleasure and reason.\nYou think practically and plan ahead, preferring to weigh things once more over being swept away by feeling. People see you as someone they can trust. But since you need a justification even for fun, enjoying things purely can come out awkward.\nInside, you want permission to like something for no reason at all. Today, try simply liking things without asking what they are good for.",
    "zh": "你享受浪漫，心里同时有现实感在运作。在无用之物里也找出一点用处，说明你已习惯在快乐与理性之间说服自己。\n你思考务实、有计划，比起被情绪带走，更习惯再权衡一次。所以周围把你当作可以托付的人。不过连快乐的事也需要一个理由才安心，纯粹地享受反而可能显得生疏。\n内心里，你想要一份许可：没有理由也可以喜欢。今天，试着不问有什么用，就只是喜欢吧。",
    "ja": "あなたは、ロマンを楽しみながら、心の片隅で現実感覚が働いているバランスの取れた人です。役に立たないものの中にもほんの少しの使い道を見つけるのは、楽しさと合理性の間で自分を納得させる方法が身についているということです。\n考え方は実利的で計画的、感情に流されず、もう一度よく考える方です。そのため周りから、安心して任せられる人と見られます。ただ、楽しいことにも名分があるほうが落ち着くので、純粋に楽しむのが少し苦手かもしれません。\n心の奥では、理由なんてなくても好きでいいという許しを望んでいます。今日は役に立つかどうかを問わず、ただ好きになる練習をしてみてください。",
    "es": "Disfrutas del romanticismo mientras el sentido de la realidad sigue trabajando en un rincón de tu mente. Encontrar un poco de utilidad hasta en lo inútil indica que te has acostumbrado a convencerte entre el placer y la razón.\nPiensas con practicidad y planificas, y prefieres sopesar una vez más antes que dejarte llevar por el sentimiento. Los demás te ven como alguien en quien se puede confiar. Pero como necesitas una justificación incluso para divertirte, disfrutar de forma pura puede resultarte torpe.\nPor dentro quieres permiso para que algo te guste sin motivo. Hoy, prueba a disfrutar sin preguntar para qué sirve."
   },
   "opp": "keep",
   "match": "craft",
   "rarity": 0.5,
   "need": "free"
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
    "ko": "익명 희망자",
    "en": "an applicant for anonymity",
    "zh": "匿名希望者",
    "ja": "匿名希望者",
    "es": "un aspirante al anonimato"
   },
   "inf": {
    "ko": "당신은 때때로 세상의 시선에서 사라지고 싶은 마음을 가진 사람입니다. 이는 소심해서가 아니라, 늘 보여지고 평가받는 일에 너무 많은 에너지를 쓰고 있기 때문입니다. 감수성이 풍부하고 타인의 시선을 민감하게 의식하는 성향입니다.\n겉으로는 사회성이 좋아 보여도, 혼자만의 공간에서 비로소 편안해지는 타입입니다. 가면을 쓰고 있어야 더 자유로워지는 역설도 있습니다. 그래서 속마음을 쉽게 드러내지 않지만, 한번 마음을 연 사람에게는 의외로 솔직합니다.\n속마음은 누구도 나를 알아보지 못하는 곳에서 잠시 쉬고 싶습니다. 숨는 것은 도망이 아니라 다시 나로 돌아오기 위한 재충전이라는 점을 기억하셨으면 합니다.",
    "en": "At times you wish to disappear from the world's gaze. That is not shyness. It is that being seen and judged all the time costs you a lot of energy. You are sensitive and keenly aware of others' eyes.\nYou may look sociable, yet you are the type who is truly comfortable in your own space. There is even a paradox where wearing a mask makes you freer. So you do not reveal your heart easily, but once you open up to someone you are unexpectedly honest.\nInside, you want a rest somewhere nobody recognizes you. Hiding is not running away. It is recharging so you can come back to yourself.",
    "zh": "你有时想从世界的目光中消失。这不是胆小，而是总被看见、被评价，消耗了你太多精力。你感受细腻，对他人的目光很敏感。\n外表看起来很擅长交际，其实是在独处的空间里才真正自在的类型。甚至有一个悖论：戴上面具反而更自由。所以你不轻易露出内心，但对敞开心扉的人，出人意料地坦诚。\n内心里，你想在没人认得你的地方休息一会儿。躲起来不是逃避，而是为了重新回到自己而充电。",
    "ja": "あなたは、ときどき世間の視線から消えたくなる人です。それは気が弱いからではなく、いつも見られ評価されることにあまりに多くのエネルギーを使っているからです。感受性が豊かで、他人の視線に敏感な性質です。\n外から見ると社交的でも、自分だけの空間でやっと安らぐタイプです。仮面をつけているほうが自由になれるという逆説もあります。だから本音を簡単には見せませんが、一度心を開いた人には意外なほど正直です。\n心の奥では、誰にも気づかれない場所でしばらく休みたいと思っています。隠れることは逃げではなく、また自分に戻るための充電だと覚えておいてください。",
    "es": "A veces deseas desaparecer de la mirada del mundo. No es timidez: es que ser visto y juzgado siempre te cuesta mucha energía. Eres sensible y muy consciente de los ojos ajenos.\nPuedes parecer sociable, pero eres de los que solo se sienten de verdad cómodos en su propio espacio. Incluso existe la paradoja de que llevar máscara te hace más libre. Por eso no muestras tu corazón con facilidad, aunque con quien te abres eres sorprendentemente sincero.\nPor dentro quieres descansar en un lugar donde nadie te reconozca. Esconderse no es huir: es recargar para volver a ti."
   },
   "opp": "prank",
   "match": "calm",
   "rarity": 0.6,
   "need": "cool"
  }
 ],
 "needs": {
  "cool": {
   "ko": "당신에겐 머리를 식히는 시간이 필요합니다.",
   "en": "What you need is a little time to cool your head.",
   "zh": "你需要的是一点让头脑降温的时间。",
   "ja": "あなたに必要なのは、頭を冷やす時間です。",
   "es": "Lo que necesitas es un rato para enfriar la cabeza."
  },
  "stim": {
   "ko": "당신에겐 따분한 일상을 달래줄 자극이 필요합니다.",
   "en": "What you need is a spark to soothe a dull routine.",
   "zh": "你需要的是一点刺激，来安抚乏味的日常。",
   "ja": "あなたに必要なのは、退屈な日常をなだめる刺激です。",
   "es": "Lo que necesitas es un estímulo que calme una rutina aburrida."
  },
  "laugh": {
   "ko": "당신에겐 아무 이유 없이 크게 웃을 일이 필요합니다.",
   "en": "What you need is something to laugh at for no reason at all.",
   "zh": "你需要的是一件毫无理由就能大笑的事。",
   "ja": "あなたに必要なのは、理由もなく大笑いできる何かです。",
   "es": "Lo que necesitas es algo de lo que reírte sin ningún motivo."
  },
  "comfort": {
   "ko": "당신에겐 말없이 기대어도 되는 존재가 필요합니다.",
   "en": "What you need is something you can lean on without a word.",
   "zh": "你需要的是一个可以不用开口就能依靠的存在。",
   "ja": "あなたに必要なのは、何も言わずにもたれかかれる存在です。",
   "es": "Lo que necesitas es algo en lo que apoyarte sin decir nada."
  },
  "play": {
   "ko": "당신에겐 아무 목적 없이 손을 움직이는 시간이 필요합니다.",
   "en": "What you need is time to move your hands with no purpose at all.",
   "zh": "你需要的是一段不带任何目的、只是动动手的时间。",
   "ja": "あなたに必要なのは、目的もなく手を動かす時間です。",
   "es": "Lo que necesitas es un tiempo para mover las manos sin ningún propósito."
  },
  "move": {
   "ko": "당신에겐 책상에서 일어나 뛰어놀 핑계가 필요합니다.",
   "en": "What you need is an excuse to leave the desk and go play.",
   "zh": "你需要的是一个离开书桌、出去玩的借口。",
   "ja": "あなたに必要なのは、机を離れて遊びに出る口実です。",
   "es": "Lo que necesitas es una excusa para dejar el escritorio e ir a jugar."
  },
  "role": {
   "ko": "당신에겐 잠시 다른 누군가가 되어볼 기회가 필요합니다.",
   "en": "What you need is a chance to be someone else for a while.",
   "zh": "你需要的是一个暂时成为另一个人的机会。",
   "ja": "あなたに必要なのは、しばらく別の誰かになれる機会です。",
   "es": "Lo que necesitas es la oportunidad de ser otra persona por un rato."
  },
  "wonder": {
   "ko": "당신에겐 세상이 아직 신비롭다는 작은 증거가 필요합니다.",
   "en": "What you need is small proof that the world is still mysterious.",
   "zh": "你需要的是一点小小的证据，证明这个世界依然神秘。",
   "ja": "あなたに必要なのは、世界はまだ不思議だという小さな証拠です。",
   "es": "Lo que necesitas es una pequeña prueba de que el mundo sigue siendo misterioso."
  },
  "sound": {
   "ko": "당신에겐 귓가를 채워줄 작은 소리가 필요합니다.",
   "en": "What you need is a small sound to fill your ears.",
   "zh": "你需要的是一个能填满耳畔的小小声音。",
   "ja": "あなたに必要なのは、耳元を満たしてくれる小さな音です。",
   "es": "Lo que necesitas es un pequeño sonido que llene tus oídos."
  },
  "free": {
   "ko": "당신에겐 쓸모를 따지지 않고 좋아해도 된다는 허락이 필요합니다.",
   "en": "What you need is permission to like something without asking what it is for.",
   "zh": "你需要的是一份许可：不问有什么用，也可以喜欢。",
   "ja": "あなたに必要なのは、役に立つかどうかを問わずに好きになっていいという許しです。",
   "es": "Lo que necesitas es permiso para querer algo sin preguntar para qué sirve."
  },
  "view": {
   "ko": "당신에겐 눈길이 머물 작은 풍경이 필요합니다.",
   "en": "What you need is a small view for your eyes to rest on.",
   "zh": "你需要的是一处能让目光停留的小小风景。",
   "ja": "あなたに必要なのは、視線が留まる小さな風景です。",
   "es": "Lo que necesitas es un pequeño paisaje donde descansar la vista."
  },
  "welcome": {
   "ko": "당신에겐 이상하고 어설퍼도 환영받는 자리가 필요합니다.",
   "en": "What you need is a place where being odd and clumsy is welcome.",
   "zh": "你需要的是一个古怪又笨拙也被欢迎的地方。",
   "ja": "あなたに必要なのは、変でぎこちなくても歓迎される居場所です。",
   "es": "Lo que necesitas es un lugar donde ser raro y torpe sea bienvenido."
  },
  "sturdy": {
   "ko": "당신에겐 오늘 하루 단단히 붙잡아 줄 든든한 무언가가 필요합니다.",
   "en": "What you need is something sturdy to hold on to today.",
   "zh": "你需要的是今天能牢牢抓住的、可靠的东西。",
   "ja": "あなたに必要なのは、今日をしっかり支えてくれる頼もしい何かです。",
   "es": "Lo que necesitas es algo firme a lo que agarrarte hoy."
  }
 }
};
