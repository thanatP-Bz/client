import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { info } from "./data";

const Test = () => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [people, setPeople] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (userName) {
      setShowModal(!showModal);
      setPeople([...people, { id: Math.random().toString(), userName, age }]);
      setUserName("");
      setAge("");
    }
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && <Modal />}
      <form onSubmit={handlerSubmit}>
        <label htmlFor={userName}>Name</label>
        <input
          type="text"
          value={userName}
          name="userName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor={age}>Age</label>
        <input
          type="text"
          value={age}
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="sumit">click</button>
      </form>
      {people.map((person) => {
        return (
          <h3 id={person.id}>
            {person.userName} {person.age}
          </h3>
        );
      })}
    </>
  );
};

export default Test;
