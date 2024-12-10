import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Link href="/home">Ver Home</Link>
			<Link href="/login">Ver Login</Link>
			<Link href="/cadastro">Ver Cadastro</Link>
			<Link href="/cadastropessoal">Ver Cadastro Pessoal</Link>
			<Link href="/cadastroanimal">Ver Cadastro Animal</Link>
			<Link href="/cadastroanimalfeito">Ver Cadastro Animal</Link>
			<Link href="/adotaranimais">Ver Adotar Animal</Link>
		</View>
	);
}
