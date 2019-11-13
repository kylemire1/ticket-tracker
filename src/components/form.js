import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import {
  Form as ShardsForm,
  FormInput,
  FormGroup,
  FormTextarea,
  FormSelect,
  Card,
  Button,
  Alert
} from "shards-react";

import { useTickets } from "../hooks/use-tickets";
import firebase from "../firebase";
import { useProjects } from "../hooks/use-projects";

const Form = props => {
  const ticket = useTickets(false, props.ticketID);
  const projects = useProjects();

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    priority: "",
    project: "",
    createdBy: ""
  });
  const [submittedStatus, setSubmittedStatus] = useState("");

  useEffect(() => {
    setSubmittedStatus("");
    setFormValues({
      title: ticket.title ? ticket.title : "",
      description: ticket.description ? ticket.description : "",
      priority: ticket.priority ? ticket.priority : "",
      project: ticket.project ? ticket.project : "",
      createdBy: ticket.createdBy ? ticket.createdBy : ""
    });
  }, [ticket]);

  const handleChange = e => {
    const { name } = e.target;
    setFormValues({
      ...formValues,
      [name]: e.target.value
    });
  };

  const handleSubmit = (e, verb) => {
    e.preventDefault();

    const { title, description, priority, createdBy, project } = formValues;

    if (verb === "create") {
      firebase
        .firestore()
        .collection("tickets")
        .add({
          title,
          description,
          priority,
          project,
          createdBy
        })
        .then(() => {
          props.history.push(`/projects/${project}`);
        })
        .catch(error => {
          setSubmittedStatus("failed");
          console.error(error);
        });
    } else if (verb === "edit") {
      firebase
        .firestore()
        .collection("tickets")
        .doc(props.ticketID)
        .set({
          title,
          description,
          priority,
          project,
          createdBy
        })
        .then(() => {
          props.history.push(`/projects/${project}`);
        })
        .catch(error => {
          setSubmittedStatus("failed");
          console.error(error);
        });
    }
  };

  let alert = null;
  if (submittedStatus === "failed") {
    alert = (
      <Alert theme="danger">There was a problem submitting your ticket.</Alert>
    );
  }

  return (
    <Card className="p-3">
      {alert}
      <ShardsForm onSubmit={e => handleSubmit(e, props.verb)}>
        <FormGroup>
          <label htmlFor="title">Title</label>
          <FormInput
            onChange={e => handleChange(e)}
            value={formValues.title}
            name="title"
            id="title"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Description</label>
          <FormTextarea
            onChange={e => handleChange(e)}
            value={formValues.description}
            name="description"
            id="description"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="priority">Priority</label>
          <FormSelect
            onChange={e => handleChange(e)}
            value={formValues.priority}
            name="priority"
            id="priority"
            required
          >
            <option value="">Select a Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <label htmlFor="project">Project</label>
          <FormSelect
            onChange={e => handleChange(e)}
            value={formValues.project}
            name="project"
            id="project"
            required
          >
            <option value="">Select a Project</option>
            {projects.map(project => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <label htmlFor="createdBy">Created By</label>
          <FormInput
            onChange={e => handleChange(e)}
            value={formValues.createdBy}
            name="createdBy"
            id="createdBy"
            required
          />
        </FormGroup>
        <Button>
          <span style={{ textTransform: "capitalize" }}>{props.verb}</span>{" "}
          Ticket
        </Button>
      </ShardsForm>
    </Card>
  );
};

export default withRouter(Form);
