import Card from "@/components/card";
import Link from "next/link";

export default function Home() {
  const servicos = [
    {
      id: 1,
      titulo: "Segurança Para Eventos",
      descricao:
        "Garanta a segurança do seu evento com nossa equipe especializada em grandes públicos, atuando no controle de acesso, prevenção de incidentes e proteção de convidados.",
      img: "./img/Evento.webp",
      tags: ["Segurança", "Privado", "Comunicação"],
    },
    {
      id: 2,
      titulo: "Escolta",
      descricao:
        "Proteja cargas e pessoas com nossa equipe especializada em escolta 24h, com profissionais treinados, viaturas equipadas e monitoramento em tempo real.",
      img: "./img/Escolta.webp",
      tags: ["Segurança", "Blindado", "Escolta"],
    },
    {
      id: 3,
      titulo: "Monitoramento Online",
      descricao:
        "Proteja seu patrimônio 24h com nosso monitoramento remoto, câmeras de alta resolução, sensores inteligentes e resposta imediata a qualquer ocorrência.",
      img: "./img/Monitoramento_online.jpg",
      tags: ["Segurança", "Propriedade", "Online"],
    },
  ];

  return (
    <>
      <section id="hero">
        <div className="container ">
          <div className="hero-card-container">
            {/* A imagem de fundo ou o elemento com degradê */}
            <div className="hero-overlay-bg"></div>

            <div className="hero-content-inner">
              <div className="hero-text">
                <h1>
                  Sentinel <span>Security</span>
                </h1>
                <p>
                  Protegemos a sua segurança em todos os momentos da sua vida.
                </p>
                <button className="btn-planos">Conheça os planos</button>
              </div>

              <div className="hero-person-image">
                {/* Imagem do segurança "saindo" do card */}
                <img src="/img/seguranca-hero.png" alt="Segurança" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Seção 2: Sobre / Diferenciais */}
      <section id="sobre">
        <div className="container-sobre">
          <div className="sobre-image">
            <img
              src="https://res2.weblium.site/res/weblium/5c8a2bf61541e40024d92142_optimized_1395_c1395x931-0x0.webp"
              alt="Equipe de Segurança"
            />
          </div>
          <div className="sobre-text">
            <h2>
              Soluções completas em segurança patrimonial, empresarial e
              pessoal.
            </h2>
            <p>
              Na Sentinel Security, utilizamos tecnologia de ponta e equipe
              treinada para garantir sua proteção 24h.
            </p>

            <ul className="lista-diferenciais">
              <li>
                <strong>Monitoramento 24/7</strong>: Olhos atentos o tempo todo.
              </li>
              <li>
                <strong>Equipe Certificada</strong>: Profissionais altamente
                treinados.
              </li>
              <li>
                <strong>Tecnologia</strong>: Equipamentos de última geração.
              </li>
            </ul>

            <button className="btn-main">Saiba Mais</button>
          </div>
        </div>
      </section>

      {/* Seção 3: Listagem de Serviços */}
      <section id="servicos">
        <div className="container-servicos">
          <h3>Nossas Soluções</h3>
          <div className="grid-servicos">
            {servicos.map((servico) => (
              <div className="item-servico" key={servico.id}>
                <Card
                  id={servico.id}
                  link={servico.img}
                  titulo={servico.titulo}
                  descricao={servico.descricao}
                  tags={servico.tags}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
