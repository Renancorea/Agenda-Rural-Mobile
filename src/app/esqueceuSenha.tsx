import { StyleSheet, ScrollView } from "react-native";
import { createTamagui, TamaguiProvider, View } from "tamagui";
import { defaultConfig } from "@tamagui/config/v5";

import { Botao, BotaoImagem } from "../components/botoes";
import { EntradaTexto } from "../components/caixasDeTexto";
import { Titulo, Texto } from "../components/textos";

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
                style={styles.pagina}
            >
                <View
                    alignItems="flex-start"
                >

                    <BotaoImagem
                        caminho="/telaInicial"
                        imagem={require("../assets/return.png")}
                    />
                </View>

                    <Titulo
                        cor="#8FA31E"
                        texto="Esqueceu a senha?"
                    />

                    <Texto
                        cor="#4F2D1A"
                        texto="Digite seu Email para recuperar sua senha:"
                    />

                    <View style={styles.caixaEntrada}>
                        <EntradaTexto texto="E-mail" />
                    </View>

                    <Botao
                        caminho="/codigoEnviado"
                        texto="Seguir"
                        
                    />
            </ScrollView>
        </TamaguiProvider>
    );
}

const styles = StyleSheet.create({
    pagina: {
        flex: 1,
        backgroundColor: "#EFF5D2",
        padding: 32,
        width: "100%",
    },

    caixaEntrada: {
        width: "100%",
        marginTop: 30,
    },
});