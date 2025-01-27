import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSession } from "@/services/auth";
import { getMessages } from "@/services/chatservice";
import { Layout, Text } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

interface Chat {
	id: string;
}

interface ChatPreviewProps {
	chat: Chat;
}

export const ChatPreview: React.FC<ChatPreviewProps> = ({ chat }) => {
	const navigation = useNavigation<any>();
	const user = useSession().user;

	const [lastMessage, setLastMessage] = useState<any>({});

	useEffect(() => {
		const fetchLastMessage = async () => {
			const response = await getMessages(chat.id);
			const messages = response.data;
			// pegar a ultima mensagem baseado no timestamp
			//setLastMessage(messages[messages.length - 1]);
		};
		fetchLastMessage();
	}, [chat.id]);

	const goToChat = () => {
		navigation.navigate("Chat", { chat });
	};

	return (
		<TouchableOpacity style={styles.container} onPress={goToChat}>
			<Layout>
				<Text category="h6">{chat.id}</Text>
			</Layout>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
});
