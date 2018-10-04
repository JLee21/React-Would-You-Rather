import React, { Component } from 'react'
import QuestionCard from './QuestionCard';

/*
  This component is responsible for receiving a list of Question IDs,
  This ID is passed down to the QuestionCard (which is mostly presentational).
 */

class QuestionContainer extends Component {

  render () {
    const { questions } = this.props;
    console.log('QC questions', questions);

    return (
      <div>
        { // Display multiple unanswered questions
          questions && questions.map(id => {
          return (
            <QuestionCard key={id} id={id} />
          )
        })}
      </div>
    )
  }
}

export default QuestionContainer
