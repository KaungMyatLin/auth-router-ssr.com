import { createContext, ReactElement, useEffect, useState } from "react";

const MyThemeContext = createContext({
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

            setIsDarkTheme
        }
        else {
            localStorage.setItem("isDarkTheme", `false`)
            document!.querySelector("body")!.classList.remove(`dark`)
            setIsDarkTheme(false)
        }
    }

    return (
        <MyThemeContext.Provider value={{isDarkTheme: true, togThemeHdl}}>
            {props.children}
        </MyThemeContext.Provider>
    )
}