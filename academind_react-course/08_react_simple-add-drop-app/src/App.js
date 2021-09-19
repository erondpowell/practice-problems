import React, {useState} from 'react';
import UserInput from './Components/UserInput/UserInput.js';
import AllUsers from './Components/AllUsers/AllUsers';

function App() {

  let users_db = [{name: "juergen", age:"46", id: "3246245"}, {name: '1', age: '2', id:'3'}];

  const [users, setUsers] = useState(users_db);

  // append UserInfo submissions into an array.
  const addUserHandler = (userInfo) => {
    // setUsers((previousUserInfo) => [userInfo, ...previousUserInfo]);
    setUsers((previousUserInfo) => [userInfo].concat(previousUserInfo));
    users_db = [userInfo].concat(users);
    console.log("users_db", users_db);
    console.log("users", users);
  }

  return (
    <div>
      <UserInput addUser={addUserHandler} />
      <AllUsers users={users}/>
    </div>
  );
}

export default App;
