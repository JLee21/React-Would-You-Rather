import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
// import CenteredGrid from './Grid'
// import GuttersGrid from './Spacing'
// import GridBreakPoints from './GridBreakPoints'
import { handleInitialData } from '../actions/shared';
import Divider from '@material-ui/core/Divider';
import CenteredTabs from './Tab';
import NewQuestion from './NewQuestion';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import Login from './Login';

// Somewhere here I will need to check if the Store has the authed user.
// If not, then redirect to the login page.

class App extends Component {

  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div>
          <CenteredTabs />
          <Route path='/' exact component={Dashboard} />
          <Route path='/new' component={NewQuestion} />
          <Route path='/login' component={Login} />
          <Route path='/leaderboard' component={Leaderboard} />
        </div>
      </Router>
    );
  }
}

// <Route path='/questions/:question_id' component={Question} />

// Notice that we don't need anything from the state.
// This allows us to use `dispatch` from this.props
//
// Using the connect() function upgrades a component to a container.
// Containers can read state from the store and dispatch actions.
export default connect()(App)
