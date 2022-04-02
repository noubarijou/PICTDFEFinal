import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ButtonSubmit = ({ children, classes }) => {
  
  return (
    <button type="submit" className={`btn btn-large ${classes}`} >{children}</button>
  )
}

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
