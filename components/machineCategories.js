import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { themeColors } from '../theme';
import { machineCategories } from '../constants';
import { useNavigation } from '@react-navigation/native';

export default function MachineCategories() {

    
    const [activeCategory, setActiveCategory] = useState(null);
    const navigation = useNavigation();

    const handleCategoryPress = (categoryId) => {
      // Navigate to the ProductListingScreen with the selected category ID
      navigation.navigate('ProductListing', { categoryId });
    };


  return (
    <View className="mt-4">
      <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="overflow-visible"
          contentContainerStyle={{
            paddingHorizontal: 15
          }}
      >

        {
            machineCategories.map((category,index)=>{
                console.log(activeCategory)
                let isActive = category.id==activeCategory;
                let btnClass = isActive? ' bg-gray-400': ' bg-white';
                let textClass = isActive? ' font-semibold text-gray-800': ' text-gray-500';

                return(
                    <View key={index} className="flex justify-center items-center mr-6">
                    <TouchableOpacity  onPress={()=> {setActiveCategory(category.id); handleCategoryPress(category.id)}} className={"p-1 rounded-full shadow"+btnClass} style={{borderWidth:1}}>
                        <Image style={{width:45,height:45}} source={category.image}></Image>
                   
                  </TouchableOpacity>
                  <Text className={"text-sm"+textClass} style={{textAlign:"center",maxWidth:130, minHeight:50}} >{category.name}</Text>

                    </View>
                )
            })
        }
           

    </ScrollView>
    </View>
  )
}