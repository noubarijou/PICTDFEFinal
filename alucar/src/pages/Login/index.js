import { useState, useRef, useEffect} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
/* import AuthContext from "../../context/AuthProvider";
 */
/* import './style.scss'; */


export const Login = () => {
  const { auth, setAuth } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  
  const from = location.state?.from?.pathname || "/";
  
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState();

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
      console.log(response);
      const accessToken = response?.data;
      // const roles = response?.data.funcao;   
      setAuth({ email, senha, accessToken });
      setEmail("");
      setSenha("");
      navigate(from, {replace: true});
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Sem resposta do servidor");
      } else if (err.response?.status === 400) {
        setErrMsg("Email ou senha não informados");
      } else if (err.response?.status === 401) {
        setErrMsg("Email ou senha incorretos");
      } else {
        setErrMsg("Infelizmente, você não pôde efetuar login. Por favor, tente novamente mais tarde.");
      }
      errRef.current.focus();
    }
    setSuccess(true);
    console.log(success);
  };

  return (
    <>
      <Helmet>
        <title>Alucar | Entrar</title>
      </Helmet>
        <main>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Entrar na conta</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              onChange={(e) => setSenha(e.target.value)}
              required
              value={senha}
            />
            <button>Entrar</button>
          </form>
          <p>
            Não tem uma conta? Crie uma <Link to="/criarconta">aqui.</Link>{" "}
          </p>
        </main>
        </>
  );
};
