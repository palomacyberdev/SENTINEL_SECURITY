
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import Link from "next/link";

export default function Home() {
    const servicos = [
        {
            id: 1,
            titulo: "Segurança Para Eventos",
            descricao: "Garanta a segurança do seu evento com nossa equipe especializada em grandes públicos, atuando no controle de acesso, prevenção de incidentes e proteção de convidados.",
            link: "https://res2.weblium.site/res/weblium/5c8a7fa9530a1f0025da5ef6_optimized_1395_c1395x931-0x0.webp",
            tags: ["Segurança", "Privado", "Comunicação"]
        },
        {
            id: 2,
            titulo: "Escolta",
            descricao: "Proteja cargas e pessoas com nossa equipe especializada em escolta 24h, com profissionais treinados, viaturas equipadas e monitoramento em tempo real.",
            img: "./img",
            tags: ["Segurança", "Blindado", "Escolta"]
        },
        {
            id: 3,
            titulo: "Monitoramento Online",
            descricao: "Proteja seu patrimônio 24h com nosso monitoramento remoto, câmeras de alta resolução, sensores inteligentes e resposta imediata a qualquer ocorrência.",
            link: "https://res2.weblium.site/res/weblium/5c8a2bc7bd85da00254918af_optimized_1396_c1396x930-0x0.webp",
            tags: ["Segurança", "Propiedade", "Online"]
        }
    ];

    return (
        <>
            <div style={{ minHeight: "100px" }}></div>
            <div
                className="d-flex justify-content-center align-items-center "
                style={{

                    minHeight: "90vh",
                    backgroundColor: "var(--section-background)",
                }}
            >
                <section className="container p-5">
                    <div className="row align-items-center justify-content-center">


                        <div className="col-lg-6 col-md-6 col-12 text-center mb-4 mb-md-0">
                            <img
                                src="./img/img_login.png"
                                alt="Imagem ilustrativa"
                                className="img-fluid float-animation"
                                style={{ maxWidth: "90%", height: "auto" }}
                            />
                        </div>

                        {/* Formulário */}
                        <div className="col-lg-5 col-md-8 col-12">
                            <form
                                className="p-4 p-md-5 custom-form mx-auto shadow-lg rounded-4"
                                style={{ backgroundColor: "var(--background)", maxWidth: "500px" }}
                            >
                                <h3 className="text-center mb-4 text-light fw-bold">
                                    Cadastro de Serviço
                                </h3>

                                <div className="mb-4">
                                    <label htmlFor="inputNome" className="form-label text-light">
                                        Nome completo
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control custom-input text-light"
                                        id="inputNome"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="inputTel" className="form-label text-light">
                                        Número de Telefone
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control custom-input text-light"
                                        id="inputTel"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="inputEmail" className="form-label text-light">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control custom-input text-light"
                                        id="inputEmail"
                                    />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="inputMensagem" className="form-label text-light">
                                        Mensagem
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control custom-input text-light"
                                        id="inputMensagem"
                                    />
                                </div>



                                <div className="d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="btn btn-danger fw-semibold"
                                        style={{ width: "150px" }}
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>


                <section className="w-100" style={{ backgroundColor: "var(--section-background)" }}>
                   
                <div className="container-fluid p-5 ">
                    <div className="row">
                        <div className="col-md-8 p-0">
                            <iframe
                                className="map w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.118452801427!2d-46.655042123788085!3d-23.564188861697787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7ddc19239%3A0xe60220ddf111bff7!2sEdif%C3%ADcio%20Paulista%201100!5e0!3m2!1spt-BR!2sbr!4v1761822264395!5m2!1spt-BR!2sbr"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>

                        </div>
                        <div className="col-md-4 barra-lateral">
                            <form className="mb-3" >
                                <input


                                    type="text"
                                    className="form-control custom-input text-light"
                                    placeholder="Buscar loja..."
                                />
                            </form>
                            <ul className="list-group ">
                                <li className="list-group-item p-4 text-light " style={{ backgroundColor: "var(--background)", border: "none" }}>
                                    Rua das Palmeiras, 482 – Jardim América, São Paulo – SP, 01427-000
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "var(--background)", border: "none" }}>
                                    Avenida Atlântica, 1901 – Copacabana, Rio de Janeiro – RJ, 22021-001
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "var(--background)", border: "none" }}>
                                    Rua das Flores, 75 – Centro, Curitiba – PR, 80020-090
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "var(--background)", border: "none" }}>
                                    Avenida Brasil, 3260 – Funcionários, Belo Horizonte – MG, 30140-002
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "var(--background)", border: "none" }}>
                                    Rua Dom Pedro II, 210 – Centro, Porto Alegre – RS, 90010-050
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "var(--background)", border: "none" }}>
                                    Rua Bahia, 1345 – Savassi, Belo Horizonte – MG, 30160-011
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "var(--background)", border: "none" }}>
                                    Alameda Santos, 999 – Cerqueira César, São Paulo – SP, 01419-001
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "var(--background)", border: "none" }}>
                                    Rua XV de Novembro, 404 – Centro, Florianópolis – SC, 88010-400
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "var(--background)", border: "none" }}>
                                    Avenida Sete de Setembro, 1870 – Centro, Salvador – BA, 40060-002
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </section>

                
           
        </>
    );

}
