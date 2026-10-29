# Uselessly Yours

정적 사이트입니다. 서버가 필요 없습니다.

## 고치는 곳
- `data.js` 한 파일에서 전부 바꿉니다.
  - `products`: 상품. `name`(우리식 이름), `line`(집사의 한마디), `url`(내 테무 링크), `img`(사진 경로), `tags`(성격 태그)
  - `questions`: 질문. `tag`와 `text`. 질문은 상품 태그와 짝입니다. 새 태그를 쓰면 질문도 하나 추가하세요.
  - `strings`: 화면 문구와 제휴 고지 문구
  - `settings`: 최소 질문 수(minQuestions), 최대 질문 수, 추천 수 등
- 상품 사진: `assets/products/번호.jpg` 로 넣고, `data.js`의 해당 상품에 `"img": "assets/products/번호.jpg"` 를 적습니다.
- 다른 언어: `languages`에 `"en"` 추가, 문구/질문/상품의 `name`, `line`에 `"en"` 칸 추가. 나라별 링크는 `urlByLang`.
- 색/글꼴: `style.css` 맨 위 `:root`

## 배포
- 이 저장소의 `main` 브랜치에 올리면 Cloudflare가 자동으로 https://uselessly-yours.yoonwantsgroove.workers.dev 에 반영합니다.
