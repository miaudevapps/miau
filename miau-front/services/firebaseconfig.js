// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence } from "@firebase/auth/dist/rn/index.js";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyA9OVAGiSEwbFfqTJPfB0OUPgXuqTa7Yi0",
	authDomain: "miau-504b6.firebaseapp.com",
	projectId: "miau-504b6",
	storageBucket: "miau-504b6.firebasestorage.app",
	messagingSenderId: "301426002664",
	appId: "1:301426002664:web:33701d990285f4aae7175d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const storage = getStorage(app);
