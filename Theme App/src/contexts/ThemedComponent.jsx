import React from "react";
import { useThemeContext } from "./ThemeContext";

const ThemeComponent = () => {
    const {theme} = useThemeContext();

    return (
        <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-lg mt-4 border border-solid border-black rounded`}>
            <h2>This is my component</h2>           
            <h2>If you click on Change Theme , the theme will change</h2>
        </div>
    )
}

export default ThemeComponent;