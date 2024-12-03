import {
	Layout,
	Text,
	Button,
	Radio,
	RadioGroup,
	Input,
	CheckBox,
} from "@ui-kitten/components";
import { Image, StyleSheet, TextInput, ScrollView } from "react-native";
import { TopNav } from "../components/navigation/TopNavegation";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { createAnimal } from "@/services/animals";

interface FormValues {
	tipo_anuncio: string;
	nome: string;
	especie: string;
	sexo: string;
	porte: string;
	idade: string;
	temperamento: string[];
	saúde: string[];
	doenças: string;
	exigencias: string[];
	tempo_acompanhamento: string;
}

export default function CadastroAnimal() {
	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<FormValues>();
	const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
	const navigation = useNavigation<any>();

	const handleCadastroAnimal = async (data: FormValues) => {
		try {
			setSubmittedData(data);
			console.log(data);
		} catch (error) {
			console.error("Erro ao cadastrar animal", error);
		}
	};

	return (
		<Layout style={{ flex: 1 }}>
			{TopNav("Cadastro Animal", "#fee29b")}
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<Layout style={{ alignItems: "center" }}>
					<Text style={styles.Text}>
						Tenho interesse em cadastrar o animal para:
					</Text>
					<Layout style={styles.buttonBox}>
						<Button style={styles.buttonYellow}>
							<Text style={styles.buttonText}>ADOÇÃO</Text>
						</Button>
						<Button style={styles.buttonWhite}>
							<Text style={styles.buttonTextT}>APADRINHAR</Text>
						</Button>
						<Button style={styles.buttonWhite}>
							<Text style={styles.buttonText}>AJUDA</Text>
						</Button>
					</Layout>

					<Text style={styles.TextN}>Adoção</Text>
					<Text style={styles.TextYellow}>NOME DO ANIMAL</Text>
					<Layout style={styles.inputContainer}>
						<Controller
							control={control}
							name="nome"
							rules={{ required: "Você precisa cadastrar um nome" }}
							render={({ field: { onChange, value } }) => (
								<TextInput
									style={styles.inputField}
									placeholder="Nome do Animal"
									onChangeText={onChange}
									value={value}
								/>
							)}
						/>
					</Layout>

					<Text style={styles.TextYellow}>FOTO DO ANIMAL</Text>
					<Layout style={styles.photoBox}> </Layout>

					<Text style={styles.TextYellow}>ESPÉCIE</Text>
					<Layout style={styles.radioBox}>
						<Controller
							control={control}
							name="especie"
							rules={{ required: "Você precisa selecionar uma espécie" }}
							render={({ field: { onChange, value } }) => (
								<RadioGroup
									selectedIndex={value === "Cachorro" ? 0 : 1}
									onChange={(index) =>
										onChange(index === 0 ? "Cachorro" : "Gato")
									}
									style={styles.radioGroup}
								>
									<Radio>Cachorro</Radio>
									<Radio>Gato</Radio>
								</RadioGroup>
							)}
						/>
					</Layout>

					<Text style={styles.TextYellow}>SEXO</Text>
					<Layout style={styles.radioBox}>
						<Controller
							control={control}
							name="sexo"
							rules={{ required: "Você precisa selecionar um sexo" }}
							render={({ field: { onChange, value } }) => (
								<RadioGroup
									selectedIndex={value === "Macho" ? 0 : 1}
									onChange={(index) =>
										onChange(index === 0 ? "Macho" : "Fêmea")
									}
									style={styles.radioGroup}
								>
									<Radio>Macho</Radio>
									<Radio>Fêmea</Radio>
								</RadioGroup>
							)}
						/>
					</Layout>
					<Text style={styles.TextYellow}>PORTE</Text>
					<Layout style={styles.radioBox}>
						<Controller
							control={control}
							name="porte"
							rules={{ required: "Você precisa selecionar um porte" }}
							render={({ field: { onChange, value } }) => (
								<RadioGroup
									selectedIndex={
										value === "Pequeno" ? 0 : value === "Médio" ? 1 : 2
									}
									onChange={(index) =>
										onChange(
											index === 0 ? "Pequeno" : index === 1 ? "Médio" : "Grande"
										)
									}
									style={styles.radioGroup}
								>
									<Radio>Pequeno</Radio>
									<Radio>Médio</Radio>
									<Radio>Grande</Radio>
								</RadioGroup>
							)}
						/>
					</Layout>
					<Text style={styles.TextYellow}>IDADE</Text>
					<Layout style={styles.radioBox}>
						<Controller
							control={control}
							name="idade"
							rules={{ required: "Você precisa selecionar uma idade" }}
							render={({ field: { onChange, value } }) => (
								<RadioGroup
									selectedIndex={
										value === "Filhote" ? 0 : value === "Adulto" ? 1 : 2
									}
									onChange={(index) =>
										onChange(
											index === 0 ? "Filhote" : index === 1 ? "Adulto" : "Idoso"
										)
									}
									style={styles.radioGroup}
								>
									<Radio>Filhote</Radio>
									<Radio>Adulto</Radio>
									<Radio>Idoso</Radio>
								</RadioGroup>
							)}
						/>
					</Layout>
					{/* Campo Temperamento - Checkboxes */}
					<Text style={styles.TextYellow}>TEMPERAMENTO</Text>
					<Controller
						control={control}
						name="temperamento"
						render={({ field: { onChange, value } }) => (
							<Layout style={styles.checkboxContainer}>
								<CheckBox
									checked={value?.includes("brincalhao")}
									onChange={() => {
										const newValue = value?.includes("brincalhao")
											? value.filter((item) => item !== "brincalhao")
											: [...(value || []), "brincalhao"];
										onChange(newValue);
									}}
								>
									Brincalhão
								</CheckBox>
								<CheckBox
									checked={value?.includes("timido")}
									onChange={() => {
										const newValue = value?.includes("timido")
											? value.filter((item) => item !== "timido")
											: [...(value || []), "timido"];
										onChange(newValue);
									}}
								>
									Tímido
								</CheckBox>
								<CheckBox
									checked={value?.includes("calmo")}
									onChange={() => {
										const newValue = value?.includes("calmo")
											? value.filter((item) => item !== "calmo")
											: [...(value || []), "calmo"];
										onChange(newValue);
									}}
								>
									Calmo
								</CheckBox>
								<CheckBox
									checked={value?.includes("guardaAmoroso")}
									onChange={() => {
										const newValue = value?.includes("guardaAmoroso")
											? value.filter((item) => item !== "guardaAmoroso")
											: [...(value || []), "guardaAmoroso"];
										onChange(newValue);
									}}
								>
									Guarda Amoroso
								</CheckBox>
								<CheckBox
									checked={value?.includes("preguiçoso")}
									onChange={() => {
										const newValue = value?.includes("preguiçoso")
											? value.filter((item) => item !== "preguiçoso")
											: [...(value || []), "preguiçoso"];
										onChange(newValue);
									}}
								>
									Preguiçoso
								</CheckBox>
							</Layout>
						)}
					/>
				</Layout>

				{/* Campo Saúde - Checkboxes */}
				<Text style={styles.TextYellow}>SAÚDE</Text>
				<Layout style={styles.checkboxContainer}>
					<Controller
						control={control}
						name="saúde"
						render={({ field: { onChange, value } }) => (
							<Layout style={styles.checkboxContainer}>
								<CheckBox
									checked={value?.includes("vacinado")}
									onChange={() => {
										const newValue = value?.includes("vacinado")
											? value.filter((item) => item !== "vacinado")
											: [...(value || []), "vacinado"];
										onChange(newValue);
									}}
								>
									Vacinado
								</CheckBox>
								<CheckBox
									checked={value?.includes("vermifugado")}
									onChange={() => {
										const newValue = value?.includes("vermifugado")
											? value.filter((item) => item !== "vermifugado")
											: [...(value || []), "vermifugado"];
										onChange(newValue);
									}}
								>
									Vermifugado
								</CheckBox>
								<CheckBox
									checked={value?.includes("castrado")}
									onChange={() => {
										const newValue = value?.includes("castrado")
											? value.filter((item) => item !== "castrado")
											: [...(value || []), "castrado"];
										onChange(newValue);
									}}
								>
									Castrado
								</CheckBox>
								<CheckBox
									checked={value?.includes("doente")}
									onChange={() => {
										const newValue = value?.includes("doente")
											? value.filter((item) => item !== "doente")
											: [...(value || []), "doente"];
										onChange(newValue);
									}}
								>
									Doente
								</CheckBox>
							</Layout>
						)}
					/>
				</Layout>

				{/* Campo Exigências para Adoção - Checkboxes */}
				<Text style={styles.TextYellow}>EXIGÊNCIAS PARA ADOÇÃO</Text>
				<Layout style={styles.checkboxContainer}>
					<Controller
						control={control}
						name="exigencias"
						render={({ field: { onChange, value } }) => (
							<Layout style={styles.checkboxContainer}>
								<CheckBox
									checked={value?.includes("termoAdocao")}
									onChange={() => {
										const newValue = value?.includes("termoAdocao")
											? value.filter((item) => item !== "termoAdocao")
											: [...(value || []), "termoAdocao"];
										onChange(newValue);
									}}
								>
									Termo de Adoção
								</CheckBox>
								<CheckBox
									checked={value?.includes("fotosCasa")}
									onChange={() => {
										const newValue = value?.includes("fotosCasa")
											? value.filter((item) => item !== "fotosCasa")
											: [...(value || []), "fotosCasa"];
										onChange(newValue);
									}}
								>
									Fotos da Casa
								</CheckBox>
								<CheckBox
									checked={value?.includes("visitaPrevia")}
									onChange={() => {
										const newValue = value?.includes("visitaPrevia")
											? value.filter((item) => item !== "visitaPrevia")
											: [...(value || []), "visitaPrevia"];
										onChange(newValue);
									}}
								>
									Visita Prévia ao Animal
								</CheckBox>
								<CheckBox
									checked={value?.includes("acompanhamentoPosAdocao")}
									onChange={() => {
										const newValue = value?.includes("acompanhamentoPosAdocao")
											? value.filter(
													(item) => item !== "acompanhamentoPosAdocao"
											  )
											: [...(value || []), "acompanhamentoPosAdocao"];
										onChange(newValue);
									}}
								>
									Acompanhamento Pós Adoção
								</CheckBox>
							</Layout>
						)}
					/>
				</Layout>

				{/* Campo Tempo de Acompanhamento - Checkboxes */}
				<Text style={styles.TextYellow}>TEMPO DE ACOMPANHAMENTO</Text>
				<Layout style={styles.checkboxContainer}>
					<Controller
						control={control}
						name="tempo_acompanhamento"
						render={({ field: { onChange, value } }) => (
							<Layout style={styles.checkboxContainer}>
								<CheckBox
									checked={value?.includes("umMes")}
									onChange={() => {
										const newValue = value?.includes("umMes")
											? value.filter((item) => item !== "umMes")
											: [...(value || []), "umMes"];
										onChange(newValue);
									}}
								>
									1 mês
								</CheckBox>
								<CheckBox
									checked={value?.includes("tresMeses")}
									onChange={() => {
										const newValue = value?.includes("tresMeses")
											? value.filter((item) => item !== "tresMeses")
											: [...(value || []), "tresMeses"];
										onChange(newValue);
									}}
								>
									3 meses
								</CheckBox>
								<CheckBox
									checked={value?.includes("seisMeses")}
									onChange={() => {
										const newValue = value?.includes("seisMeses")
											? value.filter((item) => item !== "seisMeses")
											: [...(value || []), "seisMeses"];
										onChange(newValue);
									}}
								>
									6 meses
								</CheckBox>
							</Layout>
						)}
					/>
				</Layout>
				<Layout style={styles.inputContainer}>
					<Controller
						control={control}
						name="doenças"
						render={({ field: { onChange, value } }) => (
							<TextInput
								style={styles.inputField}
								placeholder="Doenças do animal"
								onChangeText={onChange}
								value={value}
							/>
						)}
					/>
				</Layout>

				<Button
					style={styles.button}
					onPress={handleSubmit(handleCadastroAnimal)}
				>
					<Text style={styles.buttonText}>COLOCAR PARA ADOÇÃO</Text>
				</Button>
			</ScrollView>
		</Layout>
	);
}

const styles = StyleSheet.create({
	Text: {
		fontFamily: "Roboto",
		fontSize: 14,
		color: "#757575",
		marginTop: 10,
	},
	TextN: {
		marginTop: 30,
		marginRight: 270,
		fontFamily: "Roboto",
		fontSize: 16,
		color: "#434343",
	},
	TextYellow: {
		marginTop: 10,
		fontFamily: "Roboto",
		fontSize: 12,
		color: "#f7a800",
		marginRight: 220,
	},
	buttonYellow: {
		width: 100,
		height: 40,
		borderWidth: 2,
		borderColor: "#ffd358",
		backgroundColor: "#ffd358",
		borderRadius: 4,
		shadowColor: "#000",
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
	buttonWhite: {
		width: 100,
		height: 40,
		borderWidth: 2,
		borderColor: "#f1f2f2",
		backgroundColor: "#f1f2f2",
		borderRadius: 4,
		shadowColor: "#000",
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
	scrollContainer: {
		flexGrow: 1,
		paddingBottom: 50,
		paddingHorizontal: 16,
	},
	buttonBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		maxWidth: 350,
		marginTop: 16,
	},
	button: {
		width: 232,
		height: 40,
		borderWidth: 2,
		borderColor: "#ffd358",
		backgroundColor: "#ffd358",
		borderRadius: 4,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	buttonText: {
		fontFamily: "Roboto",
		fontSize: 12,
		color: "#434343",
	},
	buttonTextT: {
		fontFamily: "Roboto",
		fontSize: 12,
		color: "#bdbdbd",
	},
	inputContainer: {
		width: 328,
		marginTop: 5,
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
		width: 312,
		height: 128,
		backgroundColor: "#f1f2f2",
		borderWidth: 2,
		borderColor: "#f1f2f2",
		marginTop: 8,
		marginBottom: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	radioBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		maxWidth: 350,
		marginTop: 10,
		marginLeft: 40,
	},
	radioGroup: {
		flexDirection: "row",
	},

	checkboxContainer: {
		marginTop: 10,
		alignItems: "flex-start",
		paddingLeft: 100,
	},
});
