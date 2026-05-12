"use client";
import React, { useState } from "react";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState(".mix-all");

  const filterOptions = [
    { value: ".mix-all", label: "All", active: true },
    { value: ".mix-work", label: "Work projects", active: false },
    { value: ".mix-personal", label: "Personal Projects", active: false },
  ];

  // Datos de ejemplo para los proyectos
  const projects = [
    {
      id: 1,
      title: "E-commerce Template",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores id doloremque ut voluptatum, saepe iste ad cum consequuntur.",
      image: "./img/porfolio/project1.png",
      demoLink: "#",
      repoLink: "#",
      category: "mix-personal"
    },
    {
      id: 2,
      title: "Landing Page Template",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores id doloremque ut voluptatum, saepe iste ad cum consequuntur.",
      image: "./img/porfolio/project2.png",
      demoLink: "#",
      repoLink: "#",
      category: "mix-work"
    },
    // Agrega más proyectos aquí
  ];

  return (
    <section className="container mx-auto px-2 py-36 sm:px-4" id="portfolio">
      <div className="text-center">
        <h1 className="text-2xl font-bold uppercase">Portfolio</h1>
        <p>My Most Notable Projects</p>
      </div>
      
      <ul className="mb-6 flex flex-wrap justify-center gap-5">
        {filterOptions.map((option) => (
          <li
            key={option.value}
            className={`cursor-pointer select-none px-4 py-2 rounded-full hover:animate-zoom transition-all ${
              activeFilter === option.value 
                ? "bg-primary-500 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            data-filter={option.value}
            onClick={() => setActiveFilter(option.value)}
          >
            {option.label}
          </li>
        ))}
      </ul>
      
      <div className="grid grid-cols-12 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id}
            className={`mix ${project.category} group col-span-12 flex h-[440px] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:col-span-6 lg:col-span-4`}
            style={{ opacity: 1, transform: 'none' }}
          >
            <figure className="h-full flex flex-col relative">
              <div className="relative h-[200px] w-full overflow-hidden bg-gray-50 border-b border-gray-100">
                <img 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={project.image} 
                  alt={project.title} 
                />
                <div className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-transparent z-10 pointer-events-none"></div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <figcaption className="mb-2 text-xl font-bold text-gray-800 transition-colors group-hover:text-primary-500">
                  {project.title}
                </figcaption>
                <figcaption className="line-clamp-3 text-sm text-gray-500">
                  {project.description}
                </figcaption>
              </div>
              
              <div className="mt-auto flex justify-center gap-4 p-5 pt-0">
                <a 
                  href={project.demoLink} 
                  className="flex flex-1 justify-center items-center gap-2 rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 16 16" 
                    height="1.2em" 
                    width="1.2em" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                  </svg>
                  Demo
                </a>
                
                <a 
                  href={project.repoLink} 
                  className="flex flex-1 justify-center items-center gap-2 rounded-full border-2 border-primary-500 px-4 py-2 text-sm font-semibold text-primary-500 transition-all duration-300 hover:bg-primary-50 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 16 16" 
                    height="1em" 
                    width="1em" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                  Repo
                </a>
              </div>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;