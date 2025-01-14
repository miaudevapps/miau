import { Layout } from "@ui-kitten/components"
import { petCard } from "../components/petCard/petCard"
import {StyleSheet} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

export default function meusPets(){
    return(
        <ScrollView>
            <Layout style= {styles.mainLayout}>
                {petCard('Pequi','https://media.istockphoto.com/id/1926125581/pt/foto/puppy-window-portrait.jpg?s=2048x2048&w=is&k=20&c=9VCNRHyv9WQFYtSKFpW8kcJRrq8WsWodJoaj1C9EJmc=')}
                {petCard('Pequi','https://media.istockphoto.com/id/1926125581/pt/foto/puppy-window-portrait.jpg?s=2048x2048&w=is&k=20&c=9VCNRHyv9WQFYtSKFpW8kcJRrq8WsWodJoaj1C9EJmc=')}
                {petCard('Pequi','2')}
                {petCard('Pequi','2')}
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
        
    }
})