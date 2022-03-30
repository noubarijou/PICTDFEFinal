import { Helmet } from 'react-helmet-async'
import { useAxios } from '../../hooks/useAxios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './style.scss';
import { Rating } from '../../components/CardCarro/components/Rating';
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { CardCaracteristica } from "../../components/CardCaracteristica";
import { Reservar } from '../../components/BotaoReserva';


export const DisponibilidadeCategoria = () => {
  const detalhes = useAxios(`/carro`);
  const categorias = useAxios(`/categorias`);
  const { width } = useWindowDimensions();
  const { detalhesId } = useParams();
  const [detalhe, setDetalhe] = useState();


  useEffect(() => {
    setDetalhe(detalhesId);

    window.scrollTo(0, 0)
  }, [detalhesId]);

  return (
    <>
      <Helmet>
        <title>AluCar | Disponibilidade</title>
      </Helmet>
      <main>
        <div className="categorias__filtros">

          {categorias.filter((item) => item.categoriasId === parseInt(detalhesId)).map((e) => {
            return (
              <p className="filtro__cidade__periodo btn-large" key={e.categoriasId}>
                {e.categoriasNome}
              </p>
            )
          })}

          <div className="filtro__ordernar">Ordenar</div>
          <div className="filtro__filtrar">Filtrar</div>
        </div>
        <article className="detalhe__carro">
          {detalhes.filter((item, index) => item.categorias.categoriasId === parseInt(detalhesId)).map((e) => {
            return (
              <div key={e.carroId} id={e.carroId}>
                <div className="carro__nome"><h1>{e.modelo}</h1></div>
                <div className="carro__categoria">
                  <p className="btn-large">{e.categorias.categoriasNome} ou similar</p>
                  <Rating rating={e.rating} />
                </div>
                <div className="carro__info">
                  <figure className="carro__img">
                    <img src={e.imagens.urlImagem} alt={e.modelo} />
                  </figure>
                </div>
                <div className="carro__caracteristica">
                  <div className="caracteriscas__card">
                    <CardCaracteristica icon="cambio" carcteristica="Tipo de cambio" carcteristicaDescricao={e.caracteristicas.cambio} />
                    {e.caracteristicas.arCondicionado ? <CardCaracteristica icon="ar condicionado" carcteristica="Ar condicionado" carcteristicaDescricao={e.caracteristicas.ar_condicionado} /> : null}
                    <CardCaracteristica icon="assento" carcteristica="Quantidade de assento" carcteristicaDescricao={`${e.caracteristicas.qtdeAssento} ${(e.caracteristicas.qtdeAssento <= 1) ? "assento" : "assentos"}`} />
                    <CardCaracteristica icon="motor" carcteristica="Motor" carcteristicaDescricao={e.caracteristicas.motor} />
                    <CardCaracteristica icon="porta" carcteristica="Quantidade de portas" carcteristicaDescricao={`${e.caracteristicas.qtdePorta} ${(e.caracteristicas.qtdePorta <= 1) ? "porta" : "portas"}`} />
                  </div>
                </div>
                <div className="carro__preco_reserva">
                  <p className="subtitle">A partir de</p>
                  <p className="info__preco">R$ {e.valor} / dia</p>
                  <Reservar />
                </div>
              </div>
            );
          })}
        </article>
      </main>
    </>
  )
}
