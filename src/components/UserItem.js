import React, { Component } from "react";
import { Link } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*                            USERS ITEM COMPONENT                            */
/* -------------------------------------------------------------------------- */
export default class UserItem extends Component {
  render() {
    //--- Destructuring the props
    const { user, handleDelete } = this.props;

    return (
      <li className="list-group-item d-flex justify-content-between text-capitalize">
        <h6 className="my-auto">
          {user.userName} | {user.userAge} years old
        </h6>
        <div className="icons">
          {/* Edit user button. We are passing the user props inside location query */}
          <Link
            to={{ pathname: "/UserDetails", query: { user } }}
            className="text-warning mx-2"
          >
            <i className="fas fa-user-edit" />
          </Link>
          {/* Delete button */}
          <span className="text-danger mx-2" onClick={handleDelete}>
            <i className="fas fa-trash-alt" />
          </span>
        </div>
      </li>
    );
  }
}
