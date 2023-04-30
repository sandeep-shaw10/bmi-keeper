import React, { PropsWithChildren, useContext } from 'react';
import { StatusBar, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { AppStateContext } from '../../App';
import NavScreen from '../components/NavScreen';
import bgStyle, { STATUSBAR_BG } from '../assets/Config';
import AboutPage from '../components/AboutPage';

type ComponentsProps = PropsWithChildren<{
  navigation: any
}>;


const AboutScreen = ({children, navigation}: ComponentsProps) => {
  const  { theme, t } = useContext(AppStateContext)
  return (
    <SafeAreaView>
      <StatusBar barStyle={ !theme ? 'dark-content' : 'light-content' } backgroundColor={ !theme ? STATUSBAR_BG.LIGHT : STATUSBAR_BG.DARK} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={ !theme ? bgStyle.DARK : bgStyle.LIGHT }>
       <NavScreen navigation={navigation} headerTitle={t("About")} >
          <AboutPage />
        </NavScreen>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30
  },

  section: {
    paddingBottom: 32
  },

  head: {
    fontWeight: 'bold'
  },

  data: {
    paddingVertical: 6,
    textAlign: 'justify'
  }
});


export default AboutScreen;