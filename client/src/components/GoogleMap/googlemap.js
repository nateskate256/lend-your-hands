import React from "react";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

import pawPrintPin from "../GoogleMap/icon/pawPrintPin.png";

const mapContainerStyle = {
  width: "100vw",
  height: "800px",
};
const options = {
  scrollwheel: false,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 33.43909225753613,
  lng: -112.0763359855901,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_AP_KEY,
  });
  const [selected, setSelected] = React.useState(null);
  const [markers, setMarkers] = React.useState([]);
  const onMapClick = React.useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error Loading Map";
  if (!isLoaded) return "Loading Map";
  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            icon={{
              url: pawPrintPin,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(32, -5),
            }}
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Animal needs to be Rescued</h2>
              <h4>UserName: Cwinslow7 </h4>
              <p>Post Created {formatRelative(selected.time, new Date())} </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
