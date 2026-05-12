import React from "react";
import Image from "next/image";
// Importamos los iconos de react-icons (Heroicons)
import { HiOutlineCodeBracket, HiOutlineCpuChip, HiOutlineShieldCheck } from "react-icons/hi2";

function Skills() {
  interface Skill {
    id: string;
    name: string;
    icon: string;
  }

  const skillsByRows = [
    // --- FILA 1: WEB DEVELOPMENT (Frontend & Backend) ---
    [
      { id: "html", name: "HTML", icon: "/html.png" },
      { id: "css", name: "CSS", icon: "/css.png" },
      { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
      { id: "typescript", name: "TypeScript", icon: "/typescript.png" },
      { id: "react", name: "React", icon: "/react.png" },
      { id: "next", name: "Next JS", icon: "/next.png" },
      { id: "php", name: "PHP", icon: "/php.png" }, // Añadido PHP
      { id: "fastapi", name: "FastAPI", icon: "/fastapi.png" },
      { id: "node", name: "Node.js", icon: "/node.png" },
      { id: "tailwind", name: "Tailwind CSS", icon: "/tailwind.png" },
      { id: "mui", name: "Material-UI", icon: "/mui.png" },
      { id: "bootstrap", name: "Bootstrap", icon: "/bootstrap.png" },
      { id: "vercel", name: "Vercel", icon: "/vercel.jpg" },
    ],
    // --- FILA 2: DATA SCIENCE, AI & CYBERSECURITY ---
    [
      { id: "python", name: "Python", icon: "/python.png" },
      { id: "tensorflow", name: "TensorFlow", icon: "/tensorflow.png" },
      { id: "pytorch", name: "PyTorch", icon: "/pythorch.png" },
      { id: "scikit", name: "Scikit-Learn", icon: "/scikit.jpg" },
      { id: "pandas", name: "Pandas", icon: "/pandas.jpg" },
      { id: "postgresql", name: "PostgreSQL", icon: "/postgresql.png" },
      { id: "mongodb", name: "MongoDB", icon: "/mongodb.png" },
      { id: "kali", name: "Kali Linux", icon: "/kali.png" },
      { id: "parrot", name: "Parrot OS", icon: "/parrot.png" },
      { id: "metasploit", name: "Metasploit", icon: "/metasploit.png" },
      { id: "owasp", name: "OWASP", icon: "/owasp.png" },
      { id: "nmap", name: "Nmap", icon: "/nmap.png" },
      { id: "wireshark", name: "Wireshark", icon: "/wireshark.png" },
    ],
  ];

  const servicios = [
    {
      icon: <HiOutlineCodeBracket className="w-8 h-8 text-blue-400" />,
      titulo: "Fullstack Development",
      descripcion: "End-to-end web applications using modern stacks like React, FastAPI, and PHP. Focus on clean code and performance.",
    },
    {
      icon: <HiOutlineCpuChip className="w-8 h-8 text-purple-400" />,
      titulo: "AI Implementation",
      descripcion: "Integrating Machine Learning and NLP models into web environments to create intelligent and automated user experiences.",
    },
    {
      icon: <HiOutlineShieldCheck className="w-8 h-8 text-green-400" />,
      titulo: "Security & Reliability",
      descripcion: "Developing with a security-first mindset, ensuring robust backends and protecting applications against common vulnerabilities.",
    },
  ];

  return (
    <div id="services" className="mt-40">
      <div className="text-center">
        <div
          className="left-0 h-[50px] w-full -scale-y-100 bg-wave bg-contain bg-bottom"
          style={{ backgroundImage: "url('/wave.svg')" }}
        ></div>

        <div className="bg-custom pt-4 pb-16 px-4">
          <h1 className="text-3xl font-bold uppercase text-white">My Skills</h1>
          <p className="mb-16 font-light text-white/80">
            I Like To Craft Beautiful And Scalable Web & AI Products
          </p>

          <div className="max-w-7xl mx-auto">
            
            {/* SECCIÓN 1: WEB DEVELOPMENT */}
            <div className="mb-20">
              <h2 className="text-xl font-semibold mb-8 text-white/60 uppercase tracking-[0.2em]">
                Web Development
              </h2>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
                {skillsByRows[0].map((skill) => (
                  <div key={skill.id} className="group flex flex-col items-center transition-all duration-300 hover:scale-110">
                    <div className="relative w-14 h-14 md:w-16 md:h-16 mb-3">
                      <div className="mx-auto h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center overflow-hidden p-3 shadow-md">
                        <img src={skill.icon} alt={skill.name} className="max-h-full max-w-full object-contain" />
                      </div>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-white/90">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECCIÓN 2: DATA SCIENCE, AI & CYBERSECURITY */}
            <div className="mb-20">
              <h2 className="text-xl font-semibold mb-8 text-white/60 uppercase tracking-[0.2em]">
                Data Science, AI & Cybersecurity
              </h2>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
                {skillsByRows[1].map((skill) => (
                  <div key={skill.id} className="group flex flex-col items-center transition-all duration-300 hover:scale-110">
                    <div className="relative w-14 h-14 md:w-16 md:h-16 mb-3">
                      <div className="mx-auto h-[60px] w-[60px] rounded-full bg-white flex items-center justify-center overflow-hidden p-3 shadow-md">
                        <img src={skill.icon} alt={skill.name} className="max-h-full max-w-full object-contain" />
                      </div>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-white/90">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECCIÓN SERVICIOS CON REACT-ICONS */}
            <div className="mt-32 grid grid-cols-12 gap-8 text-white border-t border-white/10 pt-20">
              {servicios.map((servicio, index) => (
                <div key={index} className="col-span-12 md:col-span-4 flex gap-6 text-left">
                  <div className="flex-shrink-0 mt-1">{servicio.icon}</div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{servicio.titulo}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{servicio.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="left-0 h-[50px] w-full bg-wave bg-contain bg-bottom"
          style={{ backgroundImage: "url('/wave.svg')" }}
        ></div>
      </div>
    </div>
  );
}

export default Skills;