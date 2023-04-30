import React, { PropsWithChildren, useContext } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { AppStateContext } from '../../App';
import { STATUSBAR_BG } from '../assets/Config';
import NavScreen from '../components/NavScreen';

type ComponentsProps = PropsWithChildren<{
  navigation: any
}>;


const SettingScreen = ({children, navigation}: ComponentsProps) => {

  const  { theme, setTheme, setLanguage, t } = useContext(AppStateContext)
  const fontColor1 =!theme ? '#030712': '#e5e7eb'

  return (
    <SafeAreaView>
      <StatusBar barStyle={ !theme ? 'dark-content' : 'light-content' } backgroundColor={ !theme ? STATUSBAR_BG.LIGHT : STATUSBAR_BG.DARK} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" >
       <NavScreen navigation={navigation} headerTitle={t('Settings')} >
        <View style={{ paddingVertical: 20, paddingHorizontal: 12 }}>

            <View>
              <Text style={[styles.header, { color: fontColor1 }]}>{t('Change Theme')}</Text>
              <TouchableOpacity onPress={() => setTheme(!theme)} >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    { !theme ? t('DARK') : t('LIGHT') }
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={[styles.header, { color: fontColor1 }]}>{t('Select Language')}</Text>
              <View>
                <TouchableOpacity onPress={() => setLanguage('en')}>
                  <View style={styles.multiBtn}>
                    <Text style={styles.buttonText}>ENGLISH (EN) </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setLanguage('hi')}>
                  <View style={styles.multiBtn}>
                    <Text style={styles.buttonText}> हिंदी (HI) </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setLanguage('bn')}>
                  <View style={styles.multiBtn}>
                    <Text style={styles.buttonText}> বাংলা (BN) </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </NavScreen>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  header: {
    fontSize: 24
  },
  button: {
    marginBottom: 30,
    marginTop: 12,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 12
  },
  buttonText: {
    textAlign: 'center',
    paddingHorizontal: 6,
    paddingVertical: 12,
    color: 'white',
    fontSize: 20
  },
  multiBtn: {
    marginTop: 12,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 12
  }
});


export default SettingScreen;