import React, { useState, useEffect } from "react";
import {
  Form as ShardsForm,
  FormInput,
  FormGroup,
  FormTextarea,
  FormSelect,
  Card,
  Button
} from "shards-react";
import { useTickets } from "../hooks/use-tickets";

const Form = props => {
  const ticket = useTickets(false, props.ticketID);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    priority: "",
    createdBy: ""
  });

  useEffect(() => {
    setFormValues({
      title: ticket.title ? ticket.title : "",
      description: ticket.description ? ticket.description : "",
      priority: ticket.priority ? ticket.priority : "",
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

  return (
    <Card className="p-3">
      <ShardsForm>
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

export default Form;
