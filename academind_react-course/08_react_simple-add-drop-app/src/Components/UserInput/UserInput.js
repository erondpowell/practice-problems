import React, { useState } from "react";
import Card from "../Utilities/Card";

import styles from "./UserInput.module.css";

function UserInput(props) {
  const [formValue, setFormValue] = useState('');

  const getUserHandler = (event) => {
    // blocks page reload
    event.preventDefault();

    // storing form data
    const inputUserInfo = new FormData(event.target);
    const value = Object.fromEntries(inputUserInfo.entries())
    const newUser = {
      ...value,
      id: Math.random()
    }

    //  Pass Data up --> replace console.log w/callback.
    // console.log(value);
    props.addUser(newUser);

    // Clearing Out Form Values
    setFormValue('');
    document.getElementById('name').value = formValue;
    document.getElementById('age').value = formValue;
  }

  return (
    <Card className={styles.userInput}>
        <form id="form" action="submit" onSubmit={getUserHandler}>
          <label for="name">Name</label>
          <input type="text" name="name" id="name"></input>

          <label for="age">Age</label>
          <input type="number" name="age" id="age"></input>

          <button type="submit">Submit</button>
        </form>
    </Card>
  );
}

export default UserInput;
