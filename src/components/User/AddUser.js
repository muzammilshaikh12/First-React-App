import React, { useState } from "react";

import Card from "../UI/Card";

import Button from "../UI/Button";

import "./AddUser.css";

import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error,setError] = useState()
  const UsernameChangeHandler = (event) => {
    setenteredUsername(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({title:'Invalid input', message:'Please enter valid inputs.'})
      return;
    }
    if (+enteredAge < 0) {
      setError({title:'Invalid age', message:'Please enter a valid age(>0).'})
      return;
    }

    setenteredUsername("");
    setAge("");
    let id = Math.random();
    props.onAddUser(enteredUsername, enteredAge, id);
  };

  const ErrorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler}/>}
      <Card className="input">
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={UsernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={AgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
