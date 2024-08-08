import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './ThemeToggleButton.css';
import { themeData } from '../data/themeData';

const ThemeToggleButton = () => {
    const { toggleTheme, theme } = useContext(ThemeContext);

    // Determine if the current theme is the light theme
    const isLightTheme = theme === themeData.light;

    return (
        <label className="switch">
            <input 
                type="checkbox" 
                onChange={toggleTheme} 
                checked={!isLightTheme} 
            />
            <span className="slider round"></span>
        </label>
    );
};

export default ThemeToggleButton;
