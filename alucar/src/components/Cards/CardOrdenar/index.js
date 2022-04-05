import { useState } from "react";

export const CardOrdenar = () => {
  const [option, setOption] = useState(false);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const resetaFiltros = () => {
    setOption('');
  }
  return (
    <div className="card__filtros">
      <form>
      <h3 className="filtro__title">Ordenar por</h3>
      <div className="filtro__info">
        <div className="filtro__checkbox">
        <input
              name="maiorpreco"
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
              name="menorpreco"
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
            name="maiornota"
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
            name="menornota"
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
      <button
          type="reset"
          onClick={resetaFiltros}
        />
        </form>
    </div>
  );
};
