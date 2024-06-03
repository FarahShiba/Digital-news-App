import { useEffect } from "react";
import HeroSlide from "../../components/layout/heroSlide/HeroSlide";
import { heroSlides } from "../../database/data";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import styles from "./hero.module.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <section id="hero-slider" className={styles.heroSlider}>
      <Container data-aos="fade-in">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Carousel
              controls
              indicators
              interval={3000}
              pause={false}
              className={styles.sliderFeaturedPosts}
            >
              {heroSlides.map((slide) => (
                <Carousel.Item key={slide.id}>
                  <HeroSlide slide={slide} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
