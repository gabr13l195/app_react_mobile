// Crear un acumulador usando el hook useState en React Native

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

export const HookState = () => {
    const [acumulador, setAcumulador] = useState(5); // Estado inicial del acumulador

    const incrementar = () => {
        setAcumulador(acumulador + 1);
    };

    const disminuir = () => {
        setAcumulador(acumulador - 1);
    };

    return (
        <View style={styles.container}>
            <Text variant="headlineMedium" style={styles.text}>Valor del Acumulador: {acumulador}</Text>
            <View style={styles.buttonsContainer}>
                <Button mode="contained" onPress={incrementar} style={styles.button}>Incrementar</Button>
                <Button mode="contained" onPress={disminuir} style={styles.button}>Disminuir</Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
    button: {
        marginHorizontal: 10,
    },
});
