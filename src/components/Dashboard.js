import React, { Component } from 'react'
import { connect } from 'react-redux'

import QuestionContainer from './QuestionContainer'

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

  getAnswered () {
    const { users, authedUser } = this.props;

    if ( users && authedUser) {
      return Object.keys(users[authedUser].answers)
    } else {
      return []
    }
  }

  handleAnsweredToggle () {
    this.setState((prevState) => ({
      showAnswered: !prevState.showAnswered
    }))
  }

  render () {
    const { authedUser, questions } = this.props;
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
          ? <div>
              <p>Answered</p>
              <QuestionContainer questions={this.getAnswered()}/>
            </div>
          : <div>
              <p>Unanswered</p>
              <QuestionContainer questions={questions}/>
            </div>
        }
      </div>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }) {

  return {
    questions: Object.keys(questions),
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)
