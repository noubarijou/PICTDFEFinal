import "../form.scss";
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
            setIsSubmitSuccess(true)
          }}
        >
          {isSubmitSuccess ? (navigate('/login')) : (

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
