import { useState } from "react";
import '../../../pages/assets/disponibilidade.scss';

export const CardFiltros = () => {
  const [option, setOption] = useState(false);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const resetaFiltros = () => {
    setOption('');
  }
  return (
    <div className="card__filtros">
      <form className="card__form">
        <h3 className="filtro__title">Quantidade de Portas</h3>
        <div className="filtro__info">
          <div className="filtro__checkbox">
            <input
              name="portas"
              type="radio"
              id="2portas"
              value="2"
              checked={option === "2"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="2portas"
              onChange={handleChange}
              className="filtro__label"
            >
              2 portas
            </label>
          </div>
          <div className="filtro__checkbox">
            <input
              name="portas"
              type="radio"
              id="4portas"
              value="4"
              checked={option === "4"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="4portas"
              onChange={handleChange}
              className="filtro__label"
            >
              4 portas
            </label>
          </div>
        </div>
        <h3 className="filtro__title">Quantidade de Assentos</h3>
        <div className="filtro__info">
          <div className="filtro__checkbox">
            <input
              name="assentos"
              type="radio"
              id="ate5assentos"
              value="5"
              checked={option === 5}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="ate5assentos"
              onChange={handleChange}
              className="filtro__label"
            >
              Até 5
            </label>
          </div>
          <div className="filtro__checkbox">
            <input
              name="assentos"
              type="radio"
              id="maisque5"
              value="5+"
              checked={option === "5+"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="maisque5"
              onChange={handleChange}
              className="filtro__label"
            >
              mais que 5
            </label>
          </div>
        </div>
        <h3 className="filtro__title">Ar condicionado</h3>
        <div className="filtro__info">
          <div className="filtro__checkbox">
            <input
              name="ar"
              type="radio"
              id="temAr"
              value="sim"
              checked={option === "sim"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="temAr"
              onChange={handleChange}
              className="filtro__label"
            >
              Sim
            </label>
          </div>
          <div className="filtro__checkbox">
            <input
              name="ar"
              type="radio"
              id="naoTemAr"
              value="nao"
              checked={option === "nao"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="naoTemAr"
              onChange={handleChange}
              className="filtro__label"
            >
              Não
            </label>
          </div>
        </div>
        <h3 className="filtro__title">Tipo de Combustível</h3>
        <div className="filtro__info">
          <div className="filtro__checkbox">
            <input
              name="combustivel"
              type="radio"
              id="gasolina"
              value="gasolina"
              checked={option === "gasolina"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="gasolina"
              onChange={handleChange}
              className="filtro__label"
            >
              Gasolina
            </label>
          </div>
          <div className="filtro__checkbox">
            <input
              name="combustivel"
              type="radio"
              id="flex"
              value="flex"
              checked={option === "flex"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="flex"
              onChange={handleChange}
              className="filtro__label"
            >
              Flex
            </label>
          </div>
        </div>
        <h3 className="filtro__title">Cambio</h3>
        <div className="filtro__info">
          <div className="filtro__checkbox">
            <input
              name="cambio"
              type="radio"
              id="automatico"
              value="automatico"
              checked={option === "automatico"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="automatico"
              onChange={handleChange}
              className="filtro__label"
            >
              Automático
            </label>
          </div>
          <div className="filtro__checkbox">
            <input
              name="cambio"
              type="radio"
              id="manual"
              value="manual"
              checked={option === "manual"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="manual"
              onChange={handleChange}
              className="filtro__label"
            >
              Manual
            </label>
          </div>
        </div>
        <h3 className="filtro__title">Ar condicionado</h3>
        <div className="filtro__info">
          <div className="filtro__checkbox">
            <input
              name="motor"
              type="radio"
              id="1.4"
              value="1.4"
              checked={option === "1.4"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="1.4"
              onChange={handleChange}
              className="filtro__label"
            >
              1.4
            </label>
          </div>
          <div className="filtro__checkbox">
            <input
              name="motor"
              type="radio"
              id="1.6"
              value="1.6"
              checked={option === "1.6"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="1.6"
              onChange={handleChange}
              className="filtro__label"
            >
              1.6
            </label>
          </div>
          <div className="filtro__checkbox">
            <input
              name="motor"
              type="radio"
              id="1.8"
              value="1.8"
              checked={option === "1.8"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="1.8"
              onChange={handleChange}
              className="filtro__label"
            >
              1.8
            </label>
          </div>
          <div className="filtro__checkbox">
            <input
              name="motor"
              type="radio"
              id="2.0"
              value="2.0"
              checked={option === "2.0"}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="2.0"
              onChange={handleChange}
              className="filtro__label"
            >
              2.0
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
