import React from "react";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Level1() {

    const progress = async () => {
        return await AsyncStorage.getItem('progresso1');
    }

    const [questionNumber, setquestionNumber] = useState();
    const [rightQuestion, setrightQuestion] = useState();

    useEffect(() => {
        progress().then((result) => {
            const parsedResult = parseInt(result, 10);
            setquestionNumber(parsedResult);
            setrightQuestion(parsedResult);
        });
    }, []);

    ////////////////////////////////////Datas de perguntas e respostas para o level 1
    const level1_data = [
        {
            id: 0,
            question: "Qual fenomeno se associa a uma reação exotérmica?",
            options: ["Água caindo de uma cachoeira", "As marés sendo influenciadas pela lua", "Um explosivo sendo utilizado no processo de mineração", "Um corpo tendendo a permanecer em movimento"],
            answer: "Um explosivo sendo utilizado no processo de mineração",
        },
        {
            id: 1,
            question: "O que é entalpia?",
            options: ["Uma série da Disney", "Maximização de microestados possíveis de um sistema", "Variação de energia a pressão constante", "Variação de energia a temperatura constante"],
            answer: "Variação de energia a pressão constante",
        },
        {
            id: 2,
            question: "Qual a equação geral dos gases?",
            options: ["PV = nT", "P/V = RT", "R = PV / nT", "T = PV"],
            answer: "R = PV / nT",
        },
        {
            id: 3,
            question: "Qual é o número maior entre 5 e 7?",
            options: ["5", "7", "9", "11"],
            answer: "7",
        },
        {
            id: 4,
            question: "Qual o nome de um gás MUITO INTELIGENTE??",
            options: ["OxiGêNIO", "Gas carbonico", "metal", "Amonia"],
            answer: "OxiGêNIO",
        }
    ];


    function nextQuestion() {


        if (questionNumber < rightQuestion) {
            setquestionNumber(questionNumber + 1);

        } else { alert("Responda a pergunta corretamente antes de avançar") }
        if (questionNumber > 5) { setquestionNumber(5) }
    }

    function previousQuestion() {
        if (questionNumber == 0) {
            return
        } else { setquestionNumber(questionNumber - 1); }

    }

    function handleAnswer(answer) {
        if (answer == level1_data[questionNumber].answer) {
            (async () => {
                await AsyncStorage.setItem('progresso1', String(questionNumber + 1));
                setquestionNumber(questionNumber + 1);
                setrightQuestion(questionNumber + 1);

            })();


        } else {
            alert("Resposta incorreta, tente novamente")
        }
    }

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
    });

    return (
        <View style={styles.container}>
            {level1_data[questionNumber] ? (
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>
                        {level1_data[questionNumber]?.question}
                    </Text>
                    {level1_data[questionNumber].options.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.optionButton}
                            onPress={() => handleAnswer(item)}>
                            <Text style={styles.optionText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
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
                    disabled={questionNumber === level1_data.length}
                />
            </View>
        </View>
    );
};





