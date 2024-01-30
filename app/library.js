import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { router } from 'expo-router';

//componentes
import ClickableIcon from "./components/icon";
import Header from "./components/header";


export default function LibraryScreen() {

  const icon = [{ iconName: 'book', label: ' ', onPress: () => { } },
  ];


  //////////STYLES
  const styles = StyleSheet.create({
    container: {
      flex: 1,

      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      paddingHorizontal: 20,
    },

    levelsContainer: {
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
      borderRadius: 8,
      borderRadius: 40,
      padding: 10,
      marginVertical: 12,
      backgroundColor: '#171a66',
      borderRadius: 40,
      alignItems: 'center',


    },
    buttonText: {
      fontSize: 16,
      color: '#ffffff',
      fontWeight: 'bold',
    },
    imagemStyle: {
      position: 'absolute',

      width: 400,
      height: 550,
      resizeMode: 'cover',
    }



  });

  return (
    <View style={styles.container}>
      <Header />


      <ClickableIcon {...icon[0]} />

      <View style={styles.levelsContainer}>
        <ScrollView >



          <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/fq_library/gases')}>
            <Text style={styles.buttonText}>Gases</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/fq_library/combustao')}>
            <Text style={styles.buttonText}>Combustão</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/fq_library/entalpia')}>
            <Text style={styles.buttonText}>Entalpia</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/fq_library/entropia')} >
            <Text style={styles.buttonText}>Entropia</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/fq_library/temperatura')} >
            <Text style={styles.buttonText}>Temperatura</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/fq_library/energia_livre')} >
            <Text style={styles.buttonText}>Energia Livre</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/fq_library/estado')} >
            <Text style={styles.buttonText}>Mudança de estados</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/fq_library/equilibrio')} >
            <Text style={styles.buttonText}>Equilibrio químico</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/fq_library/diagrama')} >
            <Text style={styles.buttonText}>Diagrama de fases</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/fq_library/absorbancia')} >
            <Text style={styles.buttonText}>Absorbância</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}