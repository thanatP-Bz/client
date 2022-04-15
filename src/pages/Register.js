import React, { useState } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
<<<<<<< HEAD
import { useAppContext } from "../context/AppContext";
=======
import { useAppContext } from "../context/appContext";
>>>>>>> 103911dbfb12a9c2ac7f0a06ee9df531e605be41

const intialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(intialState);

  //gobal state and useNavigate
<<<<<<< HEAD
  const { isLoading, showAlert, displayAlert, clearAlert } = useAppContext();
=======
  const { isLoading, showAlert, displayAlert } = useAppContext();
>>>>>>> 103911dbfb12a9c2ac7f0a06ee9df531e605be41

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handlerChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    const { email, password, name, isMember } = values;
=======
    const { name, email, password, isMember } = values;
>>>>>>> 103911dbfb12a9c2ac7f0a06ee9df531e605be41
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
<<<<<<< HEAD
    clearAlert();
=======
    console.log(values);
>>>>>>> 103911dbfb12a9c2ac7f0a06ee9df531e605be41
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handlerChange={handlerChange}
          />
        )}
        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handlerChange={handlerChange}
        />
        {/* password input */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handlerChange={handlerChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet ?" : "Already a member ?"}
          <button type="submit" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
