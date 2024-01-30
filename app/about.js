import React from "react";
import { Text, View, StyleSheet } from "react-native";

//componentes
import Header from "./components/header";


export default function AboutScreen() {


  //Styles--
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
});


  return (
    <View style={styles.container}>
      <Header />
      <Text> Esse é um aplicativo desenvolvido pelos alunos de graduação de química da UFRGS como projeto de extensão com
        intuito de promover a democratização da educação de físico química levando o conhecimento de dentro de sala de aula para
        qualquer um com um dispositivo IOS ou Andriod em mãos.</Text>


    </View>
  );
}
