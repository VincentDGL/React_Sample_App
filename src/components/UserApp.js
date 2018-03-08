import React, { PropTypes } from 'react';
import UserDetail from './UserDetail';

class UserApp extends React.Component {
  constructor(props) {
    super(props);
  }

  onUserClick(id) {
    this.props.actions.selectUser(id);
  }

  render() {
    let appState = this.props.userAppState;
    let actions = this.props.actions;

    return (
      <div>
        <h1>{appState.title}</h1>
        <h2>My Users</h2>
        <ul className="users">
          {appState.users.map(user =>
            <li className={appState.selectedUser && user.id === appState.selectedUser.id ? 'selected' : ''}
              key={user.id}
              onClick={this.onUserClick.bind(this, user.id)}>
              <span className="badge">{user.id}</span> {user.name}
            </li>
          )}
        </ul>

        {appState.selectedUser ?
          <UserDetail key={appState.selectedUser.id} user={appState.selectedUser} actions={actions} />
          : null
        }
      </div>
    );
  }
}

UserApp.propTypes = {
  actions: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired
};

export default UserApp;
