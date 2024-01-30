import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Octicons';
import { router } from 'expo-router';

const BackButton = () => {
    //////////STYLES
    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            top: 20,
            left: 20,
        },
        icon: {
            fontSize: 42,
            fontWeight: '900',
            borderColor: 'black',
            color: 'white',
        },
    });
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.back()} style={{ alignItems: 'center' }}>
                <Icon name="arrow-left" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

export default BackButton; 
