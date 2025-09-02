import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map({lag, lat}) {
  const position = [lat || 51.505, lag ||-0.09]; // Latitude, Longitude for center
  const zoom = 7;

  return (
    <MapContainer 
      center={position} 
      zoom={zoom} 
      style={{ 
        height: '100%', 
        width: '100%',
        borderTopLeftRadius:'10px',
        borderTopRightRadius:"10px"
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Earthquake Areas
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
