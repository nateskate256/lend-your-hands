import React, { useState } from "react";
import CustomNav from "../components/Navbar";
import Jumbo from "../components/Jumbotron";
import firebase from "firebase/app";
import PetContainer from "../components/PetContainer";

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
          <PetContainer />
        </>
      ) : (
        <p></p>
      )}
    </>
  );
}

export default Home;
