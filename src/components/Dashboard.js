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
  state = {
    showAnswered: false,
  }

  handleAnsweredToggle = (e) => {
    e.preventDefault()
    console.log(e.target.value);
    this.setState((prevState) => ({
      showAnswered: !prevState.showAnswered
    }))
  }

  render () {
    const { authedUser, answeredSorted, unansweredSorted } = this.props;
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
              <QuestionContainer questions={answeredSorted}/>
            </div>
          : <div>
              <p>Unanswered</p>
              <QuestionContainer questions={unansweredSorted}/>
            </div>
        }
      </div>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }) {

  // Answered questions, timestamp sorted
  const answered = Object.keys(users[authedUser].answers)
  const answeredSorted = answered.sort((a,b) => questions[b].timestamp - questions[a].timestamp)

  // Unanswered questions, timestamp sorted
  const questionIDs = Object.keys(questions)
  const unanswered = questionIDs.filter((id) => -1 == answered.indexOf(id))
  const unansweredSorted = unanswered.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  console.log('answered:', answered);
  return {
    answeredSorted,
    unansweredSorted,
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)
