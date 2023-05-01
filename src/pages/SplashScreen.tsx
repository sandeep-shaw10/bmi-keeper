import React, { PropsWithChildren, useContext, useEffect } from 'react';
import { View, Text, StatusBar, ScrollView, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { AppStateContext } from '../../App';
import { SPLASH_BG, SPLASH_SCREEN_TIME, STATUSBAR_BG } from '../assets/Config';
import HeartSVG from '../components/SVG/Heart';

type ComponentsProps = PropsWithChildren<{
  navigation: any
}>;


const SplashScreen = ({children, navigation}: ComponentsProps) => {
  const {height} = useWindowDimensions()
  const { quickLink } = useContext(AppStateContext)

  useEffect(() => {
    // console.log(`Shortcut Link: ${quickLink}`)
    const timer = setTimeout(() => {
      if(quickLink !== "Home"){
        navigation.navigate(quickLink)
      }
    }, SPLASH_SCREEN_TIME*0.75);

    return () => clearTimeout(timer);
  }, [quickLink])

  return (
    <SafeAreaView>
      <StatusBar barStyle='light-content' backgroundColor={SPLASH_BG} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" >
        <View style={[styles.container, { height: height, backgroundColor: SPLASH_BG }]}>
            <View style={styles.starWrapper}>
                <HeartSVG/>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.head}>BMI Keeper</Text>
              <Text style={styles.version}>v1.0.0</Text>
            </View>
            <View style={{ position: 'absolute', bottom: 20, alignItems: 'center' }}>
              <Text style={styles.dev1}>Made with 💙 by</Text>
              <Text style={styles.dev2}>Sandeep Shaw</Text>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      paddingTop: 100,
      alignItems: 'center',
      alignContent: 'space-between'
    },
    head: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 6,
      color: 'white'
    },
    version: {
      fontSize: 18,
      marginBottom: 24,
      color: 'white',
      fontWeight: 'bold',
    },
    dev1: {
      fontSize: 16,
      color: 'white',
    },
    dev2: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      marginBottom: 24,
    },
    starWrapper: {
        paddingBottom: 50
      },
  });

  
export default SplashScreen;