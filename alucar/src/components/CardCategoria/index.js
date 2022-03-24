import "./style.scss";
import { Reservar } from "../BotaoReserva";
import { Link } from "react-router-dom";
export const CardCategoria = ({ id, imagem, categoria, preco }) => {
  return (
    <>
      <article className="card__categoria">
        <div className="card__img" >
          <img src={imagem} alt={categoria} />
        </div>
        <div className="card__info">
          <h2>{categoria}</h2>
          <p className="subtitle">A partir de</p>
          <p className="info__preco">R$ {preco} / dia</p>
          <Link to={`/disponibilidade/:categoriaId`}>
            <Reservar  />
          </Link>
        </div>
      </article>
    </>
  )
}
