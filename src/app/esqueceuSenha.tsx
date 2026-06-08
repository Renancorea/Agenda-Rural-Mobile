import { StyleSheet, ScrollView } from "react-native";
import { createTamagui, TamaguiProvider, View } from "tamagui";
import { defaultConfig } from "@tamagui/config/v5";

import { Botao, BotaoImagem } from "../components/botoes";
import { EntradaTexto } from "../components/caixasDeTexto";
import { Titulo, Texto } from "@/components/textos";

const config = createTamagui(defaultConfig);

export default function EsqueceuSenha() {
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
                <View style={styles.body}>
                    <BotaoImagem
                        caminho="/telaInicial"
                        imagem={require("../assets/return.png")}
                    />

                    <Titulo
                        cor="#8FA31E"
                        texto="Esqueceu a senha?"
                    />

                    <Texto
                        cor="#4F2D1A"
                        texto="Digite seu Email para recuperar sua senha:"
                    />

                    <View style={styles.inputBox}>
                        <EntradaTexto texto="E-mail" />
                    </View>

                    <Botao
                        caminho="/codigoEnviado"
                        texto="Seguir"
                        tipo="submit"
                    />
                </View>
            </ScrollView>
        </TamaguiProvider>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#EFF5D2",
        padding: 32,
        alignItems: "flex-start",
        width: "100%",
    },

    inputBox: {
        width: "100%",
        marginTop: 30,
    },
});