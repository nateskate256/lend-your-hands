import axios from "axios";

export default {
  getLocalPets: function () {
    return axios.get("https://api.petfinder.com/v2/animals?location=arizona&limit=10", {headers:{"Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJSdVBPbVpIY3FLWEVGclRmZGwyN25vYjR6VVVFaDhra3BuUFdsRkJRUWRlODlFVmNhMiIsImp0aSI6ImJkNDQ0ZGJlZTJmZDJjOWNmOTRiYWU4ZDRmOGRiNDI1YjE0ZmMyNzBjN2FkNDAxYjg3NzIyOWMxM2M1MzNkMzMwMjBjNThmNDg4Y2UyODdmIiwiaWF0IjoxNjIwMjQ4MDcwLCJuYmYiOjE2MjAyNDgwNzAsImV4cCI6MTYyMDI1MTY3MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.Z9-P8HOJAlDXNatGqBz29NqJFJihRbDQe7xuyYlCF0ySJVMWMhnZxRIzvpg3Sp4cTgkIvp1IxZnvjvzHQ1zi1T-qemvN_qt4nMVbLbI_5FWQl-cqlfnXjZ2dkCGhXz0p_CeVXzHWpkt8AbeopJwZylXEtJPgUsE8WQd_PuumNQvjphMEfzED3mEpVOdmmvvwXKFtn8W_75tfBrQXm3Mp1CXA1SD58YwDF9CwIYtdjRSJ6EUZjS6EFj3nwgWTbp4BR6pTCrM6Ri7idqfR5BCszI11IpQycs_vgItLxrLuqo1PfHf6kevV9TrtbFMgFWbUVMFAvQ-9noFIFC3iG7qYKw"}})
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
};