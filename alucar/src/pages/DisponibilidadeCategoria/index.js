import { Helmet } from 'react-helmet-async'
import { useAxios } from '../../hooks/useAxios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import '../assets/disponibilidade.scss';
import { CardDisponibilidade } from '../../components/Cards/CardDisponibilidade';
import {CardFiltros} from '../../components/Cards/CardFiltros/';
import { CardOrdenar } from '../../components/Cards/CardOrdenar';
import { ButtonHandleClose } from '../../components/Buttons';
import {ModalFiltros} from '../../components/Modal/ModalFiltros';
import {ModalOrdenar} from '../../components/Modal/ModalOrdenar';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
/* Font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort, faFilter } from '@fortawesome/free-solid-svg-icons';

export const DisponibilidadeCategoria = () => {
  const detalhes = useAxios(`/carro`);
  const categorias = useAxios(`/categorias`);
  const { detalhesId } = useParams();
  const [detalhe, setDetalhe] = useState();
  const { width } = useWindowDimensions();


  useEffect(() => {
    setDetalhe(detalhesId);

    window.scrollTo(0, 0)
  }, [detalhesId]);

  return (
    <>
      <Helmet>
        <title>AluCar | Disponibilidade</title>
      </Helmet>
      <main className='disponibilidade'>
        {
          width < 992 ?
            <>
              {categorias.filter((item) => item.categoriasId === parseInt(detalhesId)).map((e) => {
                return (
                  <p className="filtro__cidade__periodo btn-large" key={e.categoriasId}>
                    {e.categoriasNome}
                  </p>
                )
              })}
              <div className="disponibilidade__filtros">
                <ModalOrdenar />
                <ModalFiltros />
              </div>
              <article className="disponibilidade__carro">
                {detalhes.filter((item) => item.categorias.categoriasId === parseInt(detalhesId)).map((e) => {
                  return (
                    <div key={e.carroId} id={e.carroId} className="disponibilidade__card">
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
            </>
            :
            <>
              <div className="disponibilidade__filtros">
              <CardFiltros />
              <CardOrdenar />
              </div>
              <div className="disponibilidade__todosCarros">
                {categorias.filter((item) => item.categoriasId === parseInt(detalhesId)).map((e) => {
                  return (
                    <p className="filtro__cidade__periodo btn-large" key={e.categoriasId}>
                      {e.categoriasNome}
                    </p>
                  )
                })}
                <article className="disponibilidade__carro">
                  {detalhes.filter((item) => item.categorias.categoriasId === parseInt(detalhesId)).map((e) => {
                    return (
                      <div key={e.carroId} id={e.carroId} className="disponibilidade__card">
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
        }
      </main>
    </>
  )
}
