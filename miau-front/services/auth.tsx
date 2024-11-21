import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseconfig";

import { User } from "firebase/auth";

export const login = async (
	email: string,
	password: string
): Promise<User | Error> => {
	const auth = getAuth(app);
	const userCredential: User = await signInWithEmailAndPassword(
		auth,
		email,
		password
	)
		.then(() => {
			return userCredential;
		})
		.catch((error) => {
			return error;
		});
	return userCredential;
};
