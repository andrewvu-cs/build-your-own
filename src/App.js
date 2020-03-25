import React, { useState } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Logo from "./components/Logo";
import features from "./features";
import Welcome from "./screens/Welcome";
import Content from "./screens/Content";

function App() {

  // dummy data
  let featureGroups = features;

  const [mainChoice, setMainChoice] = useState("");

  const onMainChoiceEventHandler = e => {
    setMainChoice(e.target.value);
  };

  return (
    <div className="App">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <Router>
        <Welcome path="/" clicked={onMainChoiceEventHandler} />
        {featureGroups.map(group => (
          <Content
            key={group.groupID}
            path={group.path}
            question={group.featureDetails.featureQuestion}
            options={group.featureDetails.featureOptions}
          />
        ))}
      </Router>
    </div>
  );
}

export default App;
