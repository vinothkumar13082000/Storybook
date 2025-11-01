import React from "react";
import "./Light.scss";

type props = {
  /** only Three variants only you can add */
  variant?: "green" | "red" | "yellow";
};

const Light = ({ variant = "green" }: props) => {
  /**This is Traffic Light component*/
  return <div className={`${variant}-light light`}></div>;
};

export default Light;
