import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Componentes
import BackButton from "../components/backbutton";
import Header from "../components/header";


export default function Level2() {

    const [questionNumber, setquestionNumber] = useState(0);
    const [rightQuestion, setrightQuestion] = useState();
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const progress = async () => {
            return await AsyncStorage.getItem('progresso2');
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

    ////////////////////////////////////Dataframe de perguntas e respostas para o level 2
    const level2_data = [
        {
            id: 0,
            question: "O que a absorbância de uma substância em uma análise espectrofotométrica indica?",
            options: ["A quantidade de solvente presente na amostra.", "A concentração da substância na amostra.", "A temperatura da amostra.","O pH da amostra."],
            answer: "A concentração da substância na amostra.",
        },
        {
            id: 1,
            question: "Como a absorbância está relacionada à concentração de uma substância em uma solução?",
            options: ["A absorbância é diretamente proporcional à raiz quadrada da concentração.", "A absorbância é inversamente proporcional à concentração.", "A absorbância é constante, independentemente da concentração.", "A absorbância é proporcional a concentração"],
            answer: "A absorbância é proporcional a concentração",
        },
        {
            id: 2,
            question: "O que acontece com a absorbância de uma solução quando o caminho óptico é dobrado?",
            options: ["A absorbância cai pela metade", "A absorbância dobra", "A absorbância permanecerá constante", "A absorbância perderá linearidade"],
            answer: "A absorbância dobra",
        },
        {
            id: 3,
            question: "Com uma amostra apresentando 0.5 de transmitancia, qual seria sua absorbancia correspondente?",
            options: ["Corresponderia a, aproximadamente, 0.9 de absorbância", "Corresponderia a, aproximadamente, 0.5 de absorbância", "Corresponderia a, aproximadamente, 0.125 de absorbância", "Corresponderia a, aproximadamente, 0.7 de absorbância"],
            answer: "Corresponderia a, aproximadamente, 0.7 de absorbância",
        },
        {
            id: 4,
            question: "Qual a relação entre o feixe emitido pela fonte (P0) e o absorvido pelo detector (P) na espectrometria de absorção molecular?",
            options: [" P/P0 ", " P - P0 ", " P + P0 ", " P - log(P0) "],
            answer: " P/P0 ",
        },
        {
            id: 5,
            question: "A presença de qual componente molecular permite a observação no UV-Vis na técnica de espectrometria de absorção molecular?",
            options: ["Presença de oxigênio", "Presença de carbonos Sp2 conjugados", "Presença de carbonos Sp3", "Presença de heterociclos"],
            answer: "Presença de carbonos Sp2 conjugados",
        },
        {
            id: 6,
            question: "O que NÃO é considerada uma característica do ponto azeotrópico?",
            options: ["Ponto que a composição da fase vapor é a mesma da fase líquida", "Ponto que a composição da fase líquida é sempre mais volátil do que qualquer uma das substâncias puras presentes na mistura.", "O ponto cuja composição global equivale a eficiencia máxima de uma curva de destilação", "O ponto em que ambas as substancias se comportam como substancia pura."],
            answer: "Ponto que a composição da fase vapor é a mesma da fase líquida",
        },
        {
            id: 7,
            question: "Em um diagrama de fases líquido-vapor, o que representa um ponto crítico?",
            options: ["A temperatura máxima de vaporização.", " A temperatura mínima de condensação.", "A temperatura onde as fases líquida e vapor se tornam indistinguíveis.", "A temperatura de transição entre as fases líquida e sólida."],
            answer: "A temperatura onde as fases líquida e vapor se tornam indistinguíveis.",
        },
        {
            id: 8,
            question: "O que é o pontro triplo em um diagrama de fases?",
            options: ["O ponto onde três substâncias diferentes se encontram.", " O ponto onde três fases coexistem em equilíbrio.", "O ponto onde a fusão ocorre mais rapidamente.", "O ponto onde ocorre a vaporização."],
            answer: "O ponto onde três fases coexistem em equilíbrio.",
        },
        {
            id: 9,
            question: 'Quantos graus de liberdade podem possuir 2 pontos aleatórios em um diagrama bifásico miscível de dois componentes (pressão vs composição)?',
            options: ["1 ou 2", "2 ou 3", "3 ou 4", "4 ou 5"],
            answer: "2 ou 3",
        },
        {
            id: 10,
            question: 'O que a regra das fases indica?',
            options: ["Número de variavéis termodinamicas necessárias para definir um sistema", "Número de fases necessárias para definir um parametro termodinamico", "Nível de desordem ponderal do sistema por número de fases", "Número de dimensões gráficas necessárias para representar satisfatóriamente o sistema"],
            answer: "Número de variavéis termodinamicas necessárias para definir um sistema",
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
        if (answer == level2_data[questionNumber].answer) {
            (async () => {
                await AsyncStorage.setItem('progresso2', String(questionNumber + 1));
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

                {level2_data[questionNumber] ? (
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            {level2_data[questionNumber]?.question}
                        </Text>
                        {level2_data[questionNumber].options.map((item, index) => (
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

