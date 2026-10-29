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
   "resultBuy": "테무에서 확인하기",
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
   "oppNote": "서로의 세계가 겹치지 않아서, 오히려 서로에게 배울 것이 많은 사이입니다.",
   "matchNote": "말하지 않아도 취향이 통해서, 같이 있으면 이상하게 편한 사이입니다.",
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
   "qn": "Question {n}",
   "yes": "Yes",
   "no": "No",
   "back": "Go back one",
   "reveal": "What is it?",
   "guessLead": "What you've wanted deep down is…",
   "resultLead": "It's what you've been waiting for, deep down.",
   "resultBuy": "Check it on Temu",
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
   "oppNote": "Your worlds barely overlap, which is exactly why you could learn from each other.",
   "matchNote": "Your tastes line up without a word, so being together feels strangely easy.",
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
   "qn": "第{n}个问题",
   "yes": "是的",
   "no": "不是",
   "back": "返回上一题",
   "reveal": "那是什么？",
   "guessLead": "你内心深处一直想要的是……",
   "resultLead": "这是你心底一直在等的东西。",
   "resultBuy": "去 Temu 查看",
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
   "oppNote": "你们的世界几乎不重叠，正因如此才有很多可以互相学习的地方。",
   "matchNote": "不用说话品味就相通，待在一起莫名轻松。",
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
   "qn": "{n}番目の質問",
   "yes": "はい",
   "no": "いいえ",
   "back": "ひとつ戻る",
   "reveal": "それは何ですか？",
   "guessLead": "あなたが心の奥で求めていたものは……",
   "resultLead": "心の奥でずっと待っていたものです。",
   "resultBuy": "Temuで見る",
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
   "oppNote": "世界がほとんど重ならないぶん、お互いから学べることが多い間柄です。",
   "matchNote": "言わなくても好みが通じ合って、一緒にいるとなぜか楽な間柄です。",
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
   "qn": "Pregunta {n}",
   "yes": "Sí",
   "no": "No",
   "back": "Volver atrás",
   "reveal": "¿Qué es?",
   "guessLead": "Lo que deseabas en lo más hondo es…",
   "resultLead": "Lo que llevabas tiempo esperando en el fondo.",
   "resultBuy": "Verlo en Temu",
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
   "oppNote": "Vuestros mundos casi no se solapan, y justo por eso podríais aprender mucho el uno del otro.",
   "matchNote": "Vuestros gustos coinciden sin decir nada, y estar juntos resulta extrañamente fácil.",
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
  "maxChoice": 5
 },
 "questions": [
  {
   "id": "useful",
   "text": {
    "ko": "쓸모없는 것을 좋아하는 것도 사랑입니다. 아무짝에도 쓸모없는 것까지, 당신은 받아들일 수 있습니까?",
    "en": "Loving useless things is still love. Can you accept even the utterly, completely useless?",
    "zh": "喜欢没用的东西，也是一种爱。就连彻头彻尾毫无用处的东西，你也能接受吗？",
    "ja": "役に立たないものを愛するのも、愛です。まったく何の役にも立たないものまで、受け入れられますか？",
    "es": "Amar lo inútil también es amar. ¿Podrías aceptar incluso lo completamente, absolutamente inútil?"
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
    "statue"
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
    "scary"
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
    "scary"
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
    "tough"
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
    "ko": "몸속을 들여다본다면, 뼈 쪽이 궁금합니까?",
    "en": "If you could peek inside a body, would you be curious about the bones?",
    "zh": "如果能看看身体里面，你更好奇骨头吗？",
    "ja": "体の中をのぞくなら、骨のほうが気になりますか？",
    "es": "Si pudieras mirar dentro de un cuerpo, ¿te daría más curiosidad el esqueleto?"
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
      "ceramic",
      "tiny",
      "storage",
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
      "prank",
      "cartoon",
      "phone",
      "costume"
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
      "plush",
      "frog",
      "toy"
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
      "storage",
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
      "prank",
      "sound",
      "scary",
      "magic"
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
      "doll",
      "cute",
      "plush"
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
      "zen",
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
      "prank",
      "costume",
      "game",
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
      "zen",
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
      "storage",
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
      "mold",
      "puzzle",
      "ceramic"
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
      "statue",
      "ceramic",
      "doll"
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
      "plush",
      "doll",
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
      "doll",
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
      "human",
      "prank"
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
      "zen",
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
      "cute",
      "zen"
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
      "funny_face",
      "prank"
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
      "prank",
      "toy",
      "game",
      "magic"
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
      "ceramic",
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
      "prank",
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
      "human",
      "prank"
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
      "wall",
      "zen",
      "ceramic"
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
      "costume",
      "prank"
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
      "magic",
      "game",
      "alien"
     ]
    }
   ]
  },
  {
   "id": "c_keep",
   "text": {
    "ko": "소중한 쓸데없는 물건이 생겼습니다. 어디에 둡니까?",
    "en": "You now own a precious, useless thing. Where does it go?",
    "zh": "你有了一件珍贵又没用的东西，会放在哪里？",
    "ja": "大切な役立たずの物ができました。どこに置きますか？",
    "es": "Tienes un objeto inútil y precioso. ¿Dónde lo pones?"
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
      "prank",
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
      "prank",
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
      "prank",
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
      "ceramic",
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
    "ko": "쇼핑몰에서 아무 쓸모 없는 물건 앞에 한참 서 있던 적이 있습니까?",
    "en": "Have you ever stood for ages in front of something completely pointless in a store?",
    "zh": "你有没有在商场里对着某个毫无用处的东西站了很久？",
    "ja": "お店で、まったく役に立たない物の前にしばらく立ち尽くしたことはありますか？",
    "es": "¿Alguna vez te has quedado un buen rato frente a algo totalmente inútil en una tienda?"
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
    "ko": "쓸데없다고 생각했던 선물이 의외로 오래 곁에 남은 적이 있습니까?",
    "en": "Has a gift you thought was pointless ended up staying with you for years?",
    "zh": "你有没有收到过一件觉得没用的礼物，结果却意外留在身边很多年？",
    "ja": "役に立たないと思った贈り物が、意外と長く手元に残ったことはありますか？",
    "es": "¿Algún regalo que creías inútil se quedó contigo muchísimo tiempo?"
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
    "ko": "\"그건 어디에 쓰는 거야?\"라는 질문을 받고 대답을 못 한 적이 있습니까?",
    "en": "Has anyone ever asked \"what is that even for?\" and you had no answer?",
    "zh": "有人问过你“那个是用来干嘛的？”而你答不上来吗？",
    "ja": "「それ、何に使うの？」と聞かれて、答えられなかったことはありますか？",
    "es": "¿Alguien te ha preguntado \"¿y eso para qué sirve?\" sin que supieras responder?"
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
    "ko": "쓸모 있는 선물을 받으면, 고맙지만 살짝 아쉽습니까?",
    "en": "When you get a useful gift, are you grateful but a little disappointed?",
    "zh": "收到实用的礼物时，你会既感谢又有点小失望吗？",
    "ja": "実用的な贈り物をもらうと、ありがたいけれど少しだけ物足りないですか？",
    "es": "Si te regalan algo útil, ¿lo agradeces pero te deja un poco con ganas de más?"
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
   "img": "",
   "prior": 0.221
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
   "img": "",
   "prior": 2.132
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
   "img": "",
   "prior": 3.222
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
   "img": "",
   "prior": 4.716
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
   "img": "",
   "prior": 4.173
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
   "img": "",
   "prior": 1.267
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
   "img": "",
   "prior": 1.689
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
   "img": "",
   "prior": 2.576
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
   "img": "",
   "prior": 1.954
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
   "img": "",
   "prior": 1.851
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
   "img": "",
   "prior": 2.648
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
   "img": "",
   "prior": 10.455
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
   "img": "",
   "prior": 1.079
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
   "img": "",
   "prior": 33.63
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
   "img": "",
   "prior": 3.621
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
   "img": "",
   "prior": 33.63
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
   "img": "",
   "prior": 4.158
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
   "img": "",
   "prior": 2.047
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
   "img": "",
   "prior": 2.815
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
   "img": "",
   "prior": 2.756
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
   "img": "",
   "prior": 1.665
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
   "img": "",
   "prior": 33.63
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
   "img": "",
   "prior": 5.055
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
   "img": "",
   "prior": 0.721
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
   "img": "",
   "prior": 1.287
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
   "img": "",
   "prior": 0.071
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
   "img": "",
   "prior": 1.784
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
   "img": "",
   "prior": 2.257
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
   "img": "",
   "prior": 1.659
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
   "img": "",
   "prior": 5.611
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
   "img": "",
   "prior": 1.365
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
   "img": "",
   "prior": 0.374
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
   "img": "",
   "prior": 0.546
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
   "img": "",
   "prior": 2.314
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
   "img": "",
   "prior": 1.23
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
   "img": "",
   "prior": 6.328
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
   "img": "",
   "prior": 2.189
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
   "img": "",
   "prior": 0.802
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
   "img": "",
   "prior": 0.68
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
   "img": "",
   "prior": 3.569
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
   "img": "",
   "prior": 0.275
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
   "img": "",
   "prior": 1.744
  },
  {
   "id": 43,
   "tags": [
    "monkey",
    "animal",
    "living",
    "sound",
    "scary",
    "useful"
   ],
   "name": {
    "ko": "오랑우탄의 형상을 한 비명",
    "en": "A Scream in the Shape of an Orangutan",
    "zh": "长成猩猩的尖叫",
    "ja": "オランウータンの姿をした悲鳴",
    "es": "Un grito con forma de orangután"
   },
   "line": {
    "ko": "비명에도 얼굴이 있어야 한다고 믿으십니다.",
    "en": "You believe even a scream should have a face.",
    "zh": "你相信连尖叫也该有一张脸。",
    "ja": "悲鳴にも顔があるべきだと信じておられます。",
    "es": "Crees que hasta un grito debe tener cara."
   },
   "origName": "아즈텍 데스 휘슬 오랑우탄",
   "url": "https://temu.to/k/ghm480s8akx",
   "urlByLang": {},
   "img": "",
   "prior": 0.978
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
   "img": "",
   "prior": 0.41
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
   "img": "",
   "prior": 0.49
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
   "img": "",
   "prior": 1.427
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
   "img": "",
   "prior": 1.058
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
   "img": "",
   "prior": 2.035
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
   "img": "",
   "prior": 0.429
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
   "img": "",
   "prior": 10.404
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
   "img": "",
   "prior": 0.581
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
   "img": "",
   "prior": 0.289
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
   "img": "",
   "prior": 0.328
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
   "img": "",
   "prior": 2.071
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
    "ko": "여든 해를 산 듯한 표정의 고양이 인형",
    "en": "A Cat Plush Who Looks Eighty Years Old",
    "zh": "一脸活了八十年的猫咪玩偶",
    "ja": "八十年生きたような顔の猫のぬいぐるみ",
    "es": "Un gato de peluche que parece tener ochenta años"
   },
   "line": {
    "ko": "오래 살아본 표정을 한 것에게 위로를 받는 분이시군요.",
    "en": "You are comforted by faces that look like they have lived long.",
    "zh": "你会被一脸沧桑的存在安慰到。",
    "ja": "長く生きたような顔に、慰められる方ですね。",
    "es": "Te consuelan los rostros que parecen haber vivido mucho."
   },
   "origName": "80세 고양이 봉제 인형",
   "url": "https://temu.to/k/gludcc6fsk7",
   "urlByLang": {},
   "img": "",
   "prior": 1.04
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
   "img": "",
   "prior": 0.066
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
   "img": "",
   "prior": 0.866
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
   "img": "",
   "prior": 2.812
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
   "img": "",
   "prior": 0.168
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
   "img": "",
   "prior": 0.436
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
   "img": "",
   "prior": 1.396
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
   "img": "",
   "prior": 1.346
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
   "img": "",
   "prior": 0.225
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
    "ko": "누군가 심각해지려 하면, 당신이 먼저 분위기를 풀어버리지 않습니까? 회의 중 엄숙한 침묵이 흐를 때 '지금 누가 의자를 삐걱거리면 전설이겠다'고 상상해 본 적도 있으실 겁니다. 긴장을 웃음으로 바꾸는 능력이고, 사람들은 모르는 사이에 당신 덕분에 숨을 쉽니다.",
    "en": "When someone is about to get serious, aren't you the first to lighten the mood? During a solemn silence in a meeting, you've probably imagined how legendary it would be if a chair creaked right now. You turn tension into laughter, and people breathe easier around you without knowing why.",
    "zh": "每当有人要变得严肃，抢先把气氛化开的不就是你吗？会议上一片肃穆的沉默时，你大概还想象过：“这时候谁的椅子吱呀一声，那就传奇了。”你擅长把紧张变成笑声，别人在不知不觉中，因为你才喘得过气。",
    "ja": "誰かが深刻になりかけると、先に空気をほぐしてしまうのはあなたではありませんか？会議で厳かな沈黙が流れたとき、「今だれかの椅子がきしんだら伝説だな」と想像したこともあるでしょう。緊張を笑いに変える力であり、周りの人は知らないうちにあなたのおかげで息ができています。",
    "es": "Cuando alguien está a punto de ponerse serio, ¿no eres tú quien relaja el ambiente primero? En un silencio solemne de reunión, seguro que has imaginado lo legendario que sería que crujiera una silla justo ahora. Conviertes la tensión en risa, y los demás respiran mejor sin saber por qué."
   },
   "opp": "calm",
   "match": "human",
   "rarity": 4.4
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
    "ko": "완벽하게 잘생긴 것보다, 어딘가 한 군데 사고 친 듯한 얼굴에 정이 가지 않습니까? 길 가다 이상하게 생긴 간판이나 표정을 발견하면 속으로 저장해 두는 편이실 겁니다. 완벽하지 않은 것을 너그럽게 보는 마음이고, 당신은 자신의 빈틈에도 은근히 관대한 사람입니다.",
    "en": "Don't you warm up more to a face that looks like it just caused trouble than to a perfectly handsome one? When you spot a strangely shaped sign or an odd expression on the street, you probably save it in your head. You look kindly on imperfection, which means you're quietly generous with your own flaws too.",
    "zh": "比起完美的帅气，你是不是更对一张像刚闯过祸的脸有好感？走在路上看到长得奇怪的招牌或表情，你大概会在心里默默收藏。你对不完美的东西很宽容，说明你对自己的破绽也悄悄地很宽容。",
    "ja": "完璧に整った顔より、どこか一つやらかしたような顔に情が湧きませんか？道で変わった形の看板や表情を見つけると、心の中に保存しておくタイプでしょう。完璧でないものに寛容な心の持ち主で、自分の隙にもひそかに優しい人です。",
    "es": "¿No te cae mejor una cara que parece haber liado una que una perfectamente guapa? Si ves un cartel de forma rara o un gesto extraño por la calle, seguro que lo guardas en la memoria. Miras con cariño lo imperfecto, lo que significa que también eres generoso con tus propios fallos."
   },
   "opp": "useful",
   "match": "craft",
   "rarity": 1.7
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
    "ko": "가끔 '지금과 완전히 다른 사람으로 하루만 살아보면 어떨까' 하고 상상하지 않습니까? 거울 앞에서 모자 하나만 써도 표정이 달라지는 걸 은근히 즐기시지요. 지금의 나를 잠시 내려놓고 쉬고 싶은 마음이자, 새로운 가능성을 놓지 않는 호기심입니다.",
    "en": "Do you sometimes wonder what it would be like to live as a completely different person for one day? Putting on a single hat in front of the mirror and watching your expression change is a small joy for you. It's a wish to set yourself down for a moment, and a curiosity that never gives up on new possibilities.",
    "zh": "你有时会不会想：“如果能做一天完全不同的人会怎样？”在镜子前只戴上一顶帽子，表情就变了，你悄悄享受这一点。这既是想暂时放下现在的自己、歇一歇的心情，也是不放弃新可能的好奇心。",
    "ja": "ときどき「今とまったく違う人として一日だけ生きてみたら」と想像しませんか？鏡の前で帽子を一つかぶるだけで表情が変わるのを、ひそかに楽しんでいるはずです。今の自分をしばらく下ろして休みたい気持ちであり、新しい可能性を手放さない好奇心でもあります。",
    "es": "¿A veces te preguntas cómo sería vivir un solo día como una persona totalmente distinta? Te gusta, en secreto, ver cómo cambia tu cara con solo ponerte un sombrero frente al espejo. Es el deseo de dejar un momento de lado al yo de siempre, y una curiosidad que no renuncia a nuevas posibilidades."
   },
   "opp": "wall",
   "match": "magic",
   "rarity": 12
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
    "ko": "'눈에 보이는 것이 전부'라는 말을 들으면 속으로 '글쎄요' 하고 대답하는 분입니다. 마술사가 손수건을 흔들면 트릭을 밝혀내기보다 일단 놀라는 쪽을 택하시지요. 호기심이 쉽게 마르지 않는다는 증거이며, 세상을 조금 더 재미있게 보는 재능입니다.",
    "en": "When someone says what you see is all there is, you quietly answer 'well, I'm not so sure.' When a magician waves a handkerchief, you'd rather be amazed than expose the trick. Your curiosity doesn't dry up easily, and it's a talent for seeing the world as a little more fun.",
    "zh": "听到“眼见为实”，你心里会回一句：“未必吧。”魔术师挥动手帕时，比起拆穿把戏，你更愿意先惊讶一下。这证明你的好奇心不容易枯竭，也是一种把世界看得更有趣的天赋。",
    "ja": "「見えるものがすべて」と言われると、心の中で「どうでしょう」と返す人です。マジシャンがハンカチを振れば、タネを暴くより先に驚くほうを選びますね。好奇心が簡単には枯れない証拠で、世界を少し面白く見る才能です。",
    "es": "Cuando te dicen que lo que ves es todo lo que hay, contestas por dentro: «no sé yo». Si un mago agita un pañuelo, prefieres asombrarte antes que descubrir el truco. Tu curiosidad no se seca fácilmente, y es un talento para ver el mundo un poco más divertido."
   },
   "opp": "useful",
   "match": "costume",
   "rarity": 6.3
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
    "ko": "무서운 장면이 나오면 눈을 가리면서도 손가락 사이로 끝까지 보는 분입니다. 오싹한 것 앞에서 이상하게 눈이 반짝이지요. 두려운 것을 일부러 들여다보는 건 불안을 다루는 꽤 건강한 방법이고, 당신은 무서움마저 취향으로 소화하는 사람입니다.",
    "en": "At a scary scene, you cover your eyes and still watch to the end through your fingers. Something chilling makes your eyes oddly sparkle. Looking straight at what frightens you is a rather healthy way to handle anxiety, and you're someone who turns even fear into a taste.",
    "zh": "出现恐怖画面时，你一边捂眼，一边还是从指缝里看到最后。面对毛骨悚然的东西，你的眼睛反而会发亮。主动直视害怕的东西，是处理不安相当健康的方式，你甚至能把恐惧消化成自己的品味。",
    "ja": "怖いシーンでは目を覆いながら、指の間から最後まで見てしまう人です。ぞっとするものを前にすると、なぜか目が輝きますね。怖いものをあえて見つめるのは、不安と付き合うかなり健康な方法で、あなたは恐怖さえ好みに変えられる人です。",
    "es": "En una escena de miedo te tapas los ojos, pero miras hasta el final entre los dedos. Ante algo escalofriante, tus ojos brillan de forma extraña. Mirar de frente lo que asusta es una forma bastante sana de manejar la ansiedad, y tú conviertes hasta el miedo en gusto."
   },
   "opp": "soft",
   "match": "alien",
   "rarity": 4.5
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
    "ko": "외계 생명체가 문을 두드린다면, 당신은 도망치기 전에 일단 차부터 대접할 분입니다. 낯선 존재를 경계보다 호기심으로 맞이하는 쪽이지요. 마음이 넓게 열려 있다는 뜻이고, 다만 가끔은 마음을 너무 쉽게 내주지 않도록 조심하셔야 합니다.",
    "en": "If an alien knocked on your door, you'd offer it tea before even thinking of running. You greet strangers with curiosity instead of suspicion. It means your heart is wide open, though you might want to be careful not to give it away too easily.",
    "zh": "如果外星生物来敲门，你会在逃跑之前先给它泡杯茶。面对陌生的存在，你用好奇而不是戒备去迎接。这说明你的心门开得很大，只是偶尔也要小心，别把心交出去得太轻易。",
    "ja": "もし宇宙人がドアを叩いたら、逃げる前にまずお茶を出す人です。見知らぬ存在を、警戒より好奇心で迎えるタイプですね。心が広く開いている証拠ですが、ときどきは心をあまり簡単に差し出さないようご注意を。",
    "es": "Si un extraterrestre llamara a tu puerta, le ofrecerías té antes de pensar en huir. Recibes a lo desconocido con curiosidad en lugar de recelo. Significa que tu corazón está muy abierto, aunque conviene que no lo entregues con demasiada facilidad."
   },
   "opp": "tough",
   "match": "magic",
   "rarity": 3.8
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
    "ko": "빠른 세상에서 오래되고 조용한 것 앞에 서면 걸음이 저절로 느려지지 않습니까? 시끄러운 하루 끝에 아무 말 없이 한곳을 바라보는 시간이 가장 편하시지요. 쉴 곳을 찾는 마음이고, 당신은 조용함을 일부러 챙길 줄 아는 사람입니다.",
    "en": "In a fast world, don't your steps slow down in front of something old and quiet? After a noisy day, the time you spend staring at one spot without a word is the most comfortable. It's the heart looking for a place to rest, and you know how to protect your quiet on purpose.",
    "zh": "在飞快的世界里，站在古老安静的东西面前，脚步是不是会不自觉放慢？吵闹的一天结束后，一句话也不说、静静望着一处的时间最让你舒服。这是在寻找歇脚之处的心，你懂得有意识地为自己留一份安静。",
    "ja": "速い世の中で、古くて静かなものの前に立つと、歩みが自然とゆっくりになりませんか？騒がしい一日の終わりに、何も言わず一か所を眺める時間がいちばん落ち着くはずです。休める場所を探す心であり、あなたは静けさをわざわざ確保できる人です。",
    "es": "En un mundo veloz, ¿no se te frenan los pasos ante algo antiguo y silencioso? Al final de un día ruidoso, lo que más descansa es mirar un punto sin decir nada. Es un corazón que busca dónde reposar, y tú sabes reservarte el silencio a propósito."
   },
   "opp": "prank",
   "match": "wall",
   "rarity": 5.7
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
    "ko": "쓸모가 없다는 이유만으로 물건을 버리지 못한 적이 있으시지요. 이사할 때마다 '이건 어디에 쓰지' 하면서도 결국 박스에 다시 넣습니다. 효율보다 애착을 믿는 사람의 방식이고, 당신 곁에 오래 머무는 것들에는 다 이유가 있습니다.",
    "en": "You've held onto things for no reason other than that they're useless. Every time you move, you ask 'what is this even for?' and still put it back in the box. It's the way of someone who trusts attachment over efficiency, and everything that stays near you has its reasons.",
    "zh": "你有没有因为“没用”而舍不得扔掉某样东西？每次搬家都念叨“这个能拿来干嘛”，最后还是放回箱子。这是相信眷恋胜过效率的人的做法，留在你身边的东西，每一件都有它的理由。",
    "ja": "役に立たないというだけの理由で、物を捨てられなかったことがありますよね。引っ越しのたびに「これ何に使うんだろう」と言いながら、結局また箱に戻します。効率より愛着を信じる人のやり方で、あなたのそばに長くいるものには、すべて理由があります。",
    "es": "Seguro que alguna vez no has podido tirar algo solo porque era inútil. En cada mudanza dices «¿para qué sirve esto?» y lo vuelves a meter en la caja. Es la forma de quien confía más en el apego que en la eficiencia, y todo lo que permanece a tu lado tiene su razón."
   },
   "opp": "useful",
   "match": "calm",
   "rarity": 0.6
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
    "ko": "반듯한 공장제품보다 손으로 빚은 삐뚤빼뚤한 것에 마음이 가는 분입니다. 어딘가 어설픈 흔적에서 '사람이 만들었구나' 하는 온기를 느끼시지요. 사람 냄새 나는 것에서 위로를 받는다는 뜻이고, 완벽하지 않은 것을 귀하게 여기는 눈을 가지셨습니다.",
    "en": "You're drawn to a wobbly handmade thing more than a neat factory product. In a slightly clumsy trace, you feel the warmth of 'a person made this.' It means you find comfort in things that feel human, and you have an eye that treasures the imperfect.",
    "zh": "比起方方正正的工厂制品，你更偏爱手工捏出来歪歪扭扭的东西。从有点笨拙的痕迹里，你能感到“这是人做的”那种温度。这说明你从有人味的东西里获得安慰，也有一双珍惜不完美的眼睛。",
    "ja": "整った工場製品より、手で作ったいびつなものに心が向く人です。どこか不器用な跡に「人が作ったんだな」というぬくもりを感じますね。人の匂いがするものに慰められるということで、完璧でないものを大切にする目を持っています。",
    "es": "Te atrae más lo hecho a mano y torcido que el producto de fábrica perfecto. En una huella algo torpe sientes el calor de «esto lo hizo una persona». Significa que te consuela lo humano, y tienes ojo para valorar lo imperfecto."
   },
   "opp": "sound",
   "match": "keep",
   "rarity": 11.1
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
    "ko": "스트레스가 쌓인 날, 폭신한 것을 아무 이유 없이 꽉 안고 있지 않습니까? 손에 닿는 말랑한 감촉이 하루치 긴장을 조금 풀어주지요. 포근함에 기대는 건 안정감을 찾는 가장 오래된 방법으로, 부끄러워하실 일이 아니라 꽤 영리한 자기 돌봄입니다.",
    "en": "On a stressful day, don't you hug something fluffy tightly for no reason at all? That squishy feel in your hands loosens a day's worth of tension. Leaning on softness is one of the oldest ways to find calm, and it's no embarrassment but rather clever self-care.",
    "zh": "压力大的日子，你是不是会无缘无故紧紧抱着软绵绵的东西？手里那种软软的触感，能让一天的紧绷松开一点。依靠柔软是寻找安全感最古老的方法之一，这不是丢脸的事，而是相当聪明的自我照顾。",
    "ja": "ストレスの多い日、理由もなくふわふわしたものをぎゅっと抱きしめていませんか？手に触れるやわらかい感触が、一日分の緊張を少しほどいてくれます。やわらかさに頼るのは安心を得るいちばん古い方法で、恥ずかしいことではなく、なかなか賢いセルフケアです。",
    "es": "En un día de estrés, ¿no abrazas fuerte algo blandito sin motivo? Esa textura mullida entre las manos afloja un poco la tensión del día. Apoyarse en lo suave es una de las formas más antiguas de encontrar calma, y no es motivo de vergüenza sino un autocuidado bastante inteligente."
   },
   "opp": "scary",
   "match": "cat",
   "rarity": 6.3
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
    "ko": "당신은 먼저 다가오는 존재보다 '내가 허락하면 곁에 있게 해주겠다'는 태도의 존재에게 끌립니다. 도도한 눈빛에 무시당해도 이상하게 기분이 나쁘지 않으시지요. 가까워지는 데 시간이 걸려도 오래 가는 관계를 좋아한다는 뜻이고, 한번 마음을 주면 꽤 깊은 분입니다.",
    "en": "You're drawn less to those who rush toward you and more to those with an attitude of 'I'll let you stay near me if I allow it.' Even when a haughty glance ignores you, it oddly doesn't bother you. It means you like relationships that take time but last, and once you give your heart, you go deep.",
    "zh": "比起主动凑过来的存在，你更被那种“我允许了你才能待在旁边”的态度吸引。就算被傲慢的眼神无视，你也莫名不觉得难受。这说明你喜欢需要时间却能长久的关系，一旦交出真心，就相当深。",
    "ja": "あなたは、すぐ寄ってくる存在より「私が許したらそばにいさせてあげる」という態度の存在に惹かれます。気高い視線に無視されても、なぜか嫌な気分になりませんね。親しくなるのに時間がかかっても長続きする関係が好きということで、一度心を許すとかなり深い人です。",
    "es": "Te atraen menos los que se lanzan hacia ti y más los que tienen una actitud de «te dejo estar cerca si yo quiero». Aunque una mirada altiva te ignore, curiosamente no te molesta. Significa que prefieres relaciones lentas pero duraderas, y que, cuando entregas tu corazón, lo haces a fondo."
   },
   "opp": "tough",
   "match": "soft",
   "rarity": 6.4
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
    "ko": "개구리는 웅크렸다가 뛰는 존재입니다. 당신도 도약 전에 충분히 웅크리는 시간이 필요한 분이 아닙니까? 남들에게는 가만히 있는 것처럼 보여도, 속으로는 점프 준비가 한창이시지요. 조급해하지 않고 때를 기다릴 줄 아는 태도는 은근한 장점입니다.",
    "en": "A frog crouches before it leaps. Aren't you someone who needs plenty of crouching time before a jump? To others you may look like you're just sitting still, but inside the jump preparations are in full swing. Waiting for the right moment without rushing is a quiet strength.",
    "zh": "青蛙是先蹲下再跳起来的存在。你是不是也需要充分蹲伏之后才跳得起来？在别人眼里你好像一动不动，其实心里的起跳准备正忙得热火朝天。不着急、懂得等待时机，是一项悄悄的优点。",
    "ja": "カエルはうずくまってから跳ぶ生き物です。あなたも、跳ぶ前にたっぷりうずくまる時間が必要な人ではありませんか？周りには静かにしているように見えても、心の中ではジャンプの準備が真っ最中です。焦らず時を待てる姿勢は、さりげない長所です。",
    "es": "La rana se agazapa antes de saltar. ¿No eres tú de los que necesitan mucho tiempo agachados antes de dar el salto? Para los demás pareces quieto, pero por dentro la preparación del salto va a toda marcha. Saber esperar el momento sin prisa es una virtud discreta."
   },
   "opp": "outdoor",
   "match": "cat",
   "rarity": 3.2
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
    "ko": "동물 영상 하나에 하루의 피로가 풀린 적이 있으시지요. 평소에는 감정을 꽤 단단히 눌러두면서도, 동물 앞에서는 말투부터 달라집니다. 마음 한구석에 아무 조건 없이 다정해지고 싶은 부분이 있다는 신호이고, 당신의 가장 부드러운 면은 그곳에 숨어 있습니다.",
    "en": "A single animal video has melted away a whole day's fatigue for you. You usually keep your feelings pressed down quite firmly, yet around animals even your way of speaking changes. It signals a corner of your heart that wants to be unconditionally tender, and your softest side hides there.",
    "zh": "你有过看一条动物视频就消解了一整天疲惫的时候。平时你把情绪压得很紧，可在动物面前，连说话的语气都变了。这说明心里有一角，想毫无条件地温柔，而你最柔软的一面就藏在那里。",
    "ja": "動物の動画一つで、一日の疲れが取れたことがありますよね。普段は感情をかなりしっかり抑えているのに、動物の前では口調から変わります。心の片隅に、何の条件もなく優しくなりたい部分があるというサインで、あなたのいちばん柔らかい面はそこに隠れています。",
    "es": "Un solo vídeo de animales te ha quitado el cansancio de todo un día. Normalmente mantienes tus emociones bien contenidas, pero ante un animal hasta cambia tu forma de hablar. Es señal de que en un rincón del corazón quieres ser tierno sin condiciones, y tu lado más suave se esconde ahí."
   },
   "opp": "human",
   "match": "soft",
   "rarity": 0.5
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
    "ko": "화려한 것보다 투박해도 믿음직한 존재 쪽에 눈이 갑니다. 말없이 곁을 지키는 든든함 앞에서 마음이 놓이시지요. 겉모습보다 행동을 믿는 사람이라는 뜻이고, 당신 자신도 은근히 그런 든든한 사람으로 기억되고 있을 겁니다.",
    "en": "Your eyes go to something rugged but dependable rather than something flashy. You feel at ease before a sturdy presence that stays by your side without a word. It means you trust actions over appearances, and you yourself are probably quietly remembered as that kind of dependable person.",
    "zh": "比起华丽的东西，你的目光更落在粗犷却可靠的存在上。面对默默守在身边的踏实感，你会安下心来。这说明你相信行动胜过外表，而你自己在别人心里，大概也悄悄是那样可靠的人。",
    "ja": "華やかなものより、無骨でも頼もしい存在に目が向きます。黙ってそばを守ってくれる心強さの前で、気持ちが落ち着きますね。見た目より行動を信じる人ということで、あなた自身もひそかにそんな頼もしい人として記憶されているはずです。",
    "es": "Tus ojos van hacia lo rudo pero fiable antes que hacia lo vistoso. Te tranquiliza esa solidez que te acompaña sin decir nada. Significa que confías más en los actos que en las apariencias, y seguramente tú también eres recordado en silencio como alguien así de fiable."
   },
   "opp": "soft",
   "match": "outdoor",
   "rarity": 3.8
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
    "ko": "당신은 어떤 소리 하나에 갑자기 기분이 바뀌는 분입니다. 빗소리나 개구리 울음, 혹은 평소 못 듣던 이상한 효과음에 귀가 먼저 반응하시지요. 감각이 섬세하고 분위기에 민감하다는 뜻이고, 같은 하루도 당신에게는 남들보다 풍성하게 들립니다.",
    "en": "A single sound can suddenly change your mood. Rain, a frog's croak, or some strange sound effect you never hear makes your ears react first. It means your senses are delicate and attuned to atmosphere, and the same day sounds richer to you than to others.",
    "zh": "某一个声音，就能让你的心情骤然改变。雨声、蛙鸣，或者平时听不到的奇怪音效，你的耳朵总是最先有反应。这说明你感官细腻、对氛围敏感，同样的一天，在你耳中比别人听起来更丰富。",
    "ja": "あなたは、ある音一つで急に気分が変わる人です。雨音やカエルの鳴き声、普段聞かない妙な効果音に、耳が先に反応しますね。感覚が繊細で雰囲気に敏感ということで、同じ一日でも、あなたには人より豊かに聞こえています。",
    "es": "Un solo sonido puede cambiarte el ánimo de golpe. La lluvia, el croar de una rana o algún efecto de sonido raro que nunca oyes: tus oídos reaccionan primero. Significa que tus sentidos son delicados y sensibles al ambiente, y el mismo día te suena más rico que a los demás."
   },
   "opp": "wall",
   "match": "play",
   "rarity": 3.5
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
    "ko": "회의 중에 손에 쥔 펜을 계속 돌리거나, 아무 생각 없이 뭔가를 맞추고 만지는 시간이 좋으시지요. 손이 바빠야 머리가 쉬는 타입입니다. 손을 쓰며 노는 시간은 생각을 잠시 쉬게 하는 가장 좋은 방법이고, 당신은 그것을 본능적으로 알고 있습니다.",
    "en": "In meetings you keep spinning the pen in your hand, and you love time spent fitting and fiddling with things without thinking. You're the type whose head rests only when the hands are busy. Playing with your hands is the best way to give your thoughts a break, and you know it by instinct.",
    "zh": "开会时你总在手里转笔，也喜欢什么都不想、只管拼拼摸摸的时间。你是手忙起来，脑子才能休息的类型。动手玩耍是让思绪歇一歇的最好方法，而你凭本能就知道这一点。",
    "ja": "会議中に手に持ったペンをずっと回したり、何も考えずに何かを組み合わせたり触ったりする時間が好きですよね。手が忙しいと頭が休まるタイプです。手を使って遊ぶ時間は、考えをしばらく休ませる最高の方法で、あなたはそれを本能的に知っています。",
    "es": "En las reuniones no paras de girar el bolígrafo, y te encanta pasar un rato encajando y toqueteando cosas sin pensar. Eres de los que descansan la cabeza solo cuando las manos están ocupadas. Jugar con las manos es la mejor forma de dar un respiro a los pensamientos, y lo sabes por instinto."
   },
   "opp": "calm",
   "match": "outdoor",
   "rarity": 3.4
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
    "ko": "어른이 되었지만 놀이터 앞을 지나가면 발이 먼저 반응하는 분입니다. 공을 던지고 몸을 움직이며 노는 시간이 결코 유치하지 않다는 걸 아시지요. 노는 법을 잊지 않은 어른은 스트레스를 훨씬 가볍게 지나가고, 당신은 그 점에서 이미 한 수 위입니다.",
    "en": "You're grown up, but walking past a playground still makes your feet react first. You know that throwing a ball and moving around isn't childish at all. Adults who haven't forgotten how to play get through stress far more lightly, and you're already a step ahead there.",
    "zh": "虽然已经是大人，路过游乐场时你的脚还是会先有反应。你明白，扔球、活动身体地玩耍一点也不幼稚。没有忘记怎么玩的大人，面对压力要轻松得多，在这一点上你已经高出一筹。",
    "ja": "大人になったのに、遊び場の前を通ると足が先に反応する人です。ボールを投げて体を動かして遊ぶ時間が、決して子どもっぽくないと知っていますね。遊び方を忘れない大人はストレスをずっと軽く乗り越えられ、その点であなたはすでに一枚上手です。",
    "es": "Eres adulto, pero al pasar junto a un parque infantil tus pies reaccionan primero. Sabes que lanzar una pelota y moverte jugando no tiene nada de infantil. Los adultos que no olvidan cómo jugar pasan el estrés con mucha más ligereza, y en eso ya vas un paso por delante."
   },
   "opp": "frog",
   "match": "play",
   "rarity": 1
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
    "ko": "음식 모양 장난감이 웃고 있으면 왠지 먹기 미안해지는 분입니다. 사물에도 표정이 있다고 믿고, 그 표정에 쉽게 마음을 빼앗기시지요. 공감 능력이 남들보다 넓게 작동한다는 뜻이고, 그래서 당신 곁의 사람들은 이해받는다는 기분을 자주 느낍니다.",
    "en": "If a food-shaped toy is smiling, you feel strangely sorry to eat it. You believe even objects have expressions, and those expressions easily steal your heart. It means your empathy works wider than most people's, which is why those around you often feel understood.",
    "zh": "如果食物造型的玩具在笑，你就莫名觉得不好意思吃它。你相信连物件也有表情，并且很容易被那些表情夺走心神。这说明你的共情能力比别人覆盖得更广，所以你身边的人常常觉得被理解。",
    "ja": "食べ物の形のおもちゃが笑っていると、なんだか食べるのが申し訳なくなる人です。物にも表情があると信じ、その表情に簡単に心を奪われますね。共感力が人より広く働くということで、だからあなたのそばにいる人は、よく理解されていると感じます。",
    "es": "Si un juguete con forma de comida sonríe, te da pena comértelo. Crees que hasta los objetos tienen expresión, y esas expresiones te roban el corazón con facilidad. Significa que tu empatía abarca más que la de otros, y por eso quienes te rodean se sienten comprendidos."
   },
   "opp": "scary",
   "match": "tiny",
   "rarity": 3.4
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
    "ko": "남의 집에 놀러 가서도 벽에 걸린 그림이나 액자를 한참 바라보다 대화를 놓친 적이 있으시지요. 혼자 가만히 바라보는 시간에서 오히려 에너지를 얻습니다. 사람들 사이에서 지친 마음을 조용히 충전하는 방식이고, 당신은 그 방식을 이미 알고 있습니다.",
    "en": "Even at someone else's home, you've stared at a picture or frame on the wall so long you missed the conversation. You actually gain energy from time spent gazing quietly alone. It's your way of quietly recharging a heart worn out by people, and you already know it.",
    "zh": "就算去别人家做客，你也有过盯着墙上的画或相框看了半天，结果错过了谈话的时候。你反而能从独自静静凝视的时间里获得能量。这是你在人群里悄悄给疲惫的心充电的方式，而你早已懂得。",
    "ja": "人の家に遊びに行っても、壁にかかった絵や額縁を長いこと眺めて会話を聞き逃したことがありますよね。一人で静かに眺める時間から、むしろエネルギーをもらいます。人の中で疲れた心を静かに充電する方法で、あなたはそのやり方をすでに知っています。",
    "es": "Incluso visitando una casa ajena, te has quedado mirando un cuadro o un marco en la pared tanto rato que te perdiste la conversación. Más bien ganas energía en los momentos de contemplación tranquila a solas. Es tu forma de recargar en silencio un corazón cansado de gente, y ya la conoces."
   },
   "opp": "costume",
   "match": "calm",
   "rarity": 10.2
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
    "ko": "점잖은 자리에서 누군가 엉뚱한 행동을 하면, 웃음을 참느라 어깨가 떨린 적이 있으시지요. 엄숙한 것이 무너지는 순간이 이상하게 사랑스럽습니다. 규칙과 격식이 가끔은 답답하다는 마음이고, 당신은 자유로움이 가장 먼저 올라오는 사람입니다.",
    "en": "When someone does something absurd in a dignified setting, your shoulders have shaken from holding in laughter. The moment solemnity collapses is strangely lovable to you. It means rules and formality sometimes feel stuffy, and freedom is the first thing that rises up in you.",
    "zh": "在庄重的场合里，有人做出离谱的举动时，你有过憋笑憋到肩膀发抖的经历。庄严崩塌的那一刻，不知为何格外可爱。这说明规矩和礼数有时让你觉得憋闷，而自由是你心里最先冒出来的东西。",
    "ja": "かしこまった場で誰かが突拍子もないことをすると、笑いをこらえて肩が震えたことがありますよね。厳かなものが崩れる瞬間が、なぜか愛おしい。決まりや格式がときどき窮屈だという気持ちで、あなたは自由がいちばん先に顔を出す人です。",
    "es": "Cuando alguien hace algo disparatado en un ambiente formal, se te han temblado los hombros por aguantar la risa. El momento en que lo solemne se desmorona te resulta curiosamente adorable. Significa que las normas y la formalidad a veces te agobian, y que la libertad es lo primero que te sale."
   },
   "opp": "animal",
   "match": "prank",
   "rarity": 1.9
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
    "ko": "손바닥만 한 것 앞에서 눈이 반짝이고, 작을수록 더 소중해 보이지 않습니까? 서랍 속에 작은 물건 하나쯤은 꼭 숨겨두고 가끔 꺼내 보시지요. 세세한 것을 놓치지 않는 눈을 가졌다는 뜻이고, 당신은 큰 것보다 작은 디테일에서 행복을 발견하는 사람입니다.",
    "en": "Your eyes light up before something palm-sized, and doesn't the smaller it is, the more precious it seems? You surely hide at least one tiny object in a drawer and take it out now and then. It means you have an eye that misses no detail, and you find happiness in small details rather than big things.",
    "zh": "面对巴掌大的东西，你的眼睛会发亮，越小是不是越显得珍贵？抽屉里你一定藏着至少一件小东西，偶尔拿出来看看。这说明你有一双不放过细节的眼睛，比起大的东西，你更能在小细节里发现幸福。",
    "ja": "手のひらサイズのものの前で目が輝き、小さいほど大切に見えませんか？引き出しの中には小さな物を一つ隠しておいて、ときどき取り出して眺めるでしょう。細かいことを見逃さない目を持っているということで、大きなものより小さなディテールに幸せを見つける人です。",
    "es": "Se te iluminan los ojos ante algo del tamaño de una palma, y cuanto más pequeño, más valioso te parece. Seguro que escondes en un cajón algún objeto diminuto y lo sacas de vez en cuando. Significa que tienes ojo para el detalle, y encuentras la felicidad más en lo pequeño que en lo grande."
   },
   "opp": "tough",
   "match": "food",
   "rarity": 4.5
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
    "ko": "쓸모없는 것을 좋아한다면서도, 마음 한구석에서는 '그래도 아주 조금은 쓸모가 있으면 좋겠다'고 속삭이는 분입니다. 낭만을 사랑하지만 현실도 놓지 않으시지요. 그 균형 감각이 당신의 힘이고, 쓸데없는 것도 당신 손에서는 은근히 쓸모 있어집니다.",
    "en": "You say you like useless things, yet a corner of your mind whispers 'it'd be nice if it were at least a little useful.' You love romance but never let go of reality. That sense of balance is your strength, and even useless things quietly become useful in your hands.",
    "zh": "你嘴上说喜欢没用的东西，心里一角却在小声说：“不过要是能有一点点用就好了。”你热爱浪漫，却也不丢下现实。这份平衡感就是你的力量，连没用的东西到你手里，也悄悄变得有用起来。",
    "ja": "役に立たないものが好きと言いながら、心の片隅では「それでもほんの少しは役に立ってほしい」とささやく人です。ロマンを愛しつつ、現実も手放しません。そのバランス感覚があなたの力で、役に立たないものも、あなたの手にかかるとひそかに役立ちます。",
    "es": "Dices que te gustan las cosas inútiles, pero un rincón de tu mente susurra: «aunque sea un poquito útil, mejor». Amas lo romántico sin soltar la realidad. Ese sentido del equilibrio es tu fuerza, y hasta lo inútil se vuelve discretamente útil en tus manos."
   },
   "opp": "keep",
   "match": "craft",
   "rarity": 1.5
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
    "ko": "가끔은 아무도 나를 모르는 곳에서 이름 없이 하루만 지내고 싶으시지요. 평소에 기대받는 역할을 꽤 열심히 해내는 분일수록 그런 마음이 듭니다. 정체를 숨기고 싶다는 건 책임감이 그만큼 무거웠다는 뜻이고, 잠깐 가면을 쓰는 건 충분히 쉬어도 된다는 신호입니다.",
    "en": "Sometimes you'd like to spend one day nameless, somewhere nobody knows you. The harder someone works at the role expected of them, the more they feel that way. Wanting to hide your identity means the weight of responsibility has been heavy, and putting on a mask for a while is a sign you're allowed to rest.",
    "zh": "有时你想在一个没人认识你的地方，无名无姓地过上一天。越是平时认真扮演被期待角色的人，越会有这样的心情。想隐藏身份，说明责任感一直很沉重，暂时戴上面具，是在告诉你可以好好歇一歇。",
    "ja": "ときどき、誰も自分を知らない場所で、名前のないまま一日だけ過ごしたくなりますよね。普段、期待される役割を一生懸命こなす人ほど、そう思うものです。正体を隠したいというのは責任感がそれだけ重かったということで、しばらく仮面をかぶるのは、十分休んでいいというサインです。",
    "es": "A veces quisieras pasar un solo día sin nombre, en un lugar donde nadie te conozca. Cuanto más se esfuerza alguien en el papel que se espera de él, más le pasa eso. Querer ocultar tu identidad significa que la responsabilidad ha pesado mucho, y ponerte una máscara un rato es la señal de que puedes descansar de sobra."
   },
   "opp": "prank",
   "match": "calm",
   "rarity": 0.7
  }
 ]
};
