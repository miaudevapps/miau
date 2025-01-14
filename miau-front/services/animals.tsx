import { doc, setDoc, updateDoc, deleteDoc, getDoc, getDocs, collection } from "firebase/firestore";
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

export const getAnimal = async (AnimalId: string) => {
	try {
	  const docRef = doc(db, "Animals", AnimalId);
	  const docSnap = await getDoc(docRef);
  
	  if (docSnap.exists()) {
		console.log("Animal encontrado:", docSnap.data());
		return docSnap.data(); // Return the animal data
	  } else {
		console.log("Animal não encontrado!");
		return null; // Or throw an error if you prefer
	  }
	} catch (error) {
	  console.error("Erro ao buscar animal:", error);
	  return null; // Or throw an error if you prefer
	}
  };

  export const getAllAnimals = async () => {
	try {
	  const animalsCollection = collection(db, "Animals");
	  const querySnapshot = await getDocs(animalsCollection);
  
	  const animals = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	  }));
  
	  console.log("Todos os animais:", animals);
	  return animals; // Return the array of animal data
	} catch (error) {
	  console.error("Erro ao buscar todos os animais:", error);
	  return []; // Or throw an error if you prefer
	}
  };