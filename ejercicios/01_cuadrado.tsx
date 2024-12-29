import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const Cuadrado = () => {
    const [lado, setLado] = useState<number | null>(null);
    const [area, setArea] = useState<number | null>(null);

    const calcularArea = () => {
        if (lado && lado > 0) {
            setArea(lado * lado);
        } else {
            Alert.alert('Error', 'Por favor, ingresa un valor válido para el lado.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ejercicio #1 - Cuadrado</Text>
            <Text style={styles.text}>Ingresa el valor del lado:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Ejemplo: 5"
                onChangeText={(text) => setLado(Number(text))}
            />
            <Button title="Calcular área" onPress={calcularArea} />
            {area !== null && (
                <Text style={styles.area}>El área es: {area}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 25,
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
    },
    area: {
        fontSize: 20,
        marginTop: 20,
        color: '#4493F8',
    },
});

