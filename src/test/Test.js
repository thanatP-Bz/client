import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { info } from "./data";

const Test = () => {
  const [userName, setUserName] = useState("");
  const [people, setPeople] = useState(info);
  const [showModal, setShowModal] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (userName) {
      setPeople([...people, { id: Math.random().toString(), userName }]);
      setShowModal(!showModal);
      setUserName("");
    }
    setShowModal(!showModal);
  };

  const handlerChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={userName}
          name="username"
          onChange={handlerChange}
        />
        <button type="sumit">click</button>
      </form>
      {people.map((person) => {
        const { name, age, id, userName } = person;
        return (
          <h3 key={id}>
            {name} {age}
            {userName}
          </h3>
        );
      })}
    </>
  );
};

export default Test;
