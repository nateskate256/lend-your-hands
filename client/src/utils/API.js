import axios from "axios";

const API = {
  getLocalPets: function (token, value) {
    return axios.get("/api/pets", {params: { token: token, location: value}})
  },

  getOAuthToken: function (){
    return axios.get("/api/pets/token")
  },

  fetchFavs: function(){
    return axios.get("/api/favorites")
  },

  addFav: function (body){
    return axios.post("api/favorites")
  }



}
export default API;

//   // getAnimals: function () {
//   //   return axios.get("/api/animals");
//   // },
//   // getAnimals: function (id) {
//   //   return axios.get("/api/animals/" + id);
//   // },
//   // deleteAnimals: function (id) {
//   //   return axios.delete("/api/animals/" + id);
//   // },
//   // saveAnimals: function (animalsData) {
//   //   return axios.post("/api/animals", animalsData);
//   // },