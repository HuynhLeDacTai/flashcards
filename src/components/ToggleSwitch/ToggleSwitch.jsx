import React from "react";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  return (
    <>
      <input type="checkbox" id="switch-pure" />
      <label for="switch" id="switch-label">
        Toggle
      </label>
    </>
  );
};

export default ToggleSwitch;
