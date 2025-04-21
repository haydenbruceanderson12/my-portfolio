import React from 'react';
import { motion } from 'framer-motion';
import { GradientSplash } from '../GradientSplash.jsx';

export const Home = () => {
    return (
        <section id="home"
            className="min-h-screen flex flex-col items-center justify-center"
        >
            <GradientSplash />
            
            {/* Header div */}
            <div className="flex flex-col items-center justify-center py-6 px-4 text-center">
                <motion.h1 className="font-bold text-7xl md:text-7xl sm:text-6xl p-3"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Welcome to <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">hba</span>tech
                </motion.h1>
                <motion.p className="text-xl text-gray-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Your premium development destination at a not so premium price.
                </motion.p>
            </div>

            {/* Content div */}
            <div className="flex flex-col items-center justify-center gap-10">

                {/* Home buttons */}
                <motion.div className="flex flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, x: -150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <a href="#projects"
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl transition"
                    >
                        View Projects
                    </a>

                    <a href="#contact"
                        className="px-6 py-2 border border-transparent rounded-xl font-semibold transition bg-white bg-opacity-0 hover:bg-white hover:text-black"
                    >
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Contact Me
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};