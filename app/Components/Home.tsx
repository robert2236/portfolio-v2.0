"use client";
import React from "react";

function HomeComponent() {
  return (
    <div id="home" className="relative bg-custom min-h-[75vh] sm:min-h-[60vh]  overflow-hidden">
      <div className="container mx-auto h-full flex items-center py-4 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-20 justify-items-center w-full px-4 md:px-0">
          {/* Columna 1 */}
          <div className="px-2 order-1 w-full">
            <div className="p-4 mt-20 mt-sm-0 text-center md:text-left">
              <h1 className="font-bold text-6xl drop-shadow-xl leading-tight">
                Roberto <br /> Cuberos
              </h1>
              <span className="text-xl sm:text-2xl md:text-[30px] block mt-4">
                FRONT-END DEVELOPER
              </span>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="px-2 order-2 md:order-2  overflow-hidden">
            <div className="p-4 flex justify-center items-center h-full">
              <img
                src="/hero.svg"
                alt="Ilustración descriptiva"
                className="h-full w-full "
                style={{
                  animation: "wave-float 4s ease-in-out infinite",
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
          50% {
            transform: translateY(-8px);
          }
        }
        
        
      `}</style>
    </div>
  );
}

export default HomeComponent;