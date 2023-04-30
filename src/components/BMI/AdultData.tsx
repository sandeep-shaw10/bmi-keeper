import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AppStateContext } from '../../../App';


interface Props{
    data: BMICalculationResult
}


const AdultData = ({ data }: Props) => {
    const { weightUnit, t } = useContext(AppStateContext)
    let { bmi, status, color, range, value } = data
    const { lower, upper } = range
    const CHART = [
      { label: t('Underweight'), range: [0,18.4] },
      { label: t('Normal'), range: [18.5,24.9] },
      { label: t('Overweight'), range: [25,29.9] },
      { label: t('ObeseC1'), range: [30,34.9] },
      { label: t('ObeseC2'), range: [35,39.9] },
      { label: t('ObeseC3'), range: [40,'∞'] }
    ]
    const lowerLimit = (lower).toFixed(3)
    const upperLimit = (upper).toFixed(3)
    value = isNaN(bmi) ? -1 : value
    return (
      <View>

        { isNaN(bmi) ? null : <View style={{ backgroundColor: color[0], margin: 12, padding: 12, paddingTop: 6, borderRadius: 12 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 48 }}>
            { isFinite(bmi) ? bmi.toFixed(2) : '∞'}
          </Text>
          <Text style={{ color: color[1], fontWeight: 'bold', fontSize: 32 }}>
            {t(`${status}`)}
          </Text>

          { isFinite(bmi) ? <View>
            <View style={{ borderWidth: 0.5, marginTop: 4, marginBottom: 4, borderColor: 'white' }} />
            
            <View style={{ paddingTop: 12 }}>
              <Text style={{ fontSize: 18, color: color[1] }}>{t('Ideal Weight')}: </Text>
            </View>
            <View style={{ backgroundColor: 'white', padding: 6, borderRadius: 8, marginTop: 8 }}>
              <Text style={{ fontSize: 20, color: color[0], fontWeight: 'bold' }}>
                {lowerLimit} - {upperLimit} {t(`${weightUnit.unit}`)}
              </Text>
            </View>
          </View>: null}


        </View>
}

        <View style={{ backgroundColor: '#121212', margin: 12, padding: 12, paddingBottom: 18, borderRadius: 12 }}>
          <Text style={{ color: 'white', fontSize: 32 }}>{t('Classifications')}</Text>
          <Text style={{ color: 'white', fontSize: 16 }}>{t('For Adult above age 20')}</Text>
          <View style={{ paddingTop: 6 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding:2, paddingHorizontal: 8 }}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>{t('Category')}</Text>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>{t('BMI')}</Text>
            </View>
            { CHART.map(({ label, range}, index) => <View key={index} style={[{ flexDirection: 'row', justifyContent: 'space-between', padding:2, paddingHorizontal: 8 }, index === value && {backgroundColor: color[0], borderRadius: 8, opacity:0.5}]}>
              <Text style={{ color: 'white' }}>{label}</Text>
              <Text style={{ color: 'white' }}>{range[0]} - {range[1]}</Text>
            </View>)}
          </View>
        </View>
      </View>
    )
  }


export default AdultData;