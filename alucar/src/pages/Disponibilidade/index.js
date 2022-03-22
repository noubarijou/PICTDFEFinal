import {Helmet} from 'react-helmet-async'
/* import DatePicker from 'react-datepicker';
import {useState} from 'react';
import {Reservar} from '../../components/BotaoReserva'
import {Link} from 'react-router-dom';
import addDays from 'date-fns/addDays' */
import useAxios from '../../hooks/useAxios'

export const Disponibilidade = () => {
/*   const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
  const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }; */
    /* const detalhes = require("../../assets/detalhes.json"); */
  const detalhes = useAxios(`/caracteristicas`);
  console.log(detalhes);
 /*  const options = require('../../assets/cidades.json') */
  return (
    <>
    <Helmet>
        <title>AluCar | Disponibilidade</title>
    </Helmet>
    <main>
        <h2>Disponibilidade da categoria </h2>
        <div>{detalhes}</div>
    {/*     <DatePicker 
     selected={startDate}
     onChange={onChange}
     startDate={startDate}
     endDate={endDate}
     excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
     selectsRange
     selectsDisabledDaysInRange
     inline/>
    <Link to={`/disponibilidade`}>
    <Reservar />
    </Link> */}
    

    </main>
    </>
  )
}
