import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { useWindowDimensions } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { LENGTH_UNITS, UI_CONTAINER, UI_WIDTH, WEIGHT_UNITS } from '../../assets/Config';
import { AppStateContext } from '../../../App';


interface Props{
    title: string,
    value: string,
    setValue: (value: string) => void
    unitType: string
}


export default function CombinedUnitInput({ title, value, setValue, unitType} : Props) {
    const { width } = useWindowDimensions();
    const { heightUnit, setHeightUnit, weightUnit, setWeightUnit } = useContext(AppStateContext)
    
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
                    { unitType === 'weight' ? 
                    
                    // Weight
                    <Picker
                        style={{  color: 'gray' }}
                            selectedValue={weightUnit.unit}
                            onValueChange={(itemValue) => {
                                const selectedUnit = WEIGHT_UNITS.find(unit => unit.unit === itemValue);
                                if(selectedUnit) setWeightUnit(selectedUnit);
                                else setWeightUnit(WEIGHT_UNITS[0])
                            }}>
                            {
                                WEIGHT_UNITS.map(({ unit }, index) => <Picker.Item key={index} label={unit} value={unit}  /> )
                            }
                    </Picker>:

                    // Length
                    <Picker
                    style={{  color: 'gray' }}
                        selectedValue={heightUnit.unit}
                        onValueChange={(itemValue) => {
                            const selectedUnit = LENGTH_UNITS.find(unit => unit.unit === itemValue);
                            if(selectedUnit) setHeightUnit(selectedUnit);
                            else setHeightUnit(LENGTH_UNITS[0])
                        }}>
                        {
                            LENGTH_UNITS.map(({ unit }, index) => <Picker.Item key={index} label={unit} value={unit}  /> )
                        }
                    </Picker>
                    }
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