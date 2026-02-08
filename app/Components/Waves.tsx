'use client';
import React from 'react'

function Waves() {
  return (
    <section className=''>
      <div className="bottom-0 left-0 right-0 h-[180px] overflow-hidden">
        <div className="absolute inset-0" style={{clipPath: 'inset(0 0 0 0)'}}>
          {/* Onda 1 - Más lenta y profunda */}
          <div 
            className="
              absolute 
              bottom-0
              left-0 
              w-[6000px] 
              h-[180px] 
              bg-bottom 
              bg-repeat-x
              opacity-50
              animate-wave-1
            "
            style={{ 
              backgroundImage: "url('/wave.svg')" 
            }}
          ></div>

          {/* Onda 2 - Principal animada */}
          <div 
            className="
              absolute 
              bottom-0
              left-0 
              w-[6000px] 
              h-[180px] 
              bg-bottom 
              bg-repeat-x
              opacity-70
              animate-wave-2
            "
            style={{ 
              backgroundImage: "url('/wave.svg')" 
            }}
          ></div>

          {/* Onda 3 - Más rápida */}
         {/*  <div 
            className="
              absolute 
              bottom-0
              left-0 
              w-[6000px] 
              h-[120px] 
              bg-bottom 
              bg-repeat-x
              animate-wave-3
            "
            style={{ 
              backgroundImage: "url('/wave.svg')" 
            }}
          ></div> */}

          {/* Onda 4 - Más sutil */}
         {/*  <div 
            className="
              absolute 
              bottom-0
              left-0 
              w-[6000px] 
              h-[200px] 
              bg-bottom 
              bg-repeat-x
              opacity-40
              animate-wave-4
            "
            style={{ 
              backgroundImage: "url('/wave.svg')" 
            }}
          ></div> */}
        </div>
      </div>

      {/* Gradiente para suavizar transición */}
      <div className="
        absolute 
        bottom-0
        left-0 
        right-0 
        h-32 
        bg-gradient-to-t 
        from-custom/100 
        via-custom/80 
        to-transparent
        pointer-events-none
      "></div>
    </section>
  )
}

export default Waves