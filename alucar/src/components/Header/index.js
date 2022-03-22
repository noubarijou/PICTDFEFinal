import './style.scss';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { useState, useEffect } from 'react';
import { Modal } from '../Modal';

/* icones - font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


export const Header = () => {
    const { width } = useWindowDimensions();
    const [isSubmitSuccess, setIsSubmitSuccess] = useState();
    const [showModal, setShowModal] = useState(false);
    const dados = require("../../assets/user.json")
    const handleClose = () => {
        setShowModal(!showModal);
    }
    useEffect(() =>{
        const loggedInUser = localStorage.getItem('credenciais');
        if(loggedInUser) {
            setIsSubmitSuccess(true)
        }
    },[]); 
 
    return (
        <header>
            <div className="header__txt">
                <p className={width < 1000 ? "body-small" : "btn-small"}>Carros assegurados em todo território nacional l Parcele seu aluguel em até 12x e saia dirigindo com segurança e conforto</p>
            </div>
            <div className="header__nav">
                <Link to='/' className="header__logo">
                    <h2>Alu<span>Car</span></h2>
                </Link>

                {width < 1000 ?
                
                    <nav>
                        <FontAwesomeIcon icon={faBars} size="2x" style={{ cursor: "pointer" }} onClick={() => setShowModal(true)} />
                        {showModal ? <Modal><div>
                        <FontAwesomeIcon icon={faXmark} size="2x" style={{ cursor: "pointer" }} onClick={() => handleClose()} />
                        {isSubmitSuccess ? (
                        <div className="modal__displayname">{dados.map((dado)=>{
                            return (
                                dado.displayname
                            )
                        })}</div>) : null }
                        </div></Modal> : null}
                    </nav>
                    :
                    <nav>
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
