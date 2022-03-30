import { Helmet } from 'react-helmet-async'
import { useAxios } from '../../hooks/useAxios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './style.scss';
import { Rating } from '../../components/CardCarro/components/Rating';
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { CardCaracteristica } from "../../components/CardCaracteristica";
import { Reservar } from '../../components/BotaoReserva';

/* DATE-FNS */
import { format } from 'date-fns'

export const Disponibilidade = () => {
  const detalhes = useAxios(`/carro`);
  const categorias = useAxios(`/categorias`);
  const { width } = useWindowDimensions();
  const { detalhesId } = useParams();
  const [detalhe, setDetalhe] = useState();
  const [dados, setDados] = useState([]);


  useEffect(() => {
    setDetalhe(detalhesId);

    setDados({
      dadosCidade: JSON.parse(localStorage.getItem("dadosCidade")),
      dadosRange: JSON.parse(localStorage.getItem("dadosRange")),
      dadosStartDate: format(new Date(JSON.parse(localStorage.getItem("dadosStartDate"))), "dd/MM/yyyy"),
      dadosEndDate: format(new Date(JSON.parse(localStorage.getItem("dadosEndDate"))), "dd/MM/yyyy")
    })

    window.scrollTo(0, 0)
  }, [detalhesId]);

  /* const getDados = () => {
    setDados(localStorage.getItem("dadosCidade"), 
    localStorage.getItem("dadosRange"), 
    localStorage.getItem("dadosStartDate"), 
    localStorage.getItem("dadosEndDate"))
  } */

  console.log(dados)

  return (
    <>
      <Helmet>
        <title>AluCar | Disponibilidade</title>
      </Helmet>
      <main>
        <h2>Modelos disponíveis na categoria </h2>
        <div className="categorias__filtros">

          <p className="filtro__cidade__periodo btn-small">
            {`${dados.dadosCidade} (${dados.dadosStartDate} -> ${dados.dadosEndDate})`}
          </p>

          <div className="filtro__ordernar">Ordenar</div>
          <div className="filtro__filtrar">Filtrar</div>
        </div>
        <article className="detalhe__carro">
          {detalhes[detalhesId] ? (
            <>
              {detalhes.filter((item, index) => item.categorias.categorias_id === parseInt(detalhesId)).map((e) => {
                return (
                  <div key={e.carro_id} id={e.carro_id}>
                    <div className="carro__nome"><h1>{e.modelo}</h1></div>
                    <div className="carro__categoria">
                      <p className="btn-large">{e.categorias.categorias_nome} ou similar</p>
                      <Rating rating={e.rating} />
                    </div>
                    <div className="carro__info">
                      <figure className="carro__img">
                        <img src={e.imagens.url_imagem} alt={e.imagens.titulo} />
                      </figure>
                    </div>
                    <div className="carro__caracteristica">
                      <div className="caracteriscas__card">
                        <CardCaracteristica icon="cambio" carcteristica="Tipo de cambio" carcteristicaDescricao={e.caracteristicas.cambio} />
                        <CardCaracteristica icon="ar condicionado" carcteristica="Ar condicionado" carcteristicaDescricao={(e.caracteristicas.ar_condicionado) ? "Ar condicionado" : null} />
                        <CardCaracteristica icon="assento" carcteristica="Quantidade de assento" carcteristicaDescricao={`${e.caracteristicas.qtde_assento} ${(e.caracteristicas.qtde_assento <= 1) ? "assento" : "assentos"}`} />
                        <CardCaracteristica icon="motor" carcteristica="Motor" carcteristicaDescricao={e.caracteristicas.motor} />
                        <CardCaracteristica icon="porta" carcteristica="Quantidade de portas" carcteristicaDescricao={`${e.caracteristicas.qtde_porta} ${(e.caracteristicas.qtde_porta <= 1) ? "porta" : "portas"}`} />
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
            </>
          ) : (null)}
        </article>
      </main>
    </>
  )
}
