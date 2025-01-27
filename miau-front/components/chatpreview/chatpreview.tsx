import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSession } from "@/services/auth";
import { getMessages } from "@/services/chatservice";
import { Layout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export const ChatPreview = ({ chat: any }) => {
	const navigation = useNavigation<any>();
	const user = useSession().user;

	const [lastMessage, setLastMessage] = useState<any>({});

	useEffect(() => {
		const fetchLastMessage = async () => {
			const response = await getMessages(chat.id);
			setLastMessage(response);
		};
		fetchLastMessage();
	}, [chat.id]);

	const goToChat = () => {
		navigation.navigate("Chat", { chat });
	};

	return (
		<Layout style={styles.container} onPress={goToChat}>
			<Text category="h6">{chat.name}</Text>
			<Text>{lastMessage.text}</Text>
		</Layout>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
});
