import { app, storage } from "./firebaseconfig";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";

export const uploadImage = async (imageUri: string) => {
	try {
		// Convertendo URI para Blob
		const response = await fetch(imageUri);
		const blob = await response.blob();

		// Upload da imagem
		const storageRef = ref(storage, "images/" + new Date().getTime());
		const uploadTask = uploadBytesResumable(storageRef, blob);

		return new Promise((resolve, reject) => {
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log(`Upload está ${progress}% completo.`);
				},
				(error) => {
					console.error("Erro durante o upload:", error);
					reject(error);
				},
				async () => {
					// Upload completo, obtenha o URL da imagem
					const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
					console.log("URL de download: ", downloadURL);
					resolve(downloadURL);
					return downloadURL;
				}
			);
		});
	} catch (error) {
		console.error("Erro ao fazer upload da imagem:", error);
		throw error;
	}
};
