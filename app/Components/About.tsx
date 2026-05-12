import React from "react";

function About() {
  
  const personalInfo = [
    { id: "1", label: "Full name", value: "Roberto Cuberos" },
    { id: "2", label: "Email", value: "robertocuberos@gmail.com" },
    { id: "3", label: "Phone", value: "+58 4127799607" },
  ];

  const personalInfo2 = [
    { id: "1", label: "Nationality", value: "Venezuelan" },
    { id: "2", label: "Availability", value: "FullTime" },
  ];

   return (
       <section id="about" className="container mx-auto overflow-hidden px-2 sm:px-4 mt-20">
      {/* Grid de 12 columnas para proporción 6-3-3 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
        
        {/* Columna 1: ABOUT ME - ocupa 6 de 12 columnas (50%) */}
        <div className="lg:col-span-6 text-center lg:text-start">
          <h1 className="mb-5 text-2xl font-bold uppercase">ABOUT ME</h1>
          <p>
            I am a Fullstack Developer with a passion for building robust web applications and a deep interest in Artificial Intelligence and Cybersecurity. My approach combines the efficiency of modern frameworks like React and FastAPI with the analytical power of Machine Learning. I don't just build features; I focus on creating scalable, intelligent, and secure digital products that solve real-world problems. Whether I'm training a model or securing a backend, I strive for excellence and continuous learning.
          </p>
        </div>
        
        {/* Columna 2: Lista 1 - ocupa 3 de 12 columnas (25%) */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <ul className="space-y-4">
            {personalInfo.map((item) => (
              <li key={item.id}>
                <div className="flex flex-col">
                  <span className="text-sm  mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold">
                    {item.value}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Columna 3: Lista 2 - ocupa 3 de 12 columnas (25%) */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <ul className="space-y-4">
            {personalInfo2.map((item) => (
              <li key={`${item.id}-2`}>
                <div className="flex flex-col">
                  <span className="text-sm  mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold">
                    {item.value}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}
  


export default About;
