import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions";

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const fieldList = formFields.map(({ name, label }) => (
    <div key={name}>
      <label>{label}</label> <div>{formValues[name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Please confirm your information carefully</h5>
      {fieldList}
      <button
        type="button"
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
        <i className="material-icons right">back</i>
        Back
      </button>
      <button
        type="button"
        className="green right  btn-flat white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        <i className="material-icons right">email</i>
        Send Survey
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);

  return { formValues: state.form.surveyForm.values };
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyReview));
