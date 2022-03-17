/* import Detalhes from "../../detalhes.json" */
import { Link } from "react-router-dom"
import { Rating } from "./components/Rating";
import './style.scss';


export const CardCarro = ({ id, imagem, modelo, descricao, rating }) => {

    return (
        <>
            <article className="card__carro">
                <Link to="/">
                    <div className="card__img">
                        <img src={imagem} alt={modelo} />
                    </div>
                </Link>
                <div className="card__info">
                    <div className="info__principal">
                        <p className="subtitle">{modelo}</p>
                        <p className="body">{descricao}</p>
                    </div>
                    <div className="info__adicional">
                        <Rating rating={rating} />
                        <Link className="body-large" to={`/${id}`}>Ver mais</Link>
                    </div>
                </div>

            </article>
        </>
    )
}

