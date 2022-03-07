import "../form.scss"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { TextField } from "../../components/TextField";

export const Ajuda = () => {

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Nome obrigatório"),
    lastName: Yup.string().required("Sobrenome obrigatório"),
    email: Yup.string().email("Email inválido [ex: email@email.com]").required("Email obrigatório"),
    message: Yup.string().required("Escreva sua mensagem")
  });

  return (
    <>
      <Helmet>
        <title>AluCar | Ajuda</title>
      </Helmet>
      <main>
        <Formik
          initialValues={{
            name: '',
            lastname: '',
            email: '',
            message: '',
          }}
          validationSchema={validationSchema} onSubmit={(values) => {
            setIsSubmitSuccess(true)
          }}
        >
          {isSubmitSuccess ? (navigate('/login')) : (

            <div className="container">
              <h1>Entre em contato</h1>
              <Form>
                <TextField label="Nome" name="firstName" type="text" placeholder="Digite seu nome" required />
                <TextField label="Sobrenome" name="lastName" type="text" placeholder="Digite seu sobrenome" required />
                <TextField label="Email" name="email" type="email" placeholder="Digite seu email" required />
                <div>
                  <label htmlFor="message">Mensagem</label>
                  <Field as="textarea" className="form__input" name="message" rows={5} placeholder="Digite seu mensagem"  autoComplete="off" />
                  <ErrorMessage component="p" name="message" className="error body-small" />
                </div>
                <button type="submit" className="btn primary-btn btn-large">Enviar</button>
              </Form>
            </div>
          )}

        </Formik>
      </main>
    </>
  );
};
