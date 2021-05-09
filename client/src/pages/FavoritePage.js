import React, { useState } from "react";
import CustomNav from "../components/Navbar";
import FavJumbo from "../components/FavoriteJumbo";
import firebase from "firebase/app";
import FavTable from "../components/FavTable";


function Favorite() {
    const [isLoggedin, setIsLoggedIn] = React.useState(false);
    firebase.auth().onAuthStateChanged(function (user) {
      setIsLoggedIn(!!user);
    });
  
    return (
      <>
        <CustomNav />
        <FavJumbo />
        {isLoggedin ? (
          <>
            <FavTable />
          </>
        ) : (
          <p></p>
        )}
      </>
    );
  }
  
  export default Favorite;