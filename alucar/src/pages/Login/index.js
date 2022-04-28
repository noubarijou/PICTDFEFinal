import '../assets/form.scss';
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import api from "../../services/api";
import { useInput } from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";
import jwt_decode from 'jwt-decode';




export const Login = () => {
  

  const location = useLocation();
  const navigate = useNavigate();

  const from = /* location.state?.from?.pathname ||  */"/";

  const emailRef = useRef();
  const errRef = useRef();
  const [email, resetEmail, attributeObj] = useInput('email', '');
  const [senha, setSenha] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [check, toggleCheck] = useToggle("persist", false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, senha]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/login",
        {
          email,
          senha,
        }
      );
      
      const accessToken = response?.data;
      localStorage.setItem("tolkien", accessToken);
      let decoded = jwt_decode(accessToken);
      const roles = decoded.sub;
      localStorage.setItem("funcao", roles);
      console.log(roles);
      // setAuth({ email, senha, roles, accessToken });
      (accessToken) ? localStorage.setItem("logado", true) : localStorage.setItem("logado", false);
      resetEmail();
      setSenha("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Sem resposta do servidor");
      } else if (err.response?.status === 400) {
        setErrMsg("Email ou senha não informados");
      } else if (err.response?.status === 401) {
        setErrMsg("Email ou senha incorretos");
      } else if (err.response?.status === 403) {
        setErrMsg("Email ou senha incorretos");
      } else {
        setErrMsg("Infelizmente, você não pôde efetuar login. Por favor, tente novamente mais tarde.");
      }
      errRef.current.focus();
    }
  };


  return (
    <>
      <Helmet>
        <title>Alucar | Entrar</title>
      </Helmet>
      <article className="login__container">
        <p
          ref={errRef}
          className={`btn-large ${errMsg ? "errmsg" : "offscreen"}`}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1 className="form__title">Entrar na conta</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="form__label">Email</label>
          <input
            type="text"
            id="email"
            className="input"
            ref={emailRef}
            autoComplete="off"
            {...attributeObj}
            required
          />
          <label className="form__label" htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            className='input'
            onChange={(e) => setSenha(e.target.value)}
            required
            value={senha}
          />
          <button className="btn primary-btn btn-large">Entrar</button>
          <div className="persistCheck">
            <input
              type="checkbox"
              id="persist"
              onChange={toggleCheck}
              checked={check}
            />
            <label htmlFor="persist">Manter-me conectado</label>
          </div>
        </form>
        <p className='subtitle'>
          Não tem uma conta? 
          <Link to="/criarconta" className='span subtitle'>Crie uma conta.</Link>
        </p>
      </article>
    </>
  );
};
