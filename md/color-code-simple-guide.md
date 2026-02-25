# 컬러 코드 간단 가이드

이 문서는 `tokens/foundation-variables.css`의 **기본 컬러 토큰**을 쉽게 보는 용도입니다.  
(시멘틱 규칙 설명은 제외)

색상 코드는 https://htmlcolorcodes.com/ 에서 찾을 수 있습니다.

## 1) 기본 구조

컬러 변수는 아래 형식으로 작성됩니다.

- `--color-그룹-단계`
- 예: `--color-red-500`, `--color-blue-700`

단계 숫자는 보통:
- `100` = 매우 연한 색
- `500` = 기본 색
- `700` = 진한 색

---

## 2) 주요 컬러 그룹

### Brand
- `--color-brand-100: #fef1f1`
- `--color-brand-200: #e72417`
- `--color-brand-300: #8d0900`

### Base Colors
- Red: `--color-red-100 / 500 / 700`
- Rose: `--color-rose-100 / 500 / 700`
- Yellow: `--color-yellow-100 / 500 / 700`
- Green: `--color-green-100 / 500 / 700`
- Mint: `--color-mint-100 / 500 / 700`
- Blue: `--color-blue-100 / 500 / 700`
- Indigo: `--color-indigo-100 / 500 / 700`
- Purple: `--color-purple-100 / 500 / 700`

### Gray Scale
- `--color-gray-white: #ffffff`
- `--color-gray-100 ~ 950`
- `--color-gray-black: #000000`

---

## 3) 사용 예시 (CSS)

```css
.button-primary {
  background-color: var(--color-brand-200);
  color: var(--color-gray-white);
  border: 1px solid var(--color-brand-300);
}
```

---

## 4) 사용 원칙 (간단)

- 하드코드 색상(`#xxxxxx`) 대신 **토큰 변수** 사용
- 공통 UI는 공통 토큰 우선 사용
- 페이지 전용 스타일만 로컬에서 최소 추가

---

## 5) 컬러 코드 추가 방법 (복붙용)

새 컬러를 추가할 때는 `tokens/foundation-variables.css`에 아래 형식으로 넣으면 됩니다.

### 5-1. 기본 템플릿

```css
/* ===== Base - NewColor ===== */
--color-newcolor-100: #F5F5F5;
--color-newcolor-500: #888888;
--color-newcolor-700: #333333;
```

### 5-2. 네이밍 규칙

- 형식: `--color-이름-단계`
- 이름: 소문자 영문(예: `sky`, `orange`)
- 단계: `100`(연함), `500`(기본), `700`(진함)

### 5-3. 추가 체크리스트

- 기존 그룹(Brand/Base/Gray) 중 어디에 들어갈지 먼저 결정
- 같은 의미의 색을 중복으로 만들지 않기
- UI 적용 시에는 반드시 `var(--color-... )`로 사용
