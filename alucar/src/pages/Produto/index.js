import './style.scss';

import React from 'react'
import { Helmet } from 'react-helmet-async';

export const Detalhe = () => {
    return (
        <>
            <Helmet>
                <title>Alucar | Detalhes</title>
            </Helmet>
            <main>
                <h1>Detalhes do carro</h1>
            </main>
        </>
    )
}
