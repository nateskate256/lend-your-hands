const router = require("express").Router();
const axios = require('axios');

router.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://api.petfinder.com/v2/animals?location=arizona&limit=15", { headers: { "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJSdVBPbVpIY3FLWEVGclRmZGwyN25vYjR6VVVFaDhra3BuUFdsRkJRUWRlODlFVmNhMiIsImp0aSI6IjUwMzMyZTU3ODc2ZWFiMDgwYWY0YjdmOWQyYjZhNjE4YTAwZTA0ZmZiNWFhMWFhZmUyN2RiZTc3OTAyOTc1NGMwZDI5NzBiYTY4MDUyNTRlIiwiaWF0IjoxNjIwMzQwNDQ0LCJuYmYiOjE2MjAzNDA0NDQsImV4cCI6MTYyMDM0NDA0NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.ITmje9Db0LfeqFw8mrIPYBs1Ztjdv2XKXb7EqpXFOFH0O80Tkm1lwxJ567NcjBXNHcuYEpPKCXWze-ADsycmj9Hez6VYsRkFRSPSitR9cFeE8F5VReTIK6GANZmhx1mYMfheTLe0_uFTakPP7HamSsfr11h75ygPxzVsa1DMENxsCqEzZo42tDQDtW4XNyoDIO0KFrFfjiQ-wNbMMyZR9Tpl8c5XHxsYPNPdMBWmueBYzo09SCE8LHB-CWAVbtqtdbmzDJt2Fyf1Xf6KFs267vMvE4Loc_ylsVNrAyVbiJ1rY1LWkwmryTkCg9ZeMGnri2w-6WGiU9iLLB_ipTuEOw" } })
        res.json(response.data)
    } catch (err) {
        console.log(err)
    }
})

router.get('/token', async (req, res) => {
    try {
        const response = await axios({

            url: "https://api.petfinder.com/v2/oauth/token",
            method: "POST",
            headers: {
                "Content-Type": "x-www-form-urlencoded"
            },
            body: {
                client_id: "RuPOmZHcqKXEFrTfdl27nob4zUUEh8kkpnPWlFBQQde89EVca2",
                client_secret: "rzk6a0134syYve69kDPw3zDHJO44db7Bw4BAM5SU",
                grant_type: "client_credentials"
            },
        });
        // let token = response.access_token;
        // let tokenType = response.token_type;
        // let expires = new Date().getTime() + (response.expires_in * 1000)
        res.json(response.data.access_token)
    } catch (err) {
        console.log(err)
    }
})
      


module.exports = router;

// const { default: Axios } = require("axios");
// import { useState } from "react";

// const router = require("express").Router();

// state = { location };
// const [petData, setpetData] = useState("");
// let token,
//   tokenType,
//   expires = "";
// const location = this.state.location;

// const getOAuth = async () => {
//   try {
//     const getToken = await Axios.post(
//       "https://api.petfinder.com/v2/oauth2/token",
//       {
//         method: "POST",
//         body: JSON.stringify({
//           grant_type: "client_credentials",
//           client_id: process.env.REACT_APP_PETFINDER_API,
//           client_secret: process.env.REACT_APP_PETFINDER_SECRET,
//         }),
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//       }
//     );
//     getToken = getToken.json();
//     // Store token data
//     token = getToken.access_token;
//     tokenType = getToken.token_type;
//     expires = new Date().getTime() + getToken.expires_in * 1000;
//   } catch (err) {
//     console.log(err);
//   }
// };

// const getPetData = async () => {
//   const response = await Axios.get(
//     `https://api.petfinder.com/v2/animals?location=${location}&limit=50`,
//     { headers: { Authorization: `Bearer ${token}` } }
//   );
//   console.log(response);
//   setpetData(response.data);
// };

// // Make call if token expired
// const makeCall = async () => {
//   // If current token is invalid, get a new
//   await getOAuth();
//   getPetData();
// };

// makeCall();


