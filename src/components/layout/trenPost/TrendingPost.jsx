import React from "react";
import { ListGroup } from "react-bootstrap";
import Link from "next/link";
import styles from "./trendingPost.module.css";

export default function TrendingPost({ item, index }) {
  return (
    <ListGroup.Item as="li" className={styles.trendingPostItem}>
      <Link
        href={`/postitems/${item._id}`}
        className={styles.trendingPostLink}
        passHref
      >
        <span className={styles.number}>{index + 1}</span>
        <h3>{item.title}</h3>
        <span className={styles.author}>{item.author}</span>
      </Link>
    </ListGroup.Item>
  );
}
