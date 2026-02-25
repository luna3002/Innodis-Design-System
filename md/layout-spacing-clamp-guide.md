# 레이아웃/스페이싱 clamp 토큰 가이드

이 문서는 `tokens/foundation-variables.css`의 아래 구간을 설명합니다.

- `Foundation Layout (Fluid: 390px ~ 1920px)`
- `Foundation Spacing Scale`

초보 기준으로는 **"값을 외우기"보다 "토큰을 가져다 쓰는 습관"**만 먼저 익히면 됩니다.

---

## 0) 30초 요약 (먼저 이것만)

- `clamp()`는 화면 크기에 따라 값이 자동으로 바뀌는 방식입니다.
- 레이아웃 폭/여백은 `--layout-*`를 먼저 사용합니다.
- 컴포넌트 사이 간격은 `--space-*`를 먼저 사용합니다.
- `px` 직접 입력은 마지막 선택입니다.
- 즉, **토큰 우선**으로 쓰면 반응형 품질을 쉽게 맞출 수 있습니다.

---

## 1) 왜 clamp를 쓰는가?

`clamp()`는 **최소값 ~ 최대값** 사이에서 화면 폭에 따라 값을 유동적으로 바꿉니다.

형식:

```css
clamp(최소값, 계산식, 최대값)
```

의미:
- 모바일(작은 화면)에서는 최소값에 가까움
- 데스크탑(큰 화면)에서는 최대값에 가까움
- 중간 구간은 부드럽게 보간됨

초보 해석:
- `clamp(최소, 중간계산, 최대)`는 **"최소~최대 범위 안에서 자동 조절"**이라고 보면 됩니다.
- 지금은 중간 계산식을 외울 필요 없습니다. 우선은 기존 토큰을 그대로 사용하는 것이 중요합니다.

---

## 2) Foundation Layout 토큰

```css
--layout-side-space: clamp(16px, calc(-46.1961px + 15.9477vw), 260px);
--layout-content-width: clamp(358px, calc(92.3922px + 68.1046vw), 1400px);
```

기준 해석:
- 최소(모바일 기준): 좌우 여백 `16px`, 콘텐츠 `358px`
- 최대(데스크탑 기준): 좌우 여백 `260px`, 콘텐츠 `1400px`

사용 예시:

```css
grid-template-columns:
  minmax(0, var(--layout-side-space))
  minmax(0, var(--layout-content-width))
  minmax(0, var(--layout-side-space));
```

---

## 3) Foundation Spacing Scale 토큰

예시:

```css
--space-4: clamp(3px, calc(2.7451px + 0.0654vw), 4px);
--space-20: clamp(18px, calc(17.4902px + 0.1307vw), 20px);
--space-80: clamp(60px, calc(54.902px + 1.3072vw), 80px);
```

의미:
- `--space-4`는 약 `3px → 4px`
- `--space-20`은 약 `18px → 20px`
- `--space-80`은 약 `60px → 80px`

즉, 피그마의 `PC to Mobile` 페어를 코드에서 유동형으로 표현한 형태입니다.

---

## 4) 적용 원칙

- 레이아웃 간격/폭은 가능하면 `--layout-*` 토큰 우선
- 컴포넌트 간격은 `--space-*` 토큰 우선
- 하드코드 `px`는 예외 상황에서만 사용

빠른 적용 예시:

```css
.page {
  padding-inline: var(--layout-side-space);
}

.card-list {
  display: grid;
  gap: var(--space-20);
}
```

---

## 5) 새 스페이싱 토큰 추가 템플릿

```css
/* 예: 30 -> 22 스케일 */
--space-30: clamp(22px, calc(19.9608px + 0.5229vw), 30px);
```

추가 시 체크:
- 최소/최대값이 디자인 기준(모바일/데스크탑)과 맞는지
- 기존 토큰과 의미가 중복되지 않는지
- 실제 화면에서 과도하게 커지거나 작아지지 않는지

---

## 6) 초보가 자주 하는 실수

- `px`를 바로 쓰고 토큰을 안 쓰는 경우
- `--layout-*` 대신 `--space-*`를 레이아웃 폭에 쓰는 경우
- 새 토큰을 만들면서 기존 의미와 중복되는 이름을 쓰는 경우

---

## 7) 1분 셀프 체크

- 이 값은 기존 `--layout-*` 또는 `--space-*`로 대체 가능한가?
- 대체 가능하면 새 값 추가 없이 기존 토큰을 사용했는가?
- 화면이 작아질 때/커질 때 값이 자연스럽게 보이는가?
