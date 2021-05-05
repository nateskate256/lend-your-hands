const { default: Axios } = require("axios");

const router = require("express").Router();

state= {location};

let token, tokenType, expires = "" ;
 const location = this.state.location;

const getOAuth = function() {
    return Axios.post('https://api.petfinder.com/v2/oauth2/token', {
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


const getPetData = async()=> {
    const response = await Axios.get(`https://api.petfinder.com/v2/animals?location=${location}&limit=50`,{headers:{"Authorization":token}})
    console.log(response)
}

// Make call if token expired
const makeCall = async() => {
    // If current token is invalid, get a new 
      await  getOAuth();
      getPetData();
};

makeCall();



module.exports = router;
