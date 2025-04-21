import React from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Linkedin,
    Github,
    Twitter,
} from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" 
            className="min-h-screen flex flex-col items-center justify-center"
        >
            {/* Header div */}
            <div className="flex flex-col items-center justify-evenly py-10 px-4 text-center">
                <motion.h1 className="font-bold text-6xl md:text-6xl sm:text-6xl p-3"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Contact <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">hba</span>tech
                </motion.h1>
                <motion.p className="text-lg text-gray-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Reach out, i'd love to hear from you.
                </motion.p>
            </div>

            <motion.form
                className="w-full max-w-4xl grid grid-cols-1 gap-6"
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thanks for reaching out!");
                }}
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-3 rounded-xl bg-white/5 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-6 py-3 rounded-xl bg-white/5 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    required
                    className="w-full px-6 py-3 rounded-xl bg-white/5 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="cursor-pointer w-12/12 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl transition hover:opacity-90"
                    >
                        Send Message
                    </button>
                </div>
            </motion.form>

            {/* Social media links */}
            <motion.div className="mt-10 flex flex-row items-center justify-center gap-7 flex-wrap max-w-9/12"
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >      
                <a href="mailto:hbatech@outlook.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="w-6 h-6 hover:text-blue-400 transition" />
                </a>
                <a href="https://github.com/hbatech" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6 hover:text-purple-400 transition" />
                </a>
                <a href="https://linkedin.com/in/hbatech" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6 hover:text-blue-500 transition" />
                </a>
                <a href="https://twitter.com/hbatech" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-6 h-6 hover:text-sky-400 transition" />
                </a>
            </motion.div>
        </section>
    );
};