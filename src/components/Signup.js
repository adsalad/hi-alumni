import React, { useRef, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [universityType, setUniversity] = useState("Western University");
  const [userType, setUserType] = useState("Student");

  console.log(userType);
  console.log(universityType);

  return (
    <div>
      <Card
        style={{
          backgroundColor: "#3b4483",
          color: "white",
          font: "Helvetica Neue",
          boxShadow: "0px 8px 10px black"
        }}
      >
        <Card.Body>
          <h1 className="text-center mb-4">UniChat!</h1>
          <Form>
            <Form.Group className="mt-2" id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group className="mt-2" id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mt-2" id="passwordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="passwordConfrim"
                ref={passwordConfirmRef}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mt-3" controlId="StudentDropdown">
              <Form.Label>Select Graduation Status</Form.Label>
              <Form.Control
                as="select"
                value={userType}
                onChange={(e) => {
                  setUserType(e.target.value);
                }}
              >
                <option>Student</option>
                <option>Alumni</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mt-3" controlId="UniversityDropdown">
              <Form.Label>Select University</Form.Label>
              <Form.Control
                as="select"
                value={universityType}
                onChange={(e) => {
                  setUniversity(e.target.value);
                }}
              >
                <option>Western University</option>
                <option>University of Waterloo</option>
              </Form.Control>
            </Form.Group>

            <Button className="w-100 mt-4" type="submit" variant = {"outline-light"}>
              Sign Up!
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </div>
  );
}
