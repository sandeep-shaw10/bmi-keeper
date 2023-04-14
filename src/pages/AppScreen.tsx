import React, { PropsWithChildren } from 'react';
import {StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import bgStyle from '../assets/Config';
import NavScreen from '../components/NavScreen';
import BMICalculator from '../components/BMI/BMICalculator';


type ComponentsProps = PropsWithChildren<{
  navigation: any
}>;


const AppScreen = ({children, navigation}: ComponentsProps) => {
  return (
    <SafeAreaView style={bgStyle}>
      <StatusBar barStyle='dark-content' backgroundColor={bgStyle.backgroundColor} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={bgStyle}>
        <NavScreen navigation={navigation} headerTitle="BMI Calculator" >
          <BMICalculator/>
        </NavScreen>
      </ScrollView>
    </SafeAreaView>
  );
};


export default AppScreen;
