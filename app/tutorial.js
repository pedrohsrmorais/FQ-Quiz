import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

//componentes
import Header from "./components/header";

export default function TutorialScreen() {


   //////////STYLES
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
    <View  style={styles.container}>
      < Header />
        <Text> Conteúdos Do Nível 1:</Text>
    </View>
  );
}
