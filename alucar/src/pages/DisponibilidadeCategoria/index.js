import { FiltroContext } from "../../context/FiltroContext";
import { Helmet } from "react-helmet-async";
import { useAxios } from "../../hooks/useAxios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../assets/disponibilidade.scss";
import { CardDisponibilidade } from "../../components/Cards/CardDisponibilidade";
import { CardFiltros } from "../../components/Cards/CardFiltros/";
import { CardOrdenar } from "../../components/Cards/CardOrdenar";
import { ModalFiltros } from "../../components/Modal/ModalFiltros";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
/* Font awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownWideShort,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

export const DisponibilidadeCategoria = () => {

  const { filtro, portasFiltro, assentosFiltro, arFiltro, combustivelFiltro, cambioFiltro, motorFiltro } = useContext(FiltroContext)

  const detalhes = useAxios(`/carro`);
  const categorias = useAxios(`/categorias`);
  const { detalhesId } = useParams();
  const [detalhe, setDetalhe] = useState();
  const { width } = useWindowDimensions();

  useEffect(() => {
    setDetalhe(detalhesId);

    if (window.location.pathname.includes('disponibilidade')) {
      portasFiltro('')
      assentosFiltro('')
      arFiltro('')
      combustivelFiltro('')
      cambioFiltro('')
      motorFiltro('')
    }

    window.scrollTo(0, 0);
  }, [detalhesId]);

  return (
    <>
      <Helmet>
        <title>AluCar | Disponibilidade</title>
      </Helmet>
      <main className="disponibilidade">
        {width < 992 ? (
          <>
            {categorias
              .filter((item) => item.categoriasId === parseInt(detalhesId))
              .map((e) => {
                return (
                  <p
                    className="filtro__cidade__periodo btn-large"
                    key={e.categoriasId}
                  >
                    {e.categoriasNome}
                  </p>
                );
              })}
            <div className="disponibilidade__filtros">
              <ModalFiltros
                conteudoBotao={
                  <>
                    <FontAwesomeIcon icon={faArrowDownWideShort} />
                    {"  "}Ordenar
                  </>
                }
              >
                <CardOrdenar />
              </ModalFiltros>
              <ModalFiltros
                conteudoBotao={
                  <>
                    <FontAwesomeIcon icon={faFilter} />
                    {"  "}Filtrar
                  </>
                }
              >
                <CardFiltros />
              </ModalFiltros>
            </div>
            <article className="disponibilidade__carro">
              {/* {
                console.log('Filtro', filtro[0]?.motor)
              }
              {
                console.log('Carro', detalhes[0]?.caracteristicas.motor)
              }
              {
                console.log('Diff', filtro[0]?.motor === `${detalhes[0]?.caracteristicas.motor}`)
              } */}
              {
                detalhes
                  .filter(
                    (item) =>
                      item.categorias.categoriasId === parseInt(detalhesId)
                  )
                  .filter(
                    (item) =>
                      filtro[0].portas === '' || `${item.caracteristicas.qtdePorta}` === filtro[0].portas
                  )
                  .filter(
                    (item) =>
                      filtro[0].assentos === '' || `${item.caracteristicas.qtdeAssento}` === filtro[0].assentos
                  )
                  .filter(
                    (item) =>
                      filtro[0].ar === '' || `${item.caracteristicas.arCondicionado}` === filtro[0].ar
                  )
                  .filter(
                    (item) =>
                      filtro[0].combustivel === '' || `${item.caracteristicas.tipoCombustivel}` === filtro[0].combustivel
                  )
                  .filter(
                    (item) =>
                      filtro[0].cambio === '' || `${item.caracteristicas.cambio}` === filtro[0].cambio
                  )
                  .filter(
                    (item) =>
                      filtro[0].motor === '' || item.caracteristicas.motor === filtro[0].motor
                  )
                  .map((e) => {
                    return (
                      <div
                        key={e.carroId}
                        id={e.carroId}
                        className="disponibilidade__card"
                      >
                        <CardDisponibilidade
                          modelo={e.modelo}
                          categoriasNome={e.categorias.categoriasNome}
                          rating={e.rating}
                          urlTo={`/reserva/${detalhesId}`}
                          urlImagem={e.imagens.urlImagem}
                          cambio={e.caracteristicas.cambio}
                          arCondicionado={e.caracteristicas.arCondicionado}
                          qtdeAssento={e.caracteristicas.qtdeAssento}
                          motor={e.caracteristicas.motor}
                          qtdePorta={e.caracteristicas.qtdePorta}
                          valor={e.valor}
                        />
                      </div>
                    );
                  })

              }
            </article>
          </>
        ) : (
          <>
            <div className="disponibilidade__filtros">
              <CardOrdenar />
              <CardFiltros />
            </div>
            <div className="disponibilidade__todosCarros">
              {categorias
                .filter((item) => item.categoriasId === parseInt(detalhesId))
                .map((e) => {
                  return (
                    <p
                      className="filtro__cidade__periodo btn-large"
                      key={e.categoriasId}
                    >
                      {e.categoriasNome}
                    </p>
                  );
                })}
              <article className="disponibilidade__carro">
                {detalhes
                  .filter(
                    (item) =>
                      item.categorias.categoriasId === parseInt(detalhesId)
                  )
                  .filter(
                    (item) =>
                      filtro[0].portas === '' || `${item.caracteristicas.qtdePorta}` === filtro[0].portas
                  )
                  .filter(
                    (item) =>
                      filtro[0].assentos === '' || `${item.caracteristicas.qtdeAssento}` === filtro[0].assentos
                  )
                  .filter(
                    (item) =>
                      filtro[0].ar === '' || `${item.caracteristicas.arCondicionado}` === filtro[0].ar
                  )
                  .filter(
                    (item) =>
                      filtro[0].combustivel === '' || `${item.caracteristicas.tipoCombustivel}` === filtro[0].combustivel
                  )
                  .filter(
                    (item) =>
                      filtro[0].cambio === '' || `${item.caracteristicas.cambio}` === filtro[0].cambio
                  )
                  .filter(
                    (item) =>
                      filtro[0].motor === '' || item.caracteristicas.motor === filtro[0].motor
                  )
                  .map((e) => {
                    return (
                      <div
                        key={e.carroId}
                        id={e.carroId}
                        className="disponibilidade__card"
                      >
                        <CardDisponibilidade
                          modelo={e.modelo}
                          categoriasNome={e.categorias.categoriasNome}
                          rating={e.rating}
                          urlTo={`/reserva/${detalhesId}`}
                          urlImagem={e.imagens.urlImagem}
                          cambio={e.caracteristicas.cambio}
                          arCondicionado={e.caracteristicas.arCondicionado}
                          qtdeAssento={e.caracteristicas.qtdeAssento}
                          motor={e.caracteristicas.motor}
                          qtdePorta={e.caracteristicas.qtdePorta}
                          valor={e.valor}
                        />
                      </div>
                    );
                  })}
              </article>
            </div>
          </>
        )}
      </main>
    </>
  );
};
