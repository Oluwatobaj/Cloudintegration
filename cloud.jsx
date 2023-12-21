// src/GoogleMap.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = ({ center, zoom }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={center}
        zoom={zoom}
      />
    </LoadScript>
  );
};

export default MapContainer;
