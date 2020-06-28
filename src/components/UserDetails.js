import React, { Component } from "react";
import { Link } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*                              CREATE/EDIT PAGE                              */
/* -------------------------------------------------------------------------- */
export default class UserDetails extends Component {
  //---Function to handle form submit and route to Main page
  handleChangePage = (e, id) => {
    this.props.handleSubmit(e, id);
    this.props.history.push("/");
  };

  render() {
    const {
      location: { query },
    } = this.props;

    //--- Once query can be empty we have to check it. If yes set to empty object
    const { userName, userAge, id } = query ? query.user : {};

    return (
      <div>
        <h1 className="text-capitalize text-center">
          {/* Set title according to query value (empty or populated)*/}
          {query ? "Edit User" : "Create User"}
        </h1>
        <div className="card card-body my-3">
          {/* Pass the form events and id onSubmit */}
          <form onSubmit={(e) => this.handleChangePage(e, id)}>
            <div className="input-group">
              <div className="form-group col-12">
                <label className="">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="userName"
                  //--- If userName doesn't exists the value will be empty
                  defaultValue={userName}
                  required
                />
              </div>
              <div className="form-group col-12">
                <label className="">Age</label>
                <input
                  type="number"
                  className="form-control"
                  name="userAge"
                  //--- If userName doesn't exists the value will be empty
                  defaultValue={userAge}
                  required
                />
              </div>
            </div>
            <div className="d-flex justify-content-between col-12 mx-auto">
              <Link to="/" className="btn btn-secondary">
                Cancel
              </Link>
              <button className="btn btn-success" type="submit">
                {/* Set title according to query value (empty or populated) */}
                {query ? "Edit" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
