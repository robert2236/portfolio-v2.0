"use client";
import React, { useState } from "react";

function FAQ() {
  interface AccordionItem {
    id: string;
    question: string;
    answer: string;
  }

  const [activeItem, setActiveItem] = useState<string | null>(null);

  const accordionItems: AccordionItem[] = [
    {
      id: "1",
      question: "Who are you?",
      answer: "I'm a Full Stack Developer specializing in React, with 3 years of professional experience. I'm expanding my skills towards backend development with Python/FastAPI and exploring offensive security through HackTheBox. I'm passionate about AI, cybersecurity, and building modern web applications."
    },
    {
      id: "2",
      question: "What are your main skills?",
      answer: "My core expertise is in Frontend development with React, JavaScript, HTML5, and CSS3. I'm also proficient in Python/FastAPI for backend, MongoDB for databases, and have hands-on experience with AI/ML concepts including NLP and computer vision. Additionally, I'm developing security skills through practical pentesting exercises."
    },
    {
      id: "3",
      question: "What is your work experience?",
      answer: "I have 3 years of experience as a Frontend Developer at my current company, where I develop and maintain React applications, create reusable components, and collaborate using agile methodologies. While my professional role focuses on frontend, I've expanded my skills through personal full-stack and security projects."
    },
    {
      id: "4",
      question: "What projects have you done previously?",
      answer: "I've developed an Intelligent Gallery with AI (full stack with React, FastAPI, and 3 ML models), an Exotic Parrots Platform with custom animations and email systems, and I regularly practice offensive security through HackTheBox virtual machines. These projects showcase my ability to integrate frontend, backend, AI, and security concepts."
    },
    {
      id: "5",
      question: "What are you currently learning?",
      answer: "I'm actively pursuing degrees in Systems Engineering and Artificial Intelligence Engineering, while independently studying Cybersecurity. I'm expanding my full-stack capabilities with Python/FastAPI and applying offensive security methodologies to web development contexts."
    },
    {
      id: "6",
      question: "What type of work are you looking for?",
      answer: "I'm seeking remote opportunities where I can apply my React expertise while contributing with my growing knowledge in AI and security. I'm particularly interested in roles that involve modern web development with opportunities to work on innovative projects involving machine learning or security-conscious development."
    },
    {
      id: "7",
      question: "What sets you apart from other developers?",
      answer: "My unique combination of professional React experience, active pursuit of AI and cybersecurity knowledge, and practical application through personal projects gives me a multidimensional perspective. I understand not just how to build applications, but also consider AI integration possibilities and potential security implications in development."
    },
    {
      id: "8",
      question: "Are you open to freelance or contract work?",
      answer: "Yes, I'm available for freelance, contract, or full-time remote positions. My skill set is particularly suited for projects requiring React development with potential backend integration, AI feature implementation, or security-aware application design."
    }
  ];

  const toggleItem = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section className="container mx-auto px-2 py-36 sm:px-4">
      <h1 className="text-center text-2xl font-bold uppercase">FAQ</h1>
      <p className="mb-16 text-center font-light">
        Frequently Asked Questions, Get Knowledge Before Hand
      </p>

      <div className="szh-accordion" data-szh-adn="">
        {accordionItems.map((item) => (
          <div 
            key={item.id}
            className="szh-accordion__item szh-accordion__item--status-exited mb-2 border border-gray-200 rounded-lg overflow-hidden"
            style={{ opacity: 1, transform: 'none' }}
          >
            <h3 className="szh-accordion__item-heading" style={{ margin: '0px' }}>
              <button
                id={`accordion-${item.id}`}
                aria-controls={`accordion-panel-${item.id}`}
                aria-expanded={activeItem === item.id}
                data-szh-adn-btn=""
                type="button"
                className="szh-accordion__item-btn w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800">{item.question}</p>
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 16 16" 
                    className={`chevron transition-transform duration-300 ${
                      activeItem === item.id ? 'rotate-180' : ''
                    }`} 
                    height="1em" 
                    width="1em" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                    ></path>
                  </svg>
                </div>
              </button>
            </h3>
            
            <div 
              className="szh-accordion__item-content overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: activeItem === item.id ? '500px' : '0px',
                display: activeItem === item.id ? 'block' : 'none'
              }}
            >
              <div 
                id={`accordion-panel-${item.id}`}
                aria-labelledby={`accordion-${item.id}`}
                role="region"
                className="szh-accordion__item-panel"
              >
                <div className="p-4 bg-gray-50 text-gray-600">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;