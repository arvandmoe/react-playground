import { NextPage } from "next";
import React from "react";
import styles from "./BillingPage.module.scss";

const BillingPage : NextPage = () => {
  return (
    <div className={styles.container}>
      <div id="sidebar" className={styles.sidebar}>
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <div id="content" className={styles.content}>
        Main
      </div>
    </div>
  );
};

export default BillingPage;
