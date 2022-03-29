import { useState } from "react";

export const CardFiltros = ({ id, title, descricao }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    /* setChecked(!checked); */
    /* localStorage.setItem('filtros', JSON.stringify()); */
  };
  return (
    <div className="card__filtros">
      <h3 className="filtro__title">{title}</h3>
      <div className="filtro__info">
        <div className="filtro__checkbox">
            <input
              name={id}
              type="radio"
              id={id}
              value={id}
              onChange={handleChange}
              className="filtro__input"
            />
          <label
            htmlFor={id}
            onChange={handleChange}
            className="filtro__label btn-large"
          >{descricao}</label>
        </div>
      </div>
    </div>
  );
};
