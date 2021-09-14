import React from "react";
import Entry from "./Entry";
import PropTypes from "prop-types";

function EntryList(props){
  return (
    <React.Fragment>
    <hr />
      {props.entryList.map((entry) => 
        <Entry 
        whenEntryClicked = { props.onEntrySelection }
        date={entry.date}
          description={entry.description}
          tags={entry.tags}
          notes={entry.notes}
          id={entry.id}
          key={entry.id} />
      )}
      </React.Fragment>
  );
}

EntryList.propTypes = {
  entryList: PropTypes.array,
  onEntrySelection: PropTypes.func
};

export default EntryList;