import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import QuestionCard from './QuestionCard';

/*
  This component is responsible for receiving a single question ID
  or a list of Question IDs,
  This ID is passed down to the QuestionCard.
  Peform logic that checks if the currently signed-in user has asked the
  very question that is passed in.
 */

class QuestionContainer extends Component {

  render () {
    const { questions } = this.props;

    return (
      <div>


        { // Display multiple unanswered questions
          questions && questions.map(id => {
          return (
            <QuestionCard id={id} />
          )
        })}
      </div>
    )
  }
}

function checkIfAnswered () {
  return
}

function mapStateToProps ({ }, props) {

  const { questions } = props

  return {
    questions
  }
}

export default withRouter(connect(mapStateToProps)(QuestionContainer))
