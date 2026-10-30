/* 선물 추천기 데이터. 상품은 임시입니다: url(쿠팡 파트너스 링크), img, price 를 윤우님이 주신 값으로 바꿉니다.
   price 는 원 단위 숫자. 예산 질문은 price 로 거르고, 나머지 질문은 tags 로 점수를 줍니다. */
window.GIFT = {
  settings: { alternates: 2 },
  strings: {
    title: "회의적인 선물 시뮬레이터",
    intro: [
      "선물이란 무엇일까요.\n마음을 물건의 모양으로 접어서 건네는 일이라고들 합니다.",
      "아름다운 말이죠. 하지만 솔직해집시다.\n생일이니까, 명절이니까, 다들 하니까. 선물의 절반은 마음이고, 나머지 절반은 관례입니다.",
      "관례가 나쁜 건 아닙니다. 마음은 늘 핑계가 있어야 밖으로 나오니까요.\n문제는 받는 사람이 그 둘을 정확히 구분한다는 겁니다.",
      "그래서 저는 늘 한 번 더 묻습니다.\n이 선물이 정말 기쁨이 될지, 아니면 서랍 속 세 번째 머그컵이 될지.",
      "사기 전에, 받는 순간을 먼저 돌려봅시다.\n마음이 관례에 묻히지 않도록. 자, 골라봅시다."
    ],
    more: "계속 들어보기",
    skip: "바로 시작",
    start: "시뮬레이션 시작",
    calc: "받는 순간을 미리 돌려보는 중입니다.\n기대는 실망의 선불이니, 조금만 하세요.",
    simLead: "시뮬레이션 #{n}",
    meter: "예상 만족도 (보수적으로)",
    verdictHigh: "…인정합니다. 이번엔 관례가 아니라 마음이 도착하겠네요.",
    verdictMid: "나쁘지 않아요. 관례와 마음의 딱 중간쯤입니다.",
    verdictLow: "솔직히 말씀드리면, 이건 마음보다 관례에 가깝습니다.",
    take: "이걸로 할게요",
    next: "다른 거 줘보기",
    owned: "이미 갖고 있을 것 같아요",
    doneLead: "선물 완성",
    alsoTitle: "아깝게 탈락한 후보",
    cardTitle: "카드에 이렇게 써 보세요",
    otherCard: "다른 문구",
    buy: "쿠팡에서 보기",
    retry: "다른 사람 선물도 고르기",
    share: "링크 복사",
    copied: "복사했어요",
    noLink: "링크 준비 중",
    noMore: "더 돌려볼 선물이 없어요. 까다로운 분이시군요. 예산을 바꿔볼까요?",
    none: "예산 안에 맞는 선물이 아직 없어요. 예산을 한 칸 올려볼까요?"
  },
  /* 받는 사람 반응 대본: 상품의 반응 태그(useful, touching, funny, fancy)별 [행동, 정적, 대사]. 만족도가 낮으면 low 를 씁니다. */
  reactions: {
    useful: [["포장을 뜯는다.", "2초간 진지하게 살펴본다.", "「오 이거 진짜 필요했는데?」"], ["상자를 열자마자 바로 꺼내 본다.", "고개를 끄덕인다.", "「이거 내일부터 쓴다」"]],
    touching: [["포장을 조심스럽게 뜯는다.", "말이 없다. 눈이 살짝 촉촉하다.", "「…이런 걸 어떻게 알았어」"], ["카드부터 읽는다.", "한참 웃는다.", "「아 뭐야, 감동이잖아」"]],
    funny: [["포장을 뜯는다.", "3초 정적.", "「ㅋㅋㅋㅋㅋ 아 뭐야 진짜」 (사진부터 찍는다)"], ["뭔지 확인한다.", "웃음을 참는다. 실패한다.", "「이거 단톡방에 올린다」"]],
    fancy: [["상자부터 만져본다.", "로고를 확인한다.", "「너 이거 좀 쓴 거 아니야?」"], ["포장지를 아껴서 뜯는다.", "조용히 감탄한다.", "「와… 고급지다」"]],
    low: [["포장을 뜯는다.", "1초 정적.", "「아… 고마워」 (웃고는 있다)"], ["상자를 열어본다.", "고개를 살짝 갸웃한다.", "「오… 이건 어디에 쓰는 거야?」"]]
  },
  /* 질문 순서대로 나옵니다. budget 질문은 options 에 min/max 가 있고 필터로 씁니다. */
  questions: [
    { id: "rel", pre: "선물은 물건보다 먼저 거리를 말합니다.\n너무 가까우면 부담이 되고, 너무 멀면 예의가 되죠.", text: "그분은 당신에게 어떤 사람인가요?", options: [
      { text: "연인", tags: ["lover"] }, { text: "썸 타는 사람", tags: ["crush"] },
      { text: "친구", tags: ["friend"] }, { text: "직장 동료·상사", tags: ["coworker"] },
      { text: "엄마·아빠", tags: ["parent"] }, { text: "형제자매", tags: ["sibling"] },
      { text: "선생님·은사", tags: ["teacher"] }, { text: "아이", tags: ["kid"] } ] },
    { id: "sex", pre: "취향에는 성별이 없다고들 합니다.\n그런데 세상의 진열대는 아직 그 말을 믿지 않는 모양입니다.", text: "그분의 성별은요?", options: [
      { text: "여성", tags: ["female"] }, { text: "남성", tags: ["male"] }, { text: "굳이 따지지 않을게요", tags: [] } ] },
    { id: "age", pre: "시간은 사람을 조금씩 다른 사람으로 바꿔 놓습니다.\n스무 살에 갖고 싶던 것을 마흔에 받으면, 잠깐 추억이 떠올라 반가울 수도 있겠죠.\n하지만 대부분은 서랍 한구석에 조용히 박히게 됩니다.", text: "그분은 몇 살쯤인가요?", options: [
      { text: "10대", tags: ["a10"] }, { text: "20대", tags: ["a20"] }, { text: "30대", tags: ["a30"] },
      { text: "40~50대", tags: ["a40"] }, { text: "60대 이상", tags: ["a60"] } ] },
    { id: "occ", pre: "모든 날이 특별하다면 특별한 날은 없겠죠.\n그래서 우리는 날짜에 이름을 붙이고, 그 이름을 핑계 삼아 마음을 꺼냅니다.", text: "이번 핑계는 무엇인가요?", options: [
      { text: "생일", tags: ["birthday"] }, { text: "기념일", tags: ["anniv"] }, { text: "집들이", tags: ["housewarm"] },
      { text: "승진·이직·합격", tags: ["promo"] }, { text: "출산·육아", tags: ["baby"] }, { text: "병문안·위로", tags: ["comfort"] },
      { text: "명절·감사", tags: ["holiday"] }, { text: "그냥 (이유 없는 선물)", tags: ["random"] } ] },
    { id: "budget", pre: "마음에는 값이 없다고들 합니다.\n그런데 이상하게도 선물에는 늘 가격표가 붙어 있죠. 정직하게 정해봅시다.", text: "예산은 얼마인가요?", options: [
      { text: "1만 원 이하", max: 10000 }, { text: "1~3만 원", min: 10000, max: 30000 },
      { text: "3~5만 원", min: 30000, max: 50000 }, { text: "5~10만 원", min: 50000, max: 100000 },
      { text: "10만 원 이상", min: 100000 } ] },
    { id: "live", pre: "사람의 하루는 함께 사는 사람들의 모양을 닮아갑니다.\n혼자의 방과 여럿의 집은 필요한 것이 다르죠.", text: "그분은 누구와 살고 있나요?", options: [
      { text: "혼자", tags: ["solo"] }, { text: "부모님·가족과", tags: ["family"] }, { text: "연인·배우자와", tags: ["couple"] },
      { text: "아이를 키우는 중", tags: ["parenting"] }, { text: "잘 모르겠어요", tags: [] } ] },
    { id: "day", pre: "우리는 하루의 대부분을 보내는 곳을 조금씩 닮아갑니다.\n책상을 닮은 사람이 있고, 길을 닮은 사람이 있죠.", text: "그분의 낮은 주로 어디서 흘러가나요?", options: [
      { text: "학교", tags: ["student"] }, { text: "회사·사무실", tags: ["office"] }, { text: "몸을 쓰는 일터", tags: ["physical"] },
      { text: "집 (살림·육아·재택)", tags: ["homeday"] }, { text: "은퇴했거나 쉬는 중", tags: ["retired"] } ] },
    { id: "hobby", pre: "쉬는 시간에 무엇을 하는지는\n그 사람이 스스로에게 주는 선물입니다.", text: "그분은 쉬는 날 주로 무엇을 하나요?", options: [
      { text: "집에서 뒹굴", tags: ["home"] }, { text: "요리·카페", tags: ["cook"] }, { text: "운동·등산", tags: ["sport"] },
      { text: "게임·덕질", tags: ["game"] }, { text: "꾸미기·뷰티", tags: ["beauty"] }, { text: "여행·캠핑", tags: ["travel"] },
      { text: "쉬는 날에도 일함", tags: ["work"] } ] },
    { id: "has", pre: "다 가진 사람에게도 모자란 것은 있습니다.\n쓰면 사라지는 것들이죠.", text: "그분은 이미 웬만한 건 다 가진 편인가요?", options: [
      { text: "네, 다 있어요", tags: ["consumable"] }, { text: "아니요", tags: [] }, { text: "잘 모르겠어요", tags: [] } ] },
    { id: "react", pre: "선물은 결국 한 장면을 위해 존재합니다.\n포장지가 찢어지는, 그 몇 초.", text: "그 몇 초 동안 어떤 얼굴을 보고 싶나요?", options: [
      { text: "\"오 이거 진짜 필요했어\"", tags: ["useful"] }, { text: "\"헐 감동…\"", tags: ["touching"] },
      { text: "\"ㅋㅋㅋㅋ 뭐야\"", tags: ["funny"] }, { text: "\"고급지다\"", tags: ["fancy"] } ] }
  ],
  /* 질문별 가중치: 관계·상황·반응이 크게, 나머지는 작게. */
  weights: { rel: 3, sex: 1.5, age: 1.5, occ: 3, live: 1.5, day: 1.5, hobby: 2, has: 2, react: 2.5 },
  /* 카드 문구: 상황 태그별. {가} 같은 치환 없이 그대로 씁니다. */
  cards: {
    birthday: ["생일 축하해. 올해도 내가 계산해 보니 넌 남는 장사야.", "태어나줘서 고마워. 이건 내 인생 최고의 투자였어."],
    anniv: ["오늘까지 함께한 날들, 단가로 따지면 공짜나 다름없어.", "앞으로도 1+1처럼 붙어 다니자."],
    housewarm: ["새집에서는 좋은 일만 적립되길.", "월세는 못 내주지만 이건 내줄게."],
    promo: ["축하해. 이제 밥은 네가 사는 거다.", "고생 많았어. 투자한 만큼 돌려받는 중이네."],
    baby: ["작은 사람이 생긴 걸 축하해. 잠은… 응원할게.", "육아에 정답은 없지만 이건 꽤 정답이야."],
    comfort: ["빨리 나아. 아픈 건 하나도 남는 게 없어.", "오늘은 아무것도 안 해도 되는 날이야."],
    holiday: ["늘 고마워요. 말로 하기 쑥스러워서 이걸로 대신해요.", "올해도 잘 부탁드립니다. 진심 100%, 할인 없음."],
    random: ["그냥. 이유 없는 선물이 제일 비싼 거래.", "지나가다 네 생각 나서. 무료 배송이었어."]
  },
  /* 임시 상품. 실제 상품이 오면 통째로 바꿉니다. */
  products: [
    { name: "드립백 커피 선물세트", line: "아침마다 당신을 떠올리게 하는 가장 무난한 방법.", price: 9900, url: "", img: "", tags: ["office", "retired", "coworker", "teacher", "friend", "a30", "a40", "random", "holiday", "promo", "cook", "work", "minimal", "consumable", "useful"] },
    { name: "수제 쿠키 상자", line: "먹으면 사라지니 짐이 안 됩니다.", price: 8900, url: "", img: "", tags: ["female", "student", "friend", "coworker", "crush", "a20", "a30", "random", "birthday", "cook", "cute", "consumable", "touching"] },
    { name: "핸드크림 선물세트", line: "실패할 수 없는 선물계의 국밥.", price: 15900, url: "", img: "", tags: ["female", "office", "physical", "friend", "coworker", "teacher", "sibling", "a20", "a30", "a40", "birthday", "holiday", "beauty", "consumable", "useful"] },
    { name: "웃긴 양말 5종", line: "발끝까지 웃게 해드립니다.", price: 12900, url: "", img: "", tags: ["male", "student", "friend", "sibling", "a10", "a20", "birthday", "random", "home", "cute", "consumable", "funny"] },
    { name: "온열 눈 찜질기", line: "일만 하는 그분의 눈에 휴가를.", price: 24900, url: "", img: "", tags: ["office", "student", "coworker", "parent", "friend", "a30", "a40", "a60", "promo", "comfort", "work", "home", "tech", "useful"] },
    { name: "디퓨저 선물세트", line: "새집 냄새 대신 당신 센스 냄새.", price: 29900, url: "", img: "", tags: ["female", "solo", "couple", "friend", "coworker", "lover", "a20", "a30", "housewarm", "plant", "minimal", "consumable", "fancy", "touching"] },
    { name: "멀티 충전 케이블 2개 세트", line: "충전선은 몇 개가 있어도 늘 모자랍니다.", price: 14900, url: "", img: "", tags: ["male", "student", "office", "friend", "sibling", "coworker", "a10", "a20", "a30", "birthday", "promo", "random", "game", "work", "tech", "consumable", "useful"] },
    { name: "목 마사지기", line: "효도는 목에서부터.", price: 49900, url: "", img: "", tags: ["office", "physical", "retired", "homeday", "parent", "teacher", "coworker", "a40", "a60", "holiday", "birthday", "comfort", "home", "work", "useful", "touching"] },
    { name: "여행용 파우치 세트", line: "다음 여행 짐 싸는 날 당신이 생각납니다.", price: 19900, url: "", img: "", tags: ["female", "friend", "lover", "sibling", "a20", "a30", "birthday", "travel", "minimal", "useful"] },
    { name: "대형 곰인형", line: "부피 대비 감동이 압도적입니다.", price: 45000, url: "", img: "", tags: ["female", "lover", "crush", "kid", "a10", "a20", "anniv", "birthday", "cute", "funny", "touching"] },
    { name: "그림책 세트", line: "읽어주는 사람까지 행복해지는 선물.", price: 32000, url: "", img: "", tags: ["parenting", "kid", "baby", "plant", "minimal", "touching"] },
    { name: "극세사 담요", line: "위로를 실물로 드립니다.", price: 19900, url: "", img: "", tags: ["solo", "female", "friend", "lover", "parent", "a20", "a60", "comfort", "home", "cute", "touching"] },
    { name: "과일청 선물세트", line: "다 가진 분께도 빈 자리는 있습니다. 냉장고에.", price: 36000, url: "", img: "", tags: ["family", "retired", "homeday", "parent", "teacher", "coworker", "a40", "a60", "holiday", "housewarm", "comfort", "cook", "consumable", "useful"] },
    { name: "한우 선물세트", line: "명절의 정답은 소고기입니다.", price: 129000, url: "", img: "", tags: ["family", "parenting", "male", "parent", "teacher", "coworker", "a40", "a60", "holiday", "promo", "cook", "consumable", "fancy"] },
    { name: "가죽 카드지갑", line: "꺼낼 때마다 당신이 떠오르는 지갑.", price: 79000, url: "", img: "", tags: ["male", "office", "lover", "parent", "a20", "a30", "a40", "anniv", "birthday", "promo", "work", "minimal", "fancy", "touching"] },
    { name: "호텔식 고급 수건 세트", line: "수건은 몇 장이 있어도 좋은 걸로 손이 갑니다.", price: 59000, url: "", img: "", tags: ["couple", "family", "solo", "parent", "lover", "friend", "a30", "a40", "a60", "housewarm", "holiday", "anniv", "home", "minimal", "consumable", "fancy", "useful"] },
    { name: "실크 잠옷", line: "매일 밤 입는 고급스러움.", price: 119000, url: "", img: "", tags: ["female", "couple", "lover", "parent", "a20", "a30", "a40", "anniv", "birthday", "home", "beauty", "fancy", "touching"] },
    { name: "똥 모양 쿠션", line: "받는 순간 웃음은 보장, 쓰임은 미보장.", price: 14900, url: "", img: "", tags: ["student", "solo", "friend", "sibling", "kid", "a10", "a20", "random", "birthday", "home", "cute", "funny"] },
    { name: "미니 화분", line: "물만 주면 되는 저렴한 행복.", price: 7900, url: "", img: "", tags: ["solo", "office", "female", "friend", "coworker", "teacher", "a20", "a30", "housewarm", "random", "plant", "minimal", "touching"] },
    { name: "캐릭터 머그컵", line: "머그컵은 늘 하나 더 있어도 됩니다.", price: 12900, url: "", img: "", tags: ["student", "office", "friend", "sibling", "coworker", "a10", "a20", "a30", "birthday", "random", "cook", "cute", "game", "funny"] }
  ]
};
