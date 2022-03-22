import "../assets/form.scss";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { TextField } from "../../components/TextField";

export const Login = () => {

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Email inválido [ex: email@email.com]").required("Email obrigatório"),
    password: Yup.string().min(6, "Senha deve conter no mínimo 6 caracteres").required("Senha obrigatória"),
  });
  const credentials = require("../../assets/user.json")
    
  return (
    <>
      <Helmet>
        <title>AluCar | Login</title>
      </Helmet>
      <main>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema} onSubmit={(values) => {
            localStorage.setItem('credenciais', JSON.stringify(values));
            const info = localStorage.getItem('credenciais');
            if (info.email === credentials.email && info.password === credentials.password) {
              console.log(info.email);
              console.log(credentials.email);
              setIsSubmitSuccess(true)
          
      }
          }}
        >
          
          {isSubmitSuccess ? (navigate('/')) : (

            <div className="container">
              <h1>Entrar na sua conta</h1>
              <Form>
                <TextField label="Email" name="email" type="email" placeholder="Digite seu email" required />
                <TextField label="Senha" name="password" type="password" placeholder="Digite uma senha" required />
                <button type="submit" className="btn primary-btn btn-large">Entrar</button>
              </Form>
              <p className="criarconta btn-small">
                Não tem conta?{" "}
                <Link className="linkcriarconta" to="/criarconta">
                  Crie uma aqui.
                </Link>
              </p>
            </div>
          )}

        </Formik>
      </main>
    </>
  );
};
/* import "../assets/form.scss";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
 import { LoginService } from '../../services/login'; 
import { Form, useFormik } from "formik";


export const Login = () => {

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const navigate = useNavigate();


  
  const formik = useFormik({
    initialValues: {
      email: '',
      
    },
    
    onSubmit: values => {
      localStorage.setItem('credenciais', JSON.stringify(values));
      if (info.email === credentials.email && info.password === credentials.password) {
        setIsSubmitSuccess(true)
      }
      
      
    },
  });
    const credentials = require("../../assets/user.json")
    const info = localStorage.getItem('credenciais');
      console.log(info)
  return (
    <>
      <Helmet>
        <title>AluCar | Login</title>
      </Helmet>
      <main>
          {isSubmitSuccess ? (navigate('/')) : (

            <div className="container">
              <h1>Entrar na sua conta</h1>
              <form method="post" onSubmit={formik.handleSubmit}>

                <input
                  id="email" 
                  name="email"
                  type="email"
                  placeholder="Digite seu email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  
                />

                <input
                  id="password"
                  label="Senha" 
                  name="password" 
                  type="password" 
                  placeholder="Digite uma senha" 
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />

                <button type="submit" className="btn primary-btn btn-large">Entrar</button>
              </form>
              <p className="criarconta btn-small">
                Não tem conta?{" "}
                <Link className="linkcriarconta" to="/criarconta">
                  Crie uma aqui.
                </Link>
              </p>
            </div>
          )}
      </main>
    </>
  );
}; */