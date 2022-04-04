import React from 'react'
import {Helmet} from 'react-helmet-async'
import { Link } from 'react-router-dom'

export const ReservaFeita = () => {
  return (
    <>
    <Helmet>
        <title>Alucar | Reserva feita</title>
    </Helmet>
    <main>
        <div><img src="../../public/carro-logo.png" alt="logo" /></div>
        <div>
            <p>Reserva efetuada com sucesso!</p>
            <div>Card da reserva feita</div>
        </div><Link to="/">
        <button>Voltar</button>
        </Link>
    </main>
    </>
  )
}
