import React from 'react';
import { Briefcase, GraduationCap, Calendar, Award, Building } from 'lucide-react';

const Experience = () => {

    // --- 1. Experience Data ---
    const experiences = [
        {
            role: "Web Development Intern",
            company: "Groot It Inc.",
            period: "March 2025 - September 2025",
            description: [
                "Developed responsive user interfaces using React.js and Tailwind CSS.",
                "Fixed bugs and maintained legacy codebases.",
                "Collaborated with UX/UI designers to implement pixel-perfect designs."
            ]
        },
        // {
        //     role: "Web Development Intern",
        //     company: "Creative Agency",
        //     period: "2022 - 2023",
        //     description: [
        //         "Assisted in building static websites and landing pages.",
        //         "Fixed bugs and maintained legacy codebases.",
        //         "Learned best practices for version control using Git/GitHub."
        //     ]
        // }
    ];

    // --- 2. Education Data ---
    const education = {
        degree: "Bachelor of Computer Applications (BCA)",
        college: "University of Maharaja Collage Jaipur",
        period: "2022 - 2025",
        status: "Graduated"
    };

    // --- 3. Certifications Data ---
    const certifications = [
        {
            name: "Web Developer",
            issuer: "Groot",
            date: "2025"
        },
        // {
        //     name: "JavaScript Algorithms",
        //     issuer: "FreeCodeCamp",
        //     date: "2025"
        // },
        {
            name: "React.js Essential Training",
            issuer: "LinkedIn Learning",
            date: "2025"
        }
    ];

    return (
        <section id='experience' className="relative min-h-screen bg-slate-950 py-24 px-4 md:px-0 overflow-hidden">

            {/* Background Decor (Subtle Grid) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            
            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Section Header */}
                <div className="mb-16 space-y-4 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        My Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Journey</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        A timeline of my professional experience, educational background, and technical certifications.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* --- LEFT COLUMN: EXPERIENCE (Timeline) --- */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="text-blue-400" size={24} />
                            <h3 className="text-2xl font-semibold text-white">Work Experience</h3>
                        </div>

                        <div className="relative border-l-2 border-slate-800 ml-3 space-y-12">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative pl-8 group">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors duration-300"></div>
                                    
                                    {/* Content Card */}
                                    <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                            <span className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-blue-300 border border-slate-700">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                                            <Building size={14} />
                                            <span>{exp.company}</span>
                                        </div>
                                        <ul className="space-y-2">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: EDUCATION & CERTIFICATIONS --- */}
                    <div className="space-y-12">
                        
                        {/* Education Block */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <GraduationCap className="text-purple-400" size={24} />
                                <h3 className="text-2xl font-semibold text-white">Education</h3>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 relative overflow-hidden group">
                                {/* Decor Circle */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                                <h4 className="text-xl font-bold text-white mb-1">{education.degree}</h4>
                                <p className="text-blue-400 font-medium mb-4">{education.college}</p>
                                
                                <div className="flex items-center gap-4 text-sm text-slate-400">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{education.period}</span>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-700/50">
                                    <span className="text-sm text-slate-300 italic">{education.status}</span>
                                </div>
                            </div>
                        </div>

                        {/* Certifications Block */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Award className="text-pink-400" size={24} />
                                <h3 className="text-2xl font-semibold text-white">Certifications</h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="p-4 rounded-xl bg-slate-900/30 border border-slate-800 hover:border-pink-500/30 transition-colors group">
                                        <h5 className="font-semibold text-white mb-1 group-hover:text-pink-400 transition-colors">
                                            {cert.name}
                                        </h5>
                                        <div className="flex justify-between items-end">
                                            <p className="text-sm text-slate-500">{cert.issuer}</p>
                                            <span className="text-xs text-slate-600">{cert.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;