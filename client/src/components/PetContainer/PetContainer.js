import React, { useState } from "react";
import Table from "../Table";
// import GoogleMaps from "../GoogleMap/googlemap";
import API from "../../utils/API";
import Search from "../Search";

function PetContainer() {
  const [pets, setPets] = useState([]);
  const handleSubmit = async (value) => {
    let token = await API.getOAuthToken();
    token = token.data.access_token;
    console.log("TOKEN", token)
    let petdata = await API.getLocalPets(token, value);
    petdata = petdata.data.animals;
    setPets(petdata);
  };
  
  console.log("PETS", pets)
  return (
    <div className="tableCont">
      <Search handleSubmit={handleSubmit} />
      <Table pets={pets} />
      {/* <GoogleMaps pets={pets} /> */}
    </div>
  );
}

export default PetContainer;