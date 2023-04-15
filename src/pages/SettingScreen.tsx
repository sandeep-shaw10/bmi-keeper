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

  const  { theme, setTheme } = useContext(AppStateContext)
  const fontColor1 =!theme ? '#030712': '#e5e7eb'

  return (
    <SafeAreaView>
      <StatusBar barStyle={ !theme ? 'dark-content' : 'light-content' } backgroundColor={ !theme ? STATUSBAR_BG.LIGHT : STATUSBAR_BG.DARK} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" >
       <NavScreen navigation={navigation} headerTitle="Setting" >
        <View style={{ paddingVertical: 20, paddingHorizontal: 12 }}>

            <View>
              <Text style={[styles.header, { color: fontColor1 }]}>Change Theme</Text>
              <TouchableOpacity onPress={() => setTheme(!theme)} >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    { theme ? 'DARK' : 'LIGHT' }
                  </Text>
                </View>
              </TouchableOpacity>
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
    width: 160,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 12
  },
  buttonText: {
    textAlign: 'center',
    paddingHorizontal: 6,
    paddingVertical: 12,
    color: 'white',
  }
});


export default SettingScreen;