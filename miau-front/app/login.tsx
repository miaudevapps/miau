import { Layout, Text, Button, Input } from "@ui-kitten/components";
import { Image, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { TopNav } from "../components/navigation/TopNavegation";
import { useSession } from "../services/auth";
import React from "react";
import {
	createStaticNavigation,
	useNavigation,
} from "@react-navigation/native";


export default function Login() {
	const [isFocused, setIsFocused] = useState(false); // Estado para foco no campo

	const navigation = useNavigation<any>();

	//const navigation = useNavigation();

	const [formState, setFormState] = React.useState({
		email: "",
		password: "",
	});
	const { signIn, isLoading } = useSession();

	const handleFormChange = (key: string, value: string) => {
		setFormState({
			...formState,
			[key]: value,
		});
	};

	const handleLogin = async () => {
		try {
			await signIn(formState.email, formState.password);
			navigation.navigate("Home");
		} catch (error) {
			console.error("Erro de login", error);
		}
	};

	return (
		<Layout style={{ flex: 1, alignItems: "center" }}>
			<Layout style={{ marginTop: 64, marginBottom: 32 }}>
				<Input
					placeholder="Nome de usuário"
					style={[styles.input, isFocused && styles.inputFocused]}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					onChangeText={(value) => handleFormChange("email", value)}
					value={formState.email}
				/>
				<Input
					placeholder="Senha"
					style={[styles.input, isFocused && styles.inputFocused]}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					secureTextEntry={true}
					onChangeText={(value) => handleFormChange("password", value)}
					value={formState.password}
				/>
			</Layout>
			<Button
				style={styles.button}
				onPress={() => {
					handleLogin();
				}}
			>
				{(evaProps) => <Text style={styles.buttonText}>ENTRAR</Text>}
			</Button>
			<Button
				style={styles.button_facebook}
				accessoryLeft={(props) => (
					<Image
						source={require("../assets/images/facebook.png")}
						style={styles.logo}
					/>
				)}
			>
				{(evaProps) => (
					<Text style={styles.buttonText_redes}>ENTRAR COM O FACEBOOK</Text>
				)}
			</Button>
			<Button
				style={styles.button_google}
				accessoryLeft={(props) => (
					<Image
						source={require("../assets/images/google.png")}
						style={styles.logo}
					/>
				)}
			>
				{(evaProps) => (
					<Text style={styles.buttonText_redes}>ENTRAR COM O GOOGLE</Text>
				)}
			</Button>
		</Layout>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 232,
		borderWidth: 2,
		borderColor: "#88c9bf",
		backgroundColor: "#88c9bf",
		borderRadius: 4, // Definindo bordas retas (ajuste para arredondar se necessário)
		shadowColor: "#000", // Cor da sombra
		shadowOffset: { width: 0, height: 2 }, // Direção da sombra
		shadowOpacity: 0.25, // Opacidade da sombra
		shadowRadius: 3.84, // Raio da sombra
		elevation: 5, // Elevação para Android
		marginBottom: 72,
	},
	buttonText: {
		fontFamily: "Roboto", // Define a fonte como Roboto
		fontWeight: "400", // Regular
		fontSize: 12, // Tamanho do texto em pt
		color: "#434343", // Cor do texto
	},
	input: {
		borderWidth: 0,
		borderBottomWidth: 1,
		borderBottomColor: "#e6e7e8", // Cor da linha inferior
		backgroundColor: "transparent",
		width: 312,
		fontFamily: "Roboto",
		fontSize: 14,
		marginBottom: 20,
	},
	inputFocused: {
		borderBottomColor: "#88c9bf", // Cor da linha inferior ao focar
	},
	button_facebook: {
		width: 232,
		borderWidth: 2,
		borderColor: "#194f7c",
		backgroundColor: "#194f7c",
		borderRadius: 4, // Definindo bordas retas (ajuste para arredondar se necessário)
		shadowColor: "#000", // Cor da sombra
		shadowOffset: { width: 0, height: 2 }, // Direção da sombra
		shadowOpacity: 0.25, // Opacidade da sombra
		shadowRadius: 3.84, // Raio da sombra
		elevation: 5, // Elevação para Android
		marginBottom: 8,
	},
	buttonText_redes: {
		fontFamily: "Roboto", // Define a fonte como Roboto
		fontWeight: "400", // Regular
		fontSize: 12, // Tamanho do texto em pt
		color: "#fff", // Cor do texto
	},
	button_google: {
		width: 232,
		borderWidth: 2,
		borderColor: "#f15f5c",
		backgroundColor: "#f15f5c",
		borderRadius: 4, // Definindo bordas retas (ajuste para arredondar se necessário)
		shadowColor: "#000", // Cor da sombra
		shadowOffset: { width: 0, height: 2 }, // Direção da sombra
		shadowOpacity: 0.25, // Opacidade da sombra
		shadowRadius: 3.84, // Raio da sombra
		elevation: 5, // Elevação para Android
	},
	logo: {
		width: 14,
		height: 14,
		marginRight: 12,
	},
	checkIcon: {},
});
