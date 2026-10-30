// 가성비맨 퀴즈의 질문, 상품, 문구는 이 파일에서 바꿉니다. (상품은 products-draft.json → build-data.js 로 합칩니다)
// 질문의 선택지 하나가 "불편 신호"(signals)에 점수를 줍니다. mult 는 그 신호를 깎는 배율입니다(예: 요리를 안 하면 주방 신호 x0.4).
window.NEED = {
 settings: { askCount: 12, minEvidence: 2, singleEvidenceFactor: 0.5, ownPower: 1.5, ahaBase: 0.3, ahaGain: 1.4, alsoCount: 3 },
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
    { text: "거의 배달", sig: {}, mult: { cook: 0.4 } }, { text: "대충 데워 먹는다", sig: { cook: 1.1 } }, { text: "직접 해 먹는다", sig: { chore: 0.8, cook: 0.5 } } ] },
  { id: "laundry", text: "빨래할 때 가장 귀찮은 순간은?", options: [
    { text: "널 곳을 찾을 때", sig: { laundry: 1, tight: 0.6, wet: 0.4 } }, { text: "개켜서 넣을 때", sig: { laundry: 0.6, tight: 0.6 } }, { text: "양말 짝을 맞출 때", sig: { laundry: 1, lost: 0.7 } }, { text: "딱히 귀찮지 않다", sig: {} } ] },
  { id: "search", text: "최근 한 달, 뭔가 찾느라 집을 뒤진 적이 있다면?", options: [
    { text: "거의 매주", sig: { lost: 1.3 } }, { text: "가끔", sig: { lost: 0.7 } }, { text: "거의 없다", sig: {} } ] },
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
 signals: /*SIGNALS*/{},
 products: /*PRODUCTS*/[]
};
