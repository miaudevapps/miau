import {
	Layout,
	Text,
	Button,
	Radio,
	RadioGroup,
	Input,
} from "@ui-kitten/components";
import { Image, StyleSheet, TextInput, ScrollView } from "react-native";
import { TopNav } from "../components/navigation/TopNavegation";
import React, { useState } from "react";

export default function CadastroAnimal() {
	const [formState, setFormState] = React.useState({
		nome: "",
		especie: "",
		sexo: "",
		porte: "",
		idade: "",
		temperamento: [],
		saúde: [],
		doenças: "",
		exigencias: [],
		tempo_acompanhamento: "",
	});

	const handleFormChange = (key: string, value: string) => {
		setFormState({
			...formState,
			[key]: value,
		});
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
						<Input
							style={styles.inputField}
							value={formState.nome}
							onChangeText={(value) => handleFormChange("nome", value)}
							placeholder="Nome do Animal"
						/>
					</Layout>

					<Text style={styles.TextYellow}>FOTO DO ANIMAL</Text>
					<Layout style={styles.photoBox}></Layout>

					<Text style={styles.TextYellow}>ESPÉCIE</Text>
					<Layout style={styles.radioBox}>
						<RadioGroup
							selectedIndex={selectedSpecies}
							onChange={handleSpeciesChange}
							style={styles.radioGroup}>
							<Radio>Cachorro</Radio>
							<Radio>Gato</Radio>
						</RadioGroup>
					</Layout>

					<Text style={styles.TextYellow}>SEXO</Text>
					<Layout style={styles.radioBox}>
						<RadioGroup
							selectedIndex={selectedSpecies}
							onChange={handleSpeciesChange}
							style={styles.radioGroup}>
							<Radio>Macho</Radio>
							<Radio>Fêmea</Radio>
						</RadioGroup>
					</Layout>
					<Text style={styles.TextYellow}>PORTE</Text>
					<Layout style={styles.radioBox}>
						<RadioGroup
							selectedIndex={selectedSpecies}
							onChange={handleSpeciesChange}
							style={styles.radioGroup}>
							<Radio>Pequeno</Radio>
							<Radio>Médio</Radio>
							<Radio>Grande</Radio>
						</RadioGroup>
					</Layout>
					<Text style={styles.TextYellow}>IDADE</Text>
					<Layout style={styles.radioBox}>
						<RadioGroup
							selectedIndex={selectedSpecies}
							onChange={handleSpeciesChange}
							style={styles.radioGroup}>
							<Radio>Filhote</Radio>
							<Radio>Adulto</Radio>
							<Radio>Idoso</Radio>
						</RadioGroup>
					</Layout>
					<Text style={styles.TextYellow}>TEMPERAMENTO</Text>
					<Text style={styles.TextYellow}>SAÚDE</Text>
					<Text style={styles.TextYellow}>EXIGÊNCIAS PARA ADOÇÃO</Text>
					<Text style={styles.TextYellow}>SOBRE O ANIMAL</Text>
					<Layout style={styles.inputContainer}>
						<Input
							style={styles.inputField}
							placeholder="Compartilhe a história do animal"
						/>
					</Layout>

					<Button style={styles.button}>
						<Text style={styles.buttonText}>COLOCAR PARA ADOÇÃO</Text>
					</Button>
				</Layout>
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
});
