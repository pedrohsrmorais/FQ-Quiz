import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, FlatList, Text } from "react-native";
import { useLocalSearchParams } from 'expo-router'


//Requires
const absorbancia_src = {
    imagem1: require('../../assets/fq_library/combustao/combustao-1.png'),
    imagem2: require('../../assets/fq_library/combustao/combustao-2.png'),
    imagem3: require('../../assets/fq_library/combustao/combustao-3.png'),
}

const combustao_src = {
    imagem1: require('../../assets/fq_library/combustao/combustao-1.png'),
    imagem2: require('../../assets/fq_library/combustao/combustao-2.png'),
    imagem3: require('../../assets/fq_library/combustao/combustao-3.png'),
}

const energia_livre_src = {
    imagem1: require('../../assets/fq_library/energia_livre/energia_livre-1.png'),
    imagem2: require('../../assets/fq_library/energia_livre/energia_livre-2.png'),
}

const entalpia_src = {
    imagem1: require('../../assets/fq_library/entalpia/entalpia-1.png'),
    imagem2: require('../../assets/fq_library/entalpia/entalpia-2.png'),
    imagem3: require('../../assets/fq_library/entalpia/entalpia-3.png'),
    imagem4: require('../../assets/fq_library/entalpia/entalpia-4.png'),
};

const entropia_src = {
    imagem1: require('../../assets/fq_library/entropia/entropia-1.png'),
    imagem2: require('../../assets/fq_library/entropia/entropia-2.png'),
}

const equilibrio_src = {
    imagem1: require('../../assets/fq_library/equilibrio/equilibrio-1.png'),
    imagem2: require('../../assets/fq_library/equilibrio/equilibrio-2.png'),
    imagem3: require('../../assets/fq_library/equilibrio/equilibrio-3.png'),
}

const estados_src = {
    imagem1: require('../../assets/fq_library/combustao/combustao-1.png'),
    imagem2: require('../../assets/fq_library/combustao/combustao-2.png'),
    imagem3: require('../../assets/fq_library/combustao/combustao-3.png'),
}

const fases_src = {
    imagem1: require('../../assets/fq_library/combustao/combustao-1.png'),
    imagem2: require('../../assets/fq_library/combustao/combustao-2.png'),
    imagem3: require('../../assets/fq_library/combustao/combustao-3.png'),
}

const gas_ideal_src = {
    imagem1: require('../../assets/fq_library/gas_ideal/gas_ideal-1.png'),
    imagem2: require('../../assets/fq_library/gas_ideal/gas_ideal-2.png'),
}


const Reader = () => {

    const [imgActive, setimgActive] = useState(absorbancia_src);
    const [loading, setloading] = useState(false);

    useEffect(() => {


        switch (name.src_name) {
            case 'absorbancia':
                setimgActive(absorbancia_src)

                break;
            case 'combustao':
                setimgActive(combustao_src)

                break;
            case 'energia_livre':
                setimgActive(energia_livre_src)

                break;
            case 'entalpia':
                setimgActive(entalpia_src)

                break;
            case 'entropia':
                setimgActive(entropia_src)

                break;
            case 'equilíbrio':
                setimgActive(equilibrio_src)

                break;
            case 'estados':
                setimgActive(estados_src)

                break;
            case 'fases':
                setimgActive(fases_src)

                break;
            case 'gas_ideal':
                setimgActive(gas_ideal_src)
        }

        const timeout = setTimeout(() => {
            setloading(true);
        }, 400);
        return () => clearTimeout(timeout);
    }, []);



    const name = useLocalSearchParams();


    const width_view = Dimensions.get('window').width + 100
    const height_view = Dimensions.get('window').height

    /////////STYLES
    const styles = StyleSheet.create({
        container: {
            flex: 1,

        },
        scrollView: {
            flex: 1,
            flexDirection: 'row',

        },
        imagemStyle: {
            width: Dimensions.get('window').width, // Largura da tela
            height: Dimensions.get('window').height, // Altura ajustada proporcionalmente
            resizeMode: 'stretch',
            opacity: 1,
            marginLeft: 0,
            marginRight: 0,
        },
        questionText: {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#333333',
            textAlign: 'center',
            fontStyle: 'italic',
            paddingBottom: 30,
            paddingTop: 200,
        },
    });


    // Convert imgActive object values to an array
    const imgActiveArray = Object.values(imgActive);
    if (loading){
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}
                >
                    <FlatList
                        data={imgActiveArray}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <Image
                                source={item}
                                style={styles.imagemStyle}
                            />
                        )}
                    />
                </ScrollView>
            </View>
        );
    }else {
        return (
            <View style={styles.container}>

                <Text style={styles.questionText}> Carregando... </Text>
            </View>
        )
    }
};

export default Reader;