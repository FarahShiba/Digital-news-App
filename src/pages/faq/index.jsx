import { Container, Accordion } from "react-bootstrap";
import styles from "./faq.module.css";

const FAQ = () => {
  const faqs = [
    {
      question: "What is mental health?",
      answer:
        "Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices.",
    },
    {
      question: "Why is mental health important?",
      answer:
        "Mental health is important at every stage of life, from childhood and adolescence through adulthood. It affects how we think, feel, and act and is crucial for overall well-being.",
    },
    {
      question: "What are common mental health issues?",
      answer:
        "Common mental health issues include anxiety disorders, depression, schizophrenia, eating disorders, and addictive behaviors.",
    },
    {
      question: "How can I improve my mental health?",
      answer:
        "To improve your mental health, stay connected with others, stay physically active, learn new skills, give to others, and seek professional help if needed.",
    },
    {
      question: "When should I seek professional help?",
      answer:
        "You should seek professional help if you experience persistent feelings of sadness, anxiety, or emptiness, or if your mental health symptoms interfere with your daily life.",
    },
  ];

  return (
    <main id="main">
      <section id="faq">
        <Container className={styles.faqContainer}>
          <h1 className="text-center my-4">Mental Health FAQ</h1>
          <Accordion defaultActiveKey="0">
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>
    </main>
  );
};

export default FAQ;
