import { Layout, Text, Button, Input } from "@ui-kitten/components";
import { Image, StyleSheet } from "react-native";

import { TopNav } from "../components/navigation/Topnavegation";

export default function Login() {
	return (
		<Layout style={{ flex: 1 }}>
			{TopNav("Login")}
			<Input />
			<Input />
			<Button style={styles.button}>
				{(evaProps) => <Text style={styles.buttonText}>ENTRAR</Text>}
			</Button>
		</Layout>
	);
}

const styles = StyleSheet.create({
	button: {},
	buttonText: {},
	input: {},
});
