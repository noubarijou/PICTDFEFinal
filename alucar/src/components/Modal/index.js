import "./style.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Modal = ({ children }) => {
    
const dados = require("../../assets/user.json");
  const [isSubmitSuccess, setIsSubmitSuccess] = useState();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("credenciais");
    if (loggedInUser) {
      setIsSubmitSuccess(true);
    }
  }, []);
  const handleLogout = () => {
    setIsSubmitSuccess(false);
    localStorage.clear();
}
  return (
    <div className="modal">
      <div className="menu__title">{children}</div>
      {isSubmitSuccess ? (
        <>
          <div className="linha"></div>
          <p className="body-large">{dados.map((dado)=>{
              return (
                `Olá, ${dado.nome} ${dado.sobrenome}`
              )
          })}
           
          </p>
          <div className="linha"></div>
          <a href="/sobre" className="body-large">
            Sobre
          </a>
          <div className="linha"></div>
          <a href="/ajuda" className="body-large">
            Ajuda
          </a>
          <div className="linha"></div>
          <a href="/" className="subtitle" onClick={handleLogout}>
            Sair
          </a>
        </>
      ) : (
        <>
          <a href="/login" className="subtitle">
            Iniciar sessão
          </a>
          <div className="linha"></div>
          <a href="/criarconta" className="body-large">
            Criar conta
          </a>
          <div className="linha"></div>
          <a href="/sobre" className="body-large">
            Sobre
          </a>
          <div className="linha"></div>
          <a href="/ajuda" className="body-large">
            Ajuda
          </a>
        </>
      )}

      <div className="menu__redes">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </div>
    </div>
  );
};
