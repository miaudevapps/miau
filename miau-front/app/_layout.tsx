import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as eva from "@eva-design/eva";
import {
	ApplicationProvider,
	IconRegistry,
	Layout,
	ListItem,
	Text,
} from "@ui-kitten/components";
import { useFonts } from "expo-font";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, View, StyleSheet } from "react-native";
import { SessionProvider } from "@/services/auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { List } from "react-native-paper";
import { useState } from "react";
import React from "react";

// Adicione aqui as telas que precisar
import Home from "@/app/home";
import Login from "@/app/login";
import Cadastro from "@/app/cadastro";
import CadastroPessoal from "@/app/cadastropessoal";
import CadastroAnimal from "./cadastroanimal";
import Cadastroanimalfeito from "./cadastroanimalfeito";
import Adotaranimais from "./adotaranimais";
import DetalhesPet from "./detalhesanimal";
import DetalhesPetAdotar from "./detalhesanimaladotar";
import Index from "./index";
import usuarioLogado from "@/app/usuariologado";
import cadastroanimalfeito from "./cadastroanimalfeito";
import meusPets from "@/app/meuspets";
import { ListAccordionGroupContext } from "react-native-paper/lib/typescript/components/List/ListAccordionGroup";
import { Button } from 'react-native';
import { logout } from '@/services/users';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeDrawer: React.FC<{ navigation: any }> = ({ navigation }) => {
	const [expanded, setExpanded] = useState<string | null>(null);
	const handlePress = (section: string) => {
		setExpanded(expanded === section ? null : section);
	};

	return (
		<View style={styles.drawerContainer}>
			<Layout style={{ height: 124, backgroundColor: "#88c9bf" }}>
				<Image
					style={{
						borderRadius: 100,
						width: 64,
						height: 64,
						marginTop: 40,
						marginLeft: 16,
					}}
					source={{
						uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQP5QQKcY4t1-_XAOvt_5Ii9LGJqTDX0B7u5sOZJFeU8QCGJ2jReifGEDftXkScCw-lMm8nmFUYF2QXwMR2KrzTsw",
					}}
				/>
			</Layout>

			<List.Section style={{ marginVertical: -0 }}>
				<List.Accordion
					title="Emille Catarine"
					style={styles.accordionPerfil}
					expanded={expanded === "main"}
					onPress={() => handlePress("main")}
				>
					<List.Item
						title="Meu Perfil"
						onPress={() => navigation.navigate("Usuário Logado")}
						style={styles.item}
					/>
					<List.Item
						title="Meus pets"
						onPress={() => navigation.navigate("Meus Pets")}
						style={styles.item}
					/>
					<List.Item
						title="Favoritos"
						onPress={() => navigation.navigate("Login")}
						style={styles.item}
					/>
					<List.Item
						title="Chat"
						onPress={() => navigation.navigate("Cadastro Pessoal")}
						style={styles.item}
					/>
				</List.Accordion>

				<List.Accordion
					title="Atalhos"
					expanded={expanded === "shortcuts"}
					onPress={() => handlePress("shortcuts")}
					style={styles.accordionAtalhos}
					left={(props) => (
						<List.Icon {...props} icon={require("../assets/icons/pets.svg")} />
					)}
				>
					<List.Item
						title="Cadastrar um pet"
						onPress={() => navigation.navigate("Cadastro")}
						style={styles.item}
					/>
					<List.Item
						title="Adotar um pet"
						onPress={() => navigation.navigate("Adotaranimais")}
						style={styles.item}
					/>
					<List.Item
						title="Ajudar um pet"
						onPress={() => navigation.navigate("")}
						style={styles.item}
					/>
					<List.Item
						title="Apadrinhar um pet"
						onPress={() => navigation.navigate("")}
						style={styles.item}
					/>
				</List.Accordion>

				<List.Accordion
					title="Informações"
					expanded={expanded === "Informacoes"}
					onPress={() => handlePress("Informacoes")}
					style={styles.accordionInfo}
					left={(props) => (
						<List.Icon {...props} icon={require("../assets/icons/info.svg")} />
					)}
				>
					<List.Item
						title="Dicas"
						onPress={() => navigation.navigate("")}
						style={styles.item}
					/>
					<List.Item
						title="Eventos"
						onPress={() => navigation.navigate("")}
						style={styles.item}
					/>
					<List.Item
						title="Legislação"
						onPress={() => navigation.navigate("")}
						style={styles.item}
					/>
					<List.Item
						title="Termo de adoção"
						onPress={() => navigation.navigate("")}
						style={styles.item}
					/>
					<List.Item
						title="Histórias de adoção"
						onPress={() => navigation.navigate("")}
						style={styles.item}
					/>
				</List.Accordion>
				<List.Accordion
					title="Configurações"
					expanded={expanded === "config"}
					onPress={() => handlePress("config")}
					style={styles.accordionConfig}
					left={(props) => (
						<List.Icon
							{...props}
							icon={require("../assets/icons/settings.svg")}
						/>
					)}
				>
					<List.Item
						title="Privacidade"
						onPress={() => navigation.navigate("CadastroPessoal")}
						style={styles.item}
					/>
				</List.Accordion>
				<List.Item
					title="Sair"
					style={styles.itemSair}
					titleStyle={{ textAlign: "center" }}
					onPress={logout}					
				/>
			</List.Section>
		</View>
	);
};
function usuarioLogadoScreens() {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			drawerContent={(props) => <HomeDrawer {...props} />}
			screenOptions={{
				drawerStyle: {
					paddingTop: 0,
					borderTopRightRadius: 0,
					borderBottomRightRadius: 0,
					marginTop: 0,
				},
			}}
		>
			<Drawer.Group
				screenOptions={{ headerStyle: { backgroundColor: "#cfe9e5" } }}
			>
				<Drawer.Screen name="Home" component={Home} />
				<Drawer.Screen name="Usuário Logado" component={usuarioLogado} />
				<Drawer.Screen name="Meus Pets" component={meusPets} />
			</Drawer.Group>
		</Drawer.Navigator>
	);
}

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
						<Stack.Navigator
							screenOptions={{ headerStyle: { backgroundColor: "#cfe9e5" } }}
						>
							<Stack.Screen
								name="Home"
								options={{ headerShown: false }}
								component={usuarioLogadoScreens}
							/>
							<Stack.Screen
								name="Cadastro Pessoal"
								component={CadastroPessoal}
							/>
							<Stack.Screen name="Login" component={Login} />
							<Stack.Group
								screenOptions={{ headerStyle: { backgroundColor: "#88c9bf" } }}
							>
								<Stack.Screen name="Cadastro" component={Cadastro} />
							</Stack.Group>
							<Stack.Group
								screenOptions={{ headerStyle: { backgroundColor: "#ffd358" } }}
							>
								<Stack.Screen
									name="Cadastro Animal"
									component={CadastroAnimal}
								/>
							</Stack.Group>
							<Stack.Group
								screenOptions={{ headerStyle: { backgroundColor: "#fee29b" } }}
							>
								<Stack.Screen
									name="Cadastro Animal Feito"
									component={Cadastroanimalfeito}
								/>
							</Stack.Group>
							<Stack.Group
								screenOptions={{ headerStyle: { backgroundColor: "#cfe9e5" } }}
							>
								<Stack.Screen name="Adotar Animais" component={Adotaranimais} />
							</Stack.Group>
							<Stack.Group
								screenOptions={{ headerStyle: { backgroundColor: "#cfe9e5" } }}
							>
								<Stack.Screen name="Detalhes Pet" component={DetalhesPet} />
							</Stack.Group>
							<Stack.Group
								screenOptions={{ headerStyle: { backgroundColor: "#cfe9e5" } }}
							>
								<Stack.Screen
									name="Detalhes Pet Adotar"
									component={DetalhesPetAdotar}
								/>
							</Stack.Group>
						</Stack.Navigator>
					</ApplicationProvider>
				</SafeAreaProvider>
			</SessionProvider>
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f2f2f2",
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#333",
	},
	drawerContainer: {
		height: "100%",
		paddingTop: 0,
		borderRadius: 0,
		marginTop: 0,
	},
	accordionPerfil: {
		backgroundColor: "#88c9bf",
	},
	accordionAtalhos: {
		backgroundColor: "#fee29b",
	},
	accordionInfo: {
		backgroundColor: "#cfe9e5",
	},
	accordionConfig: {
		backgroundColor: "#e6e7e8",
	},
	itemSair: {
		backgroundColor: "#88c9bf",
		height: 48,
		textAlign: "justify",
	},
	item: {
		paddingLeft: 48,
	},
});
