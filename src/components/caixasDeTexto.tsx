import { Input} from "tamagui";
import { BotaoImagemFuncao } from "./botoes";
import {TextInput} from "react-native";

type Props = {
    texto: string;
    senha: 0 | 1;
}

export function EntradaTexto ( texto: Props) {
    return (
        <Input
        height= {45}
        borderColor= "#4F2D1A"
        borderWidth= {1}
        marginBottom= {12}
        borderRadius= {4}
        alignItems= "center"
        fontSize= {20}
        placeholder={texto.texto}
        > 
        </Input>
    )
}
export function EntradaSenha ({ texto, senha }: Props) {
    var seguro = true;
    if (senha === 1) {
        seguro = false;
    }
    
    return (
        <TextInput
        style={{
        height: 45,
        borderColor: "#4F2D1A",
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 4,
        alignItems: "center",
        fontSize: 20,
        }}
        placeholder={texto}
        secureTextEntry= {seguro}
        >
        <BotaoImagemFuncao imagem= {require("../assets/olho.png")} />
        </TextInput>
    )
}
