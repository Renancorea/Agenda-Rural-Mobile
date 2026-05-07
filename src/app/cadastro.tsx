import { TouchableOpacity, Button, View, StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView, Platform, TextInput } from "react-native"

export default function cadastro(){
    return(
        
        <View style={styles.body}> 
            <TouchableOpacity>
                <Image source={require("../app/assets/return.png")}style={styles.seta}/>
            </TouchableOpacity>
                <Text style={styles.title}>Crie sua conta!</Text>

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

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
        
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

     seta: {
        width: 25, 
        height: 25,
        resizeMode: "contain",
        marginTop: 40,
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
        marginBottom: 10,
        fontSize:16,
        color:'#8FA31E',
    },

    form:{
        width:"100%",
        marginTop: 30,
    },

    loginButton:{
        marginTop: "50%",
        height: 50,
        width: "100%",
        alignItems:"center",
        backgroundColor: "#8FA31E",
        borderRadius: 15,
    },

    buttonText:{
        fontSize: 30,
        color:'#EFF5D2',
        margin:'auto',
        fontWeight: "bold",
    },

})