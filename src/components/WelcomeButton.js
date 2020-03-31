import React from "react";
import styles from "./WelcomeButton.module.scss";

const WelcomeButton = ({ value, option, clicked }) => {
  return (
    <div className={styles.wrapper}>
      <label>
      <span className={styles.span}>{option}</span>
        <input
          type="radio"
          id={option}
          name="size"
          value={value}
          className={styles.form_radio}
          onClick={clicked}
        />
      </label>
    </div>
  );
};

export default WelcomeButton;
