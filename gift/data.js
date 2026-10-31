/* 선물 추천기 데이터. 상품은 임시입니다: url(쿠팡 파트너스 링크), img, price 를 윤우님이 주신 값으로 바꿉니다.
   price 는 원 단위 숫자. 예산 질문은 price 로 거르고, 나머지 질문은 tags 로 점수를 줍니다. */
window.GIFT = {
  settings: { alternates: 2, music: { src: "/assets/gift/bgm.mp3", volume: 0.35 } },
  strings: {
    title: "급할 때 쓰는 선물 시뮬레이터",
    analysisLead: "이번 선물의 성격",
    riskLabel: "혼자 골랐다면 실패 확률",
    analysisNext: "받는 순간을 보겠습니다",
    /* 소개 페이지별 자세: 기본은 서 있고, 어깨를 으쓱하는 장면만 한두 번 넣습니다. */
    introPose: ["stand", "stand", "stand", "shrug", "stand", "stand", "stand"],
    intro: [
      "선물이란 무엇일까요.\n마음을 물건의 모양으로 접어서 건네는 일이라고들 합니다.",
      "아름다운 말이죠. 하지만 솔직해지겠습니다.\n생일이니까, 명절이니까, 다들 하니까. 선물의 절반은 마음이고, 나머지 절반은 관례입니다.",
      "관례가 나쁜 건 아닙니다. 마음은 늘 핑계가 있어야 밖으로 나오니까요.\n문제는 받는 사람이 그 둘을 정확히 구분한다는 겁니다.",
      "그래서 저는 늘 한 번 더 묻습니다.\n이 선물이 정말 기쁨이 될지, 아니면 서랍 속 한구석에 자리하게 될지.",
      "사실 선물은 그분을 조금만 알면 의외로 쉽습니다.\n그래서 당신이 아는 만큼만 묻겠습니다. 모르시면 모른다고 하십시오.",
      "사기 전에, 받는 순간을 먼저 돌려봅시다.\n진심이 관례에 묻히지 않도록.",
      "다행히 여기 있는 선물은 전부 내일 도착합니다.\n고민은 5분 안에 끝내보죠."
    ],
    headline: "급할 때 쓰는 선물 시뮬레이터",
    tagline: "선물은 해야 하는데 뭘 줘야 할지 모르시겠습니까? 제가 대신 골라드리겠습니다. 저도 귀찮지만.",
    open: "시작하겠습니다",
    musicOn: "♪ 켜짐",
    musicOff: "♪ 꺼짐",
    more: "계속 듣겠습니다",
    skip: "건너뛰기",
    start: "시작하겠습니다",
    calc: "받는 순간을 미리 돌려보는 중입니다.\n기대는 실망의 선불이니, 조금만 하십시오.",
    meter: "예상 만족도 (보수적으로)",
    verdictHigh: "…인정합니다. 이번에는 관례가 아니라 마음이 도착하겠습니다.",
    verdictMid: "나쁘지 않습니다. 관례와 마음의 딱 중간쯤입니다.",
    verdictLow: "솔직히 말씀드리면, 이건 마음보다 관례에 가깝습니다.",
    next: "다른 것을 보여주십시오",
    owned: "이미 갖고 있을 것 같습니다",
    alsoTitle: "아깝게 탈락한 후보",
    cardMake: "선물에 붙일 카드 문구를 받겠습니다",
    cardTone: "어떤 말투로 쓰시겠습니까?",
    toneC: "반말",
    toneP: "존댓말",
    cardAgain: "다시 써 주십시오",
    cardSwap: "말투를 바꾸겠습니다",
    cardSave: "이미지로 저장하겠습니다",
    toLabel: "편지 받는 사람",
    fromLabel: "편지 쓰는 사람",
    toHint: "예: 민수, 어머니, 팀장님",
    fromHint: "예: 지민, 딸, 김 대리",
    nameAsk: "이름이나 호칭을 적어 주십시오. 받는 분은 당신이 부르는 대로, 쓰는 분은 그분이 당신을 부르는 대로 적으시면 됩니다.",
    nameOk: "이렇게 쓰겠습니다",
    noName: "적지 않겠습니다",
    sincere: "진심을 담아,",
    other: "다른 테스트 해보기",
    stampMid: "진심 접수",
    buy: "물건 보러가기",
    retry: "다른 분의 선물도 고르겠습니다",
    share: "링크를 복사하겠습니다",
    copied: "복사했습니다",
    notice: "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.",
    noLink: "링크 준비 중",
    noMore: "더 보여드릴 선물이 없습니다. 까다로운 분이시군요.",
    none: "조건에 맞는 선물이 아직 없습니다. 답을 조금 바꿔 보시겠습니까?"
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
    { id: "rel", pre: "선물은 물건보다 먼저 거리를 말합니다.\n너무 가까우면 부담이 되고, 너무 멀면 예의가 되죠.", text: "그분은 당신에게 어떤 사람입니까?", options: [
      { text: "친구", tags: ["friend"] }, { text: "직장 동료·상사", tags: ["coworker", "office"] },
      { text: "가족", tags: ["kin"] },
      { text: "선생님·은사", tags: ["teacher"] }, { text: "아이", tags: ["kid"], ex: ["alcohol", "scent", "caffeine"] } ] },
    { id: "fam", pre: "가족이라고 다 같은 가족은 아닙니다.\n말을 얼마나 편하게 하는지도, 서로의 일상을 얼마나 아는지도 다르니까요.", text: "어떤 가족입니까?", options: [
      { text: "부모님", tags: ["parent", "a60"] }, { text: "친척", tags: ["relative"] }, { text: "형제자매", tags: ["sibling"] } ] },
    { id: "sex", pre: "취향에는 성별이 없다고들 합니다.\n그런데 세상의 진열대는 아직 그 말을 믿지 않는 모양입니다.", text: "그분의 성별은 무엇입니까?", options: [
      { text: "여성", tags: ["female"], ex: ["onlymale"] }, { text: "남성", tags: ["male"], ex: ["onlyfemale"] } ] },
    { id: "age", pre: "시간은 사람을 조금씩 다른 사람으로 바꿔 놓습니다.\n스무 살에 갖고 싶던 것을 마흔에 받으면, 잠깐 추억이 떠올라 반가울 수도 있겠죠.\n하지만 대부분은 서랍 한구석에 조용히 박히게 됩니다.", text: "그분의 나이대는 어떻게 됩니까?", options: [
      { text: "10대 이하", tags: ["a10"] }, { text: "20대", tags: ["a20"] }, { text: "30대", tags: ["a30"] },
      { text: "40~50대", tags: ["a40"] }, { text: "60대 이상", tags: ["a60"] }, { unk: true, text: "잘 모르겠습니다", tags: [] } ] },
    { id: "occ", pre: "모든 날이 특별하다면 특별한 날은 없겠죠.\n그래서 우리는 날짜에 이름을 붙이고, 그 이름을 핑계 삼아 마음을 꺼냅니다.", text: "이번 핑계는 무엇입니까?", options: [
      { text: "생일", tags: ["birthday"] }, { text: "집들이", tags: ["housewarm"] },
      { text: "승진·이직·합격", tags: ["promo"] }, { text: "출산·육아", tags: ["baby"] },
      { text: "명절·감사", tags: ["holiday"] }, { text: "그냥 (이유 없는 선물)", tags: ["random"] } ] },
    { id: "avoid", multi: true, pre: "선물의 실패는 대개 싫어하는 것을 건넸을 때 일어납니다.\n모르신다면 모른다고 하십시오. 취향을 타는 것은 조용히 빼겠습니다.", text: "그분이 피하는 것이 있습니까? (여러 개 고르셔도 됩니다)", options: [
      { text: "진한 향을 싫어합니다", tags: [], ex: ["scent"] }, { text: "카페인을 마시지 않습니다", tags: [], ex: ["caffeine"] }, { text: "술을 마시지 않습니다", tags: [], ex: ["alcohol"] },
      { text: "특별히 없습니다", tags: [], solo: true }, { unk: true, text: "잘 모르겠습니다", tags: [], solo: true, ex: ["scent", "caffeine", "alcohol"] } ] },
    { id: "hobby", multi: true, pre: "사람은 말끝에 취미를 흘립니다.\n그걸 기억해 두셨다면 선물의 절반은 끝난 겁니다.", text: "그분이 취미 이야기를 꺼낸 적이 있습니까? (여러 개 고르셔도 됩니다)", options: [
      { text: "몸을 움직이는 것 (운동, 등산, 러닝, 골프…)", tags: ["sport"], covers: ["sport"] },
      { text: "게임 (콘솔, PC, 모바일)", tags: ["game", "homeday"] },
      { text: "집에서 보는 것 (영화, 드라마, 웹툰, 덕질…)", tags: ["homeday"] },
      { text: "밖으로 나가는 것 (여행, 캠핑, 사진, 전시…)", tags: ["photo", "travel"] },
      { text: "먹고 마시는 것 (맛집, 카페, 요리, 베이킹…)", tags: ["cook", "snack"] },
      { text: "집을 가꾸는 것 (인테리어, 식물…)", tags: ["home"] },
      { text: "배우고 만드는 것 (독서, 그림, 악기, 공예…)", tags: [] },
      { unk: true, text: "잘 모르겠습니다", tags: [], solo: true } ] },
    { id: "pet", pre: "반려동물을 키우는 사람은 자기 것보다 아이 것을 먼저 챙깁니다.\n그래서 아이에게 쓸 물건이 가장 반가운 선물이 되기도 합니다.", text: "그분은 반려동물과 함께 삽니까?", options: [
      { text: "예", tags: ["pet"], ex: ["petunsafe"] }, { text: "아니오", tags: [] }, { unk: true, text: "잘 모르겠습니다", tags: [], ex: ["petunsafe"] } ] },
    { id: "sport", pre: "몸을 움직이는 사람에게는 자기만의 루틴이 있습니다.\n그 루틴을 비켜 간 선물은 조용히 서랍으로 갑니다.", text: "그분은 운동을 꾸준히 합니까?", options: [
      { text: "예, 꾸준히", tags: ["sport"] }, { text: "가끔", tags: [] }, { text: "거의 하지 않습니다", tags: [] }, { unk: true, text: "잘 모르겠습니다", tags: [] } ] },
    { id: "play", pre: "같은 하루도 집에서 보내는 사람과 밖에서 보내는 사람은 다르게 씁니다.\n선물도 하루가 흘러가는 곳에 놓여야 쓰입니다.", text: "쉬는 날, 그분은 주로 어디서 시간을 보냅니까?", options: [
      { text: "집에서 보냅니다", tags: ["home", "homeday"] }, { text: "밖에서 돌아다니거나 여행을 다닙니다", tags: ["photo", "travel", "physical"] }, { text: "반반입니다", tags: ["photo"] }, { unk: true, text: "잘 모르겠습니다", tags: [] } ] },
    { id: "live", pre: "한 사람의 취향은 누구와 사는지에서 절반쯤 정해집니다.\n혼자 쓰는 물건과 같이 쓰는 물건은 다르니까요.", text: "그분은 누구와 살고 있습니까?", options: [
      { text: "혼자 삽니다", tags: ["solo"] }, { text: "가족이나 연인과 삽니다", tags: ["family", "couple"] },
      { unk: true, text: "잘 모르겠습니다", tags: [] } ] },
    { id: "drink", pre: "취향은 주문하는 순간에 가장 솔직하게 드러납니다.\n메뉴판 앞에서는 체면도 잠시 쉬니까요.", text: "그분과 카페나 식당에 가면, 그분은 무엇을 주문합니까?", options: [
      { text: "커피", tags: ["caffeine", "drinkware"] }, { text: "차", tags: ["tea", "drinkware"] },
      { text: "술", tags: ["alcohol"] }, { text: "주스나 탄산음료", tags: ["drinkware"] },
      { unk: true, text: "잘 모르겠습니다", tags: [] } ] },
    { id: "snack", pre: "입이 심심할 때 손이 가는 곳은 사람마다 다릅니다.\n그곳을 건드리면 선물은 반가워지고, 비켜 가면 평범해집니다.", text: "그분은 간식을 챙겨 먹는 편입니까?", options: [
      { text: "예, 자주 먹습니다", tags: ["snack"] }, { text: "아니오, 별로 안 먹습니다", tags: [] },
      { unk: true, text: "잘 모르겠습니다", tags: [] } ] },
    { id: "look", pre: "꾸미는 사람은 작은 것에서 티가 나고, 꾸미지 않는 사람은 쓰임에서 티가 납니다.", text: "그분은 꾸미는 데 신경을 쓰는 편입니까?", options: [
      { text: "예, 신경 씁니다", tags: ["fancy", "beauty", "scent"] }, { text: "아니오, 편한 게 최고입니다", tags: ["useful", "minimal"] },
      { unk: true, text: "잘 모르겠습니다", tags: [] } ] },
    { id: "work", pre: "하루의 대부분을 어디서 보내는지가, 그 사람의 몸이 무엇을 원하는지를 정합니다.", text: "그분은 하루 대부분을 어떻게 보냅니까?", options: [
      { text: "앉아서 일하거나 공부합니다", tags: ["office", "work", "student"] }, { text: "몸을 쓰며 움직입니다", tags: ["physical"] },
      { text: "집에서 보냅니다", tags: ["home", "homeday"] }, { unk: true, text: "잘 모르겠습니다", tags: [] } ] },
    { id: "health", pre: "건강은 잃기 전에는 아무도 챙기지 않는다고들 합니다.\n그래도 챙기는 사람은 어딘가에 꼭 있습니다.", text: "그분은 건강을 챙기는 편입니까?", options: [
      { text: "예, 챙기는 편입니다", tags: ["physical"] }, { text: "아니오, 별로 신경 쓰지 않습니다", tags: [] },
      { unk: true, text: "잘 모르겠습니다", tags: [] } ] },
    { id: "cook", pre: "직접 만들어 먹는 사람은 재료에서 성격이 나옵니다.", text: "그분은 집에서 요리를 자주 합니까?", options: [
      { text: "예, 자주 합니다", tags: ["cook"] }, { text: "아니오, 거의 안 합니다", tags: [] },
      { unk: true, text: "잘 모르겠습니다", tags: [] } ] },
    { id: "home", pre: "집을 가꾸는 사람은 작은 물건 하나에도 자리를 먼저 생각합니다.", text: "그분은 집을 꾸미는 데 관심이 있습니까?", options: [
      { text: "예, 관심이 많습니다", tags: ["home", "housewarm"] }, { text: "아니오, 크게 관심 없습니다", tags: [] },
      { unk: true, text: "잘 모르겠습니다", tags: [] } ] },
    { id: "has", pre: "다 가진 사람처럼 보여도 모자란 것은 있습니다.\n그게 무엇인지는 본인도 모를 때가 많습니다.", text: "그분은 이미 웬만한 건 다 가진 편입니까?", options: [
      { text: "예, 다 있습니다", tags: ["consumable"] }, { text: "아니오", tags: [] }, { unk: true, text: "잘 모르겠습니다", tags: [] } ] },
    { id: "react", pre: "선물은 결국 한 장면을 위해 존재합니다.\n포장지가 찢어지는, 그 몇 초.", text: "그분이 선물을 받고 뭐라고 말하면 좋겠습니까?", options: [
      { text: "\"오 이거 진짜 필요했어\"", tags: ["useful"] }, { text: "\"헐 감동…\"", tags: ["touching"] },
      { text: "\"ㅋㅋㅋㅋ 뭐야\"", tags: ["funny"] }, { text: "\"고급지다\"", tags: ["fancy"] }, { unk: true, text: "잘 모르겠습니다", tags: [] } ] }
  ],
  /* 관계별로 말투와 보기를 바꾼 질문. 보기 개수와 순서는 원본과 같아야 합니다(opts 는 보기 문구만 바꿉니다). */
  by: {
    coworker: {
      drink: { text: "점심 먹고 카페에 가면, 그분은 무엇을 주문합니까?" },
      snack: { text: "그분은 사무실에서 간식을 챙겨 먹는 편입니까?" },
      look: { text: "그분은 출근할 때 옷차림에 신경을 쓰는 편입니까?" },
      hobby: { text: "그분이 점심시간이나 회식에서 취미 이야기를 꺼낸 적이 있습니까? (여러 개 고르셔도 됩니다)" }
    },
    parent: {
      drink: { text: "외식하거나 카페에 가시면, 그분은 무엇을 주문하십니까?" },
      snack: { text: "그분은 간식을 챙겨 드시는 편입니까?" },
      health: { text: "그분은 건강을 챙기시는 편입니까?" },
      cook: { text: "그분은 집에서 요리를 자주 하십니까?" },
      home: { text: "그분은 집을 가꾸는 데 관심이 있으십니까?" },
      sport: { text: "그분은 운동을 꾸준히 하십니까?" },
      pet: { text: "그분은 반려동물과 함께 사십니까?" },
      play: { text: "쉬는 날, 그분은 주로 어디서 시간을 보내십니까?" },
      hobby: { text: "그분이 취미 이야기를 꺼내신 적이 있습니까? (여러 개 고르셔도 됩니다)" }
    },
    kid: {
      pet: { text: "그 아이는 반려동물과 함께 삽니까?" },
      play: { pre: "아이에게 하루는 놀이터에서 시작해 놀이터에서 끝납니다.\n그래서 선물도 놀 수 있어야 합니다.", text: "그 아이는 주로 어디서 놉니까?",
        opts: ["집에서 놉니다", "밖에서 뛰어놉니다", "반반입니다", "잘 모르겠습니다"] },
      snack: { text: "그 아이는 간식을 좋아합니까?", opts: ["예, 아주 좋아합니다", "아니오, 별로 안 먹습니다", "잘 모르겠습니다"] },
      has: { text: "그 아이는 장난감이 이미 많은 편입니까?", opts: ["예, 많습니다", "아니오", "잘 모르겠습니다"] },
      react: { text: "그 아이가 선물을 받고 뭐라고 하면 좋겠습니까?" }
    }
  },
  /* 선물 성격 진단: 이유(occ)로 유형을, 관계(rel)로 한 줄을 붙입니다. */
  character: {
    occ: {
      birthday: ["연례행사형", "해마다 같은 날 어김없이 찾아오는, 가장 정직한 관례입니다. 빠지면 티가 나고, 잘하면 본전입니다."],
      housewarm: ["체면 겸 실용형", "빈손으로 가기엔 민망하고, 큰 걸 들고 가기엔 부담스러운 자리입니다. 그 사이 어딘가가 정답입니다."],
      promo: ["축하 겸 눈도장형", "축하가 절반, 앞으로도 잘 지내자는 인사가 절반입니다. 너무 튀지도, 너무 가볍지도 않아야 합니다."],
      baby: ["응원형", "받는 사람이 가장 지쳐 있을 때 도착하는 선물입니다. 화려한 것보다 당장 쓸 수 있는 쪽이 마음에 닿습니다."],
      holiday: ["인사치레형", "마음보다 관례의 비중이 큰 선물입니다. 그래서 오히려 무난함이 가장 큰 미덕입니다."],
      random: ["마음 한 스푼형", "이유가 없다는 건 마음이 이유라는 뜻입니다. 관례가 거의 없는, 가장 드문 종류의 선물입니다."]
    },
    rel: {
      friend: "친구라면 실패해도 웃어넘겨 줄 겁니다. 그 관대함에 너무 기대지는 마십시오.",
      coworker: "직장 사람에게는 튀지 않는 것이 미덕입니다. 고른 티가 덜 나는 쪽이 안전합니다.",
      parent: "부모님께는 값보다 쓰임이 먼저 읽힙니다. 아껴 두시지 않고 바로 쓰실 것을 고르는 게 좋습니다.",
      relative: "친척에게는 정이 담겼으면서도 부담스럽지 않은 것이 좋습니다. 너무 튀면 오래 기억됩니다.",
      sibling: "형제자매는 어차피 솔직하게 말해 줄 겁니다. 마음에 안 들면 그 자리에서요.",
      teacher: "선생님께는 가격보다 정성이 먼저 읽힙니다. 부담스럽지 않은 선에서 멈추는 게 예의입니다.",
      kid: "아이는 돌려 말하지 않습니다. 마음에 안 들면 표정이 먼저 답합니다."
    }
  },
  /* 혼자 골랐다면 실패 확률: 기본값 + 관계별 가산 + 모르는 답 하나당 가산. 구간별 문구는 [상한, 문구]. */
  risk: {
    base: 12, perUnknown: 9, rel: { friend: 0, coworker: 6, sibling: -4, parent: 2, relative: 6, teacher: 10, kid: 8 },
    tiers: [
      [30, "이 정도면 혼자 골라도 무난했겠습니다. 그래도 저한테 오신 건 잘하신 겁니다."],
      [55, "혼자 골랐다면 둘 중 하나는 서랍행이었을 겁니다. 오시길 잘하셨습니다."],
      [75, "혼자 골랐다면 꽤 위험했습니다. 다행히 모르는 건 전부 빼고 골랐습니다."],
      [100, "혼자 골랐다면 큰일 날 뻔했습니다. 가장 무난한 것만 남겼으니 안심하십시오."]
    ]

  },
  /* 질문별 가중치: 관계·상황·반응이 크게, 나머지는 작게. */
  /* 질문 경로: 앞의 core 5개는 항상, 나머지는 pool 에서 지금까지의 답으로 후보를 가장 잘 가르는 질문을 골라 총 total 개를 묻습니다.
     skipIf: 이 답을 했다면 그 질문은 건너뜁니다. */
  route: {
    total: 12,
    core: ["rel", "fam", "sex", "age", "occ", "avoid"],
    pool: ["hobby", "pet", "sport", "play", "drink", "snack", "look", "live", "health", "cook", "home", "has", "react"],
    /* only: 이 관계를 골랐을 때만 묻는 질문. byRel: 관계별로 건너뛸 질문(skip)과 먼저 묻고 싶은 질문(prefer). */
    only: { fam: "kin" },
    byRel: {
      friend: { prefer: ["hobby", "play", "drink", "snack", "look"] },
      coworker: { skip: ["live", "cook", "home"], prefer: ["drink", "snack", "hobby", "look", "sport"] },
      parent: { skip: ["look", "live"], prefer: ["health", "home", "cook", "drink", "snack"] },
      relative: { skip: ["live", "play", "look", "pet"], prefer: ["health", "drink", "snack", "home"] },
      sibling: { prefer: ["hobby", "play", "look", "live", "sport"] },
      teacher: { skip: ["live", "cook", "home", "play", "pet", "look"], prefer: ["drink", "snack", "health", "hobby"] },
      kid: { skip: ["age", "drink", "look", "live", "cook", "home", "health", "sport", "hobby"], prefer: ["play", "snack", "has", "react", "pet"] }
    }
  },
  gate: ["pet", "sport", "game", "photo", "alcohol", "kid"],
  weights: { fam: 3, hobby: 3.5, work: 2.5, health: 2.5, cook: 3, home: 3, live: 2, drink: 3, snack: 3, look: 2.5, rel: 3, sex: 1.5, age: 1.5, occ: 3, pet: 3, sport: 3, play: 3, has: 2, react: 2.5 },
  /* 카드 편지: 이유(occ)로 첫 줄, 관계(rel)로 둘째 줄, 나이대로 마지막 줄을 고릅니다. c=반말, p=존댓말. */
  letter: {
    open: {
      birthday: { c: "생일은 시간이 한 칸 지나갔다는 걸 확인하는 날이래. 그래도 같이 확인해 줄 사람이 있다는 건 나쁘지 않은 일이야. 생일 축하해.", p: "생일은 시간이 한 칸 지나갔음을 확인하는 날이라고들 합니다. 그래도 함께 확인해 줄 사람이 있다는 건 나쁘지 않은 일입니다. 생일 축하드립니다." },
      housewarm: { c: "집은 몸이 쉬는 곳이기 전에 마음이 돌아오는 곳이라고 생각해. 새집이 그런 곳이 되길 바라며, 집들이 축하해.", p: "집은 몸이 쉬는 곳이기 전에 마음이 돌아오는 곳이라고 생각합니다. 새집이 그런 곳이 되길 바라며, 집들이 축하드립니다." },
      promo: { c: "좋은 일은 대개 혼자 이룬 것처럼 보이지만, 그 뒤엔 보이지 않는 시간이 쌓여 있잖아. 그 시간을 알아주고 싶어서, 정말 축하해.", p: "좋은 일은 대개 혼자 이룬 것처럼 보이지만, 그 뒤에는 보이지 않는 시간이 쌓여 있습니다. 그 시간을 알아주고 싶어 진심으로 축하드립니다." },
      baby: { c: "새로운 사람이 오면 세상은 한 칸씩 다시 짜여. 요즘은 잠도 부족할 텐데, 정말 축하해.", p: "새로운 사람이 오면 세상은 한 칸씩 다시 짜인다고 합니다. 요즘은 잠도 부족하시겠지만, 진심으로 축하드립니다." },
      holiday: { c: "고마움은 말로 하면 가벼워지고 안 하면 사라지더라. 그래서 물건 하나에 얹어 보냈어.", p: "고마움은 말로 하면 가벼워지고, 하지 않으면 사라지는 것 같습니다. 그래서 물건 하나에 얹어 보냅니다." },
      random: { c: "이유가 없는 선물이 가장 이유가 큰 선물이라고 생각해. 그냥, 네 생각이 났어.", p: "이유가 없는 선물이 가장 이유가 큰 선물이라고 생각합니다. 그냥, 생각이 났습니다." }
    },
    mid: {
      friend: { c: "친구란 서로의 쓸데없는 이야기를 끝까지 들어주는 사이라고 생각해. 그래서 이 선물도 조금 쓸데없이 진지하게 골랐어.", p: "친구란 서로의 쓸데없는 이야기를 끝까지 들어주는 사이라고 생각합니다. 그래서 이 선물도 조금 쓸데없이 진지하게 골랐습니다." },
      coworker: { c: "함께 일한다는 건 하루에서 가장 긴 시간을 같은 곳에서 견딘다는 뜻이잖아. 그 시간에 늘 고마워하고 있어.", p: "함께 일한다는 건 하루에서 가장 긴 시간을 같은 곳에서 견딘다는 뜻입니다. 그 시간에 늘 감사하고 있습니다." },
      sibling: { c: "형제자매는 고르지 않았는데 평생 같이 가는 사이라 신기해. 평소엔 말 안 해도 은근히 챙기고 있어.", p: "형제자매는 고르지 않았는데 평생 같이 가는 사이라 신기합니다. 평소엔 말을 안 해도 은근히 챙기고 있습니다." },
      teacher: { c: "배움은 가르쳐 주신 분이 잊혀도 남는다고들 해요. 그래서 더 잊지 않고 감사드리고 싶었어요.", p: "배움은 가르쳐 주신 분이 잊혀도 남는다고들 합니다. 그래서 더 잊지 않고 감사드리고 싶었습니다." },
      parent: { c: "{p}한테 뭘 해 드려도 늘 부족한 것 같더라. 그래도 이런 걸 건넬 수 있다는 게 나는 다행이야.", p: "{p}께 무엇을 해 드려도 늘 부족한 것 같습니다. 그래도 이렇게 건넬 수 있다는 것이 다행입니다." },
      relative: { c: "자주 보진 못해도 마음속에서는 늘 챙기게 되는 사이잖아. 그 마음을 물건에 얹어 봤어.", p: "자주 뵙지는 못해도 마음속에서는 늘 챙기게 되는 사이입니다. 그 마음을 물건에 얹어 봤습니다." },
      kid: { c: "어른이 되면 잊어버리는 것들을 너는 아직 갖고 있어서 늘 신기해. 그래서 더 신중히 골랐어.", p: "어른이 되면 잊어버리는 것들을 아직 갖고 있어서 늘 신기합니다. 그래서 더 신중히 골랐습니다." }
    },
    trait: {
      lead: { c: "너는 {t} 사람이잖아. 그걸 떠올리며 한참 고민하다가 이런 선물을 골라봤어.", p: "{t} 분이시잖아요. 그걸 떠올리며 한참 고민한 끝에 이런 선물을 골라봤습니다." },
      none: { c: "솔직히 너에 대해 아는 게 많진 않아. 그래서 누가 받아도 편할 선물을 오래 고민해서 골라봤어.", p: "솔직히 아는 게 많지는 않습니다. 그래서 누가 받아도 편할 선물을 오래 고민해서 골라봤습니다." },
      fallback: { c: "아는 만큼만 떠올릴 수 있었지만, 한참 고민하다가 이런 선물을 골라봤어.", p: "아는 만큼만 떠올릴 수 있었지만, 한참 고민한 끝에 이런 선물을 골라봤습니다." },
      /* 선물과 관련 있는 특징만 골라 쓰도록, 특징마다 관련 상품 태그를 붙입니다. [문구, 태그들] */
      mods: {
        drink: { 0: ["커피를 자주 마시는", ["caffeine", "drinkware"]], 1: ["차를 즐겨 마시는", ["tea", "drinkware"]], 2: ["술을 즐기는", ["alcohol"]], 3: ["물이나 음료를 자주 마시는", ["drinkware"]] },
        sport: { 0: ["꾸준히 운동하는", ["sport"]] }, pet: { 0: ["반려동물과 함께 사는", ["pet"]] },
        play: { 0: ["집에서 시간을 보내는", ["home", "homeday", "game"]], 1: ["밖에서 돌아다니는", ["travel", "photo", "physical"]], 2: ["집과 밖을 오가는", ["game", "photo"]] },
        snack: { 0: ["간식을 챙겨 먹는", ["snack"]] }, look: { 0: ["꾸미는 데 신경 쓰는", ["beauty", "scent"]], 1: ["편한 것을 좋아하는", ["minimal"]] },
        live: { 0: ["혼자 사는", ["solo"]], 1: ["가족과 사는", ["family", "couple"]] },
        hobby: { 0: ["운동을 즐기는", ["sport"]], 1: ["게임을 즐기는", ["game"]], 2: ["집에서 영화나 웹툰을 보는", ["homeday"]], 3: ["여행과 나들이를 좋아하는", ["photo", "travel"]], 4: ["먹고 마시는 걸 즐기는", ["cook", "snack"]], 5: ["집을 가꾸는", ["home"]] }
      }
    },
    hope: {
      c: ["이 선물을 마음에 들어 했으면 좋겠어. 고민한 시간만큼, 마음이 잘 전해지면 좋겠어.", "작은 선물이지만 쓸 때마다 기분이 좋아졌으면 좋겠어. 고르면서 네 생각을 많이 했어."],
      p: ["이 선물을 마음에 들어 하셨으면 좋겠습니다. 고민한 시간만큼, 마음이 잘 전해졌으면 좋겠습니다.", "작은 선물이지만 쓰실 때마다 기분이 좋아지셨으면 좋겠습니다. 고르면서 생각을 많이 했습니다."]
    },
    sign: { c: "{n}", p: "{n} 드림" },
    to: { c: "{n}에게", p: "{n}님께", pTitle: "{n}께" }
  },
  /* 편지 호칭: 관계(가족은 부모님·친척·형제자매)와 성별로 받는 사람의 호칭을 미리 채우고, 쓰는 사람 후보를 칩으로 보여줍니다. fill 이 true 면 첫 호칭을 미리 입력해 둡니다. */
  names: {
    parent: { fill: true, to: { m: ["아빠", "아버지"], f: ["엄마", "어머니"] }, from: ["아들", "딸"] },
    relative: { fill: true, to: { m: ["삼촌", "큰아버지", "고모부", "이모부"], f: ["이모", "고모", "큰어머니", "숙모"] }, from: ["조카"] },
    sibling: { to: { m: ["형", "오빠", "동생"], f: ["누나", "언니", "동생"] }, from: ["동생", "형", "오빠", "누나", "언니"] },
    teacher: { fill: true, to: { m: ["선생님", "교수님"], f: ["선생님", "교수님"] }, from: ["제자"] },
    coworker: { to: { m: ["팀장님", "부장님", "선배님"], f: ["팀장님", "부장님", "선배님"] }, from: [] }
  },
  /* 상품: 윤우님이 고른 쿠팡 파트너스 링크. price 는 원 단위이고 예산 질문이 이 값으로 거릅니다. */
  products: [
    { rx: ["드립백 향부터 맡아 본다.", "눈이 잠깐 감긴다.", "「이거 아침마다 꺼내 마시겠다」"], name: "보난자커피 스페셜티 드립백 블렌드", card: { c: "이 드립백은 아침에 눈 뜨기 힘들 때 꺼내 마셔. 커피 마시고 오늘도 힘내!", p: "이 드립백은 아침에 일어나기 힘드실 때 꺼내 드세요. 커피 한 잔 하시고 오늘도 힘내세요!" }, line: "아침을 견디게 하는 가장 정중한 방법.", url: "https://link.coupang.com/a/igCsItiKjs", img: "", tags: ["teacher", "relative", "parent", "caffeine", "friend", "coworker", "sibling", "birthday", "promo", "random", "holiday", "office", "work", "solo", "cook", "consumable", "useful", "fancy", "a20", "a30", "a40", "a60"] },
    { rx: ["드립백을 하나 꺼내 컵에 걸어 본다.", "물 끓이러 간다.", "「바로 한 잔 해야겠다」"], name: "룰라커피 핸드드립 드립백", card: { c: "이 드립백은 컵에 걸기만 하면 돼서 귀찮을 때도 괜찮아. 커피 한 잔 하고 쉬엄쉬엄 해!", p: "이 드립백은 컵에 걸기만 하면 되니 귀찮을 때도 좋아요. 커피 한 잔 하시고 쉬엄쉬엄 하세요!" }, line: "커피는 몇 잔을 마셔도 다음 잔이 필요합니다.", url: "https://link.coupang.com/a/igCyNjaoay", img: "", tags: ["teacher", "relative", "parent", "caffeine", "friend", "coworker", "sibling", "birthday", "promo", "random", "holiday", "office", "work", "solo", "cook", "consumable", "useful", "a20", "a30", "a40", "a60"] },
    { rx: ["상자를 열고 티백 종류를 훑어본다.", "마음에 드는 걸 하나 고른다.", "「이거 저녁에 마셔야지」"], name: "트와이닝 클래식 차 컬렉션", card: { c: "이 차는 따뜻하게 우려 마시면 마음이 좀 느긋해져. 차 마시면서 잠깐 쉬어가!", p: "이 차는 따뜻하게 우려 드시면 마음이 느긋해져요. 차 드시면서 잠깐 쉬어가세요!" }, line: "차는 서두르는 사람에게 앉을 이유를 줍니다.", url: "https://link.coupang.com/a/igCHcbvT5w", img: "", tags: ["teacher", "relative", "parent", "tea", "friend", "coworker", "sibling", "crush", "random", "birthday", "comfort", "holiday", "office", "homeday", "cook", "consumable", "useful", "touching", "a20", "a30", "a40", "a60"] },
    { rx: ["향을 맡아 본다.", "조금 웃는다.", "「카페인 없는 거 마음에 든다」"], name: "런던프룻앤허브 과일차 모음", card: { c: "이 과일차는 카페인이 없어서 밤에도 마실 수 있어. 따뜻하게 마시고 푹 쉬어!", p: "이 과일차는 카페인이 없어서 밤에도 드실 수 있어요. 따뜻하게 드시고 푹 쉬세요!" }, line: "카페인을 피하는 사람에게도 오후는 찾아옵니다.", url: "https://link.coupang.com/a/igCMVwn3Bc", img: "", tags: ["teacher", "relative", "parent", "tea", "friend", "coworker", "crush", "comfort", "random", "holiday", "birthday", "home", "office", "consumable", "useful", "touching", "a20", "a30", "a40", "a60", "female"] },
    { rx: ["상자를 열자마자 하나를 집는다.", "한 입 먹고 말이 없다.", "「이거 어디서 샀어?」"], name: "김영모 과자점 미니쿠키", card: { c: "이 쿠키는 하나씩 꺼내 먹기 좋아. 간식 시간에 당 충전하고 힘내!", p: "이 쿠키는 하나씩 꺼내 드시기 좋아요. 간식 시간에 당 충전하시고 힘내세요!" }, line: "달콤함은 관례를 마음으로 바꿔 놓습니다.", url: "https://link.coupang.com/a/igCZnrkm5I", img: "", tags: ["kid", "teacher", "relative", "parent", "snack", "friend", "coworker", "crush", "sibling", "birthday", "random", "holiday", "promo", "office", "student", "homeday", "consumable", "touching", "fancy", "a10", "a20", "a30", "a40", "a60", "female"] },
    { rx: ["봉지를 하나 뜯어 본다.", "고개를 끄덕인다.", "「이런 건 있으면 계속 먹게 되더라」"], name: "다반사 4종 견과류 세트", card: { c: "이 견과류는 한 봉지씩 챙겨 먹기 좋아. 간식 대신 먹고 건강 챙겨!", p: "이 견과류는 한 봉지씩 챙겨 드시기 좋아요. 간식 대신 드시고 건강 챙기세요!" }, line: "하루를 조금 더 오래 버티게 하는 작은 알갱이들.", url: "https://link.coupang.com/a/igDdHu9U9k", img: "/assets/gift/products/6.webp", tags: ["teacher", "relative", "parent", "snack", "friend", "coworker", "sibling", "promo", "holiday", "birthday", "random", "office", "physical", "retired", "consumable", "useful", "a30", "a40", "a60"] },
    { rx: ["병을 들어 빛에 비춰 본다.", "뚜껑을 열어 냄새를 맡는다.", "「따뜻한 물에 타 먹으면 되겠다」"], name: "아카시아 벌꿀 과일청 선물세트", card: { c: "이 과일청은 따뜻한 물에 타 마시면 돼. 한 잔 마시고 겨울 잘 보내!", p: "이 과일청은 따뜻한 물에 타 드시면 돼요. 한 잔 드시고 겨울 잘 보내세요!" }, line: "겨울 목구멍에 건네는 작은 위로.", url: "https://link.coupang.com/a/igDnFSOswe", img: "/assets/gift/products/7.webp", tags: ["relative", "parent", "snack", "sweet", "friend", "coworker", "comfort", "holiday", "housewarm", "birthday", "home", "cook", "homeday", "consumable", "useful", "touching", "a30", "a40", "a60", "female"] },
    { rx: ["작은 병을 하나씩 꺼내 늘어놓는다.", "어느 걸 먼저 열지 고민한다.", "「빵부터 사 와야겠네」"], name: "다보 미니 과일잼 세트", card: { c: "이 잼은 빵에 발라 먹으면 아침이 조금 달아져. 맛있게 먹어!", p: "이 잼은 빵에 발라 드시면 아침이 조금 달아져요. 맛있게 드세요!" }, line: "빵이 있는 집에는 한 숟갈의 사치가 필요합니다.", url: "https://link.coupang.com/a/igDvKUe12y", img: "/assets/gift/products/8.webp", tags: ["relative", "parent", "snack", "sweet", "friend", "coworker", "sibling", "housewarm", "birthday", "random", "holiday", "solo", "couple", "cook", "homeday", "consumable", "fancy", "touching", "a20", "a30", "a40", "a60"] },
    { rx: ["뚜껑을 열고 한 번 짜 본다.", "손등에 문지른다.", "「향 좋다. 가방에 넣고 다녀야지」"], name: "논픽션 시트러스 핸드크림", card: { c: "이 핸드크림은 손 건조할 때 틈틈이 발라. 손이 촉촉해야 마음도 촉촉해져!", p: "이 핸드크림은 손이 건조할 때 틈틈이 발라 주세요. 손이 촉촉해야 마음도 촉촉해져요!" }, line: "손은 가장 많이 일하고 가장 적게 보살핌받습니다.", url: "https://link.coupang.com/a/igDKcGso6m", img: "/assets/gift/products/9.webp", tags: ["teacher", "scent", "friend", "coworker", "crush", "sibling", "birthday", "random", "holiday", "promo", "office", "beauty", "consumable", "fancy", "touching", "useful", "a20", "a30", "a40", "female"] },
    { rx: ["병에서 향을 한 번 맡아 본다.", "방 안을 둘러본다.", "「어디에 놓지」"], name: "쿤달 시그니처 디퓨저 베이비파우더", card: { c: "이 디퓨저는 방에 놔두면 알아서 향이 퍼져. 집에 있는 시간이 좀 더 좋아질 거야!", p: "이 디퓨저는 방에 두시면 알아서 향이 퍼져요. 집에 있는 시간이 더 좋아지실 거예요!" }, line: "향은 사라지지만 기억은 남습니다.", url: "https://link.coupang.com/a/igDS6vV0TY", img: "/assets/gift/products/10.webp", tags: ["petunsafe", "scent", "friend", "coworker", "crush", "housewarm", "birthday", "holiday", "solo", "couple", "home", "minimal", "consumable", "fancy", "touching", "a20", "a30", "a40", "female"] },
    { rx: ["뚜껑을 열고 향을 맡는다.", "잠깐 말이 없다.", "「오늘 밤에 켜 봐야겠다」"], name: "양키캔들 스몰 자캔들 3종", card: { c: "이 캔들은 불 켜 놓고 가만히 있기 좋아. 오늘 하루 마무리는 이걸로 해!", p: "이 캔들은 불을 켜 두고 가만히 있기 좋아요. 오늘 하루 마무리는 이걸로 하세요!" }, line: "불을 켜는 순간 방이 하루를 마무리할 준비를 합니다.", url: "https://link.coupang.com/a/igD1ElvV6W", img: "/assets/gift/products/11.webp", tags: ["petunsafe", "scent", "friend", "coworker", "housewarm", "birthday", "holiday", "comfort", "solo", "couple", "home", "consumable", "fancy", "touching", "a20", "a30", "a40", "female"] },
    { rx: ["작은 캔들을 손에 올려 본다.", "귀엽다는 표정이다.", "「이건 부담 없이 켜겠네」"], name: "양키캔들 보티브 3종", card: { c: "이 캔들은 작아서 부담 없이 켤 수 있어. 퇴근하고 한 번 켜 봐!", p: "이 캔들은 작아서 부담 없이 켤 수 있어요. 퇴근하시고 한 번 켜 보세요!" }, line: "작은 불빛 셋. 마음은 크기보다 개수로도 전해집니다.", url: "https://link.coupang.com/a/igD4xVCGlM", img: "/assets/gift/products/12.webp", tags: ["petunsafe", "scent", "friend", "coworker", "crush", "sibling", "random", "birthday", "comfort", "holiday", "solo", "home", "consumable", "touching", "fancy", "a20", "a30", "a40", "female"] },
    { rx: ["포장을 풀고 손으로 만져 본다.", "얼굴에 한 번 대 본다.", "「오 부드럽다. 이건 진짜 쓰겠다」"], name: "코토나 타월 세트", card: { c: "이 타월은 세수하고 쓰면 부드러워서 기분 좋아. 많이 쓰고 뽀송하게 지내!", p: "이 타월은 세수하고 쓰면 부드러워 기분이 좋아요. 많이 쓰시고 뽀송하게 지내세요!" }, line: "수건은 몇 장이 있어도 좋은 걸로 손이 갑니다.", url: "https://link.coupang.com/a/igEhYCuXJI", img: "/assets/gift/products/13.webp", tags: ["relative", "parent", "friend", "coworker", "sibling", "housewarm", "holiday", "birthday", "solo", "couple", "family", "home", "consumable", "useful", "a20", "a30", "a40", "a60"] },
    { rx: ["잔을 꺼내 불빛에 비춰 본다.", "손끝으로 살짝 튕겨 본다.", "「이 잔에 한 잔 마셔야겠다」"], name: "글라스락 미드나잇 와인잔 세트", card: { c: "이 와인잔에 좋아하는 술 따라 마셔. 한 잔 하고 푹 자!", p: "이 와인잔에 좋아하시는 술 따라 드세요. 한 잔 하시고 푹 주무세요!" }, line: "잔은 내용물보다 오래 남습니다.", url: "https://link.coupang.com/a/igErDHoskm", img: "/assets/gift/products/14.webp", tags: ["drinkware", "alcohol", "friend", "coworker", "housewarm", "birthday", "holiday", "solo", "couple", "home", "cook", "fancy", "touching", "a20", "a30", "a40"] },
    { rx: ["쟁반을 들어 앞뒤로 살펴본다.", "컵을 올려 보는 시늉을 한다.", "「이거 있으면 집에서 카페 놀이 하겠다」"], name: "한샘 우드 쟁반 월넛", card: { c: "이 쟁반 위에 커피랑 간식 올려서 가져다 먹어. 집에서 카페 놀이 해!", p: "이 쟁반에 커피랑 간식 올려 드세요. 집에서 카페 놀이 하세요!" }, line: "아침 한 끼도 쟁반에 올리면 의식이 됩니다.", url: "https://link.coupang.com/a/igEFaPZDW0", img: "/assets/gift/products/15.webp", tags: ["parent", "friend", "coworker", "housewarm", "birthday", "solo", "couple", "home", "cook", "homeday", "fancy", "useful", "a30", "a40", "a60"] },
    { rx: ["통을 돌려 라벨을 읽는다.", "조용히 고개를 끄덕인다.", "「이거 챙겨 먹어야 하는데 딱이다」"], name: "아임비타 멀티비타민", card: { c: "이 영양제 먹고 건강 챙겨! 바빠도 하루에 하나는 꼭 먹어야 해!", p: "이 영양제 드시고 건강 챙기세요! 바쁘셔도 하루에 하나는 꼭 드세요!" }, line: "챙겨 먹으라는 말을 선물로 바꾼 것.", url: "https://link.coupang.com/a/igEOw4Vu7E", img: "/assets/gift/products/16.webp", tags: ["relative", "parent", "friend", "coworker", "sibling", "birthday", "promo", "holiday", "comfort", "office", "physical", "student", "work", "consumable", "useful", "a20", "a30", "a40", "a60"] },
    { rx: ["작은 병을 들어 본다.", "뚜껑을 열려다 멈춘다.", "「피곤한 날 아껴서 마셔야지」"], name: "아임비타 멀티비타민 이뮨샷", card: { c: "이 이뮨샷 한 병 마시고 힘내! 피곤한 날에 꺼내 마셔!", p: "이 이뮨샷 한 병 드시고 힘내세요! 피곤한 날에 꺼내 드세요!" }, line: "바쁜 사람에게 한 병으로 건네는 안부.", url: "https://link.coupang.com/a/igES2XYWZM", img: "/assets/gift/products/17.webp", tags: ["parent", "friend", "coworker", "sibling", "promo", "comfort", "holiday", "birthday", "office", "physical", "work", "consumable", "useful", "fancy", "a20", "a30", "a40"] },
    { rx: ["상자를 열자마자 조각을 쏟는다.", "설명서는 보지 않는다.", "「이거 지금 만들래!」"], name: "리틀타익스 빌딩블럭", card: { c: "이 블록으로 놀다 보면 시간이 순식간에 가. 재미있게 갖고 놀아!", p: "이 블록으로 놀다 보면 시간이 순식간에 가요. 재미있게 가지고 노세요!" }, line: "만드는 동안은 누구나 조용해집니다.", url: "https://link.coupang.com/a/igE0ZjIyce", img: "", tags: ["kid", "birthday", "random", "holiday", "family", "parenting", "student", "homeday", "home", "funny", "touching", "a10"] },
    { rx: ["한 번 뿌려 본다.", "공기가 바뀐 듯 숨을 들이쉰다.", "「이거 괜찮다」"], name: "헉슬리 룸 스프레이 모로칸가드너", card: { c: "이 룸 스프레이는 방에 한 번 뿌리면 분위기가 달라져. 답답할 때 칙칙 뿌려!", p: "이 룸 스프레이는 방에 한 번 뿌리면 분위기가 달라져요. 답답할 때 칙칙 뿌려 보세요!" }, line: "공간에 취향을 뿌립니다.", url: "https://link.coupang.com/a/igFkg23HNI", img: "/assets/gift/products/19.webp", tags: ["petunsafe", "scent", "friend", "coworker", "crush", "housewarm", "birthday", "random", "solo", "home", "minimal", "consumable", "fancy", "useful", "a20", "a30", "a40", "female"] },
    { rx: ["작은 화분을 책상에 올려 본다.", "잎을 한 번 만져 본다.", "「물 얼마나 줘야 돼?」"], name: "화산석 화분 미니 바오밥나무", card: { c: "이 작은 나무는 물 자주 안 줘도 돼서 키우기 쉬워. 책상 위에 올려놔!", p: "이 작은 나무는 물을 자주 안 줘도 돼서 키우기 쉬워요. 책상 위에 올려 두세요!" }, line: "16,000원짜리 나무가 천 년을 사는 이름을 달고 있습니다.", url: "https://link.coupang.com/a/igF8NMI9HE", img: "/assets/gift/products/20.webp", tags: ["teacher", "parent", "petunsafe", "friend", "coworker", "crush", "housewarm", "promo", "random", "birthday", "solo", "office", "home", "touching", "funny", "a20", "a30", "a40", "a60"] },
    { rx: ["화병에 물을 채워 본다.", "창가 쪽을 본다.", "「여기 놓으면 되겠다」"], name: "수경식물 테이블야자 라반화병 세트", card: { c: "이 식물은 물만 갈아주면 쑥쑥 자라. 초록색 보면서 눈 좀 쉬어!", p: "이 식물은 물만 갈아 주면 쑥쑥 자라요. 초록색 보시면서 눈 좀 쉬세요!" }, line: "물만 주면 되는 가장 느슨한 책임.", url: "https://link.coupang.com/a/igGaOKKXiS", img: "/assets/gift/products/21.webp", tags: ["teacher", "parent", "friend", "coworker", "housewarm", "promo", "birthday", "random", "solo", "office", "home", "touching", "useful", "a20", "a30", "a40", "a60"] },
    { rx: ["포장이 예뻐서 한참 본다.", "하나를 꺼내 먹는다.", "「이건 아껴 먹어야겠다」"], name: "신라명과 셀레브르쿠키", card: { c: "이 쿠키는 커피랑 같이 먹으면 딱이야. 단 거 먹고 기분 좋아져!", p: "이 쿠키는 커피랑 같이 드시면 딱이에요. 단 거 드시고 기분 좋아지세요!" }, line: "포장이 먼저 말을 걸고 쿠키가 이어서 말합니다.", url: "https://link.coupang.com/a/igHB5DiNWu", img: "/assets/gift/products/22.webp", tags: ["kid", "teacher", "relative", "parent", "snack", "friend", "coworker", "crush", "sibling", "birthday", "random", "holiday", "promo", "office", "student", "homeday", "consumable", "touching", "fancy", "a10", "a20", "a30", "a40", "a60", "female"] },
    { rx: ["양말 포장을 뜯어 본다.", "발에 대 본다.", "「이거 운동할 때 신어야겠다」"], name: "CEP 남성 러닝 삭스", card: { c: "이 양말 신고 달리면 발이 훨씬 편할 거야. 신고 운동 열심히 해!", p: "이 양말 신고 달리시면 발이 훨씬 편하실 거예요. 신으시고 운동 열심히 하세요!" }, line: "달리는 사람의 발목에게 건네는 가장 조용한 응원.", url: "https://link.coupang.com/a/igIzIaVGuG", img: "/assets/gift/products/23.webp", tags: ["friend", "sibling", "coworker", "birthday", "promo", "holiday", "random", "physical", "office", "sport", "consumable", "useful", "fancy", "a20", "a30", "a40", "male", "onlymale"] },
    { rx: ["양말 포장을 뜯어 본다.", "발에 대 본다.", "「이거 운동할 때 신어야겠다」"], name: "CEP 남성 올데이 리커버리 미드컷 삭스", card: { c: "이 양말은 운동 끝나고 신으면 다리가 편해. 푹 쉬고 회복 잘 해!", p: "이 양말은 운동 끝나고 신으시면 다리가 편해요. 푹 쉬시고 회복 잘 하세요!" }, line: "달린 뒤의 발은 보상받을 자격이 있습니다.", url: "https://link.coupang.com/a/igIGOmeQtE", img: "/assets/gift/products/24.webp", tags: ["friend", "sibling", "coworker", "birthday", "promo", "holiday", "random", "physical", "office", "sport", "consumable", "useful", "fancy", "touching", "a20", "a30", "a40", "a60", "male", "onlymale"] },
    { rx: ["양말 포장을 뜯어 본다.", "발에 대 본다.", "「이거 운동할 때 신어야겠다」"], name: "CEP 여성 더 런 로우컷 삭스", card: { c: "이 양말 신고 달리면 발이 훨씬 편할 거야. 신고 운동 열심히 해!", p: "이 양말 신고 달리시면 발이 훨씬 편하실 거예요. 신으시고 운동 열심히 하세요!" }, line: "달리기를 시작한 사람은 양말부터 진지해집니다.", url: "https://link.coupang.com/a/igIMJO67vU", img: "/assets/gift/products/25.webp", tags: ["friend", "sibling", "coworker", "birthday", "promo", "holiday", "random", "physical", "office", "sport", "consumable", "useful", "fancy", "a20", "a30", "a40", "female", "onlyfemale"] },
    { rx: ["물병 뚜껑을 열었다 닫아 본다.", "가방에 넣어 본다.", "「이거 들고 다니기 딱이다」"], name: "나이키 빅마우스 물병 블랙", card: { c: "이 물병 들고 다니면서 물 자주 마셔. 물 마시고 건강 챙겨!", p: "이 물병 들고 다니시면서 물 자주 드세요. 물 드시고 건강 챙기세요!" }, line: "물은 하루에 몇 번 기억해 주기를 기다립니다.", url: "https://link.coupang.com/a/igIRzASWQ0", img: "/assets/gift/products/26.webp", tags: ["kid", "drinkware", "friend", "sibling", "coworker", "crush", "birthday", "random", "promo", "student", "office", "physical", "sport", "travel", "useful", "a10", "a20", "a30", "a40"] },
    { rx: ["카메라를 눈에 대 본다.", "셔터를 한 번 눌러 본다.", "「이거 어디 가서 찍어 봐야겠다」"], name: "아그파 컬러 일회용카메라", card: { c: "이 카메라로 오늘을 한 장 찍어 봐. 나중에 현상해 보면 뜻밖에 좋을 거야!", p: "이 카메라로 오늘을 한 장 찍어 보세요. 나중에 현상해 보시면 뜻밖에 좋을 거예요!" }, line: "필름은 결과를 기다리는 시간까지 선물에 포함시킵니다.", url: "https://link.coupang.com/a/igJmxzZSOi", img: "/assets/gift/products/27.webp", tags: ["kid", "friend", "sibling", "crush", "birthday", "random", "anniv", "holiday", "student", "travel", "photo", "funny", "touching", "fancy", "a10", "a20", "a30"] },
    { boost: 0.4, rx: ["옷을 펼쳐 몸에 대 본다.", "거울 쪽으로 간다.", "「이거 입고 운동해 봐야겠다」"], name: "나이키 컴프레션 반팔", card: { c: "이 옷 입고 운동하면 몸이 훨씬 가벼울 거야. 입고 열심히 운동해!", p: "이 옷 입고 운동하시면 몸이 훨씬 가벼우실 거예요. 입으시고 열심히 운동하세요!" }, line: "운동하는 사람에게 땀은 옷을 고르는 이유입니다.", url: "https://link.coupang.com/a/igJuqag1S1", img: "/assets/gift/products/28.webp", tags: ["friend", "sibling", "coworker", "birthday", "promo", "holiday", "physical", "office", "sport", "useful", "fancy", "a10", "a20", "a30", "a40", "male", "onlymale"] },
    { rx: ["상자를 열고 반려동물 쪽을 먼저 본다.", "설치 방법부터 찾는다.", "「이거 있으면 마음이 놓이겠다」"], name: "디클펫 반려동물 자동급식기", card: { c: "이 급식기는 바쁜 날에도 밥 시간을 알아서 챙겨 줘. 쓰고 반려동물이랑 오래오래 행복해!", p: "이 급식기는 바쁜 날에도 밥 시간을 알아서 챙겨 줘요. 쓰시고 반려동물이랑 오래오래 행복하세요!" }, line: "집을 비우는 시간에도 마음은 밥그릇 앞에 있습니다.", url: "https://link.coupang.com/a/igJFL35rb2", img: "/assets/gift/products/29.webp", tags: ["friend", "sibling", "coworker", "birthday", "housewarm", "holiday", "solo", "couple", "family", "office", "pet", "useful", "touching", "a20", "a30", "a40", "a60"] },
    { rx: ["물통을 열어 본다.", "반려동물을 부른다.", "「이거 마셔 줄까 모르겠네」"], name: "페블펫 3중여과 자동급수기", card: { c: "이 급수기는 물이 늘 신선해서 마음이 놓여. 쓰고 반려동물이랑 오래오래 건강하게 지내!", p: "이 급수기는 물이 늘 신선해서 마음이 놓여요. 쓰시고 반려동물이랑 오래오래 건강하게 지내세요!" }, line: "물이 늘 신선하다는 사실은 말 못 하는 가족에게 가장 큰 배려입니다.", url: "https://link.coupang.com/a/igJV9KFYAe", img: "/assets/gift/products/30.webp", tags: ["friend", "sibling", "coworker", "birthday", "housewarm", "holiday", "random", "solo", "couple", "family", "office", "pet", "useful", "touching", "a20", "a30", "a40", "a60"] },
    { rx: ["패드를 양손으로 잡아 본다.", "버튼을 눌러 본다.", "「이거 지금 연결해 볼래」"], name: "메카닉 G1 게임패드", card: { c: "이 게임패드 쓰면 손이 훨씬 편해. 쓰고 게임 맘껏 즐겨!", p: "이 게임패드 쓰시면 손이 훨씬 편해요. 쓰시고 게임 마음껏 즐기세요!" }, line: "손에 쥐는 순간 반응이 달라지는 물건이 있습니다.", url: "https://link.coupang.com/a/igJ8p45Hzw", img: "/assets/gift/products/31.webp", tags: ["friend", "sibling", "coworker", "birthday", "random", "promo", "student", "homeday", "home", "game", "useful", "fancy", "funny", "a10", "a20", "a30", "male"] },
    { rx: ["뚜껑을 돌려 열어 본다.", "손에 쥐고 무게를 가늠한다.", "「이거 매일 들고 다니겠다」"], name: "MOOA 스테인리스 텀블러 보온보냉", card: { c: "이 텀블러에 따뜻한 거 담아 다녀. 쓰고 하루 종일 따뜻하게 지내!", p: "이 텀블러에 따뜻한 걸 담아 다니세요. 쓰시고 하루 종일 따뜻하게 지내세요!" }, line: "마시는 동안만큼은 아무것도 식지 않습니다.", url: "https://link.coupang.com/a/igMD1Z0KzY", img: "/assets/gift/products/32.webp", tags: ["parent", "drinkware", "friend", "sibling", "coworker", "crush", "birthday", "promo", "random", "holiday", "housewarm", "useful", "fancy", "a10", "a20", "a30", "a40", "a60"] },
    { rx: ["상자를 열고 안마기를 허리 뒤에 대 본다.", "잠깐 말이 없어진다.", "「…이거 진짜 시원하다」"], name: "무선 허리 안마기", card: { c: "이 안마기는 허리가 뻐근할 때 의자에 두고 켜 봐. 안마기 쓰고 몸 좀 풀어!", p: "이 안마기는 허리가 뻐근하실 때 의자에 두고 켜 보세요. 안마기 쓰시고 몸 좀 푸세요!" }, line: "굳이 말하지 않아도 허리는 이미 알고 있습니다. 알아봐 주길 기다렸을 뿐입니다.", url: "https://link.coupang.com/a/ig9suhQ93A", img: "/assets/gift/products/33.webp", tags: ["parent", "relative", "friend", "coworker", "sibling", "birthday", "holiday", "promo", "office", "work", "physical", "comfort", "useful", "touching", "a30", "a40", "a60"] },
    { rx: ["공을 꺼내 손바닥 위에서 띄워 본다.", "떠 있는 공을 한참 쳐다본다.", "「이거 어떻게 떠 있는 거야?」"], name: "공중부양 플라잉볼", card: { c: "이 플라잉볼은 손 위에 띄우면 신기하게 떠 있어. 갖고 놀면서 스트레스 날려!", p: "이 플라잉볼은 손 위에 띄우시면 신기하게 떠 있어요. 갖고 놀면서 스트레스 날려 보세요!" }, line: "손에서 놓는 순간 이 공은 중력을 모른 척합니다. 아이 눈에는 마법이고, 어른 눈에는 3분쯤 수상합니다.", url: "https://link.coupang.com/a/ig9y3JjL1o", img: "/assets/gift/products/34.webp", tags: ["kid", "friend", "sibling", "a10", "birthday", "random", "student", "homeday", "funny", "fancy"] },
    { rx: ["상자를 열자마자 조각을 쏟는다.", "설명서를 펼치고 조용히 앉는다.", "「이거 한 시간은 사라지겠다」"], name: "마인크래프트 레고 빅피규어", card: { c: "이 레고는 조립하다 보면 시간이 순식간에 가. 만들면서 쉬어 가!", p: "이 레고는 조립하다 보면 시간이 순식간에 가요. 만드시면서 쉬어 가세요!" }, line: "완성하는 데 한 시간쯤 걸립니다. 그 한 시간이 선물입니다.", url: "https://link.coupang.com/a/ig9Gd4WVeS", img: "/assets/gift/products/35.webp", tags: ["kid", "friend", "sibling", "a10", "birthday", "random", "holiday", "homeday", "home", "funny", "touching"] },
    { rx: ["키트를 꺼내 하나씩 펼쳐 본다.", "잔을 들고 한참 쳐다본다.", "「오… 이거 한 잔 해야겠다」"], name: "위스키 스모커 키트", card: { c: "이 키트로 위스키에 연기를 입혀 봐. 한 잔 하면서 오늘도 수고했어!", p: "이 키트로 위스키에 연기를 입혀 보세요. 한 잔 하시면서 오늘도 수고하셨습니다!" }, line: "마시기 전에 연기부터 입힙니다. 술보다 시간이 먼저 근사해집니다.", url: "https://link.coupang.com/a/ig9RRw1nvE", img: "/assets/gift/products/36.webp", tags: ["alcohol", "friend", "coworker", "sibling", "birthday", "promo", "holiday", "housewarm", "fancy", "funny", "touching", "a30", "a40", "male"] },
    { rx: ["컵을 꺼내 쌓아 본다.", "무너진다. 다시 쌓는다.", "「잠깐만, 한 번만 더」"], name: "스피드 컵쌓기 게임 키트", card: { c: "이 컵쌓기는 하다 보면 승부욕이 생겨. 하면서 시간 가는 줄 몰라 봐!", p: "이 컵쌓기는 하다 보면 승부욕이 생겨요. 하시면서 시간 가는 줄 모르실 거예요!" }, line: "컵 몇 개로 어른도 승부욕이 생깁니다. 손이 빨라질수록 말수는 줄어듭니다.", url: "https://link.coupang.com/a/ig92Fyj8hg", img: "/assets/gift/products/37.webp", tags: ["kid", "friend", "sibling", "a10", "birthday", "random", "student", "homeday", "funny"] },
    { rx: ["상자를 열어 여섯 개를 늘어놓는다.", "하나씩 향을 맡아 본다.", "「다 다른 향이네. 뭐부터 쓰지」"], name: "매디플라워 보니타가든 6종 핸드크림", card: { c: "이 핸드크림은 여섯 가지라 기분 따라 골라 쓸 수 있어. 손 촉촉하게 지내!", p: "이 핸드크림은 여섯 가지라 기분 따라 골라 쓰실 수 있어요. 손 촉촉하게 지내세요!" }, line: "한 통이 아니라 여섯 가지 향입니다. 그날 기분대로 고르는 재미까지 들어 있습니다.", url: "https://link.coupang.com/a/ig98dXY4wS", img: "/assets/gift/products/38.webp", tags: ["scent", "parent", "relative", "teacher", "friend", "coworker", "sibling", "birthday", "random", "holiday", "promo", "office", "beauty", "consumable", "fancy", "touching", "useful", "a20", "a30", "a40", "a60", "female"] }
  ]
};
