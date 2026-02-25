# 폰트 토큰 간단 가이드

이 문서는 `tokens/foundation-fonts.css`를 처음 보는 사람도 이해하기 쉽게 설명합니다.

---

## 1) 이 파일은 무엇을 하나요?

`foundation-fonts.css`는 아래 2가지를 담당합니다.

- `@font-face`로 웹폰트를 불러옵니다.
- `:root`에서 공통 폰트 토큰을 정의합니다.

즉, 화면에서 글꼴을 통일해서 쓰기 위한 "폰트 기준 파일"입니다.

---

## 2) 현재 사용 중인 폰트

### Pretendard
- 굵기 `100` ~ `900` 전체를 등록
- 본문(body) 기본 폰트로 사용

### Paperlogy
- 굵기 `100` ~ `900` 전체를 등록
- 타이틀(title) 계열 폰트로 사용

---

## 3) 현재 토큰 구성

### 3-1. Font Family

```css
--font-family-title: "Paperlogy", "Pretendard", system-ui, -apple-system, sans-serif;
--font-family-body: "Pretendard", system-ui, -apple-system, sans-serif;
```

### 3-2. Font Weight

```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### 3-3. Typography Common

```css
--font-letter-spacing-tight: -1px;
--font-line-height-100: 1;
--font-line-height-150: 1.5;
```

### 3-4. Fixed Type Scale (PC / Mobile)

카테고리별로 `PC` 값과 `-mobile` 값이 쌍으로 정의되어 있습니다.

- Display: `--font-size-display-*`
- Heading: `--font-size-heading-*`
- Title: `--font-size-title-*`
- Body: `--font-size-body-*`
- Button: `--font-size-button-*`

예시:

```css
--font-size-title-m: 26px;
--font-size-title-m-mobile: 20px;

--font-size-body-m: 16px;
--font-size-body-m-mobile: 12px;
```

---

## 4) 사용 예시 (CSS)

```css
.page-title {
  font-family: var(--font-family-title);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-title-m);
  line-height: var(--font-line-height-100);
  letter-spacing: var(--font-letter-spacing-tight);
}

.body-text {
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-body-m);
  line-height: var(--font-line-height-150);
}

@media (max-width: 768px) {
  .page-title {
    font-size: var(--font-size-title-m-mobile);
  }

  .body-text {
    font-size: var(--font-size-body-m-mobile);
  }
}
```

---

## 5) 적용 원칙 (간단)

- 폰트 이름/굵기/크기/행간 모두 하드코딩 대신 토큰 우선 사용
- 제목/본문/버튼 등 역할에 맞는 타입 스케일 토큰 사용
- 반응형에서는 `-mobile` 토큰으로 교체

---

## 6) 폰트 추가가 필요할 때

### 5-1. 순서
1. `@font-face`를 먼저 추가
2. 필요하면 `:root` 토큰을 추가/확장
3. 컴포넌트에서는 토큰으로만 사용

### 5-2. 추가 템플릿

```css
@font-face {
  font-family: "NewFont";
  src: url("https://example.com/NewFont-Regular.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}

:root {
  --font-family-new: "NewFont", "Pretendard", system-ui, -apple-system, sans-serif;
}
```

---

## 7) 자주 하는 실수

- CSS에서 직접 `font-family: "Pretendard"`만 쓰고 토큰을 안 쓰는 경우
- 필요한 `font-weight`가 등록되지 않았는데 사용하는 경우
- PC 토큰만 쓰고 모바일 토큰 전환을 빼먹는 경우
- 로컬 테스트에서만 보이고, CDN 경로 오류를 놓치는 경우

---

## 8) 빠른 체크리스트

- 폰트는 `@font-face`로 정상 등록됐는가?
- `font-family`, `font-weight`, `font-size`, `line-height`를 토큰으로 썼는가?
- 화면 역할(제목/본문/버튼)에 맞는 타입 스케일 토큰을 적용했는가?
- 모바일 구간에서 `-mobile` 토큰 전환이 들어갔는가?
