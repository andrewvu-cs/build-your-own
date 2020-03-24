import React from "react";
import styles from "./Question.module.scss";

const Question = ({question}) => {
  return (
    <div className={styles.wrapper}>
      <p>
        {question}
      </p>
    </div>
  );
};

export default Question;
