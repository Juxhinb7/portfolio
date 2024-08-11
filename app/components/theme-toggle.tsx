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

    if (!isMounted) {
        return null;
    }

    
    return (
        <button aria-label="Toggle light / dark mode" aria-labelledby="label" className="hover:text-gray-400 fixed bottom-5 right-5 z-10" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "light" ? <MdDarkMode className="font-medium text-3xl" /> : <MdLightMode className="font-medium text-3xl" />}
        </button>

    )
}

export default ThemeToggle;