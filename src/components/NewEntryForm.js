import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewEntryForm(props){
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewEntryFormSubmission}
        buttonText="Submit Entry" />
    </React.Fragment>
  );

  function handleNewEntryFormSubmission(event) {
    event.preventDefault();
    props.onNewEntryCreation({date: event.target.date.value, description: event.target.description.value, tags: event.target.tags.value, notes: event.target.notes.value, id: v4()});
  }
}

NewEntryForm.propTypes = {
  onNewEntryCreation: PropTypes.func
};

export default NewEntryForm;