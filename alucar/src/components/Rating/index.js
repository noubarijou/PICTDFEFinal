import "./style.scss";

import React from 'react'

/* icones - font awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons/faStar";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons/faStar";

export const Rating = ({ rating }) => {
    /* const isInteger = rating.isInteger(); */
    return (
        <div className="info__rating">
            {[1, 2, 3, 4, 5].map((e) => {
                return (e <= rating) ? (<FontAwesomeIcon className="rating__star" key={e} icon={faStarSolid} />) : (<FontAwesomeIcon className="rating__star" key={e} icon={faStarRegular} />)
            })}
        </div>
    )
}
