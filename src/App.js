import React, { useState } from "react";
import { Router, navigate } from "@reach/router";
import "./App.css";
import Logo from "./components/Logo";
import features from "./features";
import Welcome from "./screens/Welcome";
import Content from "./screens/Content";
import Done from "./screens/Done";

function App() {
  // dummy data
  let featureGroups = features;

  const [mainChoice, setMainChoice] = useState("");

  const onMainChoiceEventHandler = e => {
    setMainChoice(e.target.value);
    console.log(mainChoice);
    navigate("/size");
  };

  const Root = ({ children }) => {
    return children;
  }

  return (
    <div className="App">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <Router>
        <Root path="/">
        <Welcome path="/" clicked={onMainChoiceEventHandler}>
          {featureGroups.map(group => (
            <Content
              navigate={navigate}
              key={group.groupID}
              path={group.path}
              nextPath={mainChoice === "flexibility" ? group.flexPath : null}
              question={group.featureDetails.featureQuestion}
              options={group.featureDetails.featureOptions}
            />
          ))}
        </Welcome>
        <Done path="/finished" />
        </Root>
      </Router>
    </div>
  );
}

export default App;
