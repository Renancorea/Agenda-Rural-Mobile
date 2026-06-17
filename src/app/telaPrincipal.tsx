import { Image, ScrollView, StyleSheet } from "react-native";

/*import { useProductDatabase } from './database/useAgricultorDatabase'*/

import { defaultConfig } from "@tamagui/config/v5";
import { createTamagui, TamaguiProvider, View, XStack, YStack } from "tamagui";

import { Entratadamarcar } from "@/components/caixasDeTexto";
import { Texto, TextoFuncao } from "@/components/textos";
import { BotaoImagem, BotaoImagemFuncao } from "../components/botoes";

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
                style={styles.pagina}
            >
                <View
                alignItems="center"
                paddingHorizontal={36}
                >

                <View marginVertical={10}
                    alignItems="flex-start"
                >
                    <BotaoImagemFuncao
                        imagem={require("../assets/menu.png")}
                        onPress={() => console.log("vou bota a funcao")}
                    />
                </View>
                <XStack
                    height={130}
                    borderRadius={20}
                    backgroundColor="#57601F"
                    alignItems="center"
                >
                    <View

                        justifyContent="flex-start"
                    >
                        <TextoFuncao
                            cor="#C6D870"
                            texto="5:55"
                            posicao="center"
                            tamanho={70}
                        />
                        <View marginTop={10} marginBottom={-10}
                        >
                            <TextoFuncao
                                cor="#C6D870"
                                texto="02/07 sex"
                                posicao="center"
                                tamanho={40}
                            />
                        </View>
                    </View>

                    <View
                        flex={1}
                        justifyContent="flex-start"
                    >
                        <TextoFuncao
                            cor="#C6D870"
                            texto="31"
                            posicao="center"
                            tamanho={96}
                        />

                        <XStack
                            alignSelf="center"
                            marginTop={20}
                            marginBottom={-20}
                            gap={10}
                            alignItems="center"
                        >
                            <Image source={require("../assets/sol.png")} />

                            <Texto
                                cor="#C6D870"
                                texto="cedro"
                            />
                        </XStack>
                    </View>
                </XStack>

                <View backgroundColor="#C6D870" borderRadius={20} marginVertical={30} width="85%">
                    <View borderBottomWidth={2} borderColor="#57601F">

                        <TextoFuncao
                            cor="#57601F"
                            posicao="center"
                            tamanho={40}
                            texto="Lembretes"
                        />
                    </View>
                    <YStack marginTop={30} >

                        <View
                            margin="auto" borderTopWidth={1} borderColor="#57601F" width="90%" height={30}>
                            <Entratadamarcar texto="aiai"></Entratadamarcar>
                        </View>
                        <View
                            margin="auto" borderTopWidth={1} borderColor="#57601F" width="90%" height={30}>
                            <Entratadamarcar texto="uiuiui"></Entratadamarcar>
                        </View>
                        <View
                            margin="auto" borderTopWidth={1} borderColor="#57601F" width="90%" height={30}>
                            <Entratadamarcar texto="mamaeaaiaia"></Entratadamarcar>
                        </View>
                        <View
                            margin="auto" borderTopWidth={1} borderColor="#57601F" width="90%" height={30}>
                        </View>
                        <View
                            margin="auto" borderTopWidth={1} borderColor="#57601F" width="90%" height={30}>
                        </View>
                        <View
                            margin="auto" borderTopWidth={1} borderColor="#57601F" width="90%" height={30}>
                        </View>
                        <View
                            margin="auto" borderTopWidth={1} borderColor="#57601F" width="90%" height={30}>
                        </View>
                        <View
                            margin="auto" borderTopWidth={1} borderColor="#57601F" width="90%" height={30}>
                        </View>
                        <View
                            margin="auto" borderTopWidth={1} borderColor="#57601F" width="90%" height={30}>
                        </View>

                    </YStack>
                </View>

                    </View>
                <XStack  alignItems="center" justifyContent="space-evenly" marginTop="auto"  backgroundColor="#C6D870" width="100%" height={70}>
                        <BotaoImagem
                        caminho="/telaPrincipal"
                        imagem={require("../assets/iconesBarra/principalSele.png")}
                        />
                        <BotaoImagem
                        caminho="/telaPrincipal"
                        imagem={require("../assets/iconesBarra/calendario.png")}
                        />
                        <BotaoImagem
                        caminho="/telaPrincipal"
                        imagem={require("../assets/iconesBarra/notas.png")}
                        />
                        <BotaoImagem
                        caminho="/telaPrincipal"
                        imagem={require("../assets/iconesBarra/clima.png")}
                        />
                </XStack>

            </ScrollView>
        </TamaguiProvider>
    );
}
const styles = StyleSheet.create({
    pagina: {
        height: "100%",
        backgroundColor: "#EFF5D2",
    },

});