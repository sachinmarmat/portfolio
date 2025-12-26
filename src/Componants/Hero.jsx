import React from 'react';
import { Download, Linkedin, Mail } from 'lucide-react';
import img from '../assets/img.png';
import TypingEffect from './About';

const Hero = () => {
    // PASTE THIS AT THE VERY BOTTOM OF YOUR FILE (Outside the Hero component)
    const SocialIcon = ({ Icon, href }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-50 p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 transition-colors cursor-pointer"
        >
            <Icon size={20} />
        </a>
    );

    return (
        <div id='home' className="relative min-h-screen  w-full flex items-center justify-center bg-slate-950 overflow-hidden px-4 md:px-22">

            {/* --- Background Animated Blobs --- */}
            {/* Adjusted position slightly to ensure they stay behind content */}
            <div className="absolute top-[-10%] left-[-10%] w-72 h-72 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-[-10%] right-[-10%] w-72 h-72 md:w-96 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-72 h-72 md:w-96 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            {/* --- Main Container --- */}
            {/* Changed from absolute positioning to a fluid Grid Layout */}
            <div className="container sm:mt-22 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 py-20 md:py-0">

                {/* --- Left Side: Text Content --- */}
                {/* Order-2 on mobile (text below image), Order-1 on desktop (text left) */}
                <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">

                    {/* Badge */}
                    <div className="inline-block px-3 py-1 bg-slate-800 text-blue-400 rounded-full text-sm font-medium border border-slate-700 mb-2 animate-fade-in-up">
                        Available for Work
                    </div>

                    {/* Name with Gradient */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight animate-fade-in-up animation-delay-200">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            Sachin Marmat
                        </span>
                    </h1>

                    {/* Profession */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light animate-fade-in-up animation-delay-400 h-10 md:h-auto">
                        <TypingEffect />
                    </h2>

                    {/* Buttons & Socials */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start pt-4 animate-fade-in-up animation-delay-800">
                        <a
                            href="/resume.pdf"             // Path to file in public folder
                            download="Sachin_Marmat_CV.pdf" // The name the user sees when downloading
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <Download size={20} />
                            Download CV
                        </a>

                        <div className="flex gap-4 justify-center items-center">
                            <SocialIcon Icon={Linkedin}
                                href="https://www.linkedin.com/in/sachin-marmat-66b55531a/"
                            />
                            {/* <SocialIcon Icon={Mail}/>  */}
                        </div>
                    </div>
                </div>

                {/* --- Right Side: Image --- */}
                {/* Order-1 on mobile (image top), Order-2 on desktop (image right) */}
                <div className="order-1 md:order-2 sm:ml-11 flex justify-center items-center relative animate-fade-in-up animation-delay-1000">

                    {/* Image Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse w-2/3 h-2/3 mx-auto mt-10"></div>

                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-auto z-10 animate-float flex justify-center">
                        <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl rounded-full -z-10"></div>

                        <img
                            src={img}
                            alt="Profile"
                            className="w-full h-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

// Small reusable component for social icons
const SocialIcon = ({ Icon }) => (
    <a href="#" className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 transition-colors">
        <Icon size={20} />
    </a>
);

export default Hero;