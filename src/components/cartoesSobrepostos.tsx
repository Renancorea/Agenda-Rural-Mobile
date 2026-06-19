import { router } from "expo-router";
import { Image } from "react-native";
import { Checkbox, Input, XStack,YStack,Button,View, Text } from "tamagui";
import { BotaoImagemFuncao } from "./botoes";
import { TextoFuncao } from "./textos";

export function CartaoNota(){
    return(
        <View
        height={60}
        width="80%"
        backgroundColor="#57601F"
        >
            <YStack>
            <TextoFuncao
            cor="#EFF5D2"
            posicao="center"
            tamanho={24}
            texto="Titulo 1"
            />
            <TextoFuncao
            cor="#EFF5D2"
            posicao="center"
            tamanho={16}
            texto="02/07/2026"
            />
            </YStack>
            <BotaoImagemFuncao
            onPress={() => console.log("vou bota a funcao do lixo")}
            tamanho={30}
            imagem={require("../assets/lixo.png")}
            />
            <BotaoImagemFuncao
            onPress={() => console.log("vou bota a funcao de editar")}
            tamanho={30}
            imagem={require("../assets/editar.png")}
            />
            <XStack>


            </XStack>
        </View>
    );
}