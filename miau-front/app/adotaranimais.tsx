import React, { useState } from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { Image, StyleSheet, ScrollView, View } from "react-native";

export default function Adotaranimais() {
  const [animals, setAnimals] = useState([
    { id: 1, name: "Pequi", info: "ADULTO | MACHO | MÉDIO\nSAMAMBAIA SUL – DISTRITO FEDERAL", image: "https://via.placeholder.com/344x183" },
    { id: 2, name: "Bidu", info: "ADULTO | MACHO | MÉDIO\nSAMAMBAIA SUL – DISTRITO FEDERAL", image: "https://via.placeholder.com/344x183" },
    { id: 3, name: "Alec", info: "ADULTO | MACHO | MÉDIO\nSAMAMBAIA SUL – DISTRITO FEDERAL", image: "https://via.placeholder.com/344x183" },
  ]);

  return (
    <Layout style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {animals.map((animal) => (
          <View key={animal.id} style={styles.card}>
            <Image source={{ uri: animal.image }} style={styles.image} />
            <Text category="h6" style={styles.name}>
              {animal.name}
            </Text>
            <Text category="s1" style={styles.info}>
              {animal.info}
            </Text>
            <Button style={styles.button} onPress={() => console.log(`Detalhes de ${animal.name}`)}>
              Ver Mais
            </Button>
          </View>
        ))}
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  scrollView: {
    padding: 8,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 8,
    padding: 16,
    width: 344,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 344,
    height: 183,
    borderRadius: 8,
  },
  name: {
    marginTop: 8,
    fontWeight: "bold",
    color: "#434343",
  },
  info: {
    marginTop: 4,
    color: "#434343",
  },
  button: {
    marginTop: 8,
    backgroundColor: "#ffd358",
    borderColor: "transparent",
  },
});
