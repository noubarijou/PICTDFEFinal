import '../CardFiltros/style.scss';
import { useState, useContext } from "react";
import { FiltroContext } from "../../../context/FiltroContext";


export const CardOrdenar = () => {
  const [option, setOption] = useState();
  const { ordenar } = useContext(FiltroContext)

  const handleChange = (e) => {
    setOption(e.target.value)
  };

  const handleApply = (e) => {
    e.preventDefault()
    ordenar(option)
  }
  
  const resetaFiltros = () => {
    setOption('');
    ordenar(option)
  }
  
  return (
    <div className="card__filtros">
      <form className="card__form">
        <h3 className="filtro__title">Ordenar por</h3>
        <div className="filtro__info">
          <div className="filtro__checkbox">
            <input
              name="sla"
              type="radio"
              id="maiorpreco"
              value="maiorpreco"
              checked={option === "maiorpreco"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="maiorpreco"
              onChange={handleChange}
              className="filtro__label"
            >
              Maior preço
            </label>
          </div>
          <div className="filtro__checkbox">
            <input
              name="sla"
              type="radio"
              id="menorpreco"
              value="menorpreco"
              checked={option === "menorpreco"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="menorpreco"
              onChange={handleChange}
              className="filtro__label"
            >
              Menor preço
            </label>
          </div>
          <div className="filtro__checkbox">
            <input
              name="sla"
              type="radio"
              id="maiornota"
              value="maiornota"
              checked={option === "maiornota"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="maiornota"
              onChange={handleChange}
              className="filtro__label"
            >
              Maior nota
            </label>
          </div>
          <div className="filtro__checkbox">
            <input
              name="sla"
              type="radio"
              id="menornota"
              value="menornota"
              checked={option === "menornota"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="menornota"
              onChange={handleChange}
              className="filtro__label"
            >
              Menor nota
            </label>
          </div>
        </div>
        <button className="btn btn-large primary-btn btn-limpar"
          type="reset"
          onClick={handleApply}
        >Aplicar</button>
        <button className="btn btn-large secondary-btn btn-limpar"
          type="reset"
          onClick={resetaFiltros}
        >Limpar</button>
      </form>
    </div>
  );
};
