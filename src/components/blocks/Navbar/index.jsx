"use client";

import Link from "next/link";
import Image from "next/image";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <header className="fixed-top  bg-white">
      {" "}
      {/* Header fixo */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              src="/img/logo_seguranca.png"
              alt="Logotipo"
              width={200} // Um valor mais realista para largura
              height={80} // Aumentamos a altura base
              className="img-fluid logo-custom" // Adicionamos uma classe customizada
              priority // Adicione isso para carregar a logo mais rápido
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {" "}
              {/* Alinha verticalmente no desktop */}
              <li className="nav-item">
                <Link className="nav-link nav-item-link" href="/">
                  Início
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-item-link" href="/#servicos">
                  Serviços
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-item-link" href="/Sobre">
                  Sobre
                </Link>
              </li>
              <li className="nav-item ms-lg-3">
                {" "}
                {/* Espaço extra antes do botão */}
                <Link className="nav-link btn-contato-nav" href="/contato">
                  Fale conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
