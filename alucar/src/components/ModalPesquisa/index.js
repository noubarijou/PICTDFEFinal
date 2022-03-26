import "./style.scss";
import useAxios from "../../hooks/useAxios";
/* icones - font awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ModalPesquisa = () => {
  const cidades = useAxios(`/cidades`);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [cidade, setCidade] = useState();
  

  localStorage.setItem("dadosCidade", JSON.stringify(cidade));
  localStorage.setItem("dadosRange", JSON.stringify(dateRange));
  const pesquisaCidade = localStorage.getItem("dadosCidade");
  const pesquisaRange = localStorage.getItem("dadosRange");
    
  return (
    <div className="modal__pesquisa">
      <h2>Os melhores veículos, pelo melhor preço!</h2>
      <form className="pesquisa__form">
        <div>
          <label htmlFor="where">
            <FontAwesomeIcon icon={faLocationDot} /> Onde quer retirar o carro:
          </label>
          <input
            type="text"
            id="where"
            placeholder="Informe uma cidade"
            list="cidades"
            onChange={(event) => setCidade(event.target.value)}
            required
          />
          <datalist id="cidades">
            {cidades.map((item) => {
              return (
                <div key={item.cidades_id}>
                  <option
                    data-value={item.value}
                    value={`${item.cidades_nome}, ${item.estado}`}
                  />
                </div>
              );
            })}
          </datalist>
        </div>
        <div>
          <label htmlFor="whenStart">
            <FontAwesomeIcon icon={faCalendarDay} /> Período de locação:
          </label>
          <DatePicker
            className="calendario"
            placeholderText="Selecione o período de locação"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            monthsShown={2}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
          />
          {/* <input type="date" id="whenStart" placeholder="Selecione a data inicial de locação" required /> */}
        </div>
        <Link to={`/disponibilidade/}`}>
          <button
            type="submit"
            className="btn secondary-btn btn-large"  /* onSubmit={dadosPesquisa} */
          >
            Pesquisar
          </button>
        </Link>
      </form>
    </div>
  );
};
