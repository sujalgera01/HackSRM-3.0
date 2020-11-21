import React, {useState, useEffect} from 'react'
import Map from './Map'
import 'leaflet/dist/leaflet.css'
import './App.css';

function App() {
  const [mapCenter, setMapCenter] = useState({lat: 29.1393, lng: 76.6945})
  const [mapZoom, setMapZoom] = useState(15)

  return (
    <div className="app">
        <Map center={mapCenter} zoom={mapZoom}/>  
    </div>
  );
}

export default App;
