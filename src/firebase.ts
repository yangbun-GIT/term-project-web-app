import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: 아까 Firebase 콘솔에서 복사한 값으로 교체하세요!
const firebaseConfig = {
    apiKey: "AIzaSyCMRPD1unHZ_nVaA5rSLmbvbfaLdRBLKCY",
    authDomain: "term-project-web-app.firebaseapp.com",
    projectId: "term-project-web-app",
    storageBucket: "term-project-web-app.firebasestorage.app",
    messagingSenderId: "676001090912",
    appId: "1:676001090912:web:d0c7c947c4e9b9b9186205",
    measurementId: "G-XG33C395Y0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);