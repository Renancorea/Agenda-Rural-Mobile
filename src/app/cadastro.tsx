    import { StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView, Platform, TextInput } from "react-native" 
    import { Botao, BotaoImagem } from "../components/botoes"
    import { createTamagui, TamaguiProvider, View } from 'tamagui'
    import { defaultConfig } from '@tamagui/config/v5' // for quick config install this


    const config = createTamagui(defaultConfig)

    export default function cadastro(){
        return( 
            <TamaguiProvider config={config} defaultTheme={undefined}>
<ScrollView /*Para rolar a tela*/
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false} /*tirar a barra de rolagem*/ >

            <View style={styles.body}> 
            
                <BotaoImagem imagem={require("../assets/return.png")} caminho="/telaInicial"/>
                
                
                    <Text style={styles.title}> Crie sua conta!</Text>

                <View style={styles.form}>

                    <View style={styles.inputBox}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.label}>Senha</Text>
                        <TextInput style={styles.input}></TextInput>
                        <Text style={styles.forgotpass}>Minimo 8 caracteres</Text>
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.label}>Confirmar senha</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>

                </View>
                    
                <Botao texto="Criar" caminho="/confirmacao" />

            </View>
                </ScrollView>
            </TamaguiProvider>
        )
    }

    const styles = StyleSheet.create({
        body: {
            flex: 1,
            backgroundColor: "#EFF5D2",
            padding: 32, 
            alignItems: "flex-start",
            width:"100%"
        },

        title: {
            textAlign:"center",
            width:"100%",
            marginTop: 15,
            fontSize: 42,
            fontWeight: "bold",
            color: "#8FA31E",  
        },
        
        inputBox:{
            width:"100%",
            marginTop: 10,
        },

        label:{
            fontSize: 20,
            color:'#4F2D1A',
        },
        
        input:{
            borderWidth: 1,
            borderRadius: 5,
            width:"100%"
        },

        forgotpass:{
            fontSize:16,
            color:'#8FA31E',
        },

        form:{
            width:"100%",
            marginTop: 30,
        },

    })