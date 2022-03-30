import React, { useEffect, useState } from 'react'

/* DATE-FNS */
import { format } from 'date-fns'
import { useAxios } from '../../hooks/useAxios';
import { Helmet } from 'react-helmet-async';
import { Rating } from '../../components/CardCarro/components/Rating';
import { CardCaracteristica } from '../../components/CardCaracteristica';
import { Reservar } from '../../components/BotaoReserva';

export const DisponibilidadePesquisa = () => {
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
            <main>
                <div className="categorias__filtros">

                    <p className="filtro__cidade__periodo btn-small">
                        {`${dados.dadosCidade} (${dados.dadosStartDate} -> ${dados.dadosEndDate})`}
                    </p>

                    <div className="filtro__ordernar">Ordenar</div>
                    <div className="filtro__filtrar">Filtrar</div>
                </div>
                <article className="detalhe__carro">
                    {detalhes.map((e) => {
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
