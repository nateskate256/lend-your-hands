const router = require("express").Router();
const axios = require('axios');

router.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://api.petfinder.com/v2/animals?location=arizona&limit=15", { headers: { "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJSdVBPbVpIY3FLWEVGclRmZGwyN25vYjR6VVVFaDhra3BuUFdsRkJRUWRlODlFVmNhMiIsImp0aSI6IjRjMWRhODk0YTU3MWI1Njg4NzE5ODkzZGQwNGM3Nzk3ZDc3M2UwYjgyZjIwYjI0NDFiZDQ5NGM4Y2M0YzcxYTI5ODZjOTA4ZjJlN2U1YzBlIiwiaWF0IjoxNjIwNDIyMjMzLCJuYmYiOjE2MjA0MjIyMzMsImV4cCI6MTYyMDQyNTgzMywic3ViIjoiIiwic2NvcGVzIjpbXX0.ER5YTPCayxGIWty9NxlBfZVwKthkz9OIdd8IoyasA_pzruv4-cPAhNYBrEkfEJjoCPvFhyVORl21haTc3iPGC864lYcNHqBoOeAIMcMAmEbi1aNpeEHWr5JJwz5Q9fXqzCRQ2wtzZDDbjI4hRNjC8_mlwYJf69WzqxxuXoRNiiOklZ5X2omZJrFz1iba1V8pBCXw_gcqAQjoFFklPLcWhOurskkapW-Oz9WScrouOszOxpjjZU009MWQaKCF6urmFQbtK0xN0IL4tjMU3YOp2K4E_39A_ziFBRyJts66TPJvAViEks527u88vwozRGpmzirThkK4f7jImV6HFmdq6g ` }})
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

