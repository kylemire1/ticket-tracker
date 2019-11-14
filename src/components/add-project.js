import React, { useState } from "react";
import {
  Form,
  FormInput,
  FormGroup,
  ModalHeader,
  ModalBody,
  ButtonGroup,
  Button
} from "shards-react";

import firebase from "../firebase";

const AddProject = props => {
  const [formValues, setFormValues] = useState({
    name: ""
  });

  const handleChange = e => {
    const { value } = e.target;

    setFormValues({ name: value });
  };

  const createProject = e => {
    e.preventDefault();

    const { name } = formValues;

    firebase
      .firestore()
      .collection("projects")
      .add({
        name
      })
      .then(() => {
        props.close();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <ModalHeader>Add a Project</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <label htmlFor="projectName">Project Name</label>
            <FormInput
              value={formValues.name}
              onChange={e => handleChange(e)}
              id="projectName"
              name="projectName"
              required
            />
          </FormGroup>
          <ButtonGroup className="mx-auto" style={{ width: "100%" }}>
            <Button onClick={e => createProject(e)} theme="primary">
              Add Project
            </Button>
            <Button onClick={props.close} theme="light">
              Cancel
            </Button>
          </ButtonGroup>
        </Form>
      </ModalBody>
    </>
  );
};

export default AddProject;
