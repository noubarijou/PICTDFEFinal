import React from 'react'
import './style.scss'

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarBurst } from "@fortawesome/free-solid-svg-icons"

export const NotFound = () => {
    return (
        <main>
            <div className='notFound__container'>
                <FontAwesomeIcon icon={faCarBurst} size="10x" className='notFound__icon'/>
                <h2 className='notFound__message'>Sorry page Not Found</h2>
            </div>
        </main>
    )
}
