const router = require("express").Router();
const axios = require('axios');

router.get("/", async (req, res) => {
    console.log("REQUEST BODY: ",req.query)
   
    try {
        const response = await axios.get(`https://api.petfinder.com/v2/animals?location=${req.query.location}&limit=20`, { headers: { "Authorization": `Bearer ${req.query.token} ` }})
        res.json(response.data)
    } catch (err) {
        console.log(err)
    }
})

router.get('/token', async (req, res) => {
    try {

     const response = await axios
  .post("https://api.petfinder.com/v2/oauth2/token", {
    grant_type: "client_credentials",
    // client_id: "RuPOmZHcqKXEFrTfdl27nob4zUUEh8kkpnPWlFBQQde89EVca2",
    // client_secret: "rzk6a0134syYve69kDPw3zDHJO44db7Bw4BAM5SU",
    client_id: process.env.REACT_APP_PETFINDER_API,
    client_secret: process.env.REACT_APP_PETFINDER_SECRET
  })
    console.log(response.data.access_token);
      
        res.json(response.data)
    
     } catch (err) {
        console.log(err)
    }
})
      


module.exports = router;

