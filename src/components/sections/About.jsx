import React from 'react';
import { SiReact } from 'react-icons/si';
import { DiGit } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiHtml5 } from "react-icons/di";
import { DiAngularSimple } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { DiPostgresql } from "react-icons/di";
import { SiDotnet } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { motion } from 'framer-motion';

const skills = [
    { icon: DiHtml5, label: 'HTML5' },
    { icon: RiTailwindCssFill, label: 'Tailwind CSS' },
    { icon: BiLogoJavascript, label: 'JavaScript' },
    { icon: SiReact, label: 'React' },
    { icon: DiAngularSimple, label: 'Angular' },
    { icon: SiDotnet, label: 'C# .NET' },
    { icon: DiPostgresql, label: 'PostgreSQL' },
    { icon: VscAzure, label: 'Azure', oversized: true },
    { icon: DiGit, label: 'Git' }
];

const bgColors = [
    'bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500',
    'bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-500',
    'bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700'
];

export const About = () => {
    return (
        <section id="about"
            className="min-h-screen flex flex-col items-center justify-center"
        >
            {/* Header div */}
            <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
                <motion.h1 className="font-bold text-6xl md:text-6xl sm:text-6xl p-3"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Who is <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">hba</span>tech?
                </motion.h1>
                <motion.p className="text-lg text-gray-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Meet the mind behind the magic.
                </motion.p>
            </div>
                
            {/* Content div */}
            <div className="flex flex-col items-center justify-center gap-10">

                {/* About me information */}
                <motion.div className="max-w-9/12"
                    initial={{ opacity: 0, x: -150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-xl text-gray-600 leading-relaxed text-center">
                        I'm a <span className="font-semibold">Full Stack Software Developer</span> with over 2.5 years of experience
                        building robust, scalable systems using technologies like C#, .NET, SQL Server, and Azure.
                        I also work as a <span className="font-semibold">freelance web developer</span> crafting
                        modern, responsive websites with React, HTML, CSS, and JavaScript.
                        I enjoy turning complex problems into clean, elegant solutions — and learning something new along the way.
                    </p>
                </motion.div>

                {/* Skills information */}
                <motion.div
                    className="flex flex-row items-center justify-center gap-7 flex-wrap max-w-9/12"
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    {skills.map(({ icon: Icon, label, oversized }, i) => (
                        <div
                        key={label}
                        className={`p-3 rounded-xl shadow-md text-white transition cursor-pointer group relative ${bgColors[i % bgColors.length]}`}
                        >
                        <div className={`${oversized ? 'text-2xl' : 'text-3xl'}`}>
                            <Icon />
                        </div>
                        <span className="absolute bottom-[-1.75rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            {label}
                        </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};