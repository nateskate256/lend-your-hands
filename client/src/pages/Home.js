import React from "react";
import CustomNav from "../components/Navbar";
import Jumbo from "../components/Jumbotron";
import Table from "../components/Table";
// import Map from "../components/Modal";

function Home() {
  return (
    <>
    <CustomNav />
    <Jumbo />
    <Table />
    {/* <Map /> */}
    </>
  );
}

export default Home;
