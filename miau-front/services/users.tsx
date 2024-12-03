import { doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseconfig";

export const createUser = async (userId: string, data: any) => {
	try {
		await setDoc(doc(db, "users", userId), data);
		console.log("Usuário criado na tabela de users!");
	} catch (error) {
		console.error("Erro ao criar usuário na tabela user", error);
	}
};

export const updateUser = async (userId: string, data: any) => {
	try {
		await updateDoc(doc(db, "users", userId), data);
		console.log("Usuário atualizado na tabela de users!");
	} catch (error) {
		console.error("Erro ao atualizar usuário na tabela user", error);
	}
};

export const deleteUser = async (userId: string) => {
	try {
		await deleteDoc(doc(db, "users", userId));
		console.log("Usuário deletado na tabela de users!");
	} catch (error) {
		console.error("Erro ao deletar usuário na tabela user", error);
	}
};
