import React from "react";
import { useThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
    const {toggleTheme} = useThemeContext();

    return (
        <button className="bg-green-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded" onClick={toggleTheme}>
            CHANGE
        </button>
    )
}

export default ThemeToggle;