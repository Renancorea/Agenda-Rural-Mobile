import { Button, Text } from "tamagui";
import { router } from "expo-router";
import { Image } from "react-native"


type Rotas =
    | "/cadastro"
    | "/confirmacao"
    | "/esqueceuSenha"
    | "/telaInicial"
    | "/codigoEnviado";

type Tipos =
    | "submit"
    | "button"
    | "reset";

type Props = {
    texto: string;
    caminho: Rotas;
    tipo: Tipos;
}

export function Botao({ texto, caminho, tipo }: Props) {
    return (

        <Button
            backgroundColor='#8FA31E'
            height={50}
            borderRadius={10}
            alignItems='center'
            justifyContent='center'
            width="100%"
            fontSize={24}
            color='#EFF5D2'
            margin='auto'
            fontWeight="bold"
            bottom={5}
            type={tipo}
            pressStyle={{
                scale: 0.98,
                backgroundColor: '#768618'
            }}

            onPress={() => router.push(caminho)}
        >{texto}</Button>

    )
}
export function BotaoCartao({ texto, tipo }: { texto: string; tipo: Tipos }) {

    return (

        <Button
            type={tipo}
            backgroundColor="#EFF5D2"
            height={50}
            borderRadius={10}
            alignItems='center'
            justifyContent='center'
            width="40%"
            color="#4F2D1A"
            fontSize={24}
            margin='auto'
            fontWeight="bold"
            bottom={5}
            pressStyle={{
                scale: 0.98,
                backgroundColor: '#5f3721'
            }}
        // onPress={() => function()}
        >{texto}</Button>

    )
}
export function BotaoTexto({ texto, caminho }: Props) {

    return (
        <Text
            backgroundColor="transparent"
            width="100%"
            color="#8FA31E"
            fontSize={16}
            onPress={() => router.push(caminho)}
            cursor="pointer"
            pressStyle={{
                scale: 1.02,
                color: '#768618'
            }}
        >{texto}</Text>
    )
}

export function BotaoImagem({ imagem, caminho }: { imagem: any; caminho: Rotas }) {

    return (
        <Button
            backgroundColor="transparent"
            borderWidth={0}
            pressStyle={{
                scale: 1.02,
                backgroundColor: "transparent"
            }}
            onPress={() => router.push(caminho)}
        >
            <Image
                source={imagem}
                style={{
                    width: 25,
                    height: 25,
                }}
            />
        </Button>
    )
}
export function BotaoImagemFuncao({ imagem, onPress }: { imagem: any; onPress: () => void }) {

    return (
        <Button
            backgroundColor="transparent"
            borderWidth={0}
            pressStyle={{
                backgroundColor: "transparent"
            }}
            onPress={onPress}
        >
            <Image
                source={imagem}
                style={{
                    width: 25,
                    height: 25,
                }}
            />
        </Button>
    )
}
