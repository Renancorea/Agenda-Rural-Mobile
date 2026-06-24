import { Image, ScrollView, StyleSheet } from "react-native";

/*import { useProductDatabase } from './database/useAgricultorDatabase'*/

import { defaultConfig } from "@tamagui/config/v5";
import { createTamagui, TamaguiProvider, View, XStack, YStack } from "tamagui";

import { EntratadaMarcar } from "../components/caixasDeTexto";
import { Texto, TextoFuncao } from "../components/textos";
import { BotaoImagem, BotaoImagemFuncao,BotaoImagemVari } from "../components/botoes";

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

                <View 
                    marginVertical={10}
                    alignItems="flex-start" 
                    width="100%"
                >
                    <BotaoImagemFuncao
                        tamanho={25}
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
                    height={130}
                    >
                        <TextoFuncao
                            cor="#C6D870"
                            texto="5:55"
                            posicao="center"
                            tamanho={50}
                        />
                            <TextoFuncao
                                cor="#C6D870"
                                texto="02/07 sex"
                                posicao="center"
                                tamanho={40}
                            />
                        
                    </View>

                    <View
                        height={130}
                        flex={1}
                        justifyContent="center"
                    >
                        <TextoFuncao
                            cor="#C6D870"
                            texto="31"
                            posicao="center"
                            tamanho={80}
                        />

                        <XStack
                            paddingHorizontal="20%"
                            paddingVertical={10}
                            paddingBottom="20%"
                            alignItems="center"
                        >
                            <Image source={require("../assets/sol.png")}/>
                            <TextoFuncao
                                cor="#C6D870"
                                texto="cedro"
                                posicao=""
                                tamanho={16}
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
                            <EntratadaMarcar texto="aiai"></EntratadaMarcar>
                        </View>
                        <View
                            margin="auto" borderTopWidth={1} borderColor="#57601F" width="90%" height={30}>
                            <EntratadaMarcar texto="uiuiui"></EntratadaMarcar>
                        </View>
                        <View
                            margin="auto" borderTopWidth={1} borderColor="#57601F" width="90%" height={30}>
                            <EntratadaMarcar texto="mamaeaaiaia"></EntratadaMarcar>
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
                <XStack  alignItems="center" justifyContent="space-evenly" marginTop="auto"  backgroundColor="#C6D870" width="100%" height={80} paddingBottom={10}>
                        <BotaoImagemVari
                        caminho="/telaPrincipal"
                        imagem={require("../assets/lowBarIcons/principalSele.png")}
                        />
                        <BotaoImagem
                        caminho="/calendario"
                        imagem={require("../assets/lowBarIcons/calendario.png")}
                        />
                        <BotaoImagem
                        caminho="/notas"
                        imagem={require("../assets/lowBarIcons/notas.png")}
                        />
                        <BotaoImagem
                        caminho="/clima"
                        imagem={require("../assets/lowBarIcons/clima.png")}
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