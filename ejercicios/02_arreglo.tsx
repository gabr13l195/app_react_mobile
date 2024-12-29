// Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los 
// elementos del arreglo

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const sumarElementos = (arreglo: number[]): number => {
    return arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
};

export const Arreglos2 = () => {
    const arregloEjemplo: number[] = [1, 2, 3, 4, 5];
    const suma = sumarElementos(arregloEjemplo);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ejercicio #2 - Arreglos</Text>
            <View>
                <Text style={styles.text}>El arreglo es: {JSON.stringify(arregloEjemplo)}</Text>
                <Text style={styles.text}>La suma de los elementos del arreglo es: {suma}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9B9FA6',
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 25,
        color: "#FFFFFF"
    },
    text: {
        fontSize: 18,
        marginVertical: 10,
        color: "#FFFFFF"
    },
});

