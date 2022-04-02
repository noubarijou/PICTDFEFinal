import './style.scss';
import { Helmet } from 'react-helmet-async';
import { ModalPesquisa } from '../../components/ModalPesquisa';
import { CardCategoria } from '../../components/Cards/CardCategoria';
import { Carousel } from '../../components/Carousel';
import { useAxios } from '../../hooks/useAxios';
import { CardCarro } from '../../components/Cards/CardCarro';
import { CardMontadora } from '../../components/Cards/CardMontadora';
import { CardRegioes } from '../../components/Cards/CardRegioes';
/* import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; */



export const Home = () => {

    const categorias = useAxios(`/categorias`);

    const modelos = useAxios(`/carro`);
    /* const montadoras = useAxios(`/imagens`); */
    /* const modelo = require("../../assets/detalhes.json");*/
    const montadoras = require("../../assets/montadora.json");
    /* const regioes = require("../../assets/cidades.json"); */

    if (!categorias || !categorias.length) return null;
    if (!modelos || !modelos.length) return null;
    /* if (!montadoras || !montadoras.length) return null; */

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
                        {categorias.map((itens) => {
                            return (
                                <div key={itens.categoriasId}>
                                    <CardCategoria id={itens.categoriasId} imagem={itens.urlImgModelo} categoria={itens.categoriasNome} preco={itens.preco} />
                                </div>
                            )
                        })}
                    </Carousel>
                </article>
                <article className='container__modelos' id='container__modelos'>
                    <h2>Principais Modelos</h2>
                    <Carousel>
                        {modelos.map((item) => {
                            return (
                                <div key={item.carroId}>
                                    <CardCarro id={item.carroId} imagem={item.imagens.urlImagem} modelo={item.modelo} categoria={item.categorias.categoriasNome} descricao={item.caracteristicas.cambio} rating={item.rating} />
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
                        <CardRegioes imagem="https://wallpapercave.com/wp/wp1860191.jpg" regiaoBR="Nordeste" />
                        <CardRegioes imagem="https://s.glbimg.com/jo/g1/f/original/2015/04/07/g0021220-edit.jpg" regiaoBR="Centro-Oeste" />
                        <CardRegioes imagem="https://live.staticflickr.com/3060/2617086192_c99612d51d_b.jpg" regiaoBR="Sudeste" />
                        <CardRegioes imagem="https://arvconstrutora.com.br/wp-content/uploads/2020/01/Florianopolis-Bigstock-copy.jpg" regiaoBR="Sul" />
                    </Carousel>

                </article>
                <article className='container__montadora' id='container__montadora'>
                    <div className='montadora__info'>
                        <h2>Garantimos veículos de alta qualidade e segurança porque temos as <span>principais marcas</span> do mercado como nosso parceiros.</h2>
                        <p>Nossos veículos inspecionados pelas próprias montadoras para garantir performance, qualidade e segurança, para você utilizar com tranquilidade e comodidade em quaisquer situações.</p>
                    </div>
                    <div className='montadora__card'>
                        <CardMontadora slides={montadoras} />
                    </div>
                </article>
            </main>

        </>
    )
}