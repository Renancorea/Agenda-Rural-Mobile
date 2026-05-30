import { StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView, Platform, TextInput } from "react-native" 
import { createTamagui, TamaguiProvider, View } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v5' // for quick config install this
import { BotaoImagem, Botao } from "../components/botoes"

const config = createTamagui(defaultConfig)

export default function confirmacao(){
    return(
        <TamaguiProvider config={config} defaultTheme={undefined}>

        <View style={styles.body}>

            <BotaoImagem imagem={require("../assets/return.png")} caminho="/cadastro" />

            <Text style={styles.title}>Confirmação!</Text>
            <Text style={styles.text}>Para confirmarmos a criação da sua conta enviamos o código de verificação para o e-mail que você cadastrou, insira-o abaixo:</Text>

            <View style={styles.inputBox}>
                <View><TextInput style={styles.input}></TextInput></View>
                <View><TextInput style={styles.input}></TextInput></View>
                <View><TextInput style={styles.input}></TextInput></View>
                <View><TextInput style={styles.input}></TextInput></View>
            </View>
                   
            <Botao texto="Criar" caminho="/confirmacao" />
              
        </View>
        </TamaguiProvider>

    )
}

const styles = StyleSheet.create({
    body: {
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

    inputBox:{
        marginTop: 30,
        justifyContent: "center",       
        flexDirection: "row",
        gap: 10,
    },

     input:{
        borderWidth: 1,
        borderRadius: 5,
        width: 70,
        height: 70
    },

    navButton:{
        marginTop: "100%",
        width: "100%",
        height: 50,
        verticalAlign:"middle",
        backgroundColor: "#8FA31E",
        borderRadius: 15,
        color: "#000000"
    },

    buttonText:{
        fontSize: 30,
        color:'#EFF5D2',
        margin:'auto',
        height:"100%",
        textAlign: 'center',
        fontWeight: "bold",
    }

})
    
        
       