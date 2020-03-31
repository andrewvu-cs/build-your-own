import React from "react";
import WelcomeButton from "./WelcomeButton";
import styles from "./WelcomeButtonList.module.scss";

const WelcomeButtonList = ({ options, clicked }) => {
  return (
    <div className={styles.wrapper}>
      {options.map(option => (
        <WelcomeButton
          key={option.id}
          value={option.value}
          option={option.name}
          clicked={clicked}
        />
      ))}
    </div>
  );
};

export default WelcomeButtonList;
