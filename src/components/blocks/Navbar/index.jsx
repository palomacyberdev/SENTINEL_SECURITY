"use client"

import Link from 'next/link'
import Image from 'next/image'
import "./navbar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react";


export default function Navbar() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (

    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand logo" href="/">
            <Image
              src="/img/logo_seguranca.png"
              alt="Logotipo da Empresa"
              width={250}
              height={70}
              className='object-fit-cover'
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon navbar-dark" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link item d-flex justify-content-end pe-3" href="/">
                  Início
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link item d-flex justify-content-end pe-3" href="/#servicos">
                  Serviços
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link item d-flex justify-content-end pe-3" href="/Sobre">
                  Sobre
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link item d-flex justify-content-end pe-3" href="/contato">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

  );
}
