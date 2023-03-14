import React from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
interface LeafletMapComponent {
    // Define any props that your component will take here
}

const LeafletMapComponent: React.FC<LeafletMapComponent> = (props) => {
    // Implement your component logic here
    return (
        // Return your JSX here
        <MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={false} className="w-screen h-screen">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>

            </Marker>

        </MapContainer>
    );
};

export default LeafletMapComponent;