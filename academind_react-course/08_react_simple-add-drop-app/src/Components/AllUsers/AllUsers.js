import React from "react";

import Card from "../Utilities/Card";
import styles from "./AllUsers.module.css";

function AllUsers(props) {

  let usersElements = props.users.map((user) => <p className={styles.user}>{user.name} (Age: {user.age}){" "}</p>);

  return <Card>{usersElements}</Card>;
}

export default AllUsers;
