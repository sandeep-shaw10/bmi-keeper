import React, { PropsWithChildren, useContext } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { AppStateContext } from '../../App';
import NavScreen from '../components/NavScreen';
import { STATUSBAR_BG, BG_COLOR_DARK as dark, BG_COLOR_LIGHT as light } from '../assets/Config';
import Star from '../components/SVG/Star';

type ComponentsProps = PropsWithChildren<{
  navigation: any
}>;


const RateScreen = ({children, navigation}: ComponentsProps) => {
  const  { theme, t } = useContext(AppStateContext)

  const openWebLink = (weblink: string) => {
    Linking.openURL(weblink);
  };

  const allBtn = [
    {
        name: t("Github"),
        link: "https://github.com/sandeep-shaw10",
        bg: "#161b22",
        color: "#f0f6fc"
    },
    {
        name: t("Amazon Appstore"),
        link: "https://www.amazon.com/s?i=mobile-apps&rh=p_4%3ASandNativeDev&search-type=ss",
        bg: "#232f3e",
        color: "#ff9900"
    },
  ]

  return (
    <SafeAreaView>
      <StatusBar barStyle={ !theme ? 'dark-content' : 'light-content' } backgroundColor={ !theme ? STATUSBAR_BG.LIGHT : STATUSBAR_BG.DARK} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" >
       <NavScreen navigation={navigation} headerTitle={t("Rate Us")} >
            <View style={styles.container}>
                <View style={styles.starWrapper}>
                    <Star/>
                </View>
                {allBtn.map(({name, link, bg, color}, index) => <TouchableOpacity key={index} onPress={() => openWebLink(link)} style={[styles.button, {backgroundColor: bg}]}>
                    <Text style={[styles.buttonText, {color: color}]}>{name}</Text>
                </TouchableOpacity>)}
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
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    starWrapper: {
        paddingBottom: 50
      },
  });

  
export default RateScreen;