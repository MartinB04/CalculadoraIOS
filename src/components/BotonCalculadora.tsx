import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Boton {
  title: string;
  tipoBoton: 'n' | 'o' | 'c';
}

export const BotonCalculadora = ({title, tipoBoton}: Boton) => {
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
    <View style={[styles.boton, ColorBoton]}>
      <Text style={styles.textoBoton}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
   
    width: 80,
    borderRadius: 50,
    height: 80,
    justifyContent: 'center',
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
