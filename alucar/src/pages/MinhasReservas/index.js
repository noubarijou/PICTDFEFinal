import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Link} from 'react-router-dom'
export const MinhasReservas = () => {
  return (
    <>
    <Helmet>
      <title>Minhas Reservas</title>
    </Helmet>
    <main>
    <h2>Minhas Reservas</h2>
    <p>Você ainda não fez nenhuma reserva</p>
    <Link to={`/`}>
    <p>Voltar</p>
    </Link>
    </main>
    </>
  )
}
