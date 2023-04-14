import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useWindowDimensions } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { LENGTH_UNITS, UI_CONTAINER, UI_WIDTH, WEIGHT_UNITS } from '../../assets/Config';


interface Props{
    title: string,
    value: string,
    setValue: (value: string) => void
    unitType: string
}


export default function CombinedUnitInput({ title, value, setValue, unitType} : Props) {
    const { width } = useWindowDimensions();
    const [selectedLanguage, setSelectedLanguage] = useState('cm');
    const units = unitType === 'weight' ? WEIGHT_UNITS : LENGTH_UNITS

    
    return (
        <View style={[styles.container, {padding: UI_CONTAINER.INNER}]}>
            <Text style={styles.title}>{title}</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: width-2*(UI_CONTAINER.INNER+UI_CONTAINER.OUTER)- UI_WIDTH, paddingRight: 4 }} >
                    <TextInput
                        style={[styles.input, { padding: UI_CONTAINER.INNER } ]}
                        placeholder="..."
                        keyboardType="numeric"
                        value={value}
                        onChangeText={(item: string) => {
                            const lastVal = item.slice(-1);
                            if (/[^0-9,.]/.test(lastVal)) {
                              return;
                            }
                            if (lastVal === ',') {
                              setValue(item.slice(0, -1));
                            } else {
                              const parts = item.split('.');
                              if (parts.length <= 2) {
                                setValue(item);
                              } else {
                                setValue(item.slice(0, -1));
                              }
                            }
                          }}
                    />
                </View>
                <View style={[ styles.dropdown,  { width: UI_WIDTH }]} >
                <Picker
                style={{  color: 'gray' }}
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                        {
                            units.map(({ unit }, index) => <Picker.Item key={index} label={unit} value={unit}  /> )
                        }
                    </Picker>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      paddingTop: 4,
      width: '100%',
    },
    input: {
        marginTop: 6,
        borderWidth: 1,
        borderRadius: 12,
        fontSize: 18,
        borderColor: 'gray',
        color: '#565656'
    },
    dropdown: {
        marginTop: 6,
        borderWidth: 1,
        borderRadius: 12,
        fontSize: 16,
        borderColor: 'gray',
        color: '#565656'
    },
    title:{
        fontSize: 24,
        color: '#565656'
    }
});