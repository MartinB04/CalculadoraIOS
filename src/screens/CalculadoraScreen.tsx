import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {BotonCalculadora} from '../components/BotonCalculadora';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.containerCalculadora}>
      <Text style={styles.resultadoPequenio}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>
      <View style={styles.contenedorBotones}>
        <BotonCalculadora title="c" tipoBoton='c'/>
        <BotonCalculadora title="+/-" tipoBoton='c'/>
        <BotonCalculadora title="%" tipoBoton='c'/>
        <BotonCalculadora title="/" tipoBoton='o'/>
      </View>
      <View style={styles.contenedorBotones}>
        <BotonCalculadora title="7" tipoBoton="n" />
        <BotonCalculadora title="8" tipoBoton="n" />
        <BotonCalculadora title="9" tipoBoton="n" />
        <BotonCalculadora title="x" tipoBoton='o'/>
      </View>
      <View style={styles.contenedorBotones}>
        <BotonCalculadora title="4" tipoBoton="n" />
        <BotonCalculadora title="5" tipoBoton="n" />
        <BotonCalculadora title="6" tipoBoton="n" />
        <BotonCalculadora title="-" tipoBoton='o'/>
      </View>
      <View style={styles.contenedorBotones}>
        <BotonCalculadora title="1" tipoBoton="n" />
        <BotonCalculadora title="2" tipoBoton="n" />
        <BotonCalculadora title="3" tipoBoton="n" />
        <BotonCalculadora title="+" tipoBoton="o" />
      </View>
      <View style={styles.contenedorBotones}>
        <BotonCalculadora title="0" tipoBoton="n" ancho={true} />
        
        <BotonCalculadora title="." tipoBoton="n" />
        <BotonCalculadora title="=" tipoBoton="o" />
      </View>
    </View>
  );
};
