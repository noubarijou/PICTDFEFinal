import './style.scss'

/* icones - font awesome */
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' */
import {  } from '@fortawesome/free-solid-svg-icons'


export const Modal = ({ children }) => {

    return (
        <div className="modal">
            <div className="menu__title">
                {children}
            </div>
            <a href="/login" className="subtitle">Iniciar sessão</a>
            <div className="linha"></div>
            <a href="/criarconta" className="body-large">Criar conta</a>
            <div className="linha"></div>
            <a href="/sobre" className="body-large">Sobre</a>
            <div className="linha"></div>
            <a href="/ajuda" className="body-large">Ajuda</a>

            <div className="menu__redes">
            </div>
        </div>
    )
}