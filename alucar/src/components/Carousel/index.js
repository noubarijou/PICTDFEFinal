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
                <FontAwesomeIcon className="carousel__chevron" icon={faChevronLeft} size="2x" />
            </button>
            <div className="carousel__item" ref={carousel}>
                { children }
            </div>
            <button className="carousel__btn" onClick={(e) => { handleRightClick(e) }}
            ><FontAwesomeIcon className="carousel__chevron" icon={faChevronRight} size="2x" />
            </button>
        </div>
    )
}
