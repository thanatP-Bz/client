import React, { useState, useReducer } from "react";
import { info } from "./data";

const Test = () => {
  const [userName, setUserName] = useState("");
  const [people, setPeople] = useState(info);
  const [showModel, setShowModel] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handlerChange = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={userName.name}
          name="username"
          onChange={handlerChange}
        />
        <button type="sumit">click</button>
      </form>
      {info.map((person) => {
        const { name, age } = person;
        return (
          <h3>
            {name} {age}
          </h3>
        );
      })}
    </>
  );
};

export default Test;
