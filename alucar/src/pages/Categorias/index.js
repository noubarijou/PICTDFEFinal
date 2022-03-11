import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CardCarro } from '../../components/CardCarro'
/* import Detalhes from "../../detalhes.json" */
import './style.scss';

export const Categorias = () => {
  return (
    <>
      <Helmet>
        <title>Alucar | Categorias</title>
      </Helmet>
        <h2>Categorias</h2>
        <p>Confira as opções de categorias</p>
        <div className="containerCategorias">
          <div><img className="categoria1" src="https://static.rentcars.com/imagens/carros/chevrolet_onix-2020-2021.png" alt={"categoria compactos"} />
            <p>Compactos</p></div>
          <div><img className="categoria2" src="https://static.rentcars.com/imagens/carros/volkswagen_gol-2020-2021.png" alt={"categoria econômicos"} />
            <p>Econômicos</p></div>
          <div><img className="categoria3" src="https://static.rentcars.com/imagens/carros/jeep-compass.jpg" alt={"categoria suvs"} />
            <p>SUVs</p></div>
          <div><img className="categoria4" src="https://static.rentcars.com/imagens/carros/fiat-fiorino.png" alt={"categoria cargos"} />
            <p>Cargos</p></div>

        </div>
        <div>
          <CardCarro />
        </div>
    </>
  )

}
