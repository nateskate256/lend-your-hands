const router = require("express").Router();
const axios = require('axios');

router.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://api.petfinder.com/v2/animals?location=arizona&limit=15", { headers: { "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJSdVBPbVpIY3FLWEVGclRmZGwyN25vYjR6VVVFaDhra3BuUFdsRkJRUWRlODlFVmNhMiIsImp0aSI6IjEwOTk1NTdlZGM0NWQ0OWM5OWExMzYyYjk0YWRlNGU4MWE4MWM2YWI2NTNjMzM5ZWNlYjA0NmJhNDVlZDU4ODQ2NjY1Y2MwYjg1Njc1NWI3IiwiaWF0IjoxNjIwNTAxNjQ5LCJuYmYiOjE2MjA1MDE2NDksImV4cCI6MTYyMDUwNTI0OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.NPJN_B4WfQA69xhwTXnq9NvZ5Z2i6VnmwV9_roMabxITsl7jft-ercAnI_yrl_HvcB9sH_MjFYO_qzQN8_Y-uxyIb2IdlolFInVDk9RRfLt28w56Z2iHVuqjL8F28zaFbmNfGgN58_sR3mA2ctdf2jrVi5_B6VTxToY6RfgarcneSj4JFgR5LyoYKJrbHJcX40yyghBe6JLZ5S5RjZ3rhHHUqaG4pZK672rgU2ZhbnuOUcTU5V6DmJC0oaXcnQ4Yh0zXgePRhm5_yPH5xfjrSMHjoaqsMAICkJH9__iYSXJt1eHGkP1IZT-WOro_fh6sZPr_yFL6ee3pJ6PvMwdGaw ` }})
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

