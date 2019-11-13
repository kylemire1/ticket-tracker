import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Row, Col, Collapse, Container, Card } from "shards-react";
import { MdEdit, MdDelete, MdExpandMore } from "react-icons/md";

import styles from "./ticket.module.scss";
import { useProjects } from "../hooks/use-projects";

const Ticket = ({
  id,
  priority,
  title,
  description,
  projectId,
  createdBy,
  handleModal
}) => {
  const [open, setOpen] = useState(false);
  const project = useProjects(projectId);

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
      <Card className={styles.collapseBtn}>
        <Row>
          <Col lg="2">
            <MdExpandMore
              style={{ cursor: "pointer", strokeWidth: 3 }}
              onClick={() => setOpen(!open)}
            />
            <Badge style={{ marginLeft: "2em" }} theme={badgeColor}>
              {priority} Priority
            </Badge>{" "}
          </Col>
          <Col lg="4">
            <strong>{title}</strong>
          </Col>

          {projectId ? <Col lg="2">{project.name}</Col> : null}
          <Col lg={projectId ? "3" : "5"}>
            <strong>Created by:</strong> {createdBy}
          </Col>
          <Col lg="1">
            <Link to={`/ticket-form/edit/${id}`}>
              <MdEdit />
            </Link>{" "}
            <MdDelete
              style={{ cursor: "pointer" }}
              onClick={() => handleModal()}
              className="text-danger"
            />
          </Col>
        </Row>
      </Card>
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
