import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import DropdownSlider from '../components/dropdownSlider';
import {useRoute,useNavigation } from '@react-navigation/native';
import { useCart } from '../components/CartContext';
import CartNotification from '../components/cartNotification';


export default function ProductInfo() {

    const { params } = useRoute();
    const navigation = useNavigation();
    const { addToCart } = useCart();
    const [showNotification, setShowNotification] = useState(false);


    let item = params;

    const [quantity, setQuantity] = useState(1);
  
    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const handleAddToCart = () => {
      // Add the selected product to the cart
      addToCart(item.props, quantity);
      // Implement any additional logic or UI updates if needed
      setShowNotification(true);

    // Hide notification after a few seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    };

    const handleBuyNow = () => {
      // Add the selected product to the cart
      addToCart(item.props, quantity);
      navigation.navigate('Cart');
    };
  

  return (
    <View>
    <ScrollView>
      
      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40, marginTop: 10, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}
        className="bg-white -mt-12 pt-4"
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
        </TouchableOpacity>
        <View className="px-5" style={{marginTop:100}}>
          <View className="w-100" style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40, borderWidth: 1 }}>
            <Image className="w-full h-52" source={{ uri: item.props.imageURL }} style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8 }}>
            <Text className="text-1xl font-bold">{item.props.productName}</Text>
            <Text className="text-1xl font-bold">{"INR " + item.props.price}</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 2 }}>
            <View>
              <Text className="text-gray-700">{item.props.category}</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
              <Text className="text-xs">
                <Text className="text-green-700">{item.props.rating}</Text>
                <Text className="text-gray-700"> ({item.props.reviews} reviews)</Text>
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8 }}>
            {/* Quantity Adjustment Buttons */}
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '32%', padding: 10, justifyContent: 'center', borderWidth: 1 }}>
              <TouchableOpacity onPress={handleDecrement} style={{ backgroundColor: 'black', borderRadius: 20 }}>
                <Text style={{ fontSize: 20, color: 'white', width: 25, height: 25, textAlign: 'center' }}>-</Text>
              </TouchableOpacity>

              <Text style={{ fontSize: 20, paddingHorizontal: 20 }}>{quantity}</Text>

              <TouchableOpacity onPress={handleIncrement} style={{ backgroundColor: 'black', borderRadius: 20 }}>
                <Text style={{ fontSize: 20, color: 'white', width: 25, height: 25, textAlign: 'center' }}>+</Text>
              </TouchableOpacity>
            </View>

            {/* Add to Cart Button */}
            <TouchableOpacity
              onPress={handleAddToCart}
              style={{ backgroundColor: 'black', padding: 10, width: '32%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
            >
              <Icon.ShoppingCart color="white" width={22} height={22} style={{ marginRight: 7 }} />
              <Text style={{ color: 'white', fontSize: 22 }}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleBuyNow} style={{ backgroundColor: '#1687E0', padding: 10, width: "32%", flexDirection: 'row', alignItems: 'center', justifyContent: "center"}}>
                <Text style={{ color: 'white', fontSize: 22 }}>Buy Now</Text>
            </TouchableOpacity>
            {showNotification && <CartNotification message="Item added to cart" />}
          </View>

          <View className="py-3" style={{ paddingBottom: 180}}>
            <Text className="font-bold underline" style={{ paddingTop: 10, paddingBottom: 15, fontSize: 20 }}>Product Info</Text>
            <DropdownSlider question="Specifications" specifications={item.props.specifications} /> 
            <DropdownSlider question="Features" specifications={{ 1: item.props.features[0], 2: item.props.features[1], 3: item.props.features[2] }} />
            <DropdownSlider question="Dimensions" specifications={item.props.dimensions} />
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
  )
}