import { Layout, Text, Button, Icon } from "@ui-kitten/components";
import { Image, StyleSheet, ScrollView, View } from "react-native";
import { TopNav } from "../components/navigation/TopNavegation";

export default function DetalhesPet() {
  return (
    <Layout style={{ flex: 1 }}>
      {TopNav("Pequi")}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.google.com/imgres?q=imagem%20cachorro&imgurl=https%3A%2F%2Fwww.direcional.com.br%2Fwp-content%2Fuploads%2F2022%2F08%2Fcachorro-para-apartamento.jpg&imgrefurl=https%3A%2F%2Fwww.direcional.com.br%2Fblog%2Festilo-de-vida%2Fcachorro-para-apartamento%2F&docid=jNiqTn9T9eCtJM&tbnid=o-CGoQroH6wxBM&vet=12ahUKEwiIu7rZkIyKAxVHrpUCHUn_EC0QM3oECGUQAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwiIu7rZkIyKAxVHrpUCHUn_EC0QM3oECGUQAA"
          }}
        />
        <Icon
          name="edit-outline"
          fill="#434343"
          style={styles.editIcon}
        />

        <Text style={styles.petName}>Pequi</Text>

        <Layout style={styles.infoRow}>
          <Text style={styles.infoItem}>Macho</Text>
          <Text style={styles.infoItem}>Pequeno</Text>
          <Text style={styles.infoItem}>Adulto</Text>
        </Layout>

        <Text style={styles.location}>Planaltina – Brasília</Text>

        <View style={styles.section}>
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
          <Text style={styles.infoText}>Brincalhão e dócil</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>O PEQUI PRECISA DE</Text>
          <Text style={styles.infoText}>Ajuda financeira e alimento</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>DESCRIÇÃO DO DOADOR</Text>
          <Text style={styles.infoText}>
            Termo de apadrinhamento, auxílio financeiro com alimentação
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>MAIS SOBRE PEQUI</Text>
          <Text style={styles.infoText}>
            Pequi é um cão muito dócil e de fácil convivência. Adora crianças e outros
            animais. Ele está disponível para adoção responsável e precisa de ajuda
            financeira para o seu dia a dia até encontrar um lar fixo.
          </Text>
        </View>

        <Layout style={styles.buttonContainer}>
          <Button style={styles.button}>
            {(evaProps) => <Text style={styles.buttonText}>VER INTERESSADOS</Text>}
          </Button>
          <Button style={[styles.button, styles.removeButton]}>
            {(evaProps) => <Text style={styles.buttonText}>REMOVER PET</Text>}
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
    top: 150,
    right: 20,
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
  infoItem: {
    fontFamily: "Roboto-Medium",
    fontSize: 14,
    color: "#434343",
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
    color: "#434343",
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
    backgroundColor: "#ffd358",
    borderColor: "#ffd358",
  },
  removeButton: {
    backgroundColor: "#ff4d4d",
    borderColor: "#ff4d4d",
  },
  buttonText: {
    fontFamily: "Roboto-Medium",
    fontSize: 14,
    color: "#ffffff",
  },
});
