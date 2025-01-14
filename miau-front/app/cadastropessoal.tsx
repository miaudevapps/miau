import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { Image, StyleSheet, TextInput, ScrollView } from "react-native";
import { useSession } from "../services/auth";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { createUser } from "@/services/users";
import * as ImagePicker from "expo-image-picker";
import { uploadImage } from "@/services/image";

interface FormValues {
	name: string;
	age: string;
	email: string;
	state: string;
	city: string;
	address: string;
	phone: string;
	username: string;
	password: string;
	confirmPassword: string;
	image_url: string | null;
}

export default function CadastroPessoal() {
	const { signUp, isLoading } = useSession();
	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<FormValues>();
	const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
	const navigation = useNavigation<any>();

	const user = useSession().user;

	const handleSignUp = async (data: FormValues) => {
		try {
			setSubmittedData(data);
			await signUp(data.email, data.password);
			console.log(user);
			const { password, confirmPassword, ...userData } = data;
			await createUser(user.uid, userData);
			navigation.navigate("Home");
		} catch (error) {
			console.error("Erro ao criar usuário", error);
		}
	};

	const [image, setImage] = useState<string | null>(null);
	const [uploading, setUploading] = useState(false);
	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ["images"],
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<Layout style={{ flex: 1 }}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<Layout style={{ alignItems: "center" }}>
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
						<Controller
							control={control}
							render={({ field: { onChange, value } }) => (
								<TextInput
									style={styles.inputField}
									placeholder="Nome Completo"
									onChangeText={onChange}
									value={value}
								/>
							)}
							name="name"
							rules={{ required: "Você precisa cadastrar um nome" }}
						/>
					</Layout>
					<Layout style={styles.inputContainer}>
						<Controller
							control={control}
							render={({ field: { onChange, value } }) => (
								<TextInput
									style={styles.inputField}
									placeholder="Idade"
									onChangeText={onChange}
									value={value}
								/>
							)}
							name="age"
							rules={{ required: "Você precisa cadastrar uma idade" }}
						/>
					</Layout>
					<Layout style={styles.inputContainer}>
						<Controller
							control={control}
							render={({ field: { onChange, value } }) => (
								<TextInput
									style={styles.inputField}
									placeholder="E-mail"
									onChangeText={onChange}
									value={value}
									keyboardType="email-address"
								/>
							)}
							name="email"
							rules={{ required: "Você precisa cadastrar um e-mail" }}
						/>
					</Layout>
					<Layout style={styles.inputContainer}>
						<Controller
							control={control}
							render={({ field: { onChange, value } }) => (
								<TextInput
									style={styles.inputField}
									placeholder="Estado"
									onChangeText={onChange}
									value={value}
								/>
							)}
							name="state"
							rules={{ required: "Você precisa cadastrar um estado" }}
						/>
					</Layout>
					<Layout style={styles.inputContainer}>
						<Controller
							control={control}
							render={({ field: { onChange, value } }) => (
								<TextInput
									style={styles.inputField}
									placeholder="Cidade"
									onChangeText={onChange}
									value={value}
								/>
							)}
							name="city"
							rules={{ required: "Você precisa cadastrar uma cidade" }}
						/>
					</Layout>
					<Layout style={styles.inputContainer}>
						<Controller
							control={control}
							render={({ field: { onChange, value } }) => (
								<TextInput
									style={styles.inputField}
									placeholder="Endereço"
									onChangeText={onChange}
									value={value}
								/>
							)}
							name="address"
							rules={{ required: "Você precisa cadastrar um endereço" }}
						/>
					</Layout>
					<Layout style={styles.inputContainer}>
						<Controller
							control={control}
							render={({ field: { onChange, value } }) => (
								<TextInput
									style={styles.inputField}
									placeholder="Telefone"
									onChangeText={onChange}
									value={value}
								/>
							)}
							name="phone"
							rules={{ required: "Você precisa cadastrar um telefone" }}
						/>
					</Layout>
					<Text style={styles.textBlue}>INFORMAÇÕES DE PERFIL</Text>
					<Layout style={styles.inputContainer}>
						<Controller
							control={control}
							render={({ field: { onChange, value } }) => (
								<TextInput
									style={styles.inputField}
									placeholder="Nome de Usuário"
									onChangeText={onChange}
									value={value}
								/>
							)}
							name="username"
							rules={{ required: "Você precisa cadastrar um nome de usuário" }}
						/>
					</Layout>
					<Layout style={styles.inputContainer}>
						<Controller
							control={control}
							render={({ field: { onChange, value } }) => (
								<TextInput
									style={styles.inputField}
									placeholder="Senha"
									onChangeText={onChange}
									value={value}
									secureTextEntry
								/>
							)}
							name="password"
							rules={{ required: "Você precisa cadastrar uma senha" }}
						/>
					</Layout>
					<Layout style={styles.inputContainer}>
						<Controller
							control={control}
							render={({ field: { onChange, value } }) => (
								<TextInput
									style={styles.inputField}
									placeholder="Confirmação de senha"
									secureTextEntry
									onChangeText={onChange}
									value={value}
								/>
							)}
							name="confirmPassword"
							rules={{
								required: "Você precisa confirmar a senha",
								validate: (value) => {
									return (
										value === watch("password") || "As senhas não coincidem"
									);
								},
							}}
						/>
					</Layout>

					{/* Foto de perfil */}
					<Text style={styles.textBlue}>FOTO DE PERFIL</Text>
					{image && (
						<Image
							source={{ uri: image }}
							style={{ width: 170, height: 200 }}
						/>
					)}
					<Button style={styles.button} onPress={pickImage}>
						{(evaProps) => (
							<Text style={styles.buttonText}>ADICIONAR FOTO</Text>
						)}
					</Button>
					<Controller
						control={control}
						name="image_url"
						render={({ field: { onChange } }) => (
							<Button
								style={styles.button}
								onPress={async () => {
									if (image) {
										try {
											const imageUrl = await uploadImage(image);
											onChange(imageUrl);
										} catch (error) {
											console.error("Erro ao fazer upload da imagem", error);
										}
									}
								}}
							>
								{(evaProps) => (
									<Text style={styles.buttonText}>UPLOAD FOTO</Text>
								)}
							</Button>
						)}
					/>
					<Button style={styles.button} onPress={handleSubmit(handleSignUp)}>
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
