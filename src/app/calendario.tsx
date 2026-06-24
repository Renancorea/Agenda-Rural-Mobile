import { useState } from 'react';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { Feather } from "@expo/vector-icons";
import { ptBR } from "../app/utils/tradutorCalendario";

import {StyleSheet, ScrollView} from "react-native";
import { BotaoImagem, BotaoImagemVari, BotaoImagemFuncao } from '../components/botoes';
import { defaultConfig } from "@tamagui/config/v5";
import {createTamagui, TamaguiProvider,View, XStack} from "tamagui";
import { CartaoEvento} from '../components/cartoesSobrepostos';

const config = createTamagui(defaultConfig);

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export default function Calendario() {

    const [day, setDay] = useState<DateData>();

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
        <View flex={1} backgroundColor="#EFF5D2">


                <View style={styles.container}>

                    <Calendar
                        style={styles.calendar}

                        renderArrow={(direction) => (
                            <Feather
                                size={24}
                                color="#4F2D1A"
                                name={`chevron-${direction}`}
                            />
                        )}

                        theme={{
                            textDayHeaderFontWeight:'bold',
                            textDayFontWeight:'bold',
                            textDisabledColor: '#4F2D1A',
                            textSectionTitleColor: '#4F2D1A',
                            textMonthFontSize: 18,
                            monthTextColor: "#4F2D1A",
                            textMonthFontWeight:'bold',
                            todayBackgroundColor: "#3e181493",
                            todayTextColor: '#EFF5D2',
                            selectedDayTextColor: '#EFF5D2',
                            selectedDayBackgroundColor: '#4d230b',
                            arrowColor: '#4F2D1A',
                            calendarBackground: '#C6D870',
                            textDayStyle: {
                                color: "#4F2D1A",
                                fontWeight:"bold"
                            }
                        }}

                        minDate={new Date().toISOString()}

                        hideExtraDays

                        onDayPress={setDay}

                        markedDates={
                            day
                                ? {
                                    [day.dateString]: {
                                        selected: true
                                    }
                                }
                                : {}
                        }
                    />

                    <View marginTop={20} gap={15}>

                        <CartaoEvento
                        titulo="Titulo"
                        dia="22"
                        nomeDia="QUA"
                         />
                         <CartaoEvento
                        titulo="Titulo"
                        dia="22"
                        nomeDia="QUA"
                         />
                         <CartaoEvento
                        titulo="Titulo"
                        dia="22"
                        nomeDia="QUA"
                         />
                         <CartaoEvento
                        titulo="Titulo"
                        dia="22"
                        nomeDia="QUA"
                         />
                         <CartaoEvento
                        titulo="Titulo"
                        dia="22"
                        nomeDia="QUA"
                         />
                        <CartaoEvento
                        titulo="Titulo"
                        dia="22"
                        nomeDia="QUA"
                         />
                         <CartaoEvento
                        titulo="Titulo"
                        dia="22"
                        nomeDia="QUA"
                         />
                         <CartaoEvento
                        titulo="Titulo"
                        dia="22"
                        nomeDia="QUA"
                         />
                         <CartaoEvento
                        titulo="Titulo"
                        dia="22"
                        nomeDia="QUA"
                         />
                    </View>

                </View>

                        <View
                                    position="absolute"
                                    bottom={100}
                                    width="100%"
                                    alignItems="flex-end"
                                >
                                    <BotaoImagemFuncao
                                        tamanho={45}
                                        imagem={require("../assets/comptsIcons/criar.png")}
                                        onPress={() => console.log("vou bota a funcao")}
                                    />
                                </View>
                        <XStack
                                    position="absolute"
                                    bottom={0}
                                    paddingBottom={10}
                                    width="100%"
                                    height={80}
                                    backgroundColor="#C6D870"
                                    alignItems="center"
                                    justifyContent="space-evenly"
                                >
                                    <BotaoImagem
                                        caminho="/telaPrincipal"
                                        imagem={require("../assets/lowBarIcons/principal.png")}
                                        />
                        
                                    <BotaoImagemVari
                                        caminho="/calendario"
                                        imagem={require("../assets/lowBarIcons/calendarioSele.png")}
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

</View>
                                    </ScrollView>
        </TamaguiProvider>
    );
}
const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#EFF5D2',
        padding: 24, 
        marginBottom: 156,
    },

    calendar: {
        backgroundColor: '#C6D870',
        borderRadius: 5,
    },

    caixaEvento:{
        backgroundColor:"#5B6A18",
        borderRadius:18,
        padding:8,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
      pagina: {
        height: "100%",
        backgroundColor: "#EFF5D2",
    },  
    textoEvento:{
        color:"#EFF5D2",
        fontSize:28,
   },

    dataEvento:{
        backgroundColor:"#C6D870",
        borderRadius:12, 
        width:45,
        height:50,
        justifyContent:"center",
        alignItems:"center",
    },

    semanaEvento:{
       color:"#4F2D1A",
       fontSize:18,
    },

    diaEvento:{
       color:"#4F2D1A",
       fontSize:28,
       fontWeight:"bold",
    },

    criarEvento:{
       marginTop:10,
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center",
    },

    textoCriar:{
       color:"#4F2D1A",
       fontSize:20,
    },

    botaoMais:{
       backgroundColor:"#4F2D1A",
       width:45,
       height:45,
       borderRadius:25,
       justifyContent:"center",
       alignItems:"center",
    },
    
})