import React from "react";

const Select = ({ option }) => {
  return (
    <div>
      <label htmlFor="select-item">Select d</label>;
      <select name="" id="select-item">
        {option.map((item, index) => {
          const { op1 } = item;
          return <option key={index}>{op1}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
