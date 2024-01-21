import React from "react";
import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Level4() {

  const progress = async () => {
    return await AsyncStorage.getItem('progresso4');
  }

  const [questionNumber, setquestionNumber] = useState();
  const [rightQuestion, setrightQuestion] = useState();
  const [texto, setTexto] = useState('');

  useEffect(() => {
    progress().then((result) => {
      const parsedResult = parseInt(result, 10);
      setquestionNumber(parsedResult);
      setrightQuestion(parsedResult);
    });
  }, []);

  ////////////////////////////////////Datas de perguntas e respostas para o level 1
  const level4_data = [
    {
      id: 0,
      question: "Foi feita uma análise de absormétrica e a equiação gerada pela lei de lambert beer foi: y = 2x +10, qual a concentração de uma amostra que apresentou 50nm de absorção na faixa determinada ",
      answer: "20",
    },
    {
      id: 1,
      question: "Dada uma balança de edwards que o gás entrou em equilibrio com poronron pompom, qual a massa molar do gás? (dica: é um gás muito esperto)",
      answer: "32",
    },
  ];


  function nextQuestion() {


    if (questionNumber < rightQuestion) {
      setquestionNumber(questionNumber + 1);

    } else { alert("Responda a pergunta corretamente antes de avançar") }
    if (questionNumber > 2) { setquestionNumber(2) }
  }

  function previousQuestion() {
    if (questionNumber == 0) {
      return
    } else { setquestionNumber(questionNumber - 1); }

  }

  function handleAnswer() {
    if (texto == level4_data[questionNumber].answer) {
      (async () => {
        await AsyncStorage.setItem('progresso4', String(questionNumber + 1));
        setquestionNumber(questionNumber + 1);
        setrightQuestion(questionNumber + 1);
        setTexto('')

      })();


    } else {
      alert("Resposta incorreta, tente novamente")
    }
  }
  const handleChangeTexto = (novoTexto) => {
    setTexto(novoTexto);
  };
  //////////STYLES
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f9f9',
      paddingHorizontal: 20,
    },
    questionContainer: {

      width: 300,
      marginBottom: 20,
      backgroundColor: '#ffffff',
      padding: 20,
      borderRadius: 10,
      elevation: 9,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 3,
    },
    questionText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333333',
      textAlign: 'center',
      fontStyle: 'italic',
      paddingBottom: 30,
      paddingTop: 8,
    },
    optionButton: {
      padding: 10,
      marginVertical: 12,
      backgroundColor: '#4e2ef0',
      borderRadius: 8,
      alignItems: 'center',
    },
    optionText: {
      fontSize: 16,
      color: '#ffffff',
      fontWeight: 'bold',
    },
    endText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333333',
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 40,

    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    input: {
      borderWidth: 1, // Adiciona uma borda
      borderColor: 'black', // Define a cor da borda como preta
      borderRadius: 8, // Opcional: Adiciona cantos arredondados
      padding: 10, // Opcional: Adiciona um preenchimento interno
      color: '#648efa',
      marginBottom: 20,
    },
  });

  return (
    <View style={styles.container}>
      {level4_data[questionNumber] ? (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {level4_data[questionNumber]?.question}
          </Text>
          <TextInput style={styles.input}
            placeholder="Digite sua resposta..."
            value={texto}
            onChangeText={handleChangeTexto} />
          <Button
            title="Enviar resposta"
            onPress={handleAnswer}
            color="#153ca1"
            disabled={texto === ''}
          />

        </View>
      ) : (
        <Text style={styles.endText}>Fim do questionário</Text>
      )}


      <View style={styles.buttonContainer}>
        <Button
          title="Questão anterior"
          onPress={previousQuestion}
          color="#648efa"
          disabled={questionNumber === 0}
        />
        <View style={{ marginRight: 20 }} />
        <Button
          title="Próxima questão"
          onPress={nextQuestion}
          color="#648efa"
          disabled={questionNumber === level4_data.length}
        />
      </View>
    </View>
  );
};



