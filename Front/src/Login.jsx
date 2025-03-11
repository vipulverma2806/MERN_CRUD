import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:2000/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/Users");
        } else {
          console.log(result.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100 ">
      <div className="d-flex flex-column justify-content-center align-items-center vh-50 w-25 bg-white rounded p-3 border border-1 border-black">
        <h4>Login to Access User data</h4>
        <form onSubmit={handleSignUp}>
          <div className="">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control border-1 border-black"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control border-1 border-black"
              id="exampleInputPassword1"
              onChange={(e) => setPass(e.target.value)}
            ></input>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
          <div id="emailHelp" className="form-text">
            Don't have an account:
          </div>
          <Link
            to="/signUp"
            type="submit"
            className="btn btn-secondary w-100 mt-2 "
          >
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
