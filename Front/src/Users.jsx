import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([]);
  //   const [id,setId] = useState();

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:8000/delete/${id}`)
      .then((result) => {
        console.log(result);
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/get")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="d-flex bg-primary vh-100 justify-content-center align-items-center">
      <div className="w-75 bg-white rounded p-3" style={{ maxHeight: "80vh" }}>
        <Link to="/Add" className="btn btn-success">
          Add
        </Link>
        <Link to="/" className="btn btn-secondary ms-2">
          Home
        </Link>
        <div className="table-responsive w-100" style={{ maxHeight: "60vh" }}>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td className="d-flex">
                      <Link
                        to={`/update/${user._id}`}
                        className="btn btn-success m-1"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger m-1"
                        onClick={() => deleteUser(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
