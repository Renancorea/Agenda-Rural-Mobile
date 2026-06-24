import { defaultConfig } from "@tamagui/config/v5";
import { createTamagui, TamaguiProvider, View } from "tamagui";
import { StyleSheet, ScrollView, Alert } from "react-native";
import { useState } from "react";

// Banco de dados
//import { useAgricultorDatabase } from "./database/useAgricultorDatabase";


import { EntradaTexto,EntradaSenha } from "../components/caixasDeTexto";
import { Botao, BotaoImagem } from "../components/botoes";
import { Titulo, TextoEtiqueta } from "../components/textos";

const config = createTamagui(defaultConfig);

export default function Cadastro() {
   /* const { create } = useAgricultorDatabase();

const [nome,setNome]= useState("");
const [email,setEmail]= useState("");
const [senha,setSenha]= useState("");
const [confirmarSenha, setConfirmarSenha]= useState("");

    async function criarConta(){

        try{
            if( !nome || !email || !senha){
                return Alert.alert( "Erro", "Preencha todos os campos" );
            }

            if( senha.length < 8 ){
                return Alert.alert( "Senha", "Use no mínimo 8 caracteres" );
            }

            if( senha !== confirmarSenha ){
                return Alert.alert( "Erro", "As senhas são diferentes" );
            }

        await create({ nome, email,senha });
                Alert.alert( "Sucesso", "Conta criada!");
            }
        catch{ Alert.alert( "Erro", "Não foi possível criar"); }

}
        */
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