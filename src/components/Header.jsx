// src/components/Header.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className={`w-full top-0 z-10 p-4 fixed ${theme === "light" ?"bg-gray-800 dark:bg-white": "bg-white dark:bg-black"} transition-colors duration-100`}>
            <div className="container mx-auto flex items-center justify-around">
                <h1 className="text-2xl font-semibold">Portfolio</h1>
                <nav className="space-x-6">
                    <a href="#home" className="hover:text-gray-500 dark:hover:text-gray-300">Home</a>
                    <a href="#about" className="hover:text-gray-500 dark:hover:text-gray-300">About</a>
                    <a href="#projects" className="hover:text-gray-500 dark:hover:text-gray-300">Projects</a>
                </nav>
                <button onClick={toggleTheme} className={`ml-4 p-2 rounded-full hover:cursor-pointer ${theme === "light" ? "hover:bg-gray-200 dark:hover:outline-2 dark:hover:outline-white" : "hover:bg-gray-800 dark:hover:outline-2 dark:hover:outline-white"}`}>
                    {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
            </div>
        </header>
    );
};

export default Header;
