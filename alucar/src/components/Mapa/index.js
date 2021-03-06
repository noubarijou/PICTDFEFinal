import GoogleMapReact from 'google-map-react';
import {LocationPin} from './Pin/'
import './style.scss';

const apikey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export const Mapa = ({location, zoomLevel}) => {
  return (
    <>
    <div className="map">
        <h2 className="map-h2">Onde estamos localizados</h2>
        <div className="google-map">
            <GoogleMapReact bootstrapURLKeys={{key: ''}} defaultCenter={location} defaultZoom={zoomLevel}>
                <LocationPin lat={location.lat} lng={location.lng} text={location.address} />
            </GoogleMapReact>
        </div>
    </div>
    </>
  )
}
