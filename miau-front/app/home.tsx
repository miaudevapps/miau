import { Layout, Text, Button } from '@ui-kitten/components';
import { Image } from "react-native";
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
	return (
	<Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
		<Text category='h1' style={styles.title}>Olá!</Text>
		<Text style={styles.description}>
				Bem vindo ao Meau!
				Aqui você pode adotar, doar e ajudar
				cães e gatos com facilidade.
				Qual o seu interesse?
		</Text>
		<Button style={styles.button}>
			{evaProps => <Text style={styles.buttonText}>ADOTAR</Text>}
		</Button>
		<Button style={styles.button}>
			{evaProps => <Text style={styles.buttonText}>AJUDAR</Text>}
		</Button>
		<Button style={styles.button}>
			{evaProps => <Text style={styles.buttonText}>CADASTRAR ANIMAL</Text>}
		</Button>
		<Text>login</Text>
	</Layout>
)};

const styles = StyleSheet.create({
	button: {
		width: 232,
		height: 40,
		borderWidth: 2,
		borderColor: '#ffd358',
		backgroundColor: '#ffd358',
		borderRadius: 4, // Definindo bordas retas (ajuste para arredondar se necessário)
		shadowColor: '#000', // Cor da sombra
		shadowOffset: { width: 0, height: 2 }, // Direção da sombra
		shadowOpacity: 0.25, // Opacidade da sombra
		shadowRadius: 3.84, // Raio da sombra
		elevation: 5, // Elevação para Android
	},
	buttonText: {
		fontFamily: 'Roboto', // Define a fonte como Roboto
		fontWeight: '400', // Regular
		fontSize: 12, // Tamanho do texto em pt
		color: '#434343', // Cor do texto
	},
	title: {
		fontFamily: 'Courgette', // Define a fonte Courgette
		fontSize: 72, // Define o tamanho do texto
		color: '#ffd358', // Cor do texto
		fontWeight: '400', // Regular
	},
	description: {
		fontFamily: 'Roboto', // Define a fonte Roboto
		fontSize: 16, // Define o tamanho do texto
		color: '#757575', // Cor do texto
		fontWeight: '400', // Regular
	}
});
