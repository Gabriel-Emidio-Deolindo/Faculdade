import { auth, db } from "../firebase-config.js";
import {
	createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
	collection,
	doc,
	getDocs,
	query,
	setDoc,
	where
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const cadastroForm = document.querySelector("#cadastro-form");

cadastroForm.addEventListener("submit", async (event) => {
	event.preventDefault();

	const nome = cadastroForm.nome.value.trim();
	const email = cadastroForm.email.value.trim().toLowerCase();
	const senha = cadastroForm.senha.value;

	try {
		const usuariosRef = collection(db, "usuarios");
		const usuarioExistente = await getDocs(query(usuariosRef, where("email", "==", email)));

		if (!usuarioExistente.empty) {
			alert("Este e-mail já está cadastrado.");
			return;
		}

		const credencial = await createUserWithEmailAndPassword(auth, email, senha);

		await setDoc(doc(db, "usuarios", credencial.user.uid), {
			uid: credencial.user.uid,
			nome,
			email
		});

		window.location.href = "../sistema/sistema.html";
	} catch (error) {
		if (error.code === "auth/email-already-in-use") {
			alert("Este e-mail já está cadastrado.");
		} else if (error.code === "auth/weak-password") {
			alert("A senha deve ter pelo menos 6 caracteres.");
		} else {
			alert("Não foi possível criar a conta.");
		}
		console.error(error);
	}
});
