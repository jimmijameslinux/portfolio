// src/components/Footer.jsx
import React from "react";
import githublogowhite from "../assets/githublogowhite.svg";
import githublogoblack from "../assets/githublogoblack.svg";
import linkedinwhite from "../assets/linkedinwhite.svg";
import linkedinblack from "../assets/linkedinblack.svg";
import gmaillogowhite from "../assets/gmaillogowhite.svg";
import gmaillogoblack from "../assets/gmaillogoblack.svg";

const Footer = ({ theme }) => {
    return (
        <footer className=" text-center py-8">
            {/* Quick Links */}
            <nav className="mb-4">
                <ul className="flex justify-center space-x-6 font-medium">
                    <li><a href="#" className="hover:text-indigo-600">Home</a></li>
                    <li><a href="#about" className="hover:text-indigo-600">About</a></li>
                    <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
                </ul>
            </nav>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mt-4">
                <a href="https://github.com/jimmijameslinux" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                    <img src={`${theme === "dark" ? githublogowhite : githublogoblack}`} alt="GitHub" className="h-8 w-8" />
                </a>
                <a href="https://www.linkedin.com/in/jimmi-james-8b009227a/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                    <img src={`${theme === "dark" ? linkedinwhite : linkedinblack}`} alt="LinkedIn" className="h-8 w-8" />
                </a>
                <a href="mailto:jj885928@gmail.com" className="hover:opacity-80">
                    <img src={`${theme === "dark" ? gmaillogowhite : gmaillogoblack}`} alt="Email" className="h-8 w-8" />
                </a>
            </div>

            {/* Copyright & Legal Disclaimer */}
            <p className="text-sm mt-4">
                &copy; {new Date().getFullYear()} Jimmi James. All Rights Reserved.
            </p>

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`mt-4  text-white px-4 py-2 rounded-md ${theme === "light" ? "bg-cyan-600 hover:bg-cyan-500" : "bg-[rgba(78,36,84,0.8)] hover:bg-[rgba(78,36,84,1)]"} hover:cursor-pointer transition`}
            >
                Back to Top ↑
            </button>
        </footer>
    );
};

export default Footer;
