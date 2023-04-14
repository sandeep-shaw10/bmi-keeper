import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


type ComponentsProps = PropsWithChildren<{
    placeholder: string,
    highlight: string,
    init: string,
    setInit: (x:string) => void,
    bg ?: string
}>;

const TextInputComponent = ({ placeholder, highlight, init, setInit, bg }: ComponentsProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (init || isFocus) {
      return (
        <Text style={[styles.label, { color: highlight, backgroundColor: bg ?? 'none' }]}>
          {placeholder}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={[styles.container, { backgroundColor: bg ?? 'none'}]}>
        {renderLabel()}
      <TextInput
        style = {[styles.inputBox, {color: highlight}]}
        inputMode='numeric'
        keyboardType='number-pad'
        placeholder={!isFocus ? placeholder : ''}
        placeholderTextColor={highlight}
        autoCapitalize={'sentences'}
        value={init ? String(init) : ''}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChangeText={(item: string) => {
          const lastVal = item.slice(-1);
          if (/[^0-9]/.test(lastVal)) {
            return;
          }
          if (item.indexOf('.') !== -1) {
            // remove number point and any digits after it
            const parts = item.split('.');
            setInit(parts[0]);
          } else {
            setInit(item);
          }
          setIsFocus(false);
        }}        
      />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
  },
  inputBox: {
    fontSize: 16,
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingLeft: 16
  },
  label: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
});