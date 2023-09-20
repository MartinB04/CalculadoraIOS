import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Boton {
  title: string;
  tipoBoton: 'n' | 'o' | 'c';
  ancho?: boolean;
}

export const BotonCalculadora = ({title, tipoBoton, ancho = false}: Boton) => {
  console.log(title);

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
    <TouchableOpacity>
      <View
        style={[
          styles.boton,
          ColorBoton,
          ,
          ancho ? {width: 170} : {width: 80},
        ]}>
        <Text style={styles.textoBoton}>{title}</Text>
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
