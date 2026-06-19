import { Image, ScrollView, StyleSheet } from "react-native";

/*import { useProductDatabase } from './database/useAgricultorDatabase'*/

import { defaultConfig } from "@tamagui/config/v5";
import { createTamagui, TamaguiProvider, View, XStack, YStack, Text } from "tamagui";
import { Texto, TextoFuncao } from "@/components/textos";
import { BotaoImagem, BotaoImagemFuncao,BotaoImagemVari } from "../components/botoes";

const config = createTamagui(defaultConfig);

export default function TelaPrincipal() {
    return (
        <TamaguiProvider
    config={config}
    defaultTheme={undefined}
>
    <View
        flex={1}
        backgroundColor="#EFF5D2"
    >

        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
            }}
            showsVerticalScrollIndicator={false}
        >

            <View
                width={150}
                alignSelf="center"
            >
                <Text
                    color="#4f2d1a"
                    textAlign="center"
                    fontSize={18}
                >
                    Você não possui nenhuma nota
                </Text>

                <Text
                    fontSize={18}
                    marginTop={20}
                    color="#4f2d1a"
                    textAlign="center"
                >
                    aperte no ícone de + para criar
                </Text>
            </View>

        </ScrollView>

        <View
            position="absolute"
            bottom={100}
            width="100%"
            alignItems="flex-end"
        >
            <BotaoImagemFuncao
                tamanho={45}
                imagem={require("../assets/criar.png")}
                onPress={() => console.log("vou bota a funcao")}
            />
        </View>

        <XStack
            position="absolute"
            bottom={0}
            width="100%"
            height={80}
            backgroundColor="#C6D870"
            alignItems="center"
            justifyContent="space-evenly"
        >
            <BotaoImagem
                caminho="/telaPrincipal"
                imagem={require("../assets/iconesBarra/principal.png")}
            />

            <BotaoImagem
                caminho="/telaPrincipal"
                imagem={require("../assets/iconesBarra/calendario.png")}
            />

            <BotaoImagemVari
                caminho="/notas"
                imagem={require("../assets/iconesBarra/notasSele.png")}
            />

            <BotaoImagem
                caminho="/clima"
                imagem={require("../assets/iconesBarra/clima.png")}
            />
        </XStack>

    </View>
</TamaguiProvider>
    )};
