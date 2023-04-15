import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AppStateContext } from '../../../App';
import BMICalculation from '../../utils/BMI';
import AgeSexInput from '../DataInput/AgeSexInput';
import CombinedUnitInput from '../DataInput/CombinedUnitInput';
import AdultData from './AdultData';
import ChildrenData from './ChildrenData';
import InfantData from './InfantData';


const BMICalculator = () => {
  const [sex, setSex] = useState<boolean>(false) // { 0: male, 1: female }
  const [age, setAge] = useState<number>(0)
  const [height, setHeight] = useState<string>('')
  const [weight, setWeight] = useState<string>('')
  const {heightUnit, weightUnit} = useContext(AppStateContext)
  const OUTPUT = BMICalculation(age, sex, weight, height, heightUnit.conversion, weightUnit.conversion)

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