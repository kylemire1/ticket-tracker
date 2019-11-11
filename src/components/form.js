import React, { useState, useEffect } from "react";
import {
  Form as ShardsForm,
  FormInput,
  FormGroup,
  FormTextarea,
  Card
} from "shards-react";
import { useTickets } from "../hooks/use-tickets";

const Form = props => {
  const ticket = useTickets(false, props.ticketID);
  const [formValues, setFormValues] = useState({
    title: "",
    description: ""
  });

  useEffect(() => {
    setFormValues({
      title: ticket.title ? ticket.title : "",
      description: ticket.description ? ticket.description : ""
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
      </ShardsForm>
    </Card>
  );
};

export default Form;
