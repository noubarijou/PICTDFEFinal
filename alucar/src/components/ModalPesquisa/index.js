import './style.scss'
import useAxios from '../../hooks/useAxios';
/* icones - font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import DatePicker from 'react-datepicker';
import { useState } from 'react';


export const ModalPesquisa = () => {
    const cidades = useAxios(`/cidades`);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    console.log(cidades)
    return (
        <div className="modal__pesquisa">
            <h2>Os melhores veículos, pelo melhor preço!</h2>
            <form className="pesquisa__form">
                <div>
                    <label htmlFor="where"><FontAwesomeIcon icon={faLocationDot} /> Onde quer retirar o carro:</label>
                    <input type="text" id="where" placeholder="Informe uma cidade" list="cidades" required />
                    <datalist id="cidades">
                        {cidades.map((cidade)=>{
                            return (
                                <div key={cidade.cidades_id}>
                                <option > 
                                    {cidade.cidades_nome}, {cidade.estado}
                                </option>
                                </div>
                                )
                        })}
                    </datalist>
                </div>
                <div>
                    <label htmlFor="whenStart"><FontAwesomeIcon icon={faCalendarDay} /> Período de locação:</label>
                    <DatePicker className="calendario"
                        placeholderText='Selecione o período de locação'
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
                <button type="submit" className="btn secondary-btn btn-large">Pesquisar</button>
            </form>
        </div>
    )
}