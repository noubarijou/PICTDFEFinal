import "./style.scss";
import { Reservar } from "../BotaoReserva";
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
          <Reservar className="btn success-btn btn-large" {...id} />
        </div>

      </article>
    </>
  )
}
