import "./style.scss";
import { useNavigate, Link } from "react-router-dom";
export const CardCategoria = ({ id, imagem, categoria, preco }) => {
  const navigate = useNavigate();
  /* const handleSubmit = () => {
    navigate(`/categoria/${id}`);
  }; */
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
          <Link to={`/disponibilidade/${id}`}>
          <button type="submit" className="btn success-btn">Revervar</button>
          </Link>
        </div>
      </article>
    </>
  )
}
