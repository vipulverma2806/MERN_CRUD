import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:2000/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result);
        
      })
      .catch((err) => {
        console.log(err);
      });

      navigate("/")
    
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100 ">
      <div className="d-flex flex-column vh-50 w-25 bg-white rounded p-3 border border-1 border-black">
        <h4>Register:</h4>
        <form onSubmit={handleSignUp}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control border-1 border-black"
              id="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
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

          <button className="btn btn-success w-100" type="submit">
            SignUp
          </button>
          <div id="emailHelp" className="form-text">
            Already have an account:
          </div>
          <Link to="/" className="btn btn-secondary w-100 mt-2 ">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
