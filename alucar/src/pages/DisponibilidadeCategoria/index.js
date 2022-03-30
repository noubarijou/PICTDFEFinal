import { Helmet } from 'react-helmet-async'
import { useAxios } from '../../hooks/useAxios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './style.scss';
import { CardDisponibilidade } from '../../components/CardDisponibilidade';


export const DisponibilidadeCategoria = () => {
  const detalhes = useAxios(`/carro`);
  const categorias = useAxios(`/categorias`);
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
        <article className="disponibilidade__carro">
          {detalhes.filter((item) => item.categorias.categoriasId === parseInt(detalhesId)).map((e) => {
            return (
              <div key={e.carroId} id={e.carroId}>
                <CardDisponibilidade 
                modelo={e.modelo}
                categoriasNome={e.categorias.categoriasNome}
                rating={e.rating}
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
      </main>
    </>
  )
}
