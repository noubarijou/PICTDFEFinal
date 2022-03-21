import "./style.scss";

export const CardRegioes = (id, regiao, estados, imagem) => {

    return (
        <>
            <article className="card__regiao" key={id}>
               
                <figure className="regioes__img">
                    <img src={imagem} alt={regiao} />
                </figure>
                <h2>{regiao}</h2>
                
            </article>
        </>
    )
}
