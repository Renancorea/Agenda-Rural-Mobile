import { Button, TextInput, View, StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native"


/*não ser visivel a senha (editable={false}) 
  a bolinha na senha (secureTextEndry)
  (keyboardType="") seria o tipo de teclado*/

export default function Tela_Inicial() {
    return (

        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: "padding", android: "height" })}>
            <ScrollView /*Para rolar a tela*/
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false} /*tirar a barra de rolagem*/
            >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image source={require("../assets/logo.png")} style={styles.illustration_logo} />
                        <Text style={styles.title}>Bem vindo ao Agenda Rural</Text>
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.subtitle}>Acesse sua conta com E-mail e Senha</Text>
                        <TextInput style={styles.input} placeholder="E-mail" />
                        <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" />
                        <Text style={styles.forgotpass}> Esqueceu a senha?</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                         <Text style={styles.singin}> Não tem uma conta? Cadastre-se</Text>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({

    container: {
        height: "100%",
        backgroundColor: '#EFF5D2',
        padding: 32,
    },
    header: {
        textAlign: "center",
        alignItems: "center",
        backgroundColor: '#EFF5D2',
        padding: 0,
    },
    input: {
        height: 45,
        borderColor: '#000000',
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 4,
        fontSize: 20,
        paddingHorizontal: 8,

    },
    buttonContainer: {
        marginTop: 24,
    },
    button: {
        backgroundColor: '#8FA31E',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
      
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    illustration_logo: {
        width: "100%",
        height: 200,
        resizeMode: "contain", /*ajustar no tamanho sugerido*/
        marginTop: "10%",
    },

    title: {
        textAlign: "center",
        height: 100,
        width: "80%",
        fontSize: 38,
        fontWeight: 900,
        color: '#4F2D1A'
    },

    singin: {
        marginTop: 12,
        textAlign: 'left',
        color: "#8FA31E",
    },
     forgotpass: {
        textAlign: 'left',
        color: "#8FA31E",
    },
    subtitle: {
        width: "100%",
        fontSize: 16,
        textAlign: "center",
    },

    form: {
        marginTop: "15%",
        gap: 12,
    },


    footerLink: {
        color: '#e93650',
        fontWeight: 700,

    },
})