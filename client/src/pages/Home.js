import React from "react";
import CustomNav from "../components/Navbar";
import Jumbo from "../components/Jumbotron";
import Table from "../components/Table";
import GoogleMaps from "../components/GoogleMap/googlemap";

function Home() {
  return (
    <>
      <CustomNav />
      <Jumbo />
      <Table />
      <GoogleMaps />
    </>
  );
}

export default Home;
