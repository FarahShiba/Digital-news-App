import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import { useState } from "react";
import { Navbar } from "../navbar/Navbar";
import styles from "./header.module.css";
import Sci from "../sci/Sci";
import SearchForm from "../searchForm/SearchForm";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleFormOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const toggleNavbar = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <header id="header" className={`${styles.header} sticky-top`}>
      <Container fluid="xl">
        <BootstrapNavbar
          expand="lg"
          expanded={expanded}
          onToggle={toggleNavbar}
          className="d-flex justify-content-between align-items-center"
        >
          <BootstrapNavbar.Brand href="/" className={`${styles.logo}`}>
            <h1>Digital App News</h1>
          </BootstrapNavbar.Brand>
          <div className="d-flex align-items-center">
            <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
            <BootstrapNavbar.Collapse
              id="responsive-navbar-nav"
              className="me-auto"
            >
              <Nav className="me-auto">
                <Navbar />
              </Nav>
            </BootstrapNavbar.Collapse>
            <Sci />
            <Link
              className="mx-2 js-search-open"
              onClick={handleFormOpen}
              href="#"
            >
              <span className="bi-search"></span>
            </Link>
            <SearchForm active={open} formOpen={handleFormOpen} />
          </div>
        </BootstrapNavbar>
      </Container>
    </header>
  );
}
