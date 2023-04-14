import React, { PropsWithChildren } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import NavScreen from '../components/NavScreen';

type ComponentsProps = PropsWithChildren<{
  navigation: any
}>;


const AboutScreen = ({children, navigation}: ComponentsProps) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content'/>
      <ScrollView contentInsetAdjustmentBehavior="automatic" >
       <NavScreen navigation={navigation} headerTitle="About" >
        <View>
            <Text style={{ color: 'red' }}>ABOUT</Text>
          </View>
        </NavScreen>
      </ScrollView>
    </SafeAreaView>
  );
};


export default AboutScreen;