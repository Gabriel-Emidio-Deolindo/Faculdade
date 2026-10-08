import { auth, db } from "../firebase-config.js";
import {
	onAuthStateChanged,
	signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
	doc,
	getDoc,
	setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const welcomeTitle = document.querySelector("#welcome-title");
const userEmail = document.querySelector("#user-email");
const logoutButton = document.querySelector("#logout-button");

onAuthStateChanged(auth, async (user) => {
	if (!user) {
		window.location.href = "../login/login.html";
		return;
	}

	const usuarioRef = doc(db, "usuarios", user.uid);
	const usuarioSnapshot = await getDoc(usuarioRef);
	const dadosUsuario = usuarioSnapshot.exists() ? usuarioSnapshot.data() : {};
	const nome = dadosUsuario.nome || user.displayName || user.email.split("@")[0];
	const email = user.email || dadosUsuario.email || "";

	welcomeTitle.textContent = `Bem-vindo(a), ${nome}`;
	userEmail.textContent = email;

	await setDoc(usuarioRef, {
		nome,
		email,
		ultimoAcesso: new Date()
	}, { merge: true });
});

logoutButton.addEventListener("click", async () => {
	try {
		await signOut(auth);
		window.location.href = "../login/login.html";
	} catch (error) {
		alert("Não foi possível sair da conta.");
		console.error(error);
	}
});
