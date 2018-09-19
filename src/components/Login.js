import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import PropTypes from 'prop-types';
import { Grid, Row, Col, Button, FieldGroup, FormGroup, ControlLabel,
  FormControl, Panel
} from 'react-bootstrap';

/*
  Get from the store: all users and authedUser.
  And the action setAuthedUser
 */
class Login extends Component {
  state = {
    userSelect: '',
    toHome: false
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
    this.setState({
      userSelect,
      toHome: true
    })
    this.props.dispatch(setAuthedUser(userSelect))
  }
  render () {
    const { users, avatarURL, authedUser, setAuthedUser } = this.props;
    const { toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/'/>
    }

    return (
      <Grid>
        <Row className="justify-content-center">
          <Col xs={12} md={3} mdOffset={4}>
            <h1>Sign In</h1>
            <form onChange={this.handleUserChange}>
              <FormGroup controlId="formControlsSelect">
                <FormControl componentClass="select" placeholder="select">
                  <option key={0}>
                    Select..
                  </option>
                  {Object.keys(users).map(user => (
                    <option key={user} value={user}>
                      {users[user].name}
                    </option>
                  ))}
                </FormControl>
              </FormGroup>
            </form>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={3} mdOffset={4}>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  let avatarURL
  if (users[authedUser]) {
    const avatarURL = users[authedUser].avatarURL;
  }


  return {
    users,
    avatarURL,
    authedUser
  }
}

/*
  We can do either mapDispatchToProps or mapStateToProps.
  In this component, we need to get all users from the store's "state" and
  we need to modify the store so we'll need a dispatch action.
  So we'll need to both options
 */
export default connect(mapStateToProps)(Login)
