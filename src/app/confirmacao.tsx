import { TouchableOpacity, Button, View, StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView, Platform, TextInput } from "react-native" 
import { Link } from "expo-router"

export default function confirmacao(){
    return(
        <View style={styles.body}>

            <TouchableOpacity>
                <Image source={require("../assets/return.png")}style={styles.seta} />
            </TouchableOpacity>

            <Text style={styles.title}> Confirmação!</Text>
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

    title:{
        textAlign:"center",
        width:"100%",
        marginTop: 15,
        fontSize: 42,
        fontWeight: "bold",
        color: "#8FA31E",  
    }

})
    
        
       