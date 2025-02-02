// src/components/Header.jsx
import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={`w-full top-0 z-10 p-4 fixed ${theme === "light" ? "bg-gray-800 dark:bg-white" : "bg-white dark:bg-black"} transition-colors duration-100`}>
            <div className="container mx-auto flex items-center justify-between">
                {/* Hamburger Icon for small screens */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-full">
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                <h1 className="text-2xl font-semibold">Jimmi</h1>
                <nav className={`space-x-6 hidden md:flex`}>
                    <a href="#home" className="hover:text-gray-500 dark:hover:text-gray-300">Home</a>
                    <a href="#about" className="hover:text-gray-500 dark:hover:text-gray-300">About</a>
                    <a href="#projects" className="hover:text-gray-500 dark:hover:text-gray-300">Projects</a>
                </nav>


                {/* Mobile Menu */}
                <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-16 right-0 bg-white dark:bg-black w-full p-4`}>
                    <nav className="space-y-4">
                        <a href="#home" className="block hover:text-gray-500 dark:hover:text-gray-300">Home</a>
                        <a href="#about" className="block hover:text-gray-500 dark:hover:text-gray-300">About</a>
                        <a href="#projects" className="block hover:text-gray-500 dark:hover:text-gray-300">Projects</a>
                    </nav>
                </div>

                {/* Theme Toggle Button */}
                <button onClick={toggleTheme} className={`ml-4 p-2 rounded-full hover:cursor-pointer ${theme === "light" ? "hover:bg-gray-200 dark:hover:outline-2 dark:hover:outline-white" : "hover:bg-gray-800 dark:hover:outline-2 dark:hover:outline-white"}`}>
                    {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
            </div>
        </header>
    );
};

export default Header;
