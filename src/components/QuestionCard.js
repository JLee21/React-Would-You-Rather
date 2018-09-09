import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handleInitialData } from '../actions/shared';

/*
What would be the point of seeing answered and unanswered polling
questions if we couldn’t actually vote or see the results?
Each polling question should link to the details of that poll.
The details of each poll should be available at questions/:question_id.

When a poll is clicked on the home page, one of the two following is shown:

O N E
Text “Would You Rather”;
Avatar of the user who posted the polling question; and
Two options.

T W O
For answered polls, each of the two options contains the following:
Text of the option;
Number of people who voted for that option; and
Percentage of people who voted for that option.
The option selected by the logged-in user should be clearly marked.
 */

class QuestionCard extends Component {

  // This is needed bc if the user happens to navigate to a question via URL
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    const { question, username, avatarURL } = this.props;

    return (
      <div key={question.id}>
        <hr></hr>
        <img
          className='avatar'
          src={avatarURL}
        />
        <p>{username} asks...</p>
        <p>Would you rather {question.optionOne.text.split(' ').slice(0, 5).join(' ')}...</p>
        <Link to={`/questions/${question.id}`}>
          <button>
            View Poll!
          </button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser, questions }, { id }) {
  const question = questions[id];
  const user = users[authedUser]
  const username = users[question.author].name
  const avatarURL = users[question.author].avatarURL;

  return {
    users,
    question,
    user,
    avatarURL
  }
}

export default connect(mapStateToProps)(QuestionCard)
