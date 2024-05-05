import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Estilos para el componente principal
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  // Estilos para el contenedor del texto de entrada
  inputContainer: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginTop: 20,
    height: 30, // Altura vertical

  },
  // Estilos para el texto de entrada
  inputText: {
    fontSize: 12, // Ajusta el tamaño de fuente
    paddingHorizontal: 10,
  },
  // Estilos para el contenedor del selector
  pickerContainer: {
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginTop: 20,
    height: 30, // Altura vertical
  },
  // Estilos para el texto de los selectores

  // Estilos para el título
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  // Estilos para el contenedor de desarrolladores
  developerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  // Estilos para el avatar del desarrollador
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  // Estilos para el nombre del desarrollador
  name: {
    fontSize: 16,
  },
  // Estilos para el texto del resultado
  resultText: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default styles;
