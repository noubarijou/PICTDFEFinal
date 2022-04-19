import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthentication } from "../../../../hooks/useAuthentication"

export const ConteudoNav = () => {
  const [authenticated, handleLogout] = useAuthentication();
  const dados = require("../../../../assets/jsons/user.json");
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [displayname, setDisplayname] = useState()

  useEffect(() => {
    if (authenticated) {
      setNome(dados.nome);
      setSobrenome(dados.sobrenome);

      const initials = (nome.substr(0, 1)) + (sobrenome.substr(0, 1))
      setDisplayname(initials)
    }
  }, [authenticated, dados, nome, sobrenome])
  return (
    <>
      {authenticated ?
        <>
          <div className="displayname">{displayname}</div>
          <p className="p--cumprimento btn-large">{`Olá, ${nome} ${sobrenome}`}</p>
          <div className="linha"></div>
          <Link to={`/minhaconta`} className="btn-large link--principal">Minha conta</Link>
          <div className="linha"></div>
          <Link to={`/sobre`} className="subtitle">Sobre</Link>
          <div className="linha"></div>
          <Link to={`/ajuda`} className="subtitle">Ajuda</Link>
          <div className="linha"></div>
          <button className="btn--logout subtitle" onClick={(e) => handleLogout(e)}>Sair</button>
        </>
        :
        <>
          <Link to={`/login`} className="btn-large link--principal">Entrar</Link>
          <div className="linha"></div>
          <Link to={`/criarconta`} className="subtitle">Criar conta</Link>
          <div className="linha"></div>
          <Link to={`/sobre`} className="subtitle">Sobre</Link>
          <div className="linha"></div>
          <Link to={`/ajuda`} className="subtitle">Ajuda</Link>
        </>
      }
    </>
  )
}
