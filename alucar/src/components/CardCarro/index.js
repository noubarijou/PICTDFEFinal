/* import Detalhes from "../../detalhes.json" */
import { Link } from "react-router-dom"
import './style.scss';

export const CardCarro = ({ id, imagem, modelo, descricao, rating }) => {

    return (
        <>
            <article className="card__carro" key={id}>
                <Link to="/">
                    <div className="card__img">
                        <img src={imagem} alt={modelo} />
                    </div>
                </Link>
                <div className="card__info">
                    <div>{rating}</div>
                    <p className="subtitle">{modelo}</p>
                    <p className="body">{descricao}</p>
                    <Link className="body-large" to={`/${id}`}>Ver mais</Link>
                </div>

            </article>
        </>
    )
}

