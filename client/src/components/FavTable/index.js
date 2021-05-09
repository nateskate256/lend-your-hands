import React, {useEffect, useState} from "react";
import { Table } from "react-bootstrap";
// import { get } from "mongoose";
import firebase from "firebase/app";
import API from "../../utils/API"



function FavTable({}) {
    const [pets, setPets]= useState([]);

    useEffect(()=>{
        loadFavs();
    });

    function loadFavs(){
        API.fetchFavs().then(data =>{
            console.log("DATA.DATA")
            console.log(data.data);
            setPets(data.data)
        })
    }

  return (
      <div className="tableCont">
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
        //   console.log("PHOTOS[0]", data.photos[0]);
          return (
            <tr key={data.id}>
              <td>
                {/* <img
                  src={
                    data.photos.length !== 0
                      ? data.photos[0].small
                      : "https://placekitten.com/50/50"
                  }
                  alt={data.name}
                /> */}
              </td>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.breeds.primary}</td>
              <td>{data.gender}</td>
              <td>{data.age}</td>
              <td>{data.status}</td>
              {/* <td>{data.contact.phone}</td> */}
              {/* <td>{data.published_at.slice(0, 10)}</td> */}
              <td>
                {/* <img className="imgStyle"
                  
                  src="/images/paw_print.png"
                //   onClick={() => savePetData(data)}
                ></img> */}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    </div>
  );
}
export default FavTable;
