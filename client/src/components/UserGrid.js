import React, { Component } from 'react';
import UserGridElement from './UserGridElement';
import AddUserButton from './AddUserButton'

class UserGrid extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  doRender = () => {
    // this.setState(this.state);
    console.log("updated!");
  }

  render() {
    const { users } = this.state;

    return (
      <div className="grid">
        <h1>Users</h1>
        
        {this.state.users.map(user =>
          // <div key={user.id}>{user.name}</div>
          <UserGridElement user={user} action={this.doRender} />
        )}
        <AddUserButton action={this.doRender}/>
      </div>
    );
      
  }
}

export default UserGrid;
