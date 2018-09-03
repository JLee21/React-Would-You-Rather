import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { handleSaveAnswer } from '../actions/questions'
import QuestionSubmitted from './QuestionSubmitted'

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

    const { user, question } = this.props;

    const answer = {
      authedUser: user.id,
      qid: question.id,
      answer: this.state.option
    }
    this.props.dispatch(handleSaveAnswer(answer))

    this.setState(() => {
      toHome: true
    })
  }

  render () {
    const { users, question, user, isAnswered } = this.props;
    const { toHome } = this.state;
    console.log('render toHome:', this.state.toHome);

    if (toHome === true) {
      return <Redirect to='/' />
    }

    if ( users && question && user ) {
      if (isAnswered != -1) {
        return (
          <QuestionSubmitted id={question.id}/>
        )
      }

      return (
        <div>
          <img
            className='avatar'
            src={users[question.author].avatarURL}
          />
          <p>{users[question.author].name} asks...</p>

          <form onSubmit={this.handleSubmit}>
           <label>
             <input
               type="radio"
               value="optionOne"
               checked={this.state.option === "optionOne"}
               onChange={this.handleChange}
             />
             {question.optionOne.text}
           </label>
           <hr></hr>
           <label>
             <input
               type="radio"
               value="optionTwo"
               checked={this.state.option === "optionTwo"}
               onChange={this.handleChange}
             />
             {question.optionTwo.text}
           </label>
           <button
            type="submit"
            disabled={this.state.option == ''}
          >Vote</button>
         </form>
        </div>
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
  const question = questions[id];
  const user = users[authedUser];

  const isAnswered = checkIfAnswered(users, authedUser, id);

  return {
    users,
    question,
    user,
    isAnswered
  }
}

export default withRouter(connect(mapStateToProps)(QCPoll))
