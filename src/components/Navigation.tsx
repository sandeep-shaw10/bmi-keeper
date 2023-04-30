import React, { useContext } from 'react';
import { StyleSheet, View, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
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

  return (
    <View style={[styles.container, { width: width, height: height, opacity: isOpen ? 1: 0, backgroundColor: theme ? '#0f172a' : '#c2dfe7' }]}>
      <View>
        <Text style={{ fontSize: width/12, color: !theme ? '#111827': '#e5e7eb' }} >Logo</Text>
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
