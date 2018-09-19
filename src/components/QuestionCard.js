import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handleInitialData } from '../actions/shared';
import { Grid, Col, Row, Button } from 'react-bootstrap'

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
        <Row className="card align-items-center">
          <Col xs={2} md={2} className="">
            <div key={question.id}>
              <div className="card-head">
                <img
                  className='avatar'
                  src={avatarURL}
                />
                <p>{username} asks...</p>
              </div>
            </div>
          </Col>
          <Col xs={8} md={9} className="card-body">
            <div className="card-body">
              <p>Would you rather {question.optionOne.text.split(' ').slice(0, 4).join(' ')}...</p>
            </div>
          </Col>
          <div className="card-tail">
          <Link to={`/questions/${question.id}`}>
          <Col xs={2} md={1} className="card-tail">
                <div class="glyphicon glyphicon-chevron-right" aria-hidden="true"></div>
          </Col>
          </Link>
          </div>
        </Row>

    )
  }
}

function mapStateToProps ({ users, authedUser, questions }, { id }) {
  const question = questions[id];
  const user = users[authedUser];
  const username = users[question.author].name;
  const avatarURL = users[question.author].avatarURL;

  return {
    users,
    username,
    question,
    user,
    avatarURL
  }
}

export default connect(mapStateToProps)(QuestionCard)
