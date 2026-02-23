import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/card";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const servicos = [
    {
      id: 1,
      titulo: "Segurança Para Eventos",
      descricao: "Garanta a segurança do seu evento com nossa equipe especializada em grandes públicos, atuando no controle de acesso, prevenção de incidentes e proteção de convidados.",
      img: "./img/Evento.webp",
      tags: ["Segurança", "Privado", "Comunicação"]
    },
    {
      id: 2,
      titulo: "Escolta",
      descricao: "Proteja cargas e pessoas com nossa equipe especializada em escolta 24h, com profissionais treinados, viaturas equipadas e monitoramento em tempo real.",
      img: "./img/Escolta.webp",
      tags: ["Segurança", "Blindado", "Escolta"]
    },
    {
      id: 3,
      titulo: "Monitoramento Online",
      descricao: "Proteja seu patrimônio 24h com nosso monitoramento remoto, câmeras de alta resolução, sensores inteligentes e resposta imediata a qualquer ocorrência.",
      img: "./img/Monitoramento_online.jpg",
      tags: ["Segurança", "Propiedade", "Online"]
    }
  ];

  return (
    <>

      <main>
        <div className="position-relative text-center banner vh-100">
          <img src="/img/banner1.png" className="w-100 h-100" alt="Banner"></img>
          <div className="position-absolute top-50 start-50 translate-middle text-white">
            <div className="py-5">
              <h1 className="display-5 fw-bold text-white mb-4 ">Sentinel Security</h1>
              <div className="col-lg-12 mx-auto ">
                <p className="fs-5 mb-4">
                  Protegemos a sua segurança em todos os momentos da sua vida, desde serviços de patrulha até escoltas. Com confidencialidade e confiabilidade.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <Link href="#servicos"  className="btn btn-danger btn-lg px-4 me-sm-3 fw-bold">
                
                    Veja nossos Serviços

              </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="w-100 p-5" style={{ backgroundColor: "var( --background)" }}>
          <section className="container py-5 " >

            <div className="row align-items-start">

              <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                <img
                  src="https://res2.weblium.site/res/weblium/5c8a2bf61541e40024d92142_optimized_1395_c1395x931-0x0.webp"
                  alt="Imagem Principal"
                  className="img-fluid rounded shadow"
                />
              </div>


              <div className="col-12 col-lg-6 d-flex flex-column" >
                <p className="fst-italic fs-5">
                  Na <strong>Sentinel Security</strong>, oferecemos soluções completas em segurança patrimonial, empresarial e pessoal.
                  Com tecnologia de ponta e uma equipe altamente treinada, garantimos tranquilidade, confiança e proteção 24 horas por dia.
                </p>

                <ul className="list-unstyled mb-4 mt-3">
                  <li className="mb-2">
                    <i className="bi bi-list-check me-2 text-danger"></i>Monitoramento 24/7
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-list-check me-2 text-danger"></i>Equipe treinada e certificada
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-list-check me-2 text-danger"></i>Tecnologia de ponta
                  </li>
                </ul>

                <div className="mt-auto">
                  <button className="btn btn-danger btn-lg">Saiba Mais</button>
                </div>
              </div>
            </div>
          </section>
        </div>







        <div className="w-100 p-5" style={{backgroundColor: "var( --section-background)"}}>
          <section className="container " style={{backgroundColor: "var( --section-background)"}}>
            <h1 className="text-center mb-4 fw-bold">Serviços que Oferecemos</h1>

            <div className="row g-5 " id="servicos" >
              {servicos.map((servico, index) => (
                <div className="col-md-4" key={index}>

                  <Card
                    id={servico.id}
                    link={servico.img}
                    titulo={servico.titulo}
                    descricao={servico.descricao}
                    tags={servico.tags}
                  /></div>

              ))}
            </div>
          </section></div>

      </main>

    </>
  );

}
