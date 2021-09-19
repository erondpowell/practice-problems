import React, {useState} from "react";

import Card from "../Utilities/Card";
import styles from "./AllUsers.module.css";

function AllUsers(props) {

  let usersElements = props.users.map((user) => <p className={styles.user}>{user.name} (Age: {user.age}){" "}</p>);

  // const mapUserList = (usersState) => {
  //   let usersElements = usersState.map((user) => <p className={styles.user}> {user.name} (Age: {user.age}) </p> );
  //   return usersElements;
  // };

  // const updateUserListHandler = (users) => {
  //   return mapUserList(props.users);
  // }

  return <Card>{usersElements}</Card>;
}

export default AllUsers;
