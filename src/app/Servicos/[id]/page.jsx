"use client";

import { useParams, useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ServicoIndividual() {
  const { id } = useParams();
  const router = useRouter();

  const servicos = {
    1: {
      nome: "Segurança Para Eventos",
      descricao:
        "Garantimos a segurança completa do seu evento, desde o controle de acesso até a proteção de convidados.",
      detalhes: [
        "Equipe uniformizada e treinada para grandes públicos",
        "Prevenção de incidentes e controle de acesso",
        "Comunicação via rádio e suporte em tempo real",
        "Planejamento estratégico de segurança",
      ],
      beneficios: [
        "Mais tranquilidade para organizadores e convidados",
        "Redução de riscos e incidentes",
        "Atuação discreta e profissional",
        "Equipe pronta para qualquer emergência",
      ],
      tags: ["Patrimonial", "Eventos", "Monitoramento"],
      imagem: "../img/Seguranca_eventos.jpg",
      depoimentos: [
        {
          nome: "Camila Bolzani",
          profissao: "Organizadora de Shows",
          texto:
            "Amei!!! Fiz um evento para mais de 40 mil pessoas e tudo ocorreu bem graças ao serviço da Sentinels Security.",
        },
        {
          nome: "Ana Clara Marianos",
          profissao: "Produtora de Eventos",
          texto:
            "Equipe totalmente qualificada e preparada para qualquer situação. Segurança impecável!",
        },
      ],
    },
    2: {
      nome: "Escolta",
      descricao:
        "Proteja cargas e pessoas com nossos profissionais altamente treinados e monitoramento 24h.",
      detalhes: [
        "Escolta armada e desarmada",
        "Monitoramento em tempo real via GPS",
        "Viaturas rastreadas e equipe tática",
        "Relatórios automáticos de segurança",
      ],
      beneficios: [
        "Proteção completa em deslocamentos",
        "Equipe com treinamento avançado",
        "Agilidade na resposta a ameaças",
        "Sigilo e confiança garantidos",
      ],
      tags: ["Segurança", "Blindado", "24h"],
      imagem: "../img/guarda-costas.webp",
      depoimentos: [
        {
          nome: "Carlos Mendes",
          profissao: "Empresário de Logística",
          texto:
            "Super profissionais! A escolta foi monitorada em tempo real e muito organizada.",
        },
        {
          nome: "Beatriz Lima",
          profissao: "Gerente de Transporte",
          texto:
            "Recomendo muito! Contam com profissionais extremamente preparados e ágeis.",
        },
      ],
    },
    3: {
      nome: "Monitoramento Online",
      descricao:
        "Monitoramento remoto com câmeras de alta resolução e resposta imediata a qualquer ocorrência.",
      detalhes: [
        "Central própria 24/7",
        "Câmeras inteligentes e sensores avançados",
        "Acompanhamento em tempo real",
        "Relatórios e notificações automáticas",
      ],
      beneficios: [
        "Acesso remoto de qualquer lugar",
        "Segurança contínua e discreta",
        "Tecnologia moderna e confiável",
        "Equipe pronta para agir imediatamente",
      ],
      tags: ["Online", "Tecnologia", "Proteção"],
      imagem: "../img/Camera_Seguranca.jpeg",
      depoimentos: [
        {
          nome: "Felipe Andrade",
          profissao: "Empresário",
          texto:
            "Com o monitoramento online, me sinto seguro 24 horas por dia. Atendimento rápido e eficiente!",
        },
        {
          nome: "Juliana Torres",
          profissao: "Arquiteta",
          texto:
            "Equipe sensacional! Viajei por 3 meses e recebia relatórios diários sobre minha residência.",
        },
      ],
    },
  };

  const servico = servicos[Number(id)];

  if (!servico) {
    return (
      <div className="text-light text-center mt-5">
        <h3>Serviço não encontrado 😕</h3>
      </div>
    );
  }

  return (
    <main
      className="text-light"
      style={{
        background: "var(--background)",
        minHeight: "100vh",
      }}
    >

      <section
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          height: "70vh",
          backgroundImage: `url(${servico.imagem})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(22, 30, 63, 0.77)" }}
        ></div>

        <div className="position-relative text-center px-3">
          <h1 className="fw-bold display-4" style={{ color: "#e63946" }}>
            {servico.nome}
          </h1>
          <p className="lead w-75 mx-auto text-light">{servico.descricao}</p>
          <div className="mt-3">
            {servico.tags.map((tag, idx) => (
              <span
                key={idx}
                className="badge me-2 fs-6"
                style={{ backgroundColor: "#d9d9d9", color: "#0b192c" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>


      <section className="container py-5" >
        <h2 className="fw-bold mb-4 text-center" style={{ color: "#d9d9d9" }}>
          O que oferecemos
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul className="list-unstyled fs-5">
              {servico.detalhes.map((item, idx) => (
                <li key={idx} className="mb-3 d-flex align-items-start">
                  <i
                    className="bi bi-shield-check me-3 fs-4"
                    style={{ color: "#d9d9d9" }}
                  ></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      <section className="py-5" style={{ background: "var(--section-background)" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-4" style={{ color: "#e63946" }}>
            Por que escolher este serviço?
          </h2>
          <div className="row justify-content-center">
            {servico.beneficios.map((beneficio, idx) => (
              <div key={idx} className="col-md-5 mb-4">
                <div
                  className="p-4 rounded-4 shadow-sm border h-100"
                  style={{
                    background: "var(--background)",
                    borderColor: "#d9d9d9",
                    color: "white",
                  }}
                >
                  <i
                    className="bi bi-star-fill fs-3 mb-2"
                    style={{ color: "#e63946" }}
                  ></i>
                  <p className="fs-5">{beneficio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h3 className="fw-bold text-center mb-4" style={{ color: "#d9d9d9" }}>
          O que dizem nossos clientes
        </h3>
        <div className="row justify-content-center align-items-stretch">
          {servico.depoimentos.map((d, i) => (
            <div key={i} className="col-md-4 mb-4 d-flex">
              <div
                className="p-4 rounded-4 shadow-sm d-flex flex-column justify-content-between text-light w-100 h-100"
                style={{
                  minHeight: "150px",
                  background: "var(--section-background)",
                  border: "1px solid #d9d9d9",
                }}
              >
                <p className="fst-italic mb-3 flex-grow-1">“{d.texto}”</p>
                <div>
                  <p className="fw-bold mb-0" style={{ color: "#e63946" }}>
                    — {d.nome}
                  </p>
                  <small className="text-light">{d.profissao}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="text-center py-5 border-top"
        style={{ borderColor: "#e63946", backgroundColor: "var(--section-background)" }}
      >
        <h3 className="fw-bold mb-3 text-light">
          Pronto para contratar nossos serviços?
        </h3>
        <p className="mb-4 fs-5 text-secondary">
          Nossa equipe está pronta para garantir sua segurança e tranquilidade.
        </p>
        <button
          className="btn btn-lg px-5 rounded-pill shadow-sm"
          style={{
            backgroundColor: "#d9d9d9",
            border: "none",
            color: "#0b192c",
            fontWeight: "600",
          }}
          onClick={() => router.push("/contato")}
        >
          Confirmar Aquisição
        </button>
      </section>
    </main>
  );
}
