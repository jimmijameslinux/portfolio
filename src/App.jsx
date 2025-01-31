// src/App.jsx
import React, { useContext } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {

  const { theme } = useContext(ThemeContext);
  return (
    <div className={`relative min-h-screen  transition-colors duration-300 bg-linear-100 ${theme === "dark" ? "from-black to-[rgb(78,36,84)] text-gray-900 dark:text-white" : " bg-cyan-200 "}`} >

      <Header theme={theme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Projects theme={theme} />
      <Footer theme={theme} />
    </div>
    // </div>
  );
};

export default App;
