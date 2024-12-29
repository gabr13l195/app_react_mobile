// A partir del siguiente array ejecutar las acciones solicitadas:
// const datos = [7, 5, "sistemas", "hola", "adios", 2];
// 1. Determinar cuál de los tres datos de texto es mayor.
// 2. Determinar el resultado de las cinco operaciones matemáticas realizadas con los tres datos numéricos.

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Arreglo5 = () => {
    const datos = [7, 5, "sistemas", "hola", "adios", 2];

    // Separar datos numéricos y de texto
    const numeros = datos.filter(item => typeof item === 'number') as number[];
    const textos = datos.filter(item => typeof item === 'string') as string[];

    // Encontrar el texto más largo
    const textoMayor = textos.reduce((a, b) => (a.length > b.length ? a : b), "");

    // Calcular las operaciones matemáticas
    const suma = numeros.reduce((a, b) => a + b, 0);
    const resta = numeros.reduce((a, b) => a - b);
    const multiplicacion = numeros.reduce((a, b) => a * b, 1);
    const division = numeros.reduce((a, b) => a / b);
    const modulo = numeros.reduce((a, b) => a % b);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ejercicio #5 - Arreglo</Text>
            <Text style={styles.text}>Datos originales: {JSON.stringify(datos)}</Text>
            <Text style={styles.text}>Texto mayor: {textoMayor}</Text>
            <Text style={styles.text}>Suma de números: {suma}</Text>
            <Text style={styles.text}>Resta de números: {resta}</Text>
            <Text style={styles.text}>Multiplicación de números: {multiplicacion}</Text>
            <Text style={styles.text}>División de números: {division.toFixed(2)}</Text>
            <Text style={styles.text}>Módulo de números: {modulo}</Text>
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
