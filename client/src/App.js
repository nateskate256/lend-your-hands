import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Nav from "./components/Navbar";
// import Jumbo from "./components/Jumbotron";
// // import Table from "./components/Table";
// import ConfirmationBox from "./components/Modal";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      {/* <Nav />
      <Jumbo />
      <Table />
      <ConfirmationBox /> */}
    </Router>
  );
}

export default App;
