import { Layout, Text, Button, Radio, RadioGroup, CheckBox } from "@ui-kitten/components";
import { StyleSheet, TextInput, ScrollView } from "react-native";
import { TopNav } from "../components/navigation/TopNavegation";
import React, { useState } from "react";

export default function CadastroAnimal() {
    const [selectedSpecies, setSelectedSpecies] = useState(null);
    const [selectedSex, setSelectedSex] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedAge, setSelectedAge] = useState(null);
    const [temperament, setTemperament] = useState({
        brincalhao: false,
        timido: false,
        calmo: false,
        guardaAmoroso: false,
        preguiçoso: false,
    });

    const [health, setHealth] = useState({
        vacinado: false,
        vermifugado: false,
        castrado: false,
        doente: false,
    });

    const [adoptionRequirements, setAdoptionRequirements] = useState({
        termoAdocao: false,
        fotosCasa: false,
        visitaPrevia: false,
        acompanhamentoPosAdocao: false,
    });

    const [followUp, setFollowUp] = useState({
        umMes: false,
        tresMeses: false,
        seisMeses: false,
    });

    // Funções para alterar os estados
    const handleTemperamentChange = (temperamentKey) => {
        setTemperament((prevState) => ({
            ...prevState,
            [temperamentKey]: !prevState[temperamentKey],
        }));
    };

    const handleHealthChange = (healthKey) => {
        setHealth((prevState) => ({
            ...prevState,
            [healthKey]: !prevState[healthKey],
        }));
    };

    const handleAdoptionRequirementsChange = (requirementKey) => {
        setAdoptionRequirements((prevState) => ({
            ...prevState,
            [requirementKey]: !prevState[requirementKey],
        }));
    };

    const handleFollowUpChange = (followUpKey) => {
        setFollowUp((prevState) => ({
            ...prevState,
            [followUpKey]: !prevState[followUpKey],
        }));
    };

    // Funções para os RadioButtons
    const handleSpeciesChange = (index) => setSelectedSpecies(index);
    const handleSexChange = (index) => setSelectedSex(index);
    const handleSizeChange = (index) => setSelectedSize(index);
    const handleAgeChange = (index) => setSelectedAge(index);

    return (
        <Layout style={{ flex: 1 }}>
            {TopNav("Cadastro Animal")}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Layout style={styles.container}>
                    <Text style={styles.Text}>Tenho interesse em cadastrar o animal para:</Text>
                    <Layout style={styles.buttonBox}>
                        <Button style={styles.buttonYellow}>
                            <Text style={styles.buttonText}>ADOÇÃO</Text>
                        </Button>
                        <Button style={styles.buttonWhite}>
                            <Text style={styles.buttonTextT}>APADRINHAR</Text>
                        </Button>
                        <Button style={styles.buttonWhite}>
                            <Text style={styles.buttonText}>AJUDA</Text>
                        </Button>
                    </Layout>

                    <Text style={styles.TextN}>Adoção</Text>
                    <Text style={styles.TextYellow}>NOME DO ANIMAL</Text>
                    <Layout style={styles.inputContainer}>
                        <TextInput style={styles.inputField} placeholder="Nome do Animal" />
                    </Layout>

                    <Text style={styles.TextYellow}>FOTO DO ANIMAL</Text>
                    <Layout style={styles.photoBox}></Layout>

                    <Text style={styles.TextYellow}>ESPÉCIE</Text>
                    <Layout style={styles.radioBox}>
                        <RadioGroup
                            selectedIndex={selectedSpecies}
                            onChange={handleSpeciesChange}
                            style={styles.radioGroup}
                        >
                            <Radio>Cachorro</Radio>
                            <Radio>Gato</Radio>
                        </RadioGroup>
                    </Layout>

                    <Text style={styles.TextYellow}>SEXO</Text>
                    <Layout style={styles.radioBox}>
                        <RadioGroup
                            selectedIndex={selectedSex}
                            onChange={handleSexChange}
                            style={styles.radioGroup}
                        >
                            <Radio>Macho</Radio>
                            <Radio>Fêmea</Radio>
                        </RadioGroup>
                    </Layout>

                    <Text style={styles.TextYellow}>PORTE</Text>
                    <Layout style={styles.radioBox}>
                        <RadioGroup
                            selectedIndex={selectedSize}
                            onChange={handleSizeChange}
                            style={styles.radioGroup}
                        >
                            <Radio>Pequeno</Radio>
                            <Radio>Médio</Radio>
                            <Radio>Grande</Radio>
                        </RadioGroup>
                    </Layout>

                    <Text style={styles.TextYellow}>IDADE</Text>
                    <Layout style={styles.radioBox}>
                        <RadioGroup
                            selectedIndex={selectedAge}
                            onChange={handleAgeChange}
                            style={styles.radioGroup}
                        >
                            <Radio>Filhote</Radio>
                            <Radio>Adulto</Radio>
                            <Radio>Idoso</Radio>
                        </RadioGroup>
                    </Layout>

                    {/* Campo Temperamento - Checkboxes */}
                    <Text style={styles.TextYellow}>TEMPERAMENTO</Text>
                    <Layout style={styles.checkboxContainer}>
                        <CheckBox
                            checked={temperament.brincalhao}
                            onChange={() => handleTemperamentChange('brincalhao')}
                        >
                            Brincalhão
                        </CheckBox>
                        <CheckBox
                            checked={temperament.timido}
                            onChange={() => handleTemperamentChange('timido')}
                        >
                            Tímido
                        </CheckBox>
                        <CheckBox
                            checked={temperament.calmo}
                            onChange={() => handleTemperamentChange('calmo')}
                        >
                            Calmo
                        </CheckBox>
                        <CheckBox
                            checked={temperament.guardaAmoroso}
                            onChange={() => handleTemperamentChange('guardaAmoroso')}
                        >
                            Guarda Amoroso
                        </CheckBox>
                        <CheckBox
                            checked={temperament.preguiçoso}
                            onChange={() => handleTemperamentChange('preguiçoso')}
                        >
                            Preguiçoso
                        </CheckBox>
                    </Layout>

                    {/* Campo Saúde - Checkboxes */}
                    <Text style={styles.TextYellow}>SAÚDE</Text>
                    <Layout style={styles.checkboxContainer}>
                        <CheckBox
                            checked={health.vacinado}
                            onChange={() => handleHealthChange('vacinado')}
                        >
                            Vacinado
                        </CheckBox>
                        <CheckBox
                            checked={health.vermifugado}
                            onChange={() => handleHealthChange('vermifugado')}
                        >
                            Vermifugado
                        </CheckBox>
                        <CheckBox
                            checked={health.castrado}
                            onChange={() => handleHealthChange('castrado')}
                        >
                            Castrado
                        </CheckBox>
                        <CheckBox
                            checked={health.doente}
                            onChange={() => handleHealthChange('doente')}
                        >
                            Doente
                        </CheckBox>
                    </Layout>

                    {/* Campo Exigências para Adoção - Checkboxes */}
                    <Text style={styles.TextYellow}>EXIGÊNCIAS PARA ADOÇÃO</Text>
                    <Layout style={styles.checkboxContainer}>
                        <CheckBox
                            checked={adoptionRequirements.termoAdocao}
                            onChange={() => handleAdoptionRequirementsChange('termoAdocao')}
                        >
                            Termo de Adoção
                        </CheckBox>
                        <CheckBox
                            checked={adoptionRequirements.fotosCasa}
                            onChange={() => handleAdoptionRequirementsChange('fotosCasa')}
                        >
                            Fotos da Casa
                        </CheckBox>
                        <CheckBox
                            checked={adoptionRequirements.visitaPrevia}
                            onChange={() => handleAdoptionRequirementsChange('visitaPrevia')}
                        >
                            Visita Prévia ao Animal
                        </CheckBox>
                        <CheckBox
                            checked={adoptionRequirements.acompanhamentoPosAdocao}
                            onChange={() => handleAdoptionRequirementsChange('acompanhamentoPosAdocao')}
                        >
                            Acompanhamento Pós Adoção
                        </CheckBox>
                    </Layout>

                    {/* Campo Tempo de Acompanhamento - Checkboxes */}
                    <Text style={styles.TextYellow}>TEMPO DE ACOMPANHAMENTO</Text>
                    <Layout style={styles.checkboxContainer}>
                        <CheckBox
                            checked={followUp.umMes}
                            onChange={() => handleFollowUpChange('umMes')}
                        >
                            1 mês
                        </CheckBox>
                        <CheckBox
                            checked={followUp.tresMeses}
                            onChange={() => handleFollowUpChange('tresMeses')}
                        >
                            3 meses
                        </CheckBox>
                        <CheckBox
                            checked={followUp.seisMeses}
                            onChange={() => handleFollowUpChange('seisMeses')}
                        >
                            6 meses
                        </CheckBox>
                    </Layout>

                    <Text style={styles.TextYellow}>SOBRE O ANIMAL</Text>
                    <Layout style={styles.inputContainer}>
                        <TextInput style={styles.inputField} placeholder="Compartilhe a história do animal" />
                    </Layout>

                    <Button style={styles.button}>
                        <Text style={styles.buttonText}>COLOCAR PARA ADOÇÃO</Text>
                    </Button>
                </Layout>
            </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    Text: {
        fontFamily: "Roboto",
        fontSize: 14,
        color: "#757575",
        marginTop: 10,
    },
    TextN: {
        marginTop: 30,
        fontFamily: "Roboto",
        fontSize: 16,
        color: "#434343",
        alignSelf: "flex-start",
    },
    TextYellow: {
        marginTop: 15,
        fontFamily: "Roboto",
        fontSize: 12,
        color: "#f7a800",
        alignSelf: "flex-start",
    },
    buttonYellow: {
        width: 100,
        height: 40,
        borderWidth: 2,
        borderColor: "#ffd358",
        backgroundColor: "#ffd358",
        borderRadius: 4,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonWhite: {
        width: 100,
        height: 40,
        borderWidth: 2,
        borderColor: "#f1f2f2",
        backgroundColor: "#f1f2f2",
        borderRadius: 4,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 50,
        paddingHorizontal: 16,
    },
    buttonBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 350,
        marginTop: 16,
    },
    button: {
        width: 232,
        height: 40,
        borderWidth: 2,
        borderColor: "#ffd358",
        backgroundColor: "#ffd358",
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontFamily: "Roboto",
        fontSize: 12,
        color: "#434343",
    },
    buttonTextT: {
        fontFamily: "Roboto",
        fontSize: 12,
        color: "#bdbdbd",
    },
    inputContainer: {
        width: "100%",
        marginTop: 10,
    },
    inputField: {
        color: "#bdbdbd",
        fontFamily: "Roboto",
        fontSize: 14,
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#bdbdbd",
        paddingLeft: 5,
        marginBottom: 15,
    },
    photoBox: {
        width: 312,
        height: 128,
        backgroundColor: "#f1f2f2",
        borderWidth: 2,
        borderColor: "#f1f2f2",
        marginTop: 8,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 350,
        marginTop: 10,
        marginLeft: 40,
    },
    radioGroup: {
        flexDirection: 'row',
    },
    checkboxContainer: {
        marginTop: 10,
        alignItems: 'flex-start',
        paddingLeft: 100,   
    }
});
