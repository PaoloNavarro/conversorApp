import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from '../components/Styles';

const HomeScreen = () => {
  const [historial, setHistorial] = useState([]);

  const handleConversion = () => {
    // Aquí iría la lógica para realizar la conversión y agregar el resultado al historial
    // Por ahora, agregaremos un elemento de ejemplo al historial
    setHistorial(prevHistorial => [...prevHistorial, { id: Math.random().toString(), value: 'Resultado de la conversión' }]);
  };

  return (
    <SafeAreaView style={styles.homeContainer}>
      <Text style={styles.title}>Conversor de unidades</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          placeholder={{ label: "Selecciona la unidad:", value: null }}
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Longitud', value: 'longitud' },
            { label: 'Masa', value: 'masa' },
            { label: 'Temperatura', value: 'temperatura' },
            { label: 'Tiempo', value: 'tiempo' },
            { label: 'Velocidad', value: 'velocidad' },
            { label: 'Volumen', value: 'volumen' },
          ]}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Ingrese cantidad a convertir"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          placeholder={{ label: "Desde:", value: null }}
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Longitud', value: 'longitud' },
            { label: 'Masa', value: 'masa' },
            { label: 'Temperatura', value: 'temperatura' },
            { label: 'Tiempo', value: 'tiempo' },
            { label: 'Velocidad', value: 'velocidad' },
            { label: 'Volumen', value: 'volumen' },
          ]}
        />
      </View>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          placeholder={{ label: "Hasta:", value: null }}
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Longitud', value: 'longitud' },
            { label: 'Masa', value: 'masa' },
            { label: 'Temperatura', value: 'temperatura' },
            { label: 'Tiempo', value: 'tiempo' },
            { label: 'Velocidad', value: 'velocidad' },
            { label: 'Volumen', value: 'volumen' },
          ]}
        />
      </View>
      <Text style={styles.resultText}>Resultado</Text>
      <FlatList
        data={historial}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.value}</Text>}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
