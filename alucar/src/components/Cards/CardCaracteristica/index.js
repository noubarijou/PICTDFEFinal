import './style.scss'
import React, { useEffect, useState } from 'react'

export const CardCaracteristica = ({ icon, carcteristica, carcteristicaDescricao }) => {
    const cambio = "https://alucar-t1-g4.s3.amazonaws.com/caracteristicas/cambio.svg";
    const arCondicionado = "https://alucar-t1-g4.s3.amazonaws.com/caracteristicas/arCondicionado.svg";
    const motor = "https://alucar-t1-g4.s3.amazonaws.com/caracteristicas/motor.svg";
    const passageiro = "https://alucar-t1-g4.s3.amazonaws.com/caracteristicas/passageiros.svg";
    const porta = "https://alucar-t1-g4.s3.amazonaws.com/caracteristicas/porta.svg";
    const [iconCaracteristica, setIconCaracteristica] = useState("");

    useEffect(() => {
        switch (icon) {
            case "cambio": (setIconCaracteristica(cambio))
                break;
            case "ar condicionado": (setIconCaracteristica(arCondicionado))
                break;
            case "motor": (setIconCaracteristica(motor))
                break;
            case "assento": (setIconCaracteristica(passageiro))
                break;
            case "porta": (setIconCaracteristica(porta))
                break;
            default:
                break;
        }
    }, [icon]);

    return (
        <div className='card__caracteristica'>
            <figure>
                <img src={iconCaracteristica} alt={carcteristica} />
            </figure>
            <p className="body-large">{carcteristicaDescricao}</p>
        </div>
    )
}
