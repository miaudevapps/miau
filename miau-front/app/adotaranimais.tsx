import React, { useEffect, useState } from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { Image, StyleSheet, ScrollView, View } from "react-native";
import { getAnImals } from "@/services/animals";

/* [
  {
    id: 1,
    name: "Pequi",
    info: "ADULTO | MACHO | MÉDIO\nSAMAMBAIA SUL – DISTRITO FEDERAL",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCOmPsstmko3MHpax6444mjeEM_E-5Cd60Q&s",
  },
  {
    id: 2,
    name: "Bidu",
    info: "ADULTO | MACHO | MÉDIO\nSAMAMBAIA SUL – DISTRITO FEDERAL",
    image:
      "https://www.direcional.com.br/wp-content/uploads/2022/08/cachorro-para-apartamento.jpg",
  },
  {
    id: 3,
    name: "Alec",
    info: "ADULTO | MACHO | MÉDIO\nSAMAMBAIA SUL – DISTRITO FEDERAL",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxH8NSuWPDV-H4iaL0xs83rVv0dO54pvYDMw&s",
  },
] */

export default function Adotaranimais() {
	const [animals, setAnimals] = useState<any[]>([]);

	useEffect(() => {
		const fetchAnimals = async () => {
			const response = await getAnImals();
			console.log(response);
			setAnimals(response);
		};
		fetchAnimals();
	}, []);

	return (
		<Layout style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				{animals.map((animal) => (
					<View key={animal.animalID} style={styles.card}>
						<Image source={{ uri: animal.image_url }} style={styles.image} />
						<Text category="h6" style={styles.name}>
							{animal.nome}
						</Text>
						<Text category="s1" style={styles.info}>
							{animal.info}
						</Text>
						<Button
							style={styles.button}
							onPress={() => console.log(`Detalhes de ${animal.name}`)}
						>
							Ver Mais
						</Button>
					</View>
				))}
			</ScrollView>
		</Layout>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fafafa",
	},
	scrollView: {
		padding: 8,
		alignItems: "center",
	},
	card: {
		backgroundColor: "#fff",
		borderRadius: 8,
		marginBottom: 60,
		width: 344,
		height: 264,
	},
	image: {
		width: 344,
		height: 183,
	},
	name: {
		marginTop: 8,
		fontWeight: "bold",
		color: "#434343",
	},
	info: {
		marginTop: 4,
		color: "#434343",
	},
	button: {
		marginTop: 8,
		backgroundColor: "#ffd358",
		borderColor: "transparent",
	},
});
