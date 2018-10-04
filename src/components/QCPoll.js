import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { handleSaveAnswer } from '../actions/questions'
import QuestionSubmitted from './QuestionSubmitted'
import { Grid, Row, Col, Button, ButtonGroup,
} from 'react-bootstrap';

/*
What would be the point of seeing answered and unanswered polling
questions if we couldn’t actually vote or see the results?
Each polling question should link to the details of that poll.
The details of each poll should be available at questions/:question_id.

When a poll is clicked on the home page, the following is shown:

Text “Would You Rather”;
Avatar of the user who posted the polling question; and
Two options.
For answered polls, each of the two options contains the following:

Text of the option;
Number of people who voted for that option; and
Percentage of people who voted for that option.
The option selected by the logged-in user should be clearly marked.
 */

class QCPoll extends Component {
  state = {
    option: '',
    toHome: false
  };

  // When using ES6 code in React always use arrow functions,
  // because the "this" context is automatically binded with it

  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  handleChange = (e) => {
    const option = e.target.value
    this.setState(() => ({
      option
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const chosenAnswer = e.target.value
    const { user, question } = this.props;

    const answer = {
      authedUser: user.id,
      qid: question.id,
      answer: chosenAnswer
    }
    this.props.dispatch(handleSaveAnswer(answer))

    this.setState({
      toHome: true
    })
  }

  render () {
    const { users, question, user, isAnswered, username, avatarURL } = this.props;
    const { toHome } = this.state;
    console.log('', question);

    if (toHome === true) {
      return <Redirect to='/' />
    }

    if (!question) {
      return <Redirect to='/error' />
    }

    if ( users && question && user ) {
      if (isAnswered !== -1) {
        return (
          <QuestionSubmitted id={question.id}/>
        )
      }

      return (
        <Grid>
          <Row className="card no-gutters">
            <Col xs={2} md={2} className="no-gutters">
              <div key={question.id}>
                <div className="card-head">
                  <img
                    alt=''
                    className='avatar'
                    src={avatarURL}
                  />
                </div>
              </div>
            </Col>
            <Col xs={8} md={9} className="card-body">
              <div className="card-body no-gutters">
                <div className="card-body-asks">
                  <p>{username} asks...</p>
                </div>
                <p>Would you rather ... </p>
                  <ButtonGroup vertical>
                    <Button value='optionOne' type='button' onClick={this.handleSubmit} bsStyle="default">{question.optionOne.text}</Button>
                    <Button value='optionOne' type='button' onClick={this.handleSubmit} bsStyle="default">{question.optionTwo.text}</Button>
                  </ButtonGroup>
              </div>
            </Col>
          </Row>
        </Grid>
      )
    } else {
      return (<div></div>)
    }
  }
}

function checkIfAnswered (users, authedUser, id) {
  // Note: returns -1 if there is no match.
  return Object.keys(users[authedUser].answers).indexOf(id);
}

function mapStateToProps ({ users, authedUser, questions }, props) {

  const { id } = props.match.params;

  // If a user enters a bad question/:id path, this is the logic that checks.
  let question,
      isAnswered,
      avatarURL,
      username = null

  if (Object.keys(questions).indexOf(id) !== -1) {
    question = questions[id];
    avatarURL = users[question.author].avatarURL;
    username = users[question.author].name;
    isAnswered = checkIfAnswered(users, authedUser, id);
  }

  const user = users[authedUser];

  return {
    users,
    question,
    user,
    isAnswered,
    avatarURL,
    username
  }
}

export default withRouter(connect(mapStateToProps)(QCPoll))
