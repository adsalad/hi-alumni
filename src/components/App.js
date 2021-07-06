import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
//import "./App.css"

function App() {
  return (
    <div style = {{backgroundColor: "#f7f5f5"}}>
      <Container
        className=" d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </div>
  );
}

export default App;
