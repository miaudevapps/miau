import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { Link } from "expo-router";
import { Image, StyleSheet } from "react-native";
import { TopNav } from "../components/navigation/TopNavegation";

export default function Cadastroanimalfeito() {
	return (
		<Layout style={{ flex: 1 }}>
			<Layout style={{ alignItems: "center" }}>
				<Text category="h1" style={styles.title}>
					Eba!
				</Text>
				<Text style={styles.description}>
					O cadastro do seu pet foi realizado{"\n"}
					com sucesso!
				</Text>
				<Text style={styles.description}>
					Certifique-se que permitiu o envio de{"\n"}
					notificações por push no campo{"\n"}
					privacidade do menu configurações do{"\n"}
					aplicativo. Assim, poderemos te avisar{"\n"}
					assim que alguém interessado entrar{"\n"}
					em contato!
				</Text>
				<Button style={styles.button}>
					{(evaProps) => <Text style={styles.buttonText}>MEUS PETS</Text>}
				</Button>
			</Layout>
		</Layout>
	);
}

const styles = StyleSheet.create({
	title: {
		fontFamily: "Courgette", // Define a fonte Courgette
		fontSize: 53, // Define o tamanho do texto
		color: "#ffd358", // Cor do texto
		marginTop: 52,
	},
	button: {
		width: 232,
		height: 40,
		borderWidth: 2,
		borderColor: "#ffd358",
		backgroundColor: "#ffd358",
		borderRadius: 4, // Definindo bordas retas (ajuste para arredondar se necessário)
		shadowColor: "#000", // Cor da sombra
		shadowOffset: { width: 0, height: 2 }, // Direção da sombra
		shadowOpacity: 0.25, // Opacidade da sombra
		shadowRadius: 3.84, // Raio da sombra
		elevation: 5, // Elevação para Android
		marginTop: 100,
	},
	buttonText: {
		fontFamily: "Roboto", // Define a fonte como Roboto
		fontSize: 12, // Tamanho do texto em pt
		color: "#434343", // Cor do texto
	},
	description: {
		fontFamily: "Roboto", // Define a fonte Roboto
		fontSize: 14, // Define o tamanho do texto
		color: "#757575", // Cor do texto
		marginTop: 52,
		textAlign: "center",
	},
});
