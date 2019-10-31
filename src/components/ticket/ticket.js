import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Badge, Row, Col } from "shards-react";

const Ticket = ({ priority }) => {
  let badgeColor = "";

  switch (priority) {
    case "High":
      badgeColor = "danger";
      break;
    case "Medium":
      badgeColor = "warning";
      break;
    case "Low":
      badgeColor = "info";
      break;

    default:
      badgeColor = "info";
      priority = "Low";
      break;
  }

  return (
    <Link>
      <Card style={{ marginBottom: ".5em" }}>
        <CardBody style={{ padding: "1rem" }}>
          <Row>
            <Col lg="2">
              <Badge theme={badgeColor}>{priority} Priority</Badge>{" "}
            </Col>
            <Col lg="10">
              <strong>This is a ticket</strong>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Link>
  );
};

export default Ticket;
