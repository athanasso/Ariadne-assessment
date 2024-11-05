import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { FeatureCollection } from "geojson";
import "leaflet/dist/leaflet.css";
import rawGeoData from "../assets/ariadne_office_geojson.json";

const geoData: FeatureCollection = rawGeoData as FeatureCollection;

const MapDisplay: React.FC = () => {
    const mapCenter: [number, number] = [48.115868, 11.589464];

    return (
        <div className="my-6 border rounded-lg shadow-lg overflow-hidden">
            <MapContainer center={mapCenter} zoom={18} style={{ height: "400px", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <GeoJSON
                    data={geoData}
                    pathOptions={{ color: "blue" }}
                    onEachFeature={(feature, layer) => {
                        if (feature.properties && feature.properties.name) {
                            layer.bindPopup(feature.properties.name);
                        }
                    }}
                />
            </MapContainer>
        </div>
    );
};

export default MapDisplay;
