import { router } from "expo-router";
import { ImageBackground } from "react-native";
import { Checkbox, Input, XStack,YStack,Button,View, Text } from "tamagui";
import { BotaoImagemFuncao } from "./botoes";
import { TextoFuncao } from "./textos";

type Props={
    titulo: string
    data: string
}
export function CartaoNota( {titulo, data}: Props){
    return(
        <XStack
        alignItems="center"
        borderRadius={20}
        height={62}
        width="80%"
        backgroundColor="#57601F"
        >
            <YStack marginHorizontal={20} width={150}>
            <TextoFuncao
            cor="#EFF5D2"
            posicao="left"
            tamanho={22}
            texto={titulo}
            />
            <TextoFuncao
            cor="#EFF5D2"
            posicao="left"
            tamanho={14}
            texto={data}
            />
            </YStack>
            <XStack
            gap={0}
            >
            <BotaoImagemFuncao
            onPress={() => console.log("vou bota a funcao do lixo")}
            tamanho={25}
            imagem={require("../assets/comptsIcons/lixo.png")}
            />
            <BotaoImagemFuncao
            onPress={() => console.log("vou bota a funcao de editar")}
            tamanho={25}
            imagem={require("../assets/comptsIcons/editar.png")}
            />
            </XStack>
        </XStack>
    );
}
export function CartaoEvento ({titulo, dia, nomeDia}: {titulo: string; dia: string, nomeDia: string}){
    return(
        <XStack
        alignItems="center"
        borderRadius={20}
        height={62}
        width="100%"
        backgroundColor="#4F2D1A"
        >
            <View marginHorizontal={20} width={244}>
            <TextoFuncao
            cor="#EFF5D2"
            posicao="left"
            tamanho={22}
            texto={titulo}
            />
            </View>

            
        <ImageBackground
            source={require("../assets/comptsIcons/caixaEvento.png")}
            resizeMode="contain"
            style={{
            width: 48,
            }}
            >
            <YStack
            gap={0} justifyContent="flex-start"
            alignContent="flex-start"
            alignItems="center"
            marginBottom={10}
            >

            <TextoFuncao
            cor="#4F2D1A"
            posicao="center"
            tamanho={16}
            texto={nomeDia}
            
            />
        <TextoFuncao
            cor="#EFF5D2"
            posicao="center"
            tamanho={18}
            texto={dia}
            
            />
            </YStack>

        </ImageBackground> 
            

        </XStack>
    )
}

/*<View
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
            </View>*/