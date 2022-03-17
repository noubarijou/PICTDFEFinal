import "./style.scss";

export const CardMontadora = ({ id, imagem, nome }) => {
  return (
    <>
      <article className="card__montadora">
          <img src={imagem} alt={nome} />
      </article>
    </>
  )
}
