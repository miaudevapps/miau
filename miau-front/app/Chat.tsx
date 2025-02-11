import { InferProps, Validator, Requireable } from "prop-types";
import React, { useState, useCallback, useEffect } from "react";
import { KeyboardAvoidingView, View, Dimensions } from "react-native";
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
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
	const insets = useSafeAreaInsets();


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
		<View style={{ height: Dimensions.get('window').height }}>
			<View style={{flex: 12}} >
				<GiftedChat
					alwaysShowSend
					scrollToBottom 
					renderBubble={(props) => {
						return (
							<Bubble
								{...props}
								wrapperStyle={{
									left: {
										backgroundColor: "#ffffff",
									},
									right: {
										backgroundColor: "#88c9bf",
									},
								}}
							/>
						);
					}}


					
					bottomOffset={insets.bottom}
					messages={messages}
					onSend={(messages) => onSend(messages)}
					user={currentUser}
				/>
			</View>
			<KeyboardAvoidingView style={{ flex: 1 , alignSelf: "flex-end",}}/>

		</View>
	);
}
