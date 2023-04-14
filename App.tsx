import React, { createContext, useState } from 'react';
import Routes from './src/Routes';
import {useColorScheme} from 'react-native';


const AppTheme = {
    DARK: true,
    LIGHT: false
}

const defaultValue: AppStateContextValue = {
    isOpen: false,
    theme: AppTheme.DARK,
    setIsOpen: ( ) => false,
    setTheme: ( ) => true
}

const AppStateContext = createContext(defaultValue);


const App = () => {

    const colorScheme = useColorScheme()
    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState(colorScheme === 'dark')
    const contextValue = {
        isOpen,
        theme,
        setIsOpen,
        setTheme
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