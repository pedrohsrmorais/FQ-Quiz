import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { router } from "expo-router";

// Components
import ClickableIcon from "./components/icon";
import Header from "./components/header";

export default function LibraryScreen() {

  const [png_src, setpng_src] = useState(null)

  function openPng(src_name) {

    router.push({
      pathname: "./components/reader",
      params: {
        src_name: src_name,
      },
    });

  }

  const icon = [{ iconName: 'book', label: ' ', onPress: () => { } }];

  //////////STYLES
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      paddingHorizontal: 20,
    },
    srcContainer: {
      height: 400,
      marginBottom: 20,
      backgroundColor: '#ffffff',
      marginTop: 20,
      padding: 20,
      borderRadius: 10,
      elevation: 9,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 3,
    },
    buttonContainer: {
      marginVertical: 12,
      padding: 10,
      backgroundColor: '#171a66',
      borderRadius: 40,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 16,
      color: '#ffffff',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <Header />
      {png_src === null && <ClickableIcon {...icon[0]} />}

      <View style={styles.srcContainer}>
        <ScrollView>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPng('gas_ideal')}>
            <Text style={styles.buttonText}>Gases</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPng('combustao')}>
            <Text style={styles.buttonText}>Combustão</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPng('entalpia')}>
            <Text style={styles.buttonText}>Entalpia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPng('entropia')} >
            <Text style={styles.buttonText}>Entropia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPng('energia_livre')} >
            <Text style={styles.buttonText}>Energia Livre</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPng('estados')} >
            <Text style={styles.buttonText}>Mudança de estados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPng('equilibrio')} >
            <Text style={styles.buttonText}>Equilibrio químico</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPng('fases')} >
            <Text style={styles.buttonText}>Diagrama de fases</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPng('absorbancia')} >
            <Text style={styles.buttonText}>Absorbância</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>


      {png_src !== null && Object.keys(png_src).map((key, index) => (
        <Image source={png_src[key]} key={index} style={styles.imagem_lib_Style} />
      ))}



    </View>
  );
}
