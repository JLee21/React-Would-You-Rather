import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import PropTypes from 'prop-types';

/*
  Get from the store: all users and authedUser.
  And the action setAuthedUser
 */
class Login extends Component {
  state = {
    userSelect: ''
  }
  componentDidUpdate () {
    const { authedUser } = this.props;
    if (authedUser) {
      this.state = {
        userSelect: authedUser
      }
    }
  }
  handleUserChange = (e) => {
    const userSelect = e.target.value
    this.state = {
      userSelect
    }
    console.log('state', userSelect);
    this.props.dispatch(setAuthedUser(userSelect))
  }
  render () {
    const { users, authedUser, setAuthedUser } = this.props;
    const { userSelect } = this.state;
    console.log('render: userSelect', this.state.userSelect);

    return (
      <div>
        <div>authedUser: {userSelect}</div>
        <select
          value={userSelect}
          onChange={this.handleUserChange}>
          {Object.keys(users).map(user => (
            <option key={user} value={user}>{users[user].name}</option>
          ))}
        </select>
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    users,
    authedUser
  }
}

/*
  We can do either mapDispatchToProps or mapStateToProps.
  In this component, we need to get all users from the store's "state" and
  we need to modify the store so we'll need a dispatch action.
  So we'll need to both options

  {Object.keys(users).forEach(user => {
    <option value={user}>asdf</option>
  })}


 */
export default connect(mapStateToProps)(Login)
