import { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Interessados() {
    const navigation = useNavigation();
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const exemplos = [
        { id: "1", name: "João Silva", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCOmPsstmko3MHpax6444mjeEM_E-5Cd60Q&s" },
        { id: "2", name: "Maria Oliveira", photo: "https://www.google.com/imgres?q=foto%20viuva%20negra&imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Funiversocinematograficomarvel%2Fimages%2F0%2F05%2FNat_Ultron.jpg%2Frevision%2Flatest%2Fscale-to-width%2F360%3Fcb%3D20211229224652%26path-prefix%3Dpt&imgrefurl=https%3A%2F%2Funiversocinematograficomarvel.fandom.com%2Fpt-br%2Fwiki%2FVi%25C3%25BAva_Negra&docid=NcyFWzhsR7zORM&tbnid=8qKdEmdKVXtcgM&vet=12ahUKEwjGs8Su7LuLAxX6qZUCHcXfJsAQM3oECBsQAA..i&w=360&h=510&hcb=2&ved=2ahUKEwjGs8Su7LuLAxX6qZUCHcXfJsAQM3oECBsQAA" },
        { id: "3", name: "Carlos Santos", photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wallpapers.com%2Fimagens-do-capitao-america-da-marvel&psig=AOvVaw0dwkoWhrnlIRehwn1X6W27&ust=1739371109874000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODIlLvsu4sDFQAAAAAdAAAAABAE" }
    ];

    return (
        <View style={styles.container}>
            <ScrollView>
                {exemplos.map((user) => (
                    <View key={user.id} style={styles.userCard}>
                        <TouchableOpacity onPress={() => { setSelectedUser(user); setModalVisible(true); }}>
                            <Image source={{ uri: user.photo }} style={styles.userImage} />
                        </TouchableOpacity>
                        <Text style={styles.userName}>{user.name}</Text>
                    </View>
                ))}
            </ScrollView>

            <Modal visible={modalVisible} transparent animationType="fade">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{selectedUser?.name}</Text>
                      <TouchableOpacity style={styles.modalButton} onPress={() => navigation.navigate("Chat", { userId: selectedUser?.id })}>
                            <Text>Abrir Chat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                            <Text>Excluir</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
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
    modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
    modalContent: { backgroundColor: "white", padding: 20, borderRadius: 10, width: 300, alignItems: "center" },
    modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    modalButton: { padding: 10, width: "100%", alignItems: "center", marginTop: 10, backgroundColor: "#ddd", borderRadius: 5 }
});
