const { default: Axios } = require("axios");

const router = require("express").Router();

const getOAuth = function() {
    return fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + process.env.REACT_APP_PETFINDER_API + '&client_secret=' + process.env.REACT_APP_PETFINDER_SECRET,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function(resp) {
        return resp.json();
    }).then(function(data) {
        // Store token data
        token = data.access_token;
        tokenType = data.token_type;
        expires = new Date().getTime() + (data.expires_in * 1000);
    });
};

const res = await Axios.get(`https://api.petfinder.com/v2/animals?location=${postalorstate}`,{headers:{"Authorization":token}});

// Make call if token expired
const makeCall = () => {
    // If current token is invalid, get a new one
    if (!expires || expires - new Date().getTime() < 1) {
        getOAuth().then(function() {
            // use access token
        });
    }
};

makeCall;



module.exports = router;
