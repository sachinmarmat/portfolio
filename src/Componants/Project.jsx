import React from 'react';
import { Github, ExternalLink, Folder, ArrowRight } from 'lucide-react';

// Placeholder image for projects (You should replace these with your actual screenshots)
// You can use: import project1 from '../assets/project1.png';
const projectImg = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"; 

const Projects = () => {
    // Project Data - Add your own projects here
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing products, orders, and analytics. Features include dark mode, real-time data visualization, and role-based access control.",
            tech: ["React.js", "Tailwind", "Node.js", "Chart.js"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", // Replace with your image
            links: {
                demo: "https://freshcart-frontend-8xq5.vercel.app/",
                code: "https://github.com/sachinmarmat/freshcart-frontend"
            }
        },
        {
            title: "AI Chat Application",
            description: "Real-time chat interface powered by OpenAI's GPT-4 API. Includes message history, syntax highlighting for code blocks, and multiple chat sessions.",
            tech: ["Next.js", "TypeScript", "OpenAI API", "Firebase"],
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop",
            links: {
                demo: "https://pixel-ui-six.vercel.app/",
                code: "https://github.com/sachinmarmat/Pixel-ui"
            }
        },
        {
            title: "Crypto Portfolio Tracker",
            description: "Track cryptocurrency prices in real-time. Users can create watchlists, set price alerts, and view historical price trends using interactive graphs.",
            tech: ["Vue.js", "D3.js", "CoinGecko API", "Supabase"],
            image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop",
            links: {
                demo: "https://project01-smoky.vercel.app/",
                code: "#"
            }
        }
    ];

    return (
        <section id='projects' className="relative min-h-screen bg-slate-950 py-24 px-4 md:px-0">
            
            {/* Background Gradient Orbs */}
            <div className="absolute top-40 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-40 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-sm font-medium mb-2">
                        <Folder size={14} />
                        <span>Portfolio</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        A curated selection of my work, ranging from web applications to architectural design systems.
                    </p>
                </div> 

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 flex flex-col"
                        >
                            {/* Image Container with Overlay */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-300 z-10"></div>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 text-xs font-medium text-slate-300 bg-slate-800/80 rounded-md border border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                                    <div className="flex gap-4">
                                        <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-sm">
                                            <Github size={18} />
                                            <span>Code</span>
                                        </a>
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1 text-sm">
                                            <ExternalLink size={18} />
                                            <span>Live Demo</span>
                                        </a>
                                    </div>
                                    <ArrowRight size={18} className="text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>

                            {/* Hover Gradient Line at Bottom */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="mt-16 text-center">
                    <a href="https://github.com/sachinmarmat" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl border border-slate-800 hover:bg-slate-800 hover:border-slate-700 transition-all group">
                        <span>View Full Project Archive</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;