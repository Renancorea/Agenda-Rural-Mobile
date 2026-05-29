import { TouchableOpacity, Button, View, StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView, Platform, TextInput } from "react-native" 
import { Link } from "expo-router"

export default function ES_envioCodigo(){
    return(
        <View style={styles.body}>
                
            <Link style={styles.navImagen} href="/ES_envioCodigo">
                <Image source={require("../assets/return.png")}style={styles.seta}/>
            </Link>
                
            <Text style={styles.title}>Código enviado</Text>
            <Text style={styles.text}>Sua senha foi enviada para seu e-mail, por favor verifique-o</Text>
            <Text style={styles.forgotpass}> <Link href="/reenviar2">Clique aqui para reenviar o código</Link></Text>
                                                    
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: "#EFF5D2",
        padding: 32, 
        alignItems: "flex-start",
        width:"100%"
    },

    navImagen:{
        marginTop: 20,
    },

    seta: {
        width: 25, 
        height: 25,
        resizeMode: "contain",
        marginTop: 40,
    },

    title:{
        textAlign:"center",
        width:"100%",
        marginTop: 15,
        fontSize: 42,
        fontWeight: "bold",
        color: "#8FA31E",  
    },

    text:{
        width: "100%",
        fontSize: 19,
        textAlign: "center",
        marginTop: 15,
    },

    forgotpass: {
        width: "100%",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
        fontSize:15,
        color:'#8FA31E',
    },

})