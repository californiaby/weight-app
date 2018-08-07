import React, { Component } from 'react';
import AddUserForm from './AddUserForm';

class AddUserButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayForm: false
    };
  }

  toggleDisplayForm = () => {
    const currentState = this.state.displayForm;

    this.setState({
      displayForm: !currentState
    });
  }

  render() {
    const { displayForm } = this.state;

    return (
      <div className="user-grid-element">
        <div className="column"><a href="#" onClick={this.toggleDisplayForm}>Add user</a></div>
        
        {displayForm && 
          <div className="column"><AddUserForm action={this.props.action}/></div>
        }
      </div>
      
    );
      
  }
}

export default AddUserButton;
