import { Layout, Button } from "@ui-kitten/components";
import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export function petCard(
	petID: Number,
	petName: string,
	petImage: string,
	numInteressados: string = "3 novos interessados",
	objetivo: string = "Apadrinhamento | Ajuda"
) {
	const navigation = useNavigation<any>();
	return (
		<Layout style={styles.mainView}>
			<Layout style={styles.cardHeader}>
				<Text style={styles.petName}>{petName}</Text>
				<Button
					onPress={() => navigation.navigate("Detalhes Pet", { id: petID })} // Assuming petName is unique and can be used as an ID
					style={styles.infoIcon}
				>
					<Image source={require("../icons/alertCircle.svg")} />
				</Button>
			</Layout>
			<Image
				style={styles.cardImage}
				source={{
					uri: `${petImage}`,
				}}
			/>
			<Layout style={styles.cardFooter}>
				<Text>{numInteressados}</Text>
				<Text>{objetivo}</Text>
			</Layout>
		</Layout>
	);
}

const styles = StyleSheet.create({
	mainView: {
		height: 264,
		width: 344,
		backgroundColor: "#cfe9e5",
		margin: 8,
		borderWidth: 0,
		borderRadius: 8,
		flex: 1,
		justifyContent: "space-around",
		shadowColor: "black",
		shadowOpacity: 0.5,
		shadowRadius: 5,
	},
	cardHeader: {
		height: 32,
		width: 344,
		backgroundColor: "#cfe9e5",
		borderTopStartRadius: 8,
		borderTopEndRadius: 8,
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	cardImage: {
		height: 183,
		width: 344,
		backgroundColor: "#555555",
	},
	cardFooter: {
		height: 49,
		width: 344,
		backgroundColor: "#ffffff",
		borderBottomStartRadius: 8,
		borderBottomEndRadius: 8,
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	infoIcon: {
		height: 24,
		width: 24,
		backgroundColor: "#cfe9e5",
		paddingRight: 24,
		borderWidth: 0,
	},
	petName: {
		paddingLeft: 10,
		alignSelf: "center",
	},
});
