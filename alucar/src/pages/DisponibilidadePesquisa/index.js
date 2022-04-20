import '../assets/disponibilidade.scss';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';

/* DATE-FNS */
import { format } from 'date-fns'
/* Font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort, faFilter } from '@fortawesome/free-solid-svg-icons';

import { useAxios } from '../../hooks/useAxios';
import { CardDisponibilidade } from '../../components/Cards/CardDisponibilidade';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { CardFiltros } from '../../components/Filtros/CardFiltros';
import { CardOrdenar } from '../../components/Filtros/CardOrdenar';
import { ModalFiltros } from '../../components/Modal/ModalFiltros';

export const DisponibilidadePesquisa = () => {

    const { width } = useWindowDimensions();
    const [dados, setDados] = useState([]);
    const detalhes = useAxios(`/carro`);

    useEffect(() => {
        if (localStorage.getItem("dadosCidade")) {
            setDados({ dadosCidade: JSON.parse(localStorage.getItem("dadosCidade")) })
        }
        if (localStorage.getItem("dadosRange")) {
            dados.push({ dadosRange: JSON.parse(localStorage.getItem("dadosRange")) })
        }
        if (localStorage.getItem("dadosStartDate")) {
            dados.push({ dadosStartDate: format(new Date(JSON.parse(localStorage.getItem("dadosStartDate"))), "dd/MM/yyyy") })
        }
        if (localStorage.getItem("dadosEndDate")) {
            dados.push({ dadosEndDate: format(new Date(JSON.parse(localStorage.getItem("dadosEndDate"))), "dd/MM/yyyy") })
        }
    }, [dados])

    return (
        <>
            <Helmet>
                <title>AluCar | Disponibilidade</title>
            </Helmet>
            <article className='disponibilidade'>
                {
                    width < 992 ?
                        <>
                            <p className="filtro__cidade__periodo btn-small">
                                {`${dados.dadosCidade}`} {(dados.dadosStartDate || dados.dadosEndDate) ? (` (${dados.dadosStartDate} -> ${dados.dadosEndDate})`) : (null)}
                            </p>
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
            </article>
        </>
    )

}
