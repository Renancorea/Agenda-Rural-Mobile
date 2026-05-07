/*import { View, Text } from "react-native"

export default function Cadastro(){
    return (
        <View>
            <Text> Cadastre-se </Text>
        </View>
    )
}*/

import { View, StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native"

export default function Cadastro(){
  return(

    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ios:"padding", android:"height"})}>
    <ScrollView 
        contentContainerStyle={{ flexGrow: 1}} /**/
        keyboardShouldPersistTaps="handled" /**/
        showsVerticalScrollIndicator={false} /*Tirar a barra de rolagem*/
    >
          <View style={styles.container}>

            <Image 
             source={require("../assets/logo.png")}
                style={styles.illustration_logo}/>

            <Text style={styles.title}> Agenda Rural </Text>

            <View style={styles.form}>
                <input placeholder="E-mail" />
                <input placeholder="Senha "/>
               
            </View> 

            <Text style={styles.footerText}>Não tem uma conta? {" "}
                
            </Text>

        </View>
    </ScrollView>
    </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#EFF5D2',
        padding: 32,
    },

    illustration_logo: {
        width: "100%",
        height: 330,
        resizeMode: "contain",
        marginTop: 62,
    },

    title: {
        fontSize: 32,
        fontWeight: 900,
        color: '#4F2D1A'
    },

    form: {
        marginTop: 24,
        gap: 12,
    },

    footerText: {
        textAlign: 'center',
        marginTop: 24,
        color: "#0505bb",
    },

    footerLink: {
        color: '#e93650',
        fontWeight: 700,

    },
})