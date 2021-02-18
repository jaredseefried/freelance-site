import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App container-fluid py-3">
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" className="mb-3">
        <Navbar.Brand href="/" className="font-weight-bold ps-3">
          Freelance Website
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {/* <Nav.Link href="/signup">Signup</Nav.Link> */}
            {/* <Nav.Link href="/login">Login</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}
export default App;