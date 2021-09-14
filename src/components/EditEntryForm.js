import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditEntryForm (props) {
  const { entry } = props;

  function handleEditEntryFormSubmission(event) {
    event.preventDefault();
    props.onEditEntry({date: event.target.date.value, description: event.target.description.value, tags: event.target.tags.value, notes: event.target.notes.value, id: entry.id});
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditEntryFormSubmission} 
        buttonText="Edit/Update Entry" />
    </React.Fragment>
  );
}

EditEntryForm.propTypes = {
  entry: PropTypes.object,
  onEditEntry: PropTypes.func
};

export default EditEntryForm;