import React from "react";
import styles from "./User.module.css";

function User(props) {
  // Pass userName and userAge into this file.
  //
  return (
      <p className={styles['user-info'] key={props.key}}>
        {props.userName} ({props.userAge})
      </p>
  );
}

export default User;
