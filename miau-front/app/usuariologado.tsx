import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
	const navigation = useNavigation<any>();
	return (
		<Layout style={{ flex: 1 }}>
			<Layout style={{ alignItems: "center" }}>
				<Text category="h1" style={styles.title}>
					Página de Links!
				</Text>
				<Text style={styles.description}>
					Qual página deseja visitar?
				</Text>
				<Button style={styles.button} onPress={() => navigation.navigate("Home")}>
					{(evaProps) => <Text style={styles.buttonText}>HOME</Text>}
				</Button>
				<Button style={styles.button} onPress={() => navigation.navigate("Cadastro")}>
					{(evaProps) => (
						<Text style={styles.buttonText}>PÁGINA DE CADASTRO</Text>
					)}
				</Button>
                <Button style={styles.button} onPress={() => navigation.navigate("Login")}>
					{(evaProps) => (
						<Text style={styles.buttonText}>PÁGINA DE LOGIN</Text>
					)}
				</Button>
                <Button style={styles.button} onPress={() => navigation.navigate("Cadastro Pessoal")}>
					{(evaProps) => (
						<Text style={styles.buttonText}>CADASTRO PESSOAL</Text>
					)}
				</Button>
                <Button style={styles.button} onPress={() => navigation.navigate("Cadastro Animal")}>
					{(evaProps) => (
						<Text style={styles.buttonText}>CADASTRAR ANIMAL</Text>
					)}
				</Button>
                <Button style={styles.button} onPress={() => navigation.navigate("Cadastro Animal Feito")}>
					{(evaProps) => (
						<Text style={styles.buttonText}>CADASTRO ANIMAL FEITO</Text>
					)}
				</Button>

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
