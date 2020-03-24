import React, { useState, useEffect } from "react";
import "./App.css";
import Logo from "./components/Logo";
import RadioButtonList from "./components/RadioButtonList";
import Feature from "./components/Feature";
import Question from "./components/Question";
import features from "./features";
import Welcome from "./screens/Welcome";

function App() {
  let featureGroups = features;

  const [size, setSize] = useState("");
  const [sizeImg, setSizeImg] = useState("");
  const [sizeCopy, setSizeCopy] = useState("");

  const onSelectEventHandler = e => {
    setSize(e.target.value);
  };

  useEffect(() => {
    if (!!size === true) {
      let feature = featureGroups[0].size.featureOptions.filter(
        option => option.feature === size
      ); 
      const {featureCopy} = feature[0];
      setSizeCopy(featureCopy);
    }
  }, [size, featureGroups]);

  return (
    <div className="App">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div >
        <Welcome />
      </div>
      {/* <div className="content-wrapper">
        <div className="question-wrapper">
          <Question question={featureGroups[0].size.featureQuestion} />
        </div>
        <div className="radio-wrapper">
          <RadioButtonList
            options={featureGroups[0].size.featureOptions}
            clicked={onSelectEventHandler}
          />
        </div>
        <div className="feature-wrapper">
          <Feature imgUrl={sizeImg} copy={sizeCopy} />
        </div>
      </div> */}
    </div>
  );
}

export default App;
