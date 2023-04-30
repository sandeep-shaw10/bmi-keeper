import React, { PropsWithChildren, useContext } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { AppStateContext } from '../../App';
import NavScreen from '../components/NavScreen';
import { STATUSBAR_BG } from '../assets/Config';
import ShareSVG from '../components/SVG/Share';

type ComponentsProps = PropsWithChildren<{
  navigation: any
}>;


const ShareScreen = ({children, navigation}: ComponentsProps) => {
  const  { theme, t } = useContext(AppStateContext)

  const shareApp = async () => {
    try {
      const result = await Share.share({
        message: t("msg"),
        url: 'https://www.amazon.com/dp/B0C1XC555F',
        title: `${t("BMI")}${t("Calculator")}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={ !theme ? 'dark-content' : 'light-content' } backgroundColor={ !theme ? STATUSBAR_BG.LIGHT : STATUSBAR_BG.DARK} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" >
       <NavScreen navigation={navigation} headerTitle={t("Share Us")} >
            <View style={styles.container}>
                <View style={styles.starWrapper}>
                    <ShareSVG/>
                </View>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText} onPress={shareApp}>{t('Share')}</Text>
                </TouchableOpacity>
            </View>
        </NavScreen>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 100,
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 24,
    },
    button: {
      padding: 12,
      borderRadius: 6,
      marginBottom: 6,
      width: 200,
      backgroundColor: '#2196F3',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white'
    },
    starWrapper: {
        paddingBottom: 50
      },
  });

  
export default ShareScreen;