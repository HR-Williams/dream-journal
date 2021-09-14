import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type='date'
          name='date'
          placeholder='Date' />
        <textarea
          type='text'
          name='description'
          placeholder='Entry' />
        <textarea
          name='tags'
          placeholder='Tags' />
        <textarea
          name='notes'
          placeholder='Additional Notes' /> 
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;