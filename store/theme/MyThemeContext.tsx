import React, { createContext, ReactElement, useEffect, useState } from "react";

export const MyThemeContext = createContext({
    isDarkTheme: true,      // for intellisense.
    togThemeHdl: () => {}
})
//export const MytogThemeHdlContext = createContext({togThemeHdl})
interface ThemePropsInterface {
    children?: JSX.Element | Array<JSX.Element>
}

export function MyThemeContextProvider(props: ThemePropsInterface): ReactElement {
    const [isDarkTheme, setIsDarkTheme ] = useState(false);

    useEffect(() => initialThemeHandler(), []);

    function isLocalStorageNotEmpty(): boolean {
        return !!localStorage.getItem("isDarkTheme")
    }
    function initialThemeHandler(): void {
        if (isLocalStorageNotEmpty()) {
            const isLSDarkMode : boolean = JSON.parse(localStorage.getItem("isDarkTheme"));
            isLSDarkMode && document!.querySelector("body")!.classList.add(`dark`)
            setIsDarkTheme(!isLSDarkMode)
        }
        else {
            localStorage.setItem("isDarkTheme", `false`)
            document!.querySelector("body")!.classList.remove(`dark`)
            setIsDarkTheme(false)
        }
    }

    function toggleThemeHdl():void {
        const isLSDarkMode: Boolean = JSON.parse(localStorage.getItem("isDarkTheme"));
        setIsDarkTheme(!isLSDarkMode)
        document!.querySelector('body')!.classList.toggle('dark')
        localStorage.setItem("isDarkTheme", `${!isLSDarkMode}`)
    }

    return (
        <MyThemeContext.Provider value={{isDarkTheme: true, togThemeHdl: toggleThemeHdl }}>
            {props.children}
        </MyThemeContext.Provider>
    )
}