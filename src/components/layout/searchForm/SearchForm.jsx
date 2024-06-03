import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import styles from "./searchForm.module.css";

export const SearchForm = ({ active, formOpen }) => {
  return (
    <div
      className={`${styles.searchFormWrap} ${
        active ? styles.active : undefined
      }`}
    >
      <Form className={styles.searchForms}>
        <span className={`icon bi-search ${styles.icon}`}></span>
        <FormControl
          type="text"
          placeholder="Search"
          className={`mr-sm-2 ${styles.formControl}`}
        />
        <Button variant="link" className={styles.btn} onClick={formOpen}>
          <span className="bi-x"></span>
        </Button>
      </Form>
    </div>
  );
};

export default SearchForm;
