import React from "react";
import PropTypes from "prop-types";

function EntryDetail(props){
  const { entry, onClickingDelete } = props; 
  return (
    <React.Fragment>
      <h3>{entry.date}</h3>
      <h4>Entry:</h4>
      <p>{entry.description}</p>
      <h4>Additional Notes:</h4>
      <p>{entry.notes}</p>
      <h4>Tags:</h4>
      <p>{entry.tags}</p>
      <button onClick={ props.onClickingEdit }>Update/Edit Entry</button>
      <button onClick={()=> onClickingDelete(entry.id) }>Delete Entry</button>
      <hr/>
    </React.Fragment>
  );
}

EntryDetail.propTypes = {
  entry: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default EntryDetail;