import PropTypes from "prop-types";
import Link from "next/link";
import { Card } from "react-bootstrap";
import styles from "../../../sections/hero/hero.module.css";

export default function HeroSlide({ slide }) {
  return (
    <Link href="#">
      <Card
        className={`d-flex align-items-end mb-2 ${styles.imgBg}`}
        style={{ backgroundImage: `url(/${slide.bgImg})` }}
      >
        <div>
          <Card.Body
            className={`img-bg-inner px-3 px-md-5 mb-3 ${styles.imgBgInner}`}
          >
            <Card.Title className={styles.cardTitle}>{slide.title}</Card.Title>
            <Card.Text className={styles.cardText}>{slide.brief}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    </Link>
  );
}

HeroSlide.propTypes = {
  slide: PropTypes.shape({
    bgImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brief: PropTypes.string.isRequired,
  }).isRequired,
};
