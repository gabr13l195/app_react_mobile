import React from 'react'

export const cuadrado = () => {
    let lado: number = 5;

    const area = (lado: number): number => {
        return lado * lado;
    }

    return (
        <div>
            <h1>Ejercicio #1 - Cuadrado</h1>
            <div>
                <h4>El cuadrado tiene lados de: {lado}</h4><br />
                <h3>El área es: {area(lado)}</h3>
            </div>
        </div>
    );
}
