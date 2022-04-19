import React from 'react'
import './style.scss'

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faCarCrash}  from "@fortawesome/free-solid-svg-icons"

export const NotFound = () => {
    return (
        <main>
            <div className='notFound__container'>
                <FontAwesomeIcon icon={faCarCrash} size="10x" className='notFound__icon'/>
                <h2 className='notFound__message'>Página não encontrada</h2>
            </div>
        </main>
    )
}
