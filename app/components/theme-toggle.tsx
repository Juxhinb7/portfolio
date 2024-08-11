"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const [isMounted, setIsMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setIsMounted(true);
        
    }, []);
    
    return (
        <button aria-label="Toggle light / dark mode" aria-labelledby="label" className="hover:text-gray-400" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "light" ? <MdDarkMode className="font-medium text-2xl" /> : <MdLightMode className="font-medium text-2xl" />}
        </button>

    )
}

export default ThemeToggle;