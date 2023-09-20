import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.containerCalculadora}>
      <Text style={styles.resultadoPequenio}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>
      <View style={styles.contenedorBotones}>
        <View style={styles.boton}><Text style={styles.textoBoton}>1</Text></View>
      </View>
    </View>

  );
};
