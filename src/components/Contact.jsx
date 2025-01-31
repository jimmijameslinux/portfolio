// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="py-12 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
        >
            <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
            <p>Email: <a href="mailto:your-email@example.com" className="text-blue-400">your-email@example.com</a></p>
        </motion.section>
    );
};

export default Contact;
