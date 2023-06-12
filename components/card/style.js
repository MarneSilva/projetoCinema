import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container:{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        padding: 10,
        margin: 3
    },
    viewimg:{
        width: '32%',
        height: 154,
        padding: 10

    },
    image:{
        width:'100%',
        height:'115%',
        borderRadius:  20
        
    },
    viewdata:{
        width: '60%',
        height: '100%',
        backgroundColor: 'white',
        pading: 10,
        borderRadius: 20,
        marginBottom: 2
    
    },
    titulo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5
    },
    descricao:{
        fontSize: 16,
        color: 'black',
        marginBottom: 5
    },
     btn:{
       width:'50%',
       padding: 10,
       borderRadius: 10,
       marginBottom: 2
       
     },    
});