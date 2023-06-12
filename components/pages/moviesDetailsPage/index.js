import { Image, SafeAreaView, ScrollView, Text, View } from "react-native"
import styles from "./style"
const baseUrl = 'https://api.otaviolube.com'

export default function MovieDetailsPage({ route }) {
    const { filme } = route.params
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal>
                <View style={styles.infoContainer}>
                    <View style={styles.imageCard}>
                        <Image source={{uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url}}
                        style={styles.image}/>
                        <Text style={styles.title}>{filme.titulo}</Text>
                        <Text style={styles.sinopse}>{filme.sinopse}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}