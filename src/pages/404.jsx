import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const error = () => {
  return (
    <main id="main">
      <section id="error" className="error">
        <Container className="fluid d-flex flex-column">
          <Row className="align-items-center justify-content-center min-vh-100">
            <Col md={9} lg={6} my={5}>
              <div className="text-center errorPage">
                <h1 className="mb-0 text-secondary">404</h1>
                <h2 className="mb-4 text-black">Sorry, something wrong!</h2>
                <p className="w-sm-80 mx-auto mb-4 text-black">
                  The page you are looking for does not exist. will back very
                  before long much obliged for your understanding.
                </p>
                <div>
                  <Link href="/" className="btn btn-primary btn-lg">
                    Return Home
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default error;
