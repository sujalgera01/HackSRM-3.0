import React , {useState, useEffect} from 'react';
import './Map.css' 
import { LayerGroup, MapContainer as LeafletMap, TileLayer, useMapEvents, Marker, Popup, Circle } from "react-leaflet";
// import {showDataonMap} from './util'

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
}
  

function Map({center, zoom}) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
                <LocationMarker />
                <LayerGroup>
                <Circle
                    center={[28.6712, 77.3177]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.6280, 77.2956]}
                    pathOptions={{ fillColor: 'green' }}
                    radius={400}
                />
                <Circle
                    center={[28.6894, 77.2919]}
                    pathOptions={{ fillColor: 'blue' }}
                    radius={400}
                />
                <Circle
                    center={[28.5400, 77.2592]}
                    pathOptions={{ fillColor: 'yellow' }}
                    radius={400}
                />
                <Circle
                    center={[28.6219, 77.0878]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.6219, 77.0878]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.6219, 77.0878]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.6219, 77.0878]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                </LayerGroup>
            </LeafletMap>
        </div>
    );
}

export default Map