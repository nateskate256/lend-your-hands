import React from "react";
import mapStyles from "./mapStyles";
import pawPrintPin from "./icon/pawPrintPin.png";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100vw",
  height: "800px",
};
const options = {
  styles: mapStyles,
  scrollwheel: false,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 40.19792814123298,
  lng: -102.26297777082272,
};
// import Geocode from "react-geocode";

export default function Map({ pets = [] }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_AP_KEY,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  const [selected, setSelected] = React.useState(null);
  if (loadError) return "Error Loading Map";
  if (!isLoaded) return "Loading Map";

  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={5}
        options={options}
        onLoad={onMapLoad}
      >
        {pets.map((data) => {
          return (
            <Marker
              key={data.id}
              draggable={true}
              label={data.name}
              position={center}
              icon={{
                url: pawPrintPin,
              }}
              onClick={() => {
                setSelected(data);
              }}
            >
              {selected ? (
                <InfoWindow
                  onCloseClick={() => {
                    setSelected(null);
                  }}
                >
                  <div className="infoWindow">
                    {" "}
                    <h5>{data.name}</h5>
                    <div>
                      <img
                        className="smallImg"
                        src={
                          data.photos.length !== 0
                            ? data.photos[0].small
                            : "https://placekitten.com/50/50"
                        }
                        alt={data.name}
                      />
                    </div>
                    <h6>{data.breeds.primary}</h6>
                    <h6>
                      {data.contact.phone !== null ? (
                        data.contact.phone
                      ) : (
                        <p>No Phone Provided</p>
                      )}
                    </h6>
                  </div>
                </InfoWindow>
              ) : null}
            </Marker>
          );
        })}
      </GoogleMap>
    </div>
  );
}
