"use client";
import React from "react";

function HomeComponent() {
  return (
    <div className="relative bg-custom h-[calc(70vh-4rem)]">
      <div className="container mx-auto h-full flex items-center">
        {" "}
        {/* Añadido flex */}
        <div className="grid grid-cols-2 gap-y-20 justify-items-center w-full">
          {/* Columna 1 */}
          <div className="px-2">
            <div className="p-4 m-auto">
              <h1 className="font-bold text-6xl drop-shadow-xl leading-tight">
                Roberto <br /> Cuberos
              </h1>
              <span className="  text-[30px]">FRONT-END DEVELOPER</span>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="px-2">
            <div className="p-4 flex justify-center items-center">
              {/* Usando img tag básico */}
              <img
                src="/hero.svg"
                alt="Ilustración descriptiva"
                className="h-full"
                style={{
                  animation: "wave-float 5s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes wave-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          25% {
            transform: translateY(-6px);
          }
          50% {
            transform: translateY(-12px);
          }
          75% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </div>
  );
}

export default HomeComponent;
