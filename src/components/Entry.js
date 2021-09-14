import React from "react";
import PropTypes from "prop-types";

function Entry(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenEntryClicked(props.id)}>
        <h3>{props.date}</h3>
        <h4>Tags:</h4>
        <p>{props.tags}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Entry.propTypes = {
  date: PropTypes.string, //change later to make required
  description: PropTypes.string,
  tags: PropTypes.string, //change this to array later
  notes: PropTypes.string,
  id: PropTypes.string, 
  whenTicketClicked: PropTypes.func
};

export default Entry;