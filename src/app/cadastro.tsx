import { StyleSheet, Text, ScrollView, View } from "react-native";
import { Botao, BotaoImagem } from "../components/botoes";
import { createTamagui, TamaguiProvider } from "tamagui";

import { EntradaTexto,EntradaSenha } from "../components/caixasDeTexto";
import { defaultConfig } from "@tamagui/config/v5";
import { Titulo, Texto, TextoEtiqueta, TextoFuncao } from "@/components/textos";

const config = createTamagui(defaultConfig);

export default function Cadastro() {
    return (
        <TamaguiProvider
            config={config}
            defaultTheme={undefined}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.pagina}>
                    <BotaoImagem
                        imagem={require("../assets/return.png")}
                        caminho="/telaInicial"
                    />

                    <Titulo  cor="#8FA31E" texto="Crie sua conta!" />

                    <View style={styles.formulario}>
                        <View style={styles.inputBox}>
                            <TextoEtiqueta cor="#4F2D1A" texto="Nome" />

                            <EntradaTexto texto="Nome" />
                        </View>

                        <View style={styles.inputBox}>
                            <TextoEtiqueta  cor="#4F2D1A" texto="Email" />

                            <EntradaTexto texto="Email" />
                        </View>

                        <View style={styles.inputBox}>
                            <TextoEtiqueta cor="#4F2D1A" texto="Senha" />

                            <EntradaSenha texto="Senha" />

                            <TextoEtiqueta  cor="#8FA31E" texto="Mínimo 8 caracteres" />
                        </View>

                        <View style={styles.inputBox}>
                            <TextoEtiqueta cor="#4F2D1A" texto="Confirmar senha" />

                            <EntradaSenha texto="Confirmar senha" />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Botao
                        texto="Criar"
                        caminho="/confirmacao"
                        tipo="button"
                    />
                </View>
                </View>
            </ScrollView>
        </TamaguiProvider>
    );
}

const styles = StyleSheet.create({
    pagina: {
        flex: 1,
        backgroundColor: "#EFF5D2",
        padding: 32,
        alignItems: "flex-start",
        width: "100%",
    },

    formulario: {
        width: "100%",
        marginTop: 30,
    },

    buttonContainer: {
        marginTop: 24,
        marginBottom: 12, 
        width: "100%",
    },

    inputBox: {
        width: "100%",
        marginTop: 10,
    },
});