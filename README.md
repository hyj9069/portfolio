# 🚀 한예지(Han Yeji) — Interactive Frontend Portfolio (2026 Edition)

Vite + React + TypeScript 기반으로 마이그레이션된 한예지(Han Yeji)님의 모던 프론트엔드 포트폴리오입니다.
기존의 Vanilla HTML/CSS/JS 구현에서 확장되어 컴포넌트 단위 설계 및 강력한 타입 안정성을 제공합니다.

---

## ✨ 핵심 디자인 시스템 & UI 디자인 스펙 (Toss + Apple Style)

### 1. 디자인 컨셉
* **Toss UI 스타일의 미니멀리즘**: 기본 테마는 깨끗하고 시원한 **Light Mode**로 작동하며, 극도로 정제된 여백과 신뢰감을 주는 **토스 블루(`#3182f6`)** 포인트 컬러를 사용합니다.
* **Apple 스타일 글래스모피즘(Glassmorphism)**: 헤더, 스킬 카드, 프로젝트 카드, 연락처 채널 카드 등에 `backdrop-filter: blur(20px)`와 반투명 테두리(`rgba`)를 입혀 맑고 투명하게 겹쳐지는 깊이감을 연출합니다.
* **Pretendard 폰트 시스템**: 가독성에 최적화된 국산 오픈소스 프리텐다드 폰트를 전역에 일괄 적용하여 시각적 완성도를 높였습니다.

### 2. 마이크로 인터랙션 & GSAP 애니메이션 (성능 최적화 완료)
* **새로고침 시 최상단 고정 및 페이지 페이드인**: 사용자가 새로고침을 할 때 최상단으로 스크롤 위치를 제어하며, `#root` 요소를 통해 페이지 전체가 부드럽게 페이드인(`fadeIn 1.2s`)되는 고급 연출을 제공합니다.
* **GSAP ScrollTrigger 기반 스크롤 반응 (네이티브 CSS 트랜지션 결합)**:
  1. **스크롤 트리거 클래스 주입**: 카드나 헤더가 뷰포트 내로 들어오면 JS 인라인 스타일 제어 대신 `.aos-animate` 클래스를 동적으로 부여하여, 프레임 유실 없이 60fps 브라우저 자체 하드웨어 가속 트랜지션으로 렌더링합니다.
  2. **타임라인 선 애니메이션**: 스크롤이 내릴 때 선이 아래로 부드럽게 한 번만 채워지며, 다시 위로 스크롤을 올렸을 때 라인이 줄어들지 않도록 단 한 번만 동작합니다.
  3. **원형 점(Dot) & 카드 동기화**: 스크롤 라인이 경력 카드 위치의 Dot에 정확히 도달하는 순간, Dot이 스케일 업(Scale Up)되고 곧바로 카드 콘텐츠가 부드럽게 페이드 업(Fade Up)되는 정밀한 비율 동기화가 적용되어 있습니다.
  4. **섹션별 실시간 다크 모드 전환**: 포트폴리오의 **Projects** 섹션 영역(40% 지점)에 도달하면 웹사이트의 바디 테마가 다크 테마(`section-dark`)로 유연하게 어두워지며, **Experience** 섹션 영역에 도달하면 다시 자연스럽게 라이트 테마로 원복되는 다이내믹 인터랙션이 연동되어 있습니다.
  5. **텍스트 줄바꿈 keep-all**: 모바일 등 반응형 해상도 변경 시 단어가 중간에 끊기지 않고 단어 단위로 깔끔하게 떨어지도록 전역에 설정되어 있습니다.

### 3. 웹 표준 & 웹 접근성 (Web Standards & Accessibility Spec)
* **시맨틱 마크업(Semantic HTML5)**: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>` 등의 시맨틱 요소를 적극적으로 사용하여 검색엔진 최적화(SEO) 및 스크린 리더 기기의 문서 구조 파악 효율성을 극대화했습니다.
* **건너뛰기 링크(Skip Navigation)**: 키보드 및 스크린 리더 사용자들을 위해 페이지 최상단에 `본문 바로가기` 링크(`.skip-to-content`)를 배치해 편리한 키보드 탐색 환경을 구현했습니다.
* **WAI-ARIA 및 웹 접근성 지원**:
  * 배경 그래픽 등 스크린 리더에 불필요한 장식용 요소에는 `aria-hidden="true"` 속성을 부여해 불필요한 음성 출력을 방지합니다.
  * 아이콘 버튼이나 외부 링크, 테마 전환 컨트롤러에 적절한 명시적 레이블(`aria-label`)을 제공합니다.
* **웹 표준 기반 리액티브 스타일**: 모바일 기기에서도 레이아웃이 유연하게 조절되며, 단어가 어중간하게 끊어지지 않는 텍스트 개행 처리(`word-break: keep-all`, `overflow-wrap: break-word`)를 지원합니다.

---

## 📂 프로젝트 폴더 구조

```
포트폴리오/
├── public/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css             # Toss + Apple 스타일 전역 CSS
│   ├── components/           # UI 컴포넌트 레이어
│   │   ├── Header.tsx        # 네비게이션 & 테마 토글 & 모바일 햄버거
│   │   ├── Hero.tsx          # 타이핑 효과가 적용된 메인 대문
│   │   ├── About.tsx         # Toss 다크 테마 맥북스타일 IDE 에디터
│   │   ├── Skills.tsx        # 글래스모피즘 스킬 카드 & 바 그래프
│   │   ├── Projects.tsx      # 9종 퍼블리싱 프로젝트 카드
│   │   ├── Experience.tsx    # 스크롤 동기화 타임라인
│   │   ├── Contact.tsx       # 2열 가로형 연락처 글래스 카드
│   │   └── Footer.tsx        # 카피라이트 영역
│   ├── hooks/
│   │   └── useGsap.ts        # GSAP 타임라인 & 섹션다크 ScrollTrigger 훅
│   └── data/                 # 포트폴리오 콘텐츠 데이터
│       ├── projects.ts       # 9개 프로젝트 정보 (SK가스, 한밭대, 동신대 등)
│       ├── skills.ts         # 스킬 카드 및 수치 데이터
│       └── experience.ts     # Futurenuri 경력 및 세부 스펙 데이터
├── package.json
└── vite.config.ts
```

---

## 🛠️ 기술 스택 및 오픈소스 리소스

* **프레임워크**: React 18, Vite, TypeScript
* **애니메이션**: GSAP 3 (ScrollTrigger)
* **아이콘**: Font Awesome 6.5.0
* **폰트**: Pretendard Web Font

---

_Built with ♥ & React & TypeScript — 2026_
