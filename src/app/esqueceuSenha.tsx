import { TouchableOpacity, Button, View, StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView, Platform, TextInput } from "react-native" 
import { Link } from "expo-router"

export default function esqueceuSenha(){
    return(
        <View style={styles.body}>
        
            <Link style={styles.navImagen} href="/">
                <Image source={require("../assets/return.png")}style={styles.seta}/>
            </Link>
        
            <Text style={styles.title}>Esqueceu a senha?</Text>

            <Text style={styles.text}>Digite seu Email para recuperar sua senha:</Text>

            <View style={styles.inputBox}>                                        
                <TextInput placeholder="E-mail" style={styles.input}></TextInput>
            </View>

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

    input: {
        height: 45,
        borderColor: '#000000',
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 4,
        fontSize: 20,
        paddingHorizontal: 8,
    },

     inputBox:{
        width:"100%",
        marginTop: 30,
    },
})


