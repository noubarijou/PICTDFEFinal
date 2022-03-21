import "../assets/form.scss";

import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { TextField } from "../../components/TextField";

export const CriarConta = () => {

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Nome obrigatório"),
    lastName: Yup.string().required("Sobrenome obrigatório"),
    email: Yup.string().email("Email inválido [ex: email@email.com]").required("Email obrigatório"),
    password: Yup.string().min(6, "Senha deve conter no mínimo 6 caracteres").required("Senha obrigatória"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Senha não confere").required("Confirmação de senha obrigatória"),
  });

  return (
    <>
      <Helmet>
        <title>AluCar | Criar Conta</title>
      </Helmet>
      <main>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={validationSchema} onSubmit={(values) => {
            setIsSubmitSuccess(true)
          }}
        >
          {isSubmitSuccess ? (navigate('/login')) : (

            <div className="container">
              <h1>Criar Conta</h1>
              <Form method="post">
                <TextField label="Nome" name="firstName" type="text" placeholder="Digite seu nome" required />
                <TextField label="Sobrenome" name="lastName" type="text" placeholder="Digite seu sobrenome" required />
                <TextField label="Email" name="email" type="email" placeholder="Digite seu email" required />
                <TextField label="Senha" name="password" type="password" placeholder="Digite uma senha" required />
                <TextField label="Confirme sua senha" name="confirmPassword" type="password" placeholder="Digite novamente a senha" required />
                <button type="submit" className="btn primary-btn btn-large">Criar Conta</button>
              </Form>
              <p className="criarconta btn-small">
                Já tem conta?{" "}
                <Link className="linklogin" to="/login">
                  Entre por aqui.
                </Link>
              </p>
            </div>
          )}

        </Formik>
      </main>
    </>
  );
};
