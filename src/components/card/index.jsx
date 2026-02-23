import "./card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Card({id, titulo, link, descricao, tags }) {
  return (

<div className="card border-0 custom-card text-white h-100" >
  <img src={link || "/img/default.png"} className="card-img-top" alt={titulo} />
  <div className="card-body d-flex flex-column">
    <h5 className="card-title fw-bold text-danger">{titulo}</h5>
    <p className="card-text flex-grow-1 fon">{descricao}</p>

    <div className="mt-auto">
      <div className="d-flex justify-content-between align-items-center">
      <Link href={`/Servicos/${id}`} className="btn btn-outline-danger fw-bold w-100 link text-light">
                  Adquirir <i className="bi bi-arrow-right"></i>
                </Link>
      </div>

      <div className="mt-3 d-flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="badge custom-badge bg-danger">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

  );
}


