import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";

/*import { useProductDatabase } from './database/useAgricultorDatabase'*/
import {useState} from 'react'

import { createTamagui, TamaguiProvider, View } from "tamagui";
import { defaultConfig } from "@tamagui/config/v5";

import { Botao, BotaoTexto } from "../components/botoes";
import { EntradaSenha, EntradaTexto } from "../components/caixasDeTexto";
import { Titulo, Texto } from "@/components/textos";

const config = createTamagui(defaultConfig);
/*const database = useProductDatabase();*/

/* secureTextEntry -> exibe bolinhas na senha 
   keyboardType -> define o tipo do teclado */

export default function TelaInicial() {

    const [id, setId] = useState('');
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState(''); // Estado para armazenar a senha.

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
                    style={styles.pagina}
                >
                        <View style={styles.cabecalho}>
                            <Image
                                source={require("../assets/logo.png")}
                                style={styles.imagemLogo}
                            />

                            <View style={{ marginTop: 20 }}>
                                <Titulo
                                    cor="#4F2D1A"
                                    texto="Bem vindo ao Agenda Rural"
                                />
                            </View>
                        </View>

                        <View style={styles.formulario}>
                            <Texto
                                cor="#4F2D1A"
                                texto="Acesse sua conta com E-mail e Senha"
                            />

                            <View style={styles.caixaEntrada}>
                                <EntradaTexto texto="E-mail" />
                            </View>

                            <View style={styles.caixaEntrada}>
                                <EntradaSenha texto="Senha" />

                                <BotaoTexto
                                    caminho="/esqueceuSenha"
                                    texto="Esqueceu a senha?"
                                    tipo="button"
                                />
                            </View>
                        </View>

                        <View style={styles.caixaBotao}>
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
                </ScrollView>
            </KeyboardAvoidingView>
        </TamaguiProvider>
    );
}

const styles = StyleSheet.create({
    pagina: {
        height: "100%",
        backgroundColor: "#EFF5D2",
        padding: 32,
    },

    cabecalho: {
        backgroundColor: "#EFF5D2",
        padding: 0,
    },

    formulario: {
        marginTop: "15%",
        gap: 12,
    },

    caixaEntrada: {
        width: "100%",
        marginTop: 10,
    },

    caixaBotao: {
        marginTop: 24,
        marginBottom: 12,   
    },

    imagemLogo: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
        marginTop: "10%",
    },
});