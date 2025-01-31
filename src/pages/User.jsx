import React from "react";
import { useState, useEffect } from "react";
import UserService from "../services/user.service";
const User = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = () => {
    UserService.get()
      .then((response) => {
        setUsers(response.data);
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
  <div>
    <ul>
        {users.map((user)=>(
            <li key={user.id}>{user.name}{user.email}</li>
        ))}
    </ul>
    </div>
  );
};

export default User;
