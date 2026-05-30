import { StyleSheet, Text, ScrollView, KeyboardAvoidingView, Platform, TextInput } from "react-native" 

import { createTamagui, TamaguiProvider, View } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v5' // for quick config install this
import { BotaoImagem } from "../components/botoes"

const config = createTamagui(defaultConfig)

export default function ES_envioCodigo(){
    return(
        <TamaguiProvider config={config} defaultTheme={undefined}>
<ScrollView /*Para rolar a tela*/
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false} /*tirar a barra de rolagem*/ >

        <View style={styles.body}>
                
            <BotaoImagem imagem={require("../assets/return.png")} caminho="/esqueceuSenha" />
                
            <Text style={styles.title}>Senha enviada</Text>
            <Text style={styles.text}>Sua senha foi enviada para seu e-mail, por favor verifique-o</Text>
            <Text style={styles.forgotpass}>Reenviar em 1:20</Text>
        
        </View>
                </ScrollView>
        </TamaguiProvider>
    )
}

const styles= StyleSheet.create({
    body:{
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

    forgotpass: {
        width: "100%",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
        fontSize:15,
        color:'#8FA31E',
    },

})