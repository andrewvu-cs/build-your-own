import React from "react";
import RadioButton from "./RadioButton";
import styles from "./RadioButtonList.module.scss";

const RadioButtonList = ({ options }) => {
  return (
    <div className={styles.wrapper}>
      {options.map(option => (
        <RadioButton option={option} />
      ))}
    </div>
  );
};

export default RadioButtonList;
