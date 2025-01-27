import { doc, setDoc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "./firebaseconfig";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const createUser = async (userId: string, data: any) => {
	try {
		// add user id in data
		data.userId = userId;
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

export const getUser = async (userId: string) => {
	try {
		const docRef = doc(db, "users", userId);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			console.log("Usuário encontrado na tabela de users!");
			console.log(docSnap.data());
			return docSnap.data();
		} else {
			console.log("Usuário não encontrado na tabela de users!");
			return null;
		}
	} catch (error) {
		console.error("Erro ao buscar usuário na tabela user", error);
	}
};
