import { createContext, ReactElement, useEffect, useState } from "react";

const MyThemeContext = createContext({
    isDarkTheme: true,
    togThemeHdl: () => {}
})

interface ThemeProps