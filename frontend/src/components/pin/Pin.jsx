import { Link } from 'react-router-dom';
import './Pin.scss';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Define default icon
const DefaultIcon = L.icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'), // Ensure path is correct
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'), // Shadow image path
});
const Pin = ({item}) =>{
    return(
        <Marker position={[item.latitude, item.longitude]} icon={DefaultIcon}>
          <Popup>
            <div className="popupContainer">
                <img src={item.img} alt=''/>
                <div className="textContainer">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                    <span>{item.bedroom} bedroom</span>
                    <b>FCFA {item.price}</b>
                </div>
            </div>
          </Popup>
        </Marker>
    )
}

export default Pin;