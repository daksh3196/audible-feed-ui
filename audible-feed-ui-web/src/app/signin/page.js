"use client";
import React, { useState } from "react";
import sign_in from "@/firebase/singin";
import { useRouter } from "next/navigation";

function SignIn() {
  //   const [email, setEmail] = React.useState("");
  //   const [password, setPassword] = React.useState("");
  const [loginFormVals, setLoginFormVals] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign In!</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) =>
                setLoginFormVals({ ...loginFormVals, email: e.target.value })
              }
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) =>
                setLoginFormVals({ ...loginFormVals, password: e.target.value })
              }
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">SignIn</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
