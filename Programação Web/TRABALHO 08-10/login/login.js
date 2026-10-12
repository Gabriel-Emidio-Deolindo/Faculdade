import { auth } from "../firebase-config.js";
import {
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginForm = document.querySelector("#login-form");
const googleLoginButton = document.querySelector("#google-login");
const googleProvider = new GoogleAuthProvider();

loginForm.addEventListener("submit", async (event) => {
	event.preventDefault();

	const email = loginForm.email.value.trim().toLowerCase();
	const senha = loginForm.senha.value;

	try {
		await signInWithEmailAndPassword(auth, email, senha);
		window.location.href = "../sistema/sistema.html";
	} catch (error) {
		alert("E-mail ou senha inválidos.");
		console.error(error);
	}
});

googleLoginButton.addEventListener("click", async () => {
	googleLoginButton.disabled = true;

	try {
		await signInWithPopup(auth, googleProvider);
		window.location.href = "../sistema/sistema.html";
	} catch (error) {
		if (error.code === "auth/popup-closed-by-user") {
			alert("O login com o Google foi cancelado.");
		} else if (error.code === "auth/popup-blocked") {
			alert("O navegador bloqueou a janela de login do Google.");
		} else {
			alert("Não foi possível autenticar com o Google.");
		}
		console.error(error);
	} finally {
		googleLoginButton.disabled = false;
	}
});
