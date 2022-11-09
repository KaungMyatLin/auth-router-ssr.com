import { createContext } from 'react'

export const themes = {
    dark: "",
    bright: "white-content"
}

export const ThemeContext = createContext({
    theme: themes.dark,
    toggle: () => {}
})