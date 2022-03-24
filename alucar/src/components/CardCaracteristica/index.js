import "./style.scss"
import React, { useEffect, useState } from 'react'
import cambio from "../../assets/img/cambio.png";
import arCondicionado from "../../assets/img/arCondicionado.svg";
import motor from "../../assets/img/motor.png";
import passageiro from "../../assets/img/passageiros.png";
import porta from "../../assets/img/porta.png";

export const CardCaracteristica = ({ icon, carcteristica, carcteristicaDescricao }) => {
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
