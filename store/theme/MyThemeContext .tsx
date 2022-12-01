import React, { createContext, ReactElement, useEffect, useState } from "react";

export const MyThemeContext = createContext({
    isDarkTheme: true,
    togThemeHdl: () => {}
})

interface ThemePropsInterface {
    children?: JSX.Element | Array<JSX.Element>
}

export function MyThemeContextProvider(props: ThemePropsInterface): ReactElement {
    const [isDarkTheme, setIsDarkTheme ] = useState(false);

    useEffect(() => initialThemeHandler());

    function isLocalStorageNotEmpty(): boolean {
        return !!localStorage.getItem("isDarkTheme")
    }
    function initialThemeHandler(): void {
        if (isLocalStorageNotEmpty()) {
            const isDarkTheme: boolean = JSON.parse(localStorage.getItem("isDarkTheme"));
            isDarkTheme && document!.querySelector("body")!.classList.add(`dark`)

            setIsDarkTheme(!isDarkTheme)
        }
        else {
            localStorage.setItem("isDarkTheme", `false`)
            document!.querySelector("body")!.classList.remove(`dark`)
            setIsDarkTheme(false)
        }
    }

    function toggleThemeHdl():void {
        const isDarkMode: Boolean = JSON.parse(localStorage.getItem("isDarkTheme"));
        setIsDarkTheme(!isDarkMode)
        document!.querySelector('body')!.classList.toggle('dark')
        localStorage.setItem("isDarkTheme", `${!isDarkMode}`)
    }

    return (
        <MyThemeContext.Provider value={{isDarkTheme: true, togThemeHdl: ()=>{} }}>
            {props.children}
        </MyThemeContext.Provider>
    )
}