import React, {useState} from "react";

import AddUser from "./components/User/AddUser";

import UserList from './components/User/UserList'

function App() {
  const [userData, updatedData] = useState([])

  const addUserHandler = (UName,UAge,id) => {
  updatedData((prevUsersList)=> {
   return [...prevUsersList, {name:UName,age:UAge,id:id}]
  })
  }
 
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userData}/>
    </div>
  );
}

export default App;
