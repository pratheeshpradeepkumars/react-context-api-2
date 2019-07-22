import React, { useState, useEffect, useContext } from "react";
import LoadingContext from "../context/Loading.Context";
import axios from "axios";

const User = () => {
  const { showLoading, hideLoading } = useContext(LoadingContext);
  const [users, setUsers] = useState([]);
  const fetchUsers = () => {
    setTimeout(async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUsers(response.data);
      hideLoading();
    }, 5000);
  };

  useEffect(() => {
    showLoading();
    fetchUsers();
  }, []);
  if (users.length > 0) {
    return (
      <ul>
        {users.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  } else {
    return (
      <ul>
        <li class="loading">
          <span>Loading</span>
        </li>
        <li class="loading">
          <span>Loading</span>
        </li>
        <li class="loading">
          <span>Loading</span>
        </li>
      </ul>
    );
  }
};

export default User;
