import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation';
import { CartProvider } from './components/CartContext';
import Svg from "react-native-svg";

export default function App() {
  return (
    <CartProvider>
    <Navigation/>
    </CartProvider>
  );
}


