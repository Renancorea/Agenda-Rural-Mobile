import { StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView, Platform, TextInput } from "react-native" 
import { Botao, BotaoImagem } from "../components/botoes"
import { createTamagui, TamaguiProvider, View } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v5' // for quick config install thi


const config = createTamagui(defaultConfig)

export default function esqueceuSenha(){
    return(
        <TamaguiProvider config={config} defaultTheme={undefined}>
<ScrollView /*Para rolar a tela*/
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false} /*tirar a barra de rolagem*/ >

        <View style={styles.body}>
        
            
            <BotaoImagem caminho="/telaInicial" imagem={require("../assets/return.png")}></BotaoImagem>

            <Text style={styles.title}>Esqueceu a senha?</Text>
            <Text style={styles.text}>Digite seu Email para recuperar sua senha:</Text>

            <View style={styles.inputBox}>                                        
                <TextInput placeholder="E-mail" style={styles.input}></TextInput>
            </View>

            
            <Botao caminho="/codigoEnviado" texto="Seguir"></Botao>

        </View>
                </ScrollView>
        </TamaguiProvider>
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


