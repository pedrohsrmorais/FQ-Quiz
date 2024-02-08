import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from "react-native";
import { router, useLocalSearchParams } from 'expo-router'



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

    useEffect(() => {


    }, []);

    const name = useLocalSearchParams();

    switch (name.src_name) {
        case 'absorbancia':
            
            break;
        case  'combustao':

            break;
        case 'energia_livre':

            break;
        case 'entalpia':

            break;
        case 'entropia':

            break;
        case 'equilíbrio':

            break;
        case 'estados':

            break;
        case 'fases':
            
            break;
    }

    //////////STYLES
    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            top: 0,
            left: 0,
        },
        imagemStyle: {
            position: 'absolute',

            width: 500,
            height: 70,
            resizeMode: 'cover',
            opacity: 1,
        },
    });

    return (
        <View style={styles.container}>
            <Image
                source={gas_ideal_src}
                style={styles.imagemStyle}
            />
        </View>
    );
};

export default Reader;