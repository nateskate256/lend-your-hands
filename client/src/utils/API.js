import axios from "axios";

export default {
  getLocalPets: function () {
    return axios.get("/api/pets")
  },

  getOAuthToken: function (){
    return axios.get("/api/petstoken")
  }

  // // getOAuthToken: async function () {
  //   try {
  //     // const resp = await axios.post('https://api.petfinder.com/v2/oauth2/token',
  //     //     {params:{
  //     //       grant_type: "client_credentials",
  //     //       // client_id: process.env.REACT_APP_PETFINDER_API,
  //     //       // client_secret: process.env.REACT_APP_PETFINDER_SECRET,
  //     //       client_id: "RuPOmZHcqKXEFrTfdl27nob4zUUEh8kkpnPWlFBQQde89EVca2",
  //     //       client_secret: "rzk6a0134syYve69kDPw3zDHJO44db7Bw4BAM5SU",
  //     //     }},
  //     //     {headers:{
  //     //       "Content-Type":'x-www-form-urlencoded'
  //     //     }}
  //     //   );
  //     const resp = await axios({
  //       url: "https://api.petfinder.com/v2/oauth/token",
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "x-www-form-urlencoded"
  //       },
  //       body: {
  //         client_id: "RuPOmZHcqKXEFrTfdl27nob4zUUEh8kkpnPWlFBQQde89EVca2",
  //         client_secret: "rzk6a0134syYve69kDPw3zDHJO44db7Bw4BAM5SU",
  //         grant_type:"client-credentials"
  //       },
  //       });
  //        let token = resp.access_token;
  //     let tokenType = resp.token_type;
  //     let expires = new Date().getTime() + (resp.expires_in * 1000)

  //     console.log(resp)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

}






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
