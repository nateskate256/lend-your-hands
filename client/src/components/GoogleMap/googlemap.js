import React from "react";
import mapStyles from "./mapStyles";
import API from "../../utils/API"

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import pawPrintPin from "../GoogleMap/icon/pawPrintPin.png";
import dogImg from "../GoogleMap/icon/Dog.jpeg";
const styles = {
  img: {
    width: "200px",
  },
};
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
  lat: 33.43909225753613,
  lng: -112.0763359855901,
};
const libraries = ["places"];
export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_AP_KEY,
    libraries,
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

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(13);
  }, []);
  if (loadError) return "Error Loading Map";
  if (!isLoaded) return "Loading Map";
  return (
    <div className="map">
      <Search />
      {/* panTo={panTo} */}
      <Locate />
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
              <h6>Animal needs to be Rescued</h6>
              <p> Name:</p>
              <p> Breed:</p>
              <img src={dogImg} style={styles.img} alt="dog" />
              <p>Post Created {formatRelative(selected.time, new Date())} </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

 const HandleSubmit= async() =>{
   console.log("clicked!!!")
let token = await API.getOAuthToken();
token = token.data.access_token
let petdata = await API.getLocalPets(token);
 petdata = petdata.data.animals
console.log("OAUTHTOKEN")
console.log(token);
console.log("PETDATA");
console.log(petdata);
}
// function getPosition(){
//   () => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         panTo({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//       },
//       () => null
//     );
//   }
// }

function Locate() {
  return (
    <button
      onClick={HandleSubmit}
    >
      Find Pets Around Me
    </button>
  );
}
function Search() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 33.43909225753613, lng: () => -112.0763359855901 },
      radius: 1000 * 1000,
    },
  });
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            // panTo({ lat, lng });
            console.log(lat, lng);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
