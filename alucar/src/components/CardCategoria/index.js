import "./style.scss";
import { useNavigate } from "react-router-dom";
export const CardCategoria = ({ id, imagem, categoria, preco }) => {
  const navigate = useNavigate();

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
          <button type="submit" className="btn success-btn" onSubmit={navigate(`/disponibilidade/${id}`)}>Revervar</button>
        </div>
      </article>
    </>
  )
}
