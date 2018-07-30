import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
// import CenteredGrid from './Grid'
// import GuttersGrid from './Spacing'
// import GridBreakPoints from './GridBreakPoints'
import Divider from '@material-ui/core/Divider';
import CenteredTabs from './Tab'
import NewQuestion from './NewQuestion'
import Dashboard from './Dashboard'
import Login from './Login'
import { handleInitialData } from '../actions/shared'

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
