import React, { useContext } from 'react';
import { StyleSheet, View, Text, useWindowDimensions, TouchableOpacity, Image } from 'react-native';
import { AppStateContext } from '../../App';


const Navigation = ({ navigation }: any) => {

  const {height, width} = useWindowDimensions();
  const {isOpen, setIsOpen, theme, t } = useContext(AppStateContext)
  const links = [
    { text: t('BMI'), to: 'Home' },
    { text: t('About'), to: 'About' },
    { text: t('Settings'), to: 'Setting' },
    { text: t('Share Us'), to: 'Share' },
    { text: t('Rate Us'), to: 'Rate' }
  ]
  var icon =  require('../assets/logo.png')

  return (
    <View style={[styles.container, { width: width, height: height, opacity: isOpen ? 1: 0, backgroundColor: theme ? '#0f172a' : '#c2dfe7' }]}>
      <View>
      <Image
        source={icon}
        style={{width: 96, height: 96 }}
      />
        <Text style={{ fontSize: width/13, color: !theme ? '#111827': '#e5e7eb', paddingBottom: 12 }} >BMI Keeper</Text>
        <View style={{ paddingLeft: 10, paddingTop: 10 }}>
          {links.map( ({ text, to }, index) => <View key={index} style={{ paddingBottom: 10 }}>
            <TouchableOpacity onPress={() => {
              setIsOpen(false)
              navigation.navigate(to)
            }}>
              <Text style={{ fontSize: width/20, color: !theme ? '#111827': '#e5e7eb' }}>{text}</Text>
            </TouchableOpacity>
          </View>)}
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 0, alignItems: 'center' }}>
        <Text style={{ 
            fontSize: 16, 
            fontStyle: 'italic', 
            color: !theme ? '#111827': '#e5e7eb',
            padding: 24 
          }} >
          v1.0.0
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    zIndex: 1
  },
});

export default Navigation;
