import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

class LogIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("this.state", this.state);

    this.props.loginUser(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <div
        className="section"
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          textAlign: "center"
        }}
      >
        <div className="section" />

        <h5 className="indigo-text">Please, login into your account</h5>
        <div className="section" />

        <div className="container">
          <div
            className="z-depth-1 grey lighten-5 row"
            style={{
              display: "inline-block",
              padding: "32px 48px 0px 48px",
              border: "1px solid #EEE"
            }}
          >
            <form className="col s12">
              <div className="row">
                <div className="col s12" />
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    className="validate"
                    type="email"
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="email">Enter your email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    className="validate"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password">Enter your password</label>
                </div>
              </div>

              <br />
              <center>
                <div className="row">
                  <button
                    type="button"
                    name="btn_login"
                    className="col s12 btn btn-large waves-effect indigo "
                    style={{ margin: "10px 0" }}
                    onClick={this.handleSubmit}
                  >
                    Login
                  </button>

                  <a
                    type="button"
                    name="google_login"
                    style={{ margin: "10px 0" }}
                    className="col s12 btn btn-large waves-effect btn-google"
                    href="/auth/google"
                  >
                    Sign in with google
                  </a>
                </div>
              </center>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(LogIn);
