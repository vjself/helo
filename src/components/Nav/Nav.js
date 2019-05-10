import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { logout } from "../../ducks/reducer";
import axios from "axios";
import { connect } from "react-redux";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  logout = () => {
    axios.post("/auth/logout").then(() => {
      this.props.logout();
    });
  };

  render() {
    return (
      <div>
        <img src="https://robohash.org/robot" alt="" />
        <span>{this.props.username}</span>
        <NavLink to="/dashboard">
          <button>Home</button>
        </NavLink>
        <NavLink to="/post">
          <button>New Post</button>
        </NavLink>
        <NavLink to="/">
          <button onClick={this.logout}>Logout</button>
        </NavLink>
      </div>
    );
  }
}

const mapDispatchToProps = {
  logout: logout
};

const mapStateToProps = reduxState => {
  return { user: reduxState.user };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Nav)
);
