import React, { useEffect, useState } from 'react'
import '../assets/disponibilidade.scss';

/* DATE-FNS */
import { format } from 'date-fns'
import { useAxios } from '../../hooks/useAxios';
import { Helmet } from 'react-helmet-async';
import { CardDisponibilidade } from '../../components/Cards/CardDisponibilidade';
import { ButtonHandleClose } from '../../components/Buttons';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
/* Font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort, faFilter } from '@fortawesome/free-solid-svg-icons';
import { CardFiltros } from '../../components/Cards/CardFiltros';
import { CardOrdenar } from '../../components/Cards/CardOrdenar';

export const DisponibilidadePesquisa = () => {

    const { width } = useWindowDimensions();
    const [dados, setDados] = useState([]);
    const detalhes = useAxios(`/carro`);

    useEffect(() => {
        setDados({
            dadosCidade: JSON.parse(localStorage.getItem("dadosCidade")),
            dadosRange: JSON.parse(localStorage.getItem("dadosRange")),
            dadosStartDate: format(new Date(JSON.parse(localStorage.getItem("dadosStartDate"))), "dd/MM/yyyy"),
            dadosEndDate: format(new Date(JSON.parse(localStorage.getItem("dadosEndDate"))), "dd/MM/yyyy")
        })
    }, [])

    return (
        <>
            <Helmet>
                <title>AluCar | Disponibilidade</title>
            </Helmet>
            <main className='disponibilidade'>
                {
                    width < 992 ?
                        <>
                            <p className="filtro__cidade__periodo btn-small">
                                {`${dados.dadosCidade} (${dados.dadosStartDate} -> ${dados.dadosEndDate})`}
                            </p>
                            <div className="disponibilidade__filtros">
                                <ButtonHandleClose classes="secondary-btn filtro__btn filtro--ordenar">
                                    {<>
                                        <FontAwesomeIcon icon={faArrowDownWideShort} />
                                        {"  "}Ordenar
                                    </>}
                                </ButtonHandleClose>
                                <ButtonHandleClose classes="secondary-btn filtro__btn filtro--filtrar">
                                    {
                                        <>
                                            <FontAwesomeIcon icon={faFilter} />
                                            {"  "}Filtrar
                                        </>
                                    }
                                </ButtonHandleClose>
                            </div>
                            <article className="disponibilidade__carro">
                                {detalhes.map((e) => {
                                    return (
                                        <div key={e.carroId} id={e.carroId}>
                                            <div key={e.carroId} id={e.carroId} className="disponibilidade__card">
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
                                        </div>
                                    );
                                })}
                            </article>
                        </>
                        :
                        <>
                            <p className="filtro__cidade__periodo btn-small">
                                {`${dados.dadosCidade} (${dados.dadosStartDate} -> ${dados.dadosEndDate})`}
                            </p>
                            <div className="disponibilidade__filtros">
                                <CardFiltros />
                                <CardOrdenar />
                            </div>
                            <div className="disponibilidade__todosCarros">
                                <article className="disponibilidade__carro">
                                    {detalhes.map((e) => {
                                        return (
                                            <div key={e.carroId} id={e.carroId}>
                                                <div key={e.carroId} id={e.carroId} className="disponibilidade__card">
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
