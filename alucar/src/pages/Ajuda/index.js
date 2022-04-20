import '../assets/form.scss';
import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

/* FontAwesome */
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const Ajuda = () => {
    const sucesso = 'https://alucar-t1-g4.s3.amazonaws.com/success-vector.svg';

    const [success, setSuccess] = useState();

    const emailRef = useRef();
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");

    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(true);

        setEmail("");
        setNome("");
        setSobrenome("");
        setMensagem("");
    };

    return (
        <>
            <Helmet>
                <title>Alucar | Ajuda</title>
            </Helmet>
            {success ? (
                <article className="cadastro__container">
                    <figure>
                        <img src={sucesso} alt="Sucesso" className="sucesso" />
                    </figure>
                    <h1 className="form__title">Mensagem enviada com sucesso!</h1>
                    <Link to="/" className="btn-cadastro btn-large primary-btn">Home</Link>
                </article>
            ) : (
                <article className="login__container">
                    <h1 className="form__title">Entre em contato</h1>
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
                        <label htmlFor="email" className="form__label">Email</label>
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
                        <label className="form__label" htmlFor="mensagem">Mensagem</label>
                        <textarea
                            type="text"
                            id="mensagem"
                            className='textarea'
                            onChange={(e) => setMensagem(e.target.value)}
                            required
                            value={mensagem}
                        />
                        <button className="btn primary-btn btn-large">Enviar</button>
                    </form>

                </article>
            )}
        </>
    )
}