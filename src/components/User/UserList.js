import React from "react";

import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className='users'>
      <ul>
        {props.users.map((user) => {
         return (
            <li key={user.id}>
              {user.name} ({user.age} years old) attends {user.cname} college.
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
