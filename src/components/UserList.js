import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";

/* -------------------------------------------------------------------------- */
/*                            USERS LIST COMPONENT                            */
/* -------------------------------------------------------------------------- */
export default class UserList extends Component {
  render() {
    //--- Destructuring the props
    const { users, handleDelete } = this.props;
    return (
      <div>
        <h1 className="text-capitalize text-center">Users List</h1>
        <div className="text-center mt-5">
          <Link to="/UserDetails" className="btn btn-success">
            Create user
          </Link>
        </div>
        <ul className="list-group my-5">
          {/* Map into users array each user item */}
          {users.map((user) => {
            return (
              <UserItem
                key={user.id}
                user={user}
                handleDelete={() => handleDelete(user.id)} //We need to use an arrow function to not invoke the handleDelete function itself
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
