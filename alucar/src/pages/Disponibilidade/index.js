import {Helmet} from 'react-helmet-async'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {useState} from 'react';
import {Reservar} from '../../components/BotaoReserva'
import {Link} from 'react-router-dom';

export const Disponibilidade = () => {
    const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
    /* const detalhes = require("../../assets/detalhes.json"); */
  /* const detalhes = useAxios(`/caracteristicas`); */
  return (
    <>
    <Helmet>
        <title>AluCar | Disponibilidade</title>
    </Helmet>
    <main>
        <h2>Disponibilidade da categoria </h2>
        <DatePicker selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline/>
    <Link to={`/disponibilidade`}>
    <Reservar />
    </Link>
    </main>
    </>
  )
}
