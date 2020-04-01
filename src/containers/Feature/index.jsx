import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Question from "../../components/Question";
import Option from "../../components/Option";

const Feature = ({ name, items }) => {
  let query = new URLSearchParams(useLocation().search);
  let location = useLocation();
  // console.log(location);
  // console.log(items);
  const [choice, setChoice] = useState('')

  const onSelectChoice = e => {
    setChoice(e.target.value);
    console.log(choice);
  }


  return (
    <div>
      <p>QUESTION PLACEHOLDER</p>
      {items.map(item => (
        <Option
          key={item.listItemID}
          name={name}
          value={item.listItemID}
          label={item.listItemValue}
          clicked={onSelectChoice}
        />
      ))}
      <p></p>
    </div>
  );
};

export default Feature;
