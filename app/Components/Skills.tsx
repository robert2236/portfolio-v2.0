import React from "react";
import Image from "next/image";

function Skills() {
  interface Skill {
    id: string;
    name: string;
    icon: string;
  }

  // Datos de las skills organizados por filas - CORREGIDO a .png
  const skillsByRows = [
    // Primera fila: 10 elementos
    [
      { id: "bootstrap", name: "Bootstrap", icon: "/bootstrap.png" },
      { id: "css", name: "CSS", icon: "/css.png" },
      { id: "html", name: "HTML", icon: "/html.png" },
      { id: "javascript", name: "JavaScript", icon: "/javascript.png" },

      { id: "mui", name: "Material-UI", icon: "/mui.png" },
      { id: "react", name: "React", icon: "/react.png" },

      { id: "tailwind", name: "Tailwind CSS", icon: "/tailwind.png" },
    ],
    // Segunda fila: 2 elementos
    [{ id: "typescript", name: "TypeScript", icon: "/typescript.png" }],
  ];

  const servicios = [
    {
      icono: "🎨", // Puedes reemplazar con un componente de icono real
      titulo: "Design + Development",
      descripcion:
        "Clean, modern designs - optimized for performance, search engines, and converting users to customers.",
    },
    {
      icono: "⚙️", // Puedes reemplazar con un componente de icono real
      titulo: "Technology",
      descripcion:
        "Combined all the latest technologies to a progressive website.",
    },
    {
      icono: "📱", // Puedes reemplazar con un componente de icono real
      titulo: "Always responsive",
      descripcion:
        "A responsive design makes your website accessible to all users, regardless of their device.",
    },
  ];

  return (
    <div className="mt-40">
      <div className="text-center">
        {/* Onda con altura aumentada y color de fondo */}
        <div
          className="left-0 h-[50px] w-[6000px] -scale-y-100 bg-wave bg-contain bg-bottom" // h-24 = 96px, mb-0, bg-custom
          style={{
            backgroundImage: "url('/wave.svg')",
          }}
        ></div>

        {/* Contenedor con el mismo color de fondo */}
        <div className="bg-custom pt-4 pb-16">
          {" "}
          {/* Añadido padding top y más bottom */}
          <h1 className="text-2xl font-bold uppercase">My Skills</h1>
          <p className="mb-16 font-light">
            I Like To Craft Beautiful And Scalable Web Products
          </p>
          <div className="max-w-6xl mx-auto">
            {/* Primera fila de logos (10 elementos) */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 mb-10">
              {skillsByRows[0].map((skill) => (
                <div
                  key={skill.id}
                  className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
                >
                  <div className="relative w-14 h-14 md:w-16 md:h-16 mb-3">
                    <div className="absolute   transition-all"></div>
                    <div className="mx-auto h-[60px] w-[60px] rounded-full bg-white">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="h-auto max-w-full p-3"
                      />
                    </div>
                  </div>
                  <span className="text-xs md:text-sm font-medium text-white/90">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Segunda fila de logos (2 elementos) - centrados */}
            <div className="flex justify-center gap-10 md:gap-12 lg:gap-16">
              {skillsByRows[1].map((skill) => (
                <div
                  key={skill.id}
                  className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
                >
                  <div className="relative w-14 h-14 md:w-16 md:h-16 mb-3">
                    <div className="absolute  transition-all"></div>
                    <div className="mx-auto h-[60px] w-[60px] rounded-full bg-white">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="h-auto max-w-full p-3"
                      />
                    </div>
                  </div>
                  <span className="text-xs md:text-sm font-medium text-white/90">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-20 grid grid-cols-12 gap-5 gap-y-8">
              {/* Mapear el array de servicios para renderizar cada uno */}
              {servicios.map((servicio, index) => (
                <div
                  key={index}
                  className="col-span-12 flex gap-10 md:col-span-4"
                >
                  <div className="flex-shrink-0">
                    <span className="text-3xl">{servicio.icono}</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">
                      {servicio.titulo}
                    </h3>
                    <p className="text-sm">{servicio.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="left-0 h-[50px] w-[6000px] bg-wave bg-contain bg-bottom" // h-24 = 96px, mb-0, bg-custom
        style={{
          backgroundImage: "url('/wave.svg')",
        }}
      ></div>
    </div>
  );
}

export default Skills;
