// import { get } from "mongoose";
import React from "react";
import getAuth from "../../utils/API";

function Table() {
  const token = getAuth();
  console.log(token);
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
        <td>890-234-4567</td>
        <td>May 5, 2021</td>
      </tbody>

      {/* <tbody>
        {props.users.map((data) => {
          return (
            <tr>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.breeds}</td>
             <td>{data.gender}</td>
              <td>{data.age}</td>
              <td><img src= {data.photo.thumbnail} alt="animal"/></td>
               <td>{data.status}</td>
                <td>{data.contact.phone}</td>
              <td>{data.date}</td>
            </tr>
          );
        })}
      </tbody> */}
    </table>
  );
}
export default Table;
