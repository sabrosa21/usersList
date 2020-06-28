import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserDetails extends Component {
  handleChangePage = (e, id) => {
    this.props.handleSubmit(e, id);
    this.props.history.push("/");
  };

  render() {
    const {
      location: { query },
    } = this.props;

    const { userName, userAge, id } = query ? query.user : {};

    return (
      <div>
        <h1 className="text-capitalize text-center">
          {query ? "Edit User" : "Create User"}
        </h1>
        <div className="card card-body my-3">
          <form onSubmit={(e) => this.handleChangePage(e, id)}>
            <div className="input-group">
              <div className="form-group col-12">
                <label className="">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="userName"
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
                  defaultValue={userAge} //--- valida se existe o query, caso contrario coloca a vazio
                  required
                />
              </div>
            </div>
            <div className="d-flex justify-content-between col-12 mx-auto">
              <Link to="/" className="btn btn-secondary">
                Cancel
              </Link>
              <button className="btn btn-success" type="submit">
                {query ? "Edit" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
