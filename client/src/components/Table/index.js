// import { get } from "mongoose";
import React from "react";
// import getOAuth from "../../utils/API";

function Table() {
  // const {petdata} = this.state;
  // const token = getAuth();
  // console.log(token);
  // const token = getOAuth();
  // console.log(token);
  return (
    <table className="table striped-table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Breed</th>
          <th scope="col">Gender</th>
          <th scope="col">Age</th>
          <th scope="col">Photo</th>
          <th scope="col">Status</th>
          <th scope="col">Phone</th>
          <th scope="col">Date</th>
        </tr>
      </thead>

      <tbody>
        <td>Spot</td>
        <td>Cat</td>
        <td>American shorhair</td>
        <td>Male</td>
        <td>2 years</td>
        <td>photo</td>
        <td>adoptable</td>
        <td>890-234-4567</td>
        <td>May 5, 2021</td>
      </tbody>

      {/* <tbody>
        {pets.map((pet) => {
          return (
            <tr>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td>{pet.breeds}</td>
             <td>{pet.gender}</td>
              <td>{pet.age}</td>
              <td><img src= {pet.photo.thumbnail} alt="animal"/></td>
               <td>{pet.status}</td>
                <td>{pet.contact.phone}</td>
              <td>{pet.date}</td>
            </tr>
          );
        })}
      </tbody> */}
    </table>
  );
}
export default Table;
