import "../assets/form.scss";
import { useState, useRef, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
/* import AuthService from "../../services/authServices/auth.service";*/
import api from "../../services/api";
import { Helmet } from "react-helmet-async";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;*/
const SENHA_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const CriarConta = () => {
  const sucesso = 'https://alucar-t1-g4.s3.amazonaws.com/success-vector.svg';

  const errRef = useRef();

  const emailRef = useRef();
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [senha, setSenha] = useState("");
  const [validSenha, setValidSenha] = useState(false);

  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [validConfirmaSenha, setValidConfirmaSenha] = useState(false);

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  /* useEffect(() => {
    emailRef.current.focus();
  }, []); */

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidSenha(SENHA_REGEX.test(senha));
    setValidConfirmaSenha(senha === confirmaSenha);
  }, [senha, confirmaSenha]);

  useEffect(() => {
    setErrMsg("");
  }, [email, senha, confirmaSenha]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
    const v2 = SENHA_REGEX.test(senha);
    if (!v1 || !v2) {
      setErrMsg("Preencha os campos corretamente");
      return;
    }
    try {
      const response = await api.post(
        "/clientes/cadastrar",
        JSON.stringify({
          email,
          senha,
          nome,
          sobrenome,
        }),
        {
          headers: { "Content-Type": "application/json" },

        }
      );
      console.log(response)
      const roles = response?.data.funcao;
      console.log(roles);
      setSuccess(true);
      setEmail('');
      setSenha('');
      setConfirmaSenha('');
      setNome('');
      setSobrenome('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Erro de conexão com o servidor");
      } else if (err.response.status === 409) {
        setErrMsg("Email já cadastrado");
      } else {
        setErrMsg("Infelizmente, você não pôde se registrar. Por favor, tente novamente mais tarde.");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <Helmet>
        <title>Alucar | Criar Conta</title>
      </Helmet>
      {success ? (
        <article className="cadastro__container">
          <figure>
            <img src={sucesso} alt="Sucesso" className="sucesso" />
          </figure>
          <h1 className="form__title">Cadastro realizado com sucesso!</h1>
          <Link to="/login" className="btn-cadastro btn-large primary-btn">Entrar</Link>
        </article>
      ) : (
        <article className="cadastro__container">
          <p
            ref={errRef}
            className={`btn-large ${errMsg ? "errmsg" : "offscreen"}`}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="form__title">Crie sua conta</h1>
          <form className="cadastro__form" onSubmit={handleSubmit}>
            <label className="form__label" htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              className='input'
              onChange={(e) => setNome(e.target.value)}
              required
              value={nome}
            />
            <label className="form__label" htmlFor="sobrenome">Sobrenome</label>
            <input
              type="text"
              id="sobrenome"
              className='input'
              onChange={(e) => setSobrenome(e.target.value)}
              required
              value={sobrenome}
            />
            <label htmlFor="email" className="form__label">
              Email
              <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
            </label>
            <input
              type="text"
              id="email"
              className="input"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
            />
            <p
              id="uidnote"
              className={`subtitle ${email && !validEmail
                ? "instructions" : "offscreen"
                }`}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Email inválido - Ex: email@email.com
            </p>
            <label htmlFor="senha" className="form__label">
              Senha
              <FontAwesomeIcon icon={faCheck} className={validSenha ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validSenha || !senha ? "hide" : "invalid"} />
            </label>
            <input
              type="password"
              id="senha"
              className="input"
              onChange={(e) => setSenha(e.target.value)}
              required
              aria-invalid={validSenha ? "false" : "true"}
              aria-describedby="pwdnote"
            />
            <p
              id="pwdnote"
              className={`subtitle ${senha && !validSenha
                ? "instructions" : "offscreen"}
              `}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Senha deve conter mínimo de 8 dídgitos, 1 letra maiúscula, 1 letra
              minúscula, 1 número e 1 caractere especial (!@#$%)
            </p>
            <label htmlFor="confirmaSenha" className="form__label">
              Confirmar senha
              <FontAwesomeIcon icon={faCheck} className={validConfirmaSenha && confirmaSenha ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validConfirmaSenha || !confirmaSenha ? "hide" : "invalid"} />
            </label>
            <input
              type="password"
              id="confirmaSenha"
              className="input"
              onChange={(e) => setConfirmaSenha(e.target.value)}
              required
              aria-invalid={validConfirmaSenha ? "false" : "true"}
              aria-describedby="confirmpwdnote"
            />
            <p
              id="confirmpwdnote"
              className={`subtitle ${confirmaSenha && !validConfirmaSenha
                ? "instructions" : "offscreen"}
              `}
            >
              <FontAwesomeIcon icon={faInfoCircle} className="form__icon" />
              Os campos de senha devem ser iguais
            </p>
            <button className="btn primary-btn btn-large">
              Criar conta
            </button>
          </form>
          <p className="subtitle">
            Já tem uma conta?
            <Link to="/login" className="span subtitle">Acesse sua conta</Link>
          </p>
        </article>
      )}
    </>
  );
};

