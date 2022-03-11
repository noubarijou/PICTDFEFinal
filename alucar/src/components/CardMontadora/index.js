

export const CardMontadora = ({id, imagem, nome}) => {
  return (
    <>
    <article className="card__Montadora">
    <div className="card__Img">
    <img src={imagem} alt={nome} />
    </div>
    </article>
    </>
  )
}
