# 아이콘 토큰 간단 가이드

이 문서는 `tokens/foundation-variables.css`의 아이콘 관련 토큰을 쉽게 설명합니다.

---

## 1) 아이콘 토큰이란?

아이콘 토큰은 아이콘의 크기, 선 두께, 도트 크기를 통일하기 위한 변수입니다.

- 일반 아이콘 크기: `--icon-size-*`
- 선 두께: `--icon-stroke-width`
- 캐러셀 도트 크기: `--icon-carousel-dot-size`
- 버튼 내부 아이콘 크기: `--button-icon-size-*`
- 버튼 텍스트-아이콘 간격: `--button-icon-gap-*`

---

## 2) 현재 토큰 값 구조

### 2-1. 일반 아이콘

```css
--icon-size-24: clamp(18px, calc(16.4706px + 0.3922vw), 24px);
--icon-size-20: clamp(16px, calc(14.9804px + 0.2614vw), 20px);
--icon-size-18: clamp(14px, calc(12.9804px + 0.2614vw), 18px);
--icon-stroke-width: clamp(1px, calc(0.8725px + 0.0327vw), 1.5px);
--icon-carousel-dot-size: clamp(6px, calc(5.4902px + 0.1307vw), 8px);
```

### 2-2. 버튼 아이콘

```css
--button-icon-size-xl: clamp(14px, calc(12.9804px + 0.2614vw), 18px);
--button-icon-size-l: clamp(13px, calc(12.2353px + 0.1961vw), 16px);
--button-icon-size-m: clamp(11px, calc(10.2353px + 0.1961vw), 14px);
--button-icon-size-s: clamp(10px, calc(9.4902px + 0.1307vw), 12px);

--button-icon-gap-xl-l: clamp(6px, calc(5.4902px + 0.1307vw), 8px);
--button-icon-gap-m-s: clamp(4px, calc(3.4902px + 0.1307vw), 6px);
```

---

## 3) 사용 기준 (쉽게)

- 큰 아이콘 느낌 필요: `--icon-size-24`
- 일반 본문/버튼 주변: `--icon-size-20` 또는 `--icon-size-18`
- 버튼 내부 아이콘은 버튼 크기에 맞춰 `--button-icon-size-*` 사용
- 아이콘 선 두께는 직접 숫자 대신 `--icon-stroke-width` 사용

---

## 4) 사용 예시 (CSS)

```css
.icon-lg {
  width: var(--icon-size-24);
  height: var(--icon-size-24);
  stroke-width: var(--icon-stroke-width);
}

.button--m .button-icon {
  width: var(--button-icon-size-m);
  height: var(--button-icon-size-m);
  margin-left: var(--button-icon-gap-m-s);
}

.carousel-dot {
  width: var(--icon-carousel-dot-size);
  height: var(--icon-carousel-dot-size);
}
```

---

## 5) 적용 원칙

- 아이콘 크기를 직접 `px`로 고정하지 않고 토큰 사용
- 버튼 아이콘은 일반 아이콘 토큰보다 버튼 전용 토큰 우선
- 간격도 `--button-icon-gap-*`으로 통일

---

## 6) 빠른 체크리스트

- 아이콘 크기/두께를 토큰으로 적용했는가?
- 버튼 아이콘에 버튼 전용 토큰을 적용했는가?
- 화면이 달라져도 아이콘 비율이 자연스럽게 보이는가?
