import { Link } from "react-router-dom";
import { useAxios } from "../../../hooks/useAxios";
import "./style.scss";

export const CardRegioes = ({ imagem, regiaoBR }) => {
    const regioesJson = useAxios(`/cidades`);

    const regioesBR = regioesJson.filter((regiaoPais, index) => (regiaoPais.regiao === regiaoBR))

    return (
        <>
            <article className="card__regiao">

                <figure className="regioes__img">
                    <img src={imagem} alt={regiaoBR} />
                </figure>
                <div className="regioes__info">
                    <h2>{regiaoBR}</h2>
                    <div className="regioes__estados">
                        {
                            regioesBR.map((regiao) => {
                                return (
                                    <Link to={`/disponibilidade`} key={regiao.id}>
                                        <li className="btn-small">{regiao.cidade}</li>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </article>
        </>
    )
}
