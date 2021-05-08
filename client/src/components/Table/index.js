import React from "react";
import { Table } from "react-bootstrap";
// import { get } from "mongoose";

const style = {
  imageStyle: {
    width: "50px",
    height: "50px",
  },
};

function Petable({ pets = [] }) {
  console.log("PETS IN TABLE: ", pets);
  return (
    <Table striped>
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
          console.log("DATA", data)
          console.log("DATA.NAME", data.name)
          console.log("PHOTOS[0]", data.photos[0])
          return (
            <tr>
              <td>
                <img src={data.photos.small} alt={data.name} />
              </td>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.breeds.primary}</td>
              <td>{data.gender}</td>
              <td>{data.age}</td>
              <td>{data.status}</td>
              <td>{data.contact.phone}</td>
              <td>{data.published_at.slice(0,10)}</td>
              <td>
                <img
                  style={style.imageStyle}
                  src="/images/paw.jpeg"
                  // onClick={}
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
