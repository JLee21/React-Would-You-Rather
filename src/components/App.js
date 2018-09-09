import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
import QuestionContainer from './QuestionContainer'
import QCPoll from './QCPoll'
import NoMatch from './NoMatch'
import { Grid } from 'react-bootstrap'


class App extends Component {

  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props;

    return (
      <Router>
        {authedUser == null
          ? <div>
              <Login />
            </div>
          : <Grid fluid="true">
              <CenteredTabs />
              <Switch>
                <Route path='/' exact component={Dashboard} />
                <Route path='/questions/:id' component={QCPoll} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/login' component={Login} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route component={NoMatch} />
              </Switch>
            </Grid>
        }
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

function mapStateToProps ({ authedUser }) {

  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
