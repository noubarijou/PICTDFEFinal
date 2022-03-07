import React from 'react'

export const DetalhesPopUp = props => {
  return (
    <>
    <div className="popup-box">
    <div className="box">
        <span className="close-icon" onClick={props.handleClose}>X FECHAR</span>
        {props.content}
    </div>    
    </div>
    </>
  )
}

