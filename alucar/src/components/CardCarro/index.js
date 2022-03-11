/* import Detalhes from "../../detalhes.json" */
import {Link} from "react-router-dom"
import './style.scss';

export const CardCarro = ({id, imagem, modelo, categoria, combustivel, descricao, rating, carro}) => {
    
    return (
        <>
            <article className="card__Carro">
            <Link>
            <div className="card__Img">
                <img src={imagem} alt={modelo}/>
            </div>
            </Link>
            <div className="card__Info">
                <div>{rating}</div>
                <p>{modelo} {categoria}</p>
                <p>{combustivel}</p>
                <p>{descricao}</p>
                <p>{carro}</p>
                <button className="btn primary-btn" {...id}>Ver mais</button>
            </div>

            </article>
            {/* <article className="categorias">
                <h2>Destaques</h2>
                <div className="cardCategorias">
                    {Detalhes.map((detalhe) => (<div key={detalhe.id} className="divCard" id={"id" + detalhe.id}>
                        <li>
                            <img src={detalhe.img} alt="imagem do carro" />
                            <p>Modelo: <span className="subtitle"> {detalhe.modelo}</span></p>
                            <p>Categoria: <span className="subtitle"></span>{detalhe.categoria}</p>
                            <p>Disponibilidade:<span className="subtitle"></span> {detalhe.disponibilidade}</p>
                            <p>Combustível: <span className="subtitle"></span>{detalhe.combustivel}</p>
                            <p>Detalhes: <span className="subtitle"></span>{detalhe.descricao}</p>
                            
                        </li>
                        <button className="btn primary-btn">Ver detalhes</button></div>))}
                </div>
            </article> */}
        </>
    )
}

