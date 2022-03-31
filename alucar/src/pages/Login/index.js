import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "../../components/TextField";

export const Login = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState();

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email inválido [ex: email@email.com]")
      .required("Email obrigatório"),
    password: Yup.string()
      .min(6, "Senha deve conter no mínimo 6 caracteres")
      .required("Senha obrigatória"),
  });
  const credentials = require("../../assets/user.json");
  console.log(credentials)
  
  return (
    <>
      <Helmet>
        <title>AluCar | Login</title>
      </Helmet>
      <main>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values)
            localStorage.setItem('credenciais', JSON.stringify(values));
            const info = localStorage.getItem('credenciais');
            console.log(info.email)
            
            if ((
              info.email !== credentials.username &&
              info.password !== credentials.password
            ) || info.email !== credentials.username ||
              info.password !== credentials.password
            )
             {
              setIsSubmitSuccess(false);
              alert("Usuário ou senha inválidos");
            } else {
              setIsSubmitSuccess(true);
            }
          }}
        >
          {isSubmitSuccess ? (
            navigate("/")
          ) : (
            <div className="container">
              <h1>Entrar na sua conta</h1>
              {}
              <Form>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Digite seu email"
                  required
                />
                <TextField
                  label="Senha"
                  name="password"
                  type="password"
                  placeholder="Digite uma senha"
                  required
                />
                <button type="submit" className="btn primary-btn btn-large">
                  Entrar
                </button>
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
