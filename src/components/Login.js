import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { Grid, Row, Col, Button, FormGroup, FormControl
} from 'react-bootstrap';

/*
  Get from the store: all users and authedUser.
  And the action setAuthedUser
 */
class Login extends Component {
  state = {
    toHome: false
  }
  handleUserSignIn = (e) => {
    const userSelect = e.target.value
    if (this.props.pathname === '/login') {
      this.props.history.push('/')
    }
    this.props.dispatch(setAuthedUser(userSelect))
  }
  signOff = () => {
    this.props.history.push('/')
    this.props.dispatch(setAuthedUser(null))
  }
  render () {
    const { users, authedUser, pathname } = this.props;
    const { toHome } = this.state;

    return (
      <Grid>
        <Row className="justify-content-center">
          <Col xs={12} md={3} mdOffset={4}>
            <h1>Sign In</h1>
            <form onChange={this.handleUserSignIn}>
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
          {authedUser &&
            <Button
              bsStyle="primary"
              block
              onClick={this.signOff}>
              SIGN OFF
            </Button>
          }
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps ({ users, authedUser }, props) {

  const { pathname } = props.location

  return {
    users,
    authedUser,
    pathname
  }
}

/*
  We can do either mapDispatchToProps or mapStateToProps.
  In this component, we need to get all users from the store's "state" and
  we need to modify the store so we'll need a dispatch action.
  So we'll need to both options
 */
export default withRouter(connect(mapStateToProps)(Login))
