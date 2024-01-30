import React from "react";
import { View, StyleSheet, Image } from "react-native";

const PaperSheet = () => {
    //////////STYLES
    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            top: 140,
            left: 0,
        },
        imagemStyle: {
            position: 'absolute',

            width: 380,
            height: 420,
            resizeMode: 'cover',
            opacity: 1,
        },
    });

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/folhacaderno.png')}
                style={styles.imagemStyle}
            />
        </View>
    );
};

export default PaperSheet; 
