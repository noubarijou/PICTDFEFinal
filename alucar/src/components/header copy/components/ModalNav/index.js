import "./style.scss";
import { useShowModal } from "../../../../hooks/useShowModal";

/* icones - font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const ModalNav = ({ children }) => {
    const [handleClose, showModal] = useShowModal();

    return (
        <>
            <nav className="nav__modal">
                {!showModal ?
                    <button className="modal__btn btn--open" onClick={(e) => handleClose(e)}>
                        <FontAwesomeIcon icon={faBars} size="2x" />
                    </button>
                    : null}
                {showModal ?
                    <div className="nav__conteudo">
                        <div className="conteudo__destaque">
                            <button className="modal__btn btn--close" onClick={(e) => handleClose(e)}>
                                <FontAwesomeIcon icon={faXmark} size="2x" />
                            </button>
                        </div>
                        <div className="conteudo__links">
                            {children}
                        </div>
                        <div className="conteudo__redes">
                            <FontAwesomeIcon className="redes__icon" icon={faFacebook} size="2x" />
                            <FontAwesomeIcon className="redes__icon" icon={faTwitter} size="2x" />
                            <FontAwesomeIcon className="redes__icon" icon={faLinkedin} size="2x" />
                            <FontAwesomeIcon className="redes__icon" icon={faInstagram} size="2x" />
                        </div>
                    </div>
                    : null}
            </nav>
        </>
    )
}