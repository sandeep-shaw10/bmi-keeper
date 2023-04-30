import React, { PropsWithChildren, useContext } from 'react';
import {StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import bgStyle, { STATUSBAR_BG } from '../assets/Config';
import NavScreen from '../components/NavScreen';
import BMICalculator from '../components/BMI';
import { AppStateContext } from '../../App';


type ComponentsProps = PropsWithChildren<{
  navigation: any
}>;


const AppScreen = ({children, navigation}: ComponentsProps) => {
  const  { theme } = useContext(AppStateContext)
  return (
    <SafeAreaView style={ !theme ? bgStyle.DARK : bgStyle.LIGHT }>
      <StatusBar barStyle={ !theme ? 'dark-content' : 'light-content' } backgroundColor={ !theme ? STATUSBAR_BG.LIGHT : STATUSBAR_BG.DARK} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={ !theme ? bgStyle.DARK : bgStyle.LIGHT }>
        <NavScreen navigation={navigation} headerTitle="BMI Calculator" >
          <BMICalculator/>
        </NavScreen>
      </ScrollView>
    </SafeAreaView>
  );
};


export default AppScreen;
