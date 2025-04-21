import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Inventory Management',
        imageUrl: '/filler-image.jpeg',
        description: 'Track and manage inventory efficiently with this .NET and Xamarin solution.',
        link: 'https://youtube.com'
    },
    {
        title: 'Portfolio Website',
        imageUrl: '/filler-image.jpeg',
        description: 'A sleek, modern portfolio built with React and Tailwind CSS.',
        link: 'https://yourportfoliosite.com'
    },
    {
        title: 'E-commerce Platform',
        imageUrl: '/filler-image.jpeg',
        description: 'Full-stack online store using Node.js and MongoDB.',
        link: 'https://yourecommercesite.com'
    }
];

const bgColors = [
    'bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500',
    'bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-500',
    'bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700'
  ];  

export const Projects = () => {
    return (
        <section id="projects"
            className="min-h-screen flex flex-col items-center justify-center"
        >
            {/* Header div */}
            <div className="flex flex-col items-center justify-evenly py-10 px-4 text-center">
                <motion.h1 className="font-bold text-6xl md:text-6xl sm:text-6xl p-3"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Projects by <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">hba</span>tech
                </motion.h1>
                <motion.p className="text-lg text-gray-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    From sketches to screens - here's what i've been up to.
                </motion.p>
            </div>

            {/* Projects information */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                {projects.map((project, idx) => (
                    <a
                        href={project.link}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl overflow-hidden shadow-lg bg-white/5 border border-white/10 hover:shadow-2xl transition-all cursor-pointer flex flex-col h-100"
                    >
                        <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: `url(${project.imageUrl})` }} />

                        <div className={`p-4 ${bgColors[idx % bgColors.length]} h-[100px]`}>
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-sm mt-1">{project.description}</p>
                        </div>
                    </a>
                ))}
            </motion.div>
        </section>
    );
};