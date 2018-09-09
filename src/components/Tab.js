import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProfileTab from './ProfileTab';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class CenteredTabs extends React.Component {

  render() {
    const { username } = this.props;

    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to='/' exact>Would You Rather...</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>
              <NavLink to='/' activeClassName='active'>Questions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/add' activeClassName='active'>New Question</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/leaderboard' activeClassName='active'>Leader Board</NavLink>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>
              <NavLink to='/login' activeClassName='active'>
                  Welcome {username}!
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

CenteredTabs.propTypes = {

};

function mapStateToProps ({ authedUser, users }) {
  const username = users[authedUser].name
  return {
    username,
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(CenteredTabs);
