import React from "react";
import styles from "./WelcomeButton.module.scss";

const WelcomeButton = ({ option, clicked }) => {
  return (
    <div className={styles.wrapper}>
      <label>
      <span className={styles.span}>{option}</span>
        <input
          type="radio"
          id={option}
          name="size"
          value={option}
          className={styles.form_radio}
          onClick={clicked}
        />
        
      </label>
    </div>
  );
};

export default WelcomeButton;
