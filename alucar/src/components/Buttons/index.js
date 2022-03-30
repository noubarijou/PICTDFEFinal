import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ButtonSubmit = ({children, urlTo, classes}) => {

  return (
    <button type="submit" className={`btn btn-large ${classes}`} onSubmit={useNavigate(urlTo)}>{children}</button>
  )
}
