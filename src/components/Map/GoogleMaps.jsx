import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

function GoogleMaps() {
  return (
    <div className="App">
      <h1>Google Maps in React</h1>
      <LoadScript
        googleMapsApiKey="AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg" // API key
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMaps;
