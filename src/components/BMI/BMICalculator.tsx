import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BMICalculation from '../../utils/BMI';
import AgeSexInput from '../DataInput/AgeSexInput';
import CombinedUnitInput from '../DataInput/CombinedUnitInput';
import AdultData from './AdultData';
import ChildrenData from './ChildrenData';


interface Props{
  data: BMICalculationResult
}


const InfantData = () => {
  return (
    <View style={{ backgroundColor: '#fda4af', margin: 12, padding: 12, borderRadius: 12 }}>
      <Text style={{ color: '#881337', fontWeight: 'bold', fontSize: 32 }}>Too Young</Text>
      <Text style={{ color: 'white', fontSize: 16 }}>BMI can't be calculated</Text>
    </View>
  )
}


const BMICalculator = () => {
  const [sex, setSex] = useState<boolean>(false) // { 0: male, 1: female }
  const [age, setAge] = useState<number>(0)
  const [height, setHeight] = useState<string>('')
  const [weight, setWeight] = useState<string>('')
  const OUTPUT = BMICalculation(age, sex, weight, height)

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
    <View style={styles.container}>
      <AgeSexInput title={'Age'} age={age} setAge={setAge} sex={sex} setSex={setSex} />
      <CombinedUnitInput unitType='height' title={'Height'} value={height} setValue={setHeight} />
      <CombinedUnitInput unitType='weight' title={'Weight'} value={weight} setValue={setWeight} />
    </View>
    <View>
      {
        isNaN(age) ? null :
        age <= 1 ? <InfantData /> : 
        age >= 2 && age <= 20 ? <ChildrenData data={OUTPUT}  /> :
        <AdultData data={OUTPUT} />
      }
    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  }
});


export default BMICalculator;