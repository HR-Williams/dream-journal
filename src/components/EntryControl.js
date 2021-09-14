import React from 'react';
import NewEntryForm from './NewEntryForm';
import EntryList from './EntryList';
import EntryDetail from './EntryDetail';
import EditEntryForm from './EditEntryForm';
// import { connect } from 'react-redux';
import PropTypes from "prop-types";
// import * as a from './../actions';
// import { withFirestore, isLoaded } from 'react-redux-firebase'

class EntryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainEntryList: [],
      selectedEntry: null,
      editing: false
    };
  }

  handleAddingNewEntryToList = (newEntry) => {
    const newMainEntryList = this.state.mainEntryList.concat(newEntry);
    this.setState({
      mainEntryList: newMainEntryList,
      formVisibleOnPage: false 
    });
  }

  handleClick = () => {
    if (this.state.selectedEntry!= null) {
      this.setState({
        formVisibleOnPage: false,
        selectedEntry: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedEntry = (id) => {
    const selectedEntry = this.state.mainEntryList.filter(entry => entry.id === id)[0];
    this.setState({selectedEntry: selectedEntry});
  }

  handleDeletingEntry = (id) => {
    const newMainEntryList = this.state.mainEntryList.filter(entry => entry.id !== id);
    this.setState({
      mainEntryList: newMainEntryList,
      selectedEntry: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingEntryInList = (entryToEdit) => {
    const editedMainEntryList = this.state.mainEntryList
      .filter(entry => entry.id !== this.state.selectedEntry.id)
      .concat(entryToEdit);
    this.setState({
        mainEntryList: editedMainEntryList,
        editing: false,
        selectedEntry: null
      });
  }
  

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditEntryForm entry = {this.state.selectedEntry} onEditEntry = {this.handleEditingEntryInList} />
      buttonText = "Return to Dream List";
    } else if (this.state.selectedEntry != null) {
      currentlyVisibleState = <EntryDetail 
      entry = {this.state.selectedEntry} onClickingDelete = {this.handleDeletingEntry}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to your Dream List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewEntryForm onNewEntryCreation={this.handleAddingNewEntryToList}  />;
      buttonText = "Return to your Dream List";
    } else {
      currentlyVisibleState = <EntryList entryList={this.state.mainEntryList} onEntrySelection={this.handleChangingSelectedEntry} />;
      buttonText = "Add a Dream Entry";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default EntryControl;