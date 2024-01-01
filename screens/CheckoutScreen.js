import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { themeColors } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const CheckoutScreen = () => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
  const navigation = useNavigation();

  const handleConfirm = () => {
    // Handle the confirmation logic here
    console.log('Address:', address);
    console.log('Payment Method:', paymentMethod);
    
    // Generate tracking ID, shipper detail, and shipment date
    const trackingID = generateTrackingID();
    const shipperDetail = getShipperDetail();
    const shipmentDate = new Date();
    shipmentDate.setDate(shipmentDate.getDate() + 5);
  
    // Navigate to confirmation screen with details
    navigation.navigate('ConfirmationScreen', {
      trackingID,
      shipperDetail,
      shipmentDate: shipmentDate,
      address,
      paymentMethod,
    });
  };
  const generateTrackingID = () => {
    // Generate a random 12-digit tracking ID
    const trackingID = Math.floor(100000000000 + Math.random() * 900000000000).toString();
    return trackingID;
  };
  
  const getShipperDetail = () => {
    // Return a sample shipper detail (you can customize this as needed)
    return {
      name: 'FastShip Express',
      contact: '123-456-7890',
      address: '123 Shipping Lane, Cityville',
    };
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, justifyContent: 'space-between' }}>
      {/* Address Input */}
      <View>
        <Text style={{ fontSize:22, marginBottom: 8 }}>Enter Your Address:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, padding:5 }}
          onChangeText={(text) => setAddress(text)}
          value={address}
        />
      </View>
  
      {/* Payment Method Picker */}
      <View style={{ alignItems: 'center' , position:"relative", top:"-25%"}}>
        <Text style={{ fontSize: 28, marginBottom: 8 }}>Select Payment Method</Text>
        <Picker
          selectedValue={paymentMethod}
          style={{ height: 10, width: '100%' }}
          onValueChange={(itemValue) => setPaymentMethod(itemValue)}
        >
          <Picker.Item label="Cash on Delivery" value="Cash on Delivery" />
          <Picker.Item label="UPI" value="UPI" />
          <Picker.Item label="Debit Card/Credit Card" value="Debit Card/Credit Card" />
        </Picker>
      </View>
  
      {/* Confirm Button */}
      <TouchableOpacity
        onPress={handleConfirm}
        style={{
          backgroundColor: themeColors.bgColor(1),
          padding: 16,
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CheckoutScreen;