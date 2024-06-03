import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { scis } from "../navbar/Navbar";
import styles from "./sci.module.css";

export default function Sci() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="g-2">
        {scis.map((sci) => (
          <Col key={sci.id} className="text-center">
            <a
              href={sci.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mx-2 ${styles.iconLink}`}
            >
              {sci.icon}
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
