import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const url = process.env.REACT_APP_URL;

  const onChangeUsername = e => {
    setUsername(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const user = { username };

    axios
      .post(`${user}/users/add`, user)
      .then(res => console.log(res.data))
      .catch(e => console.log(e));
    window.location = "/";
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username: </label>
          <input
            type='text'
            required
            value={username}
            placeholder='Enter new username'
            onChange={onChangeUsername}
          />
        </div>

        <div>
          <button type='submit' className='btn'>
            Create Exercise Log
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
