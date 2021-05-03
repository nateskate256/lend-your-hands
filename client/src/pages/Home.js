import React from "react";
import CustomNav from "../components/Navbar";
import Jumbo from "../components/Jumbotron";
import Table from "../components/Table";
import ConfirmationBox from "../components/Modal";

function Home() {
  return (
    <>
    <CustomNav />
    <ConfirmationBox />
    <Jumbo />
    <Table />
    </>
  );
}

export default Home;
