import { Image, ScrollView, StyleSheet } from "react-native";

/*import { useProductDatabase } from './database/useAgricultorDatabase'*/

import { defaultConfig } from "@tamagui/config/v5";
import { createTamagui, TamaguiProvider, View, XStack, YStack } from "tamagui";

import { Entratadamarcar } from "@/components/caixasDeTexto";
import { Texto, TextoFuncao } from "@/components/textos";
import { BotaoImagem, BotaoImagemFuncao,BotaoImagemVari } from "../components/botoes";

const config = createTamagui(defaultConfig);

export default function TelaPrincipal() {
    return (
        <TamaguiProvider
            config={config}
            defaultTheme={undefined}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                style={{
                    height:"100%",
                    backgroundColor:"#EFF5D2"
                }}
                >

                  <XStack  alignItems="center" justifyContent="space-evenly" marginTop="auto"  backgroundColor="#C6D870" width="100%" height={80} paddingBottom={10}>
                        <BotaoImagem
                        caminho="/telaPrincipal"
                        imagem={require("../assets/iconesBarra/principal.png")}
                        />
                        <BotaoImagem
                        caminho="/telaPrincipal"
                        imagem={require("../assets/iconesBarra/calendario.png")}
                        />
                        <BotaoImagem
                        caminho="/notas"
                        imagem={require("../assets/iconesBarra/notas.png")}
                        />
                        <BotaoImagemVari
                        caminho="/clima"
                        imagem={require("../assets/iconesBarra/climaSele.png")}
                        />
                </XStack>
            </ScrollView>
                </TamaguiProvider>
    )};
