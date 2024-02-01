import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";
import RNFS from 'react-native-fs';

//componentes
import ClickableIcon from "./components/icon";
import Header from "./components/header";


export default function LibraryScreen() {


  const downloadPdf = async (library_path) => {
    const sourcePath = RNFS.DocumentDirectoryPath + library_path

    try {
      // Copia o arquivo do diretório de ativos para o armazenamento do dispositivo
      await RNFS.copyFileAssets(library_path, sourcePath);

      // Abre o PDF após a cópia bem-sucedida
      showPDF(sourcePath);
    } catch (error) {
      console.error('Error copying or opening PDF', error);
      Alert.alert('Error', 'Failed to copy or open the PDF.');
    }
  };

  const showPDF = (filePath) => {
    // Implemente a lógica para exibir o PDF aqui
    console.log('Abrir PDF em:', filePath);
    // Pode ser aberto com a biblioteca RNCustomPDFView ou outra biblioteca de visualização de PDF
  };

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



          <TouchableOpacity style={styles.buttonContainer} onPress={() => downloadPdf('../fq_library/gas_ideal.pdf')}>
            <Text style={styles.buttonText}>Gases</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => downloadPdf('fq_library/combustao.pdf')}>
            <Text style={styles.buttonText}>Combustão</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => downloadPdf('fq_library/entalpia.pdf')}>
            <Text style={styles.buttonText}>Entalpia</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => downloadPdf('fq_library/entropia.pdf')} >
            <Text style={styles.buttonText}>Entropia</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => downloadPdf('fq_library/energia_livre.pdf')} >
            <Text style={styles.buttonText}>Energia Livre</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('fq_library/estado.pdf')} >
            <Text style={styles.buttonText}>Mudança de estados</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => downloadPdf('fq_library/equilibrio.pdf')} >
            <Text style={styles.buttonText}>Equilibrio químico</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('fq_library/diagrama.pdf')} >
            <Text style={styles.buttonText}>Diagrama de fases</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('fq_library/absorbancia.pdf')} >
            <Text style={styles.buttonText}>Absorbância</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}