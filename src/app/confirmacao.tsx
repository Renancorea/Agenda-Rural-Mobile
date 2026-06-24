import { StyleSheet, ScrollView } from "react-native";

import {
    createTamagui,
    TamaguiProvider,
    View,
} from "tamagui";
import { defaultConfig } from "@tamagui/config/v5";

import { BotaoImagem, Botao } from "../components/botoes";
import { EntradaCodigo } from "../components/caixasDeTexto";
import { Titulo, Texto } from "../components/textos";

const config = createTamagui(defaultConfig);

export default function Confirmacao() {
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
                        texto="Confirmação!"
                    />

                    <Texto
                        cor="#4F2D1A"
                        texto="Para confirmarmos a criação da sua conta enviamos o código de verificação para o e-mail que você cadastrou, insira-o abaixo:"
                    />

                    <EntradaCodigo />

                    <Botao
                        texto="Criar"
                        caminho="/confirmacao"
                        
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
});