import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';

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
    console.log(votes.optionOne/votes.total * 100);
    return (
      <Grid>
        <Row>
          <Col xs={12} md={7} mdOffset={2} className="card no-gutters">
            <div className="card-head-horz">
              <img alt='' className='avatar' src={avatarURL}/>
              Asked by {askedBy}
              <p>Asked by {askedBy}</p>
            </div>
            <hr></hr>
            <div className="card-body-horz">
              <p>Would your rather {question.optionOne.text}?</p>
              {usersAnswer === 'optionOne' &&
                <span>
                  <div class="your-vote" aria-hidden="true">
                    Your Vote!
                  </div>
                </span>
              }
              <ProgressBar now={votes.optionOne/votes.total * 100} label={`${votes.optionOne} / ${votes.total}`} />
              <p>Would your rather {question.optionTwo.text}?</p>
              {usersAnswer === 'optionTwo' &&
                <span>
                  <div class="your-vote" aria-hidden="true">
                    Your Vote!
                  </div>
                </span>
              }
              <ProgressBar now={votes.optionTwo/votes.total * 100} label={`${votes.optionTwo} / ${votes.total}`} />

              <p>Total Votes: {votes.total}</p>
            </div>
          </Col>
        </Row>
    </Grid>
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
    optionTwo: question.optionTwo.votes.length,
    total: question.optionOne.votes.length + question.optionTwo.votes.length
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
