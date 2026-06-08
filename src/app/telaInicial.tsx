import { defaultConfig } from "@tamagui/config/v5";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";
import { createTamagui, TamaguiProvider, View } from "tamagui";

import { Botao, BotaoTexto } from "../components/botoes";
import { EntradaSenha, EntradaTexto } from "../components/caixasDeTexto";
import { Titulo, Texto } from "@/components/textos";

const config = createTamagui(defaultConfig);

/*
    secureTextEntry -> exibe bolinhas na senha
    keyboardType -> define o tipo do teclado
*/

export default function TelaInicial() {
    return (
        <TamaguiProvider
            config={config}
            defaultTheme={undefined}
        >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.select({
                    ios: "padding",
                    android: "height",
                })}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Image
                                source={require("../assets/logo.png")}
                                style={styles.illustrationLogo}
                            />

                            <View style={{ marginTop: 20 }}>
                                <Titulo
                                    cor="#4F2D1A"
                                    texto="Bem vindo ao Agenda Rural"
                                />
                            </View>
                        </View>

                        <View style={styles.form}>
                            <Texto
                                cor="#4F2D1A"
                                texto="Acesse sua conta com E-mail e Senha"
                            />

                            <View style={styles.inputBox}>
                                <EntradaTexto texto="E-mail" />
                            </View>

                            <View style={styles.inputBox}>
                                <EntradaSenha texto="Senha" />

                                <BotaoTexto
                                    caminho="/esqueceuSenha"
                                    texto="Esqueceu a senha?"
                                    tipo="button"
                                />
                            </View>
                        </View>

                        <View style={styles.buttonContainer}>
                            <Botao
                                texto="Entrar"
                                caminho="/cadastro"
                                tipo="submit"
                            />

                        </View>
                            <BotaoTexto
                                caminho="/cadastro"
                                texto="Não tem uma conta? Cadastre-se"
                                tipo="button"
                            />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </TamaguiProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#EFF5D2",
        padding: 32,
    },

    header: {
        alignItems: "center",
        backgroundColor: "#EFF5D2",
        padding: 0,
    },

    form: {
        marginTop: "15%",
        gap: 12,
    },

    inputBox: {
        width: "100%",
        marginTop: 10,
    },

    buttonContainer: {
        marginTop: 24,
        marginBottom: 12,   
    },

    illustrationLogo: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
        marginTop: "10%",
    },
});