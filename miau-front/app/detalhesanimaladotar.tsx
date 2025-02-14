import { Layout, Text, Button, Icon, Spinner } from "@ui-kitten/components";
import { Image, StyleSheet, ScrollView, View } from "react-native";
import { TopNav } from "../components/navigation/TopNavegation";
import { getAnimal } from "@/services/animals";
import { useState, useEffect } from "react";
import { createChat } from "@/services/chatservice";
import { useSession } from "@/services/auth";
import { useNavigation } from "@react-navigation/native";
import { sendPushNotification } from "@/services/notifications";

export default function DetalhesPetAdotar({ route }: any) {
    const { animalID } = route.params;
    const user = useSession().user;
    const navigation = useNavigation<any>();

    const [animal, setAnimal] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchAnimal = async () => {
            console.log("fetchAnimal");
            const response = await getAnimal(animalID);
            setAnimal(response);
            setLoading(false);
            console.log(response);
        };
        fetchAnimal();
    }, []);

    const handleAdopt = async () => {
        // cria um chat com o dono do animal
        // redireciona para a tela de meus chats
        console.log("handleAdopt");
        console.log(user.uid);
        console.log("mandando notificação");
        await sendPushNotification("ExponentPushToken[pC0uMzCQHJL8ngO1SNLLb3]")
            .then(() => console.log("Notificação enviada"))
            .catch((error) => {
                console.log(error);
            });
        const chat = await createChat(animal.userId, user.uid, animalID).then(
            () => {
                navigation.navigate("Meus Chats");
            }
        );
    };

    if (loading) {
        return (
            <Layout
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Spinner size="large" />
            </Layout>
        );
    }

    return (
        <Layout style={{ flex: 1, alignItems: "center" }}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Image
                    style={styles.image}
                    source={{
                        uri: animal.image_url,
                    }}
                />
                <Icon name="heart" fill="#434343" style={styles.editIcon} />

                <Text style={styles.petName}>{animal.nome}</Text>

                <Layout style={styles.infoRow}>
                    <Text style={styles.infoItemYellow}>SEXO</Text>
                    <Text style={styles.infoItemYellow}>PORTE</Text>
                    <Text style={styles.infoItemYellow}>IDADE</Text>
                </Layout>

                <Layout style={styles.infoRow}>
                    <Text style={styles.infoItem}>{animal.sexo}</Text>
                    <Text style={styles.infoItem}>{animal.porte}</Text>
                    <Text style={styles.infoItem}>{animal.idade}</Text>
                </Layout>

                <View style={styles.section}>
                    <Text style={styles.label}>LOCALIZAÇÃO</Text>
                    <Text style={styles.location}>
                        Samambaia Sul – Distrito Federal
                    </Text>
                    <Text style={styles.label}>GASTOS</Text>
                    <Text style={styles.infoText}>Não</Text>
                    <Text style={styles.label}>VERMIFUGADO</Text>
                    <Text style={styles.infoText}>Sim</Text>
                    <Text style={styles.label}>VACINADO</Text>
                    <Text style={styles.infoText}>Não</Text>
                    <Text style={styles.label}>DOENÇAS</Text>
                    <Text style={styles.infoText}>Nenhuma</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>TEMPERAMENTO</Text>
                    <Text style={styles.infoText}>Calmo e dócil</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>O Bidu PRECISA DE</Text>
                    <Text style={styles.infoText}>
                        Ajuda financeira e alimento
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>DESCRIÇÃO DO DOADOR</Text>
                    <Text style={styles.infoText}>
                        Termo de adoção, fotos da casa, visita prévia e
                        acompanhamento durante três meses
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.label}>MAIS SOBRE PEQUI</Text>
                    <Text style={styles.infoText}>
                        Bidu é um cão muito dócil e de fácil convivência. Adora
                        caminhadas e se dá muito bem com crianças. Tem muito
                        medo de raios e de chuva, nesses momentos ele requer
                        mais atenção. Está disponível para adoção pois eu e
                        minha família o encontramos na rua e não podemos
                        mantê-lo em nossa casa.
                    </Text>
                </View>

                <Layout style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={handleAdopt}>
                        {(evaProps) => (
                            <Text style={styles.buttonText}>
                                PRETENDO ADOTAR
                            </Text>
                        )}
                    </Button>
                </Layout>
            </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create({
    scrollContent: {
        alignItems: "center",
        paddingHorizontal: 16,
    },
    image: {
        width: 360,
        height: 184,
        borderRadius: 8,
        marginBottom: 16,
    },
    editIcon: {
        position: "absolute",
        top: -15,
        right: -160,
        width: 24,
        height: 24,
    },
    petName: {
        fontFamily: "Roboto-Medium",
        fontSize: 24,
        color: "#434343",
        marginBottom: 16,
    },

    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    infoItemYellow: {
        fontFamily: "Roboto-Medium",
        fontSize: 14,
        color: "#f7a800",
    },
    infoItem: {
        fontFamily: "Roboto-Medium",
        fontSize: 14,
        color: "#757575",
    },
    location: {
        fontFamily: "Roboto-Regular",
        fontSize: 12,
        color: "#757575",
        marginBottom: 16,
    },
    section: {
        width: "100%",
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    label: {
        fontFamily: "Roboto-Medium",
        fontSize: 12,
        color: "#f7a800",
        marginBottom: 4,
    },
    infoText: {
        fontFamily: "Roboto-Regular",
        fontSize: 12,
        color: "#757575",
        marginBottom: 8,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 16,
        marginTop: 16,
    },
    button: {
        flex: 1,
        marginHorizontal: 8,
        backgroundColor: "#fdcf58",
        borderColor: "#fdcf58",
    },
    buttonText: {
        fontFamily: "Roboto-Medium",
        fontSize: 14,
        color: "#ffffff",
    },
});
