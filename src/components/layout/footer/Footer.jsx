import React, { useState, useEffect } from "react";
import { PreLoader } from "../preLoader/PreLoader";
import FooterPostItem from "../footerItem/FooterPostItem";
import Link from "next/link";
import styles from "./footer.module.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  const [items, setItems] = useState([]);

  const getPostsData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/postitems`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.data);
      })
      .catch((error) => {
        console.error("Failed to fetch items:", error.message);
      });
  };

  useEffect(() => {
    getPostsData();
  }, []);

  const categories = [
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
    "food",
    "travel",
  ];

  const navs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Posts", path: "/postitems" },
    { name: "Create Post", path: "/createpostitems" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacyPolicy" },
    { name: "FAQ", path: "/faq" },
  ];

  const scis = ["twitter-x", "facebook", "instagram", "linkedin"];

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerContent}>
        <Container>
          <Row className="g-5">
            <Col lg={4}>
              <h3 className={styles.footerHeading}>Digital News App</h3>
              <p>
                A news app that provides news from all over the world. It
                provides a platform for users to read and share news. It also
                provides a platform for users to create and share news. It also
                provides a platform for users to create and share news. It also
                provides a platform for users to create and share news.
              </p>
              <p>
                <Link href="/about" className={styles.footerLinkMore}>
                  Learn more
                </Link>
              </p>
            </Col>
            <div className="col-6 col-lg-2">
              <h3 className={styles.footerHeading}>Navigation</h3>
              <ul className={`${styles.footerLinks} list-unstyled`}>
                {navs.map((nav, index) => (
                  <li key={index}>
                    <Link href={nav.path}>
                      <i className="bi bi-chevron-right"></i> {nav.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-lg-2">
              <h3 className={styles.footerHeading}>Categories</h3>
              <ul className={`${styles.footerLinks} list-unstyled`}>
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link href="#">
                      <i className="bi bi-chevron-right"></i> {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Col lg={4}>
              <h3 className={styles.footerHeading}>Recent Posts</h3>
              <ul
                className={`${styles.footerLinks} ${styles.footerBlogEntry} ${styles.listUnstyled}`}
              >
                {items && items.length > 0 ? (
                  items
                    .slice(-4)
                    .map((item) => (
                      <FooterPostItem key={item._id} item={item} />
                    ))
                ) : (
                  <PreLoader />
                )}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.footerLegal}>
        <Container>
          <Row className="justify-content-between">
            <Col className="md-6 text-center text-md-start mb-3 mb-md-0">
              <div className={styles.copyright}>
                &copy; Copyright{" "}
                <strong>
                  <span>Digital News App</span>
                </strong>
                . Mental Health
              </div>

              <div className={styles.credits}>
                Designed by <Link href="#">Farah Shiba Tambunan</Link>
              </div>
            </Col>

            <Col md={6}>
              <div
                className={`${styles.socialLinks} mb-3 mb-lg-0 text-center text-center text-md-end`}
              >
                {scis.map((sci, index) => (
                  <Link href="#" className={sci} key={index}>
                    <i className={`bi bi-${sci}`}></i>
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
