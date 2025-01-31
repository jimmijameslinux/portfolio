// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const technologies = [
    { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", url: "https://react.dev/" },
    { name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TailwindCSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", url: "https://tailwindcss.com/" },
    { name: "Node.js", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", url: "https://nodejs.org/en" },
    { name: "MongoDB", img: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Mongodb-icon.svg", url: "https://www.mongodb.com/" },
    { name: "Express.js", img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", url: "https://expressjs.com/" },
    // html,css,git
    { name: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Git", img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg", url: "https://git-scm.com/" },
];

const About = ({ theme }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section id="about" className="py-12 text-center">
            {/* About Me Section */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="text-3xl font-semibold mb-4">About Me</h2>
                <p >
                    I'm a web developer with a passion for building high-quality, interactive web applications.
                    I specialize in React, TailwindCSS, and modern JavaScript frameworks.
                    I'm always eager to learn new technologies and frameworks to build more efficient and scalable applications.

                </p>
            </motion.div>

            {/* Technologies Section */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="mt-12"
            >
                <h3 className="text-2xl font-semibold mb-6">Technologies I Work With</h3>

                {/* Grid Container */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 place-items-center">
                    {technologies.map((tech, index) => (
                        <motion.a
                            key={index}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative group flex flex-col items-center p-4 rounded-xl hover:scale-110 ${theme === "light" ? "hover:outline-4 outline-cyan-500" : "hover:outline-4 outline-[rgb(78,36,84)]"} transition-transform duration-100`}
                            // whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {/* Tech Icon */}
                            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br ">
                                <img src={tech.img} alt={tech.name} className="w-16 h-16 object-contain" />
                            </div>

                            {/* Tech Name */}
                            <span className="mt-4 font-medium text-lg">
                                {tech.name}
                            </span>


                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;
