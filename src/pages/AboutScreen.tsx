import React, { PropsWithChildren, useContext } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { AppStateContext } from '../../App';
import NavScreen from '../components/NavScreen';
import bgStyle, { STATUSBAR_BG } from '../assets/Config';

type ComponentsProps = PropsWithChildren<{
  navigation: any
}>;


const AboutScreen = ({children, navigation}: ComponentsProps) => {
  const  { theme, t } = useContext(AppStateContext)
  return (
    <SafeAreaView>
      <StatusBar barStyle={ !theme ? 'dark-content' : 'light-content' } backgroundColor={ !theme ? STATUSBAR_BG.LIGHT : STATUSBAR_BG.DARK} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" >
       <NavScreen navigation={navigation} headerTitle={t("About")} >
        <View>
            <Text style={{ color: 'cyan' }}>ABOUT</Text>
          </View>
        </NavScreen>
      </ScrollView>
    </SafeAreaView>
  );
};


export default AboutScreen;