// Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y calificaciones. 
// Luego, escribir una función que calcule el promedio de las calificaciones.

import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export const ArregloAlumno = () => {
    const alumnos = [
        {
            nombre: 'Viviana',
            edad: 19,
            calificacion: 10,
        },
        {
            nombre: 'Wendy',
            edad: 20,
            calificacion: 8,
        },
        {
            nombre: 'Gerson',
            edad: 18,
            calificacion: 9,
        }
    ];

    const calcularPromedio = (alumnos: { nombre: string; edad: number; calificacion: number }[]): number => {
        const sumaCalificaciones = alumnos.reduce((acumulador, alumno) => acumulador + alumno.calificacion, 0);
        return sumaCalificaciones / alumnos.length;
    };

    const promedio = calcularPromedio(alumnos);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ejercicio #6 - Arreglo de Objeto</Text>
            <Text style={styles.subtitle}>Alumnos:</Text>
            <FlatList
                data={alumnos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.text}>
                        {item.nombre} - Edad: {item.edad} - Calificación: {item.calificacion}
                    </Text>
                )}
            />
            <Text style={styles.result}>El promedio de las calificaciones es: {promedio.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        paddingTop : 150,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        marginVertical: 5,
    },
    result: {
        fontSize: 20,
        marginTop: 50,
        fontWeight: 'bold',
        color: '#333',
    },
});