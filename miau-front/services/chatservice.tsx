import {
	doc,
	setDoc,
	updateDoc,
	deleteDoc,
	getDoc,
	getDocs,
	collection,
} from "firebase/firestore";
import { db } from "./firebaseconfig";

export const createChat = async (DonoPetId : string, InteressadoId: string, AnimalId : string) => {
	const ChatId = DonoPetId + InteressadoId + AnimalId;
    const data = {
        DonoPetId: DonoPetId,
        InteressadoId: InteressadoId,
        AnimalId: AnimalId,
        Mensagens: [],
        timestemp: new Date(),
    };
    try {
        await setDoc(doc(db, "Chats", ChatId), data);
        console.log("Chat criado na tabela de Chats!");
    } catch (error) {
        console.error("Erro ao criar chat na tabela Chats", error);
    }
}

export const getChat = async (ChatId: string) => {
    try {
        const docRef = doc(db, "Chats", ChatId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Chat encontrado:", docSnap.data());
            return docSnap.data(); // Return the chat data
        } else {
            console.log("Chat não encontrado!");
            return null; // Or throw an error if you prefer
        }
    } catch (error) {
        console.error("Erro ao buscar chat:", error);
        return null; // Or throw an error if you prefer
    }
};

export const getChatsByUser = async (UserId: string) => {
    try {
        const chatsCollection = collection(db, "Chats");
        const chatsSnapshot = await getDocs(chatsCollection);

        const chats = chatsSnapshot.docs
            .map((doc) => doc.data())
            .filter((chat) => chat.DonoPetId === UserId || chat.InteressadoId === UserId);

        console.log("Chats encontrados:", chats);
        return chats;
    } catch (error) {
        console.error("Erro ao buscar chats:", error);
        return [];
    }
};

export const sendMessage = async (ChatId: string, message: any) => {
    try {
        const chatRef = doc(db, "Chats", ChatId);
        const chatSnap = await getDoc(chatRef);

        if (chatSnap.exists()) {
            const chat = chatSnap.data();
            chat.Mensagens.push(message);

            await updateDoc(chatRef, chat);
            console.log("Mensagem enviada!");
        } else {
            console.log("Chat não encontrado!");
        }
    } catch (error) {
        console.error("Erro ao enviar mensagem:", error);
    }
};