import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ConfirmationScreen = ({ route }) => {
  const { trackingID, shipperDetail, shipmentDate, address, paymentMethod } = route.params;
  const navigation = useNavigation();
  const handleBackToHome = () => {
    navigation.navigate('StartScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Order Confirmation</Text>

        <Text style={styles.label}>Tracking ID:</Text>
        <Text style={styles.value}>{trackingID}</Text>

        <Text style={styles.label}>Shipper Detail:</Text>
        <Text style={styles.value}>{`Name: ${shipperDetail.name}\nContact: ${shipperDetail.contact}\nAddress: ${shipperDetail.address}`}</Text>

        <Text style={styles.label}>Shipment Date:</Text>
        <Text style={styles.value}>{shipmentDate.toDateString()}</Text>

        <Text style={styles.label}>Delivery Address:</Text>
        <Text style={styles.value}>{address}</Text>

        <Text style={styles.label}>Payment Method:</Text>
        <Text style={styles.value}>{paymentMethod}</Text>
      </View>
      <TouchableOpacity
        onPress={handleBackToHome}
        style={{
          backgroundColor: '#3498db', // Adjust color as needed
          padding: 16,
          borderRadius: 8,
          alignItems: 'center',
          marginVertical: 16, // Add some spacing
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    marginTop: 4,
  },
});

export default ConfirmationScreen;
