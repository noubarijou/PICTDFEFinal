import React from 'react'
import {Helmet} from 'react-helmet'
import {CardCarro} from '../../components/CardCarro'

export const Categorias = () => {
  return (
    <>
    <Helmet>
        <title>Alucar | Categorias</title>
    </Helmet>
    <main>
    <h2>Categorias</h2>
    <p>Confira as opções de categorias</p>
    <img className="categoria1" src="https://static.rentcars.com/imagens/carros/chevrolet_onix-2020-2021.png" alt={"categoria compactos"} />
    <p>Compactos</p>
    <img className="categoria2" src="https://static.rentcars.com/imagens/carros/volkswagen_gol-2020-2021.png" alt={"categoria econômicos"} />
    <p>Econômicos</p>
    <img className="categoria3" src="https://static.rentcars.com/imagens/carros/jeep-compass.jpg" alt={"categoria suv"} />
    <p>SUVs</p>
    <img className="categoria4" src="https://static.rentcars.com/imagens/carros/fiat-strada-cabine-dupla-2022.png" alt={"categoria utilitários"} />
    <p>Utilitários</p>
    </main>
    </>
  )
}

