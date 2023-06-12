import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "@react-navigation/native";
const MAX_WIDTH = Dimensions.get('window').width * 0.9
const MAX_HEIGHT = Dimensions.get('window').height * 0.95

export default function CardFilme({ filme }){
    const baseUrl = 'https://api.otaviolube.com'
    return (
        <View style={styles.container}>
            <Image source={{
                uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url
            }} style={styles.image}/>
            <Text style={styles.title}>{filme.titulo}</Text>
            <Text style={styles.sinopse}>{filme.sinopse.length > 200 ?
            filme.sinopse.substring(0,200) + '...' :
            filme.sinopse}</Text>
            <TouchableOpacity style={styles.btnText}>
                <Link to={{screen: 'MoviesDetailPage', params:{filme: filme}}} style={styles.link}>
                    Saiba mais...
                </Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        margin: 15,
        padding: 18,
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH
    },
    image: {
        height: '350px',
        width: '250px',
        resizeMode: 'cover',
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    sinopse: {
        marginBottom: 10,
        textAlign: 'justify'
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderColor: 'black',
        borderRadius: '10px',
        borderWidth: '2px'
    },
    btnText: {
        color: 'black',
        fontSize: 24
    },
    link: {
        padding: 20,
        backgroundColor: 'orange',
        borderColor: 'black',
        borderWidth: '2px',
        borderRadius: '15px',
        justifyContent: 'center',
        fontSize: 20
    }
})