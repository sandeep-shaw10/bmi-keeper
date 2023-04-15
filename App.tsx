import React, { createContext, useState } from 'react';
import Routes from './src/Routes';
import {useColorScheme} from 'react-native';
import { LENGTH_UNITS, WEIGHT_UNITS } from './src/assets/Config';


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
    setWeightUnit: () => WEIGHT_UNITS[0]
}

const AppStateContext = createContext(defaultValue);


const App = () => {

    const colorScheme = useColorScheme()
    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState(colorScheme === 'dark')
    const [heightUnit, setHeightUnit] = useState(LENGTH_UNITS[0])
    const [weightUnit, setWeightUnit] = useState(WEIGHT_UNITS[0])
    const contextValue = {
        isOpen,
        theme,
        setIsOpen,
        setTheme,
        heightUnit,
        setHeightUnit,
        weightUnit,
        setWeightUnit
    }

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