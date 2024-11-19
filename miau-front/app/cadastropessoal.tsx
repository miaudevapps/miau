import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { Link } from "expo-router";
import { Image, StyleSheet } from "react-native";

export default function HomeScreen() {
	return (
		<Layout style={{ flex: 1 }}>
			<Layout style={{ alignItems: "center" }}>
                <Layout style={styles.navbar}>
                <Button style={styles.backButton}><Text>O</Text></Button>
                <Text style={styles.navbarText}>Cadastro Pessoal</Text>
                </Layout>
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
});
