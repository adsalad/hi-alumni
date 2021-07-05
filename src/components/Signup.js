import React, { useRef } from "react";
import {
  Form,
  Button,
  ToggleButtonGroup,
  Card,
  ToggleButton,
} from "react-bootstrap";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <div>
      <Card>
        <Card.Body>
          <h1 className="text-center mb-4">Sign Up</h1>
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
            <Form.Group className="mt-2" id="passwordConform">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="passwordConfrim"
                ref={passwordConfirmRef}
                required
              ></Form.Control>
            </Form.Group>

            <ToggleButtonGroup
              className="mt-4 w-100"
              type="radio"
              name="userType"
              defaultValue={1}
            >
              <ToggleButton id="tbg-radio-1" value={1}>
                I'm a Student!
              </ToggleButton>
              <ToggleButton id="tbg-radio-2" value={2}>
                I'm an Alumni!
              </ToggleButton>
            </ToggleButtonGroup>

            <Form.Group className="mt-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Select University</Form.Label>
              <Form.Control as="select">
                <option>Western University</option>
                <option>University of Waterloo</option>
              </Form.Control>
            </Form.Group>

            <Button className="w-100 mt-4" type="submit">
              Submit form
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
