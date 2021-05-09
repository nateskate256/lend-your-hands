import React from "react";
import { Table } from "react-bootstrap";
// import { get } from "mongoose";
import firebase from "firebase/app";

function savePetData(data) {
  const body = {
    uuid: firebase.auth().currentUser.uid,
    pet: {
      id: data.id,
      name: data.name,
      type: data.type,
      breeds: data.breeds.primary,
      gender: data.gender,
      age: data.age,
      photo: data.photos[0].small,
      status: data.status,

      contact: data.contact.phone,
      date: data.published_at.slice(0, 10),
    },
  };

  console.log(body);
}
function Petable({ pets = [] }) {
  console.log("PETS IN TABLE: ", pets);
  return (
    <Table className="table" striped>
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Breed</th>
          <th scope="col">Gender</th>
          <th scope="col">Age</th>
          <th scope="col">Status</th>
          <th scope="col">Phone</th>
          <th scope="col">Date Posted</th>
          <th scope="col">Save</th>
        </tr>
      </thead>

      <tbody>
        {pets.map((data) => {
          console.log("DATA", data);
          console.log("DATA.NAME", data.name);
          console.log("PHOTOS[0]", data.photos[0]);
          return (
            <tr key={data.id}>
              <td>
                <img
                  src={
                    data.photos.length !== 0
                      ? data.photos[0].small
                      : "https://placekitten.com/50/50"
                  }
                  alt={data.name}
                />
              </td>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.breeds.primary}</td>
              <td>{data.gender}</td>
              <td>{data.age}</td>
              <td>{data.status}</td>
              <td>
                {" "}
                {data.contact.phone !== null ? (
                  data.contact.phone
                ) : (
                  <p>No Phone Provided</p>
                )}
              </td>
              <td>{data.published_at.slice(0, 10)}</td>
              <td>
                <img
                  className="imgStyle"
                  src="/images/paw_print.png"
                  onClick={() => savePetData(data)}
                ></img>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
export default Petable;
