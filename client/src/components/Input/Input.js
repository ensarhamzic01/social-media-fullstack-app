import React from "react";
import "./Input.css";

const Input = ({ label, type, placeholder }) => {
  return (
    <div className="inputDiv">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
