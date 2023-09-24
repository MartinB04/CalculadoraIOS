import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Boton {
  texto: string;
  tipoBoton: 'n' | 'o' | 'c';
  ancho?: boolean,
  accion: (numeroTexto:string) => void,
}

export const BotonCalculadora = ({texto, tipoBoton, ancho = false, accion}: Boton) => {
  

  let ColorBoton = {};
  switch (tipoBoton) {
    case 'n':
      ColorBoton = styles.botonN;

      break;
    case 'c':
      ColorBoton = styles.botonC;

      break;
    case 'o':
      ColorBoton = styles.botonO;

      break;
  }

  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={[
          styles.boton,
          ColorBoton,
          
          ,
          ancho ? {width: 170} : {width: 80},
        ]}>
        <Text style={styles.textoBoton}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    width: 80,
    borderRadius: 50,
    height: 80,
    justifyContent: 'center',
    marginBottom: 10,
  },
  botonN: {
    backgroundColor: '#333333',
  },
  botonO: {
    backgroundColor: '#fea00a',
  },
  botonC: {
    backgroundColor: '#a5a5a5',
  },
  textoBoton: {
    fontSize: 30,
    padding: 10,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
