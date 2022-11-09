import { useEffect, useState } from 'react';
import { ThemeContext, themes } from '../ctx/themeCtx'

const ThemeCtxWrapper = (props) => {
    const [ theme, setTheme ] = useState(themes.dark);

    function toggleTheme(theme) {
        setTheme(theme)
    }

    useEffect( () => {
        switch (theme) {
            case theme.bright:
                document.body.classList.add('white-content')
                break;
            case theme.dark:
            default:
                document.body.classList.remove('white-content')
                break;
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme: theme, toggle: toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeCtxWrapper