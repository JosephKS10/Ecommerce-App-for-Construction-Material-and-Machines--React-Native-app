import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';

export default function StartingScreen() {
  const navigation = useNavigation();

  const handleProductsPress = () => {
    // Navigate to the Home screen
    navigation.navigate('Home');
  };
  const handleMachinesPress = () => {
    // Navigate to the Home screen
    navigation.navigate('MachineHomeScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleProductsPress}>
        <Text style={styles.buttonText}>Products</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleMachinesPress}>
        <Text style={styles.buttonText}>Machines</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white", // Use your app's background color
  },
  button: {
    backgroundColor: themeColors.bgColor(1),
    padding: 45,
    borderRadius: 10,
    marginVertical: 40,
    width: 300, // Adjust the width as needed
    alignItems: 'center',
  },
  buttonText: {
    color: "white", // Use your app's text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});
