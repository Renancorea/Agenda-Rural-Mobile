import { defaultConfig } from '@tamagui/config/v5'; // for quick config install this
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text } from "react-native"
import { createTamagui, TamaguiProvider, View } from 'tamagui'
import { Botao, BotaoTexto } from "../components/botoes"
import { EntradaSenha, EntradaTexto } from "../components/caixasDeTexto"

const config = createTamagui(defaultConfig)
/*não ser visivel a senha (editable={false}) 
  a bolinha na senha (secureTextEntry)
  (keyboardType="") seria o tipo de teclado*/

export default function telaInicial() {
    return (
        <TamaguiProvider config={config} defaultTheme={undefined}>

            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: "padding", android: "height" })}>
                <ScrollView /*Para rolar a tela*/
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false} /*tirar a barra de rolagem*/ >

                    <View style={styles.container}>

                        <View style={styles.header}>
                            <Image source={require("../assets/logo.png")} style={styles.illustration_logo} />
                            <Text style={styles.title}>Bem vindo ao Agenda Rural</Text>
                        </View>

                        <View style={styles.form}>
                            <Text style={styles.subtitle}>Acesse sua conta com E-mail e Senha</Text>

                            <View style={styles.inputBox}>
                                <EntradaTexto texto={"E-mail"} senha={0} />
                            </View>

                            <View style={styles.inputBox}>
                                <EntradaSenha texto={"Senha"} senha={1} />
                                <BotaoTexto caminho="/esqueceuSenha" texto="Esqueceu a senha?" />
                            </View>
                        </View>


                        <View style={styles.buttonContainer}>
                            <Botao texto="Entrar" caminho="/cadastro" />
                            <BotaoTexto caminho="/cadastro" texto="Não tem uma conta? Cadastre-se" />
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </TamaguiProvider>
    )
};
const styles = StyleSheet.create({

    container: {
        height: "100%",
        backgroundColor: '#EFF5D2',
        padding: 32,
    },

    header: {
        textAlign: "center",
        alignItems: "center",
        backgroundColor: '#EFF5D2',
        padding: 0,
    },

    buttonContainer: {
        marginTop: 24,
    },
    inputBox: {
        width: "100%",
        marginTop: 10,
    },

    illustration_logo: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
        marginTop: "10%",
    },

    title: {
        textAlign: "center",
        height: 100,
        width: "80%",
        fontSize: 38,
        fontWeight: 900,
        color: '#4F2D1A'
    },

    subtitle: {
        width: "100%",
        fontSize: 16,
        textAlign: "center",
    },

    form: {
        marginTop: "15%",
        gap: 12,
    },

});