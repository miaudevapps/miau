import { doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseconfig";

export const createAnimal = async (AnimalId: string, data: any) => {
	try {
		await setDoc(doc(db, "Animals", AnimalId), data);
		console.log("Usuário criado na tabela de Animals!");
	} catch (error) {
		console.error("Erro ao criar usuário na tabela Animal", error);
	}
};

export const updateAnimal = async (AnimalId: string, data: any) => {
	try {
		await updateDoc(doc(db, "Animals", AnimalId), data);
		console.log("Usuário atualizado na tabela de Animals!");
	} catch (error) {
		console.error("Erro ao atualizar usuário na tabela Animal", error);
	}
};

export const deleteAnimal = async (AnimalId: string) => {
	try {
		await deleteDoc(doc(db, "Animals", AnimalId));
		console.log("Usuário deletado na tabela de Animals!");
	} catch (error) {
		console.error("Erro ao deletar usuário na tabela Animal", error);
	}
};
