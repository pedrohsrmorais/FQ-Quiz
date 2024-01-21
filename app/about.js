import React from "react";
import { Text, Button, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function AboutScreen() {


  return (
    <View>
      <Text> Esse é um aplicativo desenvolvido pelos alunos de graduação de química da UFRGS como projeto de extensão com
        intuito de promover a democratização da educação de físico química levando o conhecimento de dentro de sala de aula para
        qualquer um com um dispositivo IOS ou Andriod em mãos.</Text>
    </View>
  );
}
