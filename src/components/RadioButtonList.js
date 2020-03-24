import React from "react";
import RadioButton from "./RadioButton";
import styles from "./RadioButtonList.module.scss";

const RadioButtonList = ({ options, clicked }) => {
  return (
    <div className={styles.wrapper}>
      {options.map(option => (
        <RadioButton id={option.feature} option={option.feature} clicked={clicked}/>
      ))}
    </div>
  );
};

export default RadioButtonList;
