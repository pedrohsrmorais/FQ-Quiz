import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";


// componentes
import ClickableIcon from "./components/icon";
import Header from "./components/header";

export default function LibraryScreen() {


  openPdf = (path) =>{
    console.log(path)
  }
/*
  const openPdf = async (path) => {
    try {

      const uri = FileSystem.documentDirectory + path;
      console.log(uri)
      const cUri = await FileSystem.getContentUriAsync(uri);
      console.log(cUri)

      await IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
        data: cUri,
        type: "application/pdf",
      });
    } catch (e) {
      console.log("erro");
    }
  };

  const openPdf2 = async (path) => {
    try {

      const uri = FileSystem.documentDirectory + path;
      console.log(uri)
      const cUri = await FileSystem.getContentUriAsync(uri);

      await IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
        data: cUri,
        flags: 1,
        type: "application/pdf",
      });
    } catch (e) {
      console.log("erro");
    }
  };

  const openPdf3 = async (path) => {
    try {
      // Caminho para o arquivo PDF local 
      const pdfPath = FileSystem.documentDirectory + path;

      // Leitura do conteúdo do arquivo
      const fileContent = await FileSystem.readAsStringAsync(pdfPath, { encoding: FileSystem.EncodingType.Base64 });

      // Crie um data URI a partir do conteúdo do arquivo
      const dataUri = `data:application/pdf;base64,${fileContent}`;

      // Abra o PDF usando expo-linking
      await Linking.openURL(dataUri);

    } catch (e) {
      console.error('Error opening local PDF');
    }
  };
 

   */

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
        <ScrollView>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPdf('fq_library/gas_ideal.pdf')}>
            <Text style={styles.buttonText}>Gases</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPdf('./fq_library/combustao.pdf')}>
            <Text style={styles.buttonText}>Combustão</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPdf('entalpia.pdf')}>
            <Text style={styles.buttonText}>Entalpia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPdf('entropia.pdf')} >
            <Text style={styles.buttonText}>Entropia</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPdf('energia_livre.pdf')} >
            <Text style={styles.buttonText}>Energia Livre</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPdf('fq_library/estado.pdf')} >
            <Text style={styles.buttonText}>Mudança de estados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPdf('fq_library/equilibrio.pdf')} >
            <Text style={styles.buttonText}>Equilibrio químico</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPdf('fq_library/diagrama.pdf')} >
            <Text style={styles.buttonText}>Diagrama de fases</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => openPdf('fq_library/absorbancia.pdf')} >
            <Text style={styles.buttonText}>Absorbância</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
