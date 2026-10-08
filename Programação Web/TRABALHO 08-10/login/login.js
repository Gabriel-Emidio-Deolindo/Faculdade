import { auth, provider } from "../firebase-config.js";
import {
	signInWithEmailAndPassword,
	signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginForm = document.querySelector("#login-form");
const googleLoginButton = document.querySelector("#google-login");

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
	try {
		await signInWithPopup(auth, provider);
		window.location.href = "../sistema/sistema.html";
	} catch (error) {
		alert("Não foi possível entrar com o Google.");
		console.error(error);
	}
});
