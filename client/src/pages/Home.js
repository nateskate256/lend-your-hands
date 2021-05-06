import React, { useState } from "react";
import CustomNav from "../components/Navbar";
import Jumbo from "../components/Jumbotron";
import Table from "../components/Table";
import GoogleMaps from "../components/GoogleMap/googlemap";

function Home() {
  const [show, setShow] = useState(false);

  return (
    <>
      <CustomNav />
      <Jumbo />
      <button onClick={() => setShow(!show)}>Turn Map On</button>
      {show && (
        <div>
          <Table />
          <GoogleMaps />
        </div>
      )}
    </>
  );
}

export default Home;
