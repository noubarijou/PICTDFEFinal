import { useState, useRef, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import { Link } from "react-router-dom";
/* import AuthService from "../../services/authServices/auth.service";*/
import api  from "../../services/api";
import { Helmet } from "react-helmet-async";
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;*/
const SENHA_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const CriarConta = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [senha, setSenha] = useState("");
  const [validSenha, setValidSenha] = useState(false);
  const [senhaFocus, setSenhaFocus] = useState(false);

  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [validConfirmaSenha, setValidConfirmaSenha] = useState(false);
  const [confirmaSenhaFocus, setConfirmaSenhaFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

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
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      console.log(response)
      setSuccess(true);
      setEmail('');
      setSenha('');
      setConfirmaSenha('');
    } catch (err) {
      if(!err?.response) {
        setErrMsg("Erro de conexão com o servidor");
      }else if (err.response.status === 409) {
        setErrMsg("Email já cadastrado");
      } else {
        setErrMsg("Infelizmente, você não pôde se registrar. Por favor, tente novamente mais tarde.");
      }
      errRef.current.focus();
    }
    console.log(success);
  };

  return (
    <>
    <Helmet>
      <title>Alucar | Criar Conta</title>
    </Helmet>
      {success ? (
        <main>
          <h1>Conta criada com sucesso</h1>
          <p>
            <Link to="/login">Entrar</Link>
          </p>
        </main>
      ) : (
        <main>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Crise sua conta</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email
              <span className={validEmail ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validEmail || !email ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="text"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p
              id="uidnote"
              className={
                emailFocus && email && !validEmail
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Email inválido - Ex: email@email.com
            </p>
            <label htmlFor="senha">
              Senha
              <span className={validSenha ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validSenha || !senha ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="password"
              id="senha"
              onChange={(e) => setSenha(e.target.value)}
              required
              aria-invalid={validSenha ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setSenhaFocus(true)}
              onBlur={() => setSenhaFocus(false)}
            />
            <p
              id="pwdnote"
              className={
                senhaFocus && !validSenha ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Senha deve conter mínimo de 8 dídgitos, 1 letra maiúscula, 1 letra
              minúscula, 1 número e 1 caractere especial (!@#$%)
            </p>
            <label htmlFor="confirmaSenha">
              Confirmar senha
              <span
                className={
                  validConfirmaSenha && confirmaSenha ? "valid" : "hide"
                }
              >
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span
                className={
                  validConfirmaSenha || !confirmaSenha ? "hide" : "invalid"
                }
              >
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="password"
              id="confirmaSenha"
              onChange={(e) => setConfirmaSenha(e.target.value)}
              required
              aria-invalid={validConfirmaSenha ? "false" : "true"}
              aria-describedby="confirmpwdnote"
              onFocus={() => setConfirmaSenhaFocus(true)}
              onBlur={() => setConfirmaSenhaFocus(false)}
            />
            <p
              id="confirmpwdnote"
              className={
                confirmaSenhaFocus && !validConfirmaSenha
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Os campos de senha devem ser iguais
            </p>
            <button
              disabled={
                !validEmail || !validSenha || !validConfirmaSenha ? true : false
              }
            >
              Criar conta
            </button>
          </form>
          <p>
            Já tem uma conta?
            <span>
              <Link to="/login"> Entre aqui</Link>
            </span>
          </p>
        </main>
      )}
    </>
  );
};

