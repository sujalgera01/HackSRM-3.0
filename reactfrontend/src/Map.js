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
                <Circle
                    center={[28.6894, 77.2919]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.438785, 77.046471]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.6539, 77.2712]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[26.9029, 80.9357]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.6415, 77.2951]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.6419, 77.2843]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.6425, 77.2868]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.6386, 77.287]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.6401, 77.2879]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.5734, 77.2326]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.6429, 77.2944]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.6364, 77.2928]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.6589, 77.2321]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.6389, 77.2955]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.7164, 77.3126]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.7268, 77.3252]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.7354, 77.3289]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.7385, 77.3351]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.7486, 77.3659]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.7658, 77.3569]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.7963, 77.3895]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                <Circle
                    center={[28.845, 77.436]}
                    pathOptions={{ fillColor: 'red' }}
                    radius={400}
                />
                </LayerGroup>
            </LeafletMap>
        </div>
    );
}

export default Map