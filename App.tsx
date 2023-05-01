import React, { createContext, useEffect, useState } from 'react';
import Routes from './src/Routes';
import {useColorScheme, DeviceEventEmitter} from 'react-native';
import { LENGTH_UNITS, WEIGHT_UNITS } from './src/assets/Config';
import { getDataByKey, getStrByKey, setDataByKey } from './src/utils/AsyncStorage';
import { useTranslation } from 'react-i18next';
import './i18n'
import QuickActions, { ShortcutItem } from 'react-native-quick-actions';



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
    colorScheme: 'dark',
    quickLink: 'Home'
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
    const [quickLink, setQuickLink] = useState("Home")
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
        colorScheme,
        quickLink // redirect from quickLink via Splash Screen
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

        const SHORTCUTS = {
          ABOUT: "about",
          SETTING: "setting"
        }

        const processShortCut = (item: ShortcutItem) => {
          if(item.type === SHORTCUTS.ABOUT) setQuickLink("About")
          if(item.type === SHORTCUTS.SETTING) setQuickLink("Setting")
        }
    
        QuickActions.setShortcutItems([
          {
            type: SHORTCUTS.ABOUT,
            title: "About",
            subtitle: "Learn more about this app",
            icon: "about",
            userInfo: { url: "About" }
          },
          {
            type: SHORTCUTS.SETTING,
            title: "Settings",
            subtitle: "App Configuration",
            icon: "setting",
            userInfo: { url: "Setting" }
          }
        ])
    
        QuickActions.popInitialAction().then((item: ShortcutItem) => {
          processShortCut(item)
        }).catch((error) => {
          console.log(`Error: ${error}`)
        })
    
        DeviceEventEmitter.addListener('quickActionShortcut', (item: ShortcutItem) => {
          processShortCut(item)
        })
    
        return () => {
          QuickActions.clearShortcutItems()
          DeviceEventEmitter.removeAllListeners()
        }
    
      }, [])

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