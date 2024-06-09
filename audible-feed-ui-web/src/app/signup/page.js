"use client";
import React, { useState } from "react";
import sign_up from "@/firebase/singup";

const SignUp = () => {
  const [regFormVals, setRegFormVals] = useState({
    email: "",
    name: "",
    password: "",
    rePassword: "",
  });

  const [errRegFormVals, setErrRegFormVals] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const FORM_TEMPALTE = [
    {
      name: "email",
      type: "input",
      validator: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
    },
    {
      name: "password",
      type: "input",
      validator:
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
    },
    {
      name: "repassword",
      type: "input",
      validator:
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
    },
  ];

  function formChange(_e, name) {
    setRegFormVals({ ...regFormVals, [name]: _e.target.value });
  }

  function validateSignUpForm(formVals) {
    if (!formVals.password.length > -1 || formVals.password.length < 4) {
      setErrRegFormVals({
        ...errRegFormVals,
        password: "Password length should be more than 4 characters.",
      });
    }
    if (formVals.password !== formVals.rePassword) {
      setErrRegFormVals({
        ...errRegFormVals,
        rePassword: "Passwords do not match",
      });
    }
    return (
      formVals.email.length > 0 &&
      formVals.password.length > 0 &&
      formVals.rePassword.length > 0 &&
      formVals.password === formVals.rePassword
    );
  }

  const handleForm = async (event) => {
    event.preventDefault();
    console.log("sign up cred", regFormVals);
    if (validateSignUpForm(regFormVals)) {
      console.log("sign up cred", regFormVals);
      const { sign_up_res, sign_up_err } = await sign_up(
        regFormVals.email,
        regFormVals.password
      );

      if (sign_up_err) {
        console.log(sign_up_res, sign_up_err);
        return;
      }

      // // else successful
      console.log(sign_up_res);
    } else {
      console.error("not validated");
    }
    //   return router.push("/admin");
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign up</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => formChange(e, "email")}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="name">
            <p>Display Name</p>
            <input
              onChange={(e) => formChange(e, "name")}
              required
              type="text"
              name="name"
              id="name"
              placeholder="Your display name"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => formChange(e, "password")}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <label htmlFor="rePassword">
            <p>Re-enter Password</p>
            <input
              onChange={(e) => formChange(e, "rePassword")}
              required
              type="password"
              name="rePassword"
              id="rePassword"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
