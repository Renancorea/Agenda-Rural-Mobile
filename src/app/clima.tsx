import { Image, ScrollView, StyleSheet } from "react-native";

/*import { useProductDatabase } from './database/useAgricultorDatabase'*/

import { defaultConfig } from "@tamagui/config/v5";
import { createTamagui, TamaguiProvider, View, XStack, YStack } from "tamagui";
import { Texto, TextoFuncao } from "../components/textos";
import { BotaoImagem,BotaoImagemVari } from "../components/botoes";

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
                style={{
                    height:"100%",
                    backgroundColor:"#EFF5D2"
                }}
                >
                    <XStack alignItems="center"
                    justifyContent="space-between"
                    marginTop={30}
                    paddingHorizontal={20}
                    width="100%"
                    >
                        <YStack
                        
                        alignItems="center"
                        justifyContent="center"
                        >
                            
                            <TextoFuncao
                            posicao="center"
                            cor="#4F2D1A"
                            tamanho={18}
                            texto="Cedro"
                            />
                            <TextoFuncao
                            posicao="center"
                            cor="#4F2D1A"
                            tamanho={60}
                            texto="31"
                            />
                            <TextoFuncao
                            posicao="center"
                            cor="#4F2D1A"
                            tamanho={18}
                            texto="Nublado"
                            />
                        </YStack>
                        <Image
                        source={require("../assets/wheterIcons/nubladoGrande.png")}
                        />
                    </XStack>
                    <YStack width="100%" marginTop={30}>
                        <XStack justifyContent="space-evenly">
                            <TextoFuncao
                            posicao="el"
                            cor="#4F2D1A"
                            tamanho={18}
                            texto="Dom"
                            />
                            <TextoFuncao
                            posicao="center"
                            cor="#4F2D1A"
                            tamanho={18}
                            texto="Seg"
                            />
                            <TextoFuncao
                            posicao="center"
                            cor="#4F2D1A"
                            tamanho={18}
                            texto="Ter"
                            />
                            <TextoFuncao
                            posicao="center"
                            cor="#4F2D1A"
                            tamanho={18}
                            texto="Qua"
                            />
                            <TextoFuncao
                            posicao="center"
                            cor="#4F2D1A"
                            tamanho={18}
                            texto="Qui"
                            />
                            <TextoFuncao
                            posicao="center"
                            cor="#4F2D1A"
                            tamanho={18}
                            texto="Sex"
                            />
                            <TextoFuncao
                            posicao="center"
                            cor="#4F2D1A"
                            tamanho={18}
                            texto="Sab"
                            />
                        </XStack>
                        <XStack justifyContent="space-evenly">
                            <Image source={require("../assets/wheterIcons/ensolarado.png")} height={25} style={{ margin:3 }}/>
                            <Image source={require("../assets/wheterIcons/ensolarado.png")} height={25} style={{ margin:3 }}/>
                            <Image source={require("../assets/wheterIcons/ensolarado.png")} height={25} style={{ margin:3 }}/>
                            <Image source={require("../assets/wheterIcons/nubladoTotal.png")} height={25} style={{ margin:3 }}/>
                            <Image source={require("../assets/wheterIcons/nublado.png")} height={25} style={{ margin:3 }}/>
                            <Image source={require("../assets/wheterIcons/chuvaRaio.png")} height={25} style={{ margin:3 }}/>
                            <Image source={require("../assets/wheterIcons/nublado.png")} height={25} style={{ margin:3 }}/>
                        </XStack>
                    </YStack>
                    <YStack marginTop={40} alignItems="center">
                    <TextoFuncao
                    cor="#57601F"
                    posicao="center"
                    tamanho={26}
                    texto="Possibilidade de chuva:"
                    />
                    <View backgroundColor="#57601F" width={150} borderRadius={13} height={60} alignSelf="center" marginTop={15}> 
                        <TextoFuncao
                        cor="#C6D870"
                        posicao="center"
                        tamanho={30}
                        texto="56%"
                        />
                    </View>
                    <TextoFuncao
                    cor="#57601F"
                    posicao="center"
                    tamanho={30}
                    texto="milimetros por mes:"
                    />
                    <View backgroundColor="#57601F" width={150} borderRadius={13} height={60} alignSelf="center" marginTop={15}> 
                        <TextoFuncao
                        cor="#C6D870"
                        posicao="center"
                        tamanho={30}
                        texto="189mm"
                        />
                    </View>
                      <TextoFuncao
                    cor="#57601F"
                    posicao="center"
                    tamanho={30}
                    texto="umidade do ar"
                    />
                    <View backgroundColor="#57601F" width={150} borderRadius={13} height={60} alignSelf="center" marginTop={15}> 
                        <TextoFuncao
                        cor="#C6D870"
                        posicao="center"
                        tamanho={30}
                        texto="79%"
                        />
                    </View>
                    </YStack>

                  <XStack  alignItems="center" justifyContent="space-evenly" marginTop="auto"  backgroundColor="#C6D870" width="100%" height={80} paddingBottom={10}>
                        <BotaoImagem
                        caminho="/telaPrincipal"
                        imagem={require("../assets/lowBarIcons/principal.png")}
                        />
                        <BotaoImagem
                        caminho="/calendario"
                        imagem={require("../assets/lowBarIcons/calendario.png")}
                        />
                        <BotaoImagem
                        caminho="/notas"
                        imagem={require("../assets/lowBarIcons/notas.png")}
                        />
                        <BotaoImagemVari
                        caminho="/clima"
                        imagem={require("../assets/lowBarIcons/climaSele.png")}
                        />
                </XStack>
            </ScrollView>
                </TamaguiProvider>
    )};
