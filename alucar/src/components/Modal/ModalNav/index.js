import "./style.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {useLogout} from '../../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";

export const ModalNav = ({ children }) => {
  const { auth, setAuth } = useAuth();
  const loggedInUser = auth?.accessToken;
  const userId = auth?.email;
  console.log(userId);

  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
        await logout();
        navigate('/');
        setAuth({});
        setSuccess(false);
  }

  const dados = require("../../../assets/jsons/user.json");
  const [success, setSuccess] = useState();

  useEffect(() => {
    
    if (loggedInUser) {
      setSuccess(true);
    }
  }, [loggedInUser]);

  return (
    <div className="modal">
      <div className="menu__title">{children}</div>
      {success ? (
        <>
          <div className="linha"></div>
          <p className="subtitle">
            {dados.map((dado) => {
              return (
                `Olá, ${dado.nome} ${dado.sobrenome}`
              )
            })}
          </p>
          <div className="linha"></div>
          <a href="/minhaconta" className="body-large">
            Minha Conta
          </a>
          <div className="linha"></div>
          <a href="/sobre" className="body-large">
            Sobre
          </a>
          <div className="linha"></div>
          <a href="/ajuda" className="body-large">
            Ajuda
          </a>
          <div className="linha"></div>
          <a href="/" className="subtitle" onClick={signOut}>
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
        <FontAwesomeIcon className="redes__icon" icon={faFacebook} size="2x" />
        <FontAwesomeIcon className="redes__icon" icon={faTwitter} size="2x" />
        <FontAwesomeIcon className="redes__icon" icon={faLinkedin} size="2x" />
        <FontAwesomeIcon className="redes__icon" icon={faInstagram} size="2x" />
      </div>
    </div>
  );
};
