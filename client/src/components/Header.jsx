import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";
import Payments from "./Payments";
class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Sign in with google</a>
          </li>
        );
      default:
        return (
          <>
            <li>
              <Payments />
            </li>
            <li style={{ margin: "0 10px" }}>{`Credits: ${
              this.props.auth.credits
            }`}</li>
            <li>
              {/* <a onClick={this.props.logOutUser}>Log Out</a> */}
              <a href="/api/logout">Log Out</a>
            </li>
          </>
        );
    }
  };

  render() {
    console.log("rrender", this.props);

    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Logo
          </Link>
          <ul className="right ">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  actions
)(Header);
