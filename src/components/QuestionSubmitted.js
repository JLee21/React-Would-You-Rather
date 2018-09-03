import React, { Component } from 'react'
import { connect } from 'react-redux'

/*
  Display:
    √ Author who asked
    √ Your answer
    The question and its options
    the number of answers per question
 */

class QuestionSubmitted extends Component {
  render () {
    const { usersAnswer, askedBy, avatarURL, question, votes } = this.props
    return (
      <div>
        Asked by {askedBy}
        <img
          className='avatar'
          src={avatarURL}
        />
        <hr></hr>
        Results
        <br></br>
        {question.optionOne.text}
        Votes {votes.optionOne}
        {usersAnswer == 'optionOne' &&
          <p>Your Vote!</p>
        }
        <br></br>
        {question.optionTwo.text}
        Votes {votes.optionTwo}
        {usersAnswer == 'optionTwo' &&
          <span> <p>Your Vote!</p> </span>
        }
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser, questions }, props) {
  const questionID = props.id;
  const question = questions[questionID];
  const askedBy = users[question.author].name;
  const avatarURL = users[question.author].avatarURL;
  const usersAnswer = users[authedUser].answers[questionID];
  const votes = {
    optionOne: question.optionOne.votes.length,
    optionTwo: question.optionTwo.votes.length
  }

  return {
    usersAnswer,
    askedBy,
    avatarURL,
    question,
    votes
  }
}

export default connect(mapStateToProps)(QuestionSubmitted)
