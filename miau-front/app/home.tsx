import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { Image, StyleSheet } from "react-native";

export default function HomeScreen() {
	return (
		<Layout style={{ flex: 1 }}>
			<Icon name="menu-outline" style={styles.menuIcon} fill="#88c9bf" />
			<Layout style={{ alignItems: "center" }}>
				<Text category="h1" style={styles.title}>
					Olá!
				</Text>
				<Text style={styles.description}>
					Bem vindo ao Meau!{"\n"}
					Aqui você pode adotar, doar e ajudar cães e gatos com facilidade.
					{"\n"}
					Qual o seu interesse?
				</Text>
				<Button style={styles.button}>
					{(evaProps) => <Text style={styles.buttonText}>ADOTAR</Text>}
				</Button>
				<Button style={styles.button}>
					{(evaProps) => <Text style={styles.buttonText}>AJUDAR</Text>}
				</Button>
				<Button style={styles.button}>
					{(evaProps) => (
						<Text style={styles.buttonText}>CADASTRAR ANIMAL</Text>
					)}
				</Button>
				<Text style={styles.loginButton}>login</Text>
				<Image
					source={require("../assets/images/logo_colorida.png")}
					style={styles.logo}
				/>
			</Layout>
		</Layout>
	);
}

const styles = StyleSheet.create({
	menuIcon: {
		width: 24,
		height: 24,
		marginTop: 12,
		marginLeft: 12,
	},
	button: {
		width: 232,
		borderWidth: 2,
		borderColor: "#ffd358",
		backgroundColor: "#ffd358",
		borderRadius: 4, // Definindo bordas retas (ajuste para arredondar se necessário)
		shadowColor: "#000", // Cor da sombra
		shadowOffset: { width: 0, height: 2 }, // Direção da sombra
		shadowOpacity: 0.25, // Opacidade da sombra
		shadowRadius: 3.84, // Raio da sombra
		elevation: 5, // Elevação para Android
		marginBottom: 12,
	},
	buttonText: {
		fontFamily: "Roboto", // Define a fonte como Roboto
		fontWeight: "400", // Regular
		fontSize: 12, // Tamanho do texto em pt
		color: "#434343", // Cor do texto
	},
	title: {
		fontFamily: "Courgette", // Define a fonte Courgette
		fontSize: 72, // Define o tamanho do texto
		color: "#ffd358", // Cor do texto
		fontWeight: "400", // Regular
		marginTop: 20,
	},
	description: {
		fontFamily: "Roboto", // Define a fonte Roboto
		fontSize: 16, // Define o tamanho do texto
		color: "#757575", // Cor do texto
		fontWeight: "400", // Regular
		marginTop: 52,
		marginHorizontal: 48,
		marginBottom: 48,
		textAlign: "center",
	},
	loginButton: {
		color: "#88c9bf",
		fontFamily: "Roboto",
		fontSize: 16,
		marginTop: 32,
	},
	logo: {
		width: 122,
		height: 44,
		marginTop: 68,
	},
});
