import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSession } from "@/services/auth";
import { getMessages } from "@/services/chatservice";
import { Layout, Text, Spinner } from "@ui-kitten/components";
import { TouchableOpacity, Image, View } from "react-native";
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
				if (messagesData != null && messagesData.length > 0) {
					setLastMessage(messagesData[messagesData.length - 1]);
				}
				else {
					setLastMessage({ text: "" });
				}
				const animalData = await getAnimal(chat.AnimalId)
				setAnimal(animalData);
				const interessadoData = await getUser(chat.InteressadoId);
				const donoPetData = await getUser(chat.DonoPetId);
				if (userId == chat.DonoPetId && interessadoData && donoPetData) {
					setInteressado(interessadoData);

				}
				else if (userId == chat.InteressadoId && interessadoData && donoPetData) {
					setInteressado(donoPetData);
				}
				else {
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
				<View style={{flexDirection: "row" }}>
					<Image
						source={{
							uri: `${interessado.image_url}`,
						}}
						style={{ width: 50, height: 50, borderRadius: 50 }}
					/>
					<View style={{ marginLeft: 20, flexDirection: "column" }}>
						<Text category="h6">{interessado.name + "  |  " + animal.nome}</Text>
						<Text>{lastMessage.text}</Text>
					</View>
				</View>
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
