import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../footer/footer.module.css";

export default function FooterPostItem({ item }) {
  return (
    <li>
      <Link
        href={`/postitems/${item._id}`}
        className="d-flex align-items-center"
      >
        <Image
          src={`/${item.img}`}
          alt={item.title}
          width={100}
          height={100}
          className="img-fluid me-3"
        />
        <div>
          <div className={`${styles.postMeta} d-block`}>
            <span className={styles.date}>{item.category}</span>
            <span className="mx-1">
              <i className="bi bi-dot"></i>
            </span>
            <span>{new Date(item.date).toLocaleDateString("en-AU")}</span>
          </div>
          <span>{item.title}</span>
        </div>
      </Link>
    </li>
  );
}
