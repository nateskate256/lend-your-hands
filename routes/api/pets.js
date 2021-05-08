const router = require("express").Router();
const axios = require('axios');

// router.get("/", async (req, res) => {
//     try {
//         const response = await axios.get("https://api.petfinder.com/v2/animals?location=arizona&limit=15", { headers: { "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJSdVBPbVpIY3FLWEVGclRmZGwyN25vYjR6VVVFaDhra3BuUFdsRkJRUWRlODlFVmNhMiIsImp0aSI6IjBjODcwOTMyYjNiNGQwMjQ0OGRlNTMxZTAxZTAxMmM4Y2VkNmNjNTE1OWI1ZWNjMjU3MjNjODJmOGVjYzA0MTkwMjQyYjZkNTBjYzcwMzY0IiwiaWF0IjoxNjIwNTA1NTE1LCJuYmYiOjE2MjA1MDU1MTUsImV4cCI6MTYyMDUwOTExNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.kAz0pXRsTdfupqQNh-pYO7i-D4FZvRq7Ll2adi1QwRqIUAPkWdsV6FkSKChnnQOlEk6qS58PKMRD5c-KWYkGcb4wQd0h8Dz6sVWOKLti1uGduZD52p5yrrD09pAqKub8GHV2kJmga6mfpGdMgVc51KI0zQKAFWeq0Gpl0phKp3tdRBlZ7BpRdlwc9SvlknbKp_ej9PSKgMl418A09QaYp8LIfTwgQ7S1sizlbLa0Eq0vuLV9hb6F9nmDCbLxI7IiLJhxEyG9wegtej_XtE92qT3E_196iHrUS90ssNQAR3jFigcFJfYMM40Pw-JTIANXS7Is-x1HkU_ZO-1k8hlUxg ` }})
//         res.json(response.data)
//     } catch (err) {
//         console.log(err)
//     }
// })

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
    client_id: "RuPOmZHcqKXEFrTfdl27nob4zUUEh8kkpnPWlFBQQde89EVca2",
    client_secret: "rzk6a0134syYve69kDPw3zDHJO44db7Bw4BAM5SU",
  })
    console.log(response.data.access_token);
      
        res.json(response.data)
    
     } catch (err) {
        console.log(err)
    }
})
      


module.exports = router;

