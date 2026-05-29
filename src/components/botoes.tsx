
import { Button } from "tamagui";
import { router } from "expo-router";

type Props = {
    texto: string;
    caminho: string;
}

export function Botao({ texto, caminho }: Props) {
    return (

        <Button style={{
            backgroundColor: '#8FA31E',
            height: 50,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
            width: "100%"
        }} onPress={() => router.push(caminho as any)}
        >{texto}</Button>

    )
}
export function BotaoCartao({ texto }: { texto: string }) {
    
    return (

        <Button style={{
            backgroundColor: "#EFF5D2",
            height: 50,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
            width: "40%",
            color:"#4F2D1A"
        }}
        >{texto}</Button>

    )
}

