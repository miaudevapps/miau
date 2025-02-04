import { useEffect, useState } from "react";
import { getUserById } from "../services/users"; // Importa a função que busca os dados do usuário
import { getAuth } from "firebase/auth";
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from "react-native";

const MeuPerfil = () => {
    const [user, setUser] = useState<any>(null);
    const auth = getAuth();
    const currentUser = auth.currentUser;

    useEffect(() => {
        const fetchUser = async () => {
            if (currentUser) {
                const userData = await getUserById(currentUser.uid);
                setUser(userData);
            }
        };
        fetchUser();
    }, [currentUser]);

    if (!user) {
        return <ActivityIndicator size="large" color="#1E90FF" style={styles.loading} />;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{ uri: user.photoURL || "https://via.placeholder.com/100" }}
                style={styles.profileImage}
            />
            <Text style={styles.username}>{user.username || "Usuário"}</Text>
            <Text style={styles.fullName}>{user.fullName || "Nome Completo"}</Text>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>{user.email || "N/A"}</Text>

                <Text style={styles.label}>Idade</Text>
                <Text style={styles.value}>{user.age || "N/A"}</Text>

                <Text style={styles.label}>Localização</Text>
                <Text style={styles.value}>{user.location || "N/A"}</Text>

                <Text style={styles.label}>Endereço</Text>
                <Text style={styles.value}>{user.address || "N/A"}</Text>

                <Text style={styles.label}>Telefone</Text>
                <Text style={styles.value}>{user.phone || "N/A"}</Text>

                <Text style={styles.label}>Nome de Usuário</Text>
                <Text style={styles.value}>{user.username || "N/A"}</Text>
            </View>

            <View style={styles.historyContainer}>
                <Text style={styles.label}>Histórico</Text>
                {user.history && user.history.length > 0 ? (
                    user.history.map((item: string, index: number) => (
                        <Text key={index} style={styles.historyItem}>• {item}</Text>
                    ))
                ) : (
                    <Text style={styles.value}>Nenhum histórico encontrado.</Text>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    loading: {
        flex: 1,
        justifyContent: "center",
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#ccc",
        marginBottom: 10,
    },
    username: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
    },
    fullName: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 20,
    },
    infoContainer: {
        width: "100%",
        paddingHorizontal: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1E90FF",
        marginTop: 10,
    },
    value: {
        fontSize: 16,
        color: "#333",
        marginBottom: 5,
    },
    historyContainer: {
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 20,
    },
    historyItem: {
        fontSize: 16,
        color: "#555",
        marginBottom: 3,
    },
});

export default MeuPerfil;
