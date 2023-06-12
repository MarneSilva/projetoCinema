import { ActivityIndicator, Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import CardFilme from '../../card/CardFilme';
import { useEffect, useState } from 'react';

export default function MoviesPage() {
    const Url = 'https://api.otaviolube.com/api/filmes?populate=*'
    var [filmes, setFilmes] = useState([])

    useEffect(() => {
        fetch(Url).then(data => data.json()).then(object => {
            setFilmes(object.data)
        })
    }, [])
    return (
        <SafeAreaView style={styles.container}>
        {filmes.length > 0 ? <ScrollView horizontal> {
          filmes.map(filme =>
          <CardFilme key={filme.id} filme={filme.attributes}/>)
        }
        </ScrollView>
          : // separação do operador ternário
          <View style={styles.activityContainer}>
              <ActivityIndicator size='large' color='#940BE2'/>
              <Text style={styles.loading}>Your content is loading...</Text>
          </View>}
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    activityContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });