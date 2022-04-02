import "./style.scss";
import React, { useState } from 'react'

/* icones - font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const CardMontadora = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  return (
    <>
      <section className="container__slider">
        <FontAwesomeIcon className="slider__chevronLeft" size="2x" icon={faChevronLeft} onClick={prevSlide} />

        {slides.map((slide, index) => {
          return (
            <article className={index === current ? "slide active" : "slide"} key={index}>
              {index === current && (
                <img src={slide.imagem} alt={slide.nome} className="image" />
                )}
            </article>
          )
        })}
        <FontAwesomeIcon className="slider__chevronRight" size="2x" icon={faChevronRight} onClick={nextSlide} />
      </section>
    </>
  )
}
