import React, { Component } from "react";
import { Link } from "react-router-dom";
import bg from "../img/background.jpg";
export default class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <h1 className="header center teal-text text-lighten-2">
                Emaily!
              </h1>
              <div className="row center">
                <h5 className="header col s12 light">
                  Collect feedback from your Clients in one click!
                </h5>
              </div>
              <div className="row center">
                <Link
                  as={"button"}
                  id="download-button"
                  className="btn-large waves-effect waves-light teal lighten-1"
                  to="/surveys"
                >
                  Get Started
                </Link>
              </div>
              <br />
            </div>
          </div>
          <div className="parallax">
            <img src={bg} alt="Unsplashed background img 1" />
          </div>
        </div>
      </div>
    );
  }
}
