import { doc, setDoc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "./firebaseconfig";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getAuth, signOut } from "firebase/auth";

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

export const logout = async () => {
    const auth = getAuth();
    try {
        await signOut(auth);
        console.log("Usuário deslogado com sucesso.");
    } catch (error) {
        console.error("Erro ao deslogar:", error);
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

export const addPushToken = async (userId: string, pushToken: string) => {
    // Verifica se o usuário ja tem esse token
    // Se não tiver adicionar ao array de tokens

    const user = await getUser(userId);
    if (user) {
        if (user.pushTokens) {
            if (!user.pushTokens.includes(pushToken)) {
                user.pushTokens.push(pushToken);
                updateUser(userId, user);
            }
        } else {
            user.pushTokens = [pushToken];
            updateUser(userId, user);
        }
    }
};

export const getUserPushTokens = async (userId: string) => {
    const user = await getUser(userId);
    if (user) {
        return user.pushTokens;
    }
    return null;
};
