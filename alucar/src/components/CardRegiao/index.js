import {Link} from 'react-router-dom'

export const CardRegiao = ({id, nome, estados, imagem}) => {
  return (
    <>
    <article className="card__Regiao">
        <div className="card__Img">
            <img src={imagem} alt={nome} />
            </div>
            <h3>{nome}</h3>
            <Link>
            <li>{estados}</li>
            </Link>
        </article>
    </>
  )
}
