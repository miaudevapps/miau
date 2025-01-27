import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSession } from "@/services/auth";
import { getMessages } from "@/services/chatservice";
import { Layout, Text, Spinner } from "@ui-kitten/components";
import { TouchableOpacity, Image } from "react-native";
import { StyleSheet } from "react-native";
import { getAnimal } from "@/services/animals";
import { getUser } from "@/services/users";

interface Chat {
	id: string;
	DonoPetId: string;
	InteressadoId: string;
	AnimalId: string;
	timestamp: number;
}

interface ChatPreviewProps {
	chat: Chat;
}

export const ChatPreview: React.FC<ChatPreviewProps> = ({ chat }) => {
	const navigation = useNavigation<any>();
	const user = useSession().user;
	const userId = user.uid;

	const [lastMessage, setLastMessage] = useState<any>({});
	const [animal, setAnimal] = useState<any>({});
	const [interessado, setInteressado] = useState<any>({});
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const messagesData = await getMessages(chat.id);
				//setLastMessage(messagesData[messagesData.length - 1]);

				/* const animalData = await getAnimal(chat.AnimalId).then(() => {
					setAnimal(animalData);
				}); */

				const interessadoData = await getUser(chat.InteressadoId);
				if (interessadoData) {
					setInteressado(interessadoData);
				} else {
					console.error("Failed to fetch interessado data");
				}
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [chat.id]);

	const goToChat = () => {
		navigation.navigate("Chat", { chat, userId });
	};

	if (loading) {
		return (
			<Layout>
				<Spinner />
			</Layout>
		);
	}

	return (
		<TouchableOpacity style={styles.container} onPress={goToChat}>
			<Layout>
				<Image
					source={{
						uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.magazineluiza.com.br%2Fsalsicha-cachorro-geometrico-decoracao-3d-10-cm-rosa-generico%2Fp%2Fkj8937dea3%2Fme%2Fssch%2F&psig=AOvVaw0tDqZHcIEU_U536iFnoi37&ust=1738087550688000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNii_eq-losDFQAAAAAdAAAAABAE",
					}}
					style={{ width: 50, height: 50 }}
				/>
				<Text category="h6">{interessado?.nome}</Text>
			</Layout>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
});
