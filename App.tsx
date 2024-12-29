import React from 'react'
import { PaperProvider, Text } from 'react-native-paper';
import { Cuadrado } from './ejercicios/01_cuadrado';
import { Arreglos2 } from './ejercicios/02_arreglo';
import { Arreglo3 } from './ejercicios/03_arreglo';
import { ArregloPar4 } from './ejercicios/04_arreglopar';
import { Arreglo5 } from './ejercicios/05_arreglo';
import { ArregloAlumno } from './ejercicios/06_arregloalumno';
import { HookState } from './ejercicios/07_hookstate';

export const App = () => {
  return (
    <PaperProvider>
      <Cuadrado />
      {/* <Arreglos2 /> */}
      {/* <Arreglo3 /> */}
      {/* <ArregloPar4 /> */}
      {/* <Arreglo5 /> */}
      {/* <ArregloAlumno /> */}
      {/* <HookState /> */}
    </PaperProvider>
  )
}

export default App;