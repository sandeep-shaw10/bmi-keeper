import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useWindowDimensions } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { SEX, UI_CONTAINER, UI_WIDTH } from '../../assets/Config';


interface Props{
    title: string,
    age: number,
    setAge: (age: number) => void,
    sex: boolean,
    setSex: (sex: boolean) => void
}


export default function AgeSexInput({ title, age, setAge, sex, setSex} : Props) {
    const { width } = useWindowDimensions();
    const UI_WIDTH_EXTEND = 30

    
    return (
        <View style={[styles.container, {padding: UI_CONTAINER.INNER}]}>
            <Text style={styles.title}>{title}</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: width-2*(UI_CONTAINER.INNER+UI_CONTAINER.OUTER)- UI_WIDTH - UI_WIDTH_EXTEND, paddingRight: 4 }} >
                    <TextInput
                        style={[styles.input, { padding: UI_CONTAINER.INNER } ]}
                        placeholder="..."
                        keyboardType="numeric"
                        value={isNaN(age) ? '' : `${age}`}
                        onChangeText={(item: string) => {
                            const lastVal = item.slice(-1);
                            if (/[^0-9]/.test(lastVal)) {
                              return;
                            }
                            if (item.indexOf('.') !== -1) {
                              // remove number point and any digits after it
                              const parts = item.split('.');
                              setAge(parseInt(parts[0]));
                            } else {
                              setAge(parseInt(item));
                            }
                          }} 
                    />
                </View>
                <View style={[ styles.dropdown,  { width: UI_WIDTH + UI_WIDTH_EXTEND }]} >
                <Picker
                style={{  color: 'gray' }}
                    selectedValue={sex}
                    onValueChange={(sex) => setSex(sex)}>
                        {
                            SEX.map(({ val, label }, index) => <Picker.Item key={index} label={label} value={val}  /> )
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