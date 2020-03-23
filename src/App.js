import React from "react";
import "./App.css";
import RadioButtonList from "./components/RadioButtonList";
import Feature from "./components/Feature";
import Question from "./components/Question";

function App() {
  let options = ['24"', '24" ADA Compliant', '18" ADA Compliant'];

  return (
    <div className="App">
      <div className="question-wrapper">
        <Question />
      </div>
      <div className="radio-wrapper">
        <RadioButtonList options={options} />
      </div>
      <div className="feature-wrapper">
        <Feature />
      </div>
    </div>
  );
}

export default App;
