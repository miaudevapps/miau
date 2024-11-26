import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { Image, StyleSheet, TextInput, ScrollView } from "react-native";
import { TopNav } from "../components/navigation/TopNavegation";
import { useSession } from "../services/auth";
import React from "react";

export default function CadastroPessoal() {
	const [formState, setFormState] = React.useState({
		email: "",
		password: "",
	});
	const { signUp, isLoading } = useSession();

	const handleFormChange = (key: string, value: string) => {
		setFormState({
			...formState,
			[key]: value,
		});
	};

	const handleSignUp = async () => {
		try {
			await signUp(formState.email, formState.password);
		} catch (error) {
			console.error("Erro ao criar usuário", error);
		}
	};

	return (
		<Layout style={{ flex: 1 }}>
			{TopNav("Cadastro", "cfe9e5")}
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<Layout style={{ alignItems: "center" }}>
					{/* Caixa com o texto informativo */}
					<Layout style={styles.box}>
						<Text style={styles.boxText}>
							As informações preenchidas serão divulgadas{"\n"}
							apenas para a pessoa com a qual você realizar{"\n"}o processo de
							adoção e/ou apadrinhamento,{"\n"}
							após a formalização do processo.
						</Text>
					</Layout>

					{/* Informações pessoais */}
					<Text style={styles.textBlue}>INFORMAÇÕES PESSOAIS</Text>

					<Layout style={styles.inputContainer}>
						<TextInput style={styles.inputField} placeholder="Nome Completo" />
					</Layout>
					<Layout style={styles.inputContainer}>
						<TextInput style={styles.inputField} placeholder="Idade" />
					</Layout>
					<Layout style={styles.inputContainer}>
						<TextInput
							style={styles.inputField}
							placeholder="E-mail"
							onChangeText={(value) => handleFormChange("email", value)}
						/>
					</Layout>
					<Layout style={styles.inputContainer}>
						<TextInput style={styles.inputField} placeholder="Estado" />
					</Layout>
					<Layout style={styles.inputContainer}>
						<TextInput style={styles.inputField} placeholder="Cidade" />
					</Layout>
					<Layout style={styles.inputContainer}>
						<TextInput style={styles.inputField} placeholder="Endereço" />
					</Layout>
					<Layout style={styles.inputContainer}>
						<TextInput style={styles.inputField} placeholder="Telefone" />
					</Layout>

					{/* Informações de perfil */}
					<Text style={styles.textBlue}>INFORMAÇÕES DE PERFIL</Text>
					<Layout style={styles.inputContainer}>
						<TextInput
							style={styles.inputField}
							placeholder="Nome de Usuário"
						/>
					</Layout>
					<Layout style={styles.inputContainer}>
						<TextInput
							style={styles.inputField}
							placeholder="Senha"
							onChangeText={(value) => handleFormChange("password", value)}
						/>
					</Layout>
					<Layout style={styles.inputContainer}>
						<TextInput
							style={styles.inputField}
							placeholder="Confirmação de senha"
						/>
					</Layout>

					{/* Foto de perfil */}
					<Text style={styles.textBlue}>FOTO DE PERFIL</Text>
					<Layout style={styles.photoBox}>
						{/* Aqui você pode colocar o código para upload de foto */}
					</Layout>
					<Button
						style={styles.button}
						onPress={() => {
							handleSignUp();
						}}
					>
						{(evaProps) => (
							<Text style={styles.buttonText}>FAZER CADASTRO</Text>
						)}
					</Button>
				</Layout>
			</ScrollView>
		</Layout>
	);
}

const styles = StyleSheet.create({
	// Este estilo garante que o ScrollView ocupe o espaço restante da tela
	scrollContainer: {
		flexGrow: 1,
		paddingBottom: 50, // Adiciona um espaçamento no final
		paddingHorizontal: 16, // Margem lateral para deixar o conteúdo mais espaçado
	},
	navbarText: {
		flex: 1,
		fontFamily: "Roboto",
		fontSize: 20,
		color: "#434343",
		marginLeft: 20,
	},
	box: {
		width: 328,
		height: 80,
		backgroundColor: "#cfe9e5",
		borderWidth: 4,
		borderColor: "#cfe9e5",
		marginTop: 16,
		justifyContent: "center",
		alignItems: "center",
	},
	boxText: {
		fontFamily: "Roboto",
		fontSize: 14,
		color: "#434343",
		textAlign: "center",
	},
	textBlue: {
		fontFamily: "Roboto",
		fontSize: 14,
		color: "#cfe9e5",
		marginTop: 14,
		marginRight: 150,
	},
	inputContainer: {
		width: 328,
		marginTop: 20,
	},
	inputField: {
		color: "#bdbdbd",
		fontFamily: "Roboto",
		fontSize: 14,
		marginTop: 5,
		borderBottomWidth: 1,
		borderBottomColor: "#bdbdbd",
		paddingLeft: 5,
		marginBottom: 15,
	},
	photoBox: {
		width: 128,
		height: 128,
		backgroundColor: "#e6e7e7", // Corrigido o erro com o código da cor
		borderWidth: 2,
		borderColor: "#e6e7e7", // Corrigido o erro com o código da cor
		marginTop: 16,
		justifyContent: "center",
		alignItems: "center",
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
		marginTop: 32,
	},
	buttonText: {
		fontFamily: "Roboto", // Define a fonte como Roboto
		fontWeight: "400", // Regular
		fontSize: 12, // Tamanho do texto em pt
		color: "#434343", // Cor do texto
	},
});
