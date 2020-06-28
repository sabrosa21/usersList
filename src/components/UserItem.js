import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserItem extends Component {
  render() {
    const { user, handleDelete } = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between text-capitalize">
        <h6 className="my-auto">
          {user.userName} | {user.userAge} years old
        </h6>
        <div className="icons">
          <Link
            to={{ pathname: "/UserDetails", query: { user } }}
            className="text-warning mx-2"
          >
            <i className="fas fa-user-edit" />
          </Link>
          <span className="text-danger mx-2" onClick={handleDelete}>
            <i className="fas fa-trash-alt" />
          </span>
        </div>
      </li>
    );
  }
}
