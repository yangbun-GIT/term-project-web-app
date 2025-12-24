# 🎬 YJY Netflix Clone (WSD-Assignment-02)

![Vue.js](https://img.shields.io/badge/vue-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Pinia](https://img.shields.io/badge/pinia-%23ffe066.svg?style=for-the-badge&logo=pinia&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

> **전북대학교 웹서버프로그래밍(WSD) 2차 과제 제출용 프로젝트입니다.**
> 넷플릭스(Netflix)의 UI/UX를 벤치마킹하여 **Vue 3**와 **TMDB API**로 구현한 반응형 영화 웹 애플리케이션입니다.

<br/>

## 🔗 배포 링크 (Demo)
### 👉 [프로젝트 보러가기 (Click)](https://yangbun-git.github.io/WSD-Assignment-02/)

<br/>

## [cite_start]📝 프로젝트 기본 정보 (Project Info)

이 프로젝트는 **Single Page Application (SPA)** 개발 역량 강화를 목적으로 제작되었습니다.
GPT와 같은 AI 도구를 활용하여 개발 생산성을 높이고, **GitHub Actions**를 통한 정적 웹사이트 자동 배포(CI/CD) 프로세스를 구축하였습니다.

* **과목명:** 초급 프로젝트
* **과제명:** GPT와 함께 Front-End Demo Site 개발 (Netflix Clone)
* **개발 기간:** 2025.11 ~ 2025.12

<br/>

## [cite_start]🛠 기술 스택 (Tech Stack)

| 분류 | 기술 | 비고 |
| :--- | :--- | :--- |
| **Framework** | **Vue 3** | Composition API (`<script setup>`) 활용 |
| **Language** | **TypeScript** | 정적 타입 지정을 통한 안정성 확보 |
| **Build Tool** | **Vite** | 빠른 개발 서버 및 빌드 최적화 |
| **State Management** | **Pinia** | 로그인 세션, 찜 목록(Wishlist), 설정 상태 전역 관리 |
| **API Client** | **Axios** | TMDB API 통신 및 Interceptor 설정 |
| **Routing** | **Vue Router** | SPA 라우팅 (Hash Mode 적용) |
| **Deployment** | **GitHub Actions** | GitHub Pages 자동 배포 파이프라인 구축 |

<br/>

## [cite_start]🚀 설치 및 실행 가이드 (Installation)

이 프로젝트는 `Node.js` 환경에서 실행됩니다. 아래 명령어를 순서대로 입력해주세요.

```bash
# 1. 의존성 패키지 설치 (필수)
npm install

# 2. 개발 서버 실행
npm run dev

# 3. 프로덕션 빌드 (배포용)
npm run build
```
> **Note:** `node_modules` 폴더는 `.gitignore`에 의해 제외되어 있습니다. 반드시 `npm install`을 먼저 실행해야 합니다.

<br>

## [cite_start]📂 프로젝트 구조 (Folder Structure)

`src` 폴더 내부의 주요 구조는 다음과 같습니다. Feature 중심의 아키텍처를 따릅니다.
```bash
src/
├── 📂 api/                   # Axios 인스턴스 및 Interceptor 설정 (tmdb.ts)
├── 📂 assets/                # 로고, 배경 이미지, SVG 등 정적 리소스
├── 📂 components/            # 재사용 가능한 UI 컴포넌트 (Bottom-Up 설계)
│   ├── Footer.vue            # 사이트 정보 및 Disclaimer
│   ├── Navbar.vue            # 네비게이션, 검색, 프로필 드롭다운
│   ├── MovieRow.vue          # 가로 스크롤 슬라이더 (Row)
│   ├── MovieCard.vue         # 개별 영화 카드 (Hover 효과, 찜하기)
│   ├── MovieModal.vue        # 영화 상세 정보 모달
│   └── SettingsModal.vue      # 사용자 설정(테마, 폰트 등) 모달
├── 📂 router/                # Vue Router 설정 (Navigation Guard 포함)
├── 📂 stores/                # Pinia Store (movieStore.ts - 전역 상태)
├── 📂 utils/                 # 유틸리티 함수 및 테스트 코드 (test.js)
├── 📂 views/                 # 페이지 단위 컴포넌트 (Page Views)
│   ├── Home.vue              # 메인 페이지 (Hero Banner, Categories)
│   ├── Popular.vue           # 대세 콘텐츠 (Pagination / Infinite Scroll)
│   ├── Search.vue            # 검색 및 필터링 페이지
│   ├── Wishlist.vue          # 내가 찜한 리스트 (LocalStorage 연동)
│   └── SignIn.vue            # 로그인 및 회원가입 (Sliding Animation)
├── App.vue                   # 최상위 컴포넌트 (Layout, Transition)
└── main.ts                   # 앱 진입점 (Mount)
```
<br>

## 🤝 개발 가이드 (Development Guide)

본 프로젝트는 체계적인 협업과 버전 관리를 위해 다음과 같은 규칙을 준수합니다.

### [cite_start]1. Git Flow 브랜치 전략 (Branch Strategy)

Git Flow 전략을 도입하여 개발을 진행했습니다.

* **`main`**: 언제든지 배포 가능한 안정적인 상태의 브랜치 (GitHub Actions 자동 배포 대상)
* **`develop`**: 다음 배포를 위해 개발된 기능들이 통합되는 브랜치
* **`feature/*`**: 단위 기능 개발을 위한 브랜치 (예: `feature/login`, `feature/movie-card`)
    * 개발 완료 후 `develop` 브랜치로 Merge 됩니다.

### [cite_start]2. 커밋 메시지 규칙 (Commit Convention)

Conventional Commits 규칙을 따릅니다.

| 태그 | 설명 | 예시 |
| :--- | :--- | :--- |
| `feat` | 새로운 기능 추가 | `feat: implement login page` |
| `fix` | 버그 수정 | `fix: infinite scroll logic` |
| `style` | 코드 포맷팅, 세미콜론 누락 등 (로직 변경 없음) | `style: fix css indentation` |
| `refactor` | 코드 리팩토링 (기능 변경 없음) | `refactor: simplify store logic` |
| `docs` | 문서 수정 (README 등) | `docs: update install guide` |
| `chore` | 빌드 업무 수정, 패키지 매니저 설정 등 | `chore: update npm packages` |

### 3\. 코딩 컨벤션 (Coding Convention)

* **Vue Style Guide:** Priority A (Essential) 규칙을 준수합니다.
* **Composition API:** `<script setup lang="ts">` 문법을 사용합니다.
* **TypeScript:** `any` 타입 사용을 지양하고 명시적인 인터페이스를 정의합니다.
* **Naming:** 컴포넌트 이름은 PascalCase(`MovieCard.vue`), 변수 및 함수는 camelCase(`fetchMovies`)를 사용합니다.

### [cite_start]4. PR 및 이슈 등록 (PR & Issue)

#### Pull Request Template

```markdown
## 📌 작업 내용
- [ ] 로그인 UI 구현
- [ ] API 연동

## 💬 리뷰 요구사항
- 예외 처리 로직 확인 부탁드립니다.
```

#### Issue Template

이슈 등록 시 `[Bug]`, `[Feature]`, `[Enhancement]` 라벨을 사용하여 성격을 명시합니다.

<br>

## 🤖 AI Geminii Report

(별도 첨부 파일 참조)

* AI를 활용하여 UI 디자인, 정규식 검증 로직, 반응형 CSS 등을 구현했습니다.

-----

© 2025 YJY Project. Educational Purpose Only.
