import React, { useEffect } from "react";
import styles from "./contact.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

// import AOS
import AOS from "aos";
import ContactForm from "@/components/layout/contactForm/ContactForm";

export default function index() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <main id="main">
      <section id="contact" className={`${styles.contact} mb-5`}>
        <Container data-aos="fade-up">
          <Row>
            <Col lg={12} text-center mb={5}>
              <h1 className={styles.pageTitle}>Contact us</h1>
            </Col>
          </Row>

          <Row gy-4>
            <Col md={4}>
              <div className={styles.infoItem}>
                <i className="bi bi-geo-alt"></i>
                <h3>Address</h3>
                <address>
                  1234 Somewhere Road #8254
                  <br />
                  Nashville, TN 00000
                </address>
              </div>
            </Col>

            <Col md={4}>
              <div className={`${styles.infoItem} ${styles.infoItemBorders}`}>
                <i className="bi bi-phone"></i>
                <h3>Phone Number</h3>
                <p>
                  <Link href="tel:+1234567890">+0000034567890</Link>
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className={styles.infoItem}>
                <i className="bi bi-envelope"></i>
                <h3>Email</h3>
                <p>
                  <Link href="mailto:info@example.com">info@gmail.com</Link>
                </p>
              </div>
            </Col>
          </Row>

          <div className={`${styles.form} mt-5`}>
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
