import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Componentes
import BackButton from "../components/backbutton";
import Header from "../components/header";


export default function Level1() {

    const [questionNumber, setquestionNumber] = useState(0);
    const [rightQuestion, setrightQuestion] = useState();
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const progress = async () => {
            return await AsyncStorage.getItem('progresso1');
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

    ////////////////////////////////////Dataframe de perguntas e respostas para o level 1
    const level1_data = [
        {
            id: 0,
            question: "Qual fenômeno se associa a uma reação exotérmica?",
            options: ["Água caindo de uma cachoeira", "As marés sendo influenciadas pela lua", "Um explosivo sendo utilizado no processo de mineração", "Um corpo tendendo a permanecer em movimento"],
            answer: "Um explosivo sendo utilizado no processo de mineração",
        },
        {
            id: 1,
            question: "O que é entalpia?",
            options: ["Energia capaz de realizar trabalho", "Maximização de microestados possíveis de um sistema", "Variação de energia a pressão constante", "Variação de energia a temperatura constante"],
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
            question: "Que característica pode definir um gás como sendo ideal?",
            options: ["Ter forças internucleares fortes", "Tomar a forma do recipiente que é colocado", "Sua massa ser considerada desprezível", "Colisões entre as partículas perfeitamente elásticas"],
            answer: "Colisões entre as partículas perfeitamente elásticas",
        },
        {
            id: 4,
            question: "Considerando o fenômeno da combustão, marque a alternativa verdadeira",
            options: ["A combustão precisa necessariamente de oxigênio", "A combustão só ocorre em temperaturas extremamente quentes", "A combustão completa do metano gera carbonato e água", "A combustão pode ser atingida em atmosfera inerte"],
            answer: "A combustão precisa necessariamente de oxigênio",
        },
        {
            id: 5,
            question: " A energia livre de Gibs é um ótimo indicador da: ",
            options: ["energia liberada pela reação", "velocidade da reação", "espontaneidade da reação", "Grau de periculosidade da reação"],
            answer: "espontaneidade da reação",
        },
        {
            id: 6,
            question: "Em quais casos não deve ser usada a equação da energia livre de gibbs?",
            options: ["componentes transicionando de fases", "Sistemas termodinâmicos em equilíbrio", "Reações sobre temperatura variável", "Transformações de fases de uma dada solução"],
            answer: "Reações sobre temperatura variável",
        },
        {
            id: 7,
            question: "Qual dos gases abaixo pode ser considerado ideal na CNTP?",
            options: ["Amônia (NH3)", "Oxigênio (O2)", "Hidrogênio (H2)", "Gás carbônico (CO2)"],
            answer: "Hidrogênio (H2)",
        },
        {
            id: 8,
            question: " Qual dos gases abaixo NÃO pode ser considerado ideal na CNTP?",
            options: ["Hélio (He)", " Argônio (Ar) ", "Nitrogênio (N2)", " Neônio (Ne) "],
            answer: "Nitrogênio (N2)",
        },
        {
            id: 9,
            question: 'Complete a frase: "Entalpia é o calor associado aos processos ________"',
            options: ["isotérmicos", "isobáricos", "isovolumétricos", "Adiabáticos"],
            answer: "isobáricos",
        },
        {
            id: 10,
            question: 'Qual das seguintes afirmações sobre entropia está correta?',
            options: ["A entropia de um sistema aumenta sempre que ocorre uma reação exotérmica.", "A entropia de um sistema é sempre zero a temperaturas acima de zero Kelvin.", "A entropia é uma medida da desordem ou aleatoriedade de um sistema.", " A entropia de um sistema diminui à medida que sua temperatura aumenta."],
            answer: "A entropia é uma medida da desordem ou aleatoriedade de um sistema.",
        },
        {
            id: 11,
            question: "O que acontece com a entropia de um sistema durante uma transição de fase de sólido para líquido?",
            options: ["A entropia aumenta.", " A entropia diminui.", "A entropia permanece constante.", "A entropia não é afetada por transições de fase."],
            answer: "A entropia aumenta.",
        },
        {
            id: 12,
            question: "O que a entalpia representa em um sistema termodinâmico?",
            options: ["A energia interna do sistema.", "A energia interna do sistema mais a pressão multiplicada pelo volume.", "A quantidade total de calor trocada durante uma reação.", "A temperatura absoluta do sistema."],
            answer: "A quantidade total de calor trocada durante uma reação.",
        },
        {
            id: 13,
            question: "Como a entalpia é afetada durante uma reação exotérmica?",
            options: ["A entalpia do sistema aumenta.", "A entalpia do sistema diminui.", "A entalpia do sistema permanece constante.", " A entalpia não é afetada por reações exotérmicas."],
            answer: "A entalpia do sistema diminui.",
        },
        {
            id: 14,
            question: "O que ocorre quando um sistema atinge o equilíbrio químico?",
            options: ["A concentração de reagentes e produtos permanece constante.", " A reação para completamente.", "A concentração dos reagentes aumenta continuamente.", "A temperatura do sistema se torna constante."],
            answer: "A concentração de reagentes e produtos permanece constante.",
        },
        {
            id: 15,
            question: "Como uma mudança na temperatura afeta o equilíbrio químico?",
            options: ["O equilíbrio é afetado apenas se a reação for endotérmica.", "Aumenta a constante de equilíbrio apenas se a reação for exotérmica.", "Pode deslocar o equilíbrio para a direita ou para a esquerda, dependendo da natureza da reação.", " A temperatura não tem efeito sobre o equilíbrio químico."],
            answer: "Pode deslocar o equilíbrio para a direita ou para a esquerda, dependendo da natureza da reação.",
        },




    ];


    //////FUNCTIONS
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

    //////////STYLES --
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            paddingHorizontal: 20,
        },
        questionContainer: {

            width: 300,
            marginBottom: 20,
            marginTop: 40,
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
    });

    //////RETURNS
    if (loading) {
        return (
            <View style={styles.container}>
                <Header />

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
                        disabled={questionNumber === rightQuestion}
                    />
                </View>
                <BackButton />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Header />
                <Text style={styles.questionText}> Carregando... </Text>
            </View>
        )
    }
};





