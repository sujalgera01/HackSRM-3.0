import React, {useState, useEffect} from 'react'
import Map from './Map'
import 'leaflet/dist/leaflet.css'
import {MenuItem, FormControl, Select, Card, CardContent, } from "@material-ui/core"
import './App.css';
import Notification from './Notification';
import Form from './Form'; 

function App() {
  const [mapCenter, setMapCenter] = useState({lat: 29.1393, lng: 76.6945})
  const [mapZoom, setMapZoom] = useState(15)  

  return (
    <div className="app">

      <div className="app__left">
        <Map center={mapCenter} zoom={mapZoom}/>  
      </div>
      
      <Card className="app__right">
        <CardContent>
              {/* Notification */}
              <h3 className="changes">Notifications</h3>
              <Notification />
              {/* Form */}
              <h3 className="changes">Forms</h3>
              <Form />
        </CardContent>
      </Card>
      
    </div>
  );
}

export default App;
