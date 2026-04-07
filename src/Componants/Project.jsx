
import React from 'react';
import { Github, ExternalLink, Folder, ArrowRight } from 'lucide-react';

const Projects = () => {

  const projects = [
    {
      title: "Job Portal Platform",
      description:
        "A full-stack MERN job portal designed to connect job seekers with employers. Users can create resumes, apply for jobs, and track applications while employers can manage job listings and candidates through an admin dashboard.",
      features: [
        "Resume builder & job application tracking",
        "Employer dashboard for managing candidates",
        "Advanced job search & filtering",
        "Secure authentication and role-based access"
      ],
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      image: "https://webfeb.in/wp-content/uploads/2016/09/job-portal-1.jpg",
      links: {
        demo: "https://pixel-ui-six.vercel.app/",
        code: "https://github.com/sachinmarmat/Pixel-ui"
      }
    },

    {
      title: "Astrology Prediction Platform",
      description:
        "A modern astrology platform that generates personalized horoscope predictions using birth details like date, time, and location. The system analyzes planetary positions and provides life insights.",
      features: [
        "Birth chart (Kundli) generator",
        "Daily & monthly horoscope predictions",
        "Interactive astrology charts",
        "Planetary analysis dashboard"
      ],
      tech: ["React.js", "Node.js", "Chart.js", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      links: {
        demo: "https://www.panditpurshotamgaur.com/",
        code: "https://github.com/sachinmarmat/freshcart-frontend"
      }
    },

    {
      title: "Women's Clothing E-commerce",
      description:
        "A responsive e-commerce web application designed for a women's clothing brand with product browsing, category filtering, and a smooth shopping cart experience.",
      features: [
        "Dynamic product listing & filters",
        "Shopping cart functionality",
        "Mobile-first responsive design",
        "Reusable component-based architecture"
      ],
      tech: ["React", "JavaScript", "API", "Tailwind", "MERN"],
      image:
        "https://img.freepik.com/free-vector/fashion-sale-landing-page-template_23-2148582384.jpg?semt=ais_hybrid&w=740&q=80",
      links: {
        demo: "https://project01-smoky.vercel.app/",
        code: "#"
      }
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen bg-slate-950 py-24 px-4">

      {/* Background glow */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-sm">
            <Folder size={14} />
            Portfolio
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              {" "}Projects
            </span>
          </h2>

          <p className="text-slate-400 max-w-2xl">
            A selection of projects showcasing full-stack development,
            responsive design, and modern UI/UX practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition duration-300 hover:-translate-y-2 flex flex-col"
            >

              {/* Image */}
              <div className="relative h-48 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm flex items-center gap-1"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>

                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black rounded-lg text-sm flex items-center gap-1"
                  >
                    <Github size={16} />
                    Code
                  </a>

                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">

                <div className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-md w-fit mb-2">
                  Featured Project
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-3">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="text-xs text-slate-500 mb-4 space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-blue-400">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">

                  <div className="flex gap-4 text-sm">

                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-400 hover:text-white"
                    >
                      <Github size={16} />
                      Code
                    </a>

                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-400 hover:text-blue-400"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>

                  </div>

                  <ArrowRight
                    size={18}
                    className="text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition"
                  />

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* View more */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/sachinmarmat"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl border border-slate-800 hover:bg-slate-800 transition"
          >
            View Full Project Archive
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
