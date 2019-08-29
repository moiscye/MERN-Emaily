import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  // renderSurvey() {
  //   const surveysList = this.props.surveys;

  //   //surveysList.map(survey => {
  //   //return <div>{surveysList.length}</div>;

  //   surveysList.map(survey => <div>{survey.title}</div>);

  // }

  render() {
    const surveyList = this.props.surveys.reverse().map(survey => {
      return (
        <div className="card blue-grey  darken-1" key={survey._id}>
          <div className="card-content white-text ">
            <span className="title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              {" "}
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a> Yes: {survey.yes}</a>
            <a> No: {survey.no}</a>
          </div>
        </div>
      );
    });

    return <div>{surveyList}</div>;
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};
export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
