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

export function Chat() {
	const [messages, setMessages] = useState<IMessage[]>([]);

	useEffect(() => {
		setMessages([
			{
				_id: 1,
				text: "Hello developer",
				createdAt: new Date(),
				user: {
					_id: 2,
					name: "React Native",
					avatar: "https://placeimg.com/140/140/any",
				},
			},
		]);
	}, []);

	const onSend = useCallback((messages: IMessage[] = []) => {
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages)
		);
	}, []);

	return (
		<GiftedChat
			messages={messages}
			onSend={(messages) => onSend(messages)}
			user={{
				_id: 1,
			}}
		/>
	);
}
