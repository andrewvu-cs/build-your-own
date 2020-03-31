import React, { useState, useEffect } from "react";
import Question from "../components/Question";
import RadioButtonList from "../components/RadioButtonList";
import Feature from "../components/Feature";
import styles from "./Content.module.scss";
import PrimaryButton from "../components/PrimaryButton";

const Content = ({ question, options, nextPath, navigate }) => {
  const [choice, setChoice] = useState("");
  const [choiceCopy, setChoiceCopy] = useState("");

  useEffect(() => {
    if (!!choice === true) {
      let selectedOption = options.filter(option => option.feature === choice);
      const { featureCopy } = selectedOption[0];
      setChoiceCopy(featureCopy);
    }
  }, [choice, options]);

  const onChoiceEventHandler = e => {
    console.log(navigate);
    setChoice(e.target.value);
  };

  const onNextEventHandler = e => {
    navigate(nextPath);
  };

  const onPrevEventHandler = e => {
    window.history.back();
  };

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.questionWrapper}>
        <Question question={question} />
      </div>
      <div className={styles.radioWrapper}>
        <RadioButtonList options={options} clicked={onChoiceEventHandler} />
      </div>
      <div className={styles.featureWrapper}>
        <Feature copy={choiceCopy} />
        <div className={styles.buttonWrapper}>
          <PrimaryButton clicked={onPrevEventHandler}>Prev</PrimaryButton>
          <PrimaryButton clicked={onNextEventHandler}>Next</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Content;
