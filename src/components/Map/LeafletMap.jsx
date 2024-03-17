import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSignal } from "@preact/signals-react";
import L from "leaflet";

// Import marker icon
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Customize marker icon
const customMarkerIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function LeafletMap() {

  const isLoading = useSignal(true);
  const userLocation = useSignal(null);

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        userLocation.value = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        isLoading.value = false;
      } catch (error) {
        console.error("Error getting user location:", error);
        isLoading.value = false;
      }
    };

    fetchUserLocation();
  }, []);

  // Default map center and zoom level
  const defaultCenter = [51.505, -0.09];
  const defaultZoom = 14;

  const handleMarkerDragEnd = async (event) => {
    const { lat, lng } = event.target.getLatLng();
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      const data = await response.json();
      console.log("New marker position:", [lat, lng]);
      console.log("New location:", data.display_name);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  const marker = (
    <Marker
      position={userLocation.value || defaultCenter}
      icon={customMarkerIcon}
      draggable={true}
      eventHandlers={{
        dragend: handleMarkerDragEnd,
      }}
    >
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );

  return (
    <div>
      <h1 className="text-center font-weight-bold p-2">Leaflet Map</h1>
      {isLoading.value ? (
        <p>Loading user location...</p>
      ) : (
        <MapContainer
          center={userLocation.value || defaultCenter}
          zoom={userLocation.value ? defaultZoom : 3}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {marker}
        </MapContainer>
      )}
    </div>
  );
}

export default LeafletMap;
