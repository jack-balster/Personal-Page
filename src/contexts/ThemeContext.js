import React, { createContext, useState } from 'react';
import { themeData } from '../data/themeData';

// Create a context for theme management
export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(themeData.theme);  // State for current theme
    const [drawerOpen, setDrawerOpen] = useState(false);  // State for drawer open/close status

    // Function to toggle the drawer open/close state
    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => 
            prevTheme === themeData.light ? themeData.dark : themeData.light
        );
    };

    // Context value to be provided to consuming components
    const value = { theme, drawerOpen, setHandleDrawer, toggleTheme };
    
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
