import React from "react";
import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Level3() {

  const [questionNumber, setquestionNumber] = useState();
  const [rightQuestion, setrightQuestion] = useState();
  const [texto, setTexto] = useState('');
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const progress = async () => {
      return await AsyncStorage.getItem('progresso3');
    }

    progress().then((result) => {
      const parsedResult = parseInt(result, 10);
      setquestionNumber(parsedResult);
      setrightQuestion(parsedResult);
    });

    const timeout = setTimeout(() => {
      setloading(true);
    }, 300);
    return () => clearTimeout(timeout);

  }, []);

  ////////////////////////////////////Dataframe de perguntas e respostas para o level 3
  const level3_data = [
    {
      id: 0,
      question: "Foi feita uma análise de absormétrica e a equiação gerada pela lei de lambert beer foi: y = 2.0x +10, qual a concentração de uma amostra que apresentou 50nm de absorção na faixa determinada ",
      answer: "20",
    },
    {
      id: 1,
      question: "Dada a entalpia (H) de um sistema como 300 kJ/mol, a entropia (S) como 100 J/(mol·K), e a temperatura (T) como 298 K, calcule a energia livre de Gibbs?",
      answer: "32",
    },
    {
      id: 2,
      question: "Dado um diagrama bifásico (pressão vs composição) de dois componentes, qual o maior número  de variavéis termodinamicas necessárias para definir o sistema?",
      answer: "2",
    },
    {
      id: 3,
      question: "Dado um diagrama trifásico (pressão vs composição) de dois componentes, qual o menor número termodinamico necessário para definir o sistema?",
      answer: "1",
    },
    {
      id: 4,
      question: "Qual o volume que um gás ocupa na CNTP?",
      answer: "22.4",
    },
    {
      id: 5,
      question: "Um balão contendo gás hélio está na temperatura ambiente (T = 20 ºC) e na pressão atmosférica (P = 1.0 atm). O balão contém 2 mols desse gás nobre. Assuma que o gás hélio comporta-se como um gás ideal e que a constante universal dos gases perfeitos vale: R = 0,082. Determine o volume aproximado ocupado pelo gás no interior do balão.",
      answer: "48.052",
    },
    {
      id: 6,
      question: "Um gás a uma determinada pressão P1 foi comprimido até um volume com metade do volume original. Qual será a relação entre a nova pressão P2 e a pressão inicial P1?",
      answer: "2",
    },
    {
      id: 7,
      question: "Na equação de degradação A -> B + C, teremos no ínicio 11 mols de A. Considerando que a constante de equilibrio seja K= 0.1, qual será a concentração de A no equilibrio",
      answer: "10",
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
    if (texto == level3_data[questionNumber].answer) {
      (async () => {
        await AsyncStorage.setItem('progresso3', String(questionNumber + 1));
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
      backgroundColor: '#144696',
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
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 8,
      padding: 10,
      color: '#648efa',
      marginBottom: 20,
    },
  });

  if (loading) {
    return (
      <View style={styles.container}>
        {level3_data[questionNumber] ? (
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>
              {level3_data[questionNumber]?.question}
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
            disabled={questionNumber === level3_data.length}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>

        <Text style={styles.questionText}> Carregando... </Text>
      </View>
    )
  };
}


