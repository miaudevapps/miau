import * as eva from "@eva-design/eva";
import {
	ApplicationProvider,
	IconRegistry,
	Layout,
	Text,
} from "@ui-kitten/components";
import { useFonts } from "expo-font";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { SessionProvider } from "@/services/auth";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Adicione aqui as telas que precisar
import Home from "@/app/home";
import Index from "@/app/index";
import Login from "@/app/login";
import Cadastro from "@/app/cadastro";
import CadastroPessoal from "@/app/cadastropessoal";
import CadastroAnimal from "./cadastroanimal";
import cadastroanimalfeito from "./cadastroanimalfeito";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		// Adicione aqui as fontes que precisar
		Courgette: require("../assets/fonts/Courgette-Regular.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<>
			<SessionProvider>
				<SafeAreaProvider>
					<StatusBar barStyle="dark-content" backgroundColor={"#88c9bf"} />
					<SafeAreaView />
					<IconRegistry icons={EvaIconsPack} />
					<ApplicationProvider {...eva} theme={eva.light}>
						<Stack.Navigator initialRouteName="Index">
							<Stack.Screen name="Index" component={Index} />
							<Stack.Screen
								name="Home"
								options={{ headerShown: false }}
								component={Home}
							/>
							<Stack.Screen
								name="login"
								options={{ headerShown: false }}
								component={Login}
							/>
							<Stack.Screen
								name="cadastro"
								options={{ headerShown: false }}
								component={Cadastro}
							/>
							<Stack.Screen
								name="cadastropessoal"
								options={{ headerShown: false }}
								component={CadastroPessoal}
							/>
							<Stack.Screen
								name="cadastroanimal"
								options={{ headerShown: false }}
								component={CadastroAnimal}
							/>
							<Stack.Screen
								name="cadastroanimalfeito"
								options={{ headerShown: false }}
								component={cadastroanimalfeito}
							/>
						</Stack.Navigator>
					</ApplicationProvider>
				</SafeAreaProvider>
			</SessionProvider>
		</>
	);
}
