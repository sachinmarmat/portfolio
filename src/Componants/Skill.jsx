import React from 'react';
import { Code, Database, Layout, Server, Settings, Smartphone, Terminal, Cpu } from 'lucide-react';

const Skills = () => {
    // Data for skills - Easy to edit
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: Layout,
            color: "text-blue-400",
            skills: [
                "React.js", "Next.js", "Tailwind CSS", "HTML5/CSS3",
                "JavaScript (ES6+)", "TypeScript", "Redux", "Framer Motion"
            ]
        },
        {
            title: "Backend Infrastructure",
            icon: Server,
            color: "text-purple-400",
            skills: [
                "Node.js", "Express.js",
                "RESTful APIs", "GraphQL", "Microservices"
            ]
        },
        {
            title: "Database Management",
            icon: Database,
            color: "text-pink-400",
            skills: [
                "MongoDB", "PostgreSQL", "MySQL", "Firebase",
                 "Mongoose"
            ]
        },
        {
            title: "DevOps & Tools",
            icon: Terminal,
            color: "text-green-400",
            skills: [
                "Git/GitHub","VS code", "Rendar", "AWS",  "Postman", "Vercel"
            ]
        }
    ];

    return (
        <section id='skills' className=" relative min-h-screen bg-slate-950 py-20 px-4 md:px-0 overflow-hidden">
            
            {/* Background Decorative Elements (Matches Hero) */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        My Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Expertise</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        I specialize in building scalable, high-performance web applications using modern technologies and best practices.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div 
                            key={index} 
                            className="group relative p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
                        >
                            {/* Hover Gradient Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-lg bg-slate-800/50 border border-slate-700 ${category.color}`}>
                                    <category.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-semibold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span 
                                        key={idx}
                                        className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-950/50 border border-slate-800 rounded-lg hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Decorative Bar */}
                <div className="mt-20 flex justify-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                        <Cpu size={16} className="text-blue-500 animate-pulse" />
                        <span>Always learning new technologies</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;