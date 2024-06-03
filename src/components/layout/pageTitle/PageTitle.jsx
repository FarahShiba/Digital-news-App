import React from "react";
import styles from "./pageTitle.module.css";

export const PageTitle = ({ title }) => {
  return <h3 className={styles.categoryTitle}>{title}</h3>;
};
