import React from 'react';
import { Text, View } from 'react-native';

export const Cuadrado = () => {
    let lado: number = 5;

    const area = (lado: number): number => {
        return lado * lado;
    }

    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Ejercicio #1 - Cuadrado</Text>
            <View>
                <Text style={{ fontSize: 16 }}>El cuadrado tiene lados de: {lado}</Text>
                <Text style={{ fontSize: 18, marginTop: 10 }}>El área es: {area(lado)}</Text>
            </View>
        </View>
    );
};
