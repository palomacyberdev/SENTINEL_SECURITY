
import Link from 'next/link'

export default function Footer() {
    return (<>
    <footer
  className="text-light pt-5 pb-5"
  style={{ backgroundColor: "#131F3F" }}
>
  <div className="container">
    <div className="row gy-4 justify-content-between align-items-start">

      <div className="col-12 col-md-4">
        <h4 className="fw-bold text-danger" >
          Sentinel Security
        </h4>
        <p className="text-light-50 mt-3">
          Protegendo o que mais importa para você. Sistemas de segurança inteligentes e eficientes.
        </p>
      </div>


      <div className="col-6 col-md-2">
        <h5 className="fw-bold" style={{ color: "#E9E3DF" }}>
          Navegação
        </h5>
        <ul className="list-unstyled mt-3">
          <li><a href="/" className="text-light text-decoration-none">Início</a></li>
          <li><a href="/#servicos" className="text-light text-decoration-none">Serviços</a></li>
          <li><a href="/Sobre" className="text-light text-decoration-none">Sobre</a></li>
          <li><a href="/contato" className="text-light text-decoration-none">Contato</a></li>
        </ul>
      </div>

      <div className="col-12 col-md-3">
        <h5 className="fw-bold" style={{ color: "#E9E3DF" }}>
          Contato
        </h5>
        <p className="mt-3 mb-1">
          <i className="bi bi-telephone me-2 text-danger" ></i> (11) 99999-9999
        </p>
        <p className="mb-1">
          <i className="bi bi-envelope me-2 text-danger" ></i> contato@sentinelsecurity.com
        </p>
        <p>
          <i className="bi bi-geo-alt me-2 text-danger" ></i> São Paulo - SP
        </p>

     
        <div className="mt-3 d-flex gap-3">
          <a href="#" className="text-danger fs-4"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-danger fs-4"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-danger fs-4"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>


    <hr className="border-secondary my-4" />

    <div className="text-center text-light-50">
      © {new Date().getFullYear()} Sentinel Security — Todos os direitos reservados.
    </div>
  </div>
</footer>

    </>)
}