import {Text} from "tamagui"

type Props = {
    texto: String;
    cor: any;
}



export function Titulo({ texto, cor }: Props){
    return(
        <Text
        marginTop={10}
        textAlign= "center"
        width= "100%"
        fontSize= {42}
        fontWeight="900"
        color={cor}
        lineHeight= {42}
        >
            {texto}
        </Text>
    )
}
export function Texto({ texto, cor }: Props){
    return(
        <Text
        textAlign= "center"
        width= "100%"
        marginTop={10}
        fontSize= {16}
        fontWeight= "bold"
        color= {cor}
        >
            {texto}
        </Text>
    )
}
export function TextoEtiqueta({ texto, cor }: Props){
    return(
        <Text
        textAlign= "left"
        width= "100%"
        fontSize= {16}
        fontWeight= "bold"
        color= {cor}
        >
            {texto}
        </Text>
    )
}
export function TextoFuncao({ texto, cor, posicao, tamanho }: Props & { posicao: "center" | "left" | "right" | any; tamanho: number }){
     return(
        <Text
        textAlign= {posicao}
        margin={3}
        height={tamanho+5}
        fontSize= {tamanho}
        fontWeight= "bold"
        color= {cor}
        
        >
            {texto}
        </Text>
    )
}
