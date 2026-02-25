# 라운드 토큰 간단 가이드

이 문서는 `tokens/foundation-variables.css`의 라운드 관련 토큰을 쉽게 설명합니다.

---

## 1) 라운드 토큰이란?

라운드 토큰은 모서리 둥글기를 통일하기 위한 변수입니다.

- 작은 둥글기: `--radius-xs`
- 중간 둥글기: `--radius-m`
- 버튼 전용 둥글기: `--radius-button`

핵심은 직접 숫자를 쓰지 않고 토큰을 쓰는 것입니다.

---

## 2) 현재 토큰 값 구조

현재 라운드 토큰은 PC와 Mobile 값을 기준으로 유동형(`clamp`)으로 정의되어 있습니다.

```css
--radius-xs: clamp(2px, calc(1.4902px + 0.1307vw), 4px);
--radius-m: clamp(12px, calc(9.9608px + 0.5229vw), 20px);
--radius-button: clamp(2px, calc(1.4902px + 0.1307vw), 4px);
```

의미:
- 작은 화면에서는 Mobile 값에 가깝게
- 큰 화면에서는 PC 값에 가깝게
- 중간 화면은 자연스럽게 보간

---

## 3) 언제 어떤 토큰을 쓰나요?

- `--radius-xs`: 입력창, 태그, 작은 카드처럼 약한 둥글기
- `--radius-m`: 카드/패널처럼 존재감 있는 컨테이너
- `--radius-button`: 버튼 컴포넌트 전용

버튼에는 가능하면 `--radius-button`을 우선 사용하세요.

---

## 4) 사용 예시 (CSS)

```css
.input {
  border-radius: var(--radius-xs);
}

.card {
  border-radius: var(--radius-m);
}

.button {
  border-radius: var(--radius-button);
}
```

---

## 5) 적용 원칙

- 하드코드 `border-radius: 6px`보다 토큰 우선
- 컴포넌트 역할에 맞는 토큰 사용
- 공통 컴포넌트는 로컬 값 추가보다 공통 토큰 사용

---

## 6) 빠른 체크리스트

- 라운드 값을 직접 `px`로 쓰지 않았는가?
- 버튼에 `--radius-button`을 적용했는가?
- 같은 역할의 UI에 같은 라운드 토큰을 적용했는가?
