import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
	apiKey: "COLE_SUA_API_KEY_AQUI",
	authDomain: "SEU_PROJETO.firebaseapp.com",
	projectId: "SEU_PROJECT_ID",
	storageBucket: "SEU_PROJETO.firebasestorage.app",
	messagingSenderId: "SEU_MESSAGING_SENDER_ID",
	appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
