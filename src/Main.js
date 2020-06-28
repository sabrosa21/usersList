import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

//--- Main page to display Users List and button to create new User
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  handleSubmit = (e, id) => {
    e.preventDefault();

    const currentElement = e.currentTarget.elements;
    let updatedUsers;
    const userName = currentElement.namedItem("userName").value;
    const userAge = currentElement.namedItem("userAge").value;

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
    } else {
      const newUser = {
        id: uuid(),
        userName,
        userAge,
      };

      updatedUsers = [...this.state.users, newUser];
    }

    this.setState({
      users: updatedUsers,
    });
  };

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
