import React, { PropsWithChildren } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import NavScreen from '../components/NavScreen';

type ComponentsProps = PropsWithChildren<{
  navigation: any
}>;


const SettingScreen = ({children, navigation}: ComponentsProps) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle='dark-content'/>
      <ScrollView contentInsetAdjustmentBehavior="automatic" >
       <NavScreen navigation={navigation} headerTitle="Setting" >
        <View>
            <Text style={{ color: 'red' }}>Theme</Text>
            <Text style={{ color: 'red' }}>Size</Text>
            <Text style={{ color: 'red' }}>Language</Text>
          </View>
        </NavScreen>
      </ScrollView>
    </SafeAreaView>
  );
};


export default SettingScreen;