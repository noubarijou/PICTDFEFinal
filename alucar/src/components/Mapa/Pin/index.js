import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export const LocationPin = ({text}) => {
  return (
    <>
    <div className="pin">
      <FontAwesomeIcon icon={faLocationDot} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
    </>
  )
}
