"use client";
import React, { useState } from "react";

function Contact() {
  const contactItems = [
    { id: 1, icon: "📍", label: "Ubicación", value: "Tucumán, Argentina" },
    { id: 2, icon: "📞", label: "Teléfono", value: "+54 123456789" },
    { id: 3, icon: "✉️", label: "Email", value: "lucas@example.com" }
  ];

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aquí puedes agregar la lógica para enviar el formulario
  };

  return (
    <section className="overflow-hidden" id="contact">
      <div 
        className="left-0 h-[50px] w-[6000px] -scale-y-100 bg-contain bg-bottom"
        style={{
          backgroundImage: "url('/wave2.svg')",
        }}
      >
      </div>
      
      <div className="bg-slate-200">
        <div className="container mx-auto px-2 py-32 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Columna izquierda - Información de contacto */}
            <div style={{ opacity: 1, transform: "none" }}>
              <h1 className="mb-8 text-2xl font-bold uppercase">Let's stay in touch</h1>
              <div className="space-y-6">
                {contactItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <span className="text-2xl mt-1">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-gray-600">{item.label}</p>
                      <p className="text-lg text-gray-800">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Columna derecha - Formulario */}
            <div>
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto lg:mx-0">
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-bold uppercase text-gray-700">
                    Enter your name
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full rounded-md border-2 border-slate-300 p-3 text-sm outline-none transition-all duration-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-bold uppercase text-gray-700">
                    Enter your email
                  </label>
                  <input
                    type="email"
                    placeholder="yourmail@example.com"
                    className="w-full rounded-md border-2 border-slate-300 p-3 text-sm outline-none transition-all duration-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-8">
                  <label className="block mb-2 text-sm font-bold uppercase text-gray-700">
                    Enter your message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your message here"
                    className="w-full resize-none rounded-md border-2 border-slate-300 p-3 text-sm outline-none transition-all duration-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary-500 px-6 py-3 font-medium text-white shadow-[inset_0px_-4px_2px_rgb(0_0_0_/_25%)] transition-transform hover:scale-105 hover:animate-zoom active:scale-95"
                >
                  Send now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;