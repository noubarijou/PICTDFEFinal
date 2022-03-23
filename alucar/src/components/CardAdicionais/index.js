import "./style.scss";

import React, { useState } from 'react'

export const CardAdicionais = ({ id, title, descricao, valor }) => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div className="card__adicional">
            <h3 className="adicional__title">{title}</h3>
            <div className="adicional__info">
                <p className="body-small adicional__descricao">{descricao}</p>
                <div className="adicional__valor__checkbox">
                    <p className="btn-large adicional__valor">R${(valor.toFixed(2)).replace(".", ",")} <span className="body-small">/Diária</span></p>
                    <label htmlFor={id} onChange={handleChange} className="adicional__label btn-large">
                        Adicionar
                        <input type="checkbox" id={id} value={id} onChange={handleChange} className="adicional__input" />
                    </label>
                </div>
            </div>
        </div>
    )
}
