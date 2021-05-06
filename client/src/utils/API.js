import axios from "axios";

export default {
  getLocalPets: function () {
    return axios.get("https://api.petfinder.com/v2/animals?location=arizona&limit=10", {headers:{"Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJSdVBPbVpIY3FLWEVGclRmZGwyN25vYjR6VVVFaDhra3BuUFdsRkJRUWRlODlFVmNhMiIsImp0aSI6IjJmZTYyMzNjMWMyNWM0MGY0MTMxMDYwMTk4MzIwNWYxOGZjODNkZDU5NGYzOTFlNjU5YmYzOTNhNDcyOTg3YzI5YjFmM2YxZjM5YjBmZTI3IiwiaWF0IjoxNjIwMjU5MzE5LCJuYmYiOjE2MjAyNTkzMTksImV4cCI6MTYyMDI2MjkxOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.gA9PYap5DxuReYJvG1UKBsm-riuUXnWx_hmqL1abfwW1sXgn2jds9mBKhoyT4Y7QPSWIqUdtIVzJgKCbK18kTnVKoSbDny0FjeJ-9E1nLk07dzK6sORqgQs1qq3M2KDUJ7bDcSF-Mr4IE0MQIuStPEPGfdm9WQffZ31r7f-FxR1YYSA0wRouZpB4msESdL3Il0ihQeLy1XW9B7kr5-NTnO0UpMbfokloGF4IdrDlxNR1tkjxs6C8k2-B5aaMisHRj_ZaP44N9SOeHd1DsziAdy9g6VKgqjv7rMmq1KwdUar7900GPG2K72g4wwoqdTLd6e7nWtQYbUFqBd2nCUlzPA"}})
  },

  getOAuthToken: function () {
    return axios.post('https://api.petfinder.com/v2/oauth2/token', {
        body: 'grant_type=client_credentials&client_id=' + process.env.REACT_APP_PETFINDER_API + '&client_secret=' + process.env.REACT_APP_PETFINDER_SECRET,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function(resp) {
        return resp.json();
    }).then(function(data) {
        // Store token data
        let token = data.access_token;
        let tokenType = data.token_type;
        let expires = new Date().getTime() + (data.expires_in * 1000);
    });
  }
};

 // /*getLocalPets: () => return axios.get('/api/localpets') */






  // getAnimals: function () {
  //   return axios.get("/api/animals");
  // },
  // getAnimals: function (id) {
  //   return axios.get("/api/animals/" + id);
  // },
  // deleteAnimals: function (id) {
  //   return axios.delete("/api/animals/" + id);
  // },
  // saveAnimals: function (animalsData) {
  //   return axios.post("/api/animals", animalsData);
  // },
