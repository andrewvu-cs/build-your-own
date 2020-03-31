import React from "react";
import WelcomeButtonList from "../components/WelcomeButtonList";

import styles from "./Welcome.module.scss";

const Welcome = ({clicked}) => {
  const options = [
    {
      id: 1,
      value: "flexibility",
      name: "Flexibility features",
    },
    {
      id: 2,
      value: "drying",
      name: "Superior drying",
    },
    {
      id: 3,
      value: "design",
      name: "Design and style",
    },
    {
      id: 4,
      value: "sound",
      name: "Quiet operation"
    }
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
        <WelcomeButtonList options={options} clicked={clicked}/>
      </div>
    </div>
  );
};

export default Welcome;
