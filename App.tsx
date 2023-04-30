import React, { createContext, useEffect, useState } from 'react';
import Routes from './src/Routes';
import {useColorScheme} from 'react-native';
import { LENGTH_UNITS, WEIGHT_UNITS } from './src/assets/Config';
import { getDataByKey, getStrByKey, setDataByKey } from './src/utils/AsyncStorage';
import { useTranslation } from 'react-i18next';
import './i18n'


const AppTheme = {
    DARK: true,
    LIGHT: false
}

const defaultValue: AppStateContextValue = {
    isOpen: false,
    theme: AppTheme.DARK,
    setIsOpen: ( ) => false,
    setTheme: ( ) => true,
    heightUnit: LENGTH_UNITS[0],
    setHeightUnit: () => LENGTH_UNITS[0],
    weightUnit: WEIGHT_UNITS[0],
    setWeightUnit: () => WEIGHT_UNITS[0],
    language: 'en',
    setLanguage: () => 'en',
    t: null,
    colorScheme: 'dark'
}

const AppStateContext = createContext(defaultValue);


const App = () => {
    const {t, i18n} = useTranslation();
    const colorScheme = useColorScheme()
    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState<boolean>(colorScheme === 'dark')
    const [heightUnit, setHeightUnit] = useState(LENGTH_UNITS[0])
    const [weightUnit, setWeightUnit] = useState(WEIGHT_UNITS[0])
    const [language, setLanguage] = useState('en')
    const contextValue = {
        isOpen,
        theme,
        setIsOpen,
        setTheme,
        heightUnit,
        setHeightUnit,
        weightUnit,
        setWeightUnit,
        language,
        setLanguage,
        t,
        colorScheme
    }

    useEffect(() => {
        const fetchData = async () => {
          const value = await getDataByKey('@bmi_calc_theme');
          if (value !== null) setTheme(value);
          else {
            setDataByKey('@bmi_calc_theme', `${colorScheme === 'dark'}`)
          }
        };

        const fetchLanguage = async () => {
            const value = await getStrByKey('@bmi_calc_lang');
            if (value !== null) setLanguage(value);
            else {
              setDataByKey('@bmi_calc_lang', `en`)
            }
          };

        fetchData();
        fetchLanguage();
      }, []);

      useEffect(() => {
        setDataByKey('@bmi_calc_theme', `${theme}`)
      }, [theme]);

      useEffect(() => {
        setDataByKey('@bmi_calc_lang', `${language}`)
        i18n.changeLanguage(language)
      }, [language]);

    return(
        <AppStateContext.Provider value={contextValue}>
            <Routes/>
        </AppStateContext.Provider>
    )
}

export default App;
export {
    AppStateContext,
    AppTheme
}