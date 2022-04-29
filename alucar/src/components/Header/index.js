import './style.scss';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { useState, useEffect } from 'react';
import { ModalNav } from '../Modal/ModalNav';
import {useLogout} from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

/* icones - font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";


export const Header = () => {
    const { auth, setAuth } = useAuth();
    const loggedInUser = auth?.accessToken;

    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/');
        setAuth({});
        setSuccess(false);
    }

    const { width } = useWindowDimensions();
    const [success, setSuccess] = useState();
    const [showModal, setShowModal] = useState(false);
    const dados = require("../../assets/jsons/user.json");
    
    const handleClose = () => {
        setShowModal(!showModal);
    }

    useEffect(() => {
        
        if (loggedInUser) {
            setSuccess(true)
        }
    },[loggedInUser]);

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
                        {showModal ?
                            <ModalNav>
                                <div>
                                    <FontAwesomeIcon icon={faXmark} size="2x" style={{ cursor: "pointer" }} onClick={() => handleClose()} />
                                    {success ? (
                                        <div className="modal__displayname">{dados.map((dado) => {
                                            return (<Link to='/minhaconta' onClick={() => handleClose()}>
                                                {dado.displayname}
                                                </Link>
                                            )
                                        })}</div>) : null}
                                </div>
                            </ModalNav> : null}
                    </nav>
                    :
                    (success && auth?.roles === "ADMIN") ?
                    <nav>
                        <a href="/sobre" className="subtitle">Sobre</a>
                        <a href="/ajuda" className="subtitle">Ajuda</a>
                        <a href="/minhaconta" className="header__btn primary-btn btn-large">Minha Conta</a>
                        <a href="/admin" className="header__btn primary-btn btn-large">Admin</a>
                        <div className="modal__displaynameDesktop">{dados.map((dado) => {
                                            return (
                                                dado.displayname
                                            )
                                        }
                        )}
                        </div>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" style={{ cursor: "pointer" }} onClick={() => signOut()} /> 
                    </nav>

                    : success && auth?.roles === "CLIENTE" ?
                    <nav>
                        <a href="/sobre" className="subtitle">Sobre</a>
                        <a href="/ajuda" className="subtitle">Ajuda</a>
                        <a href="/minhaconta" className="header__btn primary-btn btn-large">Minha Conta</a>
                        <div className="modal__displaynameDesktop">{dados.map((dado) => {
                                            return (
                                                dado.displayname
                                            )
                                        }
                        )}
                        </div>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" style={{ cursor: "pointer" }} onClick={() => signOut()} /> 
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
