// Del siguiente arreglo identificar si el número es par o impar y generar un nuevo arreglo con las palabras correspondientes.
// Si es número par, colocar "par"
// Si es número impar, colocar "impar"

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const ArregloPar4 = () => {
    const numeros = [1, 2, 3, 4];

    const identificarParImpar = (numeros: number[]): string[] => {
        return numeros.map(numero => (numero % 2 === 0 ? "par" : "impar"));
    };

    const nuevoArreglo = identificarParImpar(numeros);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ejercicio #4 - Arreglos Par o Impar</Text>
            <Text style={styles.text}>El arreglo original es: {JSON.stringify(numeros)}</Text>
            <Text style={styles.text}>El nuevo arreglo es: {JSON.stringify(nuevoArreglo)}</Text>
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
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginVertical: 10,
    },
});
