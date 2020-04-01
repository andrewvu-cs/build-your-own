import React from "react";

const Option = ({ value, label, name , clicked}) => {
  return (
    <div>
      <input type="radio" value={value} name={name} onClick={clicked} />
      <label>{label}</label>
    </div>
  );
};

export default Option;
