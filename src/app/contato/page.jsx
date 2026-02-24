"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
 
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  return (
    <>
      
      <section 
        className="d-flex align-items-center py-5" 
        style={{ 
          minHeight: "100vh", 
          background: "radial-gradient(circle at 70% 20%, #004d4f 0%, #000000 100%)", 
          position: "relative",
          overflow: "hidden"
        }}
      >
    
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(#00A8AD 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}
        ></div>

        <div className="container position-relative z-1">
          <div className="row align-items-center">
            
         
            <div className="col-lg-6 mb-5 mb-lg-0 text-start">
              <span 
                className="fw-bold text-uppercase mb-2 d-block" 
                style={{ color: '#00ced1', letterSpacing: '4px', fontSize: '0.9rem' }}
              >
                Sentinel Security Solutions
              </span>
              <h1 className="display-3 fw-bold text-white mb-4 leading-tight">
                Segurança que <br />
                <span style={{ color: '#00A8AD' }}>acompanha você.</span>
              </h1>
              <p className="lead text-light mb-5 opacity-75" style={{ maxWidth: '500px' }}>
                Protegemos o seu patrimônio com inteligência e vigilância estratégica 24h por dia. 
                Tecnologia de ponta a serviço da sua tranquilidade.
              </p>
              
              <div className="d-flex gap-3">
                <button 
                  className="btn px-5 py-3 rounded-pill fw-bold"
                  style={{ backgroundColor: '#00A8AD', color: 'white' }}
                >
                  Conheça nossos planos
                </button>
                <button href="/Sobre" className="btn btn-outline-light px-4 py-3 rounded-pill">
                  Sobre nós
                </button>
              </div>
            </div>

           
            <div className="col-lg-5 offset-lg-1">
              <div 
                className="p-4 p-md-5 shadow-2xl"
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.03)", 
                  backdropFilter: "blur(25px)", 
                  borderRadius: "32px",
                  border: "1px solid rgba(0, 168, 173, 0.3)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
              >
                <h3 className="text-white fw-bold mb-4">Solicitar Orçamento</h3>
                
                <form>
                  <div className="mb-3">
                    <label className="form-label text-light opacity-50 small text-uppercase fw-bold">Nome Completo</label>
                    <input 
                      type="text" 
                      className="form-control bg-transparent text-white border-secondary py-2 shadow-none" 
                      style={{ borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}
                      placeholder="Seu nome"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-light opacity-50 small text-uppercase fw-bold">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      className="form-control bg-transparent text-white border-secondary py-2 shadow-none" 
                      style={{ borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}
                      placeholder="email@empresa.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-light opacity-50 small text-uppercase fw-bold">Mensagem</label>
                    <textarea 
                      className="form-control bg-transparent text-white border-secondary shadow-none" 
                      rows="3"
                      style={{ borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}
                      placeholder="Descreva sua necessidade..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="btn w-100 py-3 fw-bold text-white text-uppercase tracking-wider"
                    style={{ 
                      backgroundColor: "#00A8AD", 
                      borderRadius: "14px",
                      boxShadow: "0 10px 20px rgba(0, 168, 173, 0.2)"
                    }}
                  >
                    Enviar Solicitação
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      <section className="py-5 bg-black">
        <div className="container-fluid px-md-5">
          <div className="row g-4">
            <div className="col-md-8">
              <div className="rounded-4 overflow-hidden shadow-lg" style={{ height: "450px", border: "1px solid #1a1a1a" }}>
                <iframe
                  className="w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.65!3d-23.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzM2LjAiUyA0NsKwMzknMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
                  style={{ filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="p-4 rounded-4" style={{ backgroundColor: "#0a0a0a", border: "1px solid #1a1a1a" }}>
                <h4 className="text-white mb-4">Nossas Unidades</h4>
                <div className="overflow-auto custom-scrollbar" style={{ maxHeight: "350px" }}>
                  <ul className="list-group list-group-flush">
                    {[
                      "Rua das Palmeiras, 482 – SP",
                      "Avenida Atlântica, 1901 – RJ",
                      "Rua das Flores, 75 – PR",
                      "Avenida Brasil, 3260 – MG"
                    ].map((address, index) => (
                      <li key={index} className="list-group-item bg-transparent text-secondary border-secondary py-3 small">
                        <i className="bi bi-geo-alt-fill me-2" style={{ color: '#00A8AD' }}></i>
                        {address}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}