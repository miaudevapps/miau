import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
	const navigation = useNavigation<any>();

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Button title="Ver Home" onPress={() => navigation.navigate("Home")} />
			<Button title="Ver Login" onPress={() => navigation.navigate("login")} />
			<Button
				title="Ver Cadastro"
				onPress={() => navigation.navigate("cadastro")}
			/>
			<Button
				title="Ver Cadastro Pessoal"
				onPress={() => navigation.navigate("cadastropessoal")}
			/>
			<Button
				title="Ver Cadastro Animal"
				onPress={() => navigation.navigate("cadastroanimal")}
			/>
			<Button
				title="Ver Cadastro Animal Feito"
				onPress={() => navigation.navigate("cadastroanimalfeito")}
			/>
		</View>
	);
}
