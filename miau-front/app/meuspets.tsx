import { Layout } from "@ui-kitten/components";
import { petCard } from "../components/petCard/petCard";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";
import { getAnImals } from "@/services/animals";
import { useState } from "react";

export default function meusPets() {
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
		<ScrollView>
			<Layout style={styles.mainLayout}>
				{petCard(
					1,
					"Pequi",
					"https://firebasestorage.googleapis.com/v0/b/miau-504b6.firebasestorage.app/o/images%2F1736893411314?alt=media&token=9bfd1b16-4dc6-42ed-b2c9-87a9bd4136b4"
				)}
				{petCard(
					1,
					"joao",
					"https://media.istockphoto.com/id/1926125581/pt/foto/puppy-window-portrait.jpg?s=2048x2048&w=is&k=20&c=9VCNRHyv9WQFYtSKFpW8kcJRrq8WsWodJoaj1C9EJmc="
				)}
				{petCard(
					1,
					"marco",
					"2",
					"https://firebasestorage.googleapis.com/v0/b/miau-504b6.firebasestorage.app/o/images%2F1736885307783?alt=media&token=2e36c736-8c33-4fe8-aca5-7231d50a94ca"
				)}
				{petCard(
					1,
					"jean",
					"2",
					"https://firebasestorage.googleapis.com/v0/b/miau-504b6.firebasestorage.app/o/images%2F1736887025423?alt=media&token=a34391d9-aea8-4699-8fee-f9ba2eaf9c6e"
				)}
			</Layout>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	mainLayout: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignSelf: "center",
	},
});
