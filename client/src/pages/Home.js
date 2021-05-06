import React, { useState } from "react";
import CustomNav from "../components/Navbar";
import Jumbo from "../components/Jumbotron";
import Table from "../components/Table";
import GoogleMaps from "../components/GoogleMap/googlemap";
import firebase from "firebase/app";


function Home() {
  const [isLoggedin, setIsLoggedIn] = React.useState(false);
  firebase.auth().onAuthStateChanged(function (user) {
    setIsLoggedIn(!!user);
  });

  return (
    <>
      <CustomNav />
      <Jumbo />
      {isLoggedin ? (
        <>
          <Table />
          <GoogleMaps />
        </>
      ) : (
        <p></p>
      )}
    </>
  );
}

export default Home;
