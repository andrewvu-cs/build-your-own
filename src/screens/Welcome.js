import React from "react";
import WelcomeButtonList from "../components/WelcomeButtonList";

import styles from "./Welcome.module.scss";

const Welcome = () => {
  const options = [
    "Flexibility features",
    "Superior drying",
    "Design and style",
    "Quiet operation"
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h1 className={styles.textHeader}>
          Welcome the the Bosch Dishwasher Selector
        </h1>
        <hr />
        <p className={styles.text}>
          <br />
          You probably have a wishlist in mind when it comes to your next
          dishwasher. To help select the perfect Bosch dishwasher for you, tell
          us what features insterest you the most.
        </p>
      </div>
      <div className={styles.radioWrapper}>
        <WelcomeButtonList options={options} />
      </div>
    </div>
  );
};

export default Welcome;
