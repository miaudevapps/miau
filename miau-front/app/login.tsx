import { Layout, Text, Button, Icon, Input } from '@ui-kitten/components';
import { Image, StyleSheet } from "react-native";

export default function Login() {
	return (
		<Layout style={{flex: 1}}>
			<Input />
			<Input />
			<Button style={styles.button}>
				{evaProps => <Text style={styles.buttonText}>ENTRAR</Text>}
			</Button>
		</Layout>
	)
};

const styles = StyleSheet.create({
	button: {

	},
	buttonText: {

	},
	input: {

	}
})