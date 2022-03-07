import './style.scss'
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { useState } from 'react';
import { Modal } from '../Modal';

/* icones - font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


export const Header = () => {

    const { width } = useWindowDimensions();

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(!showModal);
    }

    return (
        <header>
            <div className="header__txt">
                <p className={width < 1000 ? "body-small" : "btn-small"}>Carros assegurados em todo território nacional l Parcele seu aluguel em até 12x e saia dirigindo com segurança e conforto</p>
            </div>
            <div className="header__nav">
                <a href='/' className="header__logo">
                    <h2>Alu<span>Car</span></h2>
                </a>

                {width < 1000 ?
                
                    <nav>
                        <FontAwesomeIcon icon={faBars} size="2x" style={{ cursor: "pointer" }} onClick={() => setShowModal(true)} />
                        {showModal ? <Modal><div><FontAwesomeIcon icon={faXmark} size="2x" style={{ cursor: "pointer" }} onClick={() => handleClose()} /></div></Modal> : null}
                    </nav>
                    :
                    <nav>
                         <a href="/categorias" className="subtitle">Categorias</a>
                        <a href="/sobre" className="subtitle">Sobre</a>
                        <a href="/ajuda" className="subtitle">Ajuda</a>
                        <a href="/criarconta" className="subtitle">Criar conta</a>
                        <a href="/login" className="header__btn primary-btn btn-large">Iniciar sessão</a>
                    </nav>

                }
            </div>
        </header>
    )
}
