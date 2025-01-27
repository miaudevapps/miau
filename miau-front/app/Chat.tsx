import { InferProps, Validator, Requireable } from "prop-types";
import React, { useState, useCallback, useEffect } from "react";
import { StyleProp } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import {
	BubbleProps,
	IMessage,
	LeftRightStyle,
	QuickRepliesProps,
	RenderMessageAudioProps,
	RenderMessageImageProps,
	RenderMessageTextProps,
	RenderMessageVideoProps,
	Reply,
	TimeProps,
	User,
} from "react-native-gifted-chat/lib/Models";
import {
	ViewStyle,
	TextStyle,
} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import { getMessages, sendMessage } from "@/services/chatservice";

interface Chat {
	id: string;
	DonoPetId: string;
	InteressadoId: string;
	AnimalId: string;
	timestamp: number;
}

export function Chat({ route }: any) {
	const { chat, userId } = route.params;
	const [messages, setMessages] = useState<IMessage[]>([]);

	useEffect(() => {
		// Fetch messages from chat
		const fetchMessages = async () => {
			const messagesData = await getMessages(chat.id);
			setMessages(messagesData);
		};
		fetchMessages();
	}, [chat.id]);

	const onSend = useCallback(
		(messages: IMessage[] = []) => {
			// Send message to chat
			console.log("Sending message:", messages[0].text);
			console.log("User ID:", userId);
			console.log("Chat ID:", chat.id);
			setMessages((previousMessages) =>
				GiftedChat.append(previousMessages, messages)
			);
			sendMessage(chat.id, messages[0].text, userId);
		},
		[chat.id, userId]
	);

	const currentUser = {
		_id: userId,
	};

	return (
		<GiftedChat
			messages={messages}
			onSend={(messages) => onSend(messages)}
			user={currentUser}
		/>
	);
}
