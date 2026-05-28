"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaBars, FaTimes, FaLinkedin } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "FAQ", path: "#faq" },
    { name: "Contact", path: "#contact" },
  ];

  // Eliminamos la función isActive ya que ahora usaremos scroll de anclas

  return (
    <>
      <header className="bg-custom p-3 sticky top-0 z-[100] w-full shadow-lg transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold text-black">MiLogo</span>
            </Link>
          </div>
          <div>
            {/* Navegación Desktop con indicador activo */}
            <nav className="hidden md:flex items-center gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`
                  relative
                  px-3 py-1.5 
                  text-sm font-medium
                  rounded-full 
                  transition-all duration-300
                  flex items-center justify-center text-gray-700 hover:text-black hover:bg-black/5 hover:shadow-sm
                `}
                >
                  {item.name}
                </Link>
              ))}

              {/* Icono de GitHub con mejores estilos */}
              <a
                href="http://github.com/robert2236"
                target="_blank"
                rel="noopener noreferrer"
                className="
                ml-4
                rounded-full 
                bg-transparent
                text-black 
                hover:bg-gray-800 
                transition-all duration-300
                flex items-center justify-center
                hover:scale-110
                shadow-lg
                hover:shadow-xl
              "
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href=""
                aria-label="Linkedin"
                className="
                ml-4
                rounded-full 
                bg-transparent
                text-black 
                hover:bg-gray-800 
                transition-all duration-300
                flex items-center justify-center
                hover:scale-110
                shadow-lg
                hover:shadow-xl
              "
              >
                <FaLinkedin size={24} />
              </a>
            </nav>
          </div>
          <div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-full hover:bg-black/5 transition-colors flex items-center justify-center"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <FaTimes size={24} className="text-black" />
              ) : (
                <FaBars size={24} className="text-black" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menú Móvil con indicador de ruta activa */}
      <div
        className={`
        fixed top-0 left-0 
        h-full w-80
        bg-white/95
        backdrop-blur-lg
        shadow-2xl
        z-50
        transform transition-transform duration-300
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        md:hidden
      `}
      >
        {/* Encabezado */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">L</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">MiLogo</h2>
                <p className="text-gray-600 text-sm">Menú</p>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
              aria-label="Cerrar menú"
            >
              <FaTimes size={20} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Navegación con indicador de ruta activa */}
        <nav className="p-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`
                relative
                block 
                px-4 py-4 
                text-lg font-bold text-gray-900 hover:bg-gray-100
                rounded-xl 
                transition-all duration-300
              `}
            >
              {item.name}
            </Link>
          ))}

          {/* Icono de GitHub en el menú móvil */}
          <div className="mt-6 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center
                gap-3
                px-6 py-4
                text-lg font-bold text-white 
                rounded-full 
                bg-black
                hover:bg-gray-800
                transition-all duration-300
                shadow-lg
                hover:shadow-xl
                hover:scale-[1.02]
              "
            >
              <FaGithub size={24} />
              <span>Ver en GitHub</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
