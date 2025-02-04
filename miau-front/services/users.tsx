import { doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseconfig";
import { getAuth, signOut } from "firebase/auth";
import { collection, getDocs, getDoc } from "firebase/firestore";

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
}

export const logout = async () => {
	const auth = getAuth();
	try {
		await signOut(auth);
		console.log("Usuário deslogado com sucesso.");
	} catch (error) {
		console.error("Erro ao deslogar:", error);
	}
};

export const getUsers = async () => {
	try {
		const usersCollection = collection(db, "users");
		const usersSnapshot = await getDocs(usersCollection);
		const usersList = usersSnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));

		console.log("Usuários obtidos com sucesso:", usersList);
		return usersList;
	} catch (error) {
		console.error("Erro ao buscar usuários:", error);
		return [];
	}
};

export const getUserById = async (userId: string) => {
	try {
		const userRef = doc(db, "users", userId);
		const userSnap = await getDoc(userRef);

		if (userSnap.exists()) {
			const userData = { id: userSnap.id, ...userSnap.data() };
			console.log("Usuário encontrado:", userData);
			return userData;
		} else {
			console.log("Usuário não encontrado.");
			return null;
		}
	} catch (error) {
		console.error("Erro ao buscar usuário:", error);
		return null;
	}
};
