import React from "react";
import { Header, CardsContaainer } from "@/components";
import styles from "./page.module.scss";

const page = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles["main-contents"]}>
        <CardsContaainer />
      </main>
    </div>
  );
};

export default page;
