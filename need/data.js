// 가성비맨 퀴즈의 질문, 상품, 문구는 이 파일에서 바꿉니다. (상품은 products-draft.json → build-data.js 로 합칩니다)
// 질문의 선택지 하나가 "불편 신호"(signals)에 점수를 줍니다. mult 는 그 신호를 깎는 배율입니다(예: 요리를 안 하면 주방 신호 x0.4).
window.NEED = {
 settings: { askCount: 13, minEvidence: 2, singleEvidenceFactor: 0.5, ownPower: 1.5, ahaBase: 0.3, ahaGain: 1.4, alsoCount: 3 },
 analytics: { id: "b879d6da-1b32-4120-b0f4-367e273fa58f", src: "https://cloud.umami.is/script.js" },
 strings: {
  title: "Uselessly Yours", headline: "굳이 필요한 물건 추천기",
  tagline: "나도 몰랐던, 진짜 필요한 물건. 평범한 질문 몇 개로 당신 하루의 구멍을 찾아서 1만원 안팎으로 메워드려요.",
  intro: "하아, 또 한 분 오셨네요. 오늘도 한 명의 시민을 낭비로부터 구해야 하나 봐요. 어려울 것 없어요. 그냥 평소처럼 답해 주세요.",
  start: "시작할게요", back: "한 칸 전으로", qn: "{n} / {m}",
  thinking: ["영수증 계산 중…", "하루 동선 훑는 중…", "구멍 찾는 중…"],
  lead: "당신에게 없는데, 알고 보니 가장 필요했던 건", why: "이 답들에서 {sig} 쪽 신호가 두 번 이상 나왔어요.",
  whyWeak: "단서가 아주 확실하진 않지만, 답을 종합하면 이쪽이 가장 가까웠어요.",
  buy: "물건 보러가기", soon: "링크 준비 중", have: "이미 있어요, 다음 추천", also: "이런 것도 구멍을 메워줘요",
  noMore: "더 추천할 물건이 없어요. 당신은 이미 꽤 완성된 시민입니다.", again: "다시 해보기", price: "1만원 안팎",
  tagline2: "이건 사치가 아니에요. 투자예요.",
  disclosure: "이 페이지는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.",
  other: "쓸데없는 물건 추천기도 해보기"
 },
 quips: {
  hands: "손이 두 개뿐이라는 건 설계 결함이에요.", lost: "찾는 시간이 사는 시간보다 길어요.", wet: "마르지 않는 것은 결국 기분까지 눅눅하게 해요.",
  tight: "집이 좁은 게 아니라 쓰임새가 덜 찾아진 거예요.", cold: "바람은 틈으로만 들어와요. 틈이 답이에요.", drop: "떨어뜨리는 건 폰이 아니라 마음이에요.",
  tangle: "엉키는 건 시간 문제가 아니라 확률 문제예요.", smell: "냄새는 스스로 나가지 않아요. 보내드려야 해요.", chore: "귀찮은 일은 줄이는 게 아니라 없애는 거예요.",
  dust: "먼지는 성실해요. 우리가 더 성실해져야 해요.", cables: "선은 정리하지 않으면 스스로 번식해요.", bag: "가방은 가벼울수록 가성비가 올라가요.",
  cook: "한 끼를 1분 줄이면 1년이면 이틀이에요.", desk: "책상은 작업장이에요. 마음처럼 정리하세요.", laundry: "빨래는 널 때가 아니라 마를 때가 승부예요.",
  pet: "털은 털 주인의 애정 표현이에요.", light: "잠은 투자 대비 효과가 가장 큰 소비예요.", travel: "여행 짐은 빼는 사람이 이겨요."
 },
 questions: [
  { id: "morning", text: "평일 아침, 눈을 뜨고 가장 먼저 하는 일은?", options: [
    { text: "폰부터 본다", sig: { drop: 1, lost: 0.3 } }, { text: "한 번 더 잔다", sig: { tangle: 0.3, light: 0.5 } }, { text: "바로 씻으러 간다", sig: { wet: 0.7 } } ] },
  { id: "home", text: "퇴근하고 집에 들어오면 첫 행동은?", options: [
    { text: "가방을 아무 데나 둔다", sig: { bag: 1, lost: 0.6 } }, { text: "옷부터 갈아입는다", sig: { tight: 0.8, laundry: 0.4 } }, { text: "냉장고부터 연다", sig: { cook: 1 } } ] },
  { id: "rest", text: "쉬는 날 가장 오래 머무는 곳은?", options: [
    { text: "침대", sig: { drop: 0.8, tangle: 0.4 } }, { text: "소파", sig: { lost: 0.8, drop: 0.4 } }, { text: "책상 앞", sig: { cables: 1, desk: 1 } } ] },
  { id: "dinner", text: "저녁은 보통 어떻게 해결하나요?", options: [
    { text: "거의 배달", sig: {}, mult: { cook: 0.4 } }, { text: "대충 데워 먹는다", sig: { cook: 1.1 } }, { text: "직접 해 먹는다", sig: { chore: 0.8, cook: 0.5, hands: 0.5 } } ] },
  { id: "laundry", text: "빨래할 때 가장 귀찮은 순간은?", options: [
    { text: "널 곳을 찾을 때", sig: { laundry: 1, tight: 0.6, wet: 0.4 } }, { text: "개켜서 넣을 때", sig: { laundry: 0.6, tight: 0.6 } }, { text: "양말 짝을 맞출 때", sig: { laundry: 1, lost: 0.7 } }, { text: "딱히 귀찮지 않다", sig: {} } ] },
  { id: "search", text: "최근 한 달, 뭔가 찾느라 집을 뒤진 적이 있다면?", options: [
    { text: "거의 매주", sig: { lost: 1.3 } }, { text: "가끔", sig: { lost: 0.7 } }, { text: "거의 없다", sig: {} } ] },
  { id: "trash", text: "음식물이나 쓰레기를 버릴 때, 보통 어떻게 하나요?", options: [
    { text: "손에 든 채 발로 뚜껑을 연다", sig: { hands: 1, smell: 0.4 } }, { text: "모아 두었다가 한꺼번에 버린다", sig: { smell: 1 } }, { text: "생기면 바로바로 버린다", sig: {} } ] },
  { id: "bath", text: "샤워를 마치고 욕실을 둘러보면?", options: [
    { text: "물기가 남아 있다", sig: { wet: 1, smell: 0.4 } }, { text: "머리카락이 보인다", sig: { dust: 1, chore: 0.6 } }, { text: "꽤 깔끔하다", sig: {} } ] },
  { id: "season", text: "더 힘든 계절은?", options: [
    { text: "겨울", sig: { cold: 1 } }, { text: "여름", sig: { smell: 0.7, wet: 0.5 } }, { text: "둘 다 괜찮다", sig: {} } ] },
  { id: "bag", text: "주말 외출 가방은 어떤 편인가요?", options: [
    { text: "이것저것 많이 든다", sig: { bag: 1, tight: 0.4 } }, { text: "최소한만 든다", sig: { lost: 0.4 } }, { text: "그날그날 다르다", sig: { bag: 0.6, tangle: 0.3 } } ] },
  { id: "bed", text: "잠자리에 들 때 은근히 거슬리는 것은?", options: [
    { text: "새어 들어오는 빛", sig: { light: 1 } }, { text: "작은 소리", sig: { light: 0.9 } }, { text: "이불이 흘러내리는 것", sig: { tangle: 1 } }, { text: "딱히 없다", sig: {} } ] },
  { id: "drawer", text: "서랍을 열었을 때 모습은?", options: [
    { text: "뒤죽박죽", sig: { tight: 1, tangle: 0.5 } }, { text: "꽤 정리돼 있다", sig: {} }, { text: "서랍 자체가 별로 없다", sig: { tight: 0.8 } } ] },
  { id: "trip", text: "여행 짐을 싸는 스타일은?", options: [
    { text: "늘 넘친다", sig: { travel: 1, tight: 0.6 } }, { text: "딱 필요한 것만", sig: { travel: 0.3 } }, { text: "여행은 자주 안 간다", sig: {} } ] },
  { id: "pet", text: "집에서 함께 사는 존재는?", options: [
    { text: "강아지나 고양이", sig: { pet: 1.5, dust: 0.6 } }, { text: "나 혼자 또는 사람들", sig: {}, mult: { pet: 0.1 } } ] },
  { id: "charge", text: "충전기와 케이블은 어떤 상태인가요?", options: [
    { text: "엉켜 있다", sig: { cables: 1, tangle: 0.4 } }, { text: "나름 정리돼 있다", sig: {} }, { text: "충전은 침대 옆에서 한다", sig: { cables: 0.6, drop: 0.7 } } ] }
 ],
 signals: {
 "hands": "손이 부족한 순간",
 "lost": "자꾸 잃어버림",
 "wet": "물기·눅눅함",
 "tight": "공간이 좁음",
 "cold": "추위·외풍",
 "drop": "자꾸 떨어뜨림",
 "tangle": "엉킴·뭉침",
 "smell": "냄새",
 "chore": "귀찮은 반복 집안일",
 "dust": "먼지·머리카락",
 "cables": "선 정리",
 "bag": "가방·외출 짐",
 "cook": "혼밥·간단 조리",
 "desk": "책상·작업 환경",
 "laundry": "빨래",
 "pet": "반려동물",
 "light": "빛·소리 거슬림",
 "travel": "여행·이동"
},
 products: [
 {
  "id": 1,
  "name": "이불 고정 클립 (커버 모서리 집게)",
  "search": "duvet clip / 이불 고정 클립",
  "signals": {
   "tangle": 1
  },
  "own": 0.1,
  "aha": 0.9,
  "url": "",
  "img": ""
 },
 {
  "id": 2,
  "name": "침대 틈새 선반 (매트리스 옆 폰 거치)",
  "search": "bed gap shelf / 침대 틈새 수납",
  "signals": {
   "drop": 1,
   "lost": 0.5
  },
  "own": 0.1,
  "aha": 0.95,
  "url": "",
  "img": ""
 },
 {
  "id": 3,
  "name": "목걸이형 폰 거치대",
  "search": "neck phone holder / 목걸이 폰 거치대",
  "signals": {
   "hands": 0.8,
   "drop": 0.6
  },
  "own": 0.15,
  "aha": 0.7,
  "url": "",
  "img": ""
 },
 {
  "id": 4,
  "name": "양말 짝 클립",
  "search": "sock clips laundry / 양말 집게 세탁",
  "signals": {
   "laundry": 1,
   "lost": 0.6
  },
  "own": 0.1,
  "aha": 0.8,
  "url": "",
  "img": ""
 },
 {
  "id": 5,
  "name": "옷걸이 연결 고리 (캐스케이드)",
  "search": "hanger connector hooks / 옷걸이 연결고리",
  "signals": {
   "tight": 1
  },
  "own": 0.2,
  "aha": 0.7,
  "url": "",
  "img": ""
 },
 {
  "id": 6,
  "name": "배수구 머리카락 거름망·청소 갈고리",
  "search": "drain hair catcher / 배수구 머리카락 거름망",
  "signals": {
   "dust": 0.8,
   "chore": 0.8
  },
  "own": 0.35,
  "aha": 0.55,
  "url": "",
  "img": ""
 },
 {
  "id": 7,
  "name": "자석 비누 홀더",
  "search": "magnetic soap holder / 자석 비누 거치대",
  "signals": {
   "wet": 1
  },
  "own": 0.1,
  "aha": 0.8,
  "url": "",
  "img": ""
 },
 {
  "id": 8,
  "name": "전자레인지 라면 조리기",
  "search": "microwave ramen cooker / 전자레인지 라면 용기",
  "signals": {
   "cook": 1,
   "chore": 0.4
  },
  "own": 0.25,
  "aha": 0.8,
  "url": "",
  "img": ""
 },
 {
  "id": 9,
  "name": "전자레인지 계란 조리기",
  "search": "microwave egg cooker / 계란찜 전자레인지",
  "signals": {
   "cook": 1
  },
  "own": 0.15,
  "aha": 0.8,
  "url": "",
  "img": ""
 },
 {
  "id": 10,
  "name": "비닐봉지 디스펜서",
  "search": "plastic bag dispenser / 비닐봉지 정리함",
  "signals": {
   "tight": 0.6,
   "tangle": 0.7
  },
  "own": 0.2,
  "aha": 0.6,
  "url": "",
  "img": ""
 },
 {
  "id": 11,
  "name": "저가 분실방지 태그",
  "search": "key finder tag / 분실방지 태그",
  "signals": {
   "lost": 1,
   "bag": 0.5
  },
  "own": 0.3,
  "aha": 0.6,
  "url": "",
  "img": ""
 },
 {
  "id": 12,
  "name": "문풍지·창틈 틈막이 테이프",
  "search": "door window draft seal / 문풍지 틈막이",
  "signals": {
   "cold": 1,
   "light": 0.3
  },
  "own": 0.25,
  "aha": 0.6,
  "url": "",
  "img": ""
 },
 {
  "id": 13,
  "name": "케이블 정리 클립 (책상 가장자리 고정)",
  "search": "cable clips desk / 케이블 클립 책상",
  "signals": {
   "cables": 1,
   "drop": 0.4
  },
  "own": 0.3,
  "aha": 0.6,
  "url": "",
  "img": ""
 },
 {
  "id": 14,
  "name": "멀티탭 고정 거치대 (벽·책상 하부)",
  "search": "power strip holder / 멀티탭 거치대",
  "signals": {
   "cables": 1,
   "dust": 0.4
  },
  "own": 0.2,
  "aha": 0.85,
  "url": "",
  "img": ""
 },
 {
  "id": 15,
  "name": "봉지 클립 (과자·냉동식품 밀봉)",
  "search": "bag sealing clips / 봉지 집게 밀봉",
  "signals": {
   "cook": 0.5,
   "smell": 0.3
  },
  "own": 0.45,
  "aha": 0.4,
  "url": "",
  "img": "",
  "active": false
 },
 {
  "id": 16,
  "name": "세탁망 지퍼 소분 (속옷·양말)",
  "search": "laundry wash bag / 세탁망",
  "signals": {
   "laundry": 1,
   "lost": 0.4
  },
  "own": 0.5,
  "aha": 0.4,
  "url": "",
  "img": "",
  "active": false
 },
 {
  "id": 17,
  "name": "싱크대 거름망 스토퍼",
  "search": "sink strainer / 싱크대 거름망",
  "signals": {
   "chore": 0.9,
   "smell": 0.6
  },
  "own": 0.5,
  "aha": 0.4,
  "url": "",
  "img": "",
  "active": false
 },
 {
  "id": 18,
  "name": "도어 후크 (문 위 걸이)",
  "search": "over the door hook / 문걸이 후크",
  "signals": {
   "tight": 1,
   "bag": 0.5
  },
  "own": 0.35,
  "aha": 0.5,
  "url": "",
  "img": "",
  "active": false
 },
 {
  "id": 19,
  "name": "접착 벽 후크 (못 없이)",
  "search": "adhesive wall hooks / 접착 후크",
  "signals": {
   "tight": 0.8,
   "bag": 0.6
  },
  "own": 0.45,
  "aha": 0.4,
  "url": "",
  "img": "",
  "active": false
 },
 {
  "id": 20,
  "name": "신발 냄새 제거 파우치 (활성탄)",
  "search": "shoe deodorizer charcoal / 신발 탈취 숯",
  "signals": {
   "smell": 1
  },
  "own": 0.2,
  "aha": 0.6,
  "url": "",
  "img": ""
 },
 {
  "id": 21,
  "name": "서랍 칸막이 (조절형)",
  "search": "drawer divider adjustable / 서랍 칸막이",
  "signals": {
   "tight": 0.9,
   "tangle": 0.5
  },
  "own": 0.3,
  "aha": 0.55,
  "url": "",
  "img": ""
 },
 {
  "id": 22,
  "name": "접이식 세탁물 건조대 (문고리형)",
  "search": "hanging drying rack / 걸이형 건조대",
  "signals": {
   "laundry": 1,
   "wet": 0.6,
   "tight": 0.6
  },
  "own": 0.25,
  "aha": 0.7,
  "url": "",
  "img": ""
 },
 {
  "id": 23,
  "name": "에어컨 리모컨·TV 리모컨 거치대 (벽)",
  "search": "remote holder wall / 리모컨 벽 거치대",
  "signals": {
   "lost": 1
  },
  "own": 0.2,
  "aha": 0.6,
  "url": "",
  "img": ""
 },
 {
  "id": 24,
  "name": "충전기 선 보호 스프링 (케이블 끝)",
  "search": "cable protector spring / 케이블 보호 스프링",
  "signals": {
   "cables": 0.8,
   "drop": 0.3
  },
  "own": 0.35,
  "aha": 0.5,
  "url": "",
  "img": ""
 },
 {
  "id": 25,
  "name": "접이식 실리콘 깔때기",
  "search": "silicone funnel foldable / 접이식 깔때기",
  "signals": {
   "cook": 0.6,
   "chore": 0.5
  },
  "own": 0.15,
  "aha": 0.7,
  "url": "",
  "img": ""
 },
 {
  "id": 26,
  "name": "칫솔·치약 벽 거치대",
  "search": "toothbrush wall holder / 칫솔 벽걸이",
  "signals": {
   "wet": 0.8,
   "tight": 0.6
  },
  "own": 0.35,
  "aha": 0.5,
  "url": "",
  "img": "",
  "active": false
 },
 {
  "id": 27,
  "name": "샤워기 거치대 각도조절 흡착식",
  "search": "shower head holder suction / 샤워기 거치대",
  "signals": {
   "hands": 0.8,
   "wet": 0.5
  },
  "own": 0.2,
  "aha": 0.75,
  "url": "",
  "img": ""
 },
 {
  "id": 28,
  "name": "사각 지퍼백 자석 클립 (식재료 묶음)",
  "search": "magnetic food clip / 자석 클립",
  "signals": {
   "cook": 0.4,
   "tight": 0.5
  },
  "own": 0.2,
  "aha": 0.65,
  "url": "",
  "img": ""
 },
 {
  "id": 29,
  "name": "차량용 틈새 수납 포켓 (시트 사이)",
  "search": "car seat gap filler pocket / 차량 틈새 수납",
  "signals": {
   "drop": 0.4,
   "travel": 0.7
  },
  "own": 0.15,
  "aha": 0.8,
  "url": "",
  "img": ""
 },
 {
  "id": 30,
  "name": "여행용 압축 파우치 (손으로 짜는 형)",
  "search": "travel compression bag / 압축팩 여행",
  "signals": {
   "travel": 1,
   "tight": 0.6
  },
  "own": 0.3,
  "aha": 0.6,
  "url": "",
  "img": ""
 },
 {
  "id": 31,
  "name": "여권·카드 목걸이 파우치",
  "search": "neck travel pouch / 목걸이 파우치",
  "signals": {
   "travel": 0.8,
   "lost": 0.7
  },
  "own": 0.3,
  "aha": 0.5,
  "url": "",
  "img": "",
  "active": false
 },
 {
  "id": 32,
  "name": "휴대용 소형 가위·커터 키링",
  "search": "mini scissors keychain / 미니 가위 키링",
  "signals": {
   "hands": 0.5,
   "bag": 0.6
  },
  "own": 0.25,
  "aha": 0.6,
  "url": "",
  "img": ""
 },
 {
  "id": 33,
  "name": "털 제거 롤러 (재사용 실리콘)",
  "search": "pet hair remover / 반려동물 털 제거 브러시",
  "signals": {
   "pet": 1,
   "dust": 0.7
  },
  "own": 0.35,
  "aha": 0.6,
  "url": "",
  "img": ""
 },
 {
  "id": 34,
  "name": "가스레인지 틈새 커버 (실리콘)",
  "search": "stove gap cover / 가스레인지 틈새 막이",
  "signals": {
   "chore": 0.8,
   "dust": 0.5
  },
  "own": 0.15,
  "aha": 0.9,
  "url": "",
  "img": ""
 },
 {
  "id": 35,
  "name": "물걸레 손잡이 장갑 (손 안 더럽히는 청소)",
  "search": "microfiber cleaning glove / 청소 장갑 극세사",
  "signals": {
   "chore": 0.7,
   "dust": 0.8
  },
  "own": 0.3,
  "aha": 0.6,
  "url": "",
  "img": ""
 },
 {
  "id": 36,
  "name": "병뚜껑 오프너 (밀폐용 마개 개방기)",
  "search": "jar opener / 병뚜껑 오프너",
  "signals": {
   "hands": 0.7,
   "cook": 0.3
  },
  "own": 0.3,
  "aha": 0.55,
  "url": "",
  "img": ""
 },
 {
  "id": 37,
  "name": "이어폰 케이블 정리 줄감개",
  "search": "earphone winder / 이어폰 줄감개",
  "signals": {
   "tangle": 0.9,
   "cables": 0.5
  },
  "own": 0.3,
  "aha": 0.5,
  "url": "",
  "img": ""
 },
 {
  "id": 38,
  "name": "수면용 암막 아이마스크 (빛 차단)",
  "search": "sleep eye mask / 암막 안대",
  "signals": {
   "light": 1
  },
  "own": 0.35,
  "aha": 0.5,
  "url": "",
  "img": "",
  "active": false
 },
 {
  "id": 39,
  "name": "문 닫힘 소음 방지 패드",
  "search": "door bumper silent / 문 소음 방지 패드",
  "signals": {
   "light": 0.8,
   "dust": 0.2
  },
  "own": 0.15,
  "aha": 0.5,
  "url": "",
  "img": ""
 },
 {
  "id": 40,
  "name": "우산 방수 가방 커버·우산 전용 보관 포켓",
  "search": "umbrella waterproof bag / 우산 방수 파우치",
  "signals": {
   "wet": 0.8,
   "bag": 0.6
  },
  "own": 0.2,
  "aha": 0.55,
  "url": "",
  "img": ""
 },
 {
  "id": 41,
  "name": "벨크로 케이블 타이 (찍찍이 선 정리 밴드)",
  "search": "벨크로 케이블 타이",
  "signals": {
   "cables": 0.9,
   "tangle": 0.8
  },
  "own": 0.35,
  "aha": 0.6,
  "url": "",
  "img": ""
 },
 {
  "id": 42,
  "name": "틈새 청소 솔 (창틀·샤시 V자 브러시)",
  "search": "창틀 청소 브러시 틈새",
  "signals": {
   "dust": 0.9,
   "chore": 0.6
  },
  "own": 0.3,
  "aha": 0.85,
  "url": "",
  "img": ""
 },
 {
  "id": 43,
  "name": "긴 병 세척솔 (텀블러·좁은 병 입구용)",
  "search": "병솔 텀블러 세척 브러시",
  "signals": {
   "chore": 0.7,
   "wet": 0.3
  },
  "own": 0.5,
  "aha": 0.4,
  "url": "",
  "img": "",
  "active": false
 },
 {
  "id": 44,
  "name": "냄비 뚜껑 거치대 (손잡이에 끼우는 실리콘 받침)",
  "search": "냄비뚜껑 거치대 실리콘",
  "signals": {
   "cook": 0.6,
   "tight": 0.5
  },
  "own": 0.15,
  "aha": 0.85,
  "url": "",
  "img": ""
 },
 {
  "id": 45,
  "name": "실리콘 마늘 까기 튜브 (굴려서 껍질 벗기기)",
  "search": "마늘 까기 실리콘 튜브",
  "signals": {
   "cook": 0.8,
   "hands": 0.4
  },
  "own": 0.2,
  "aha": 0.9,
  "url": "",
  "img": ""
 },
 {
  "id": 46,
  "name": "스트레치 실리콘 뚜껑 (그릇·반쪽 과일 덮개)",
  "search": "스트레치 실리콘 뚜껑",
  "signals": {
   "cook": 0.6,
   "smell": 0.3
  },
  "own": 0.3,
  "aha": 0.7,
  "url": "",
  "img": ""
 },
 {
  "id": 47,
  "name": "전자레인지 청소 스팀 그릇 (돌리면 때가 불어요)",
  "search": "전자레인지 청소 스팀볼",
  "signals": {
   "chore": 0.8,
   "smell": 0.5
  },
  "own": 0.1,
  "aha": 0.95,
  "url": "",
  "img": ""
 },
 {
  "id": 48,
  "name": "정전기 먼지 털이 (긴 손잡이 슬림형)",
  "search": "정전기 먼지털이 롱",
  "signals": {
   "dust": 1,
   "chore": 0.5
  },
  "own": 0.35,
  "aha": 0.5,
  "url": "",
  "img": "",
  "active": false
 },
 {
  "id": 49,
  "name": "책상 클램프 헤드폰 거치대 (책상 끝에 끼우기)",
  "search": "책상 클램프 헤드폰 거치대",
  "signals": {
   "desk": 0.9,
   "tight": 0.5
  },
  "own": 0.2,
  "aha": 0.65,
  "url": "",
  "img": ""
 },
 {
  "id": 50,
  "name": "캐리어 고정 벨트 (십자 스트랩·이름표 겸용)",
  "search": "캐리어 벨트 스트랩",
  "signals": {
   "travel": 0.9,
   "bag": 0.4
  },
  "own": 0.3,
  "aha": 0.55,
  "url": "",
  "img": ""
 },
 {
  "id": 51,
  "name": "여행용 휴대 세탁 시트 (한 장씩 뜯는 비누 시트)",
  "search": "여행용 휴대 비누 시트",
  "signals": {
   "travel": 0.7,
   "laundry": 0.4
  },
  "own": 0.15,
  "aha": 0.75,
  "url": "",
  "img": ""
 },
 {
  "id": 52,
  "name": "벨트·넥타이 회전 걸이 (옷장 문 안쪽)",
  "search": "벨트 넥타이 걸이 옷장",
  "signals": {
   "tight": 0.8
  },
  "own": 0.2,
  "aha": 0.55,
  "url": "",
  "img": ""
 },
 {
  "id": 53,
  "name": "슬림 틈새 수납 카트 (냉장고·세탁기 옆 좁은 틈)",
  "search": "틈새 수납 슬림 카트",
  "signals": {
   "tight": 1
  },
  "own": 0.15,
  "aha": 0.9,
  "url": "",
  "img": ""
 },
 {
  "id": 54,
  "name": "현관 긴 구두주걱 걸이 (서서 신는 구두주걱)",
  "search": "긴 구두주걱 현관",
  "signals": {
   "hands": 0.6,
   "tight": 0.3
  },
  "own": 0.35,
  "aha": 0.5,
  "url": "",
  "img": "",
  "active": false
 },
 {
  "id": 55,
  "name": "스티커·라벨 제거 스프레이 (끈적임 제거제)",
  "search": "스티커 제거제 라벨 끈적임",
  "signals": {
   "chore": 0.8
  },
  "own": 0.15,
  "aha": 0.85,
  "url": "",
  "img": ""
 },
 {
  "id": 56,
  "name": "키보드·이어폰 틈새 청소 스틱 (쿠션 면봉형)",
  "search": "키보드 청소 스틱 이어폰 클리너",
  "signals": {
   "dust": 0.9,
   "desk": 0.5
  },
  "own": 0.2,
  "aha": 0.7,
  "url": "",
  "img": ""
 },
 {
  "id": 57,
  "name": "키친타월 벽 부착 거치대 (주방 벽에 붙이기)",
  "search": "키친타월 걸이 벽부착",
  "signals": {
   "tight": 0.6,
   "cook": 0.4
  },
  "own": 0.25,
  "aha": 0.8,
  "url": "",
  "img": ""
 },
 {
  "id": 58,
  "name": "가방 속 분리 정리 파우치 (가방 속 가방)",
  "search": "가방 속 가방 이너백 정리",
  "signals": {
   "bag": 1,
   "lost": 0.6
  },
  "own": 0.45,
  "aha": 0.4,
  "url": "",
  "img": "",
  "active": false
 },
 {
  "id": 59,
  "name": "접착식 선 고정 클립 (공유기·충전선 벽 정리)",
  "search": "접착 케이블 클립 벽",
  "signals": {
   "cables": 0.8
  },
  "own": 0.25,
  "aha": 0.6,
  "url": "",
  "img": ""
 },
 {
  "id": 60,
  "name": "자동 센서 스마트 쓰레기통 (손 안 대고 열리는)",
  "search": "자동 센서 쓰레기통",
  "signals": {
   "hands": 1,
   "smell": 0.8,
   "chore": 0.4
  },
  "own": 0.25,
  "aha": 0.85,
  "url": "https://link.coupang.com/a/igx26VZolg",
  "banner": "https://coupa.ng/cqxN0F",
  "img": ""
 }
]
};
