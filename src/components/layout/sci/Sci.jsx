import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./sci.module.css";
import Link from "next/link";

const Sci = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="g-2">
        <Col className="text-center">
          <Link href="https://www.facebook.com/" passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`mx-2 ${styles.iconLink}`}
            >
              <i className="bi-facebook"></i>
            </a>
          </Link>
        </Col>
        <Col className="text-center">
          <Link href="https://www.instagram.com/" passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`mx-2 ${styles.iconLink}`}
            >
              <i className="bi-instagram"></i>
            </a>
          </Link>
        </Col>
        <Col className="text-center">
          <Link href="https://www.twitter.com/" passHref legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`mx-2 ${styles.iconLink}`}
            >
              <i className="bi-twitter"></i>
            </a>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default Sci;
