import React from "react";
<<<<<<< HEAD
import { useAppContext } from "../context/AppContext";

const Alert = () => {
  const { alertText, alertType } = useAppContext();
=======
import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();
>>>>>>> 103911dbfb12a9c2ac7f0a06ee9df531e605be41
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
