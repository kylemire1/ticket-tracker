import React from "react";
import {
  Form as ShardsForm,
  FormInput,
  FormGroup,
  FormTextarea,
  Card
} from "shards-react";

const Form = () => {
  return (
    <Card className="p-3">
      <ShardsForm>
        <FormGroup>
          <label htmlFor="title">Title</label>
          <FormInput id="title" required />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Description</label>
          <FormTextarea id="description" required />
        </FormGroup>
      </ShardsForm>
    </Card>
  );
};

export default Form;
