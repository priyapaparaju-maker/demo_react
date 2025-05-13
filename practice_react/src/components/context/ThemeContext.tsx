import React, {createContext} from 'react';
import {theme, defaulttheme} from './theme'

type ThemeContextProviderProps = {
    children: React.ReactNode
}
export const ThemeContext = createContext(defaulttheme)

export const ThemeContextProvider = ({children, }: ThemeContextProviderProps) => {
    return(
    <ThemeContext.Provider value={defaulttheme}>
    <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
        </ThemeContext.Provider>)
    
}       