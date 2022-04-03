import React, { useState, useEffect } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const intialState = {
  name: "",
  email: "",
  password: "",
  isMember: "",
};

const Register = () => {
  const [value, setValue] = useState(intialState);

  const HandlerChange = (e) => console.log(e.target);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        <div className="form-row">
          <label htmlFor="name" className="from-label">
            name
          </label>
          <input
            type="text"
            name="name"
            value={value.name}
            onChange={HandlerChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
