import React, { useState, useRef, useEffect, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import {useAxios} from '../../hooks/useAxios';
import AuthContext from '../../context/AuthProvider';
import axios from '../../services/api';
const LOGIN_URL = '/clientes/validarSenha';
export const Teste = () => {
  const {setAuth} = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({user, pwd}),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        });
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({user, pwd, roles, accessToken});
      setUser('');
      setPwd('');
      setSuccess(true);
    }catch (err) {
      if (!err.response) {
      setErrMsg('Erro de conexão com o servidor');
    } else if (err.response?.status === 400) {
      setErrMsg('Usuário ou senha não recebidos');
    } else if (err.response?.status === 401) {
      setErrMsg('Não autorizado');
    } else {
      setErrMsg('Lojin falhou');
    }
    errRef.current.focus();
  }
    

  }
  return (
    <>
      <Helmet>
        <title>AluCar | Teste</title>
      </Helmet>
      <main>
        
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" ref={userRef} onChange={(e) => setUser(e.target.value)} value={user} autoComplete="off" required/>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={(e) => setPwd(e.target.value)} value={pwd} autoComplete="off" required/>
          <button>Sign in</button>
        </form>
        <p className="criarconta btn-small">
                Não tem conta?{" "}
                <Link className="linkcriarconta" to="/criarconta">
                  Crie uma aqui.
                </Link>
              </p>
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      </main>
      </>
  );
};