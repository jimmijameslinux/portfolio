// src/components/Hero.jsx
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = ({ theme }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold mb-4">Hello, I'm Jimmi James</h2>
        <p className="text-lg mb-6">A passionate web developer focused on building amazing web applications.
        </p>
        <a href="#projects" className={` px-6 py-2 rounded-lg hover:bg-transparent   ${theme === "light" ? "bg-cyan-500 text-white hover:text-black hover:outline-2 hover:outline-cyan-500" : "bg-[rgb(78,36,84)] text-white hover:outline-2 hover:outline-[rgb(78,36,84)] "}`}>
          {/* hover:bg-transparent hover:text-black hover:outline-2 outline-[rgb(78,36,84)] transition text-white */}
          View Projects
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
