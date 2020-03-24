import React from "react";
import styles from './FeatureText.module.scss'

const FeatureText = ({copy}) => {
  return (
    <p className={styles.FeatureText}>
      {copy}
    </p>
  );
};

export default FeatureText;
