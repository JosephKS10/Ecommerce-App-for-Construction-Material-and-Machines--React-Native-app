// CartScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../components/CartContext';
import { useNavigation } from '@react-navigation/native';


const CartScreen = ({ navigation }) => {
  const { cart, removeFromCart } = useCart(); // Use the useCart hook to access cart and removeFromCart function
  const isCartEmpty = cart.length === 0;

  console.log(cart)


  const calculateTotal = () => {
    const total = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  return total.toFixed(2);
  };
  const handleCheckout = () => {
    navigation.navigate('Checkout'); // Assuming 'Checkout' is the screen name in your navigation stack
  };

  const renderCartItem = ({ item }) => {
    const product = item.product || item; // Check if product details are nested
    console.log(product)
    return (
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          onPress={() => removeFromCart(product.id)} // Updated to use product.id directly
          style={{
            position: "absolute",
            zIndex: 1,
            borderWidth: 1,
            top: -10,
            left: "93%",
            width: 25,
            height: 25,
            borderRadius: 20,
            backgroundColor: themeColors.bgColor(1)
          }}
        >
          <Icon.X style={{ color: "white" }} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, borderRadius: 5, zIndex: 0, borderColor: "#d0cccc", borderWidth: 1 }}>
          <Image source={{ uri: product.imageURL }} style={{ width: 80, height: 80, borderRadius: 8 }} />
          <View style={{ flex: 1, marginLeft: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{product.productName}</Text>
            <Text style={{ fontSize: 14, color: 'gray' }}>{`INR ${product.price} | Quantity: ${item.quantity}`}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", marginTop: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              </View>
              <View>
                <Text style={{ paddingRight: 10 }}>INR {product.price * item.quantity}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Navigation Bar */}
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: themeColors.bgColor(1) }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 16 }}>
          <Icon.ArrowLeft color="white" width={24} height={24} />
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>My Cart</Text>
      </View>

      <View style={{ flex: 1, padding: 16, }}>
        {cart.length === 0 ? (
          <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 50 }}>Your cart is empty</Text>
        ) : (
          <FlatList
            data={cart}
            keyExtractor={(item) => item.product.id} // Change 'id' to the actual unique identifier
            renderItem={renderCartItem}
            style={{ marginTop: 30 }}
          />
        )}
      </View>

      <TouchableOpacity
        onPress={isCartEmpty ? null : handleCheckout} // Placeholder action
        style={{
          backgroundColor: themeColors.bgColor(1),
          padding: 16,
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Checkout - INR {calculateTotal()}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CartScreen;
