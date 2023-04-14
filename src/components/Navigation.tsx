import React, { useContext } from 'react';
import { StyleSheet, View, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import { AppStateContext } from '../../App';


const Navigation = ({ navigation }: any) => {

  const {height, width} = useWindowDimensions();
  const {isOpen, setIsOpen} = useContext(AppStateContext)
  const links = [
    { text: 'BMI', to: 'Home' },
    { text: 'About', to: 'About' },
    { text: 'Settings', to: 'Setting' },
    { text: 'History', to: 'About' },
    { text: 'Share US', to: 'About' },
    { text: 'Rate US', to: 'About' },
    { text: 'Feedback', to: 'About' }
  ]

  return (
    <View style={[styles.container, { width: width, height: height, opacity: isOpen ? 1: 0 }]}>
      <View>
        <Text style={{ fontSize: width/12 }} >Logo</Text>
        <View style={{ paddingLeft: 10, paddingTop: 10 }}>
          {links.map( ({ text, to }, index) => <View key={index} style={{ paddingBottom: 10 }}>
            <TouchableOpacity onPress={() => {
              setIsOpen(false)
              navigation.navigate(to)
            }}>
              <Text style={{ fontSize: width/20 }}>{text}</Text>
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
    backgroundColor: '#c2dfe7',
    zIndex: 1
  },
});

export default Navigation;
