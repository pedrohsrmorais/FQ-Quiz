import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { router } from 'expo-router';

//Componentes
import Header from "./components/header";

export default function QuizScreen() {


    //////////STYLES
    const styles = StyleSheet.create({
        container: {
            flex: 1,

            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            paddingHorizontal: 20,
        },

        levelsContainer: {
            width: 300,
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
        buttonContainer: {

            marginVertical: 12,
            borderRadius: 8,
            borderRadius: 40,
            padding: 10,
            marginVertical: 12,
            backgroundColor: '#171a66',
            borderRadius: 40,
            alignItems: 'center',


        },
        buttonText: {
            fontSize: 16,
            color: '#ffffff',
            fontWeight: 'bold',
        },


    });


    return (

        <View style={styles.container}>
            <Header />


            <View style={styles.levelsContainer}>
                <View >

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/levels/level1')}>
                        <Text style={styles.buttonText}>Level 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} >
                        <Text style={styles.buttonText}>Level 2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} >
                        <Text style={styles.buttonText}>Level 3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/levels/level4')} >
                        <Text style={styles.buttonText}>Level 4</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

}
