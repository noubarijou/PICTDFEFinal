import { Link } from "react-router-dom";
import { useAxios } from "../../../hooks/useAxios";
import "./style.scss";

export const CardRegioes = ({ imagem, regiaoBR }) => {
    const regioes = useAxios(`/cidades`);
    
    const regioesBR = regioes.filter((regiaoPais, index) => (regiaoPais.regiao === regiaoBR))

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
                                    <Link to={`/disponibilidade`} onClick={()=>{localStorage.setItem("dadosCidade", JSON.stringify(regiao.cidadesNome + ", " + regiao.estado))}} key={regiao.cidadesId}>
                                        <li className="btn-small">{`${regiao.cidadesNome}, ${regiao.estado}`}</li>
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
