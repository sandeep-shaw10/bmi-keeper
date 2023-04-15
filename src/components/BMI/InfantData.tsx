import React from 'react';
import { View, Text } from 'react-native';


const InfantData = ( ) => {
    return(
        <View style={{ backgroundColor: '#fda4af', margin: 12, padding: 12, borderRadius: 12 }}>
        <Text style={{ color: '#881337', fontWeight: 'bold', fontSize: 32 }}>Too Young</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>BMI can't be calculated</Text>
      </View>
    )
  }


export default InfantData;