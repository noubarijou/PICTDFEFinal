import "./style.scss";

export const CardMontadora = ({ id, imagem, nome }) => {
  return (
    <>
      <article className="card__montadora" key={id}>
        <div className="card__img">
          <img src={imagem} alt={nome} />
        </div>
      </article>
    </>
  )
}
