import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import { products, categories } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductListingScreen = ({ route }) => {
  const navigation = useNavigation();
  const { categoryId } = route.params;

  const selectedCategory = categories.find((category) => category.id === categoryId);
  const filteredProducts = products.filter((product) => product.category === selectedCategory.name);

  const handleProductPress = (product) => {
    // Navigate to the product details screen (You can replace 'MaterialInfo' with your actual screen name)
    console.log(product)
    navigation.navigate('ProductInfo', { props: product });
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleProductPress(item)}
      style={{ margin: 16, backgroundColor: 'white', borderRadius: 8, overflow: 'hidden' }}
    >
      <Image source={{ uri: item.imageURL }} style={{ height: 200, width: '100%' }} />
      <View style={{ paddingTop: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.productName}</Text>
        <Text style={{ fontSize: 14, color: 'gray' }}>{`INR ${item.price}`}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: 'absolute', top: 40, left: 20, backgroundColor: 'white', padding: 8, borderRadius: 50, borderWidth:1}}
        >
      
         <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
      </TouchableOpacity>

      
      <FlatList data={filteredProducts} keyExtractor={(item) => item.productID} renderItem={renderProductItem} style={{marginTop: 50, padding:10}}/>
    </SafeAreaView>
  );
};

export default ProductListingScreen;
