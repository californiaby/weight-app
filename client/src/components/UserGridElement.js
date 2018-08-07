import React, { Component } from 'react';
import { MdEdit, MdDelete } from 'react-icons/lib/md';
import PropTypes from 'prop-types';

class UserGrid extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      user: this.props.user || []
    };
  }

  deleteUser = () => {
    fetch(`/users/${this.state.user._id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
      });

      this.props.action;
  }

  render() {
    const { user } = this.state;

    return (
      <div className="user-grid-element">
        <div className="column"><a href="#">{user.name}</a></div>
        <div className="column"><a href="#">{user.email}</a></div>
        <div className="column right">
          {/* <a href="#"><MdEdit /></a> */}
          <a href="#" onClick={this.deleteUser}><MdDelete /></a>
        </div>
      </div>
    );
      
  }
}

UserGrid.PropTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    _id: PropTypes.string
  })
}

export default UserGrid;
