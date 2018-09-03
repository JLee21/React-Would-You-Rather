import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import QuestionCard from './QuestionCard';

/*
  This component is responsible for receiving a list of Question IDs,
  This ID is passed down to the QuestionCard (which is mostly presentational).
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

function mapStateToProps ({ }, props) {

  const { questions } = props

  return {
    questions
  }
}

export default withRouter(connect(mapStateToProps)(QuestionContainer))
