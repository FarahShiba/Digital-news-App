import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import styles from "./contactForm.module.css";

export default function ContactForm() {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    validate: "",
  };

  const [text, setText] = useState(initialState);

  const handleTextChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
      validate: "",
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = text;
    if (!name || !email || !subject || !message) {
      setText({
        ...text,
        validate: "Please fill all the fields",
      });
    } else {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(text),
        });
        if (response.ok) {
          setText({ ...initialState, validate: "Message sent successfully" });
        } else {
          setText({ ...text, validate: "Something went wrong" });
        }
      } catch (error) {
        setText({ ...text, validate: "Something went wrong" });
        console.error("Failed to send message:", error.message);
      }
    }
  };

  return (
    <Form className={styles.contactForm} onSubmit={handleFormSubmit}>
      <Row>
        <Col className={`${styles.formGroup} md-6`}>
          <Form.Control
            type="text"
            name="name"
            value={text.name}
            onChange={handleTextChange}
            id="name"
            className={styles.formControl}
            placeholder="Your Name"
          />
        </Col>

        <Col className={`${styles.formGroup} md-6`}>
          <Form.Control
            type="email"
            name="email"
            value={text.email}
            onChange={handleTextChange}
            id="email"
            className={styles.formControl}
            placeholder="Your Email"
          />
        </Col>

        <div className={styles.formGroup}>
          <Form.Control
            type="text"
            name="subject"
            value={text.subject}
            onChange={handleTextChange}
            id="subject"
            className={styles.formControl}
            placeholder="Subject"
          />
        </div>

        <div className={styles.formGroup}>
          <Form.Control
            as={"textarea"}
            rows={5}
            name="message"
            value={text.message}
            onChange={handleTextChange}
            className="formControl"
            placeholder="Message"
          />
        </div>

        <div className="my-3">
          {text.validate == "loading" && (
            <div className={styles.loading}>Sending Message</div>
          )}
          {text.validate == "incomplete" && (
            <div className={styles.errorMessage}>
              Please fill in all above details
            </div>
          )}
          {text.validate == "success" && (
            <div className={styles.sentMessage}>
              Message sent successfully. Thankyou!
            </div>
          )}
          {text.validate == "error" && (
            <div className={styles.errorMessage}>Server error</div>
          )}
        </div>
        <div className="text-center">
          <Button type="submit">Send Message</Button>
        </div>
      </Row>
    </Form>
  );
}
