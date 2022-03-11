import { Perfil } from '../../components/Perfil'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import './style.scss'



export const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>AluCar | Sobre</title>
      </Helmet>

      <main>
        <div className='main'>
        <h1> Nossa História</h1>
        <p>
        Somos a plataforma de aluguel de carros online que conecta quem precisa  alugar um carro com as melhores opções e preços do país. 
        Fundada em 2022 por um grupo de amigos apaixonados por tecnologia que sonhavam em revolucionar o mercado de carros por aluguel, esse sonho hoje está transformando a maneira como se aluga carros online. 
        A Alucar veio para desburocratizar o serviço de locação de automóveis, simplificando todo o processo para atender a necessidade do cliente, pois acreditamos que quem precisa alugar um carro tem pressa. 
        Nossa plataforma 100% segura traz a segurança e conforto necessários para utilização dos nossos serviços, assim como nossas condições imperdíveis que se adequam ao seu bolso. 
        </p>  
        </div>
        <Perfil/>
      </main>


    </>
  )
}


