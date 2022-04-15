import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { info } from "./data";

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: "item added",
    };
  }
  throw new Error("value not found");
};

const initialState = {
  people: [],
  showModal: false,
  modalContent: "hello",
};

const Test = () => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: new Date().getTime().toString(), userName, age };
    if (userName && age) {
      dispatch({ type: "ADD_ITEM", payload: newItem });
    } else {
      dispatch({ type: "RANDOM" });
    }
  };

  return (
    <>
      {state.showModal && <Modal modalContent={state.modalContent} />}
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
      {state.people.map((person) => {
        return (
          <h3 key={person.id}>
            {person.userName} {person.age}
          </h3>
        );
      })}
    </>
  );
};

export default Test;
