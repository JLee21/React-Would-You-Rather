import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import QuestionCard from './QuestionCard';

/*
  This component is responsible for receiving a list of Question IDs,
  grabbing any pertinent question data based on that ID, and then
  passing that derived data down to the QuestionCard.
 */

class QuestionContainer extends Component {

  render () {
    const { id, questions } = this.props;

    return (
      <div>
        {id &&
          <QuestionCard id={id} />
        }
        {questions && questions.map(id => {
          return (
            <QuestionCard id={id} />
          )
        })}
      </div>
    )
  }
}

function mapStateToProps ({ }, props) {

  // const { id } = props.match.params
  console.log('props:', props);
  const id = ''
  return {
    id,
    questions: props.questions
  }
}

export default connect(mapStateToProps)(QuestionContainer)
