import React, { PropTypes } from 'react';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  onUserNameChange(e) {
    this.props.actions.changeName(this.props.user.id, e.target.value);
  }

  render() {
    let user = this.props.user;

    return (
      <div>
        <h2>{user.name} details!</h2>
        <div><label>id:</label> {user.id}</div>
        <div>
          <label>name: </label>
          <input value={user.name} onChange={this.onUserNameChange.bind(this)} placeholder="name" />
        </div>
      </div>
    );
  }
}

UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default UserDetail;
