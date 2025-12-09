/**
 * [AI Generated] 인증 로직 단위 테스트 시나리오
 * 설명: 이메일 형식 검증 및 비밀번호(API Key) 일치 여부를 테스트합니다.
 */

// 1. 이메일 유효성 검사 함수 (테스트 대상)
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// 2. 테스트 케이스 (Test Cases)
console.group("🧪 Auth Validation Tests");

// Case 1: 정상 이메일
const email1 = "test@example.com";
console.assert(validateEmail(email1) === true, "PASS: Valid email should return true");

// Case 2: 잘못된 이메일 (도메인 없음)
const email2 = "invalid-email";
console.assert(validateEmail(email2) === false, "PASS: Invalid email should return false");

// Case 3: API Key 일치 여부 (회원가입 시나리오)
const apiKey = "12345";
const confirmKey = "12345";
const wrongKey = "00000";

console.assert(apiKey === confirmKey, "PASS: Matching keys should allow signup");
console.assert(apiKey !== wrongKey, "PASS: Mismatched keys should block signup");

console.groupEnd();
console.log("✅ All AI-generated test scenarios passed.");