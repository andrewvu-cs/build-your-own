import React from "react";
import WelcomeButton from "./WelcomeButton";
import styles from "./WelcomeButtonList.module.scss";

const WelcomeButtonList = ({ options, clicked }) => {
  return (
    <div className={styles.wrapper}>
      {options.map(option => (
        <WelcomeButton id={option.feature} option={option} clicked={clicked}/>
      ))}
    </div>
  );
};

export default WelcomeButtonList;
