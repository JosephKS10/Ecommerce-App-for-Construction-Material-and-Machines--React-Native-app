import { View, Text,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import MachineProductCard from './MachineProductCard'


export default function MachineFeatureRow(props) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-semibold text-lg">{props.name}</Text>
          <Text className="text-gray-500 text-xs" style={{width:300}}>
            {props.description}
          </Text>
        </View>
        
        <TouchableOpacity>
          <Text style={{color: themeColors.text}} className="font-semibold">See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        style={{ marginBottom: 15}}
        className="overflow-visible py-5">
        {
          props.best_seller_products.map(products=>{
            return (
                <MachineProductCard
                  key={products.productID}
                  id={products.productID}
                  imageURL={products.imageURL}
                  productName={products.productName}
                  rating={products.rating}
                  category={products.category}
                  address="123 main street"
                  price={products.price}
                  discount={products.discount}
                  companyImageUrl={props.companyImageUrl}
                  specifications={products.specifications}
                  features={products.features}
                  dimensions={products.dimensions}
              />    
            )
          })
        }           
       </ScrollView>
       
    </View>
  )
}