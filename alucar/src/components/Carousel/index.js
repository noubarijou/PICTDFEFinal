import "./style.scss";

import React, { useRef } from 'react'

/* icones - font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const Carousel = ({ children }) => {

    const carousel = useRef('');

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return (
        <div className="container__carousel">
            <button className="carousel__btn" onClick={(e) => { handleLeftClick(e) }}>
                <FontAwesomeIcon icon={faChevronLeft} size="3x" />
            </button>
            <div className="carousel__item" ref={carousel}>
                {children}
            </div>
            <button className="carousel__btn" onClick={(e) => { handleRightClick(e) }}
            ><FontAwesomeIcon icon={faChevronRight} size="3x" />
            </button>
        </div>
    )
}
