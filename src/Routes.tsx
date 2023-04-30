import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import AboutScreen from './pages/AboutScreen';
import AppScreen from './pages/AppScreen';
import RateScreen from './pages/RateScreen';
import SettingScreen from './pages/SettingScreen';
import ShareScreen from './pages/ShareScreen';
import SplashScreen from './pages/SplashScreen';


const Stack = createNativeStackNavigator();


const Routes = () => {

  const [splashScreenVisible, setSplashScreenVisible] = useState(true)
  const SPLASH_SCREEN_TIME = 2000

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashScreenVisible(false);
    }, SPLASH_SCREEN_TIME);

    return () => clearTimeout(timer);
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom'
        }}
      >
        { splashScreenVisible ? 
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} /> 
          : null 
        }
        <Stack.Screen name="Home" component={AppScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Rate" component={RateScreen} />
        <Stack.Screen name="Share" component={ShareScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Routes;