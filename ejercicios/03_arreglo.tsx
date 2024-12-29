// Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5.
// const arreglo = [5,10,15,20,25,30,35,40,45,50]

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Arreglo3 = () => {
    const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    // Funcion para dividir los valores por 5
    const dividirPorCinco = (arreglo: number[]): number[] => {
        return arreglo.map(numero => numero / 5);
    };

    const nuevoArreglo = dividirPorCinco(arreglo);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ejercicio #3 - Arreglos</Text>
            <Text style={styles.text}>El arreglo original es: {JSON.stringify(arreglo)}</Text>
            <Text style={styles.text}>El nuevo arreglo con los valores divididos por 5 es: {JSON.stringify(nuevoArreglo)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
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
