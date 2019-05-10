import React, { Component } from "react";
import axios from "axios";
import { login, register } from "../../ducks/reducer";
import { connect } from "react-redux";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  register = () => {
    const { username, password } = this.state;
    axios.post("/auth/register", { username, password }).then(user => {
      console.log(user.data);
      this.props.register(user.data);
    });
    this.props.history.push("/dashboard");
  };

  login = () => {
    const { username, password } = this.state;
    axios.post("/auth/login", { username, password }).then(user => {
      console.log(user.data);
      this.props.login(user.data);
    });
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        <input
          name="username"
          type="text"
          placeholder="Username..."
          value={this.state.username}
          onChange={e => {
            this.changeHandler(e.target.name, e.target.value);
          }}
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          placeholder="Password..."
          onChange={e => {
            this.changeHandler(e.target.name, e.target.value);
          }}
        />
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return { user: reduxState.user };
};

const mapDispatchToProps = {
  register: register,
  login: login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
