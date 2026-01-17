import React, { useState, useEffect } from 'react';
import { Home, User, Code, Star, Github, Linkedin, Mail } from 'lucide-react';
import Hero from './Hero';
import Skills from './Skill';
import Projects from './Project';
import Experience from './Education';
import Contact from './Contact';
const Profile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect to shrink navbar slightly on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    } 
  }, [isMenuOpen]);

  return (
    <> 
      <nav 
        className={`fixed top-4 md:top-7 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
        ${scrolled ? 'w-[90%] max-w-5xl' : 'w-[95%] max-w-7xl'}`}
      >
        {/* The Glass Container */}
        <div className="bg-[#1a1a2e]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-full px-4 py-3 md:px-6 md:py-3 flex items-center justify-between transition-all duration-300 hover:border-white/20 relative z-50">

          {/* --- LEFT SIDE: IDENTITY --- */}
          <div className="flex items-center gap-4 cursor-pointer">
            <a href="/" className="text-2xl font-bold text-white tracking-wide">
              Port<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">folio.</span>
            </a>
          </div> 

          {/* --- CENTER: NAVIGATION LINKS (Desktop) --- */}
          <ul className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5">
            {[
              { name: 'Home', section: 'home' },
              { name: 'Skills', section: 'skills' },
              { name: 'Projects', section: 'projects' },
              { name: 'Experience', section: 'experience' }
            ].map((item) => (
              <li key={item.name}> 
                <a
                  href={`#${item.section}`}
                  className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-full transition-all duration-300 overflow-hidden group block"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* --- RIGHT SIDE: ACTIONS --- */}
          <div className="flex items-center gap-3">
 
            {/* Social Icon (GitHub) - Hidden on small mobile */}
            <a href="https://github.com/sachinmarmat" className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:rotate-12 border border-white/5">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>

            {/* CTA Button */} 
            <a
              href="#contact"
              className="px-3 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-[#00d2ff] via-[#3a7bd5] to-[#00d2ff] bg-[length:200%_auto] text-white font-bold text-xs md:text-sm rounded-full shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_25px_rgba(0,210,255,0.5)] transition-all duration-300 animate-gradient hover:scale-105"
            >
              Let's Talk
            </a> 

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 z-50 relative"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                <span className={`h-0.5 bg-cyan-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                <span className={`h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-2'}`}></span>
              </div>
            </button> 
          </div>
        </div>

        {/* --- FULL SCREEN MOBILE MENU OVERLAY --- */}
        <div
          className={`md:hidden fixed inset-0 w-screen h-155 bg-[#020617]/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] z-40 flex flex-col justify-center
  ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}
        >

          {/* 1. Background Texture (Grid Pattern) */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
          </div> 

          {/* 2. Decoration Blobs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-20%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-20%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
          </div>

          {/* 3. The Menu Content */}
          <div className="relative z-10 container mx-auto px-8 flex flex-col justify-center h-full gap-6">

            {/* Navigation Links */}
            <div className="flex flex-col gap-4">
              {[
                { name: 'Home', icon: Home },
                { name: 'Projects', icon: Code },
                { name: 'Skills', icon: User },
                { name: 'Experience', icon: Star } 
              ].map((item, index) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 transform 
            ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Icon Box */}
                  <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg text-cyan-400 group-hover:text-white transition-colors">
                    <item.icon size={20} />
                  </div>

                  {/* Text */}
                  <span className="text-xl font-semibold text-gray-300 group-hover:text-white tracking-wide">
                    {item.name}
                  </span>

                  {/* Arrow Indicator (Appears on Hover) */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-cyan-400">
                    →
                  </div>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Social Footer */}
            <div className={`flex justify-center gap-6 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
              {[Github].map((Icon, i) => (
                <a key={i} href="#" className="p-3 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-white text-gray-400 border border-white/10 transition-all duration-300 hover:scale-110 shadow-lg">
                  <Icon size={22} />
                </a>
              ))}
            </div>

          </div>
        </div>

      </nav>

      {/* --- CUSTOM CSS FOR ANIMATIONS --- */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>

      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default Profile;