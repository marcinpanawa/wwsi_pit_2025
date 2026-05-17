import React, { createContext, useState, useEffect } from 'react';
import { getCookie, setCookie } from '../Components/helpers';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [sizeTheme, setSizeThemeState] = useState(getCookie('sizetheme') || 'font-normal');
    const [colorTheme, setColorThemeState] = useState(getCookie('colortheme') || 'color-normal');

    const updateHtmlClass = (size, color) => {
        const appClass = `${size} ${color}`;
        document.querySelector("html").className = appClass;
        const mainEl = document.getElementById('main');
        if (mainEl) mainEl.className = appClass;
    };

    useEffect(() => {
        updateHtmlClass(sizeTheme, colorTheme);
    }, [sizeTheme, colorTheme]);

    const setSizeTheme = (size) => {
        setCookie('sizetheme', size, 30);
        setSizeThemeState(size);
    };

    const setColorTheme = (color) => {
        setCookie('colortheme', color, 30);
        setColorThemeState(color);
    };

    return (
        <ThemeContext.Provider value={{ sizeTheme, setSizeTheme, colorTheme, setColorTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
