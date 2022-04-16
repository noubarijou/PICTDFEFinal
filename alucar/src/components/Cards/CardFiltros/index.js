import './style.scss';
import { useContext} from 'react'
import { FiltroContext } from "../../../context/FiltroContext";

export const CardFiltros = () => {

  const { filtro, portasFiltro, assentosFiltro, arFiltro, combustivelFiltro, cambioFiltro, motorFiltro } = useContext(FiltroContext)

  const handleChange = (event) => {
    switch (event.target.value) {
      case '2':
      case '4':
        portasFiltro(event.target.value)
        break;

      case '5':
      case '5+':
        assentosFiltro(event.target.value)
        break;

      case '1':
      case '0':
        arFiltro(event.target.value)
        break;

      case 'gasolina':
      case 'flex':
        combustivelFiltro(event.target.value)
        break;

      case 'automatico':
      case 'manual':
        cambioFiltro(event.target.value)
        break;

      case '1.4':
      case '1.6':
      case '1.8':
      case '2.0':
        motorFiltro(event.target.value)
        break;

      default:
        console.log('Nada nessa estrada')
    }
  };

  const resetaFiltros = () => {
    portasFiltro('');
    assentosFiltro('');
    arFiltro('');
    combustivelFiltro('');
    cambioFiltro('');
    motorFiltro('');
  }

  return (

    <div className="card__filtros">
      <form className="card__form">
        <h3 className="filtro__title">Quantidade de Portas</h3>
        <div className="filtro__info">
          <div className="filtro__checkbox">
            <input
              name="portas"
              type="checkbox"
              id="2portas"
              value="2"
              checked={filtro[0].portas === '2'}
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
              type="checkbox"
              id="4portas"
              value="4"
              checked={filtro[0].portas === '4'}
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
              type="checkbox"
              id="ate5assentos"
              value="5"
              checked={filtro[0].assentos === '5'}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="ate5assentos"
              onChange={handleChange}
              className="filtro__label"
            >
              Até 5 lugares
            </label>
          </div>
          <div className="filtro__checkbox">
            <input
              name="assentos"
              type="checkbox"
              id="maisque5"
              value="5+"
              checked={filtro[0].assentos === '5+'}
              onChange={handleChange}
              className="filtro__input"
            />
            <label
              htmlFor="maisque5"
              onChange={handleChange}
              className="filtro__label"
            >
              Mais que 5 lugares
            </label>
          </div>
        </div>
        <h3 className="filtro__title">Ar condicionado</h3>
        <div className="filtro__info">
          <div className="filtro__checkbox">
            <input
              name="ar"
              type="checkbox"
              id="temAr"
              value="1"
              checked={filtro[0].ar === '1'}
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
              type="checkbox"
              id="naoTemAr"
              value="0"
              checked={filtro[0].ar === '0'}
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
              type="checkbox"
              id="gasolina"
              value="gasolina"
              checked={filtro[0].combustivel === 'gasolina'}
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
              type="checkbox"
              id="flex"
              value="flex"
              checked={filtro[0].combustivel === 'flex'}
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
              type="checkbox"
              id="automatico"
              value="automatico"
              checked={filtro[0].cambio === 'automatico'}
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
              type="checkbox"
              id="manual"
              value="manual"
              checked={filtro[0].cambio === 'manual'}
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
        <h3 className="filtro__title">Motor</h3>
        <div className="filtro__info">
          <div className="filtro__checkbox">
            <input
              name="motor"
              type="checkbox"
              id="1.4"
              value="1.4"
              checked={filtro[0].motor === '1.4'}
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
              type="checkbox"
              id="1.6"
              value="1.6"
              checked={filtro[0].motor === '1.6'}
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
              type="checkbox"
              id="1.8"
              value="1.8"
              checked={filtro[0].motor === '1.8'}
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
              type="checkbox"
              id="2.0"
              value="2.0"
              checked={filtro[0].motor === '2.0'}
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

        <button className="btn btn-large secondary-btn btn-limpar"
          type="reset"
          onClick={resetaFiltros}
        >Limpar</button>
      </form>
    </div>
  );
};
