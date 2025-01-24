import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { Image, StyleSheet, ScrollView, View } from "react-native";
import { TopNav } from "../components/navigation/TopNavegation";
import { getAnimal } from "@/services/animals";
import { useState, useEffect } from "react";

export default function DetalhesPet({ route }: any) {
	const { animalID } = route.params;

	const [animal, setAnimal] = useState<any>({});

	useEffect(() => {
		const fetchAnimal = async () => {
			console.log("fetchAnimal");
			const response = await getAnimal(animalID);
			setAnimal(response);
			console.log(response);
		};
		fetchAnimal();
	}, []);

	return (
		<Layout style={{ flex: 1, alignItems: "center" }}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<Image
					style={styles.image}
					source={{
						uri: "https://firebasestorage.googleapis.com/v0/b/miau-504b6.firebasestorage.app/o/images%2F1736893411314?alt=media&token=9bfd1b16-4dc6-42ed-b2c9-87a9bd4136b4",
					}}
				/>
				<Icon name="edit-outline" fill="#434343" style={styles.editIcon} />

				<Text style={styles.petName}>Pequi</Text>

				<Layout style={styles.infoRow}>
					<Text style={styles.infoItemBlue}>SEXO</Text>
					<Text style={styles.infoItemBlue}>PORTE</Text>
					<Text style={styles.infoItemBlue}>IDADE</Text>
				</Layout>

				<Layout style={styles.infoRow}>
					<Text style={styles.infoItem}>Macho</Text>
					<Text style={styles.infoItem}>Pequeno</Text>
					<Text style={styles.infoItem}>12</Text>
				</Layout>

				<View style={styles.section}>
					<Text style={styles.label}>LOCALIZAÇÃO</Text>
					<Text style={styles.location}>Planaltina – Brasília</Text>
					<Text style={styles.label}>GASTOS</Text>
					<Text style={styles.infoText}>Não</Text>
					<Text style={styles.label}>VERMIFUGADO</Text>
					<Text style={styles.infoText}>Sim</Text>
					<Text style={styles.label}>VACINADO</Text>
					<Text style={styles.infoText}>Não</Text>
					<Text style={styles.label}>DOENÇAS</Text>
					<Text style={styles.infoText}>Nenhuma</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.label}>TEMPERAMENTO</Text>
					<Text style={styles.infoText}>Brincalhão e dócil</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.label}>O PEQUI PRECISA DE</Text>
					<Text style={styles.infoText}>Ajuda financeira e alimento</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.label}>DESCRIÇÃO DO DOADOR</Text>
					<Text style={styles.infoText}>
						Termo de apadrinhamento, auxílio financeiro com alimentação
					</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.label}>MAIS SOBRE PEQUI</Text>
					<Text style={styles.infoText}>
						Pequi é um cão muito dócil e de fácil convivência. Adora crianças e
						outros animais. Ele está disponível para adoção responsável e
						precisa de ajuda financeira para o seu dia a dia até encontrar um
						lar fixo.
					</Text>
				</View>

				<Layout style={styles.buttonContainer}>
					<Button style={styles.button}>
						{(evaProps) => (
							<Text style={styles.buttonText}>VER INTERESSADOS</Text>
						)}
					</Button>
					<Button style={[styles.button, styles.removeButton]}>
						{(evaProps) => <Text style={styles.buttonText}>REMOVER PET</Text>}
					</Button>
				</Layout>
			</ScrollView>
		</Layout>
	);
}

const styles = StyleSheet.create({
	scrollContent: {
		alignItems: "center",
		paddingHorizontal: 16,
	},
	image: {
		width: 360,
		height: 184,
		borderRadius: 8,
		marginBottom: 16,
	},
	editIcon: {
		position: "absolute",
		top: -15,
		right: -160,
		width: 24,
		height: 24,
	},
	petName: {
		fontFamily: "Roboto-Medium",
		fontSize: 24,
		color: "#434343",
		marginBottom: 16,
	},
	infoRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		paddingHorizontal: 16,
		marginBottom: 8,
	},
	infoItemBlue: {
		fontFamily: "Roboto-Medium",
		fontSize: 14,
		color: "#589b9b",
	},
	infoItem: {
		fontFamily: "Roboto-Medium",
		fontSize: 14,
		color: "#434343",
	},
	location: {
		fontFamily: "Roboto-Regular",
		fontSize: 12,
		color: "#757575",
		marginBottom: 16,
	},
	section: {
		width: "100%",
		marginBottom: 16,
		paddingHorizontal: 16,
	},
	label: {
		fontFamily: "Roboto-Medium",
		fontSize: 12,
		color: "#589b9b",
		marginBottom: 4,
	},
	infoText: {
		fontFamily: "Roboto-Regular",
		fontSize: 12,
		color: "#757575",
		marginBottom: 8,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		paddingHorizontal: 16,
		marginTop: 16,
	},
	button: {
		flex: 1,
		marginHorizontal: 8,
		backgroundColor: "#88c9bf",
		borderColor: "#88c9bf",
	},
	removeButton: {
		backgroundColor: "#88c9bf",
		borderColor: "#88c9bf",
	},
	buttonText: {
		fontFamily: "Roboto-Medium",
		fontSize: 14,
		color: "#ffffff",
	},
});
