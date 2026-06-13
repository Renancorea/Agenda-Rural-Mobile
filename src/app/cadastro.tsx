import { StyleSheet, ScrollView } from "react-native";
import { Botao, BotaoImagem } from "../components/botoes";
import { createTamagui, TamaguiProvider, View } from "tamagui";

import { EntradaTexto,EntradaSenha } from "../components/caixasDeTexto";
import { defaultConfig } from "@tamagui/config/v5";
import { Titulo, TextoEtiqueta } from "@/components/textos";

const config = createTamagui(defaultConfig);

export default function Cadastro() {
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
                                      alignItems="flex-start"
                                  >
                  
                                      <BotaoImagem
                                          caminho="/telaInicial"
                                          imagem={require("../assets/return.png")}
                                      />
                                  </View>
                    <Titulo  cor="#8FA31E" texto="Crie sua conta!" />

                    <View style={styles.formulario}>
                        <View style={styles.caixaEntrada}>
                            <TextoEtiqueta cor="#4F2D1A" texto="Nome" />

                            <EntradaTexto texto="Nome" />
                        </View>

                        <View style={styles.caixaEntrada}>
                            <TextoEtiqueta  cor="#4F2D1A" texto="Email" />

                            <EntradaTexto texto="Email" />
                        </View>

                        <View style={styles.caixaEntrada}>
                            <TextoEtiqueta cor="#4F2D1A" texto="Senha" />

                            <EntradaSenha texto="Senha" />

                            <TextoEtiqueta  cor="#8FA31E" texto="Mínimo 8 caracteres" />
                        </View>

                        <View style={styles.caixaEntrada}>
                            <TextoEtiqueta cor="#4F2D1A" texto="Confirmar senha" />

                            <EntradaSenha texto="Confirmar senha" />
                        </View>
                    </View>
                    <View style={styles.caixaBotao}>
                    <Botao
                        texto="Criar"
                        caminho="/confirmacao"
                        tipo="button"
                    />
                </View>
            </ScrollView>
        </TamaguiProvider>
    );
}

const styles = StyleSheet.create({
    pagina: {
        flex: 1,
        backgroundColor: "#EFF5D2",
        padding: 32,
        width: "100%",
    },

    formulario: {
        width: "100%",
        marginTop: 30,
    },

    caixaBotao: {
        marginTop: 24,
        marginBottom: 12, 
        width: "100%",
    },

    caixaEntrada: {
        width: "100%",
        marginTop: 10,
    },
});