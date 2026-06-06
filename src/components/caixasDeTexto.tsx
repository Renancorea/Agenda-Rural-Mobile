import { useState } from "react";
import { StyleSheet } from "react-native";
import { Input, XStack } from "tamagui";
import { BotaoImagemFuncao } from "./botoes";

type Props = {
    texto: string;
}

export function EntradaSenha({ texto }: Props) {
    const [seguro, setSeguro] = useState(true);
    return (
        <XStack
            alignItems="center"
            borderColor="#4F2D1A"
            borderWidth={1}
            borderRadius={4}
            marginBottom={12}
            backgroundColor="transparent"

        >
            <Input
                flex={1}
                borderWidth={0}
                placeholder={texto}
                type={seguro ? "password" : "text"}
                backgroundColor="transparent"
                color="#4F2D1A"
                height={45}
                borderColor="#4F2D1A"
                alignItems="center"
                fontSize={20}
                focusStyle={{
                    borderColor: "#4F2D1A",
                    outlineColor: "transparent",
                }}
            />

            <BotaoImagemFuncao
                imagem={
                    seguro
                        ? require("../assets/olhoFechado.png")
                        : require("../assets/olhoAberto.png")
                }
                onPress={() => setSeguro(!seguro)}
            ></BotaoImagemFuncao>
        </XStack>

    );
}

export function EntradaTexto({ texto }: Props) {

    return (

        <Input
            height={45}
            borderColor="#4F2D1A"
            borderWidth={1}
            marginBottom={12}
            borderRadius={4}
            alignItems="center"
            fontSize={20}
            placeholder={texto}
            backgroundColor="transparent"
            color="#4F2D1A"
            focusStyle={{
                borderColor: "#4F2D1A",
                outlineColor: "transparent",
            }}>
        </Input>
    )
}

export function EntradaCodigo() {

    return (

        <XStack
            justifyContent="center"

            backgroundColor="transparent"
        >

            <Input
                style={styles.estilo}
                focusStyle={styles.estiloFocus}
                maxLength={1}
                keyboardType="numeric">
            </Input>
            <Input
                style={styles.estilo}
                focusStyle={styles.estiloFocus}
                maxLength={1}
                keyboardType="numeric">
            </Input>
            <Input
                style={styles.estilo}
                focusStyle={styles.estiloFocus}
                maxLength={1}
                keyboardType="numeric">
            </Input>
            <Input
                style={styles.estilo}
                focusStyle={styles.estiloFocus}
                maxLength={1}
                keyboardType="numeric">
            </Input>
        </XStack>

    )
}

const styles = StyleSheet.create({
    estilo: {
        height: 65,
        borderColor: "#4F2D1A",
        borderWidth: 1,
        width: "20%",
        marginBottom: 12,
        borderRadius: 4,
        fontSize: 30,
        textAlign: "center",
        backgroundColor: "transparent",
        color: "#4F2D1A",
        margin: 8,
        marginTop: 20,
        
    },
    estiloFocus: {
        borderColor: "#4F2D1A",
        outlineColor: "transparent",
    }
});