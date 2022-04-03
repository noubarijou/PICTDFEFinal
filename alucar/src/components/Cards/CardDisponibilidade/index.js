import "./style.scss";

import React from 'react'

import { Rating } from '../../Rating';
import { CardCaracteristica } from "../CardCaracteristica";
import { ButtonToClick } from "../../Buttons";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

export const CardDisponibilidade = ({ rating, categoriasNome, urlImagem, modelo, cambio, arCondicionado, qtdeAssento, qtdePorta, motor, valor, urlTo }) => {
    const { width } = useWindowDimensions();
    
    return (
        <>
            <div className="carro__nome"><h1>{modelo}</h1></div>
            <div className="carro__categoria">
                <p className="btn-large">{categoriasNome} ou similar</p>
                <Rating rating={rating} />
            </div>
            <div className="carro__carro">
                {
                    width < 768 ?
                        <>
                            <div className="carro__info">
                                <figure className="carro__img">
                                    <img src={urlImagem} alt={modelo} />
                                </figure>
                                <div className="carro__caracteristica">
                                    <CardCaracteristica icon="cambio" carcteristica="Tipo de cambio" carcteristicaDescricao={cambio} />
                                    {arCondicionado ? <CardCaracteristica icon="ar condicionado" carcteristica="Ar condicionado" carcteristicaDescricao={arCondicionado ? "Ar Condicionado" : null} /> : null}
                                    <CardCaracteristica icon="assento" carcteristica="Quantidade de assento" carcteristicaDescricao={`${qtdeAssento} ${(qtdeAssento <= 1) ? "assento" : "assentos"}`} />
                                    <CardCaracteristica icon="motor" carcteristica="Motor" carcteristicaDescricao={motor} />
                                    <CardCaracteristica icon="porta" carcteristica="Quantidade de portas" carcteristicaDescricao={`${qtdePorta} ${(qtdePorta <= 1) ? "porta" : "portas"}`} />
                                </div>
                                <div className="carro__reserva">
                                    <div className="carro__preco">
                                        <p className="subtitle">A partir de</p>
                                        <h2 className="info__preco">{`R$${(valor.toFixed(2)).replace(".", ",")} /dia`}</h2>
                                    </div>
                                    <ButtonToClick classes="success-btn" urlTo={urlTo}>Reservar</ButtonToClick>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="carro__info">
                                <figure className="carro__img">
                                    <img src={urlImagem} alt={modelo} />
                                </figure>
                                <article className="carro__dados">
                                    <div className="carro__caracteristica">
                                        <CardCaracteristica icon="cambio" carcteristica="Tipo de cambio" carcteristicaDescricao={cambio} />
                                        {arCondicionado ? <CardCaracteristica icon="ar condicionado" carcteristica="Ar condicionado" carcteristicaDescricao={arCondicionado ? "Ar Condicionado" : null} /> : null}
                                        <CardCaracteristica icon="assento" carcteristica="Quantidade de assento" carcteristicaDescricao={`${qtdeAssento} ${(qtdeAssento <= 1) ? "assento" : "assentos"}`} />
                                        <CardCaracteristica icon="motor" carcteristica="Motor" carcteristicaDescricao={motor} />
                                        <CardCaracteristica icon="porta" carcteristica="Quantidade de portas" carcteristicaDescricao={`${qtdePorta} ${(qtdePorta <= 1) ? "porta" : "portas"}`} />
                                    </div>
                                    <div className="carro__reserva">
                                        <div className="carro__preco">
                                            <h2>A partir de <span className="info__preco">{`R$${(valor.toFixed(2)).replace(".", ",")} /dia`}</span></h2>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="carro__btn--reservar">
                                <ButtonToClick classes="success-btn btn__reservar" urlTo={urlTo}>Reservar</ButtonToClick>
                            </div>
                        </>
                }
            </div>
        </>
    )
}
