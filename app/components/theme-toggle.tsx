"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        let dataTheme = document.documentElement.getAttribute("data-theme") as string;
        setTheme(dataTheme);
        setMounted(true);

    }, []);

    if (!mounted) return null;
    
    return (
        <button aria-label="Toggle light / dark mode" aria-labelledby="label" className="hover:text-gray-400 fixed bottom-5 right-5 z-10" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "light" && <MdDarkMode className="font-medium text-3xl" />}
            {theme === "dark" && <MdLightMode className="font-medium text-3xl" />}
        </button>

    )
}

export default ThemeToggle;