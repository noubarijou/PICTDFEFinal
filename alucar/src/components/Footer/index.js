import './style.scss'
/*import { library } from '@fortawesome/fontawesome-svg-core';*/
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';


export const Footer = () => {

    const { width } = useWindowDimensions();

    return (
        <footer>

            <div className="footer__brand">
                <p className="btn-small">
                    <code>&#169;</code> 
                    2022 Alucar
                </p>
            </div>

            {
                width > 1000 ?

                    <div className="footer__redes">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </div>

                    : null

            }

        </footer>
    )
}