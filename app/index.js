import React, { useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ClickableIcon from "./icons/icon";
import { router } from 'expo-router';

export default function App() {

    const icons = [
        { iconName: 'question', label: 'Tutorial', onPress: () => router.push('/tutorial') },
        { iconName: 'checklist', label: 'Quiz', onPress: () => router.push('/quiz') },
        { iconName: 'book', label: 'Library', onPress: () => router.push('/library') },
        { iconName: 'people', label: 'About', onPress: () => router.push('/about') },
    ];


    const Progresso = async () => {
        const progressoValue1 = await AsyncStorage.getItem('progresso1');
        const progressoValue4 = await AsyncStorage.getItem('progresso4');

        if (progressoValue1 === null) {

            // Se o valor não estiver definido então é 0
            await AsyncStorage.setItem('progresso1', '0');
            console.log('Progresso 1 foi definido como 0');

        } else {

            // O valor já existe
            const progressoNumero1 = parseInt(progressoValue1, 10);
            console.log('Valor atual do progresso 1 :', progressoNumero1);

        }

        if (progressoValue4 === null) {

            // Se o valor não estiver definido então é 0
            await AsyncStorage.setItem('progresso4', '0');
            console.log('Progresso 4 foi definido como 0');


        } else {

            // O valor já existe
            const progressoNumero4 = parseInt(progressoValue4, 10);
            console.log('Valor atual do progresso 4 :', progressoNumero4);

        }

    };

    useEffect(() => {
        Progresso();
    }, []);




    handmemory = async () => {

        await AsyncStorage.setItem('progresso1', '0');
        await AsyncStorage.setItem('progresso4', '0');

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
        iconsContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
        icon: {
            alignItems: 'center',
            marginBottom: 60,
            width: '40%', // Ajuste a largura para ocupar aproximadamente metade da largura do contêiner
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                {icons.map((icon, index) => (
                    <View style={styles.icon} key={index}>
                        <ClickableIcon {...icon} />
                    </View>
                ))}
            </View>
            <Button
                title="Zerar memória (dev)"
                onPress={handmemory}
            />
        </View>

    );


}

/* Alerta dizendo que ta correta */
/* Opção para voltar no final do quiz */
/*  ! */
