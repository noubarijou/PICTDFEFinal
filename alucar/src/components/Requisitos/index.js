import "./style.scss";
import React, { useState } from 'react'

/* FontAwesome - icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export const Requisitos = ({ title, regra }) => {
    const [openLayer, setOpenLayer] = useState(false);

    const handleClose = () => {
        setOpenLayer(!openLayer);
    }


    return (
        <div className="requisito__card">
            <FontAwesomeIcon className={openLayer ? "requisito__icone open": "requisito__icone close"} icon={openLayer ? faAngleUp : faAngleDown} onClick={() => { handleClose() }} />
            <p className="btn-large requisito__title" onClick={() => { handleClose() }}>{title}</p>
            {openLayer ? <p className="body-small requisito__regra">{regra}</p> : null}
        </div>
    )
}
