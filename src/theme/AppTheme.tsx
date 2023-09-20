import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  fondo: {
    backgroundColor: 'black',
    flex: 1,
  },
  containerCalculadora: {
    flex: 1,
    justifyContent: 'flex-end',
    padding:10,
   
  },
  resultado: {
    fontSize: 50,
    color: 'white',
    textAlign:'right',
  },
  resultadoPequenio: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.5)',
    textAlign:'right',
  },
  contenedorBotones:{
flexDirection: 'row',

  },
  boton: {
    backgroundColor: 'white',
    width: 80,
    borderRadius: 50,
    height: 80,
    justifyContent: 'center',
  },
  textoBoton: {
    fontSize: 30,
    padding:10,
    color: 'white',
    textAlign:'center',
    fontWeight: 'bold',

  },
});
