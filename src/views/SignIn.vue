<template>
  <div class="auth-page">
    <div class="logo-area">
      <img src="../assets/yjy.png" alt="YJYFLIX" class="logo-img" />
    </div>

    <div class="container" :class="{ 'right-panel-active': isSignUpMode }">

      <div class="form-container sign-up-container">
        <form @submit.prevent="handleSignUp">
          <h1>회원 가입</h1>
          <div class="social-container">
            <button type="button" class="social-btn google-btn" @click="handleGoogleLogin">
              <i class="fab fa-google"></i> Google로 시작하기
            </button>
          </div>
          <div class="divider">
            <span>또는 이메일로 가입</span>
          </div>

          <div class="input-group">
            <input type="email" v-model="signupEmail" required placeholder=" " />
            <label>이메일 주소</label>
          </div>
          <div class="input-group">
            <input type="password" v-model="signupPassword" required placeholder=" " minlength="6" />
            <label>비밀번호 (6자 이상)</label>
          </div>
          <div class="input-group">
            <input type="password" v-model="signupPasswordConfirm" required placeholder=" " />
            <label>비밀번호 확인</label>
          </div>

          <div class="checkbox-group">
            <input type="checkbox" id="terms" v-model="agreeTerms" />
            <label for="terms">이용 약관 및 개인정보 처리방침에 동의합니다. (필수)</label>
          </div>

          <button class="action-btn">동의하고 가입하기</button>

          <p class="mobile-text">
            이미 회원이신가요? <span @click="toggleMode">로그인</span>
          </p>
        </form>
      </div>

      <div class="form-container sign-in-container">
        <form @submit.prevent="handleLogin">
          <h1>로그인</h1>
          <div class="social-container">
            <button type="button" class="social-btn google-btn" @click="handleGoogleLogin">
              <i class="fab fa-google"></i> Google로 로그인
            </button>
          </div>
          <div class="divider">
            <span>또는 이메일/비밀번호</span>
          </div>

          <div class="input-group">
            <input type="email" v-model="loginEmail" required placeholder=" " />
            <label>이메일 주소</label>
          </div>
          <div class="input-group">
            <input type="password" v-model="loginPassword" required placeholder=" " />
            <label>비밀번호</label>
          </div>

          <div class="options-row">
            <div class="checkbox-group">
              <input type="checkbox" id="rememberMe" v-model="rememberMe" />
              <label for="rememberMe">아이디 저장</label>
            </div>
            <a href="#" class="forgot">도움이 필요하신가요?</a>
          </div>

          <button class="action-btn">로그인</button>

          <p class="mobile-text">
            아직 회원이 아니신가요? <span @click="toggleMode">가입하기</span>
          </p>
        </form>
      </div>

      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>다시 오셨군요!</h1>
            <p>YJYFLIX의 방대한 콘텐츠가<br>당신을 기다리고 있습니다.</p>
            <button class="ghost-btn" @click="toggleMode">로그인하기</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>영화의 바다로<br>떠나볼까요?</h1>
            <p>지금 가입하고 수만 편의 영화와<br>시리즈를 무제한으로 즐기세요.</p>
            <button class="ghost-btn" @click="toggleMode">회원가입</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMovieStore } from '../stores/movieStore'

const store = useMovieStore()
const router = useRouter()

const isSignUpMode = ref(false)

// [변경] 로그인 변수 (ApiKey -> Password)
const loginEmail = ref('')
const loginPassword = ref('')
const rememberMe = ref(false)

// [변경] 회원가입 변수 (ApiKey -> Password)
const signupEmail = ref('')
const signupPassword = ref('')
const signupPasswordConfirm = ref('')
const agreeTerms = ref(false)

// 이메일 유효성 검사
const isValidEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

onMounted(() => {
  const savedId = localStorage.getItem('saved-email')
  if (savedId) {
    loginEmail.value = savedId
    rememberMe.value = true
  }
})

// 화면 전환 토글
const toggleMode = () => {
  isSignUpMode.value = !isSignUpMode.value
}

// [신규] 구글 로그인 처리
const handleGoogleLogin = async () => {
  try {
    await store.loginWithGoogle()
    router.push('/')
  } catch (e) {
    alert("구글 로그인에 실패했습니다. 팝업 차단을 확인해주세요.")
  }
}

// [수정] 이메일 로그인 처리 (Firebase)
const handleLogin = async () => {
  if (!loginEmail.value || !loginPassword.value) {
    alert('이메일과 비밀번호를 모두 입력해주세요.')
    return
  }

  if (!isValidEmail(loginEmail.value)) {
    alert('유효한 이메일 형식이 아닙니다.')
    return
  }

  if (rememberMe.value) {
    localStorage.setItem('saved-email', loginEmail.value)
  } else {
    localStorage.removeItem('saved-email')
  }

  try {
    // Store의 Firebase 로그인 액션 호출
    await store.loginWithEmail(loginEmail.value, loginPassword.value)
    alert('로그인에 성공했습니다!')
    router.push('/')
  } catch (error: any) {
    // Firebase 에러 코드 처리
    if (error.code === 'auth/invalid-credential') {
      alert('이메일 또는 비밀번호가 일치하지 않습니다.')
    } else {
      alert('로그인 오류: ' + error.message)
    }
  }
}

// [수정] 회원가입 처리 (Firebase)
const handleSignUp = async () => {
  if (!isValidEmail(signupEmail.value)) {
    alert('유효한 이메일 형식이 아닙니다.')
    return
  }

  if (signupPassword.value.length < 6) {
    alert('비밀번호는 최소 6자 이상이어야 합니다.')
    return
  }

  if (signupPassword.value !== signupPasswordConfirm.value) {
    alert('비밀번호가 일치하지 않습니다.')
    return
  }

  if (!agreeTerms.value) {
    alert('서비스 이용 약관에 동의해야 가입할 수 있습니다.')
    return
  }

  try {
    // Store의 Firebase 회원가입 액션 호출
    await store.registerWithEmail(signupEmail.value, signupPassword.value)
    alert('환영합니다! 회원가입이 완료되었습니다.')

    // 회원가입 성공 시 자동으로 로그인 상태가 되므로 홈으로 이동
    router.push('/')
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      alert('이미 가입된 이메일입니다.')
    } else {
      alert('가입 오류: ' + error.message)
    }
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');

/* 기존 스타일 그대로 유지 */
.auth-page {
  display: flex; justify-content: center; align-items: center; flex-direction: column;
  min-height: 100vh; width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/background.png');
  background-size: cover; background-position: center; background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

.logo-area { position: absolute; top: 2rem; left: 3rem; z-index: 100; }
.logo-img { height: 4rem; width: auto; transition: 0.3s; }

.container {
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.5), 0 10px 10px rgba(0,0,0,0.4);
  position: relative; overflow: hidden;
  width: 100%; max-width: 1000px;
  height: 700px; min-height: 700px;
  margin: 0 20px;
  backdrop-filter: blur(5px);
  display: flex;
}

.form-container {
  position: absolute; top: 0; height: 100%;
  transition: all 0.6s ease-in-out;
  display: flex; align-items: center; justify-content: center;
  will-change: transform, opacity;
}

.sign-in-container { left: 0; width: 50%; z-index: 2; }
.sign-up-container { left: 0; width: 50%; opacity: 0; z-index: 1; }

.container.right-panel-active .sign-in-container { transform: translateX(100%); opacity: 0; z-index: 1; }
.container.right-panel-active .sign-up-container { transform: translateX(100%); opacity: 1; z-index: 5; animation: show 0.6s; }

@keyframes show {
  0%, 49.99% { opacity: 0; z-index: 1; }
  50%, 100% { opacity: 1; z-index: 5; }
}

form {
  background-color: transparent; color: #fff;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  height: 100%; width: 100%;
  padding: 0 10%; text-align: center;
}

h1 { font-weight: 700; margin-bottom: 1.5rem; font-size: 2.2rem; }

.social-container { margin: 1rem 0; width: 100%; }
.social-btn {
  width: 100%; padding: 0.8rem; border-radius: 4px; border: none;
  background: #fff; color: #333; font-weight: bold; cursor: pointer; font-size: 1rem;
  display: flex; align-items: center; justify-content: center; gap: 10px; transition: 0.2s;
}
.social-btn:hover { background: #e6e6e6; }

.divider {
  display: flex; align-items: center; justify-content: center;
  width: 100%; margin: 1.5rem 0; color: #bbb; font-size: 0.85rem;
}
.divider::before, .divider::after {
  content: ''; flex: 1; height: 1px; background: #555; margin: 0 10px;
}

.input-group { position: relative; width: 100%; margin: 0.8rem 0; }

.input-group input {
  background-color: #333333;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 1.5rem 1rem 0.5rem;
  width: 100%;
  border-radius: 4px;
  color: #ffffff;
  font-weight: 500;
  outline: none; font-size: 1rem;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.input-group input:focus {
  background-color: #454545;
  border-bottom-color: #e50914;
  box-shadow: 0 1px 0 0 #e50914;
}

.input-group input:-webkit-autofill,
.input-group input:-webkit-autofill:hover,
.input-group input:-webkit-autofill:focus,
.input-group input:-webkit-autofill:active{
  -webkit-box-shadow: 0 0 0 30px #333333 inset !important;
  -webkit-text-fill-color: #ffffff !important;
  transition: background-color 5000s ease-in-out 0s;
}

.input-group label {
  position: absolute; top: 50%; left: 1rem; transform: translateY(-50%);
  color: #a0a0a0; font-size: 1rem; pointer-events: none; transition: all 0.3s ease;
}

.input-group input:focus ~ label,
.input-group input:not(:placeholder-shown) ~ label {
  top: 0.4rem; left: 1rem; font-size: 0.7rem; font-weight: bold; transform: translateY(0); color: #ccc;
}

.options-row {
  display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 10px;
}
.checkbox-group {
  display: flex; align-items: center; gap: 8px; width: 100%; text-align: left; margin: 5px 0;
}
.checkbox-group input[type="checkbox"] {
  width: 16px; height: 16px; accent-color: #e50914; cursor: pointer;
}
.checkbox-group label {
  font-size: 0.85rem; color: #b3b3b3; cursor: pointer;
}

.forgot { color: #b3b3b3; font-size: 0.85rem; text-decoration: none; }
.forgot:hover { text-decoration: underline; }

.action-btn {
  border-radius: 4px; border: none; background-color: #E50914;
  color: #FFFFFF; font-size: 1rem; font-weight: 700; padding: 1rem 0;
  letter-spacing: 0.5px; width: 100%; transition: 0.3s; margin-top: 1.5rem; cursor: pointer;
}
.action-btn:hover { background-color: #f6121d; }

.mobile-text { display: none; margin-top: 20px; font-size: 0.9rem; color: #aaa; }
.mobile-text span { color: #fff; font-weight: bold; cursor: pointer; margin-left: 5px; text-decoration: underline; }

.overlay-container {
  position: absolute; top: 0; left: 50%; width: 50%; height: 100%; overflow: hidden;
  transition: transform 0.6s ease-in-out; z-index: 100;
  will-change: transform;
}
.container.right-panel-active .overlay-container { transform: translateX(-100%); }

.overlay {
  background: #000;
  background: linear-gradient(to right, #000000, #8b0000);
  background-repeat: no-repeat; background-size: cover; background-position: 0 0;
  color: #ffffff; position: relative; left: -100%; height: 100%; width: 200%;
  transform: translateX(0); transition: transform 0.6s ease-in-out;
  will-change: transform;
}
.container.right-panel-active .overlay { transform: translateX(50%); }

.overlay-panel {
  position: absolute; display: flex; align-items: center; justify-content: center;
  flex-direction: column; padding: 0 40px; text-align: center; top: 0; height: 100%; width: 50%;
  transition: transform 0.6s ease-in-out;
  will-change: transform;
}

.overlay-panel h1 { font-size: 2.5rem; margin-bottom: 1rem; line-height: 1.2; }
.overlay-panel p { font-size: 1rem; line-height: 1.5; margin-bottom: 2rem; font-weight: 300; opacity: 0.9; }

.ghost-btn {
  background-color: transparent; border: 1px solid #ffffff; color: #ffffff;
  padding: 0.8rem 2.5rem; font-size: 0.9rem; font-weight: bold; letter-spacing: 1px;
  text-transform: uppercase; transition: 0.3s; border-radius: 4px; cursor: pointer;
}
.ghost-btn:hover { background-color: #ffffff; color: #000; }

.overlay-left { transform: translateX(-20%); }
.container.right-panel-active .overlay-left { transform: translateX(-40px); }
.overlay-right { right: 0; transform: translateX(40px); }
.container.right-panel-active .overlay-right { transform: translateX(20%); }

@media (max-width: 900px) {
  .logo-area { top: 1.5rem; left: 1.5rem; }
  .logo-img { height: 2.5rem; }

  .container {
    width: 90%; max-width: 450px;
    height: auto; min-height: auto;
    padding-bottom: 40px; margin-top: 80px;
  }

  .overlay-container { display: none; }

  .form-container {
    position: relative; width: 100%; height: auto; top: 0;
    transition: none;
  }
  .sign-in-container, .sign-up-container { width: 100%; }

  .sign-in-container { display: flex; opacity: 1; z-index: 5; }
  .sign-up-container { display: none; opacity: 0; }

  .container.right-panel-active .sign-in-container { display: none; opacity: 0; }
  .container.right-panel-active .sign-up-container { display: flex; opacity: 1; animation: fadeIn 0.5s; transform: none; }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .mobile-text { display: block; }

  h1 { font-size: 1.8rem; margin-bottom: 1rem; }
  .input-group input { padding: 1.2rem 1rem 0.5rem; font-size: 0.9rem; }
  .action-btn { padding: 0.8rem 0; margin-top: 1rem; }

  /* [수정] 모바일에서 텍스트 색상 강제 흰색 (라이트 모드 무시) */
  form h1,
  .form-container h1,
  .form-container span,
  .form-container p,
  .form-container label,
  .form-container a {
    color: #ffffff !important;
  }

  .input-group input {
    color: #ffffff !important;
    background-color: #333 !important;
  }

  /* 라이트 모드일 때도 배경 어둡게 유지 */
  :global(body.light-mode) .container {
    background-color: rgba(0,0,0,0.85) !important;
  }
}
</style>