import React from "react";
import Nav from "./components/Navbar";
import Jumbo from "./components/Jumbotron";
import Table from "./components/Table";
import ConfirmationBox from "./components/Modal";

function App() {
  return (
    <>
      <Nav />
      <Jumbo />
      <Table />
      <ConfirmationBox />
    </>
  );
}

export default App;
