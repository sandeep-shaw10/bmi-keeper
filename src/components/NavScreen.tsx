import React, { useState, useEffect, ReactNode, useContext } from 'react';
import { StyleSheet, View, Text, Animated, Pressable } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { AppStateContext } from '../../App';
import { UI_CONTAINER } from '../assets/Config';
import Navigation from './Navigation';
import Medical from './SVG/Medical';


interface Props {
  children: ReactNode;
  headerTitle: string;
  navigation: any;
}

const NavScreen = ({ children, headerTitle, navigation }: Props) => {
  const {isOpen, setIsOpen, theme} = useContext(AppStateContext)
  const { height, width } = useWindowDimensions();
  const [animatedValue] = useState(new Animated.Value(0));
  const scale = animatedValue.interpolate({ inputRange: [0, 1], outputRange: [1, 0.8] });
  const translateX = animatedValue.interpolate({ inputRange: [0, 1], outputRange: [0, width / 2 + 50] });
  const borderRadius = animatedValue.interpolate({ inputRange: [0, 1], outputRange: [0, 20] });

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedValue, {
        toValue: isOpen ? 1 : 0,
        duration: 150,
        useNativeDriver: false,
      }),
    ]).start();
  }, [isOpen, animatedValue]);

  return (
    <View>
        <Animated.View
        style={[
            styles.container,
            {
              width: width,
              height: height,
              zIndex: 2,
              transform: [{ scale }, { translateX }],
              borderRadius,
              padding: UI_CONTAINER.OUTER,
              backgroundColor: theme ? '#060e23': '#f7fefe',
            },
        ]}
        >
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <View>
            <Pressable onPress={() => setIsOpen(!isOpen)}>
                <Text>{isOpen ? <Medical size={32} color={`${!theme ? '#060e23': '#f7fefe'}`} degree={45} /> : <Medical size={32} color={`${!theme ? '#060e23': '#f7fefe'}`} /> }</Text>
            </Pressable>
            </View>
            <View style={{
              paddingLeft: 10
            }}>
            <Text style={{ fontSize: 32, color: !theme ? '#060e23': '#f7fefe' }}>{headerTitle}</Text>
            </View>
        </View>
        {children}
        </Animated.View>
        <Navigation navigation={navigation} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});


export default NavScreen;
