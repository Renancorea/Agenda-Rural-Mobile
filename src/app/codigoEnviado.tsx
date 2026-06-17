import { StyleSheet, ScrollView } from "react-native";

import { createTamagui,TamaguiProvider,View } from "tamagui";
import { defaultConfig } from "@tamagui/config/v5";

import { BotaoImagem } from "../components/botoes";
import { Titulo, Texto, TextoFuncao } from "@/components/textos";

const config = createTamagui(defaultConfig);

export default function EsEnvioCodigo() {
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
                        texto="Senha enviada"
                    />

                    <Texto
                        cor="#4F2D1A"
                        texto="Sua senha foi enviada para seu e-mail, por favor verifique-o"
                    />

                    <TextoFuncao
                        cor="#8FA31E"
                        texto="Reenviar em 1:20"
                        posicao="center"
                        tamanho={16}
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