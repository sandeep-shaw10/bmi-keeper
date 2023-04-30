import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AboutScreen from './pages/AboutScreen';
import AppScreen from './pages/AppScreen';
import RateScreen from './pages/RateScreen';
import SettingScreen from './pages/SettingScreen';
import ShareScreen from './pages/ShareScreen';


const Stack = createNativeStackNavigator();


const Routes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom'
        }}
      >
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