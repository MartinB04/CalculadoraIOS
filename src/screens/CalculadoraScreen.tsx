import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {BotonCalculadora} from '../components/BotonCalculadora';

export const CalculadoraScreen = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const Limpiar = () => {
    setNumero('0');
  };

  const ArmarNumero = (numeroTexto: string) => {
    //no aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);

        //evaluar si es otro 0 y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);

        //evaluar si es diferente de 0 y no tiene un punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const PositivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const PuntoDecimal = () => {
    if (!numero.includes('.')) {
      setNumero(numero + '.');
    }
  };

  const btnDelete = () => {
    let negativo = '';
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substr(1);
    }

    if (numeroTemp.length > 1) {
      setNumero((negativo + numeroTemp.slice(0, -1)));
    } else {
      setNumero('0');
    }
  };

  return (
    <View style={styles.containerCalculadora}>
      <Text style={styles.resultadoPequenio}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.contenedorBotones}>
        <BotonCalculadora texto="c" tipoBoton="c" accion={Limpiar} />
        <BotonCalculadora texto="+/-" tipoBoton="c" accion={PositivoNegativo} />
        <BotonCalculadora texto="Del" tipoBoton="c" accion={btnDelete} />
        <BotonCalculadora texto="/" tipoBoton="o" accion={ArmarNumero} />
      </View>
      <View style={styles.contenedorBotones}>
        <BotonCalculadora texto="7" tipoBoton="n" accion={ArmarNumero} />
        <BotonCalculadora texto="8" tipoBoton="n" accion={ArmarNumero} />
        <BotonCalculadora texto="9" tipoBoton="n" accion={ArmarNumero} />
        <BotonCalculadora texto="x" tipoBoton="o" accion={ArmarNumero} />
      </View>
      <View style={styles.contenedorBotones}>
        <BotonCalculadora texto="4" tipoBoton="n" accion={ArmarNumero} />
        <BotonCalculadora texto="5" tipoBoton="n" accion={ArmarNumero} />
        <BotonCalculadora texto="6" tipoBoton="n" accion={ArmarNumero} />
        <BotonCalculadora texto="-" tipoBoton="o" accion={ArmarNumero} />
      </View>
      <View style={styles.contenedorBotones}>
        <BotonCalculadora texto="1" tipoBoton="n" accion={ArmarNumero} />
        <BotonCalculadora texto="2" tipoBoton="n" accion={ArmarNumero} />
        <BotonCalculadora texto="3" tipoBoton="n" accion={ArmarNumero} />
        <BotonCalculadora texto="+" tipoBoton="o" accion={ArmarNumero} />
      </View>
      <View style={styles.contenedorBotones}>
        <BotonCalculadora
          texto="0"
          tipoBoton="n"
          accion={ArmarNumero}
          ancho={true}
        />

        <BotonCalculadora texto="." tipoBoton="n" accion={PuntoDecimal} />
        <BotonCalculadora texto="=" tipoBoton="o" accion={ArmarNumero} />
      </View>
    </View>
  );
};
