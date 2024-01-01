import * as Icon from "react-native-feather";

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import Collapsible from 'react-native-collapsible';
import HTML from 'react-native-render-html';

const DropdownSlider = ({ question, specifications }) => {
  const [collapsed, setCollapsed] = useState(true);
  const { width } = useWindowDimensions();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const renderSpecifications = () => {
    const specificationsArray = Object.entries(specifications);
  
    return specificationsArray.map(([key, value]) => {
      if (isNaN(key)) {
        // Render key and value if the key is not a number
        return `<li key=${key}><strong>${key}:</strong> ${value}</li>`;
      } else {
        // Render only the value if the key is a number
        return `<li>${value}</li>`;
      }
    }).join('');
  };

  return (
    <View style={{ marginVertical: 5 }}>
      <TouchableOpacity onPress={toggleCollapse} style={{ backgroundColor: '#E5E5E5', padding: 10, borderRadius: 8, flexDirection:"row", justifyContent:"space-between" }}>
        <Text style={{ fontWeight: 'bold', fontSize:18}}>{question}</Text>
        <Icon.ChevronDown color="black" style={{width:"22", height:"22"}}/>
      </TouchableOpacity>

      <Collapsible collapsed={collapsed}>
        <View style={{ padding: 10 }}>
          <HTML source={{ html: `<ul>${renderSpecifications()}</ul>` }} contentWidth={width} />
        </View>
      </Collapsible>
    </View>
  );
};

export default DropdownSlider;


