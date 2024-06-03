import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const privacyPolicy = () => {
  return (
    <main id="main">
      <section id="privacyPolicy">
        <Container>
          <Row className="justify-content-center">
            <Col md={9} lg={7} my={5}>
              <h1 className="mb-4">Privacy Policy</h1>
              <p>
                This Privacy Policy sets out how Digital News App (referred to
                as "we", "our", or "us") collects, uses, discloses, and protects
                your personal information in accordance with the Privacy Act
                1988 (Cth) and the Australian Privacy Principles (APPs).
              </p>
              <h2> 1. Collection of Personal Information</h2>
              <p>
                We may collect personal information from your device in the
                following ways:
                <ul>
                  <li>Name</li>
                  <li>Email Address</li>
                  <li>Contact Details</li>
                  <li>Demographic Information</li>
                  <li>
                    {" "}
                    Other information relevant to customer surveys and/or offers
                  </li>
                </ul>
              </p>
              <h2> 2. Use of Personal Information</h2>
              <p>
                We use the personal information we collect to:
                <ul>
                  <li>Provide and improve our services</li>
                  <li>Communicate with you</li>
                  <li>Conduct marketing and research activities</li>
                  <li>Comply with our legal obligations</li>
                </ul>
              </p>

              <h2>3. Disclosure of Personal Information</h2>
              <p>
                We may disclose personal information to third parties in the
                following circumstances:
                <ul>
                  <li> Our Employees, Partners, or Affiliates</li>
                  <li>
                    {" "}
                    Third-party service providers for the purpose of enabling
                    them to provide services to us
                  </li>
                  <li>
                    {" "}
                    As required by law, such as to comply with a subpoena or
                    similar legal process
                  </li>
                  <li> With your consent, to other third parties</li>
                </ul>
              </p>

              <h2>4. Security of Personal Information</h2>
              <p>
                We are committed to ensuring that your personal information is
                secure. In order to prevent unauthorized access or disclosure,
                we have put in place suitable physical, electronic, and
                managerial procedures to safeguard and secure the information we
                collect.
              </p>

              <h2>5. Access to Personal Information</h2>
              <p>
                You have the right to request access to the personal information
                we hold about you. If you believe that any information we hold
                about you is incorrect or incomplete, please contact us as soon
                as possible so that we can promptly correct any inaccuracies.
              </p>

              <h2>6. Changes to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, and we encourage you to review our
                Privacy Policy periodically.
              </p>

              <h2>7. Contact Us</h2>
              <p>
                If you have any questions or concerns about our Privacy Policy
                or the way we handle your personal information, please contact
                us at:
              </p>
              <p>
                Email: info@digitalnewsapp.com <br />
                Address: 1234 Somewhere Road #8254, Nashville, TN 00000
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default privacyPolicy;
