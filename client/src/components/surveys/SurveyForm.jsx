import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import formFields from "./formFields";

import validateEmails from "../../utils/validateEmails";
class SurveyForm extends Component {
  renderFields() {
    return formFields.map(({ name, label }) => (
      <Field
        label={label}
        type="text"
        name={name}
        component={SurveyField}
        key={name}
      />
    ));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
            <i className="material-icons right">cancel</i>
          </Link>
        </form>
      </div>
    );
  }
}

//values object is comming from reduxForm
const validate = values => {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || "");
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
