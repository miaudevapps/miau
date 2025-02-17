import { Layout } from "@ui-kitten/components";
import { petCard } from "../components/petCard/petCard";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react";
import { getAnimalsByUser } from "@/services/animals";
import { useState } from "react";
import { useSession } from "@/services/auth";

export default function meusPets() {
    const [animals, setAnimals] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const user = useSession().user;

    useEffect(() => {
        const fetchAnimals = async () => {
            const response = await getAnimalsByUser(user.uid);
            console.log(response);
            setAnimals(response);
            setLoading(false);
        };
        fetchAnimals();
    }, []);

    if (loading) {
        return (
            <Layout style={styles.mainLayout}>
                {/* You can replace this with a loading spinner or any other loading indicator */}
                <p>Loading...</p>
            </Layout>
        );
    }

    return (
        <ScrollView>
            <Layout style={styles.mainLayout}>
                {animals.map((animal, index) =>
                    petCard(animal.id, animal.nome, animal.image_url)
                )}
            </Layout>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainLayout: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
    },
});
