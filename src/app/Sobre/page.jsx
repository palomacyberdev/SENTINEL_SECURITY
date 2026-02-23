"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "../globals.css";
import Link from "next/link";

export default function Sobre() {
  const equipe = [
    {
      nome: "Fatima Bonner",
      funcao: "Coordenadora de Eventos",
      descricao:
        "Responsável pela organização completa de grandes eventos, garantindo segurança e logística.",
      imagem:
        "https://th.bing.com/th/id/R.69090d80b484b32fe81bc77362e92534?rik=46iT9NtfktmMOA&riu=http%3a%2f%2fwww.celffort.com.br%2fwp-content%2fuploads%2f2021%2f03%2fmulheres-na-seguranca-1.png&ehk=9Lecm81sOQnpt33T7zUtBWGIazoUsSwj5Ip5F1wJIXw%3d&risl=&pid=ImgRaw&r=0",
      depoimento:
        "Trabalho com dedicação para que cada evento seja seguro e impecável.",
    },
    {
      nome: "Lionel Ronaldo",
      funcao: "Chefe de Escolta",
      descricao:
        "Coordena a escolta de cargas e pessoas, garantindo máxima proteção e sigilo.",
      imagem:
        "https://image.freepik.com/fotos-gratis/homem-de-seguranca-vista-frontal-com-equipamento_23-2148403990.jpg",
      depoimento:
        "Garantir a segurança de nossos clientes é sempre minha prioridade.",
    },
    {
      nome: "Bruno Marrone",
      funcao: "Analista de Monitoramento",
      descricao:
        "Monitora remotamente patrimônios e eventos com tecnologia de ponta 24/7.",
      imagem:
        "https://img.freepik.com/fotos-premium/homem-de-uniforme-monitora-feeds-de-video-na-sala-de-controle-com-varias-telas-conceito-seguranca-monitoramento-operacoes-de-vigilancia-configuracao-da-sala-de-controle-analise-de-feed-de-video-pessoal-uniformizado_918839-48074.jpg",
      depoimento:
        "Com atenção total, asseguro que cada cliente esteja protegido a qualquer hora.",
    },
    {
      nome: "Virginia Junior",
      funcao: "Supervisor de Patrimônio",
      descricao:
        "Especialista em monitoramento e prevenção de incidentes em grandes propriedades.",
      imagem:
        "https://www.grupoiron.com/blog/wp-content/uploads/2023/06/vigilante-feminina.jpeg",
      depoimento: "Sempre alerta para proteger o patrimônio dos nossos clientes.",
    },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div style={{ minHeight: "100px" }}></div>
      <div
        className="d-flex justify-content-center align-items-center border-bottom"
        style={{

          minHeight: "90vh",
          backgroundColor: "var(--section-background)",
        }}
      >
        <section className="container p-5">
          <div className="row align-items-start">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <img
                src="./img/empresa.png"
                alt="Imagem Principal"
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="col-12 col-lg-6 d-flex flex-column ps-4">
              <h3 className="card-title mb-3 text-danger">Sobre Nós</h3>

              <p className="fs-5 ">
                A <strong>Sentinel Security</strong> é uma empresa especializada em segurança privada e patrimonial, comprometida em proteger o que mais importa para você: sua família, seu patrimônio e seu negócio.
                Com uma equipe altamente treinada e tecnologia de ponta, oferecemos soluções completas em monitoramento, vigilância e controle de acesso, garantindo tranquilidade e confiança a todos os nossos clientes.
              </p>

              <h3 className="card-title2 mt-3 text-danger">Nossa Missão</h3>
              <p className="fs-5 ">
                Proporcionar <strong>segurança com excelência</strong>, atuando de forma preventiva e eficiente, com profissionais capacitados e comprometidos com a ética e o respeito.
              </p>

              <ul className="list-unstyled mb-4 mt-3">
                {[
                  { titulo: "Comprometimento", descricao: "cada cliente é prioridade." },
                  { titulo: "Confiança", descricao: "base de todas as nossas relações." },
                  { titulo: "Inovação", descricao: "utilizamos as melhores tecnologias do mercado." },
                  { titulo: "Profissionalismo", descricao: "equipe qualificada e constantemente treinada." }
                ].map((item, i) => (
                  <li className="mb-3" key={i}>
                    <i className="bi bi-list-check me-2 text-danger"></i>
                    <strong>{item.titulo}</strong>: {item.descricao}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </section>
      </div>


      <main className="text-dark pt-5" style={{ minHeight: "100vh" }}>
        <section className="container mt-5" style={{ backgroundColor: "var(--background)" }}>
          <h1 className="text-center fw-bold mb-5 text-danger">Nossa Equipe</h1>
          <div className="row justify-content-center g-4 align-items-stretch">
            {equipe.map((membro, idx) => (
              <div
                key={idx}
                className={`col-lg-3 col-md-6 col-sm-8 col-10 animate-card`}
                style={{
                  transition: "all 0.5s ease",
                  transform: loaded ? "translateY(0)" : "translateY(50px)",
                  opacity: loaded ? 1 : 0,
                  transitionDelay: `${idx * 150}ms`,
                }}
              >
                <div className="card h-100 text-center p-4 rounded-4 shadow-sm d-flex flex-column justify-content-between" style={{ backgroundColor: "var(--section-background)" }}>
                  <div>
                    <div
                      className="image-wrapper mb-3 mx-auto"
                      style={{ width: "120px", height: "120px" }}
                    >
                      <img
                        src={membro.imagem}
                        alt={membro.nome}
                        className="rounded-circle img-fluid"
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      />
                    </div>
                    <h5 className="fw-bold text-light">{membro.nome}</h5>
                    <span className="badge bg-danger mb-3">{membro.funcao}</span>
                    <p className="text-light mb-3" style={{ minHeight: "60px" }}>
                      {membro.descricao}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <p className="fst-italic mb-2 text-light" style={{ minHeight: "40px" }}>
                      "{membro.depoimento}"
                    </p>
                    <div className="mt-3 d-flex justify-content-center gap-3">
                      <i className="bi bi-shield-fill-check fs-4 text-danger"></i>
                      <i className="bi bi-clock fs-4 text-danger"></i>
                      <i className="bi bi-people-fill fs-4 text-danger"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="text-center py-5 mt-5 border-top"
          style={{ backgroundColor: "var(--section-background)" }}
        >
          <h3 className="fw-bold mb-3 text-danger">Quer falar com nossa equipe?</h3>
          <p className="mb-4 fs-5 text-light">
            Entre em contato e nossa equipe especializada irá atender você rapidamente.
          </p>
          <Link href="/contato">
            <button
              className="btn btn-lg btn-danger rounded-pill px-5"
              onClick={() => alert("Redirecionar para página de contato")}
            >
              Fale Conosco
            </button></Link>
        </section>
      </main>
    </>
  );
}
