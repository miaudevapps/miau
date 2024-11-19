import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { Link } from "expo-router";
import { Image, StyleSheet } from "react-native";

export default function HomeScreen() {
	return (
		<Layout style={{ flex: 1 }}>
			<Layout style={{ alignItems: "center" }}>
                <Layout style={styles.navbar}>
                <Button style={styles.backButton}><Text>O</Text></Button>
                <Text style={styles.navbarText}>Cadastro</Text>
                </Layout>
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
                <Text style={styles.descriptiontwo}>
				    Já possui cadastro?
				</Text>
				<Button style={styles.button}>
					{(evaProps) => <Text style={styles.buttonText}>FAZER LOGIN</Text>}
				</Button>
			</Layout>
		</Layout>
	);
}

const styles = StyleSheet.create({
    navbar: {
        width: 360,                  // Largura do retângulo
        height: 56,                  // Altura da Navbar
        backgroundColor: "#88c9bf",  // Cor da Navbar
        flexDirection: "row",        // Itens na horizontal
        alignItems: "center",        // Alinhar os itens verticalmente no centro
    },
    backButton: {
        width: 24,                   // Tamanho do ícone
        height: 24,                  // Tamanho do ícone
        marginLeft: 16,              // Distância da borda esquerda
        marginTop: 16,               // Distância do topo
        marginBottom: 16,            // Distância da base
    },
    navbarText: {
        flex: 1,                     // O texto vai ocupar o espaço restante
        fontFamily: "Roboto",        // Fonte Roboto
        fontSize: 20,                // Tamanho da fonte 20pt
        color: "#434343",            // Cor do texto
        marginLeft: 20,
    },
    title: {
		fontFamily: "Courgette", // Define a fonte Courgette
		fontSize: 53, // Define o tamanho do texto
		color: "#88c9bf", // Cor do texto
		marginTop: 52,
	},
	button: {
		width: 232,
        height: 40,
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
