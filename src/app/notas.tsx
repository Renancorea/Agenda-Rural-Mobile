import { Image, ScrollView, StyleSheet } from "react-native";

/*import { useProductDatabase } from './database/useAgricultorDatabase'*/

import { defaultConfig } from "@tamagui/config/v5";
import { createTamagui, TamaguiProvider, View, XStack, YStack, Text } from "tamagui";
import { Texto, TextoFuncao } from "../components/textos";
import { BotaoImagem, BotaoImagemFuncao,BotaoImagemVari } from "../components/botoes";
import { CartaoNota } from "../components/cartoesSobrepostos";

const config = createTamagui(defaultConfig);

export default function TelaPrincipal() {
    return (
        <TamaguiProvider
    config={config}
    defaultTheme={undefined}
>

        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
            }}
            showsVerticalScrollIndicator={false}
        >
            <View
                flex={1}
                backgroundColor="#EFF5D2"
            >
            <YStack gap={15}  alignItems="center" marginTop={50}  marginBottom={180}>

            <CartaoNota
            data="02/07/2008"
            titulo="anaversarioooo"
            />
            <CartaoNota
            data="02/07/2008"
            titulo="anaversarioooo"
            />
            <CartaoNota
            data="02/07/2008"
            titulo="anaversarioooo"
            />
            <CartaoNota
            data="02/07/2008"
            titulo="anaversarioooo"
            />
            <CartaoNota
            data="02/07/2008"
            titulo="anaversarioooo"
            />
            <CartaoNota
            data="02/07/2008"
            titulo="anaversarioooo"
            />
            <CartaoNota
            data="02/07/2008"
            titulo="anaversarioooo"
            />
            <CartaoNota
            data="02/07/2008"
            titulo="anaversarioooo"
            />
            <CartaoNota
            data="02/07/2008"
            titulo="anaversarioooo"
            />
            <CartaoNota
            data="02/07/2008"
            titulo="anaversarioooo"
            />
           
            </YStack>
            
        <View
            position="absolute"
            bottom={100}
            width="100%"
            alignItems="flex-end"
        >
            <BotaoImagemFuncao
                tamanho={45}
                imagem={require("../assets/comptsIcons/criar.png")}
                onPress={() => console.log("vou bota a funcao")}
            />
        </View>

        <XStack
            position="absolute"
            bottom={0}
            paddingBottom={10}
            width="100%"
            height={80}
            backgroundColor="#C6D870"
            alignItems="center"
            justifyContent="space-evenly"
            >
            <BotaoImagem
                caminho="/telaPrincipal"
                imagem={require("../assets/lowBarIcons/principal.png")}
                />

            <BotaoImagem
                caminho="/calendario"
                imagem={require("../assets/lowBarIcons/calendario.png")}
                />

            <BotaoImagemVari
                caminho="/notas"
                imagem={require("../assets/lowBarIcons/notasSele.png")}
                />

            <BotaoImagem
                caminho="/clima"
                imagem={require("../assets/lowBarIcons/clima.png")}
                />
        </XStack>
                
                        </View>
                        </ScrollView>

</TamaguiProvider>
    )};
