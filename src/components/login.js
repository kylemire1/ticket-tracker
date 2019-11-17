import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import {
  Container,
  Row,
  Form as ShardsForm,
  FormInput,
  FormGroup,
  Card,
  Button,
  Alert
} from "shards-react";
import firebase from "../firebase";
import { UserContext } from "../context/user-context";

const Login = props => {
  const { user } = useContext(UserContext);

  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });
  const [logInError, setLogInError] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = formValues;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        () => {
          console.log("User logged in");
        },
        err => {
          setLogInError("Incorrect Login Credentials");
        }
      );
  };

  return (
    <>
      {user.name && user.email ? <Redirect to="/" /> : null}
      <Container style={{ height: "100vh" }}>
        <Row className="h-100 justify-content-center align-items-center">
          <Card className="p-3 col-6">
            <h1 className="text-center mb-3">Login</h1>
            <ShardsForm onSubmit={e => handleSubmit(e)}>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <FormInput
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={e => handleChange(e)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="password">Password</label>
                <FormInput
                  type="password"
                  id="password"
                  name="password"
                  value={formValues.password}
                  onChange={e => handleChange(e)}
                  required
                />
              </FormGroup>
              <Button className="mb-3" style={{ width: "100%" }} type="submit">
                Log In
              </Button>
            </ShardsForm>
            {logInError !== "" ? (
              <Alert theme="danger">{logInError}</Alert>
            ) : null}
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Login;
