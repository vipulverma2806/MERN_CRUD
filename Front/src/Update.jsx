import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  });

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const updateData = () => {
    axios.put(`http://localhost:8000/update/${id}`, {
        name:name,
        email:email,
        age:age,
    }).then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(result);
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="w-75 h-80 bg-white rounded p-3">
        <h2>Update User</h2>
        <form>
          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="mb-2  ">
            <label htmlFor="age" className="form-label">
              Age:
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </div>
          <Link to="/Users"
            
            className="btn btn-success"
            onClick={() => updateData()}
          >
            Update
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
