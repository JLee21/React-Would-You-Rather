import React, { Component } from 'react'
import { connect } from 'react-redux'

/*
Once the user logs in, the user should be able to toggle between
his/her answered and unanswered polls on the home page, which is
located at the root. The polls in both categories are arranged from
the most recently created (top) to the least recently created (bottom).
The unanswered questions should be shown by default, and the name
of the logged in user should be visible on the page.

Based on the authedUser, get that users answered and unanswered questions.
Both in a list of question IDs.
Pass these lists to QuestionCol component.
*/

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswered: false,
    }
    this.handleAnsweredToggle = this.handleAnsweredToggle.bind(this)
  }

  getUnansweredQuestions () {
    // Get all question IDs that are not in answeres.
    const { users, authedUser } = this.props;
    const answered = this.getAnsweredQuestion()
    if ( users && authedUser && answered ) {
      const questions = users[authedUser].questions;
      return questions.filter(value => -1 == answered.indexOf(value));
    }
  }

  getAnsweredQuestion (questions) {
    const { users, authedUser } = this.props;
      if ( users && authedUser ) {

        // Only get the keys which are just the question IDs.
        return Object.keys(users[authedUser].answers)
    }
  }

  handleAnsweredToggle () {
    this.setState((prevState) => ({
      showAnswered: !prevState.showAnswered
    }))
  }

  render () {
    const { authedUser } = this.props;
    const { showAnswered } = this.state;
    return (
      <div>
        <p>{authedUser}</p>
        <button onClick={this.handleAnsweredToggle}>
          <h1>Answered</h1>
        </button>
        <button onClick={this.handleAnsweredToggle}>
          <h1>Unanswered</h1>
        </button>
        {showAnswered
          ? <p>Answered: {this.getAnsweredQuestion()}</p>
          : <p>Unanswered: {this.getUnansweredQuestions()}</p>
        }
      </div>
    )
  }
}

function mapStateToProps ({ qustions, users, authedUser }) {
  return {
    qustions,
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)
