import { Marker, Popup } from 'react-leaflet'
import './pin.scss'
import { Link } from 'react-router-dom'

function Pin({item}) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
        <Popup>
            <div className="popupConatiner">
                <img src={item.img} alt="" />

                <div className="popupDetail">
                <Link to='#'>{item.title}</Link>

                <span className='bedroom'>{item.bedroom} Bedroom</span>
                <h2 className='price'>$ {item.price}</h2>
                </div>
            </div>
        </Popup>
    </Marker>
  )
}

export default Pin