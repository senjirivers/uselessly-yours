/* 선물 추천기 데이터. 상품은 임시입니다: url(쿠팡 파트너스 링크), img, price 를 윤우님이 주신 값으로 바꿉니다.
   price 는 원 단위 숫자. 예산 질문은 price 로 거르고, 나머지 질문은 tags 로 점수를 줍니다. */
window.GIFT = {
  settings: { alternates: 2 },
  strings: {
    title: "급할 때 쓰는 선물 시뮬레이터",
    intro: [
      "선물이란 무엇일까요.\n마음을 물건의 모양으로 접어서 건네는 일이라고들 합니다.",
      "아름다운 말이죠. 하지만 솔직해집시다.\n생일이니까, 명절이니까, 다들 하니까. 선물의 절반은 마음이고, 나머지 절반은 관례입니다.",
      "관례가 나쁜 건 아닙니다. 마음은 늘 핑계가 있어야 밖으로 나오니까요.\n문제는 받는 사람이 그 둘을 정확히 구분한다는 겁니다.",
      "그래서 저는 늘 한 번 더 묻습니다.\n이 선물이 정말 기쁨이 될지, 아니면 서랍 속 세 번째 머그컵이 될지.",
      "사기 전에, 받는 순간을 먼저 돌려봅시다.\n마음이 관례에 묻히지 않도록.",
      "다행히 여기 있는 선물은 전부 내일 도착합니다.\n고민은 오늘 끝내죠. 자, 골라봅시다."
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
      { text: "썸 타는 사람", tags: ["crush"] },
      { text: "친구", tags: ["friend"] }, { text: "직장 동료·상사", tags: ["coworker"] },
      { text: "형제자매", tags: ["sibling"] },
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
      { text: "1만 원 안팎 (1.5만 원까지)", max: 15000 }, { text: "1.5~2.5만 원", min: 15000, max: 25000 },
      { text: "2.5~3.5만 원", min: 25000, max: 35000 }, { text: "3.5만 원 이상", min: 35000 } ] },
    { id: "live", pre: "사람의 하루는 함께 사는 사람들의 모양을 닮아갑니다.\n혼자의 방과 여럿의 집은 필요한 것이 다르죠.", text: "그분은 누구와 살고 있나요?", options: [
      { text: "혼자", tags: ["solo"] }, { text: "부모님·가족과", tags: ["family"] }, { text: "연인·배우자와", tags: ["couple"] },
      { text: "아이를 키우는 중", tags: ["parenting"] }, { text: "잘 모르겠어요", tags: [] } ] },
    { id: "has", pre: "다 가진 사람에게도 모자란 것은 있습니다.\n쓰면 사라지는 것들이죠.", text: "그분은 이미 웬만한 건 다 가진 편인가요?", options: [
      { text: "네, 다 있어요", tags: ["consumable"] }, { text: "아니요", tags: [] }, { text: "잘 모르겠어요", tags: [] } ] },
    { id: "react", pre: "선물은 결국 한 장면을 위해 존재합니다.\n포장지가 찢어지는, 그 몇 초.", text: "그 몇 초 동안 어떤 얼굴을 보고 싶나요?", options: [
      { text: "\"오 이거 진짜 필요했어\"", tags: ["useful"] }, { text: "\"헐 감동…\"", tags: ["touching"] },
      { text: "\"ㅋㅋㅋㅋ 뭐야\"", tags: ["funny"] }, { text: "\"고급지다\"", tags: ["fancy"] } ] }
  ],
  /* 질문별 가중치: 관계·상황·반응이 크게, 나머지는 작게. */
  weights: { rel: 3, sex: 1.5, age: 1.5, occ: 3, live: 1.5, has: 2, react: 2.5 },
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
  /* 상품: 윤우님이 고른 쿠팡 파트너스 링크. price 는 원 단위이고 예산 질문이 이 값으로 거릅니다. */
  products: [
    { name: "보난자커피 스페셜티 드립백 블렌드", line: "아침을 견디게 하는 가장 정중한 방법.", price: 32400, url: "https://link.coupang.com/a/igCsItiKjs", img: "", tags: ["friend", "coworker", "sibling", "a20", "a30", "a40", "birthday", "promo", "random", "holiday", "office", "work", "solo", "cook", "consumable", "useful", "fancy"] },
    { name: "룰라커피 핸드드립 드립백", line: "커피는 몇 잔을 마셔도 다음 잔이 필요합니다.", price: 28940, url: "https://link.coupang.com/a/igCyNjaoay", img: "", tags: ["friend", "coworker", "sibling", "a20", "a30", "a40", "birthday", "promo", "random", "holiday", "office", "work", "solo", "cook", "consumable", "useful"] },
    { name: "트와이닝 클래식 차 컬렉션", line: "차는 서두르는 사람에게 앉을 이유를 줍니다.", price: 10060, url: "https://link.coupang.com/a/igCHcbvT5w", img: "", tags: ["friend", "coworker", "sibling", "crush", "a20", "a30", "a40", "random", "birthday", "comfort", "holiday", "office", "homeday", "cook", "consumable", "useful", "touching"] },
    { name: "런던프룻앤허브 과일차 모음", line: "카페인을 피하는 사람에게도 오후는 찾아옵니다.", price: 21960, url: "https://link.coupang.com/a/igCMVwn3Bc", img: "", tags: ["friend", "coworker", "crush", "female", "a20", "a30", "comfort", "random", "holiday", "birthday", "home", "office", "consumable", "useful", "touching"] },
    { name: "김영모 과자점 미니쿠키", line: "달콤함은 관례를 마음으로 바꿔 놓습니다.", price: 20000, url: "https://link.coupang.com/a/igCZnrkm5I", img: "", tags: ["friend", "coworker", "crush", "sibling", "female", "a20", "a30", "a40", "birthday", "random", "holiday", "promo", "office", "student", "homeday", "consumable", "touching", "fancy"] },
    { name: "다반사 4종 견과류 세트", line: "하루를 조금 더 오래 버티게 하는 작은 알갱이들.", price: 14000, url: "https://link.coupang.com/a/igDdHu9U9k", img: "/assets/gift/products/6.webp", tags: ["friend", "coworker", "sibling", "a30", "a40", "a60", "promo", "holiday", "birthday", "random", "office", "physical", "retired", "consumable", "useful"] },
    { name: "아카시아 벌꿀 과일청 선물세트", line: "겨울 목구멍에 건네는 작은 위로.", price: 34000, url: "https://link.coupang.com/a/igDnFSOswe", img: "/assets/gift/products/7.webp", tags: ["friend", "coworker", "female", "a20", "a30", "a40", "comfort", "holiday", "housewarm", "birthday", "home", "cook", "homeday", "consumable", "useful", "touching"] },
    { name: "다보 미니 과일잼 세트", line: "빵이 있는 집에는 한 숟갈의 사치가 필요합니다.", price: 17000, url: "https://link.coupang.com/a/igDvKUe12y", img: "/assets/gift/products/8.webp", tags: ["friend", "coworker", "sibling", "a20", "a30", "a40", "housewarm", "birthday", "random", "holiday", "solo", "couple", "cook", "homeday", "consumable", "fancy", "touching"] },
    { name: "논픽션 시트러스 핸드크림", line: "손은 가장 많이 일하고 가장 적게 보살핌받습니다.", price: 34000, url: "https://link.coupang.com/a/igDKcGso6m", img: "/assets/gift/products/9.webp", tags: ["friend", "coworker", "crush", "sibling", "female", "a20", "a30", "birthday", "random", "holiday", "promo", "office", "beauty", "consumable", "fancy", "touching", "useful"] },
    { name: "쿤달 시그니처 디퓨저 베이비파우더", line: "향은 사라지지만 기억은 남습니다.", price: 25900, url: "https://link.coupang.com/a/igDS6vV0TY", img: "/assets/gift/products/10.webp", tags: ["friend", "coworker", "crush", "female", "a20", "a30", "housewarm", "birthday", "holiday", "solo", "couple", "home", "minimal", "consumable", "fancy", "touching"] },
    { name: "양키캔들 스몰 자캔들 3종", line: "불을 켜는 순간 방이 하루를 마무리할 준비를 합니다.", price: 25000, url: "https://link.coupang.com/a/igD1ElvV6W", img: "/assets/gift/products/11.webp", tags: ["friend", "coworker", "female", "a20", "a30", "a40", "housewarm", "birthday", "holiday", "comfort", "solo", "couple", "home", "consumable", "fancy", "touching"] },
    { name: "양키캔들 보티브 3종", line: "작은 불빛 셋. 마음은 크기보다 개수로도 전해집니다.", price: 9000, url: "https://link.coupang.com/a/igD4xVCGlM", img: "/assets/gift/products/12.webp", tags: ["friend", "coworker", "crush", "sibling", "female", "a20", "a30", "random", "birthday", "comfort", "holiday", "solo", "home", "consumable", "touching", "fancy"] },
    { name: "코토나 타월 세트", line: "수건은 몇 장이 있어도 좋은 걸로 손이 갑니다.", price: 35000, url: "https://link.coupang.com/a/igEhYCuXJI", img: "/assets/gift/products/13.webp", tags: ["friend", "coworker", "sibling", "a20", "a30", "a40", "housewarm", "holiday", "birthday", "solo", "couple", "family", "home", "consumable", "useful"] },
    { name: "글라스락 미드나잇 와인잔 세트", line: "잔은 내용물보다 오래 남습니다.", price: 24000, url: "https://link.coupang.com/a/igErDHoskm", img: "/assets/gift/products/14.webp", tags: ["friend", "coworker", "a20", "a30", "a40", "housewarm", "birthday", "holiday", "solo", "couple", "home", "cook", "fancy", "touching"] },
    { name: "한샘 우드 쟁반 월넛", line: "아침 한 끼도 쟁반에 올리면 의식이 됩니다.", price: 24000, url: "https://link.coupang.com/a/igEFaPZDW0", img: "/assets/gift/products/15.webp", tags: ["friend", "coworker", "a20", "a30", "a40", "housewarm", "birthday", "solo", "couple", "home", "cook", "homeday", "fancy", "useful"] },
    { name: "아임비타 멀티비타민", line: "챙겨 먹으라는 말을 선물로 바꾼 것.", price: 21000, url: "https://link.coupang.com/a/igEOw4Vu7E", img: "/assets/gift/products/16.webp", tags: ["friend", "coworker", "sibling", "a20", "a30", "a40", "birthday", "promo", "holiday", "comfort", "office", "physical", "student", "work", "consumable", "useful"] },
    { name: "아임비타 멀티비타민 이뮨샷", line: "바쁜 사람에게 한 병으로 건네는 안부.", price: 40000, url: "https://link.coupang.com/a/igES2XYWZM", img: "/assets/gift/products/17.webp", tags: ["friend", "coworker", "sibling", "a20", "a30", "a40", "promo", "comfort", "holiday", "birthday", "office", "physical", "work", "consumable", "useful", "fancy"] },
    { name: "리틀타익스 빌딩블럭", line: "만드는 동안은 누구나 조용해집니다.", price: 29000, url: "https://link.coupang.com/a/igE0ZjIyce", img: "", tags: ["kid", "a10", "birthday", "random", "holiday", "family", "parenting", "student", "homeday", "home", "game", "funny", "touching"] },
    { name: "헉슬리 룸 스프레이 모로칸가드너", line: "공간에 취향을 뿌립니다.", price: 25000, url: "https://link.coupang.com/a/igFkg23HNI", img: "/assets/gift/products/19.webp", tags: ["friend", "coworker", "crush", "a20", "a30", "housewarm", "birthday", "random", "solo", "home", "minimal", "consumable", "fancy", "useful"] },
    { name: "화산석 화분 미니 바오밥나무", line: "16,000원짜리 나무가 천 년을 사는 이름을 달고 있습니다.", price: 16000, url: "https://link.coupang.com/a/igF8NMI9HE", img: "/assets/gift/products/20.webp", tags: ["friend", "coworker", "crush", "a20", "a30", "housewarm", "promo", "random", "birthday", "solo", "office", "home", "touching", "funny"] },
    { name: "수경식물 테이블야자 라반화병 세트", line: "물만 주면 되는 가장 느슨한 책임.", price: 22000, url: "https://link.coupang.com/a/igGaOKKXiS", img: "/assets/gift/products/21.webp", tags: ["friend", "coworker", "a20", "a30", "a40", "housewarm", "promo", "birthday", "random", "solo", "office", "home", "touching", "useful"] },
    { name: "신라명과 셀레브르쿠키", line: "포장이 먼저 말을 걸고 쿠키가 이어서 말합니다.", price: 17000, url: "https://link.coupang.com/a/igHB5DiNWu", img: "/assets/gift/products/22.webp", tags: ["friend", "coworker", "crush", "sibling", "female", "a20", "a30", "a40", "birthday", "random", "holiday", "promo", "office", "student", "homeday", "consumable", "touching", "fancy"] },
    { name: "CEP 남성 러닝 삭스", line: "달리는 사람의 발목에게 건네는 가장 조용한 응원.", price: 33000, url: "https://link.coupang.com/a/igIzIaVGuG", img: "/assets/gift/products/23.webp", tags: ["friend", "sibling", "coworker", "male", "a20", "a30", "a40", "birthday", "promo", "holiday", "random", "physical", "office", "sport", "consumable", "useful", "fancy"] },
    { name: "CEP 남성 올데이 리커버리 미드컷 삭스", line: "달린 뒤의 발은 보상받을 자격이 있습니다.", price: 39000, url: "https://link.coupang.com/a/igIGOmeQtE", img: "/assets/gift/products/24.webp", tags: ["friend", "sibling", "coworker", "male", "a20", "a30", "a40", "birthday", "promo", "holiday", "random", "physical", "office", "sport", "consumable", "useful", "fancy", "touching"] },
    { name: "CEP 여성 더 런 로우컷 삭스", line: "달리기를 시작한 사람은 양말부터 진지해집니다.", price: 35000, url: "https://link.coupang.com/a/igIMJO67vU", img: "/assets/gift/products/25.webp", tags: ["friend", "sibling", "coworker", "female", "a20", "a30", "a40", "birthday", "promo", "holiday", "random", "physical", "office", "sport", "consumable", "useful", "fancy"] },
    { name: "나이키 빅마우스 물병 블랙", line: "물은 하루에 몇 번 기억해 주기를 기다립니다.", price: 8000, url: "https://link.coupang.com/a/igIRzASWQ0", img: "/assets/gift/products/26.webp", tags: ["friend", "sibling", "coworker", "crush", "a10", "a20", "a30", "birthday", "random", "promo", "student", "office", "physical", "sport", "travel", "useful"] },
    { name: "아그파 컬러 일회용카메라", line: "필름은 결과를 기다리는 시간까지 선물에 포함시킵니다.", price: 25000, url: "https://link.coupang.com/a/igJmxzZSOi", img: "/assets/gift/products/27.webp", tags: ["friend", "sibling", "crush", "a10", "a20", "a30", "birthday", "random", "anniv", "holiday", "student", "travel", "photo", "funny", "touching", "fancy"] },
    { name: "나이키 컴프레션 반팔", line: "운동하는 사람에게 땀은 옷을 고르는 이유입니다.", price: 32000, url: "https://link.coupang.com/a/igJuqag1S1", img: "/assets/gift/products/28.webp", tags: ["friend", "sibling", "coworker", "male", "a20", "a30", "a40", "birthday", "promo", "holiday", "physical", "office", "sport", "useful", "fancy"] },
    { name: "디클펫 반려동물 자동급식기", line: "집을 비우는 시간에도 마음은 밥그릇 앞에 있습니다.", price: 56000, url: "https://link.coupang.com/a/igJFL35rb2", img: "/assets/gift/products/29.webp", tags: ["friend", "sibling", "coworker", "a20", "a30", "a40", "birthday", "housewarm", "holiday", "solo", "couple", "family", "office", "pet", "useful", "touching"] },
    { name: "페블펫 3중여과 자동급수기", line: "물이 늘 신선하다는 사실은 말 못 하는 가족에게 가장 큰 배려입니다.", price: 19900, url: "https://link.coupang.com/a/igJV9KFYAe", img: "/assets/gift/products/30.webp", tags: ["friend", "sibling", "coworker", "a20", "a30", "a40", "birthday", "housewarm", "holiday", "random", "solo", "couple", "family", "office", "pet", "useful", "touching"] },
    { name: "메카닉 G1 게임패드", line: "손에 쥐는 순간 반응이 달라지는 물건이 있습니다.", price: 29000, url: "https://link.coupang.com/a/igJ8p45Hzw", img: "/assets/gift/products/31.webp", tags: ["friend", "sibling", "coworker", "male", "a10", "a20", "a30", "birthday", "random", "promo", "student", "homeday", "home", "game", "useful", "fancy", "funny"] }
  ]
};
