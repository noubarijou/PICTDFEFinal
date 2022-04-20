import '../assets/disponibilidade.scss';
import React, { useEffect, useState, useContext } from 'react'
import { Helmet } from 'react-helmet-async';

/* DATE-FNS */
import { format } from 'date-fns'
/* Font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort, faFilter } from '@fortawesome/free-solid-svg-icons';

import { useAxios } from '../../hooks/useAxios';
import { FiltroContext } from "../../context/FiltroContext";
import { CardDisponibilidade } from '../../components/Cards/CardDisponibilidade';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { CardFiltros } from '../../components/Filtros/CardFiltros';
import { CardOrdenar } from '../../components/Filtros/CardOrdenar';
import { ModalFiltros } from '../../components/Modal/ModalFiltros';

export const DisponibilidadePesquisa = () => {

    const { filtro, portasFiltro, assentosFiltro, arFiltro, combustivelFiltro, cambioFiltro, motorFiltro, ordenar } = useContext(FiltroContext)

    const { width } = useWindowDimensions();
    const [dados, setDados] = useState([]);
    const detalhes = useAxios(`/carro`);

    useEffect(() => {

        if (window.location.pathname.includes('disponibilidade')) {
            portasFiltro('')
            assentosFiltro('')
            arFiltro('')
            combustivelFiltro('')
            cambioFiltro('')
            motorFiltro('')
            ordenar('')
        }

        setDados({
            dadosCidade: JSON.parse(localStorage.getItem("dadosCidade")),
            dadosRange: JSON.parse(localStorage.getItem("dadosRange")),
            dadosStartDate: JSON.parse(localStorage.getItem("dadosStartDate")),
            dadosEndDate: JSON.parse(localStorage.getItem("dadosEndDate"))
        })

    }, [])
    
    console.log(dados)

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
                                {`${dados.dadosCidade}`} {(dados.dadosStartDate && dados.dadosEndDate) ? (` (${format(new Date(dados.dadosStartDate), "dd/MM/yyyy")} -> ${format(new Date(dados.dadosEndDate), "dd/MM/yyyy")})`) : (null)}
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
                                {detalhes
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
                                    .sort((a, b) => {
                                        let valor;
                                        if (filtro[0].ordenar === 'maiorpreco') {
                                            valor = b.valor - a.valor
                                        }
                                        else if (filtro[0].ordenar === 'menorpreco') {
                                            valor = a.valor - b.valor
                                        }
                                        else if (filtro[0].ordenar === 'maiornota') {
                                            valor = b.rating - a.rating
                                        }
                                        else if (filtro[0].ordenar === 'menornota') {
                                            valor = a.rating - b.rating
                                        }

                                        return valor;
                                    })
                                    .map((e) => {
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
                                    {detalhes
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
                                        .sort((a, b) => {
                                            let valor;
                                            if (filtro[0].ordenar === 'maiorpreco') {
                                                valor = b.valor - a.valor
                                            }
                                            else if (filtro[0].ordenar === 'menorpreco') {
                                                valor = a.valor - b.valor
                                            }
                                            else if (filtro[0].ordenar === 'maiornota') {
                                                valor = b.rating - a.rating
                                            }
                                            else if (filtro[0].ordenar === 'menornota') {
                                                valor = a.rating - b.rating
                                            }

                                            return valor;
                                        })
                                        .map((e) => {
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
