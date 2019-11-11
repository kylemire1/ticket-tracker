import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Row, Col, Collapse, Container } from "shards-react";
import { MdEdit } from "react-icons/md";

import styles from "./ticket.module.scss";

const Ticket = ({ id, priority, title, description, estimate, createdBy }) => {
  const [open, setOpen] = useState(false);

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
    <>
      <button onClick={() => setOpen(!open)} className={styles.collapseBtn}>
        <Row>
          <Col lg="2">
            <Badge theme={badgeColor}>{priority} Priority</Badge>{" "}
          </Col>
          <Col lg="4">
            <strong>{title}</strong>
          </Col>
          <Col lg="4">
            <strong>Created by:</strong> {createdBy}
          </Col>
          <Col lg="2">
            <Link to={`/ticket-form/edit/${id}`}>
              <MdEdit />
            </Link>
          </Col>
        </Row>
      </button>
      <Collapse className={styles.collapse} open={open}>
        <Container>
          <Row>
            <Col>
              <p>{description}</p>
            </Col>
          </Row>
        </Container>
      </Collapse>
    </>
  );
};

export default Ticket;
