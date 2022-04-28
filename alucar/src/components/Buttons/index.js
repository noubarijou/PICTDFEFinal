import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/* Botão padrão para submit básico */
export const ButtonSubmit = ({ children, classes }) => {
  
  return (
    <button type="submit" className={`btn btn-large ${classes}`} >{children}</button>
  )
}

/* Botão sem submit (preventDefault) somente para redirecionar para outra página */
export const ButtonToClick = ({ children, urlTo, classes }) => {
  const navigation = useNavigate();
  const [ navigate, setNavigate] = useState();

  
  useEffect(()=>{
    setNavigate(urlTo)
  },[urlTo])
  
  const Click = (e) => {
    e.preventDefault()
    navigation(navigate)
  }

  return (
    <button className={`btn btn-large ${classes}`} onClick={((e)=>{Click(e)})}>{children}</button>
  )
}
export const ButtonToOrder = ({ children, urlTo, classes }) => {
  const navigation = useNavigate();
  const [ navigate, setNavigate] = useState();
  const [success, setSuccess] = useState();

  
  useEffect(()=>{
    setNavigate(urlTo)
  },[urlTo])
  
  const Click = (e) => {
    e.preventDefault();
    navigation(navigate);
    setSuccess(true);
    localStorage.setItem('success', true);
  }

  return (
    <button className={`btn btn-large ${classes}`} onClick={((e)=>{Click(e)})}>{children}</button>
  )
}

/* NÃO TESTADO AINDA */
/* Abrir e fechar modal nas páginas, sem submit (preventDefault) */
export const ButtonHandleClose = ({ classes, children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = (e) => {
    e.preventDefault()
    setShowModal(!showModal);
  }

  return (
    <button className={`btn btn-large ${classes}`} onClick={((e) => { handleClose(e) })}>{children}</button>
  )
}
