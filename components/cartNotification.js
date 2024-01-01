// CartNotification.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Icon from 'react-native-feather';

const CartNotification = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return isVisible ? (
    <View style={styles.container}>
      <Text style={styles.icon}>
        <Icon.CheckCircle color="#FFF" />
      </Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000', // Background color (adjust as needed)
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', // Center vertically
  },
  icon: {
    marginRight: 8, // Adjust the spacing between icon and message
  },
  message: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CartNotification;
