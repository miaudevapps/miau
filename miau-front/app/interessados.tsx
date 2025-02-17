import { useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getUser } from "@/services/users";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useSession } from "@/services/auth";
import { createChat } from "@/services/chatservice";

export default function Interessados({ route }: any) {
    const interessados = route.params.interessados;
    const animalID = route.params.animalID;
    const navigation = useNavigation<any>();
    const user = useSession().user;

    const [selectedUser, setSelectedUser] = useState<{
        id: string;
        name: string;
        image_url: string;
    } | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const userPromises = interessados.map((id: string) => getUser(id));
            const usersData = await Promise.all(userPromises);
            setUsers(usersData);
            setLoading(false);
        };

        fetchUsers();
    }, [interessados]);

    const handleChat = async (userId: string) => {
        const chat = await createChat(user.uid, userId, animalID).then(() => {
            navigation.navigate("Meus Chats");
        });
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {users.map((user) => (
                    <View key={user.id} style={styles.userCard}>
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedUser(user);
                                setModalVisible(true);
                            }}
                        >
                            <Image
                                source={{ uri: user.photo }}
                                style={styles.userImage}
                            />
                        </TouchableOpacity>
                        <Text style={styles.userName}>{user.name}</Text>
                    </View>
                ))}
            </ScrollView>

            <Modal visible={modalVisible} transparent animationType="fade">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>
                            {selectedUser?.name}
                        </Text>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() =>
                                handleChat(selectedUser?.id as string)
                            }
                        >
                            <Text>Abrir Chat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text>Excluir</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    userCard: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
    userImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
    userName: { fontSize: 16 },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: 300,
        alignItems: "center",
    },
    modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    modalButton: {
        padding: 10,
        width: "100%",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#ddd",
        borderRadius: 5,
    },
});
