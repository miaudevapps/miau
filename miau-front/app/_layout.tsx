import { Stack } from "expo-router";
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
			<SafeAreaProvider>
				<StatusBar barStyle="dark-content" backgroundColor={"#88c9bf"} />
				<SafeAreaView />
				<IconRegistry icons={EvaIconsPack} />
				<ApplicationProvider {...eva} theme={eva.light}>
					<Stack>
						<Stack.Screen name="index" />
						<Stack.Screen name="home" options={{ headerShown: false }} />
						<Stack.Screen name="login" options={{ headerShown: false }} />
					</Stack>
				</ApplicationProvider>
			</SafeAreaProvider>
		</>
	);
}
