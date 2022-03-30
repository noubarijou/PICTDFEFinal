import "./style.scss";
import { useAxios } from "../../hooks/useAxios";
/* icones - font awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Calendar } from "./components/Calendar";
import { useNavigate } from "react-router-dom";

export const ModalPesquisa = () => {
  const cidades = useAxios(`/cidades`);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [cidade, setCidade] = useState();
  const navigate = useNavigate();

  const setDados = () => {
    localStorage.setItem("dadosCidade", JSON.stringify(cidade));
    localStorage.setItem("dadosRange", JSON.stringify(dateRange));
    localStorage.setItem("dadosStartDate", JSON.stringify(startDate));
    localStorage.setItem("dadosEndDate", JSON.stringify(endDate));

    /* navigate("/disponibilidade/:detalhesId"); */

  }

  /* const pesquisaCidade = localStorage.getItem("dadosCidade");
  const pesquisaRange = localStorage.getItem("dadosRange");
  const pesquisaStartDate = localStorage.getItem("dadosStartDate");
  const pesquisaEndDate = localStorage.getItem("dadosEndDate"); */
  return (
    <div className="modal__pesquisa">
      <h2>Os melhores veículos, pelo melhor preço!</h2>
      <form className="pesquisa__form">
        <div className="pesquisa__div">
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
            {cidades.map((itemModal) => {
              return (
                <div key={itemModal.cidadesId}>
                  <option id={itemModal.cidadesId}
                    data-value={itemModal.value}
                    value={`${itemModal.cidadesNome}, ${itemModal.estado}`}
                  />
                </div>
              );
            })}
          </datalist>
        </div>
        <div className="pesquisa__div">
          <Calendar value={dateRange} setValue={setDateRange} />
        </div>
          <button
            type="submit"
            className="btn secondary-btn btn-large" onClick={setDados()}
          >
            Pesquisar
          </button>
      </form>
    </div>
  );
};
