import { View, Text, SafeAreaView, StatusBar, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import * as Icon from "react-native-feather";
import React from 'react'
import { themeColors } from '../theme'

import { machineCompanies } from '../constants';

import { useNavigation } from '@react-navigation/native';
import MachineCategories from '../components/machineCategories';
import MachineFeatureRow from '../components/MachineFeatureRow';

export default function HomeScreen() {
    const navigation = useNavigation();


    const handleCartPress = () => {
         navigation.navigate('Cart');
      };

  return (
    <SafeAreaView className="bg-white" >
      <StatusBar barStyle="dark-content"/>

      {/* search bar */}
      <View style={styles.header}>
  <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
    <Icon.ArrowLeft strokeWidth={3} stroke={"white"} />
  </TouchableOpacity>

  <View style={styles.searchContainer}>
    <Icon.Search height="25" width="25" stroke={themeColors.bgColor(1)} />
    <TextInput placeholder='Search Machines....' style={styles.searchInput} keyboardType='default'/>
  </View>

</View>


        {/* main area */}
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 50
        }}>

        {/* categories */}
        <MachineCategories/>

        {/* Featured companies */}
        <View className="mt-5">
            <Text className="font-bold text-lg px-4 underline" style={{fontWeight:800}}>Featured</Text>
            {
                machineCompanies.map((item,index)=>{
                    return(
                        <MachineFeatureRow
                            key={index}
                            id={item.company_id}
                            name={item.companyName}
                            companyImageUrl={item.companyImageUrl}
                            best_seller_products={item.bestSellers}
                            description={item.companyDescription}
                        />
                    )
                })
            }
        </View>

    </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    iconContainer: {
      padding: 12,
      borderRadius: 999, // Large value for a circle
      backgroundColor: themeColors.bgColor(1), // Adjust as needed
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      marginLeft: 16, // Adjust as needed
      marginRight: 16, // Adjust as needed
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ddd', // Adjust as needed
      backgroundColor: 'white', // Adjust as needed
      padding:10
    },
    searchInput: {
      flex: 1,
      marginLeft: 8,
    },
  });
  