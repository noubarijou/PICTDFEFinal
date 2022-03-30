import React, { useEffect, useState } from 'react'

/* DATE-FNS */
import { format } from 'date-fns'
import { useAxios } from '../../hooks/useAxios';
import { Helmet } from 'react-helmet-async';
import { Rating } from '../../components/CardCarro/components/Rating';
import { CardCaracteristica } from '../../components/CardCaracteristica';
import { CardDisponibilidade } from '../../components/CardDisponibilidade';

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
                <article className="disponibilidade__carro">
                    {detalhes.map((e) => {
                        return (
                            <div key={e.carroId} id={e.carroId}>
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
                            </div>
                        );
                    })}
                </article>
            </main>
        </>
    )

}
