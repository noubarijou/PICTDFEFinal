import './style.scss';
import { Helmet } from 'react-helmet-async';
import { ModalPesquisa } from '../../components/ModalPesquisa';
import { CardCategoria } from '../../components/CardCategoria';
import { Carousel } from '../../components/Carousel';
import useAxios from '../../hooks/useAxios';
import { CardCarro } from '../../components/CardCarro';
import { CardMontadora } from '../../components/CardMontadora';
import { CardRegioes } from '../../components/CardRegioes';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const Home = () => {
    const teste = useAxios(`/categoria`);
    console.log(teste);
    /* const categoria = useAxios("");
    const modelo = useAxios("");
    const montadora = useAxios(""); */
    const modelo = require("../../assets/detalhes.json");
    const montadora = require("../../assets/montadora.json");
    /* const regioes = require("../../assets/cidades.json"); */

    /* if (!categoria || !categoria.length) return null; */
    /* if (!modelo || !modelo.length) return null; */
    /* if (!montadora || !montadora.length) return null; */

    return (
        <>
            <Helmet>
                <title>AluCar | Home</title>
            </Helmet>
            <main>
                <ModalPesquisa />
                <article className='container__categoria' id='container__categoria'>
                    <h2>Principais Categorias</h2>
                    <Carousel>
                        <CardCategoria id={1} imagem="https://static.rentcars.com/imagens/carros/chevrolet_onix-2020-2021.png" categoria="Compactos" preco="40,00" />
                        <CardCategoria id={2} imagem="https://static.rentcars.com/imagens/carros/volkswagen_gol-2020-2021.png" categoria="Econômicos" preco="40,00" />
                        <CardCategoria id={3} imagem="https://static.rentcars.com/imagens/carros/jeep-compass.jpg" categoria="SUVs" preco="40,00" />
                        <CardCategoria id={4} imagem="https://static.rentcars.com/imagens/carros/fiat-fiorino.png" categoria="Cargos" preco="40,00" />
                    </Carousel>
                    {/* <Carousel>
                        {categoria.map((item) => {
                            return (
                                <div key={item.id}>
                                <CardCategoria id={item.id} imagem={item.imagem} categoria={item.categoria} preco={item.preco} />
                                </div>
                                )
                        })}
                    </Carousel> */}
                </article>
                <article className='container__modelos' id='container__modelos'>
                    <h2>Principais Modelos</h2>
                    <Carousel>
                        {modelo.map((item) => {
                            return (
                                <div key={item.id}>
                                    <CardCarro id={item.id} imagem={item.img} modelo={item.modelo} categoria={item.categoria} descricao={item.combustivel} rating={item.rating} />
                                </div>
                            )
                        })}
                    </Carousel>
                </article>
                <article className='container__destinos' id='container__destinos'>
                    <div className='destinos__info'>
                        <div className="container__linha"></div>
                        <h2>Aluguel de Carros nos <span>Destinos mais Populares do Brasil</span></h2>
                        <div className="container__linha"></div>
                    </div>
                    <Carousel className='destinos__cards'>
                        <CardRegioes imagem="https://hweb-upload.s3-sa-east-1.amazonaws.com/5873d325c19a4207cc40b87c/07e1f8e2fdd64088bccc5ac8f8e9a306.jpg" regiaoBR="Norte" />
                        <CardRegioes imagem="https://www.hotelsauipe.com.br/img/gallery/570541ea6edd9.jpg" regiaoBR="Nordeste" />
                        <CardRegioes imagem="https://www.hotelsauipe.com.br/img/gallery/570541ea6edd9.jpg" regiaoBR="Centro-Oeste" />
                        <CardRegioes imagem="https://www.hotelsauipe.com.br/img/gallery/570541ea6edd9.jpg" regiaoBR="Sudeste" />
                        <CardRegioes imagem="https://www.hotelsauipe.com.br/img/gallery/570541ea6edd9.jpg" regiaoBR="Sul" />
                    </Carousel>

                </article>
                <article className='container__montadora' id='container__montadora'>
                    <div className='montadora__info'>
                        <h2>Garantimos veículos de alta qualidade e segurança porque temos as <span>principais marcas</span> do mercado como nosso parceiros.</h2>
                        <p>Nossos veículos inspecionados pelas próprias montadoras para garantir performance, qualidade e segurança, para você utilizar com tranquilidade e comodidade em quaisquer situações.</p>
                    </div>
                    <div className='montadora__card'>
                        <CardMontadora slides={montadora} />
                    </div>
                </article>
            </main>

        </>
    )
}