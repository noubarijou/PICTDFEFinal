import './style.scss'

/* icones - font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarDay } from '@fortawesome/free-solid-svg-icons'

export const ModalPesquisa = () => {
    return (
        <div className="modal__pesquisa">
            <h2>Os melhores veículos, pelo melhor preço!</h2>
            <form className="pesquisa__form">
                <div>
                    <label for="where"><FontAwesomeIcon icon={faLocationDot} /> Onde quer retirar o carro:</label>
                    <input type="text" id="where" placeholder="Informe uma cidade" required />
                </div>
                <div>
                    <label for="when"><FontAwesomeIcon icon={faCalendarDay} /> Quando quer retirar o carro:</label>
                    <input type="date" id="when" placeholder="Selecione o período de locação" required />
                </div>
                <button type="submit" className="btn secondary-btn btn-large">Pesquisar</button>
            </form>
        </div>
    )
}