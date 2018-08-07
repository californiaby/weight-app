import React, { Component } from 'react';

class AddUserForm extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value
    }

    fetch('/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.props.action;
      });

    this.setState({

    })
  }

  render() {
    return (
      <div>
        <form id="addUser" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />

          <button>Save user</button>
        </form>
      </div>
    );
  }
}

export default AddUserForm;
