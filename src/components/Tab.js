import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProfileTab from './ProfileTab';


class CenteredTabs extends React.Component {

  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };
  getUserNameFromID = () => {
    const { authedUser, users } = this.props
    const user = users[authedUser];
    return authedUser
  }

  render() {
    const { authedUser } = this.props;

    return (
      <div className=''>
        <nav className=''>
          <NavLink to='/' exact>Home</NavLink>
          <NavLink to='/new' activeClassName='active'>New Question</NavLink>
          <NavLink to='/leaderboard' activeClassName='active'>Leader Board</NavLink>
          <NavLink to='/login' activeClassName='active'>
            <div className='user-login'>
              <ProfileTab authedUser={this.getUserNameFromID()}/>
            </div>
          </NavLink>
        </nav>
      </div>
    )
  }
}

CenteredTabs.propTypes = {

};

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser, users
  }
}

export default connect(mapStateToProps)(CenteredTabs);
