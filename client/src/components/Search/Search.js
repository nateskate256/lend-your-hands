import React from "react";
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

function Search({ handleSubmit }) {
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
    debounce: 300,
  });

  console.log(ready);

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
          // value={location}
          onChange={handleInput}
          disabled={false} // ready state is inconsistent hard coded to true
          placeholder="Search your location"
        />
        <button onClick={() => handleSubmit(value)}>Find Pets Around Me</button>
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

export default Search;