import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import ConstructionMaterialInfoScreen from './screens/ConstructionMaterialInfoScreen';
import ProductListingScreen from './screens/ProductListingScreen';
import ProductInfo from './screens/ProductInfo';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import StartingScreen from './screens/StartingScreen';
import MachineHomeScreen from './screens/MachineHomeScreen';
import MachineMaterialInfoScreen from './screens/MachineMaterialInfo';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="StartScreen" component={StartingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MaterialInfo" component={ConstructionMaterialInfoScreen} />
        <Stack.Screen name="ProductListing" component={ProductListingScreen} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
        <Stack.Screen name="MachineHomeScreen" component={MachineHomeScreen} />
        <Stack.Screen name="MachineMaterialInfo" component={MachineMaterialInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}