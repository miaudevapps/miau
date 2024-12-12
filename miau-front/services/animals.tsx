import {
	doc,
	setDoc,
	updateDoc,
	deleteDoc,
	collection,
	getDocs,
	getDocFromCache,
} from "firebase/firestore";
import { db } from "./firebaseconfig";
import { useSession } from "./auth";

export const createAnimal = async (AnimalId: string, data: any) => {
	try {
		await setDoc(doc(db, "Animals", AnimalId), data);
		console.log("Animal criado na tabela de Animals!");
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

export const getAnImals = async () => {
	const AnimalList: any[] = [];
	const querySnapshot = await getDocs(collection(db, "Animals"));
	querySnapshot.forEach((doc) => {
		const data = doc.data();
		AnimalList.push(data);
	});
	return AnimalList;
};

export const getAnimal = async (AnimalId: string) => {
	const docRef = doc(db, "Animals", AnimalId);
	// doc data
	const docSnap = await getDocFromCache(docRef);
};
