# Innodis Design System 가이드

이 저장소는 **토큰 우선** 원칙으로 구성된 디자인 시스템입니다.

- 기준 토큰: `tokens/foundation-variables.css`, `tokens/foundation-fonts.css`
- 공통 스타일: `css/foundation`
- 프리뷰: `preview`

---

## 빠른 시작

1. 토큰 파일에서 변수 확인
2. 공통 CSS에서 변수 사용
3. 프리뷰 HTML에서 결과 확인

---

## 문서 안내

### 컬러
- `md/color-code-simple-guide.md`

### 레이아웃/스페이싱(clamp)
- `md/layout-spacing-clamp-guide.md`

### 폰트
- `md/font-token-simple-guide.md`

### 라운드
- `md/radius-token-simple-guide.md`

### 아이콘
- `md/icon-token-simple-guide.md`

---

## 작업 규칙

- 토큰 우선: 하드코드 값보다 `var(--token)` 사용
- 공통/로컬 분리: 공통은 `css/foundation`, 페이지 전용만 로컬
- 불필요한 기능 추가 금지: 요청 범위 내 최소 변경

---

## 최근 정리 항목

- 버튼/라운드/아이콘 관련 PC↔Mobile 토큰을 `tokens/foundation-variables.css`에 정리
- 각 항목별 이해용 가이드 문서를 `md` 폴더에 분리 작성
