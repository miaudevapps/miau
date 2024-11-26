import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { Link } from "expo-router";
import { Image, StyleSheet } from "react-native";
import { TopNav } from "../components/navigation/TopNavegation";

export default function Cadastro() {
	return (
		<Layout style={{ flex: 1 }}>
			<Layout style={{ alignItems: "center" }}>
				{TopNav("Cadastro")}
				<Text category="h1" style={styles.title}>
					Ops!
				</Text>
				<Text style={styles.descriptionone}>
					Você não pode realizar esta ação sem{"\n"}
					possuir um cadastro
				</Text>
				<Button style={styles.button}>
					{(evaProps) => <Text style={styles.buttonText}>FAZER CADASTRO</Text>}
				</Button>
				<Text style={styles.descriptiontwo}>Já possui cadastro?</Text>
				<Button style={styles.button}>
					{(evaProps) => <Text style={styles.buttonText}>FAZER LOGIN</Text>}
				</Button>
			</Layout>
		</Layout>
	);
}

const styles = StyleSheet.create({
	title: {
		fontFamily: "Courgette", // Define a fonte Courgette
		fontSize: 72, // Define o tamanho do texto
		color: "#88c9bf", // Cor do texto
		fontWeight: "400", // Regular
		marginTop: 52,
	},
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
		marginTop: 16,
	},
	buttonText: {
		fontFamily: "Roboto", // Define a fonte como Roboto
		fontWeight: "400", // Regular
		fontSize: 12, // Tamanho do texto em pt
		color: "#434343", // Cor do texto
	},
	descriptionone: {
		fontFamily: "Roboto", // Define a fonte Roboto
		fontSize: 14, // Define o tamanho do texto
		color: "#757575", // Cor do texto
		marginTop: 52,
		textAlign: "center",
	},
	descriptiontwo: {
		fontFamily: "Roboto", // Define a fonte Roboto
		fontSize: 14, // Define o tamanho do texto
		color: "#757575", // Cor do texto
		marginTop: 44,
		textAlign: "center",
	},
});
