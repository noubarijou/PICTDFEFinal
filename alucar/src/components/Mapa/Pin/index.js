import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'

export const LocationPin = ({text}) => {
  return (
    <>
    <div className="pin">
      <FontAwesomeIcon icon={faLocationPin} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
    </>
  )
}
