import React, { PropsWithChildren, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { AppStateContext } from '../../App';

type ComponentsProps = PropsWithChildren<{
}>;


const AboutPage = ({children }: ComponentsProps) => {
  const  { theme, t } = useContext(AppStateContext)
  const screenWidth = Dimensions.get('window').width;
  const sizeHead = screenWidth > 392 ? 32 : 24
  const sizeData = screenWidth > 392 ? 18 : 14
  return (
      <ScrollView contentInsetAdjustmentBehavior="automatic" >
          <View style={styles.container}>
            <View style={styles.section} >
              <Text style={[styles.head, { fontSize: sizeHead, color: theme ? '#3b82f6' : '#172554' }]} >{t('What is BMI')} ?</Text>
              <Text style={[styles.data, { fontSize: sizeData, color: theme ? '#cffafe' : '#64748b' }]} >{t('about_bmi')}</Text>
            </View>

            <View style={styles.section} >
              <Text style={[styles.head, { fontSize: sizeHead, color: theme ? '#3b82f6' : '#172554' }]} >{t('Calculation')} ?</Text>
              <Text style={[styles.data, { fontSize: sizeData, color: theme ? '#cffafe' : '#64748b' }]} >{t('about_calc')}</Text>
            </View>

            <View style={styles.section} >
              <Text style={[styles.head, { fontSize: sizeHead, color: theme ? '#3b82f6' : '#172554' }]} >{t('Pros')} ?</Text>
              <Text style={[styles.data, { fontSize: sizeData, color: theme ? '#cffafe' : '#64748b' }]} >{t('about_pros')}</Text>
            </View>

            <View style={styles.section} >
              <Text style={[styles.head, { fontSize: sizeHead, color: theme ? '#3b82f6' : '#172554' }]} >{t('Cons')} ?</Text>
              <Text style={[styles.data, { fontSize: sizeData, color: theme ? '#cffafe' : '#64748b' }]} >{t('about_pros')}</Text>
            </View>

            <View style={styles.section} >
              <Text style={[styles.head, { fontSize: sizeHead, color: theme ? '#3b82f6' : '#172554' }]} >{t('Developer')} ?</Text>
              <Text style={[styles.data, { fontSize: sizeData, color: theme ? '#cffafe' : '#64748b' }]} >{t('about_dev')}</Text>
            </View>


          </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30
  },

  section: {
    paddingBottom: 32
  },

  head: {
    fontWeight: 'bold'
  },

  data: {
    paddingVertical: 6,
    textAlign: 'justify'
  }
});


export default AboutPage;