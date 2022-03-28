import {useState} from 'react';
import {Form} from 'formik';

import { Helmet } from 'react-helmet-async';
import useAxios from "../../hooks/useAxios";
/* icones - font awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";

export const Reserva = () => {
    const cidades = useAxios(`/cidades`);
    const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [cidade, setCidade] = useState();
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <>
    <main>
        <Helmet>
            <title>Reserva</title>
        </Helmet>
        <h3>Complete seus dados</h3>
        <div className="linha"></div>
        <form method="post">
                {/* <TextField label="Nome" name="firstName" type="text" placeholder="Digite seu nome" required />
                <TextField label="Sobrenome" name="lastName" type="text" placeholder="Digite seu sobrenome" required />
                <TextField label="Email" name="email" type="email" placeholder="Digite seu email" required /> */}
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
          <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    />
    <h3>Selecione o horario de retirada</h3>
    <input type="text" id="times" list="horarios" placeholder="Escolha o horario" required />
    <datalist id="horarios">
            <option value="09:00" />
            <option value="09:30" />
            <option value="10:00" />
            <option value="10:30" />
            <option value="11:00" />
            <option value="11:30" />
            <option value="12:00" />
            <option value="12:30" />
            <option value="13:00" />
            <option value="13:30" />
            <option value="14:00" />
            <option value="14:30" />
            <option value="15:00" />
            <option value="15:30" />
            <option value="16:00" />
            <option value="16:30" />
            <option value="17:00" />
            <option value="17:30" />
            <option value="18:00" />
            <option value="18:30" />
            <option value="19:00" />
            <option value="19:30" />
            <option value="20:00" />
    </datalist>
        </form>
        
    </main>
    </>
  )
}
