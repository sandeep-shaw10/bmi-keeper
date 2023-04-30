import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AppStateContext } from '../../../App';


const InfantData = ( ) => {
  const {t} = useContext(AppStateContext)
    return(
        <View style={{ backgroundColor: '#fda4af', margin: 12, padding: 12, borderRadius: 12 }}>
        <Text style={{ color: '#881337', fontWeight: 'bold', fontSize: 32 }}>{t('Too Young')}</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>{t("BMI")}{t("can't be calculated")}</Text>
      </View>
    )
  }


export default InfantData;