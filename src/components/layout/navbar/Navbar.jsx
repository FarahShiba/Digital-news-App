import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import { useRouter } from "next/router";

export const navbars = [
  { id: 1, name: "Home", link: "/", active: true },
  { id: 2, name: "Posts", link: "/postitems", active: false },
  {
    id: 3,
    name: "Create Post",
    link: "/createpostitems",
    active: false,
  },
  { id: 4, name: "About", link: "/about", active: false },
  { id: 5, name: "Contact", link: "/contact", active: false },
];

export const scis = [
  {
    id: 1,
    icon: <i className="bi-facebook"></i>,
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    icon: <i className="bi-instagram"></i>,
    link: "https://www.instagram.com/",
  },
  {
    id: 3,
    icon: <i className="bi-twitter"></i>,
    link: "https://www.twitter.com/",
  },
];

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <ul>
        {navbars.map((navbar) => (
          <li key={navbar.id}>
            <Link href={navbar.link} passHref legacyBehavior>
              <a
                className={router.pathname === navbar.link ? styles.active : ""}
                aria-current={navbar.name === "Home" ? "page" : undefined}
              >
                {navbar.name === "Home" ? <IoHomeSharp /> : navbar.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
