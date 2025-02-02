// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import portfolio from "../assets/portfolio.png";
import readriches from "../assets/readriches.png";
import devfinder from "../assets/devfinder.png";
import reipe from "../assets/recipe.png";

const projects = [
    { title: "Project 1", desc: "Readriches website", img: readriches, link: "https://readriches.netlify.app/" },
    { title: "Project 2", desc: "Githubdev finder website", img: devfinder, link: "https://gitdevfind.netlify.app/" },
    { title: "Project 3", desc: "Portfolio website.", img: portfolio, link: "#" },
    { title: "Project 4", desc: "Recipe Book website.", img: reipe, link: "https://jimrecipebook.netlify.app/" }
];

const Projects = ({ theme }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="projects" className="py-12">
            <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
            <div ref={ref} className="container gap-10 flex flex-wrap justify-center px-12"            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`p-2 rounded-lg shadow-lg hover:scale-105 transition-transform hover:cursor-pointer ${theme === "light" ? "hover:outline-4 outline-cyan-500" : "hover:outline-4 outline-[rgb(78,36,84)]"}`}
                    >
                        <img src={project.img} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-gray-600">{project.desc}</p>
                        <a href={project.link} target="blank" className="text-blue-500 hover:underline mt-4 block">
                            View Project
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
