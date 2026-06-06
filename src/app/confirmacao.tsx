import { StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView, Platform, TextInput } from "react-native" 
import { createTamagui, TamaguiProvider, View } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v5'
import { BotaoImagem, Botao } from "../components/botoes"
import { EntradaCodigo } from "../components/caixasDeTexto"

const config = createTamagui(defaultConfig)

export default function confirmacao(){
    return(
        <TamaguiProvider config={config} defaultTheme={undefined}>
<ScrollView /*Para rolar a tela*/
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false} /*tirar a barra de rolagem*/ >

        <View style={styles.body}>

            <BotaoImagem imagem={require("../assets/return.png")} caminho="/cadastro" />

            <Text style={styles.title}>Confirmação!</Text>
            <Text style={styles.text}>Para confirmarmos a criação da sua conta enviamos o código de verificação para o e-mail que você cadastrou, insira-o abaixo:</Text>

            <EntradaCodigo></EntradaCodigo>

            <Botao texto="Criar" caminho="/confirmacao" tipo="button"/>
              
        </View>
                </ScrollView>
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


})
    
        
       