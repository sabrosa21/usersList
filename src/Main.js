import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

/* -------------------------------------------------------------------------- */
/*        MAIN PAGE TO DISPLAY USERS LIST AND BUTTON TO CREATE NEW USER       */
/* -------------------------------------------------------------------------- */
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  //--- Handle create and update
  handleSubmit = (e, id) => {
    e.preventDefault();

    const currentElement = e.currentTarget.elements;
    let updatedUsers;
    const userName = currentElement.namedItem("userName").value;
    const userAge = currentElement.namedItem("userAge").value;

    //--- In case of a user update
    if (id) {
      updatedUsers = this.state.users.map((user) => {
        if (user.id === id) {
          return {
            id,
            userName,
            userAge,
          };
        }
        return user;
      });

      //--- In case of creating new user
    } else {
      const newUser = {
        id: uuid(),
        userName,
        userAge,
      };

      //--- Adds the new user to the updatedUsers array, that is a copy of the original one
      updatedUsers = [...this.state.users, newUser];
    }

    //--- Updates the users state
    this.setState({
      users: updatedUsers,
    });
  };

  //--- Handle the user delete
  handleDelete = (id) => {
    const filteredUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: filteredUsers,
    });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <Switch>
                {/* Route to Main page */}
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <UserList
                      users={this.state.users}
                      handleDelete={this.handleDelete}
                    />
                  )}
                />
                {/* Route to create/edit page */}
                <Route
                  path="/UserDetails"
                  render={(props) => (
                    <UserDetails handleSubmit={this.handleSubmit} {...props} />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
