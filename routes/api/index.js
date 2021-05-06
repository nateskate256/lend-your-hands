const { default: Axios } = require("axios");
import { useState } from "react";

const router = require("express").Router();

state = { location };
const [petData, setpetData] = useState("");
let token,
  tokenType,
  expires = "";
const location = this.state.location;

const getOAuth = async () => {
  try {
      const headers = {"Content-Type": "application/x-www-form-urlencoded"}
      const data = JSON.stringify({
         grant_type: "client_credentials",
            client_id: process.env.REACT_APP_PETFINDER_API,
            client_secret: process.env.REACT_APP_PETFINDER_SECRET,  
      })
    const getToken = await Axios.post(
      "https://api.petfinder.com/v2/oauth2/token",data,
      
        //{ body: JSON.stringify({
        //   grant_type: "client_credentials",
        //   client_id: process.env.REACT_APP_PETFINDER_API,
        //   client_secret: process.env.REACT_APP_PETFINDER_SECRET,
        // }),
        // headers: {
        //     "Content-Type": "application/x-www-form-urlencoded",
        //   },}
      { headers:headers}
    );
    getToken = getToken.json();
    // Store token data
    token = getToken.access_token;
    tokenType = getToken.token_type;
    expires = new Date().getTime() + getToken.expires_in * 1000;
  } catch (err) {
    console.log(err);
  }
};

const getPetData = async () => {
  const response = await Axios.get(
    `https://api.petfinder.com/v2/animals?location=${location}&limit=50`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  console.log(response);
  setpetData(response.data);
};

// Make call if token expired
const makeCall = async () => {
  // If current token is invalid, get a new
  await getOAuth();
  getPetData();
};

makeCall();

module.exports = router;
