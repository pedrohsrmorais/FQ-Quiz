import { View, StyleSheet, Text, ScrollView } from "react-native";
import Header from "./components/header";

export default function TutorialScreen() {
 // Estilos
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  srcContainer: {
    height: 500,
    width: 280,
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
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
  },
});

  return (
    <View style={styles.container}>
      <Header />


      <View style={styles.srcContainer}>
        <ScrollView>
          <Text style={styles.title}>Tutorial:</Text>
          <View></View>
          <Text style={styles.text}> Os níveis 1 e 2 possuem os mesmos conteúdos ordenados em ordem de dificuldade, já o nível 3 exige um melhor conhecimento matemático a respeito
          dos conteúdos supracitados. As respostas do nível 3 são dadas em todas casas decimais possíveis usando ponto como separador numérico (exemplo: 14,2 = 14.2). É altamente recomendável o consumo dos pdfs
          na aba "conteúdo" antes do questionário do nível 3.</Text>
          
        </ScrollView>
      </View>
    </View>
  );
};
