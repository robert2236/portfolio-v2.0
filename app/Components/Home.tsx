"use client";
import React, { useState, useEffect } from "react";

const TypewriterText = ({ text, delay = 0, speed = 100 }: { text: string, delay?: number, speed?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, started]);

  return (
    <>
      {displayedText}
      <span className="animate-pulse border-r-2 border-[#d4e157] ml-1 inline-block h-[1em] translate-y-1"></span>
    </>
  );
};

function HomeComponent() {
  return (
    <div id="home" className="relative bg-custom min-h-[85vh] sm:min-h-[70vh] flex items-center overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-10 items-center w-full px-6 md:px-0">

          {/* Columna 1: Textos */}
          <div className="order-1 w-full text-center md:text-left">
            <div className="space-y-2">
              <div className="p-4 mt-20 md:mt-0 text-center md:text-left">
                <h1 className="font-extrabold tracking-tighter drop-shadow-2xl leading-[0.8] mb-6">
                  {/* Roberto con fadeIn y escala masiva */}
                  <span className="text-white text-6xl md:text-7xl block animate__animated animate__fadeInDown">
                    Roberto
                  </span>

                  {/* Cuberos con gradiente y delay en la animación */}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e34c43] via-[#f36b64] to-[#d4e157] text-6xl md:text-7xl  block animate__animated animate__fadeInUp animate__delay-1s">
                    Cuberos
                  </span>
                </h1>

                {/* Subtítulo con entrada lateral */}
                <div className="animate__animated animate__fadeInLeft animate__delay-2s min-h-[80px]">
                  <span className="text-2xl sm:text-3xl md:text-[40px] font-light tracking-[0.15em] text-gray-300 block mt-2 uppercase">
                    <TypewriterText text="Full Stack Creative" delay={2000} speed={100} />
                  </span>
                  <div className="h-1 w-20 bg-[#d4e157] mt-4 mx-auto md:mx-0 rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-2 mt-6 justify-center md:justify-start">
                <span className="text-xl md:text-2xl font-medium text-[#d4e157] opacity-80 min-h-[40px]">
                  <TypewriterText text="Frontend Developer | React, Next.js & Python (FastAPI) | UI/UX & Web Security Enthusiast" delay={4500} speed={80} />
                </span>
              </div>
            </div>
          </div>

          {/* Columna 2: Ilustración */}
          <div className="order-2 overflow-visible">
            <div className="relative p-4 flex justify-center items-center">
              {/* Círculo de luz decorativo al fondo de la imagen */}
              <div className="absolute w-64 h-64 bg-[#e34c43] blur-[100px] opacity-20 rounded-full animate-pulse"></div>

              <img
                src="/hero.svg"
                alt="Roberto Cuberos Creative Developer"
                className="relative z-10 h-auto w-full max-w-[500px]"
                style={{
                  animation: "wave-float 6s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
      `}</style>
    </div>
  );
}

export default HomeComponent;