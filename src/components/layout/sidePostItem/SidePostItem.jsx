import React from "react";
import Link from "next/link";
import styles from "../postItemOne.module.css";

export const SidePostItem = ({ item }) => {
  return (
    <div className={styles.postEntry} border-bottom>
      <div className={styles.postMeta}>
        <span className={styles.date}>{item.category}</span>
        <span className="mx-1">
          <i className="bi bi-dot"></i>
        </span>
        <span>{new Date(item.date).toLocaleDateString("en-AU")}</span>
      </div>
      <h2 className="mb-2">
        <Link href={`/postitems/${item._id}`} passHref legacyBehavior>
          <a>{item.title}</a>
        </Link>
      </h2>
      {item.author && (
        <span className={styles.author} mb-3 d-block>
          {item.author}
        </span>
      )}
    </div>
  );
};
