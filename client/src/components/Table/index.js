import React from "react";
import { Table } from "react-bootstrap";

// import { get } from "mongoose";
const style = {
  imageStyle: {
    width: "50px",
    height: "50px",
  },
};

function Petable({ pets }) {
  console.log("PETS IN TABLE: ", pets)
  return (
    <Table striped>
      <thead>
        <tr>
          <th scope="col">Save</th>
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
        {pets.map((data => {
          return (
            <tr>
              <td>
                <img
                  style={style.imageStyle}
                  src="/images/paw.jpeg"
                  // onClick={ }
                ></img>
              </td>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.breeds}</td>
              <td>{data.gender}</td>
              <td>{data.age}</td>
              <td>
                <img src={data.photo.thumbnail} alt="animal" />
              </td>
              <td>{data.status}</td>
              <td>{data.contact.phone}</td>
              <td>{data.date}</td>
            </tr>
          )
        }))}
      </tbody>
    </Table>
  );
}
export default Petable;
