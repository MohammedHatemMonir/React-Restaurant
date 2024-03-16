import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSignal } from "@preact/signals-react";

function LeafletMap() {
  const markerPosition = useSignal([51.505, -0.09]);

  const handleMarkerDragEnd = async (event) => {
    const { lat, lng } = event.target.getLatLng();
    markerPosition.value = [lat, lng];
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

  return (
    <div>
      <h1 className="text-center p-2">Leaflet Map</h1>
      <MapContainer
        center={markerPosition.value}
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={markerPosition.value}
          draggable={true}
          eventHandlers={{
            dragend: handleMarkerDragEnd,
          }}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LeafletMap;
