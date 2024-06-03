import React, { useEffect } from "react";

// import AOS
import AOS from "aos";
import styles from "./about.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <main id="main">
      <section>
        <Container data-aos="fade-in">
          <Row>
            <Col lg={12} text-center mb={5}>
              <h1 className={styles.pageTitle}>About Us</h1>
            </Col>
          </Row>

          <Row mb={5}>
            <div className={`${styles.postEntry2} d-md-flex post-entry-2 half`}>
              <a href="#" className="me-4 thumbnail">
                <Image
                  src="/assets/img/landscape1.jpg"
                  alt="about"
                  className="img-fluid"
                  width={4000}
                  height={800}
                />
              </a>
              <div className="ps-md-5 mt-md-0">
                <div className={`${styles.postMeta} mt-4`}>About Us</div>
                <h2 className="mb-4 display-4">Mental Health History</h2>
                <p>
                  This evocative black-and-white photograph captures a poignant
                  moment of emotional release, highlighting the inner battles
                  associated with mental health. The image features a man in a
                  suit, his face contorted in pain as he wipes away a tear,
                  symbolizing the hidden struggles many face. The tear,
                  prominently displayed against the backdrop of his professional
                  attire, underscores the societal pressures to appear composed
                  and the stigma that often surrounds emotional expression,
                  particularly among men.
                </p>
                <p>
                  This powerful visual narrative invites viewers to reflect on
                  the importance of recognizing and validating their emotions.
                  It emphasizes that seeking help and expressing vulnerability
                  are signs of strength, not weakness. By shedding light on the
                  silent struggles many endure, this photograph aims to foster a
                  more compassionate and understanding approach to mental
                  health, encouraging open conversations and support for those
                  in need.
                </p>
              </div>
            </div>

            <div className="d-md-flex post-entry-2 half mt-5">
              <a href="#" className="me-4 thumbnail order-2">
                <Image
                  src="/assets/img/landscape2.jpg"
                  alt="about"
                  className="img-fluid"
                  width={4000}
                  height={800}
                />
              </a>
              <div className="pe-md-5 mt-4 mt-md-0">
                <div className={`${styles.postMeta} mt-4`}>
                  Mission &amp; Vision
                </div>
                <h2 className="mb-4 display-4">Mission &amp; Vision</h2>

                <p className={styles.desc}>
                  This intimate black-and-white photograph reveals a moment of
                  profound vulnerability, capturing a man in a suit as he wipes
                  away a tear. The stark contrast between his professional
                  attire and his visible emotional distress poignantly
                  highlights the internal struggles that often go unnoticed. The
                  image serves as a powerful commentary on the societal
                  expectations that pressure individuals, especially men, to
                  suppress their emotions and maintain a facade of strength.
                </p>
                <p className={styles.desc}>
                  Through this visual narrative, viewers are encouraged to
                  acknowledge the prevalence of mental health issues and the
                  importance of emotional expression. The photograph advocates
                  for breaking down stigmas associated with mental health,
                  urging society to embrace openness and support for those
                  facing emotional challenges. It is a reminder that true
                  strength lies in the courage to confront and share one's
                  innermost struggles, fostering a culture of empathy and
                  understanding.
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section className="mb-5 bg-light py-5">
        <Container data-aos="fade-up">
          <Row className="justify-content-center-between align-items-lg-center">
            <Col lg={5} mb={4} mb-lg-0>
              <h2 className="display-4 mb-4">Latest News</h2>
              <p className={styles.desc}>
                This powerful black-and-white photograph captures a raw moment
                of emotional distress, showing a man in a suit wiping away a
                tear. The image starkly contrasts the expectations of stoicism
                often placed on men with the reality of their inner emotional
                battles. The close-up of his pained expression and the solitary
                tear highlight the intense, often hidden struggles many endure
                in silence.
              </p>
              <p className={styles.desc}>
                This photograph serves as a compelling reminder of the
                importance of recognizing and addressing mental health issues.
                It challenges the stigma surrounding emotional vulnerability,
                particularly among men, and emphasizes that expressing emotions
                is a crucial step toward healing and support. By bringing
                attention to the silent battles fought by many, this image
                advocates for a more compassionate and understanding approach to
                mental health, encouraging open dialogue and the acceptance that
                seeking help is a sign of strength.
              </p>
              <p>
                <Link href="#" className="more">
                  view all blog posts
                </Link>
              </p>
            </Col>
            <Col lg={6}>
              <Row>
                <div className="col-6">
                  <Image
                    src="/assets/img/landscape3.jpg"
                    alt="about"
                    className="img-fluid mb-4"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="col-6 mt-4">
                  <Image
                    src="/assets/img/landscape4.jpg"
                    alt="about"
                    className="img-fluid mb-4"
                    width={400}
                    height={400}
                  />
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container data-aos="fade-up">
          <Row>
            <div className="col-12 text-center mb-5">
              <Row className="justify-content-center">
                <Col lg={6}>
                  <h2 className="display-4">Mental Health People</h2>
                  <p>
                    This striking black-and-white photograph depicts a man in a
                    suit, wiping away a tear. The image highlights the contrast
                    between his professional exterior and the emotional turmoil
                    within. It serves as a powerful reminder that mental health
                    challenges can affect anyone, regardless of their outward
                    appearance.
                  </p>
                </Col>
              </Row>
            </div>
            <Col lg={4} className=" text-center mb-5">
              <Image
                src="/assets/img/landscape5.jpg"
                alt="about"
                className="img-fluid rounded-circle w-50 mb-4"
                width={400}
                height={400}
              />
              <h4>Sel Gom</h4>
              <span className="d-block mb-3 text-uppercase">
                Mental Health &amp; Counsellor
              </span>
              <p>
                A powerful black-and-white photo of a man in a suit wiping away
                a tear, highlighting the hidden struggles of mental health and
                the importance of emotional vulnerability.
              </p>
            </Col>
            <Col lg={4} className=" text-center mb-5">
              <Image
                src="/assets/img/landscape6.jpg"
                alt="about"
                className="img-fluid rounded-circle w-50 mb-4"
                width={100}
                height={100}
              />
              <h4>Hand In Hand</h4>
              <span className="d-block mb-3 text-uppercase">
                Mental Health &amp; Counselling
              </span>
              <p>
                A poignant black-and-white image of a man in a suit wiping away
                a tear, symbolizing the hidden emotional struggles and the need
                for greater mental health awareness and support.
              </p>
            </Col>
            <Col lg={4} className=" text-center mb-5">
              <Image
                src="/assets/img/landscape7.jpg"
                alt="about"
                className="img-fluid rounded-circle w-50 mb-4"
                width={100}
                height={100}
              />
              <h4>So Scary</h4>
              <span className="d-block mb-3 text-uppercase">
                Mental Health &amp; Badly
              </span>
              <p>
                A compelling black-and-white photograph of a man in a suit
                wiping away a tear, capturing the quiet battles of mental health
                and the courage it takes to show vulnerability.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
export default Page;
