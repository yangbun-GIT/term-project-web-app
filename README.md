# YJYFLIX (Multi-Platform Movie Service)

**YJYFLIX**는 Vue.js(Web)와 React Native(Mobile)를 활용하여 개발된 **크로스 플랫폼 영화 정보 및 커뮤니티 서비스**입니다.
단일 Firebase 프로젝트를 공유하여 웹과 모바일 앱 간의 실시간 데이터 동기화를 구현하였습니다.

## 🔗 배포 URL (Deployment)

### 웹 애플리케이션은 학교 클라우드 환경인 **JCloud**를 통해 배포되었습니다.

### Web App URL: [Web 프로젝트 보러가기](http://113.198.66.68:18138)

---

## 🛠 기술 스택 (Tech Stack)

본 프로젝트 구현을 위해 사용된 기술 스택입니다.

| 구분 | 사용 기술 | 구현 상세 내용 |
| :--- | :--- | :--- |
| **Web Frontend** | **Vue.js** | • Composition API 기반 컴포넌트 설계<br>• Axios를 활용한 비동기 데이터 처리 |
| **Mobile App** | **React Native (Expo)** | • **Expo SDK 54** 기반 네이티브 앱 개발<br>• `expo-auth-session`을 활용한 Google OAuth 연동 |
| **Authentication** | **Google Login** | • Firebase Authentication 연동<br>• Web 및 Native App 간 동일 계정 인증 체계 구축 |
| **Database** | **Cloud Firestore** | • NoSQL 기반 실시간 데이터베이스<br>• `onSnapshot`을 이용한 채팅 및 찜 목록 실시간 동기화 |
| **Deployment** | **Docker & JCloud** | • Nginx 웹 서버 컨테이너화 및 배포 |

---

## 📂 프로젝트 구조 (Project Structure)

이 저장소는 웹 애플리케이션 내부에 모바일 프로젝트가 포함된 구조입니다.

```text
term-project-web-app/        (Root: Vue.js 웹 프로젝트)
├── src/                     (Web 소스코드)
├── package.json             (Web 의존성 설정)
└── term-project-mobile-app/ (Sub: React Native 모바일 프로젝트)
    ├── app/                 (Mobile 소스코드)
    ├── package.json         (Mobile 의존성 설정)
    └── ...
```

---

## 🚀 실행 가이드 (Execution Guide)

**[중요]** 원활한 테스트를 위해 아래 절차를 정확히 따라주시기 바랍니다.

### 1. Web Application (Vue.js)

웹 애플리케이션은 **프로젝트 최상위 경로(Root)**에서 실행합니다.

**1) 의존성 설치 및 실행**
```bash
# 위치: term-project-web-app (Root)
npm install
npm run dev
```
* 실행 후 브라우저에서 `http://localhost:5173` (또는 터미널에 표시된 포트)으로 접속 가능하다.

<br>

### 2. Mobile Application (React Native)

**⚠️ 필독사항**
본 앱은 **Google Login(Native Module)** 기능을 포함하고 있어, 일반적인 Expo Go 앱으로는 실행이 불가능합니다.
반드시 아래 **두 가지 방법 중 하나**를 선택하여 **개발용 앱(.apk)**을 설치해 주세요.

#### 📲 Step 1. 개발용 앱 설치 (Android)

**[방법 A] APK 직접 다운로드 (권장)**
* 아래 링크를 통해 설치 파일을 직접 다운로드합니다.
* **다운로드 링크:** `[(제출 .zip에 포함)]`
* (보안 경고가 뜰 경우 '무시하고 설치'를 진행해 주세요.)

**[방법 B] Expo 계정으로 다운로드 (링크 만료 시)**
* 링크 접속이 안 될 경우, 아래 계정으로 `expo.dev`에 로그인하여 빌드 파일을 다운로드할 수 있습니다.
* **접속 주소:** [https://expo.dev/](https://expo.dev/) (로그인 후 Dashboard > 최신 Builds > Download (APK Install)
* **expo.dev ID / PW:** `실행 가이드 문서에 기재`

---

#### 💻 Step 2. 개발 서버 실행 (Tunnel 모드 필수)

* 앱 설치 후, 소스 코드를 구동하기 위해 로컬 서버를 실행합니다.
* **[주의]** 네트워크 연결 문제를 방지하기 위해 반드시 **`--tunnel`** 옵션을 사용해야 합니다.

```bash
# 1. 모바일 폴더로 이동
cd term-project-mobile-app

# 2. 패키지 설치
npm install

# 3. 개발 서버 실행 (Tunnel 모드)
npx expo start --dev-client --tunnel
```

#### 🔗 Step 3. 기기 연결

1. 설치한 **'Term Project Mobile App'**을 실행합니다.
2. 터미널에 표시된 QR 코드를 스캔하거나, 앱 화면에 서버 주소(`exp://...`)를 입력하여 연결합니다.
3. (최초 실행 시 데이터 로딩에 시간이 조금 소요될 수 있습니다.)

---

## 🧪 테스트 계정 및 참고사항

원활한 기능 확인을 위해 **테스트 계정**을 사용하시거나, **구글 소셜 로그인**을 이용해 주세요.

* **테스트 ID / PW:** `실행 가이드 문서 기재`
* **[주의]** 모바일 앱에서는 신규 회원가입 UI를 제공하지 않습니다. **웹(Web)에서 회원가입 후 로그인**해 주세요.

---

## ✨ 주요 기능 (Key Features)

| 기능 영역 | 상세 설명 |
| :--- | :--- |
| **사용자 인증** | • **Google OAuth**를 이용한 소셜 로그인/로그아웃<br>• 웹-앱 간 인증 상태 연동 |
| **영화 정보** | • TMDB API 연동을 통한 최신 및 인기 영화 목록 제공<br>• 포스터, 평점, 줄거리 등 상세 정보 조회 및 키워드 검색 |
| **데이터 동기화** | • **Firestore**를 활용한 실시간 데이터 CRUD<br>• 웹에서 '찜'한 영화가 모바일 앱 찜 목록에 **즉시 반영** |
| **커뮤니티** | • 영화별 실시간 채팅방 제공 (Firestore Realtime Updates)<br>• 다수의 사용자가 동시에 대화 가능 |

---

## ⚠️ 주의사항 및 참고

* **Google 로그인:** 개발용 인증서(SHA-1)가 등록된 상태이므로, 반드시 제공된 **Development Build(.apk)** 앱을 설치 후 실행해야 로그인이 정상 작동합니다.
* **환경 변수:** API Key 등은 프로젝트 내부에 포함되어 있거나 `.env` 설정을 따릅니다. 실행 시 별도의 설정이 필요하지 않습니다.
