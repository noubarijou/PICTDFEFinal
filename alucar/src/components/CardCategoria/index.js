

export const CardCategoria = ({id, imagem, nome}) => {
  return (
    <>
    <article className="card__Categoria">
    <div className="card__Img" >
        <img src={imagem} alt={nome} />
        </div>
        <div className="card__Info">
        <h3>{nome}</h3>
        <button className="btn success-btn" {...id}>Reservar</button>
        </div>

    </article>
    </>
  )
}
