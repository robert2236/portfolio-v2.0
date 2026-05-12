"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null); // Referencia para el formulario de EmailJS
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(""); // Para mostrar mensajes de éxito/error

  const contactItems = [
    { id: 1, icon: "📍", label: "Ubicación", value: "Maracay, Venezuela" },
    { id: 2, icon: "📞", label: "Teléfono", value: "+58 4127799607" },
    { id: 3, icon: "✉️", label: "Email", value: "robertocuberos@gmail.com" } // Actualizado ;)
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSending(true);

    const SERVICE_ID = "service_efv562z";
    const TEMPLATE_ID = "template_gp7mceq";
    const PUBLIC_KEY = "E0FJRvYjGplrshGEE";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log("Email enviado:", result.text);
          setStatus("SUCCESS");
          setFormData({ user_name: "", user_email: "", message: "" }); // Limpia el formulario
      }, (error) => {
          console.log("Error al enviar:", error.text);
          setStatus("ERROR");
      })
      .finally(() => {
          setIsSending(false);
          // Borrar el estado de éxito después de 5 segundos
          setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <section className="overflow-hidden" id="contact">
      <div 
        className="left-0 h-[50px] w-[6000px] -scale-y-100 bg-contain bg-bottom"
        style={{ backgroundImage: "url('/wave2.svg')" }}
      ></div>
      
      <div className="bg-slate-200">
        <div className="container mx-auto px-2 py-32 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Columna izquierda */}
            <div>
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
              <form ref={formRef} onSubmit={handleSubmit} className="max-w-lg mx-auto lg:mx-0">
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-bold uppercase text-gray-700">Enter your name</label>
                  <input
                    type="text"
                    name="user_name" // Debe coincidir con tu template de EmailJS
                    placeholder="Full name"
                    className="w-full rounded-md border-2 border-slate-300 p-3 text-sm outline-none transition-all focus:border-[#e34c43] focus:ring-2 focus:ring-red-100"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-bold uppercase text-gray-700">Enter your email</label>
                  <input
                    type="email"
                    name="user_email" // Debe coincidir con tu template de EmailJS
                    placeholder="yourmail@example.com"
                    className="w-full rounded-md border-2 border-slate-300 p-3 text-sm outline-none transition-all focus:border-[#e34c43] focus:ring-2 focus:ring-red-100"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-8">
                  <label className="block mb-2 text-sm font-bold uppercase text-gray-700">Enter your message</label>
                  <textarea
                    rows={5}
                    name="message" // Debe coincidir con tu template de EmailJS
                    placeholder="Write your message here"
                    className="w-full resize-none rounded-md border-2 border-slate-300 p-3 text-sm outline-none transition-all focus:border-[#e34c43] focus:ring-2 focus:ring-red-100"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full rounded-full px-6 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95 ${
                    isSending ? 'bg-gray-400' : 'bg-[#e34c43]'
                  }`}
                >
                  {isSending ? "Sending..." : "Send now"}
                </button>

                {/* Mensajes de feedback */}
                {status === "SUCCESS" && (
                  <p className="mt-4 text-green-600 font-bold text-center">¡Mensaje enviado con éxito! 🚀</p>
                )}
                {status === "ERROR" && (
                  <p className="mt-4 text-red-600 font-bold text-center">Hubo un error. Inténtalo de nuevo. ❌</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;